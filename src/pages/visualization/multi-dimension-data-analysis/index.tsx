/*
 * @Author: sfy
 * @Date: 2023-02-23 19:30:46
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-23 22:03:28
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/index.tsx
 * @Description: update here
 */
import React, { useState, useEffect } from 'react';
import { Canvas,extend } from '@react-three/fiber';
import BallBody from './components/BallBody';
import Ocean from './components/Ocean';
import LineBase from './components/LineBase';
import { Environment, Lightformer, Line, OrbitControls, PivotControls, Sky } from '@react-three/drei'
import { MainPlaneAxisScene, MainVerticalAxisScene } from './view'
import DiamodLow from './components/DiamondLow';


function DataAnalysis()  {
  return (
    <div className="h-screen ">
      <Canvas camera={{ fov: 45, near: 1, far: 10000, position: [-250, 150, 300] }}>
        {/* <gridHelper  position={[0,0,0]} args={[800, 20]}/> */}
        <ambientLight />
        <pointLight position={[10, 50, 10]} />
        <pointLight position={[-10, -50, -10]} />
        <OrbitControls   />
        <MainVerticalAxisScene />
        {/* <MainPlaneAxisScene /> */}
        {/* <Ocean />
        <Sky scale={1000} sunPosition={[500, 250, -1000]} turbidity={0.1} /> */}
      </Canvas>
    </div>
  );
}
export default DataAnalysis;
