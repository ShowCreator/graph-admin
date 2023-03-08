/*
 * @Author: sfy
 * @Date: 2023-03-05 23:17:51
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-06 00:04:24
 * @FilePath: /graph-sam/src/pages/list/card/LoadMessage.js
 * @Description: update here
 */
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

import { CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { Line2 } from 'three/examples/jsm/lines/Line2';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';

export class LoadMessage {
  constructor() {
    this.container = null;
    this.camera = null;
    this.scene = null;
    this.renderer = null;
    this.mainControls = null;
    this.html3Renderer = new CSS3DRenderer();
    console.log('222');
    this.init();
    this.animate();
  }

  init() {
    this.container = document.createElement('div');
    document.getElementById('info').appendChild(this.container);
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    this.camera.position.set(0, 200, 350);
    this.camera.lookAt(0, 0, 0);

    this.scene = new THREE.Scene();

    const axesHelper = new THREE.AxesHelper(500);
    this.scene.add(axesHelper);

    const sun = new THREE.DirectionalLight(0xffffff, 1.0);
    sun.position.set(300, 400, 175);
    this.scene.add(sun);

    const sun2 = new THREE.DirectionalLight(0x40a040, 0.6);
    sun2.position.set(-100, 350, -200);
    this.scene.add(sun2);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
    this.html3Renderer.setSize(window.innerWidth, window.innerHeight);
    this.html3Renderer.domElement.style.position = 'absolute';
    this.html3Renderer.domElement.style.top = '0px';
    this.html3Renderer.domElement.id = 'clickDiv';
    this.container.appendChild(this.html3Renderer.domElement);
    this.stats = new Stats();
    this.container.appendChild(this.stats.dom);

    this.initControls();

    this.addMesh();

    // createSpheres();
  }
  initControls(enabled) {
    this.mainControls = new OrbitControls(
      this.camera,
      this.html3Renderer.domElement
    );
    this.mainControls.maxPolarAngle = (Math.PI * 80) / 180;
    this.mainControls.minPolarAngle = (Math.PI * 0) / 180; //俯视角
    this.mainControls.minDistance = 4;
    this.mainControls.maxDistance = 900;
    this.mainControls.enabled = true;
    this.mainControls.enablePan = true;
  }

  addElement(
    num = 1,
    bgcolor = '#fff',
    circleColor = '#000',
    fontsize = 16,
    fontcolor = '#000',
    text = '信息框'
  ) {
    const element = document.createElement('div');
    element.className = 'element';
    element.style = `display: inline-block;
                      background: #ffffff;
                      border-radius: 25px;
                      align-items: center;
                      overflow: hidden;
                      `;
    element.innerHTML = `<span style="padding: 15px 15px; display: inline-block">
        <p style="display: flex; align-items: center">
                  ${
                    num > 0
                      ? ' <i style="border-radius: 50%;display: inline-block;background:' +
                        circleColor +
                        '; color: ' +
                        bgcolor +
                        '; width: 20px; height: 20px; text-align: center; font-style: normal; line-height: 20px; font-weight: 800;">' +
                        num +
                        '</i>'
                      : ''
                  }

        <i  style="margin-left: 5px;font-style: normal;height: 20px;line-height: 20px; font-size: ${fontsize}px;color: ${fontcolor};">${text}</i>
        </p>
    </span>`;

    return element;
  }
  addMesh(position = { x: 20, y: 80, z: 4 }, height = 20) {
    //模型
    const geometry = new THREE.CylinderGeometry(50, 50, 20, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const cylinder = new THREE.Mesh(geometry, material);
    // // 1.头部信息框
    const objectCSS = new CSS3DSprite(this.addElement());

    objectCSS.scale.set(1, 1, 1);
    cylinder.add(objectCSS);
    objectCSS.position.set(
      position.x,
      position.y + (height * 3) / 4,
      position.z
    );

    //2.  虚线连接

    const points = [];
    points.push(position.x, position.y + (height * 3) / 4, position.z);
    points.push(0, 10 + height / 4, 0); //偏移量
    const frameGeometry = new LineGeometry();
    frameGeometry.setPositions(points);
    const frameMaterial = new LineMaterial({
      color: 0xffffff,
      linewidth: 2,
      dashed: true,
      dashSize: 8,
      gapSize: 2,
      dashScale: 1,
      worldUnits: true,
    });
    frameMaterial.resolution.set(window.innerWidth, window.innerHeight);
    const frameLine = new Line2(frameGeometry, frameMaterial);
    frameLine.computeLineDistances();

    // 3.底部球
    this.lineAndDot = new THREE.TextureLoader().load(
      'https://img95.699pic.com/element/40114/0827.png_860.png'
    );
    const materialB = new THREE.SpriteMaterial({
      map: this.lineAndDot,
      transparent: true,
    });
    const spriteB = new THREE.Sprite(materialB);

    const geometryB = new THREE.CircleGeometry(height / 4, 32);
    spriteB.geometry = geometryB;
    spriteB.position.set(0, 10 + height / 4, 0);
    cylinder.add(spriteB);

    cylinder.add(frameLine);

    cylinder.renderOrder = 10;
    this.scene.add(cylinder);
  }

  animate() {
    const tick = () => {
      requestAnimationFrame(tick);
      this.mainControls.update();
      this.render();
      this.stats.update();
      // Call tick again on the next frame
    };
    tick();
  }

  render() {
    // Render
    this.renderer.render(this.scene, this.camera);
    this.html3Renderer.render(this.scene, this.camera);
  }
}
