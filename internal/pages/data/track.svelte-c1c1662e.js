import{S as A,i as C,s as I,k as g,f as b,d as h,L as P,M as z,a as E,b as u,W as D,P as J,n as d,o as O,p as _,J as R,u as U,m as T,a4 as G,v as L,w as M,x as N,A as B}from"../../chunks/vendor-a1568714.js";import{P as H}from"../../chunks/page-bb6f7289.js";import{t as K}from"../../chunks/storeSession-d1b3e66e.js";import{c as Q}from"../../chunks/track.svelte_svelte_type_style_lang-a4055f75.js";import{O as V}from"../../chunks/overlayLoading-757403d2.js";import"../../chunks/button-4ee46cb2.js";import"../../chunks/loader-3b4d8f20.js";/* empty css                                                                */import"../../chunks/overlay-56895802.js";/* empty css                                                         *//* empty css                                                                */function W(n,t,r){const e=n.slice();return e[2]=t[r],e[4]=r,e}function X(n){let t,r,e,l;return{c(){t=P("rect"),this.h()},l(a){t=z(a,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),E(t).forEach(h),this.h()},h(){u(t,"x",r=n[4]/y*($+v)),u(t,"y",e=m/2-m*n[2]/2),u(t,"width",$),u(t,"height",l=m*n[2]),u(t,"rx","2")},m(a,o){b(a,t,o)},p(a,o){o&1&&e!==(e=m/2-m*a[2]/2)&&u(t,"y",e),o&1&&l!==(l=m*a[2])&&u(t,"height",l)},d(a){a&&h(t)}}}function q(n){let t,r=n[4]%y==0&&X(n);return{c(){r&&r.c(),t=g()},l(e){r&&r.l(e),t=g()},m(e,l){r&&r.m(e,l),b(e,t,l)},p(e,l){e[4]%y==0&&r.p(e,l)},d(e){r&&r.d(e),e&&h(t)}}}function Y(n){let t,r,e=n[0],l=[];for(let a=0;a<e.length;a+=1)l[a]=q(W(n,e,a));return{c(){t=P("svg");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){t=z(a,"svg",{xmlns:!0,viewBox:!0,"fill-rule":!0,"clip-rule":!0,"stroke-linejoin":!0,"stroke-miterlimit":!0,"aria-label":!0});var o=E(t);for(let s=0;s<l.length;s+=1)l[s].l(o);o.forEach(h),this.h()},h(){u(t,"xmlns","http://www.w3.org/2000/svg"),u(t,"viewBox",r="0 0 "+Math.ceil(n[0].length/y*($+v)-v)+" "+m),u(t,"fill-rule","evenodd"),u(t,"clip-rule","evenodd"),u(t,"stroke-linejoin","round"),u(t,"stroke-miterlimit","2"),u(t,"aria-label",n[1])},m(a,o){b(a,t,o);for(let s=0;s<l.length;s+=1)l[s].m(t,null)},p(a,[o]){if(o&1){e=a[0];let s;for(s=0;s<e.length;s+=1){const i=W(a,e,s);l[s]?l[s].p(i,o):(l[s]=q(i),l[s].c(),l[s].m(t,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=e.length}o&1&&r!==(r="0 0 "+Math.ceil(a[0].length/y*($+v)-v)+" "+m)&&u(t,"viewBox",r),o&2&&u(t,"aria-label",a[1])},i:D,o:D,d(a){a&&h(t),J(l,a)}}}const $=4,v=1,y=1,m=100;function Z(n,t,r){let{data:e=[]}=t,{label:l="Chart"}=t;return n.$$set=a=>{"data"in a&&r(0,e=a.data),"label"in a&&r(1,l=a.label)},[e,l]}class ee extends A{constructor(t){super();C(this,t,Z,Y,I,{data:0,label:1})}}function te(n){let t,r;return t=new H({props:{title:n[2],$$slots:{default:[re]},$$scope:{ctx:n}}}),{c(){L(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){N(t,e,l),r=!0},p(e,l){const a={};l&4&&(a.title=e[2]),l&2050&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){B(t,e)}}}function le(n){let t,r;return t=new V({}),{c(){L(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){N(t,e,l),r=!0},p:D,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){B(t,e)}}}function F(n){let t,r;return t=new ee({props:{data:n[1]}}),{c(){L(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){N(t,e,l),r=!0},p(e,l){const a={};l&2&&(a.data=e[1]),t.$set(a)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){B(t,e)}}}function re(n){let t,r,e=n[1]&&F(n);return{c(){e&&e.c(),t=g()},l(l){e&&e.l(l),t=g()},m(l,a){e&&e.m(l,a),b(l,t,a),r=!0},p(l,a){l[1]?e?(e.p(l,a),a&2&&_(e,1)):(e=F(l),e.c(),_(e,1),e.m(t.parentNode,t)):e&&(T(),d(e,1,1,()=>{e=null}),O())},i(l){r||(_(e),r=!0)},o(l){d(e),r=!1},d(l){e&&e.d(l),l&&h(t)}}}function ae(n){let t,r,e,l;const a=[le,te],o=[];function s(i,c){return i[0]===""?0:1}return t=s(n),r=o[t]=a[t](n),{c(){r.c(),e=g()},l(i){r.l(i),e=g()},m(i,c){o[t].m(i,c),b(i,e,c),l=!0},p(i,[c]){let p=t;t=s(i),t===p?o[t].p(i,c):(T(),d(o[p],1,1,()=>{o[p]=null}),O(),r=o[t],r?r.p(i,c):(r=o[t]=a[t](i),r.c()),_(r,1),r.m(e.parentNode,e))},i(i){l||(_(r),l=!0)},o(i){d(r),l=!1},d(i){o[t].d(i),i&&h(e)}}}function ne(n,t,r){let e;R(n,K,c=>r(8,e=c));let{trackID:l=""}=t,a,o,s="Track Name";U(()=>{if(l===""){const c=new URLSearchParams(window.location.search);c.has("id")?(console.debug(c.get("id")),r(0,l=c.get("id"))):history.back()}console.debug(`id: ${l}`),e!=="empty"&&i(e),G().then(()=>{})});const i=async c=>{a=Q(c);const p=await a.track(l);r(2,s=`${p.name} by ${p.artists[0].name}`),a.track(l),a.audioFeatures(l),a.audioAnalysis(l);let j=await a.audioAnalysis(l),k=j.segments.map(f=>({time:f.start,duration:f.duration,loud:1-Math.min(Math.max(f.loudness_max,-35),0)/-35}));r(1,o=k.map(f=>f.loud));const S=[];let w=0;console.log(`Duration: ${j.track.duration}`);for(let f=0;f<100;f++){const x=j.track.duration/100*f;for(console.log(x);k.length-1>w&&k[w+1].time<=x;)w+=1;S.push(k[w].loud)}r(1,o=S),console.log(k),console.log(S)};return n.$$set=c=>{"trackID"in c&&r(0,l=c.trackID)},[l,o,s]}class ge extends A{constructor(t){super();C(this,t,ne,ae,I,{trackID:0})}}export{ge as default};
