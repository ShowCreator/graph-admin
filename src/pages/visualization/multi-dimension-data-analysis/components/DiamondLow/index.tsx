/*
 * @Author: sfy
 * @Date: 2023-03-21 22:33:22
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-23 21:47:36
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/components/DiamondLow/index.tsx
 * @Description: update here
 */

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF, Text, Html } from '@react-three/drei';
function DiamodLow(props) {
  const group = useRef();
  const gltf = useGLTF('../../../../../../public/glb/range-onw.glb');
  // const gltf = useLoader(GLTFLoader, "../../../../../../public/glb/range-onw.glb");

  const { nodes, materials } = gltf;


  return (
    <>
      <group ref={group} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['changfangti01'].geometry}
          material={nodes['changfangti01'].material}
          scale={2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['changfangti02'].geometry}
          material={nodes['changfangti02'].material}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['fenshuju1'].geometry}
          material={nodes['fenshuju1'].material}
          scale={2}
          position={[0,5,0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['fenshuju2'].geometry}
          material={nodes['fenshuju2'].material}
          scale={2}
        />
      </group>
    </>
  );
}
useGLTF.preload('../../../../../../public/glb/range-onw.glb');

export default DiamodLow;
