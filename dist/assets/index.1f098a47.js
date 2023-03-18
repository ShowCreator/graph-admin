import{r as ae,j as le}from"./vendor.f6dbc639.js";import{i as b,Q as de,O as ce,h as G,ab as j,ak as fe,al as $,am as N,m as B,an as ue,ac as q,V as pe,ao as X,ap as O,aq as he,ar as T,as as R,at as me,y as Y,N as ve,P as ye,S as xe,au as we,D as J,W as ge,av as Se,M as be,j as _e,aw as Ee,ax as Ae,ay as Me}from"./three.module.9ca8816c.js";import{O as Ce}from"./OrbitControls.9a020a66.js";var U=function(){var u=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(c){c.preventDefault(),s(++u%e.children.length)},!1);function t(c){return e.appendChild(c.dom),c}function s(c){for(var r=0;r<e.children.length;r++)e.children[r].style.display=r===c?"block":"none";u=c}var i=(performance||Date).now(),d=i,o=0,a=t(new U.Panel("FPS","#0ff","#002")),p=t(new U.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new U.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:e,addPanel:t,showPanel:s,begin:function(){i=(performance||Date).now()},end:function(){o++;var c=(performance||Date).now();if(p.update(c-i,200),c>=d+1e3&&(a.update(o*1e3/(c-d),100),d=c,o=0,f)){var r=performance.memory;f.update(r.usedJSHeapSize/1048576,r.jsHeapSizeLimit/1048576)}return c},update:function(){i=this.end()},domElement:e,setMode:s}};U.Panel=function(u,e,t){var s=1/0,i=0,d=Math.round,o=d(window.devicePixelRatio||1),a=80*o,p=48*o,f=3*o,c=2*o,r=3*o,h=15*o,S=74*o,_=30*o,l=document.createElement("canvas");l.width=a,l.height=p,l.style.cssText="width:80px;height:48px";var n=l.getContext("2d");return n.font="bold "+9*o+"px Helvetica,Arial,sans-serif",n.textBaseline="top",n.fillStyle=t,n.fillRect(0,0,a,p),n.fillStyle=e,n.fillText(u,f,c),n.fillRect(r,h,S,_),n.fillStyle=t,n.globalAlpha=.9,n.fillRect(r,h,S,_),{dom:l,update:function(m,z){s=Math.min(s,m),i=Math.max(i,m),n.fillStyle=t,n.globalAlpha=1,n.fillRect(0,0,a,h),n.fillStyle=e,n.fillText(d(m)+" "+u+" ("+d(s)+"-"+d(i)+")",f,c),n.drawImage(l,r+o,h,S-o,_,r,h,S-o,_),n.fillRect(r+S-o,h,o,_),n.fillStyle=t,n.globalAlpha=.9,n.fillRect(r+S-o,h,o,d((1-m/z)*_))}}};var ze=U;const Q=new b,De=new de,Z=new b;class Le extends ce{constructor(e=document.createElement("div")){super();this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}class Be extends Le{constructor(e){super(e);this.isCSS3DSprite=!0,this.rotation2D=0}copy(e,t){return super.copy(e,t),this.rotation2D=e.rotation2D,this}}const E=new G,Ue=new G;class Pe{constructor(e={}){const t=this;let s,i,d,o;const a={camera:{fov:0,style:""},objects:new WeakMap},p=e.element!==void 0?e.element:document.createElement("div");p.style.overflow="hidden",this.domElement=p;const f=document.createElement("div");f.style.transformOrigin="0 0",f.style.pointerEvents="none",p.appendChild(f);const c=document.createElement("div");c.style.transformStyle="preserve-3d",f.appendChild(c),this.getSize=function(){return{width:s,height:i}},this.render=function(l,n){const m=n.projectionMatrix.elements[5]*o;a.camera.fov!==m&&(f.style.perspective=n.isPerspectiveCamera?m+"px":"",a.camera.fov=m),n.view&&n.view.enabled?(f.style.transform=`translate( ${-n.view.offsetX*(s/n.view.width)}px, ${-n.view.offsetY*(i/n.view.height)}px )`,f.style.transform+=`scale( ${n.view.fullWidth/n.view.width}, ${n.view.fullHeight/n.view.height} )`):f.style.transform="",l.matrixWorldAutoUpdate===!0&&l.updateMatrixWorld(),n.parent===null&&n.matrixWorldAutoUpdate===!0&&n.updateMatrixWorld();let z,g;n.isOrthographicCamera&&(z=-(n.right+n.left)/2,g=(n.top+n.bottom)/2);const v=n.view&&n.view.enabled?n.view.height/n.view.fullHeight:1,L=(n.isOrthographicCamera?`scale( ${v} )scale(`+m+")translate("+r(z)+"px,"+r(g)+"px)"+h(n.matrixWorldInverse):`scale( ${v} )translateZ(`+m+"px)"+h(n.matrixWorldInverse))+"translate("+d+"px,"+o+"px)";a.camera.style!==L&&(c.style.transform=L,a.camera.style=L),_(l,l,n)},this.setSize=function(l,n){s=l,i=n,d=s/2,o=i/2,p.style.width=l+"px",p.style.height=n+"px",f.style.width=l+"px",f.style.height=n+"px",c.style.width=l+"px",c.style.height=n+"px"};function r(l){return Math.abs(l)<1e-10?0:l}function h(l){const n=l.elements;return"matrix3d("+r(n[0])+","+r(-n[1])+","+r(n[2])+","+r(n[3])+","+r(n[4])+","+r(-n[5])+","+r(n[6])+","+r(n[7])+","+r(n[8])+","+r(-n[9])+","+r(n[10])+","+r(n[11])+","+r(n[12])+","+r(-n[13])+","+r(n[14])+","+r(n[15])+")"}function S(l){const n=l.elements,m="matrix3d("+r(n[0])+","+r(n[1])+","+r(n[2])+","+r(n[3])+","+r(-n[4])+","+r(-n[5])+","+r(-n[6])+","+r(-n[7])+","+r(n[8])+","+r(n[9])+","+r(n[10])+","+r(n[11])+","+r(n[12])+","+r(n[13])+","+r(n[14])+","+r(n[15])+")";return"translate(-50%,-50%)"+m}function _(l,n,m,z){if(l.isCSS3DObject){const g=l.visible===!0&&l.layers.test(m.layers)===!0;if(l.element.style.display=g===!0?"":"none",g===!0){l.onBeforeRender(t,n,m);let v;l.isCSS3DSprite?(E.copy(m.matrixWorldInverse),E.transpose(),l.rotation2D!==0&&E.multiply(Ue.makeRotationZ(l.rotation2D)),l.matrixWorld.decompose(Q,De,Z),E.setPosition(Q),E.scale(Z),E.elements[3]=0,E.elements[7]=0,E.elements[11]=0,E.elements[15]=1,v=S(E)):v=S(l.matrixWorld);const P=l.element,L=a.objects.get(l);if(L===void 0||L.style!==v){P.style.transform=v;const oe={style:v};a.objects.set(l,oe)}P.parentNode!==c&&c.appendChild(P),l.onAfterRender(t,n,m)}}for(let g=0,v=l.children.length;g<v;g++)_(l.children[g],n,m)}}}const K=new j,H=new b;class ee extends fe{constructor(){super();this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new $(e,3)),this.setAttribute("uv",new $(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,s=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),s.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const s=new N(t,6,1);return this.setAttribute("instanceStart",new B(s,3,0)),this.setAttribute("instanceEnd",new B(s,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const s=new N(t,6,1);return this.setAttribute("instanceColorStart",new B(s,3,0)),this.setAttribute("instanceColorEnd",new B(s,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ue(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new j);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),K.setFromBufferAttribute(t),this.boundingBox.union(K))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new q),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let i=0;for(let d=0,o=e.count;d<o;d++)H.fromBufferAttribute(e,d),i=Math.max(i,s.distanceToSquared(H)),H.fromBufferAttribute(t,d),i=Math.max(i,s.distanceToSquared(H));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}O.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new pe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};T.line={uniforms:X.merge([O.common,O.fog,O.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class k extends he{constructor(e){super({type:"LineMaterial",uniforms:X.clone(T.line.uniforms),vertexShader:T.line.vertexShader,fragmentShader:T.line.fragmentShader,clipping:!0});this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const te=new b,ne=new b,y=new R,x=new R,A=new R,V=new b,F=new G,w=new me,ie=new b,W=new j,I=new q,M=new R;let C,D;function se(u,e,t){return M.set(0,0,-e,1).applyMatrix4(u.projectionMatrix),M.multiplyScalar(1/M.w),M.x=D/t.width,M.y=D/t.height,M.applyMatrix4(u.projectionMatrixInverse),M.multiplyScalar(1/M.w),Math.abs(Math.max(M.x,M.y))}function Oe(u,e){const t=u.matrixWorld,s=u.geometry,i=s.attributes.instanceStart,d=s.attributes.instanceEnd,o=Math.min(s.instanceCount,i.count);for(let a=0,p=o;a<p;a++){w.start.fromBufferAttribute(i,a),w.end.fromBufferAttribute(d,a),w.applyMatrix4(t);const f=new b,c=new b;C.distanceSqToSegment(w.start,w.end,c,f),c.distanceTo(f)<D*.5&&e.push({point:c,pointOnLine:f,distance:C.origin.distanceTo(c),object:u,face:null,faceIndex:a,uv:null,uv2:null})}}function Te(u,e,t){const s=e.projectionMatrix,d=u.material.resolution,o=u.matrixWorld,a=u.geometry,p=a.attributes.instanceStart,f=a.attributes.instanceEnd,c=Math.min(a.instanceCount,p.count),r=-e.near;C.at(1,A),A.w=1,A.applyMatrix4(e.matrixWorldInverse),A.applyMatrix4(s),A.multiplyScalar(1/A.w),A.x*=d.x/2,A.y*=d.y/2,A.z=0,V.copy(A),F.multiplyMatrices(e.matrixWorldInverse,o);for(let h=0,S=c;h<S;h++){if(y.fromBufferAttribute(p,h),x.fromBufferAttribute(f,h),y.w=1,x.w=1,y.applyMatrix4(F),x.applyMatrix4(F),y.z>r&&x.z>r)continue;if(y.z>r){const g=y.z-x.z,v=(y.z-r)/g;y.lerp(x,v)}else if(x.z>r){const g=x.z-y.z,v=(x.z-r)/g;x.lerp(y,v)}y.applyMatrix4(s),x.applyMatrix4(s),y.multiplyScalar(1/y.w),x.multiplyScalar(1/x.w),y.x*=d.x/2,y.y*=d.y/2,x.x*=d.x/2,x.y*=d.y/2,w.start.copy(y),w.start.z=0,w.end.copy(x),w.end.z=0;const l=w.closestPointToPointParameter(V,!0);w.at(l,ie);const n=ve.lerp(y.z,x.z,l),m=n>=-1&&n<=1,z=V.distanceTo(ie)<D*.5;if(m&&z){w.start.fromBufferAttribute(p,h),w.end.fromBufferAttribute(f,h),w.start.applyMatrix4(o),w.end.applyMatrix4(o);const g=new b,v=new b;C.distanceSqToSegment(w.start,w.end,v,g),t.push({point:v,pointOnLine:g,distance:C.origin.distanceTo(v),object:u,face:null,faceIndex:h,uv:null,uv2:null})}}}class Re extends Y{constructor(e=new ee,t=new k({color:Math.random()*16777215})){super(e,t);this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,s=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,p=t.count;o<p;o++,a+=2)te.fromBufferAttribute(t,o),ne.fromBufferAttribute(s,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+te.distanceTo(ne);const d=new N(i,2,1);return e.setAttribute("instanceDistanceStart",new B(d,1,0)),e.setAttribute("instanceDistanceEnd",new B(d,1,1)),this}raycast(e,t){const s=this.material.worldUnits,i=e.camera;i===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const d=e.params.Line2!==void 0&&e.params.Line2.threshold||0;C=e.ray;const o=this.matrixWorld,a=this.geometry,p=this.material;D=p.linewidth+d,a.boundingSphere===null&&a.computeBoundingSphere(),I.copy(a.boundingSphere).applyMatrix4(o);let f;if(s)f=D*.5;else{const r=Math.max(i.near,I.distanceToPoint(C.origin));f=se(i,r,p.resolution)}if(I.radius+=f,C.intersectsSphere(I)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),W.copy(a.boundingBox).applyMatrix4(o);let c;if(s)c=D*.5;else{const r=Math.max(i.near,W.distanceToPoint(C.origin));c=se(i,r,p.resolution)}W.expandByScalar(c),C.intersectsBox(W)!==!1&&(s?Oe(this,t):Te(this,i,t))}}class re extends ee{constructor(){super();this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,s=new Float32Array(2*t);for(let i=0;i<t;i+=3)s[2*i]=e[i],s[2*i+1]=e[i+1],s[2*i+2]=e[i+2],s[2*i+3]=e[i+3],s[2*i+4]=e[i+4],s[2*i+5]=e[i+5];return super.setPositions(s),this}setColors(e){const t=e.length-3,s=new Float32Array(2*t);for(let i=0;i<t;i+=3)s[2*i]=e[i],s[2*i+1]=e[i+1],s[2*i+2]=e[i+2],s[2*i+3]=e[i+3],s[2*i+4]=e[i+4],s[2*i+5]=e[i+5];return super.setColors(s),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class He extends Re{constructor(e=new re,t=new k({color:Math.random()*16777215})){super(e,t);this.isLine2=!0,this.type="Line2"}}class We{constructor(){this.container=null,this.camera=null,this.scene=null,this.renderer=null,this.mainControls=null,this.html3Renderer=new Pe,console.log("222"),this.init(),this.animate()}init(){this.container=document.createElement("div"),document.getElementById("info").appendChild(this.container),this.camera=new ye(75,window.innerWidth/window.innerHeight,1,3e3),this.camera.position.set(0,200,350),this.camera.lookAt(0,0,0),this.scene=new xe;const e=new we(500);this.scene.add(e);const t=new J(16777215,1);t.position.set(300,400,175),this.scene.add(t);const s=new J(4235328,.6);s.position.set(-100,350,-200),this.scene.add(s),this.renderer=new ge,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.html3Renderer.setSize(window.innerWidth,window.innerHeight),this.html3Renderer.domElement.style.position="absolute",this.html3Renderer.domElement.style.top="0px",this.html3Renderer.domElement.id="clickDiv",this.container.appendChild(this.html3Renderer.domElement),this.stats=new ze,this.container.appendChild(this.stats.dom),this.initControls(),this.addMesh()}initControls(e){this.mainControls=new Ce(this.camera,this.html3Renderer.domElement),this.mainControls.maxPolarAngle=Math.PI*80/180,this.mainControls.minPolarAngle=Math.PI*0/180,this.mainControls.minDistance=4,this.mainControls.maxDistance=900,this.mainControls.enabled=!0,this.mainControls.enablePan=!0}addElement(e=1,t="#fff",s="#000",i=16,d="#000",o="\u4FE1\u606F\u6846"){const a=document.createElement("div");return a.className="element",a.style=`display: inline-block;
                      background: #ffffff;
                      border-radius: 25px;
                      align-items: center;
                      overflow: hidden;
                      `,a.innerHTML=`<span style="padding: 15px 15px; display: inline-block">
        <p style="display: flex; align-items: center">
                  ${e>0?' <i style="border-radius: 50%;display: inline-block;background:'+s+"; color: "+t+'; width: 20px; height: 20px; text-align: center; font-style: normal; line-height: 20px; font-weight: 800;">'+e+"</i>":""}

        <i  style="margin-left: 5px;font-style: normal;height: 20px;line-height: 20px; font-size: ${i}px;color: ${d};">${o}</i>
        </p>
    </span>`,a}addMesh(e={x:20,y:80,z:4},t=20){const s=new Se(50,50,20,32),i=new be({color:16776960}),d=new Y(s,i),o=new Be(this.addElement());o.scale.set(1,1,1),d.add(o),o.position.set(e.x,e.y+t*3/4,e.z);const a=[];a.push(e.x,e.y+t*3/4,e.z),a.push(0,10+t/4,0);const p=new re;p.setPositions(a);const f=new k({color:16777215,linewidth:2,dashed:!0,dashSize:8,gapSize:2,dashScale:1,worldUnits:!0});f.resolution.set(window.innerWidth,window.innerHeight);const c=new He(p,f);c.computeLineDistances(),this.lineAndDot=new _e().load("https://img95.699pic.com/element/40114/0827.png_860.png");const r=new Ee({map:this.lineAndDot,transparent:!0}),h=new Ae(r),S=new Me(t/4,32);h.geometry=S,h.position.set(0,10+t/4,0),d.add(h),d.add(c),d.renderOrder=10,this.scene.add(d)}animate(){const e=()=>{requestAnimationFrame(e),this.mainControls.update(),this.render(),this.stats.update()};e()}render(){this.renderer.render(this.scene,this.camera),this.html3Renderer.render(this.scene,this.camera)}}function Ne(){return ae.exports.useEffect(()=>{new We},[]),le("div",{id:"info"})}export{Ne as default};
