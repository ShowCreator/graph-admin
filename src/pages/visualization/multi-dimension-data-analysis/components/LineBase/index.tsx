/*
 * @Author: sfy
 * @Date: 2023-03-19 20:59:14
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-20 22:25:27
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/components/LineBase/index.tsx
 * @Description: update here
 */
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Environment, Lightformer, Line, OrbitControls, PivotControls, Sky, useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three'

function LineBase({start, end}) {
  const texture = useLoader(THREE.TextureLoader, '../../../../../../public/image/flowline.png')
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; //每个都重复
  texture.repeat.set(1, 1)
  texture.needsUpdate = true


  const points = [new THREE.Vector3(start[0], start[1], start[2]),
    new THREE.Vector3(end[0], end[1], end[2]),
  ]

  const curve = new THREE.CatmullRomCurve3(points) // 曲线路径

  const ref = useRef()

  useFrame((state, delta) => {
    // console.log(ref, 'ref');
    texture.offset.x -= 0.001
  })

  return (
    <mesh  ref={ref} >
      <tubeGeometry args={[curve, 80, 2]}></tubeGeometry>
      <meshBasicMaterial  
      map={texture}
      transparent={true}
      side={THREE.BackSide}
      ></meshBasicMaterial>
    </mesh>
    )
}

export default LineBase