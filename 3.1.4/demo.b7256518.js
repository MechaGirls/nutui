import{c as e}from"./mobile.e1c1f4c1.js";import{m as l,r as a,o as u,e as o,j as t,g as m}from"./vendor.eeaf2406.js";import"./index.c586af8f.js";const{createDemo:n}=e("textarea");var d=n({setup:()=>({value:l(""),value2:l(""),value3:l("")})});const s={class:"demo full"},r=m("h2",null,"基础用法",-1),v=m("h2",null,"显示字数统计",-1),i=m("h2",null,"高度自定义，拉伸",-1),c=m("h2",null,"只读",-1),f=m("h2",null,"禁用",-1);d.render=function(e,l,m,n,d,h){const V=a("nut-textarea");return u(),o("div",s,[r,t(V,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l)},null,8,["modelValue"]),v,t(V,{modelValue:e.value2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value2=l),"limit-show":"","max-length":"20"},null,8,["modelValue"]),i,t(V,{modelValue:e.value3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.value3=l),rows:"10",autosize:""},null,8,["modelValue"]),c,t(V,{readonly:"","model-value":"textarea直读状态"}),f,t(V,{disabled:"","model-value":"textarea禁用状态","limit-show":"","max-length":"20"})])};export{d as default};