import{ai as o,u as d,j as t,a as s,S as a}from"./vendor.f6dbc639.js";import c from"./chat-panel.14b7e07c.js";import n from"./studio.a57f4d4a.js";import u from"./data-statistic.bc73f882.js";import m from"./studio-status.9b05c7cc.js";import l from"./quick-operation.72e60637.js";import p from"./studio-information.81666e85.js";import{s as i}from"./index.module.7b1a989f.js";import{s as f}from"./index.3c277baf.js";import"./index.662e0e1f.js";import"./index.6b8475c1.js";import"./item.14b1ea69.js";/* empty css              *//* empty css              */import"./data-statistic-list.87ef4840.js";/* empty css               */f({setup:()=>{o.mock(new RegExp("/api/chatList"),()=>o.mock({"data|4-6":[{"id|+1":1,username:"\u7528\u62377352772",content:"\u9A6C\u4E0A\u5C31\u5F00\u59CB\u4E86\uFF0C\u597D\u6FC0\u52A8\uFF01",time:"13:09:12","isCollect|2":!0}]}).data)}});function g(){const e=d(r=>r.userInfo);return t("div",{children:s("div",{className:i.layout,children:[t("div",{className:i["layout-left-side"],children:t(c,{})}),t("div",{className:i["layout-content"],children:s(a,{size:16,direction:"vertical",style:{width:"100%"},children:[t(n,{userInfo:e}),t(u,{})]})}),t("div",{className:i["layout-right-side"],children:s(a,{size:16,direction:"vertical",style:{width:"100%"},children:[t(m,{}),t(l,{}),t(p,{})]})})]})})}export{g as default};