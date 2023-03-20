/*
 * @Author: sfy
 * @Date: 2023-02-23 19:30:46
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-19 22:45:09
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/index.tsx
 * @Description: update here
 */
import React, { useState, useEffect } from 'react';
import { Canvas,extend } from '@react-three/fiber';
import BallBody from './components/BallBody';
import Ocean from './components/Ocean';
import LineBase from './components/LineBase';
import { Environment, Lightformer, Line, OrbitControls, PivotControls, Sky } from '@react-three/drei'

function DataAnalysis()  {
  return (
    <div className="h-screen ">
      {/* <Canvas camera={{ position: [-700, 500, 800], fov: 45, near: 1, far: 10000 }}> */}
      <Canvas camera={{ fov: 45, near: 1, far: 10000, position: [-250, 150, 300] }}>
        {/* <gridHelper  args={[200, 20]}/> */}
        <ambientLight />
        <pointLight position={[10, 50, 10]} />
        <pointLight position={[-10, -50, -10]} />
        <OrbitControls   />
        <BallBody  position={[0, 0, 0]}/>
        <BallBody  position={[0, 0, 40]}/>
        <BallBody  position={[0, 0, 80]}/>
        <BallBody  position={[0, 0, 120]}/>
        <BallBody  position={[0, 0, 160]}/>
        <LineBase  start={[0, 2, 0]} end={[0, 2, 40]}  />
        <LineBase  start={[0, 2, 40]} end={[0, 2, 80]}  />
        <LineBase  start={[0, 2, 80]} end={[0, 2, 120]}  />
        <LineBase  start={[0, 2, 120]} end={[0, 2, 160]}  />

        {/* <Line
          points={[[0, 0, 0], [0, 0, 100]]}   
          color="white"                  
          lineWidth={2}                   
        /> */}
        <Ocean />
        <Sky scale={1000} sunPosition={[500, 250, -1000]} turbidity={0.1} />
      </Canvas>
    </div>
  );
}
export default DataAnalysis;
