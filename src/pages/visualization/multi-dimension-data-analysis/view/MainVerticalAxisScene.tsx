/*
 * @Author: sfy
 * @Date: 2023-03-23 21:11:11
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-23 22:46:37
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/view/MainVerticalAxisScene.tsx
 * @Description: update here
 */
import React, { useEffect, useState } from 'react';
import BallBody from '../components/BallBody';
import DiamodLow from '../components/DiamondLow';
import LineBase from '../components/LineBase';
import { MAINAXIS, BUSNIESS_LIST } from '../mock/mainAxis';
import {
  verticalCreateMainRightNodes,
  verticalMainLinePosition,
  verticalMainNodePosition,
} from '../service';

export function MainVerticalAxisScene() {
  const transformMeshList = verticalMainNodePosition({ baseList: MAINAXIS });
  const transformLines = verticalMainLinePosition({
    nodeList: transformMeshList,
  });
  const transformRightMeshes = verticalCreateMainRightNodes({
    baseInfo: BUSNIESS_LIST,
    mainNodes: transformMeshList,
  });
  const transformRightLines = verticalMainLinePosition({
    nodeList: transformRightMeshes,
  });

  const [tragetToSourceLine, setTragetToSourceLine] = useState([])

  useEffect(() => {
    const tragetToSourceLine = [...transformLines, ...transformRightLines];
    setTimeout(() => {
      setTragetToSourceLine(tragetToSourceLine)
    }, 2000)
  }, [])

  return (
    <>
      {transformMeshList.map((mesh, index) => {
        return <BallBody key={mesh.id + index} position={mesh.position} />;
      })}

      {transformRightMeshes.map((mesh, index) => {
        return <DiamodLow key={mesh.id + index} position={mesh.position} />;
      })}

      {tragetToSourceLine.map((line, index) => {
        return (
          <LineBase key={line.id + index} start={line.start} end={line.end} />
        );
      })}
    </>
  );
}
