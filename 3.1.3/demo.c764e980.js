var e=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(s,o,t)=>o in s?e(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t;import{c as l}from"./mobile.624baa27.js";import{m as a,a as i,b as n,A as u,W as f,B as d,C as c,r as h,o as m,e as L,j as p,k as M,g as b,F as g,i as v,t as y}from"./vendor.e1f99099.js";import"./index.84d39d93.js";const{createDemo:w}=l("infiniteloading");var j=w({props:{},setup(){let{proxy:e}=f();const l=a(!0),d=a(!0),c=a(!0),h=i({defultList:[""],customList:[""],refreshList:[""]});return n((()=>{(()=>{for(let e=0;e<10;e++)h.defultList.push(`${e}`),h.customList.push(`${e}`),h.refreshList.push(`${e}`)})()})),((e,l)=>{for(var a in l||(l={}))o.call(l,a)&&r(e,a,l[a]);if(s)for(var a of s(l))t.call(l,a)&&r(e,a,l[a]);return e})({loadMore:e=>{setTimeout((()=>{const s=h.defultList.length;for(let e=s;e<s+10;e++)h.defultList.push(`${e}`);h.defultList.length>30&&(l.value=!1),e()}),500)},hasMore:l,customHasMore:d,customLoadMore:e=>{setTimeout((()=>{const s=h.customList.length;for(let e=s;e<s+10;e++)h.customList.push(`${e}`);h.customList.length>30&&(d.value=!1),e()}),500)},refreshHasMore:c,refreshLoadMore:e=>{setTimeout((()=>{const s=h.refreshList.length;for(let e=s;e<s+10;e++)h.refreshList.push(`${e}`);h.refreshList.length>30&&(c.value=!1),e()}),500)},refresh:s=>{setTimeout((()=>{e.$toast.text("刷新成功"),s()}),1e3)}},u(h))}});d("data-v-f487295e");const _={class:"demo"},$=b("h2",null,"基础用法",-1),x={class:"infiniteUl",id:"scroll"},O=b("h2",null,"下拉刷新",-1),S={class:"infiniteUl",id:"refreshScroll"},k=b("h2",null,"自定义加载文案",-1),H={class:"infiniteUl",id:"customScroll"};c(),j.render=function(e,s,o,t,r,l){const a=h("nut-infiniteloading"),i=h("nut-cell");return m(),L("div",_,[$,p(i,null,{default:M((()=>[b("ul",x,[p(a,{"container-id":"scroll","use-window":!1,"has-more":e.hasMore,onLoadMore:e.loadMore},{default:M((()=>[(m(!0),L(g,null,v(e.defultList,((e,s)=>(m(),L("li",{class:"infiniteLi",key:s},y(e),1)))),128))])),_:1},8,["has-more","onLoadMore"])])])),_:1}),O,p(i,null,{default:M((()=>[b("ul",S,[p(a,{"pull-icon":"JD","container-id":"refreshScroll","use-window":!1,"is-open-refresh":!0,"has-more":e.refreshHasMore,onLoadMore:e.refreshLoadMore,onRefresh:e.refresh},{default:M((()=>[(m(!0),L(g,null,v(e.refreshList,((e,s)=>(m(),L("li",{class:"infiniteLi",key:s},y(e),1)))),128))])),_:1},8,["has-more","onLoadMore","onRefresh"])])])),_:1}),k,p(i,null,{default:M((()=>[b("ul",H,[p(a,{"load-txt":"loading","load-more-txt":"没有啦～","container-id":"customScroll","use-window":!1,"has-more":e.customHasMore,onLoadMore:e.customLoadMore},{default:M((()=>[(m(!0),L(g,null,v(e.customList,((e,s)=>(m(),L("li",{class:"infiniteLi",key:s},y(e),1)))),128))])),_:1},8,["has-more","onLoadMore"])])])),_:1})])},j.__scopeId="data-v-f487295e";export{j as default};
