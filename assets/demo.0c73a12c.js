import{c as l}from"./mobile.76b35821.js";import{a,s as e,x as t,r as n,o as u,c as v,f as s,t as o,q as d}from"./vendor.80bf15c7.js";import"./index.42d325ee.js";const{createDemo:c}=l("rate"),i=c({setup(){const l=a({val:4,val3:3,val4:3,val5:3,val6:3,val7:3,result:""});return{state:l,onClick:a=>{l.result="您点击了第"+a+"个!"}}}}),r=d("data-v-a5fce49a");e("data-v-a5fce49a");const h={class:"demo"},p=s("h2",null,"基本用法",-1),f=s("h2",null,"自定义 icon ",-1),m=s("h2",null,"自定义数量",-1),k=s("h2",null,"自定义颜色",-1),C=s("h2",null,"禁用状态",-1),U=s("h2",null,"只读状态",-1),b=s("h2",null,"自定义尺寸",-1);t();const j=r(((l,a,e,t,d,c)=>{const i=n("nut-rate");return u(),v("div",h,[p,s("div",null,[s(i,{value:l.state.val,"onUpdate:value":a[1]||(a[1]=a=>l.state.val=a)},null,8,["value"])]),f,s("div",null,[s(i,{"checked-icon":"heart-fill1","unchecked-icon":"heart",value:l.state.val3,"onUpdate:value":a[2]||(a[2]=a=>l.state.val3=a)},null,8,["value"])]),m,s("div",null,[s(i,{total:6,value:l.state.val4,"onUpdate:value":a[3]||(a[3]=a=>l.state.val4=a)},null,8,["value"])]),k,s("div",null,[s(i,{"active-color":"#FFC800",value:l.state.val5,"onUpdate:value":a[4]||(a[4]=a=>l.state.val5=a)},null,8,["value"])]),C,s("div",null,[s(i,{disabled:!0,value:l.state.val6,"onUpdate:value":a[5]||(a[5]=a=>l.state.val6=a)},null,8,["value"])]),U,s("div",null,[s(i,{value:2,"read-only":!0})]),s("h2",null,"绑定事件,"+o(l.state.result),1),s("div",null,[s(i,{onClick:l.onClick},null,8,["onClick"])]),b,s("div",null,[s(i,{size:35})])])}));i.render=j,i.__scopeId="data-v-a5fce49a";export default i;