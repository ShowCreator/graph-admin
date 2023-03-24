/*
 * @Author: sfy
 * @Date: 2023-03-05 14:41:54
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-23 22:39:25
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/components/BallBody/index.tsx
 * @Description: update here
 */
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF, Text, Html } from '@react-three/drei';
import './index.less';
function BallBody(props) {
  const group = useRef();
  const gltf = useGLTF('../../../../../../public/glb/ball.glb');

  const { nodes, materials } = gltf;

  return (
    <>
      <group ref={group} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['huanti'].geometry}
          material={nodes['huanti'].material}
          // position={[0, 8, 0]}
          scale={3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['zhhu'].geometry}
          material={nodes['zhhu'].material}
          scale={3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['zhutifuzhi'].geometry}
          material={nodes['zhutifuzhi'].material}
          scale={3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['zifaguang'].geometry}
          material={nodes['zifaguang'].material}
          scale={3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['qiu'].geometry}
          material={nodes['qiu'].material}
          position={[0, 16, 0]}
          scale={3}
        >
          <Html distanceFactor={20}>
            <div className="content">
              hello <br />
              world
            </div>
          </Html>
        </mesh>
        {/* <Text
           position={[0,12,10]}
          color={'#EC2D2D'}
          fontSize={4}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={'left'}
          anchorX="center"
          anchorY="middle"
          outlineWidth={2}
          outlineColor="#ffffff"
        >
          xiansuo
        </Text> */}
      </group>
    </>
  );
}

useGLTF.preload('../../../../../../public/glb/ball.glb');

export default BallBody;
