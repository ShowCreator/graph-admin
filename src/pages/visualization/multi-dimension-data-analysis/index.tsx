/*
 * @Author: sfy
 * @Date: 2023-02-23 19:30:46
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-11 20:41:45
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/index.tsx
 * @Description: update here
 */
import React, { useState, useEffect } from 'react';
import { Canvas,extend } from '@react-three/fiber';
import { Box } from './components/Box';
import { Environment, Lightformer, OrbitControls, PivotControls } from '@react-three/drei'

function DataAnalysis()  {
  return (
    <div className="h-screen ">
      <Canvas camera={{ fov: 45, near: 1, far: 10000, position: [500, 800, 1300] }}>
        <gridHelper args={[1000, 20]}  />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[25, 25, 25]} />
        <OrbitControls  />
      </Canvas>
    </div>
  );
}
export default DataAnalysis;
