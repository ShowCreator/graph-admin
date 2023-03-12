/*
 * @Author: sfy
 * @Date: 2023-03-10 16:32:12
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-12 00:03:06
 * @FilePath: /graph-sam/src/pages/dashboard/workplace/Demo.ts
 * @Description: update here
 */

import { Point } from 'bizcharts';
import * as THREE from 'three';

import { ThreeScene } from "./ThreeScene";


export class Demo extends ThreeScene {

  private rollOverMesh :THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>
  private plane:THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>
  private rollOverMaterial: THREE.MeshBasicMaterial
  private raycaster: THREE.Raycaster
  private pointer: THREE.Vector2 
  private objects =[]
  private cubeGeo: THREE.BoxGeometry
  private cubeMaterial: THREE.MeshLambertMaterial
  private isShiftDown = false

  constructor() {
    super()
      // roll-over helpers
  		const rollOverGeo = new THREE.BoxGeometry( 50, 50, 50 );
      this.rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );
  		this.rollOverMesh = new THREE.Mesh( rollOverGeo, this.rollOverMaterial );
  		this.scene.add( this.rollOverMesh );
      // cubes
			this.cubeGeo = new THREE.BoxGeometry( 50, 50, 50 );
		  this.cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xfeb74c });
      //
      this.raycaster = new THREE.Raycaster();
      this.pointer = new THREE.Vector2();
  
      const geometry = new THREE.PlaneGeometry( 1000, 1000 );
      geometry.rotateX( - Math.PI / 2 );
  
      this.plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: false } ) );
      this.scene.add( this.plane );
  
      this.objects.push( this.plane );

    console.log(this, '-----');
      

      this.canvas.addEventListener( 'pointermove', this.onPointerMove.bind(this), false );
			this.canvas.addEventListener( 'pointerdown', this.onPointerDown.bind(this), false );
			this.canvas.addEventListener( 'keydown', this.onDocumentKeyDown.bind(this), false );
			this.canvas.addEventListener( 'keyup', this.onDocumentKeyUp.bind(this), false );
  }
  onPointerMove( event ) {

    console.log(this);
    
    this.pointer.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );

    this.raycaster.setFromCamera( this.pointer, this.camera );

    const intersects = this.raycaster.intersectObjects( this.objects, false );

    if ( intersects.length > 0 ) {

      const intersect = intersects[ 0 ];

      this.rollOverMesh.position.copy( intersect.point ).add( intersect.face.normal );
      this.rollOverMesh.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );
      this.render()
    }
  }
  onPointerDown( event ) {
    this.pointer.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );

    this.raycaster.setFromCamera( this.pointer, this.camera );

    const intersects = this.raycaster.intersectObjects( this.objects, false );

    if ( intersects.length > 0 ) {

      const intersect = intersects[ 0 ];

      // delete cube

      if ( this.isShiftDown ) {

        if ( intersect.object !== this.plane ) {

          this.scene.remove( intersect.object );

          this.objects.splice( this.objects.indexOf( intersect.object ), 1 );

        }

        // create cube

      } else {
        const voxel = new THREE.Mesh( this.cubeGeo, this.cubeMaterial );
        voxel.position.copy( intersect.point ).add( intersect.face.normal );
        voxel.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );
        this.scene.add( voxel );
        this.objects.push( voxel );
      }

      this.render();

    }

  }
  onDocumentKeyDown( event ) {
    switch ( event.keyCode ) {
      case 16: this.isShiftDown = true; break;
    }
  }

  onDocumentKeyUp( event ) {
    switch ( event.keyCode ) {
      case 16: this.isShiftDown = false; break;
    }
  }
}