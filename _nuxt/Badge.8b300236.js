import o from"./ContentSlot.3a324250.js";import{a,o as s,e as r,f as _,p,s as c}from"./entry.33960534.js";const d=a({__name:"Badge",props:{type:{type:String,default:"info",validator(e){return["info","success","warning","danger","primary"].includes(e)}}},setup(e){return(t,l)=>{const n=o;return s(),r("span",{class:p([[e.type],"badge"])},[_(n,{use:t.$slots.default,unwrap:"p"},null,8,["use"])],2)}}});const i=c(d,[["__scopeId","data-v-35fd83d3"]]);export{i as default};