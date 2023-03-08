/*
 * @Author: sfy
 * @Date: 2023-02-23 19:30:46
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-06 00:08:54
 * @FilePath: /graph-sam/src/pages/list/card/index.tsx
 * @Description: update here
 */
import React, { useEffect, useState } from 'react';
import { LoadMessage } from './LoadMessage';
export default function ListCard() {
  useEffect(() => {
    const loadMsg = new LoadMessage();
  }, []);

  return <div id="info"></div>;
}
