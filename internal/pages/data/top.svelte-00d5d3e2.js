var ye=Object.defineProperty;var ee=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var te=(n,e,t)=>e in n?ye(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,q=(n,e)=>{for(var t in e||(e={}))we.call(e,t)&&te(n,t,e[t]);if(ee)for(var t of ee(e))Ee.call(e,t)&&te(n,t,e[t]);return n};import{S as le,i as ae,s as ne,e as g,t as L,j as V,c as y,a as w,g as S,l as C,d as p,b as f,R as z,f as T,F as k,T as F,h as N,a5 as se,a6 as re,W as j,P as R,U as Te,a7 as Ae,v as G,E as De,w as J,x as W,p as I,n as P,A as X,J as Ie,u as Le,O as Q,k as O,a0 as M,a1 as oe,m as Y,o as Z,X as Se,a8 as ie,a9 as ce,$ as ue}from"../../chunks/vendor-4237203b.js";import{P as je}from"../../chunks/page-d2feb634.js";import{t as Pe}from"../../chunks/storeSession-fce0342a.js";/* empty css                                                               *//* empty css                                                         *//* empty css                                                              */import"../../chunks/button-7043fb29.js";const Ve=n=>n?`?${Object.entries(n).map(e=>e[0]&&e[1]?`${e[0]}=${Array.isArray(e[1])?e[1].join(","):e[1]}`:"").join("&")}`:"",Ce="https://api.spotify.com/v1",Be=n=>{const e=new Headers({Authorization:`Bearer ${n.access_token}`}),t=async r=>{var o;return(await fetch(`${Ce}${r.route}${Ve(r.options)}`,{method:`${(o=r==null?void 0:r.method)!=null?o:"GET"}`,headers:e})).json()},a={me:async()=>t({route:"/me"}),topTracks:async r=>t({route:"/me/top/tracks",options:r}),topArtists:async r=>t({route:"/me/top/artists",options:r}),user:async r=>t({route:`/users/${r}`}),followedArtists:async r=>t({route:"/me/following",options:q({type:"artist"},r)}),followedArtistsCheck:async r=>t({route:"/me/following/contains",options:r}),followsPlaylistCheck:async(r,s)=>t({route:`/playlists/${r}/followers/contains`,options:s})},l={track:async r=>t({route:`/track/${r}`}),tracks:async r=>t({route:"/tracks",options:r}),savedTracks:async r=>t({route:"/me/tracks",options:r})};return q(q({},a),l)};function fe(n,e,t){const a=n.slice();return a[15]=e[t],a[17]=t,a}function _e(n){let e,t=n[15].label+"",a,l,r,s,o,i;function h(){return n[10](n[17])}return{c(){e=g("div"),a=L(t),l=V(),this.h()},l(u){e=y(u,"DIV",{value:!0,"aria-selected":!0,role:!0,class:!0,id:!0});var c=w(e);a=S(c,t),l=C(c),c.forEach(p),this.h()},h(){f(e,"value",r=n[15].value),f(e,"aria-selected","true"),f(e,"role","option"),f(e,"class","ds-option svelte-1spvkbn"),f(e,"id",s=""+(n[1]+"-option-"+n[17])),z(e,"option-current",n[7]===n[17])},m(u,c){T(u,e,c),k(e,a),k(e,l),o||(i=F(e,"click",h),o=!0)},p(u,c){n=u,c&8&&t!==(t=n[15].label+"")&&N(a,t),c&8&&r!==(r=n[15].value)&&f(e,"value",r),c&2&&s!==(s=""+(n[1]+"-option-"+n[17]))&&f(e,"id",s),c&128&&z(e,"option-current",n[7]===n[17])},d(u){u&&p(e),o=!1,i()}}}function He(n){let e,t,a,l,r,s,o,i,h=(n[4]!==-1?n[3][n[4]].label:n[2])+"",u,c,m,_,A,D,U,B=n[3],d=[];for(let v=0;v<B.length;v+=1)d[v]=_e(fe(n,B,v));return{c(){e=g("div"),t=g("label"),a=L(n[0]),l=L(" -"),s=V(),o=g("div"),i=g("span"),u=L(h),m=V(),_=g("div");for(let v=0;v<d.length;v+=1)d[v].c();this.h()},l(v){e=y(v,"DIV",{});var E=w(e);t=y(E,"LABEL",{for:!0,id:!0,class:!0});var b=w(t);a=S(b,n[0]),l=S(b," -"),b.forEach(p),s=C(E),o=y(E,"DIV",{class:!0,id:!0});var H=w(o);i=y(H,"SPAN",{"aria-controls":!0,"aria-haspopup":!0,role:!0,tabindex:!0,class:!0,"aria-activedescendant":!0});var $=w(i);u=S($,h),$.forEach(p),m=C(H),_=y(H,"DIV",{role:!0,tabindex:!0,class:!0,id:!0,"aria-expanded":!0});var x=w(_);for(let K=0;K<d.length;K+=1)d[K].l(x);x.forEach(p),H.forEach(p),E.forEach(p),this.h()},h(){f(t,"for",n[1]),f(t,"id",r=""+(n[1]+"-label")),f(t,"class","ds-label svelte-1spvkbn"),f(i,"aria-controls","listbox"),f(i,"aria-haspopup","listbox"),f(i,"role","combobox"),f(i,"tabindex","0"),f(i,"class","ds-input svelte-1spvkbn"),f(i,"aria-activedescendant",c=""+(n[1]+"-option-"+(n[7]>=0?n[7]:n[4]))),f(_,"role","listbox"),f(_,"tabindex","-1"),f(_,"class","ds-menu svelte-1spvkbn"),f(_,"id",A=""+(n[1]+"-menu")),f(_,"aria-expanded",n[6]),z(_,"open",n[6]),f(o,"class","ds-main ds-select svelte-1spvkbn"),f(o,"id",n[1]),z(o,"open",n[6])},m(v,E){T(v,e,E),k(e,t),k(t,a),k(t,l),k(e,s),k(e,o),k(o,i),k(i,u),k(o,m),k(o,_);for(let b=0;b<d.length;b+=1)d[b].m(_,null);D||(U=[F(_,"mousedown",n[11]),F(_,"mouseup",n[12]),F(o,"click",se(re(n[13]))),F(o,"blur",se(re(n[8])),!0),F(o,"keydown",n[9])],D=!0)},p(v,[E]){if(E&1&&N(a,v[0]),E&2&&f(t,"for",v[1]),E&2&&r!==(r=""+(v[1]+"-label"))&&f(t,"id",r),E&28&&h!==(h=(v[4]!==-1?v[3][v[4]].label:v[2])+"")&&N(u,h),E&146&&c!==(c=""+(v[1]+"-option-"+(v[7]>=0?v[7]:v[4])))&&f(i,"aria-activedescendant",c),E&154){B=v[3];let b;for(b=0;b<B.length;b+=1){const H=fe(v,B,b);d[b]?d[b].p(H,E):(d[b]=_e(H),d[b].c(),d[b].m(_,null))}for(;b<d.length;b+=1)d[b].d(1);d.length=B.length}E&2&&A!==(A=""+(v[1]+"-menu"))&&f(_,"id",A),E&64&&f(_,"aria-expanded",v[6]),E&64&&z(_,"open",v[6]),E&2&&f(o,"id",v[1]),E&64&&z(o,"open",v[6])},i:j,o:j,d(v){v&&p(e),R(d,v),D=!1,Te(U)}}}function ze(n,e,t){const a=Ae();let{name:l="select"}=e,{id:r="example"}=e,{placeHolder:s=void 0}=e,{options:o}=e,i=!1,h=s?typeof s=="string"?-1:s:0,u=!1,c=-1;const m=()=>{if(i){t(5,i=!1);return}u&&!i&&t(6,u=!1)},_=d=>{if(u)switch(d.key){case" ":case"Enter":d.preventDefault(),t(4,h=c),t(6,u=!1);break;case"ArrowUp":{d.preventDefault(),c-1>=0&&t(7,c-=1);break}case"Tab":if(d.shiftKey){d.preventDefault(),c-1>=0&&t(7,c-=1);break}case"ArrowDown":{d.preventDefault(),c+1<o.length&&t(7,c+=1);break}case"Escape":d.preventDefault(),t(6,u=!1);break}else switch(d.key){case"ArrowUp":case"ArrowDown":case" ":case"Enter":d.preventDefault(),t(6,u=!0),t(7,c=h);break}},A=d=>{h!==d&&t(4,h=d)},D=()=>{t(5,i=!0)},U=()=>{t(5,i=!1)},B=()=>{t(7,c=-1),t(6,u=!u)};return n.$$set=d=>{"name"in d&&t(0,l=d.name),"id"in d&&t(1,r=d.id),"placeHolder"in d&&t(2,s=d.placeHolder),"options"in d&&t(3,o=d.options)},n.$$.update=()=>{n.$$.dirty&24&&h>=0&&h<o.length&&a("change",o[h])},[l,r,s,o,h,i,u,c,m,_,A,D,U,B]}class he extends le{constructor(e){super();ae(this,e,ze,He,ne,{name:0,id:1,placeHolder:2,options:3})}}function de(n,e,t){const a=n.slice();return a[9]=e[t],a}function pe(n,e,t){const a=n.slice();return a[13]=e[t],a}function me(n){let e,t,a,l,r,s,o,i,h;a=new he({props:{name:"Top Tracks",id:"top-tracks",options:[{label:"Short Term",value:"short_term"},{label:"Medium Term",value:"medium_term"},{label:"Long Term",value:"long_term"}],placeHolder:2}}),a.$on("change",n[4]);let u=n[2]instanceof Promise&&ve(n);o=new he({props:{name:"Top Artists",id:"top-artists",options:[{label:"Short Term",value:"short_term"},{label:"Medium Term",value:"medium_term"},{label:"Long Term",value:"long_term"}],placeHolder:2}}),o.$on("change",n[5]);let c=n[1]instanceof Promise&&be(n);return{c(){e=g("div"),t=g("section"),G(a.$$.fragment),l=V(),u&&u.c(),r=V(),s=g("section"),G(o.$$.fragment),i=V(),c&&c.c(),this.h()},l(m){e=y(m,"DIV",{class:!0,style:!0});var _=w(e);t=y(_,"SECTION",{class:!0,style:!0});var A=w(t);J(a.$$.fragment,A),l=C(A),u&&u.l(A),A.forEach(p),r=C(_),s=y(_,"SECTION",{class:!0,style:!0});var D=w(s);J(o.$$.fragment,D),i=C(D),c&&c.l(D),D.forEach(p),_.forEach(p),this.h()},h(){f(t,"class","stack"),Q(t,"align-items","flex-start"),f(s,"class","stack "),Q(s,"align-items","flex-start"),f(e,"class","box flexy svelte-pd4azt"),Q(e,"--gap","2ch")},m(m,_){T(m,e,_),k(e,t),W(a,t,null),k(t,l),u&&u.m(t,null),k(e,r),k(e,s),W(o,s,null),k(s,i),c&&c.m(s,null),h=!0},p(m,_){m[2]instanceof Promise?u?u.p(m,_):(u=ve(m),u.c(),u.m(t,null)):u&&(u.d(1),u=null),m[1]instanceof Promise?c?(c.p(m,_),_&2&&I(c,1)):(c=be(m),c.c(),I(c,1),c.m(s,null)):c&&(Y(),P(c,1,1,()=>{c=null}),Z())},i(m){h||(I(a.$$.fragment,m),I(o.$$.fragment,m),I(c),h=!0)},o(m){P(a.$$.fragment,m),P(o.$$.fragment,m),P(c),h=!1},d(m){m&&p(e),X(a),u&&u.d(),X(o),c&&c.d()}}}function ve(n){let e,t,a={ctx:n,current:null,token:null,hasCatch:!0,pending:Oe,then:Ne,catch:Fe,value:12};return M(t=n[2],a),{c(){e=O(),a.block.c()},l(l){e=O(),a.block.l(l)},m(l,r){T(l,e,r),a.block.m(l,a.anchor=r),a.mount=()=>e.parentNode,a.anchor=e},p(l,r){n=l,a.ctx=n,r&4&&t!==(t=n[2])&&M(t,a)||oe(a,n,r)},d(l){l&&p(e),a.block.d(l),a.token=null,a=null}}}function Fe(n){let e,t;return{c(){e=g("div"),t=L("Failure")},l(a){e=y(a,"DIV",{});var l=w(e);t=S(l,"Failure"),l.forEach(p)},m(a,l){T(a,e,l),k(e,t)},p:j,d(a){a&&p(e)}}}function Ne(n){let e,t=n[12].items,a=[];for(let l=0;l<t.length;l+=1)a[l]=ke(pe(n,t,l));return{c(){e=g("ul");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=y(l,"UL",{class:!0});var r=w(e);for(let s=0;s<a.length;s+=1)a[s].l(r);r.forEach(p),this.h()},h(){f(e,"class","unlist svelte-pd4azt")},m(l,r){T(l,e,r);for(let s=0;s<a.length;s+=1)a[s].m(e,null)},p(l,r){if(r&4){t=l[12].items;let s;for(s=0;s<t.length;s+=1){const o=pe(l,t,s);a[s]?a[s].p(o,r):(a[s]=ke(o),a[s].c(),a[s].m(e,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=t.length}},d(l){l&&p(e),R(a,l)}}}function ke(n){let e,t,a=n[13].name+"",l,r,s,o,i=n[13].artists[0].name+"",h,u,c;return{c(){e=g("li"),t=g("a"),l=L(a),s=L(`
									by
									`),o=g("a"),h=L(i),c=V(),this.h()},l(m){e=y(m,"LI",{class:!0});var _=w(e);t=y(_,"A",{rel:!0,href:!0});var A=w(t);l=S(A,a),A.forEach(p),s=S(_,`
									by
									`),o=y(_,"A",{rel:!0,href:!0});var D=w(o);h=S(D,i),D.forEach(p),c=C(_),_.forEach(p),this.h()},h(){f(t,"rel","external"),f(t,"href",r=n[13].external_urls.spotify),f(o,"rel","external"),f(o,"href",u=n[13].artists[0].external_urls.spotify),f(e,"class","svelte-pd4azt")},m(m,_){T(m,e,_),k(e,t),k(t,l),k(e,s),k(e,o),k(o,h),k(e,c)},p(m,_){_&4&&a!==(a=m[13].name+"")&&N(l,a),_&4&&r!==(r=m[13].external_urls.spotify)&&f(t,"href",r),_&4&&i!==(i=m[13].artists[0].name+"")&&N(h,i),_&4&&u!==(u=m[13].artists[0].external_urls.spotify)&&f(o,"href",u)},d(m){m&&p(e)}}}function Oe(n){let e,t;return{c(){e=g("div"),t=L("Loading...")},l(a){e=y(a,"DIV",{});var l=w(e);t=S(l,"Loading..."),l.forEach(p)},m(a,l){T(a,e,l),k(e,t)},p:j,d(a){a&&p(e)}}}function be(n){let e,t,a,l={ctx:n,current:null,token:null,hasCatch:!0,pending:Me,then:qe,catch:Ue,value:8,blocks:[,,,]};return M(t=n[1],l),{c(){e=O(),l.block.c()},l(r){e=O(),l.block.l(r)},m(r,s){T(r,e,s),l.block.m(r,l.anchor=s),l.mount=()=>e.parentNode,l.anchor=e,a=!0},p(r,s){n=r,l.ctx=n,s&2&&t!==(t=n[1])&&M(t,l)||oe(l,n,s)},i(r){a||(I(l.block),a=!0)},o(r){for(let s=0;s<3;s+=1){const o=l.blocks[s];P(o)}a=!1},d(r){r&&p(e),l.block.d(r),l.token=null,l=null}}}function Ue(n){let e,t;return{c(){e=g("div"),t=L("Failure")},l(a){e=y(a,"DIV",{});var l=w(e);t=S(l,"Failure"),l.forEach(p)},m(a,l){T(a,e,l),k(e,t)},p:j,i:j,o:j,d(a){a&&p(e)}}}function qe(n){let e,t,a=n[8].items,l=[];for(let s=0;s<a.length;s+=1)l[s]=ge(de(n,a,s));const r=s=>P(l[s],1,1,()=>{l[s]=null});return{c(){e=g("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=y(s,"UL",{class:!0});var o=w(e);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(p),this.h()},h(){f(e,"class","unlist svelte-pd4azt")},m(s,o){T(s,e,o);for(let i=0;i<l.length;i+=1)l[i].m(e,null);t=!0},p(s,o){if(o&2){a=s[8].items;let i;for(i=0;i<a.length;i+=1){const h=de(s,a,i);l[i]?(l[i].p(h,o),I(l[i],1)):(l[i]=ge(h),l[i].c(),I(l[i],1),l[i].m(e,null))}for(Y(),i=a.length;i<l.length;i+=1)r(i);Z()}},i(s){if(!t){for(let o=0;o<a.length;o+=1)I(l[o]);t=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)P(l[o]);t=!1},d(s){s&&p(e),R(l,s)}}}function ge(n){let e,t,a=n[9].name+"",l,r,s,o,i;return{c(){e=g("li"),t=g("a"),l=L(a),s=V(),this.h()},l(h){e=y(h,"LI",{class:!0});var u=w(e);t=y(u,"A",{rel:!0,href:!0});var c=w(t);l=S(c,a),c.forEach(p),s=C(u),u.forEach(p),this.h()},h(){f(t,"rel","external"),f(t,"href",r=n[9].external_urls.spotify),f(e,"class","svelte-pd4azt")},m(h,u){T(h,e,u),k(e,t),k(t,l),k(e,s),i=!0},p(h,u){n=h,(!i||u&2)&&a!==(a=n[9].name+"")&&N(l,a),(!i||u&2&&r!==(r=n[9].external_urls.spotify))&&f(t,"href",r)},i(h){i||(Se(()=>{o||(o=ie(e,ue,{delay:0,duration:500,easing:ce},!0)),o.run(1)}),i=!0)},o(h){o||(o=ie(e,ue,{delay:0,duration:500,easing:ce},!1)),o.run(0),i=!1},d(h){h&&p(e),h&&o&&o.end()}}}function Me(n){let e,t;return{c(){e=g("div"),t=L("Loading...")},l(a){e=y(a,"DIV",{});var l=w(e);t=S(l,"Loading..."),l.forEach(p)},m(a,l){T(a,e,l),k(e,t)},p:j,i:j,o:j,d(a){a&&p(e)}}}function Ke(n){let e,t,a=n[3]&&me(n);return{c(){a&&a.c(),e=O()},l(l){a&&a.l(l),e=O()},m(l,r){a&&a.m(l,r),T(l,e,r),t=!0},p(l,r){l[3]?a?(a.p(l,r),r&8&&I(a,1)):(a=me(l),a.c(),I(a,1),a.m(e.parentNode,e)):a&&(Y(),P(a,1,1,()=>{a=null}),Z())},i(l){t||(I(a),t=!0)},o(l){P(a),t=!1},d(l){a&&a.d(l),l&&p(e)}}}function Re(n){let e,t,a;return t=new je({props:{title:"Top Spotify Info",$$slots:{default:[Ke]},$$scope:{ctx:n}}}),{c(){e=V(),G(t.$$.fragment),this.h()},l(l){De('[data-svelte="svelte-1998kk8"]',document.head).forEach(p),e=C(l),J(t.$$.fragment,l),this.h()},h(){document.title="Top Spotify info"},m(l,r){T(l,e,r),W(t,l,r),a=!0},p(l,[r]){const s={};r&65551&&(s.$$scope={dirty:r,ctx:l}),t.$set(s)},i(l){a||(I(t.$$.fragment,l),a=!0)},o(l){P(t.$$.fragment,l),a=!1},d(l){l&&p(e),X(t,l)}}}function Ge(n,e,t){let a;Ie(n,Pe,c=>t(6,a=c));let l,r,s,o=!1;Le(()=>{a!=="empty"&&i(a),window.setTimeout(()=>{t(3,o=!0)},100)});const i=c=>{t(0,l=Be(c)),t(2,s=l.topTracks({time_range:"long_term"})),t(1,r=l.topArtists({time_range:"long_term"}))};return[l,r,s,o,c=>{t(2,s=l.topTracks({time_range:c.detail.value}))},c=>{t(1,r=l.topArtists({time_range:c.detail.value}))}]}class et extends le{constructor(e){super();ae(this,e,Ge,Re,ne,{})}}export{et as default};