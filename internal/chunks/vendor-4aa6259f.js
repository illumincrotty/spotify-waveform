var pt=Object.defineProperty;var Q=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable;var X=(t,e,n)=>e in t?pt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,z=(t,e)=>{for(var n in e||(e={}))gt.call(e,n)&&X(t,n,e[n]);if(Q)for(var n of Q(e))bt.call(e,n)&&X(t,n,e[n]);return t};function b(){}const Y=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function xt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Z(t){return t()}function $(){return Object.create(null)}function x(t){t.forEach(Z)}function A(t){return typeof t=="function"}function tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function kt(t){return Object.keys(t).length===0}function vt(t,e,n,l){if(t){const i=et(t,e,n,l);return t[0](i)}}function et(t,e,n,l){return t[1]&&l?wt(n.ctx.slice(),t[1](l(e))):n.ctx}function Et(t,e,n,l){if(t[2]&&l){const i=t[2](l(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const a=[],s=Math.max(e.dirty.length,i.length);for(let c=0;c<s;c+=1)a[c]=e.dirty[c]|i[c];return a}return e.dirty|i}return e.dirty}function St(t,e,n,l,i,a){if(i){const s=et(e,n,l,a);t.p(s,i)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function me(t){const e={};for(const n in t)e[n]=!0;return e}function Ct(t){return t&&A(t.destroy)?t.destroy:b}const nt=typeof window!="undefined";let jt=nt?()=>window.performance.now():()=>Date.now(),B=nt?t=>requestAnimationFrame(t):b;const k=new Set;function lt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&B(lt)}function At(t){let e;return k.size===0&&B(lt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let T=!1;function Tt(){T=!0}function Rt(){T=!1}function Mt(t,e,n,l){for(;t<e;){const i=t+(e-t>>1);n(i)<=l?t=i+1:e=i}return t}function Ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&r.push(_)}e=r}const n=new Int32Array(e.length+1),l=new Int32Array(e.length);n[0]=-1;let i=0;for(let r=0;r<e.length;r++){const o=e[r].claim_order,_=(i>0&&e[n[i]].claim_order<=o?i+1:Mt(1,i,u=>e[n[u]].claim_order,o))-1;l[r]=n[_]+1;const f=_+1;n[f]=r,i=Math.max(f,i)}const a=[],s=[];let c=e.length-1;for(let r=n[i]+1;r!=0;r=l[r-1]){for(a.push(e[r-1]);c>=r;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);a.reverse(),s.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<s.length;r++){for(;o<a.length&&s[r].claim_order>=a[o].claim_order;)o++;const _=o<a.length?a[o]:null;t.insertBefore(s[r],_)}}function Pt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function qt(t){const e=I("style");return Dt(rt(t),e),e}function Dt(t,e){Pt(t.head||t,e)}function Lt(t,e){if(T){for(Ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function zt(t,e,n){T&&!n?Lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function F(t){t.parentNode.removeChild(t)}function ye(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function Bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function pe(){return H(" ")}function ge(){return H("")}function be(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function we(t){return function(e){return e.preventDefault(),t.call(this,e)}}function xe(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ft(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}function It(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,l,i=!1){It(t);const a=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const r=n(c);return r===void 0?t.splice(s,1):t[s]=r,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const r=n(c);return r===void 0?t.splice(s,1):t[s]=r,i?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return l()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function ct(t,e,n,l){return st(t,i=>i.nodeName===e,i=>{const a=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||a.push(c.name)}a.forEach(s=>i.removeAttribute(s))},()=>l(e))}function Ht(t,e,n){return ct(t,e,n,I)}function ke(t,e,n){return ct(t,e,n,Bt)}function Vt(t,e){return st(t,n=>n.nodeType===3,n=>{const l=""+e;if(n.data.startsWith(l)){if(n.data.length!==l.length)return n.splitText(l.length)}else n.data=l},()=>H(e),!0)}function ve(t){return Vt(t," ")}function Ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ot(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}function R(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,!1,e),l}function Se(t,e=document.body){return Array.from(e.querySelectorAll(t))}const V=new Set;let M=0;function Wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ut(t,e,n,l,i,a,s,c=0){const r=16.666/l;let o=`{
`;for(let g=0;g<=1;g+=r){const w=e+(n-e)*a(g);o+=g*100+`%{${s(w,1-w)}}
`}const _=o+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Wt(_)}_${c}`,u=rt(t);V.add(u);const h=u.__svelte_stylesheet||(u.__svelte_stylesheet=qt(t).sheet),m=u.__svelte_rules||(u.__svelte_rules={});m[f]||(m[f]=!0,h.insertRule(`@keyframes ${f} ${_}`,h.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${l}ms linear ${i}ms 1 both`,M+=1,f}function Ut(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),i=n.length-l.length;i&&(t.style.animation=l.join(", "),M-=i,M||Gt())}function Gt(){B(()=>{M||(V.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),V.clear())})}let E;function y(t){E=t}function S(){if(!E)throw new Error("Function called outside component initialization");return E}function Ne(t){S().$$.on_mount.push(t)}function Ce(t){S().$$.after_update.push(t)}function Jt(){const t=S();return(e,n)=>{const l=t.$$.callbacks[e];if(l){const i=at(e,n);l.slice().forEach(a=>{a.call(t,i)})}}}function je(t,e){S().$$.context.set(t,e)}function Ae(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(l=>l.call(this,e))}const N=[],ft=[],O=[],dt=[],Kt=Promise.resolve();let W=!1;function Qt(){W||(W=!0,Kt.then(G))}function P(t){O.push(t)}const U=new Set;let q=0;function G(){const t=E;do{for(;q<N.length;){const e=N[q];q++,y(e),Xt(e.$$)}for(y(null),N.length=0,q=0;ft.length;)ft.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];U.has(n)||(U.add(n),n())}O.length=0}while(N.length);for(;dt.length;)dt.pop()();W=!1,U.clear(),y(t)}function Xt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let C;function Yt(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function J(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const D=new Set;let p;function Zt(){p={r:0,c:[],p}}function $t(){p.r||x(p.c),p=p.p}function K(t,e){t&&t.i&&(D.delete(t),t.i(e))}function _t(t,e,n,l){if(t&&t.o){if(D.has(t))return;D.add(t),p.c.push(()=>{D.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}const te={duration:0};function Te(t,e,n,l){let i=e(t,n),a=l?0:1,s=null,c=null,r=null;function o(){r&&Ut(t,r)}function _(u,h){const m=u.b-a;return h*=Math.abs(m),{a,b:u.b,d:m,duration:h,start:u.start,end:u.start+h,group:u.group}}function f(u){const{delay:h=0,duration:m=300,easing:d=Y,tick:g=b,css:w}=i||te,L={start:jt()+h,b:u};u||(L.group=p,p.r+=1),s||c?c=L:(w&&(o(),r=ut(t,a,u,m,h,d,w)),u&&g(0,1),s=_(L,m),P(()=>J(t,u,"start")),At(j=>{if(c&&j>c.start&&(s=_(c,m),c=null,J(t,s.b,"start"),w&&(o(),r=ut(t,a,s.b,s.duration,0,d,i.css))),s){if(j>=s.end)g(a=s.b,1-a),J(t,s.b,"end"),c||(s.b?o():--s.group.r||x(s.group.c)),s=null;else if(j>=s.start){const yt=j-s.start;a=s.a+s.d*d(yt/s.duration),g(a,1-a)}}return!!(s||c)}))}return{run(u){A(i)?Yt().then(()=>{i=i(),f(u)}):f(u)},end(){o(),s=c=null}}}function Re(t,e){const n=e.token={};function l(i,a,s,c){if(e.token!==n)return;e.resolved=c;let r=e.ctx;s!==void 0&&(r=r.slice(),r[s]=c);const o=i&&(e.current=i)(r);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,u)=>{u!==a&&f&&(Zt(),_t(f,1,1,()=>{e.blocks[u]===f&&(e.blocks[u]=null)}),$t())}):e.block.d(1),o.c(),K(o,1),o.m(e.mount(),e.anchor),_=!0),e.block=o,e.blocks&&(e.blocks[a]=o),_&&G()}if(xt(t)){const i=S();if(t.then(a=>{y(i),l(e.then,1,e.value,a),y(null)},a=>{if(y(i),l(e.catch,2,e.error,a),y(null),!e.hasCatch)throw a}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function Me(t,e,n){const l=e.slice(),{resolved:i}=t;t.current===t.then&&(l[t.value]=i),t.current===t.catch&&(l[t.error]=i),t.block.p(l,n)}const Oe=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Pe(t,e){const n={},l={},i={$$scope:1};let a=t.length;for(;a--;){const s=t[a],c=e[a];if(c){for(const r in s)r in c||(l[r]=1);for(const r in c)i[r]||(n[r]=c[r],i[r]=1);t[a]=c}else for(const r in s)i[r]=1}for(const s in l)s in n||(n[s]=void 0);return n}function qe(t){return typeof t=="object"&&t!==null?t:{}}function De(t){t&&t.c()}function Le(t,e){t&&t.l(e)}function ee(t,e,n,l){const{fragment:i,on_mount:a,on_destroy:s,after_update:c}=t.$$;i&&i.m(e,n),l||P(()=>{const r=a.map(Z).filter(A);s?s.push(...r):x(r),t.$$.on_mount=[]}),c.forEach(P)}function ne(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function le(t,e){t.$$.dirty[0]===-1&&(N.push(t),Qt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function re(t,e,n,l,i,a,s,c=[-1]){const r=E;y(t);const o=t.$$={fragment:null,ctx:null,props:a,update:b,not_equal:i,bound:$(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:$(),dirty:c,skip_bound:!1,root:e.target||r.$$.root};s&&s(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(f,u,...h)=>{const m=h.length?h[0]:u;return o.ctx&&i(o.ctx[f],o.ctx[f]=m)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](m),_&&le(t,f)),u}):[],o.update(),_=!0,x(o.before_update),o.fragment=l?l(o.ctx):!1,e.target){if(e.hydrate){Tt();const f=it(e.target);o.fragment&&o.fragment.l(f),f.forEach(F)}else o.fragment&&o.fragment.c();e.intro&&K(t.$$.fragment),ee(t,e.target,e.anchor,e.customElement),Rt(),G()}y(r)}class ie{$destroy(){ne(this,1),this.$destroy=b}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!kt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const v=[];function ze(t,e=b){let n;const l=new Set;function i(c){if(tt(t,c)&&(t=c,n)){const r=!v.length;for(const o of l)o[1](),v.push(o,t);if(r){for(let o=0;o<v.length;o+=2)v[o][0](v[o+1]);v.length=0}}}function a(c){i(c(t))}function s(c,r=b){const o=[c,r];return l.add(o),l.size===1&&(n=e(i)||b),c(t),()=>{l.delete(o),l.size===0&&(n(),n=null)}}return{set:i,update:a,subscribe:s}}function Be(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Fe(t,{delay:e=0,duration:n=400,easing:l=Y}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:l,css:a=>`opacity: ${a*i}`}}const ht=t=>t.childNodes.length===1&&t.childNodes[0].nodeType===3,se=(t,e)=>{const n=document.createElement(e);return n.textContent=t,n},ce=t=>t.dataset.static===void 0,mt=(t,{parentElement:e})=>{if(ht(e)){const n=e.textContent,l=se(e.textContent,"p");return e.textContent="",e.appendChild(l),[{currentNode:l,text:n}]}if(ht(t)){const n=t.innerHTML.replaceAll("&amp;","&");return[{currentNode:t,text:n}]}else return[...t.children].filter(ce).flatMap(i=>mt(i,{parentElement:e}))},oe=async(t,e,n)=>{if(!e){console.error("The specified parent element does not exists!");return}let l=t;do{if(l===e)return;n(l),l=l.parentElement||l.parentNode}while(l!==null&&l.nodeType===1)},ae=t=>{const e=[...t.querySelectorAll("[data-static]")];for(const n of e)oe(n,t,l=>{l!==n&&l.classList.add("finished-typing")})},ue=async t=>t.loop||t.loopRandom?(await import("./loopTypewriter-bb985aa8.js")).mode:t.scramble?(await import("./scramble-4416e630.js")).mode:(await import("./typewriter-34037a7c.js")).mode,fe=async(t,e)=>{ae(t);const n=await ue(e),l=mt(t,z({parentElement:t},e));if(e.delay>0){const{sleep:i}=await import("./sleep-8e06002e.js");await i(e.delay),t.classList.remove("delay")}n(l,z({parentElement:t},e))};function de(t){let e,n,l,i,a;const s=t[10].default,c=vt(s,t,t[9],null);return{c(){e=I("div"),c&&c.c(),this.h()},l(r){e=Ht(r,"DIV",{class:!0,style:!0});var o=it(e);c&&c.l(o),o.forEach(F),this.h()},h(){Ft(e,"class","typewriter-container svelte-x4aoef"),ot(e,"--cursor-color",typeof t[0]=="string"?t[0]:"black"),R(e,"cursor",t[0]),R(e,"delay",t[1].delay>0)},m(r,o){zt(r,e,o),c&&c.m(e,null),l=!0,i||(a=Ct(n=fe.call(null,e,t[1])),i=!0)},p(r,[o]){c&&c.p&&(!l||o&512)&&St(c,s,r,r[9],l?Et(s,r[9],o,null):Nt(r[9]),null),(!l||o&1)&&ot(e,"--cursor-color",typeof r[0]=="string"?r[0]:"black"),n&&A(n.update)&&o&2&&n.update.call(null,r[1]),o&1&&R(e,"cursor",r[0]),o&2&&R(e,"delay",r[1].delay>0)},i(r){l||(K(c,r),l=!0)},o(r){_t(c,r),l=!1},d(r){r&&F(e),c&&c.d(r),i=!1,a()}}}function _e(t,e,n){let l,{$$slots:i={},$$scope:a}=e,{interval:s=30}=e,{cascade:c=!1}=e,{loop:r=!1}=e,{loopRandom:o=!1}=e,{scramble:_=!1}=e,{scrambleSlowdown:f=!!_}=e,{cursor:u=!0}=e,{delay:h=0}=e;const m=Jt();return t.$$set=d=>{"interval"in d&&n(2,s=d.interval),"cascade"in d&&n(3,c=d.cascade),"loop"in d&&n(4,r=d.loop),"loopRandom"in d&&n(5,o=d.loopRandom),"scramble"in d&&n(6,_=d.scramble),"scrambleSlowdown"in d&&n(7,f=d.scrambleSlowdown),"cursor"in d&&n(0,u=d.cursor),"delay"in d&&n(8,h=d.delay),"$$scope"in d&&n(9,a=d.$$scope)},t.$$.update=()=>{t.$$.dirty&509&&n(1,l={interval:s,cascade:c,loop:r,loopRandom:o,scramble:_,scrambleSlowdown:f,cursor:u,delay:h,dispatch:m})},[u,l,s,c,r,o,_,f,h,a,i]}class Ie extends ie{constructor(e){super();re(this,e,_e,de,tt,{interval:2,cascade:3,loop:4,loopRandom:5,scramble:6,scrambleSlowdown:7,cursor:0,delay:8})}}export{Be as $,Ne as A,wt as B,ze as C,vt as D,St as E,Nt as F,Et as G,Lt as H,b as I,Bt as J,ke as K,be as L,x as M,Se as N,R as O,ot as P,ye as Q,P as R,ie as S,me as T,xe as U,we as V,Jt as W,Re as X,Me as Y,Te as Z,Fe as _,it as a,Ie as a0,Oe as a1,Ae as a2,oe as a3,Ft as b,Ht as c,F as d,I as e,zt as f,Vt as g,Ee as h,re as i,De as j,pe as k,ge as l,Le as m,ve as n,ee as o,Pe as p,qe as q,Zt as r,tt as s,H as t,_t as u,ne as v,$t as w,K as x,je as y,Ce as z};
