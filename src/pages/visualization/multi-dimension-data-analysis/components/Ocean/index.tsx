/*
 * @Author: sfy
 * @Date: 2023-03-18 22:42:51
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-18 22:56:14
 * @FilePath: /graph-sam/src/pages/visualization/multi-dimension-data-analysis/components/Ocean/index.tsx
 * @Description: update here
 */
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas,extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three'
import { Water } from 'three-stdlib'
extend({ Water })

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '../../../../../../public/image/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 1000,
      textureHeight: 1000,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

export default Ocean