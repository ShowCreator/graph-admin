import{u as c,j as s,a,m as n,B as o}from"./vendor.f6dbc639.js";import{u as d}from"./index.3c277baf.js";import{l as p}from"./index.69444b8c.js";import{s as r}from"./index.module.ba15ba1a.js";function v(){const e=d(p),i=c(t=>t.userInfo||{}),l=[{title:e["userSetting.security.password"],value:e["userSetting.security.password.tips"]},{title:e["userSetting.security.question"],value:"",placeholder:e["userSetting.security.question.placeholder"]},{title:e["userSetting.security.phone"],value:i.phoneNumber?`${e["userSetting.security.phone.tips"]} ${i.phoneNumber}`:""},{title:e["userSetting.security.email"],value:"",placeholder:e["userSetting.security.email.placeholder"]}];return s("div",{className:r.security,children:l.map((t,u)=>a("div",{className:r["security-item"],children:[s("span",{className:r["security-item-title"],children:t.title}),a("div",{className:r["security-item-content"],children:[s("span",{className:n({[`${r["security-item-placeholder"]}`]:!t.value}),children:t.value||t.placeholder}),s("span",{children:s(o,{type:"text",children:t.value?e["userSetting.btn.edit"]:e["userSetting.btn.set"]})})]})]},u))})}export{v as default};
