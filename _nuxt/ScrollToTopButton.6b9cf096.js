import r from"./Icon.ae655e51.js";import{b as c,a as l,u}from"./index.f2f77223.js";import{a as _,C as i,r as m,o as t,c as p,w as d,u as f,e as v,f as b,k as h,a9 as k,s as x}from"./entry.33960534.js";import"./config.f20e9c00.js";const w=_({__name:"ScrollToTopButton",setup(T){const{y:n}=c(),e=i(()=>n.value>400),o=m(e.value);l("scroll",u(()=>{e.value?o.value=!0:o.value=!1},150));const a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(g,B)=>{const s=r;return t(),p(k,{name:"fade",mode:"out-in"},{default:d(()=>[f(o)?(t(),v("button",{key:0,onClick:a,class:"sticky bottom-4 z-[1] ml-auto sm:-mr-4 flex p-2 rounded-full border group transition bg-black/60 hover:border-teal-500 hover:ring-1 hover:ring-teal-500 hover:bg-black"},[b(s,{name:"line-md:arrow-up",class:"group-hover:text-teal-500 transition duration-250 ease-in-out"})])):h("",!0)]),_:1})}}});const I=x(w,[["__scopeId","data-v-b8d26e01"]]);export{I as default};