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


const params = {
    count: 10000,
    size: 0.1,
    radius: 5,
    branch: 3,
    color: "#ff6030",
    rotateScale: 0.3,
    endColor: "#1b3984",
};
export class Demo02 extends ThreeScene {
    private geometry;
    private material;
    private points;
    private particlesTexture;

    constructor() {
        super()
        // const textureLoader = new THREE.TextureLoader();
        // this.particlesTexture = textureLoader.load("./textures/particles/1.png");
        this.generateGalaxy()
    }

    generateGalaxy() {
        const centerColor = new THREE.Color(params.color);
        const endColor = new THREE.Color(params.endColor);
        // 生成顶点
        this.geometry = new THREE.BufferGeometry();
        // 随机生成位置
        const positions = new Float32Array(params.count * 3);
        // 设置顶点颜色
        const colors = new Float32Array(params.count * 3)
        // 循环生成点
        for(let i =0; i< params.count; i++) {
            // 当前的点应该在那一条分钟的角度上
            const branchAngel = (i % params.branch) * ((2 * Math.PI) / params.branch);
            // 当前点距离圆心的距离
            const distance = Math.random() * params.radius * Math.pow(Math.random(), 3);

            const current = i * 3;
            const randomX =
                (Math.pow(Math.random() * 2 - 1, 3) * (params.radius - distance)) / 5;
            const randomY =
                (Math.pow(Math.random() * 2 - 1, 3) * (params.radius - distance)) / 5;
            const randomZ =
                (Math.pow(Math.random() * 2 - 1, 3) * (params.radius - distance)) / 5;

            positions[current] =
                Math.cos(branchAngel + distance * params.rotateScale) * distance +
                randomX;
            positions[current + 1] = 0 + randomY;
            positions[current + 2] =
                Math.sin(branchAngel + distance * params.rotateScale) * distance +
                randomZ;

            // 混合颜色，形成渐变色
            const mixColor = centerColor.clone();
            mixColor.lerp(endColor, distance / params.radius);

            colors[current] = mixColor.r;
            colors[current + 1] = mixColor.g;
            colors[current + 2] = mixColor.b;
        }
        console.log(positions, 'positions')
        this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        this.material = new THREE.PointsMaterial({
            size: params.size,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            transparent: true,
            vertexColors: true,
        })

        this.points = new THREE.Points(this.geometry, this.material);
        this.scene.add(this.points)
    }
}