/*
 * @Author: sfy
 * @Date: 2023-03-23 21:11:11
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-23 22:01:29
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/service/verticalToPosition.ts
 * @Description: update here
 */
import { cloneDeep,uniqueId } from 'lodash'
const BASE_X = 0
const BASE_Y = 0
const BASE_Z = 0
const SPACE = 80

export function verticalMainNodePosition({baseList}) {
  const list = cloneDeep(baseList)
  const num = list.length

  // 获取中间节点
  const centerNodeIndex = Math.floor(num/2) - 1
  const crentreNode = list[centerNodeIndex]
  crentreNode.position = [BASE_X, BASE_Y, BASE_Z]
  const topNodeList = list.slice(0, centerNodeIndex).reverse()
  const bottomNodeList = list.slice(centerNodeIndex + 1)

  topNodeList.forEach((nodeInfo, index) => {
    const point = SPACE * (index + 1)
    nodeInfo.position = [BASE_X, point, BASE_Z]
  })

  bottomNodeList.forEach((nodeInfo, index) => {
    const point = -(SPACE * (index + 1))
    nodeInfo.position = [BASE_X, point, BASE_Z]
  })

  const reverseBottomNodeList = bottomNodeList.reverse()

  return [...topNodeList, crentreNode, ...reverseBottomNodeList]
}

export function verticalMainLinePosition({nodeList}) {
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


export const verticalCreateMainRightNodes = ({baseInfo, mainNodes}) => {
  const ndList = cloneDeep(baseInfo)
  let createList = []
  ndList.forEach(info => {
    const {renderNode, nodes} = info
    const resultNode = mainNodes.find(item => item.id === renderNode)
    if(!renderNode) return
    const [target_x, target_y, target_z  ] = resultNode.position
    nodes.forEach((node, index) => {
      node.pid = renderNode
      node.position = [(BASE_X + (index + 1) * 80),target_y, target_z]
    })
    createList = [...createList, ...nodes]
  })

  return createList
}