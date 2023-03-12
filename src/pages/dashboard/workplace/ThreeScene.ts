/*
 * @Author: sfy
 * @Date: 2023-03-10 16:31:30
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-12 00:07:09
 * @FilePath: /graph-sam/src/pages/dashboard/workplace/ThreeScene.ts
 * @Description: update here
 */
/*
 * @Author: sfy
 * @Date: 2023-03-08 22:17:59
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-08 23:30:23
 * @FilePath: /graph-sam/src/pages/list/search-table/ThreeScene.ts
 * @Description: update here
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const sizes = {
  width: window.innerWidth,
  height:  window.innerHeight,
};

export class ThreeScene {

  public canvas:Element
  public controls:OrbitControls
  public scene: THREE.Scene
  public renderer: THREE.WebGLRenderer
  public camera: THREE.PerspectiveCamera


  constructor() {
    this.canvas = document.querySelector('canvas.webgl');
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xf0f0f0 );
    // 设置照相机
    this.camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      1,
      10000
    );

    this.camera.position.set( 500, 800, 1300 );
    this.camera.lookAt( 0, 0, 0 );
    this.scene.add(this.camera)

    this.loadTool()
    this.loadTick()
    // this.fullScreen()
  }

  loadTool() {
  
    // grid
    const gridHelper = new THREE.GridHelper( 1000, 20 );
    this.scene.add( gridHelper );
   
    // lights
    const ambientLight = new THREE.AmbientLight( 0x606060 );
    this.scene.add( ambientLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 1, 0.75, 0.5 ).normalize();
    this.scene.add( directionalLight );

    // this.controls = new OrbitControls(this.camera, this.canvas);
    // this.controls.enableDamping = true;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });

    this.renderer.setSize(sizes.width, sizes.height);
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.render(this.scene, this.camera);
  }

  loadTick() {
    const clock = new THREE.Clock();
    const tick = () => {
      let time = clock.getElapsedTime();
      // Update controls
      // this.controls.update();

      // Render
      this.renderer.render(this.scene, this.camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }


  fullScreen() {
    window.addEventListener('dblclick', () => {
      const fullscreenElement =
        document.fullscreenElement || document.webkitFullscreenElement;

      if (!fullscreenElement) {
        if (this.canvas.requestFullscreen) {
          this.canvas.requestFullscreen();
        } else if (this.canvas.webkitRequestFullscreen) {
          this.canvas.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    });
  }

  render() {
    this.renderer.render( this.scene, this.camera );
  }
}