import{S,i as C,s as L,k as g,f as p,L as A,M as I,a as P,d as h,b as f,V as y,P as J,n as _,o as z,p as m,J as R,u as U,m as E,a3 as V,v as j,w as M,x as N,A as B}from"../../chunks/vendor-7791b14a.js";import{t as G}from"../../chunks/storeSession-26f31574.js";import{c as H}from"../../chunks/api-c4cf8858.js";import{P as K}from"../../chunks/page-9c97327a.js";import{O as Q}from"../../chunks/overlayLoading-a2c42172.js";import"../../chunks/buttonBase-968700bd.js";import"../../chunks/loader-ca43e76f.js";import"../../chunks/overlay-6dd64090.js";function O(n,t,l){const e=n.slice();return e[6]=t[l],e[8]=l,e}function T(n){let t,l,e,a,r;return{c(){t=A("rect"),this.h()},l(o){t=I(o,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),P(t).forEach(h),this.h()},h(){f(t,"x",l=1+n[8]/n[4]*(n[2]+n[3])),f(t,"y",e=n[5]/2-Math.max(n[5]*n[6],n[2])/2),f(t,"width",n[2]),f(t,"height",a=Math.max(n[5]*n[6],n[2])),f(t,"rx",r=n[2]/2)},m(o,i){p(o,t,i)},p(o,i){i&28&&l!==(l=1+o[8]/o[4]*(o[2]+o[3]))&&f(t,"x",l),i&37&&e!==(e=o[5]/2-Math.max(o[5]*o[6],o[2])/2)&&f(t,"y",e),i&4&&f(t,"width",o[2]),i&37&&a!==(a=Math.max(o[5]*o[6],o[2]))&&f(t,"height",a),i&4&&r!==(r=o[2]/2)&&f(t,"rx",r)},d(o){o&&h(t)}}}function q(n){let t,l=n[8]%n[4]==0&&T(n);return{c(){l&&l.c(),t=g()},l(e){l&&l.l(e),t=g()},m(e,a){l&&l.m(e,a),p(e,t,a)},p(e,a){e[8]%e[4]==0?l?l.p(e,a):(l=T(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(e){l&&l.d(e),e&&h(t)}}}function W(n){let t,l,e=n[0],a=[];for(let r=0;r<e.length;r+=1)a[r]=q(O(n,e,r));return{c(){t=A("svg");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){t=I(r,"svg",{xmlns:!0,viewBox:!0,"fill-rule":!0,"clip-rule":!0,"stroke-linejoin":!0,"stroke-miterlimit":!0,"aria-label":!0});var o=P(t);for(let i=0;i<a.length;i+=1)a[i].l(o);o.forEach(h),this.h()},h(){f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"viewBox",l="0 0 "+Math.ceil(n[0].length/n[4]*(n[2]+n[3])-n[3]+2)+" "+n[5]),f(t,"fill-rule","evenodd"),f(t,"clip-rule","evenodd"),f(t,"stroke-linejoin","round"),f(t,"stroke-miterlimit","2"),f(t,"aria-label",n[1])},m(r,o){p(r,t,o);for(let i=0;i<a.length;i+=1)a[i].m(t,null)},p(r,[o]){if(o&61){e=r[0];let i;for(i=0;i<e.length;i+=1){const u=O(r,e,i);a[i]?a[i].p(u,o):(a[i]=q(u),a[i].c(),a[i].m(t,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=e.length}o&61&&l!==(l="0 0 "+Math.ceil(r[0].length/r[4]*(r[2]+r[3])-r[3]+2)+" "+r[5])&&f(t,"viewBox",l),o&2&&f(t,"aria-label",r[1])},i:y,o:y,d(r){r&&h(t),J(a,r)}}}function X(n,t,l){let{data:e=[]}=t,{label:a="Chart"}=t,{width:r=4,space:o=1,mod:i=1,height:u=100}=t;return n.$$set=s=>{"data"in s&&l(0,e=s.data),"label"in s&&l(1,a=s.label),"width"in s&&l(2,r=s.width),"space"in s&&l(3,o=s.space),"mod"in s&&l(4,i=s.mod),"height"in s&&l(5,u=s.height)},[e,a,r,o,i,u]}class Y extends S{constructor(t){super();C(this,t,X,W,L,{data:0,label:1,width:2,space:3,mod:4,height:5})}}function Z(n){let t,l;return t=new K({props:{title:n[2],$$slots:{default:[x]},$$scope:{ctx:n}}}),{c(){j(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,a){N(t,e,a),l=!0},p(e,a){const r={};a&4&&(r.title=e[2]),a&2050&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){B(t,e)}}}function $(n){let t,l;return t=new Q({}),{c(){j(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,a){N(t,e,a),l=!0},p:y,i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){B(t,e)}}}function F(n){let t,l;return t=new Y({props:{data:n[1]}}),{c(){j(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,a){N(t,e,a),l=!0},p(e,a){const r={};a&2&&(r.data=e[1]),t.$set(r)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){B(t,e)}}}function x(n){let t,l,e=n[1]&&F(n);return{c(){e&&e.c(),t=g()},l(a){e&&e.l(a),t=g()},m(a,r){e&&e.m(a,r),p(a,t,r),l=!0},p(a,r){a[1]?e?(e.p(a,r),r&2&&m(e,1)):(e=F(a),e.c(),m(e,1),e.m(t.parentNode,t)):e&&(E(),_(e,1,1,()=>{e=null}),z())},i(a){l||(m(e),l=!0)},o(a){_(e),l=!1},d(a){e&&e.d(a),a&&h(t)}}}function ee(n){let t,l,e,a;const r=[$,Z],o=[];function i(u,s){return u[0]===""?0:1}return t=i(n),l=o[t]=r[t](n),{c(){l.c(),e=g()},l(u){l.l(u),e=g()},m(u,s){o[t].m(u,s),p(u,e,s),a=!0},p(u,[s]){let d=t;t=i(u),t===d?o[t].p(u,s):(E(),_(o[d],1,1,()=>{o[d]=null}),z(),l=o[t],l?l.p(u,s):(l=o[t]=r[t](u),l.c()),m(l,1),l.m(e.parentNode,e))},i(u){a||(m(l),a=!0)},o(u){_(l),a=!1},d(u){o[t].d(u),u&&h(e)}}}function te(n,t,l){let e;R(n,G,s=>l(8,e=s));let{trackID:a=""}=t,r,o,i="Track Name";U(()=>{if(a===""){const s=new URLSearchParams(window.location.search);s.has("id")?(console.debug(s.get("id")),l(0,a=s.get("id"))):history.back()}console.debug(`id: ${a}`),e!=="empty"&&u(e),V().then(()=>{})});const u=async s=>{r=H(s);const d=await r.track(a);l(2,i=`${d.name} by ${d.artists[0].name}`),r.track(a),r.audioFeatures(a),r.audioAnalysis(a);let w=await r.audioAnalysis(a),k=w.segments.map(c=>({time:c.start,duration:c.duration,loud:1-Math.min(Math.max(c.loudness_max,-35),0)/-35}));l(1,o=k.map(c=>c.loud));const v=[];let b=0;console.log(`Duration: ${w.track.duration}`);for(let c=0;c<100;c++){const D=w.track.duration/100*c;for(console.log(D);k.length-1>b&&k[b+1].time<=D;)b+=1;v.push(k[b].loud)}l(1,o=v),console.log(k),console.log(v)};return n.$$set=s=>{"trackID"in s&&l(0,a=s.trackID)},[a,o,i]}class fe extends S{constructor(t){super();C(this,t,te,ee,L,{trackID:0})}}export{fe as default};
