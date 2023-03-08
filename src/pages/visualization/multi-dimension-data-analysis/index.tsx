/*
 * @Author: sfy
 * @Date: 2023-02-23 19:30:46
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-05 15:34:20
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/index.tsx
 * @Description: update here
 */
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from './components/Box';
function DataAnalysis() {
  return (
    <div className="h-screen ">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
export default DataAnalysis;
