/*
 * @Author: sfy
 * @Date: 2023-02-23 19:30:46
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-08 23:29:24
 * @FilePath: /graph-sam/src/pages/list/search-table/index.tsx
 * @Description: update here
 */
import { Card } from '@arco-design/web-react';
import React, { useState, useEffect, useMemo } from 'react';
import { ThreeScene } from './ThreeScene'
import {Demo} from './Demo'
import { Demo02 } from './Demo02'

function SearchTable() {
  useEffect(() => {
    // const threeScene = new ThreeScene()
    const demo = new Demo02()
  }, []);

  return (
    <Card>
      <canvas className="webgl"></canvas>
    </Card>
  );
}

export default SearchTable;
