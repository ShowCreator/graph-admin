var g=Object.defineProperty,m=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var p=(a,t,e)=>t in a?g(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,l=(a,t)=>{for(var e in t||(t={}))y.call(t,e)&&p(a,e,t[e]);if(i)for(var e of i(t))h.call(t,e)&&p(a,e,t[e]);return a},d=(a,t)=>m(a,x(t));import{r as o,j as n,az as w,l as C}from"./vendor.f6dbc639.js";import D from"./project.cd836419.js";/* empty css               *//* empty css              */function z(){const[a,t]=o.exports.useState(new Array(6).fill({})),[e,c]=o.exports.useState(!0),{Row:f,Col:j}=w,u=async()=>{c(!0);const{data:r}=await C.get("/api/user/projectList").finally(()=>{c(!1)});t(r)};return o.exports.useEffect(()=>{u()},[]),n(f,{gutter:12,children:a.map((r,s)=>n(j,{span:8,style:s>a.length-4&&s<a.length?{marginTop:"16px"}:{},children:n(D,d(l({},r),{loading:e}))},s))})}export{z as default};
