var ye=Object.defineProperty;var ee=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var te=(n,e,t)=>e in n?ye(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,q=(n,e)=>{for(var t in e||(e={}))we.call(e,t)&&te(n,t,e[t]);if(ee)for(var t of ee(e))Ee.call(e,t)&&te(n,t,e[t]);return n};import{S as le,i as ae,s as ne,e as b,t as L,k as V,c as y,a as w,g as S,n as C,d as p,b as f,V as N,f as T,F as g,N as z,h as F,a4 as re,a5 as se,O as j,T as R,P as Te,a6 as Ae,j as G,E as De,m as J,o as W,x as I,u as P,v as Q,J as Ie,A as Le,R as X,l as O,$ as M,a0 as oe,r as Y,w as Z,W as Se,a7 as ie,a8 as ce,_ as ue}from"../../chunks/vendor-cdbb4087.js";import{P as je}from"../../chunks/page-d5e70828.js";import{t as Pe}from"../../chunks/storeSession-2643e21d.js";/* empty css                                                               *//* empty css                                                         *//* empty css                                                              */const Ve=n=>n?`?${Object.entries(n).map(e=>e[0]&&e[1]?`${e[0]}=${Array.isArray(e[1])?e[1].join(","):e[1]}`:"").join("&")}`:"",Ce="https://api.spotify.com/v1",Be=n=>{const e=new Headers({Authorization:`Bearer ${n.access_token}`}),t=async s=>{var o;return(await fetch(`${Ce}${s.route}${Ve(s.options)}`,{method:`${(o=s==null?void 0:s.method)!=null?o:"GET"}`,headers:e})).json()},a={me:async()=>t({route:"/me"}),topTracks:async s=>t({route:"/me/top/tracks",options:s}),topArtists:async s=>t({route:"/me/top/artists",options:s}),user:async s=>t({route:`/users/${s}`}),followedArtists:async s=>t({route:"/me/following",options:q({type:"artist"},s)}),followedArtistsCheck:async s=>t({route:"/me/following/contains",options:s}),followsPlaylistCheck:async(s,r)=>t({route:`/playlists/${s}/followers/contains`,options:r})},l={track:async s=>t({route:`/track/${s}`}),tracks:async s=>t({route:"/tracks",options:s}),savedTracks:async s=>t({route:"/me/tracks",options:s})};return q(q({},a),l)};function fe(n,e,t){const a=n.slice();return a[15]=e[t],a[17]=t,a}function _e(n){let e,t=n[15].label+"",a,l,s,r,o,i;function h(){return n[10](n[17])}return{c(){e=b("div"),a=L(t),l=V(),this.h()},l(u){e=y(u,"DIV",{value:!0,"aria-selected":!0,role:!0,class:!0,id:!0});var c=w(e);a=S(c,t),l=C(c),c.forEach(p),this.h()},h(){f(e,"value",s=n[15].value),f(e,"aria-selected","true"),f(e,"role","option"),f(e,"class","ds-option svelte-1wu0adn"),f(e,"id",r=""+(n[1]+"-option-"+n[17])),N(e,"option-current",n[7]===n[17])},m(u,c){T(u,e,c),g(e,a),g(e,l),o||(i=z(e,"click",h),o=!0)},p(u,c){n=u,c&8&&t!==(t=n[15].label+"")&&F(a,t),c&8&&s!==(s=n[15].value)&&f(e,"value",s),c&2&&r!==(r=""+(n[1]+"-option-"+n[17]))&&f(e,"id",r),c&128&&N(e,"option-current",n[7]===n[17])},d(u){u&&p(e),o=!1,i()}}}function He(n){let e,t,a,l,s,r,o,i,h=(n[4]!==-1?n[3][n[4]].label:n[2])+"",u,c,m,_,A,D,U,B=n[3],d=[];for(let v=0;v<B.length;v+=1)d[v]=_e(fe(n,B,v));return{c(){e=b("div"),t=b("label"),a=L(n[0]),l=L(" -"),r=V(),o=b("div"),i=b("span"),u=L(h),m=V(),_=b("div");for(let v=0;v<d.length;v+=1)d[v].c();this.h()},l(v){e=y(v,"DIV",{});var E=w(e);t=y(E,"LABEL",{for:!0,id:!0,class:!0});var k=w(t);a=S(k,n[0]),l=S(k," -"),k.forEach(p),r=C(E),o=y(E,"DIV",{class:!0,id:!0});var H=w(o);i=y(H,"SPAN",{"aria-controls":!0,"aria-haspopup":!0,role:!0,tabindex:!0,class:!0,"aria-activedescendant":!0});var $=w(i);u=S($,h),$.forEach(p),m=C(H),_=y(H,"DIV",{role:!0,tabindex:!0,class:!0,id:!0,"aria-expanded":!0});var x=w(_);for(let K=0;K<d.length;K+=1)d[K].l(x);x.forEach(p),H.forEach(p),E.forEach(p),this.h()},h(){f(t,"for",n[1]),f(t,"id",s=""+(n[1]+"-label")),f(t,"class","ds-label svelte-1wu0adn"),f(i,"aria-controls","listbox"),f(i,"aria-haspopup","listbox"),f(i,"role","combobox"),f(i,"tabindex","0"),f(i,"class","ds-input svelte-1wu0adn"),f(i,"aria-activedescendant",c=""+(n[1]+"-option-"+(n[7]>=0?n[7]:n[4]))),f(_,"role","listbox"),f(_,"tabindex","-1"),f(_,"class","ds-menu svelte-1wu0adn"),f(_,"id",A=""+(n[1]+"-menu")),f(_,"aria-expanded",n[6]),N(_,"open",n[6]),f(o,"class","ds-main ds-select svelte-1wu0adn"),f(o,"id",n[1]),N(o,"open",n[6])},m(v,E){T(v,e,E),g(e,t),g(t,a),g(t,l),g(e,r),g(e,o),g(o,i),g(i,u),g(o,m),g(o,_);for(let k=0;k<d.length;k+=1)d[k].m(_,null);D||(U=[z(_,"mousedown",n[11]),z(_,"mouseup",n[12]),z(o,"click",re(se(n[13]))),z(o,"blur",re(se(n[8])),!0),z(o,"keydown",n[9])],D=!0)},p(v,[E]){if(E&1&&F(a,v[0]),E&2&&f(t,"for",v[1]),E&2&&s!==(s=""+(v[1]+"-label"))&&f(t,"id",s),E&28&&h!==(h=(v[4]!==-1?v[3][v[4]].label:v[2])+"")&&F(u,h),E&146&&c!==(c=""+(v[1]+"-option-"+(v[7]>=0?v[7]:v[4])))&&f(i,"aria-activedescendant",c),E&154){B=v[3];let k;for(k=0;k<B.length;k+=1){const H=fe(v,B,k);d[k]?d[k].p(H,E):(d[k]=_e(H),d[k].c(),d[k].m(_,null))}for(;k<d.length;k+=1)d[k].d(1);d.length=B.length}E&2&&A!==(A=""+(v[1]+"-menu"))&&f(_,"id",A),E&64&&f(_,"aria-expanded",v[6]),E&64&&N(_,"open",v[6]),E&2&&f(o,"id",v[1]),E&64&&N(o,"open",v[6])},i:j,o:j,d(v){v&&p(e),R(d,v),D=!1,Te(U)}}}function Ne(n,e,t){const a=Ae();let{name:l="select"}=e,{id:s="example"}=e,{placeHolder:r=void 0}=e,{options:o}=e,i=!1,h=r?typeof r=="string"?-1:r:0,u=!1,c=-1;const m=()=>{if(i){t(5,i=!1);return}u&&!i&&t(6,u=!1)},_=d=>{if(u)switch(d.key){case" ":case"Enter":d.preventDefault(),t(4,h=c),t(6,u=!1);break;case"ArrowUp":{d.preventDefault(),c-1>=0&&t(7,c-=1);break}case"Tab":if(d.shiftKey){d.preventDefault(),c-1>=0&&t(7,c-=1);break}case"ArrowDown":{d.preventDefault(),c+1<o.length&&t(7,c+=1);break}case"Escape":d.preventDefault(),t(6,u=!1);break}else switch(d.key){case"ArrowUp":case"ArrowDown":case" ":case"Enter":d.preventDefault(),t(6,u=!0),t(7,c=h);break}},A=d=>{h!==d&&t(4,h=d)},D=()=>{t(5,i=!0)},U=()=>{t(5,i=!1)},B=()=>{t(7,c=-1),t(6,u=!u)};return n.$$set=d=>{"name"in d&&t(0,l=d.name),"id"in d&&t(1,s=d.id),"placeHolder"in d&&t(2,r=d.placeHolder),"options"in d&&t(3,o=d.options)},n.$$.update=()=>{n.$$.dirty&24&&h>=0&&h<o.length&&a("change",o[h])},[l,s,r,o,h,i,u,c,m,_,A,D,U,B]}class he extends le{constructor(e){super();ae(this,e,Ne,He,ne,{name:0,id:1,placeHolder:2,options:3})}}function de(n,e,t){const a=n.slice();return a[9]=e[t],a}function pe(n,e,t){const a=n.slice();return a[13]=e[t],a}function me(n){let e,t,a,l,s,r,o,i,h;a=new he({props:{name:"Top Tracks",id:"top-tracks",options:[{label:"Short Term",value:"short_term"},{label:"Medium Term",value:"medium_term"},{label:"Long Term",value:"long_term"}],placeHolder:2}}),a.$on("change",n[4]);let u=n[2]instanceof Promise&&ve(n);o=new he({props:{name:"Top Artists",id:"top-artists",options:[{label:"Short Term",value:"short_term"},{label:"Medium Term",value:"medium_term"},{label:"Long Term",value:"long_term"}],placeHolder:2}}),o.$on("change",n[5]);let c=n[1]instanceof Promise&&ke(n);return{c(){e=b("div"),t=b("section"),G(a.$$.fragment),l=V(),u&&u.c(),s=V(),r=b("section"),G(o.$$.fragment),i=V(),c&&c.c(),this.h()},l(m){e=y(m,"DIV",{class:!0,style:!0});var _=w(e);t=y(_,"SECTION",{class:!0,style:!0});var A=w(t);J(a.$$.fragment,A),l=C(A),u&&u.l(A),A.forEach(p),s=C(_),r=y(_,"SECTION",{class:!0,style:!0});var D=w(r);J(o.$$.fragment,D),i=C(D),c&&c.l(D),D.forEach(p),_.forEach(p),this.h()},h(){f(t,"class","stack"),X(t,"align-items","flex-start"),f(r,"class","stack "),X(r,"align-items","flex-start"),f(e,"class","box flexy svelte-pd4azt"),X(e,"--gap","2ch")},m(m,_){T(m,e,_),g(e,t),W(a,t,null),g(t,l),u&&u.m(t,null),g(e,s),g(e,r),W(o,r,null),g(r,i),c&&c.m(r,null),h=!0},p(m,_){m[2]instanceof Promise?u?u.p(m,_):(u=ve(m),u.c(),u.m(t,null)):u&&(u.d(1),u=null),m[1]instanceof Promise?c?(c.p(m,_),_&2&&I(c,1)):(c=ke(m),c.c(),I(c,1),c.m(r,null)):c&&(Y(),P(c,1,1,()=>{c=null}),Z())},i(m){h||(I(a.$$.fragment,m),I(o.$$.fragment,m),I(c),h=!0)},o(m){P(a.$$.fragment,m),P(o.$$.fragment,m),P(c),h=!1},d(m){m&&p(e),Q(a),u&&u.d(),Q(o),c&&c.d()}}}function ve(n){let e,t,a={ctx:n,current:null,token:null,hasCatch:!0,pending:Oe,then:Fe,catch:ze,value:12};return M(t=n[2],a),{c(){e=O(),a.block.c()},l(l){e=O(),a.block.l(l)},m(l,s){T(l,e,s),a.block.m(l,a.anchor=s),a.mount=()=>e.parentNode,a.anchor=e},p(l,s){n=l,a.ctx=n,s&4&&t!==(t=n[2])&&M(t,a)||oe(a,n,s)},d(l){l&&p(e),a.block.d(l),a.token=null,a=null}}}function ze(n){let e,t;return{c(){e=b("div"),t=L("Failure")},l(a){e=y(a,"DIV",{});var l=w(e);t=S(l,"Failure"),l.forEach(p)},m(a,l){T(a,e,l),g(e,t)},p:j,d(a){a&&p(e)}}}function Fe(n){let e,t=n[12].items,a=[];for(let l=0;l<t.length;l+=1)a[l]=ge(pe(n,t,l));return{c(){e=b("ul");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=y(l,"UL",{class:!0});var s=w(e);for(let r=0;r<a.length;r+=1)a[r].l(s);s.forEach(p),this.h()},h(){f(e,"class","unlist svelte-pd4azt")},m(l,s){T(l,e,s);for(let r=0;r<a.length;r+=1)a[r].m(e,null)},p(l,s){if(s&4){t=l[12].items;let r;for(r=0;r<t.length;r+=1){const o=pe(l,t,r);a[r]?a[r].p(o,s):(a[r]=ge(o),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=t.length}},d(l){l&&p(e),R(a,l)}}}function ge(n){let e,t,a=n[13].name+"",l,s,r,o,i=n[13].artists[0].name+"",h,u,c;return{c(){e=b("li"),t=b("a"),l=L(a),r=L(`
									by
									`),o=b("a"),h=L(i),c=V(),this.h()},l(m){e=y(m,"LI",{class:!0});var _=w(e);t=y(_,"A",{rel:!0,href:!0});var A=w(t);l=S(A,a),A.forEach(p),r=S(_,`
									by
									`),o=y(_,"A",{rel:!0,href:!0});var D=w(o);h=S(D,i),D.forEach(p),c=C(_),_.forEach(p),this.h()},h(){f(t,"rel","external"),f(t,"href",s=n[13].external_urls.spotify),f(o,"rel","external"),f(o,"href",u=n[13].artists[0].external_urls.spotify),f(e,"class","svelte-pd4azt")},m(m,_){T(m,e,_),g(e,t),g(t,l),g(e,r),g(e,o),g(o,h),g(e,c)},p(m,_){_&4&&a!==(a=m[13].name+"")&&F(l,a),_&4&&s!==(s=m[13].external_urls.spotify)&&f(t,"href",s),_&4&&i!==(i=m[13].artists[0].name+"")&&F(h,i),_&4&&u!==(u=m[13].artists[0].external_urls.spotify)&&f(o,"href",u)},d(m){m&&p(e)}}}function Oe(n){let e,t;return{c(){e=b("div"),t=L("Loading...")},l(a){e=y(a,"DIV",{});var l=w(e);t=S(l,"Loading..."),l.forEach(p)},m(a,l){T(a,e,l),g(e,t)},p:j,d(a){a&&p(e)}}}function ke(n){let e,t,a,l={ctx:n,current:null,token:null,hasCatch:!0,pending:Me,then:qe,catch:Ue,value:8,blocks:[,,,]};return M(t=n[1],l),{c(){e=O(),l.block.c()},l(s){e=O(),l.block.l(s)},m(s,r){T(s,e,r),l.block.m(s,l.anchor=r),l.mount=()=>e.parentNode,l.anchor=e,a=!0},p(s,r){n=s,l.ctx=n,r&2&&t!==(t=n[1])&&M(t,l)||oe(l,n,r)},i(s){a||(I(l.block),a=!0)},o(s){for(let r=0;r<3;r+=1){const o=l.blocks[r];P(o)}a=!1},d(s){s&&p(e),l.block.d(s),l.token=null,l=null}}}function Ue(n){let e,t;return{c(){e=b("div"),t=L("Failure")},l(a){e=y(a,"DIV",{});var l=w(e);t=S(l,"Failure"),l.forEach(p)},m(a,l){T(a,e,l),g(e,t)},p:j,i:j,o:j,d(a){a&&p(e)}}}function qe(n){let e,t,a=n[8].items,l=[];for(let r=0;r<a.length;r+=1)l[r]=be(de(n,a,r));const s=r=>P(l[r],1,1,()=>{l[r]=null});return{c(){e=b("ul");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=y(r,"UL",{class:!0});var o=w(e);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(p),this.h()},h(){f(e,"class","unlist svelte-pd4azt")},m(r,o){T(r,e,o);for(let i=0;i<l.length;i+=1)l[i].m(e,null);t=!0},p(r,o){if(o&2){a=r[8].items;let i;for(i=0;i<a.length;i+=1){const h=de(r,a,i);l[i]?(l[i].p(h,o),I(l[i],1)):(l[i]=be(h),l[i].c(),I(l[i],1),l[i].m(e,null))}for(Y(),i=a.length;i<l.length;i+=1)s(i);Z()}},i(r){if(!t){for(let o=0;o<a.length;o+=1)I(l[o]);t=!0}},o(r){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)P(l[o]);t=!1},d(r){r&&p(e),R(l,r)}}}function be(n){let e,t,a=n[9].name+"",l,s,r,o,i;return{c(){e=b("li"),t=b("a"),l=L(a),r=V(),this.h()},l(h){e=y(h,"LI",{class:!0});var u=w(e);t=y(u,"A",{rel:!0,href:!0});var c=w(t);l=S(c,a),c.forEach(p),r=C(u),u.forEach(p),this.h()},h(){f(t,"rel","external"),f(t,"href",s=n[9].external_urls.spotify),f(e,"class","svelte-pd4azt")},m(h,u){T(h,e,u),g(e,t),g(t,l),g(e,r),i=!0},p(h,u){n=h,(!i||u&2)&&a!==(a=n[9].name+"")&&F(l,a),(!i||u&2&&s!==(s=n[9].external_urls.spotify))&&f(t,"href",s)},i(h){i||(Se(()=>{o||(o=ie(e,ue,{delay:0,duration:500,easing:ce},!0)),o.run(1)}),i=!0)},o(h){o||(o=ie(e,ue,{delay:0,duration:500,easing:ce},!1)),o.run(0),i=!1},d(h){h&&p(e),h&&o&&o.end()}}}function Me(n){let e,t;return{c(){e=b("div"),t=L("Loading...")},l(a){e=y(a,"DIV",{});var l=w(e);t=S(l,"Loading..."),l.forEach(p)},m(a,l){T(a,e,l),g(e,t)},p:j,i:j,o:j,d(a){a&&p(e)}}}function Ke(n){let e,t,a=n[3]&&me(n);return{c(){a&&a.c(),e=O()},l(l){a&&a.l(l),e=O()},m(l,s){a&&a.m(l,s),T(l,e,s),t=!0},p(l,s){l[3]?a?(a.p(l,s),s&8&&I(a,1)):(a=me(l),a.c(),I(a,1),a.m(e.parentNode,e)):a&&(Y(),P(a,1,1,()=>{a=null}),Z())},i(l){t||(I(a),t=!0)},o(l){P(a),t=!1},d(l){a&&a.d(l),l&&p(e)}}}function Re(n){let e,t,a;return t=new je({props:{title:"Top Spotify Info",$$slots:{default:[Ke]},$$scope:{ctx:n}}}),{c(){e=V(),G(t.$$.fragment),this.h()},l(l){De('[data-svelte="svelte-1998kk8"]',document.head).forEach(p),e=C(l),J(t.$$.fragment,l),this.h()},h(){document.title="Top Spotify info"},m(l,s){T(l,e,s),W(t,l,s),a=!0},p(l,[s]){const r={};s&65551&&(r.$$scope={dirty:s,ctx:l}),t.$set(r)},i(l){a||(I(t.$$.fragment,l),a=!0)},o(l){P(t.$$.fragment,l),a=!1},d(l){l&&p(e),Q(t,l)}}}function Ge(n,e,t){let a;Ie(n,Pe,c=>t(6,a=c));let l,s,r,o=!1;Le(()=>{a!=="empty"&&i(a),window.setTimeout(()=>{t(3,o=!0)},100)});const i=c=>{t(0,l=Be(c)),t(2,r=l.topTracks({time_range:"long_term"})),t(1,s=l.topArtists({time_range:"long_term"}))};return[l,s,r,o,c=>{t(2,r=l.topTracks({time_range:c.detail.value}))},c=>{t(1,s=l.topArtists({time_range:c.detail.value}))}]}class xe extends le{constructor(e){super();ae(this,e,Ge,Re,ne,{})}}export{xe as default};
