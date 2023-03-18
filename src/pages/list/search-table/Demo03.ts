/*
 * @Author: sfy
 * @Date: 2023-03-08 23:27:55
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-09 22:56:57
 * @FilePath: /graph-sam/src/pages/list/search-table/Demo.ts
 * @Description: update here
 */
import * as THREE from 'three';

import { ThreeScene } from "./ThreeScene";


export class Demo03 extends ThreeScene {

    constructor() {
        super()
        this.initBox()
    }

    initBox() {
        const cubeGeometry = new THREE.BoxGeometry(1,1,1)
        const material = new THREE.MeshBasicMaterial({
            wireframe: true
        })

        const redMaterial = new THREE.MeshBasicMaterial({
            color: '#ff0000'
        })
        // 1000立方体
        let cubeArr = []
        for(let i = -5; i<5; i++) {
            for(let j = -5; j<5; j++) {
                for(let z = -5; z <5;z++) {
                    const cube = new THREE.Mesh(cubeGeometry, material)
                    cube.position.set(i, j, z);
                    this.scene.add(cube)
                    cubeArr.push(cube)
                }
            }
        }

        // 创建投射光线对象
        const raycaster = new THREE.Raycaster();

        // 鼠标的位置对象
        const mouse = new THREE.Vector2();

        window.addEventListener("mousemove", (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 -1
            mouse.y = -((event.clientY / window.innerHeight) * 2 -1)
            raycaster.setFromCamera(mouse, this.camera)
            let result = raycaster.intersectObjects(cubeArr)
            console.log(result, 'result')
            result.forEach((item) => {
                item.object.material = redMaterial
            })
        })

    }

}