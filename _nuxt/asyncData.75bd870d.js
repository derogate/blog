import{J as g,r as p,a2 as P,b,a3 as D,L as x,u as w,a4 as C,a5 as O}from"./entry.1eed086e.js";const k=()=>null;function E(...o){var m;const l=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(l);let[t,u,e={}]=o;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??k,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=g(),f=()=>a.isHydrating?a.payload.data[t]:a.static.data[t],d=()=>f()!==void 0;a._asyncData[t]||(a._asyncData[t]={data:p(f()??((m=e.default)==null?void 0:m.call(e))??null),pending:p(!d()),error:P(a.payload._errors,t)});const r={...a._asyncData[t]};r.refresh=r.execute=(s={})=>{if(a._asyncDataPromises[t]){if(s.dedupe===!1)return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if(s._initial&&d())return f();r.pending.value=!0;const c=new Promise((n,i)=>{try{n(u(a))}catch(_){i(_)}}).then(n=>{if(c.cancelled)return a._asyncDataPromises[t];let i=n;e.transform&&(i=e.transform(n)),e.pick&&(i=B(i,e.pick)),r.data.value=i,r.error.value=null}).catch(n=>{var i;if(c.cancelled)return a._asyncDataPromises[t];r.error.value=n,r.data.value=w(((i=e.default)==null?void 0:i.call(e))??null)}).finally(()=>{c.cancelled||(r.pending.value=!1,a.payload.data[t]=r.data.value,r.error.value&&(a.payload._errors[t]=C(r.error.value)),delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=c,a._asyncDataPromises[t]};const y=()=>r.refresh({_initial:!0}),v=e.server!==!1&&a.payload.serverRendered;{const s=O();if(s&&!s._nuxtOnBeforeMountCbs){s._nuxtOnBeforeMountCbs=[];const n=s._nuxtOnBeforeMountCbs;s&&(b(()=>{n.forEach(i=>{i()}),n.splice(0,n.length)}),D(()=>n.splice(0,n.length)))}v&&a.isHydrating&&d()?r.pending.value=!1:s&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?s._nuxtOnBeforeMountCbs.push(y):e.immediate&&y(),e.watch&&x(e.watch,()=>r.refresh());const c=a.hook("app:data:refresh",n=>{if(!n||n.includes(t))return r.refresh()});s&&D(c)}const h=Promise.resolve(a._asyncDataPromises[t]).then(()=>r);return Object.assign(h,r),h}function B(o,l){const t={};for(const u of l)t[u]=o[u];return t}export{E as u};
