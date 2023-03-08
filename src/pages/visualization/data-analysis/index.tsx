/*
 * @Author: sfy
 * @Date: 2023-02-23 19:30:46
 * @LastEditors: sfy
 * @LastEditTime: 2023-02-23 20:19:30
 * @FilePath: /graph-sam/src/pages/visualization/data-analysis/index.tsx
 * @Description: update here
 */
import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
  Card,
  Grid,
  Table,
  Space,
  Typography,
  Button,
} from '@arco-design/web-react';
import { directionsButtonList, dataset } from './mock';
import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';

function DataAnalysis() {
  const graph = useRef<dagreD3.graphlib.Graph>();
  const chart = useRef<d3.Selection<d3.BaseType, any, HTMLElement, any>>();
  const innerContainer =
    useRef<d3.Selection<SVGGElement, any, HTMLElement, any>>();

  const zoom = useRef<d3.ZoomBehavior<Element, any>>();

  const render = useRef<dagreD3.Render>();

  const [rankdir, setRankdir] = useState('TB');
  const [initialScale, setInitialScale] = useState(0.75);

  useEffect(() => {
    setInitOptions();
    createGraph();
  }, []);

  const setInitOptions = () => {
    const containerWidth = 1000;
    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const width = containerWidth - margin.left - margin.right;
    chart.current = d3
      .select('#celonis-demo')
      .attr('width', width + margin.left + margin.right);

    innerContainer.current = chart.current.append('g');

    return {
      containerWidth,
      margin,
      width,
    };
  };

  const createGraph = () => {
    // 初始化创建
    graph.current = new dagreD3.graphlib.Graph();
    graph.current.setGraph({
      rankdir,
    });

    // 添加节点
    dataset.nodes.forEach((node) => {
      graph.current.setNode(node.id, {
        id: `node-${node.id}`,
        label: node.label,
        shape: node.shape,
        clusterLabelPos: 'top',
        style: `
          fill: yellow;
          stroke: #000;
        `,
      });
    });
    // 添加节点关系
    dataset.edges.forEach((edge) => {
      graph.current.setEdge(edge.source, edge.target, {
        label: edge.label,
        id: `${edge.source}-${edge.target}`,
        style: `
          fill: none;
          stroke-width: 3px;
          stroke: #000;
          ${
            // TODO: 可抽离配置，目前是将数据结构写死的，开始和结束特殊标记
            edge.source === 0 ||
            dataset.nodes.find((node) => node.id === edge.target).isEnd
              ? 'stroke-dasharray: 5, 5'
              : ''
          };
        `,
        // arrowhead: "hollowPoint",
        curve: d3.curveBasis,
        arrowheadClass: 'arrowhead',
      });
    });

    setGraphZoom();
    renderGraph();
    setGraphCenter();
  };

  const setGraphZoom = () => {
    zoom.current = d3.zoom().on('zoom', () => {
      innerContainer.current.attr('transform', d3.event.transform);
    });
    chart.current.call(zoom.current);
  };

  const renderGraph = () => {
    render.current = new dagreD3.render();
    render.current(innerContainer.current, graph.current);
  };

  // 渲染完毕后的图纸居中
  const setGraphCenter = () => {
    chart.current.call(
      zoom.current.transform,
      d3.zoomIdentity
        .translate(
          (chart.current.attr('width') -
            graph.current.graph().width * initialScale) /
            2,
          20
        )
        .scale(initialScale)
    );
    chart.current.attr(
      'height',
      graph.current.graph().height * initialScale + 40
    );
  };

  return (
    <>
      <Space size={16} direction="horizontal" style={{ width: '100%' }}>
        {directionsButtonList.map((item) => {
          return (
            <Button type="primary" key={item.value}>
              {item.label}
            </Button>
          );
        })}
      </Space>
      <svg id="celonis-demo"></svg>
    </>
  );
}
export default DataAnalysis;
