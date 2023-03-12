/*
 * @Author: sfy
 * @Date: 2023-02-23 19:30:46
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-10 16:32:44
 * @FilePath: /graph-sam/src/pages/dashboard/workplace/index.tsx
 * @Description: update here
 */
import { Card } from '@arco-design/web-react';
import React, { useState, useEffect, useMemo } from 'react';
import { ThreeScene } from './ThreeScene'
import {Demo} from './Demo'

function Workplace() {
  useEffect(() => {
    // const threeScene = new ThreeScene()
    const demo = new Demo()
  }, []);

  return (
    <Card>
      <canvas className="webgl"></canvas>
    </Card>
  );
}

export default Workplace;
