import{j as e,a as n,S as t,A as l,aL as m,E as h,aM as g,aN as x,aJ as o}from"./vendor.f6dbc639.js";/* empty css               */import{s as a}from"./index.module.a5c0f729.js";function v(c){const{userInfo:s={},loading:i}=c,r=e(o,{text:{rows:1,style:{width:"100px",height:"20px",marginBottom:"-4px"},width:["100%"]},animation:!0}),d=e(o,{text:{rows:0},image:{style:{width:"64px",height:"64px"},shape:"circle"},animation:!0});return e("div",{className:a.header,children:n(t,{size:8,direction:"vertical",align:"center",className:a["header-content"],children:[i?d:e(l,{size:64,triggerIcon:e(m,{}),children:e("img",{src:s.avatar})}),e("div",{className:a.username,children:i?r:s.name}),e("div",{className:a["user-msg"],children:n(t,{size:18,children:[n("div",{children:[e(h,{}),e("span",{className:a["user-msg-text"],children:i?r:s.jobName})]}),n("div",{children:[e(g,{}),e("span",{className:a["user-msg-text"],children:i?r:s.organizationName})]}),n("div",{children:[e(x,{}),e("span",{className:a["user-msg-text"],children:i?r:s.locationName})]})]})})]})})}export{v as default};