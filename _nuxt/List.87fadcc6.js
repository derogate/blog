import r from"./Icon.3eb09b1b.js";import l from"./ContentSlot.debaf68a.js";import{a as u,B as p,C as m,y as e,D as _,s as d}from"./entry.1eed086e.js";import"./config.9406157b.js";const f={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},y=u({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:n=>["primary","info","success","warning","danger"].includes(n)}},setup(n){const o=p(),{flatUnwrap:s,unwrap:i}=_(),a=m(()=>n.icon||f[n.type]);return()=>{const c=s((o.default&&o.default())??[],["ul"]).map(t=>i(t,["li"]));return e("ul",c.map(t=>e("li",[e("span",{class:`list-icon ${n.type}`},e(r,{name:a.value,class:"icon"})),e("span",e(l,{use:()=>t}))])))}}});const w=d(y,[["__scopeId","data-v-6109395b"]]);export{w as default};
