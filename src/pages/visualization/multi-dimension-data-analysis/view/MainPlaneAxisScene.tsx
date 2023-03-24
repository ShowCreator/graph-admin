/*
 * @Author: sfy
 * @Date: 2023-03-21 21:26:27
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-23 21:45:15
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/view/MainPlaneAxisScene.tsx
 * @Description: update here
 */
import React from 'react'
import BallBody from '../components/BallBody';
import DiamodLow from '../components/DiamondLow';
import LineBase from '../components/LineBase';

import { MAINAXIS, BUSNIESS_ONE, BUSNIESS_LIST } from '../mock/mainAxis'
import { mainAxisNodePosition, mainAxisLinePosition, mainRightNodes } from '../service'
export function MainPlaneAxisScene() {

  const transformMeshList = mainAxisNodePosition({baseList: MAINAXIS})
  const transformLines = mainAxisLinePosition({nodeList:transformMeshList })
  const tranformRightMeshList = mainRightNodes({baseInfo: BUSNIESS_ONE, targetNode: [0,0,0]  })
  console.log(tranformRightMeshList, 'tranformRightMeshList');
  

  return (
    <>
      {
        transformMeshList.map((mesh, index) => {
          return <BallBody key={mesh.id+index} position={mesh.position}/>
        })
      }
      {
        transformLines.map((line, index) => {
          return <LineBase key={line.id + index}  start={line.start} end={line.end}  />
        })
      }
      {
        tranformRightMeshList.map((mesh, index) => {
          console.log(mesh.position, 'mesh.position');
          return <DiamodLow key={mesh.id+index} position={mesh.position}/>
        })
      }
    </>
  )
}
