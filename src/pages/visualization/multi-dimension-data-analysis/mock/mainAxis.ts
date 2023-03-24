/*
 * @Author: sfy
 * @Date: 2023-03-21 21:09:19
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-23 21:41:01
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/mock/mainAxis.ts
 * @Description: update here
 */

import { uniqueId } from 'lodash';

export const MAINAXIS = [
  {
    id: 'key1',
    text: '订单注册',
  },
  {
    id: 'key2',
    text: '订单拆分',
  },
  {
    id: 'key3',
    text: '生产',
  },
  {
    id: 'key4',
    text: '入库',
  },
  {
    id: 'key5',
    text: '发货',
  },
  {
    id: 'key6',
    text: '签收',
  },
];

export const BUSNIESS_ONE = {
  renderNode: 'key1',
  nodes: [
    {
      id: uniqueId(),
      text: '评审',
    },
    {
      id: uniqueId(),
      text: '决策',
    },
    {
      id: uniqueId(),
      text: '签字',
    },
    {
      id: uniqueId(),
      text: '发布',
    },
  ],
};

export const BUSNIESS_LIST = [
  {
    renderNode: 'key1',
    nodes: [
      {
        id: uniqueId(),
        text: '签字',
      },
      {
        id: uniqueId(),
        text: '发布',
      },
    ],
  },
  {
    renderNode: 'key2',
    nodes: [
      {
        id: uniqueId(),
        text: '评审',
      },
      {
        id: uniqueId(),
        text: '决策',
      },
      {
        id: uniqueId(),
        text: '签字',
      },
      {
        id: uniqueId(),
        text: '发布',
      },
    ],
  },
  {
    renderNode: 'key3',
    nodes: [
      {
        id: uniqueId(),
        text: '评审',
      },
      {
        id: uniqueId(),
        text: '决策',
      },
    ],
  },
  {
    renderNode: 'key4',
    nodes: [
      {
        id: uniqueId(),
        text: '评审',
      },
      {
        id: uniqueId(),
        text: '决策',
      },
      {
        id: uniqueId(),
        text: '签字',
      },
      {
        id: uniqueId(),
        text: '发布',
      },
    ],
  },
  {
    renderNode: 'key5',
    nodes: [
      {
        id: uniqueId(),
        text: '评审',
      },
      {
        id: uniqueId(),
        text: '决策',
      },
      {
        id: uniqueId(),
        text: '签字',
      },

    ],
  },
];
