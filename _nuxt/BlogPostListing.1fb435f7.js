import x from"./Icon.7bab3ba4.js";import{_ as g}from"./DefaultLink.vue.4d7090e5.js";import{_ as y}from"./client-only.4e99a554.js";import{a as k,r as d,b,q as v,o as t,c as r,w as _,u as a,e as o,f as w,h as u,F as B,i as U,j as p,t as l,k as m}from"./entry.951a0fee.js";import"./config.0dc5f4a9.js";import"./nuxt-link.97d0df8f.js";const C={key:1,class:"text-red-500"},L={key:2,class:"flex flex-col"},O=["title"],$={class:"absolute top-[-2px] left-[-3px] group-hover:text-white transition"},M=k({__name:"BlogPostListing",setup(N){const n=d(!0),s=d();return b(async()=>{s.value=await v("posts").where({_empty:!1,_draft:!1}).sort({publishedOn:-1,$numeric:!0}).sort({lastUpdated:-1,$numeric:!0}).find(),n.value=!1}),(V,q)=>{const i=x,f=g,h=y;return t(),r(h,null,{default:_(()=>{var c;return[a(n)?(t(),r(i,{key:0,name:"svg-spinners:3-dots-move"})):!a(n)&&!a(s)?(t(),o("p",C,[w(i,{name:"line-md:alert-twotone",class:"text-orange-500 w-6 h-6"}),u(" Unable to get posts ")])):!a(n)&&a(s)&&((c=a(s))==null?void 0:c.length)>0?(t(),o("div",L,[(t(!0),o(B,null,U(a(s),e=>(t(),r(f,{key:e._id,to:e._path,class:"w-fit group"},{default:_(()=>[e.publishedOn||e.lastUpdated?(t(),o("span",{key:0,title:`Published on: ${e.publishedOn??"-"}. Last updated on: ${e.lastUpdated??"-"}`,class:"relative text-xs text-gray-600 dark:text-gray-400 group-hover:text-inherit leading-[1] mr-2"},[p("span",$,l(e.lastUpdated?"*":""),1),u(l(e.lastUpdated??e.publishedOn),1)],8,O)):m("",!0),p("span",null,l(e.title),1)]),_:2},1032,["to"]))),128))])):m("",!0)]}),_:1})}}});export{M as default};
