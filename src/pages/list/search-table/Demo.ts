/*
 * @Author: sfy
 * @Date: 2023-03-08 23:27:55
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-09 22:56:57
 * @FilePath: /graph-sam/src/pages/list/search-table/Demo.ts
 * @Description: update here
 */
import { Point } from 'bizcharts';
import * as THREE from 'three';

import { ThreeScene } from "./ThreeScene";


export class Demo extends ThreeScene {
  constructor() {
    super()
    console.log(this);
    this.loadGeo()
    this.loadPoint()
  }

  loadGeo() {
    const greenBoxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    const greenBoxmaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const greenCube = new THREE.Mesh( greenBoxGeometry, greenBoxmaterial );
    console.log(greenCube, 'cube');
    greenCube.position.set(5,5,0)
    this.scene.add( greenCube );

    const nGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    const nMaterial = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    const nCube = new THREE.Mesh( nGeometry, nMaterial )
    this.scene.add( nCube );

    const start = new THREE.Vector3( 0, 0, 0 )
    const end = new THREE.Vector3( 5, 5, 0 )
    const material = new THREE.LineBasicMaterial({
      color: 0xffffff
    });
    const points = [start, end];
    
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    const line = new THREE.Line( geometry, material );
    this.scene.add( line );
  }

  loadPoint() {
    const vertices = [];

    for ( let i = 0; i < 10000; i ++ ) {

    	const x = THREE.MathUtils.randFloatSpread( 2000 );
    	const y = THREE.MathUtils.randFloatSpread( 2000 );
    	const z = THREE.MathUtils.randFloatSpread( 2000 );

    	vertices.push( x, y, z );

    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

    const material = new THREE.PointsMaterial( { color: '#fff' } );

    const points = new THREE.Points( geometry, material );

    this.scene.add( points );

  }
}