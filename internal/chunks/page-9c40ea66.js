import{S as z,i as D,s as F,e as g,K as Y,c as b,a as w,L as J,d as u,b as c,V as Z,f as v,F as k,M as I,N as B,O as de,t as K,k as L,g as P,n as O,Q as x,h as ee,R as pe,W as _e,D as te,j as se,m as le,o as ie,x as Q,u as H,v as ae,E as he,G as oe,H as ne,I as re,r as ve,w as ge}from"./vendor-b1344eba.js";function be(o){let e,l,s,i,n;return{c(){e=g("button"),l=Y("svg"),s=Y("path"),this.h()},l(t){e=b(t,"BUTTON",{class:!0,"aria-pressed":!0});var m=w(e);l=J(m,"svg",{viewBox:!0,xmlns:!0,"fill-rule":!0,"clip-rule":!0,"stroke-linejoin":!0,"stroke-miterlimit":!0});var p=w(l);s=J(p,"path",{d:!0}),w(s).forEach(u),p.forEach(u),m.forEach(u),this.h()},h(){c(s,"d","M12.929.545A1.09 1.09 0 0011.043.54l-9.53 16.361a1.088 1.088 0 00.942 1.639h18.989a1.09 1.09 0 00.944-1.637L12.928.544z"),c(l,"viewBox","0 0 24 24"),c(l,"xmlns","http://www.w3.org/2000/svg"),c(l,"fill-rule","evenodd"),c(l,"clip-rule","evenodd"),c(l,"stroke-linejoin","round"),c(l,"stroke-miterlimit","2"),c(e,"class","svg-button svelte-17cpwnl"),c(e,"aria-pressed",o[1]),Z(e,"clicked",o[0])},m(t,m){v(t,e,m),k(e,l),k(l,s),i||(n=[I(e,"click",o[2]),I(e,"mousedown",o[3]),I(e,"blur",o[4]),I(e,"mouseout",o[5])],i=!0)},p(t,[m]){m&2&&c(e,"aria-pressed",t[1]),m&1&&Z(e,"clicked",t[0])},i:B,o:B,d(t){t&&u(e),i=!1,de(n)}}}function ke(o,e,l){const s=()=>{i(),l(0,n=!0),l(1,t=!0)},i=()=>{scrollTo({top:0,behavior:"smooth"})};let n=!1,t=!1;return[n,t,s,_=>{l(1,t=!0)},()=>{l(1,t=!1)},()=>{l(1,t=!1)}]}class qe extends z{constructor(e){super();D(this,e,ke,be,F,{})}}function ue(o,e,l){const s=o.slice();return s[1]=e[l],s[3]=l,s}function ce(o){let e,l=o[0][o[3]].toUpperCase()+"",s,i;return{c(){e=g("li"),s=K(l),i=L(),this.h()},l(n){e=b(n,"LI",{class:!0,style:!0});var t=w(e);s=P(t,l),i=O(t),t.forEach(u),this.h()},h(){c(e,"class","pad dark svelte-kgrbcy"),x(e,"--bg",o[1])},m(n,t){v(n,e,t),k(e,s),k(e,i)},p(n,t){t&1&&l!==(l=n[0][n[3]].toUpperCase()+"")&&ee(s,l),t&1&&x(e,"--bg",n[1])},d(n){n&&u(e)}}}function we(o){let e,l=o[0],s=[];for(let i=0;i<l.length;i+=1)s[i]=ce(ue(o,l,i));return{c(){e=g("ul");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=b(i,"UL",{class:!0});var n=w(e);for(let t=0;t<s.length;t+=1)s[t].l(n);n.forEach(u),this.h()},h(){c(e,"class","unlist switcher pad svelte-kgrbcy")},m(i,n){v(i,e,n);for(let t=0;t<s.length;t+=1)s[t].m(e,null)},p(i,[n]){if(n&1){l=i[0];let t;for(t=0;t<l.length;t+=1){const m=ue(i,l,t);s[t]?s[t].p(m,n):(s[t]=ce(m),s[t].c(),s[t].m(e,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=l.length}},i:B,o:B,d(i){i&&u(e),pe(s,i)}}}function Ee(o,e,l){let{names:s=["#83c5be","#ffa1dd","#ce8964","#5497a7"]}=e;return o.$$set=i=>{"names"in i&&l(0,s=i.names)},[s]}class Te extends z{constructor(e){super();D(this,e,Ee,we,F,{names:0})}}const $e=o=>({}),me=o=>({});function ye(o){let e,l,s,i,n,t,m,p;return i=new Te({}),{c(){e=g("h2"),l=K("Theme Colors"),s=L(),se(i.$$.fragment),n=L(),t=g("p"),m=K(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
			voluptas maiores dicta exercitationem nihil quae enim similique
			porro esse corporis rem quisquam, illum quaerat alias tenetur illo
			vitae dignissimos natus nobis quasi ipsa eum eveniet repellendus
			suscipit. Quam aspernatur voluptate minus vitae temporibus animi
			eius soluta doloremque earum quae ea molestiae, quia quod inventore,
			dolorem facere asperiores quis ipsam odit? Quas atque esse libero
			doloribus nobis vel quo id itaque, dignissimos nam suscipit deleniti
			magni ratione repellendus beatae repudiandae. Optio odio eveniet
			provident ab iste vitae illum illo exercitationem maxime impedit
			debitis porro assumenda, magnam fugiat molestiae necessitatibus quas
			nihil.`),this.h()},l(r){e=b(r,"H2",{});var _=w(e);l=P(_,"Theme Colors"),_.forEach(u),s=O(r),le(i.$$.fragment,r),n=O(r),t=b(r,"P",{class:!0});var $=w(t);m=P($,`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
			voluptas maiores dicta exercitationem nihil quae enim similique
			porro esse corporis rem quisquam, illum quaerat alias tenetur illo
			vitae dignissimos natus nobis quasi ipsa eum eveniet repellendus
			suscipit. Quam aspernatur voluptate minus vitae temporibus animi
			eius soluta doloremque earum quae ea molestiae, quia quod inventore,
			dolorem facere asperiores quis ipsam odit? Quas atque esse libero
			doloribus nobis vel quo id itaque, dignissimos nam suscipit deleniti
			magni ratione repellendus beatae repudiandae. Optio odio eveniet
			provident ab iste vitae illum illo exercitationem maxime impedit
			debitis porro assumenda, magnam fugiat molestiae necessitatibus quas
			nihil.`),$.forEach(u),this.h()},h(){c(t,"class","box")},m(r,_){v(r,e,_),k(e,l),v(r,s,_),ie(i,r,_),v(r,n,_),v(r,t,_),k(t,m),p=!0},i(r){p||(Q(i.$$.fragment,r),p=!0)},o(r){H(i.$$.fragment,r),p=!1},d(r){r&&u(e),r&&u(s),ae(i,r),r&&u(n),r&&u(t)}}}function fe(o){let e,l;return e=new qe({}),{c(){se(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,i){ie(e,s,i),l=!0},i(s){l||(Q(e.$$.fragment,s),l=!0)},o(s){H(e.$$.fragment,s),l=!1},d(s){ae(e,s)}}}function Le(o){let e=!1,l=()=>{e=!1},s,i,n,t,m,p,r,_,$,N,q,S,C,y,E,U,G;_e(o[4]),document.title=m=o[0];const M=o[3].default,j=te(M,o,o[2],null),T=j||ye();let d=o[1]>50&&fe();const R=o[3].footer,h=te(R,o,o[2],me);return{c(){i=g("link"),n=g("link"),t=g("link"),p=L(),r=g("header"),_=g("h1"),$=K(o[0]),N=L(),q=g("main"),T&&T.c(),S=L(),d&&d.c(),C=L(),y=g("footer"),h&&h.c(),this.h()},l(a){const f=he('[data-svelte="svelte-gzq4ss"]',document.head);i=b(f,"LINK",{rel:!0,href:!0}),n=b(f,"LINK",{rel:!0,href:!0,crossorigin:!0}),t=b(f,"LINK",{href:!0,rel:!0}),f.forEach(u),p=O(a),r=b(a,"HEADER",{class:!0});var V=w(r);_=b(V,"H1",{class:!0});var W=w(_);$=P(W,o[0]),W.forEach(u),V.forEach(u),N=O(a),q=b(a,"MAIN",{class:!0,id:!0});var A=w(q);T&&T.l(A),S=O(A),d&&d.l(A),A.forEach(u),C=O(a),y=b(a,"FOOTER",{class:!0});var X=w(y);h&&h.l(X),X.forEach(u),this.h()},h(){c(i,"rel","preconnect"),c(i,"href","https://fonts.googleapis.com"),c(n,"rel","preconnect"),c(n,"href","https://fonts.gstatic.com"),c(n,"crossorigin",""),c(t,"href","https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap"),c(t,"rel","stylesheet"),c(_,"class","stack"),c(r,"class","dark contrast svelte-1ai6tko"),c(q,"class","center stack pad"),c(q,"id","page-main"),c(y,"class","svelte-1ai6tko")},m(a,f){k(document.head,i),k(document.head,n),k(document.head,t),v(a,p,f),v(a,r,f),k(r,_),k(_,$),v(a,N,f),v(a,q,f),T&&T.m(q,null),k(q,S),d&&d.m(q,null),v(a,C,f),v(a,y,f),h&&h.m(y,null),E=!0,U||(G=I(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(l,100),o[4]()}),U=!0)},p(a,[f]){f&2&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,a[1]),s=setTimeout(l,100)),(!E||f&1)&&m!==(m=a[0])&&(document.title=m),(!E||f&1)&&ee($,a[0]),j&&j.p&&(!E||f&4)&&oe(j,M,a,a[2],E?re(M,a[2],f,null):ne(a[2]),null),a[1]>50?d?f&2&&Q(d,1):(d=fe(),d.c(),Q(d,1),d.m(q,null)):d&&(ve(),H(d,1,1,()=>{d=null}),ge()),h&&h.p&&(!E||f&4)&&oe(h,R,a,a[2],E?re(R,a[2],f,$e):ne(a[2]),me)},i(a){E||(Q(T,a),Q(d),Q(h,a),E=!0)},o(a){H(T,a),H(d),H(h,a),E=!1},d(a){u(i),u(n),u(t),a&&u(p),a&&u(r),a&&u(N),a&&u(q),T&&T.d(a),d&&d.d(),a&&u(C),a&&u(y),h&&h.d(a),U=!1,G()}}}function Oe(o,e,l){let{$$slots:s={},$$scope:i}=e,{title:n="Placeholder"}=e,t=0;function m(){l(1,t=window.pageYOffset)}return o.$$set=p=>{"title"in p&&l(0,n=p.title),"$$scope"in p&&l(2,i=p.$$scope)},[n,t,i,s,m]}class He extends z{constructor(e){super();D(this,e,Oe,Le,F,{title:0})}}export{He as P,Te as S};
