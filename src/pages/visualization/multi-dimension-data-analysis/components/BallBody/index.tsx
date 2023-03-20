/*
 * @Author: sfy
 * @Date: 2023-03-05 14:41:54
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-18 23:54:34
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/components/BallBody/index.tsx
 * @Description: update here
 */
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from '@react-three/drei';
function BallBody(props) {

  const group = useRef()
  const gltf = useGLTF('../../../../../../public/glb/ball.glb')
  console.log(gltf, 'gltfgltf');

  const  { nodes, materials } = gltf
  

  return (
    <>
    
    <group ref={group} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["球体001"].geometry}
        material={materials["材质.002"]}
        position={[0, 8, 0]}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["柱体"].geometry}
        material={materials["材质.001"]}
      />
      
    </group>
    </>
  );
}

useGLTF.preload('../../../../../../public/glb/ev.glb')

 export default BallBody
