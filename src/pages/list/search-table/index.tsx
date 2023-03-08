/*
 * @Author: sfy
 * @Date: 2023-02-23 19:30:46
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-05 23:04:27
 * @FilePath: /graph-sam/src/pages/list/search-table/index.tsx
 * @Description: update here
 */
import { Card } from '@arco-design/web-react';
import React, { useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import * as dat from 'lil-gui';

function SearchTable() {
  useEffect(() => {
    const canvas = document.querySelector('canvas.webgl');

    const sizes = {
      width: 800,
      height: 600,
    };

    const cursor = {
      x: 0,
      y: 0,
    };
    window.addEventListener('mousemove', (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = -(event.clientY / sizes.height - 0.5);
    });
    // scene
    const scene = new THREE.Scene();

    /**
     * ================================================
     */
    const pointsArray = [];
    pointsArray.push(10, 20, 10);

    pointsArray.push(10, 200, 10);

    //用这个api传入顶点数组pointsArray

    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({ vertexColors: true });

    const colors = [];
    const r = 10;
    for (let i = 0; i < pointsArray.length; i++) {
      // colors
      colors.push(pointsArray[i].x / r + 0.5);
      colors.push(pointsArray[i].y / r + 0.5);
      colors.push(pointsArray[i].z / r + 0.5);
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(pointsArray, 3)
    );
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    geometry.computeBoundingSphere();

    const line = new THREE.Line(geometry, material);
    scene.add(line);

    /**
     * ================================================
     */

    const camera = new THREE.PerspectiveCamera(
      90,
      sizes.width / sizes.height,
      1,
      1000
    );

    camera.position.z = 3;
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    //debug
    // const parameters = {
    //   color: 0xff0000,
    //   spin: () => {
    //     gsap.to(mesh.rotation, 1, { y: mesh.rotation.y + Math.PI * 2 });
    //   },
    // };
    // const gui = new dat.GUI({
    //   width: 400,
    // });
    // gui.add(mesh.position, 'y').max(3).step(0.01).name('elevation');
    // gui.add(mesh, 'visible');
    // gui.add(material, 'wireframe');
    // gui.addColor(parameters, 'color').onChange(() => {
    //   material.color.set(parameters.color);
    // });

    // gui.add(parameters, 'spin');

    // Animate
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();

    window.addEventListener('dblclick', () => {
      const fullscreenElement =
        document.fullscreenElement || document.webkitFullscreenElement;

      if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
          canvas.requestFullscreen();
        } else if (canvas.webkitRequestFullscreen) {
          canvas.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    });
  }, []);

  return (
    <Card>
      <canvas className="webgl"></canvas>
    </Card>
  );
}

export default SearchTable;
