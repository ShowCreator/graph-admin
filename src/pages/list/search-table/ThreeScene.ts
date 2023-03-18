/*
 * @Author: sfy
 * @Date: 2023-03-08 22:17:59
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-16 23:40:30
 * @FilePath: /graph-sam/src/pages/list/search-table/ThreeScene.ts
 * @Description: update here
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const sizes = {
  width: 800,
  height: 600,
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
    // 设置照相机
    this.camera = new THREE.PerspectiveCamera(
      90,
      sizes.width / sizes.height,
      1,
      1000
    );
    this.camera.position.z = 10;
    this.scene.add(this.camera)

    this.loadTool()
    this.loadTick()
    this.fullScreen()
  }

  loadTool() {
  
    // 添加坐标轴辅助器
    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);

    // lights
    const ambientLight = new THREE.AmbientLight( 0xffffff );
    this.scene.add( ambientLight );

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });

    this.renderer.setSize(sizes.width, sizes.height);
    console.log(this.renderer, 'this.renderer');
    
    this.renderer.render(this.scene, this.camera);
  }

  loadTick() {
    const clock = new THREE.Clock();
    const tick = () => {
      let time = clock.getElapsedTime();
      // Update controls
      this.controls.update();

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
}