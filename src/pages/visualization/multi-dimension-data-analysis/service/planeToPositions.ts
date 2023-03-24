/*
 * @Author: sfy
 * @Date: 2023-03-21 21:07:07
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-23 21:09:58
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/service/positions.ts
 * @Description: update here
 */

import { cloneDeep,uniqueId } from 'lodash'
const BASE_X = 0
const BASE_Y = 0
const BASE_Z = 0
const SPACE = 80

export function mainAxisNodePosition({baseList}) {
  const list = cloneDeep(baseList)
  const num = list.length

  // 获取中间节点
  const centerNodeIndex = Math.floor(num/2) - 1
  const crentreNode = list[centerNodeIndex]
  crentreNode.position = [BASE_X, BASE_Y, BASE_Z]
  const leftNodeList = list.slice(0, centerNodeIndex).reverse()
  const rightNodeList = list.slice(centerNodeIndex + 1)

  leftNodeList.forEach((nodeInfo, index) => {
    const point =  -(SPACE * (index + 1))
    nodeInfo.position = [BASE_X, BASE_Y, point]
  })

  rightNodeList.forEach((nodeInfo, index) => {
    const point = SPACE * (index + 1)
    nodeInfo.position = [BASE_X, BASE_Y, point]
  })

  const reverseLeftNodeList = leftNodeList.reverse()

  return [...reverseLeftNodeList, crentreNode, ...rightNodeList]
}

export function mainAxisLinePosition({nodeList}) {
  console.log(nodeList,'nodeList');
  
  const lines = []

  for(let i = 0; i < nodeList.length; i++) {
    if(i == 0) continue;
    lines.push({
      id: uniqueId(),
      start: nodeList[i-1].position,
      end: nodeList[i].position
    })
  }

  return lines
}


export const mainRightNodes = ({targetNode, baseInfo}) => {
  const info = cloneDeep(baseInfo)
  const baseList = info.nodes
  const [BASE_X, BASE_Y, BASE_Z] = targetNode

  baseList.forEach((item, index) => {
    item.position = [(BASE_X + (index + 1) * 80), BASE_Y, BASE_Z]
  })

  return info.nodes
}