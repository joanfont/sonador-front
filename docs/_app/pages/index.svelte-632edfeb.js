import{S as B,i as G,s as M,e as v,w as T,k as b,c as k,a as d,x as I,d as m,m as R,b as l,g as $,I as h,y as E,q as p,o as _,B as S,G as w,H as y,f as g,p as q,v as A,n as F}from"../chunks/index-0cb0397c.js";import{I as N,g as H,c as L,G as P,F as U}from"../chunks/spotify-0d0180b7.js";import{r as C,c as Y}from"../chunks/store-dee11cb5.js";import"../chunks/SvelteToast.svelte_svelte_type_style_lang-449b658d.js";import"../chunks/index-246c2946.js";function V(c){let s,r,o,i,u,t,n;return o=new P({props:{custom:c[4],forceRandom:c[4],daily:c[3],allTracks:c[2]}}),t=new U({props:{custom:c[4]}}),{c(){s=v("div"),r=v("div"),T(o.$$.fragment),u=b(),T(t.$$.fragment),this.h()},l(e){s=k(e,"DIV",{class:!0});var a=d(s);r=k(a,"DIV",{class:!0});var f=d(r);I(o.$$.fragment,f),f.forEach(m),a.forEach(m),u=R(e),I(t.$$.fragment,e),this.h()},h(){l(r,"class",i=`text-center p-3 ${c[1]?"":"hidden"}`),l(s,"class","max-w-screen-md mx-auto")},m(e,a){$(e,s,a),h(s,r),E(o,r,null),$(e,u,a),E(t,e,a),n=!0},p(e,a){const f={};a&16&&(f.custom=e[4]),a&16&&(f.forceRandom=e[4]),a&8&&(f.daily=e[3]),a&4&&(f.allTracks=e[2]),o.$set(f),(!n||a&2&&i!==(i=`text-center p-3 ${e[1]?"":"hidden"}`))&&l(r,"class",i);const D={};a&16&&(D.custom=e[4]),t.$set(D)},i(e){n||(p(o.$$.fragment,e),p(t.$$.fragment,e),n=!0)},o(e){_(o.$$.fragment,e),_(t.$$.fragment,e),n=!1},d(e){e&&m(s),S(o),e&&m(u),S(t,e)}}}function x(c){let s,r,o,i,u;return{c(){s=v("div"),r=w("svg"),o=w("circle"),i=w("animateTransform"),this.h()},l(t){s=k(t,"DIV",{class:!0});var n=d(s);r=y(n,"svg",{xmlns:!0,style:!0,width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0});var e=d(r);o=y(e,"circle",{cx:!0,cy:!0,fill:!0,stroke:!0,"stroke-width":!0,r:!0,"stroke-dasharray":!0});var a=d(o);i=y(a,"animateTransform",{attributeName:!0,type:!0,repeatCount:!0,dur:!0,values:!0,keyTimes:!0}),d(i).forEach(m),a.forEach(m),e.forEach(m),n.forEach(m),this.h()},h(){l(i,"attributeName","transform"),l(i,"type","rotate"),l(i,"repeatCount","indefinite"),l(i,"dur","0.9345794392523364s"),l(i,"values","0 50 50;360 50 50"),l(i,"keyTimes","0;1"),l(o,"cx","50"),l(o,"cy","50"),l(o,"fill","none"),l(o,"stroke","currentColor"),l(o,"stroke-width","7"),l(o,"r","38"),l(o,"stroke-dasharray","179.0707812546182 61.690260418206066"),l(r,"xmlns","http://www.w3.org/2000/svg"),g(r,"margin","auto"),g(r,"background","transparent"),g(r,"display","block"),g(r,"shape-rendering","auto"),l(r,"width","100px"),l(r,"height","100px"),l(r,"viewBox","0 0 100 100"),l(r,"preserveAspectRatio","xMidYMid"),l(s,"class",u="w-full mx-auto text-center mt-20 text-blue-600")},m(t,n){$(t,s,n),h(s,r),h(r,o),h(o,i)},d(t){t&&m(s)}}}function j(c){let s,r,o,i,u;r=new N({props:{hidden:c[1]}});let t=!c[0]&&V(c),n=c[0]&&x();return{c(){s=v("div"),T(r.$$.fragment),o=b(),t&&t.c(),i=b(),n&&n.c()},l(e){s=k(e,"DIV",{});var a=d(s);I(r.$$.fragment,a),o=R(a),t&&t.l(a),i=R(a),n&&n.l(a),a.forEach(m)},m(e,a){$(e,s,a),E(r,s,null),h(s,o),t&&t.m(s,null),h(s,i),n&&n.m(s,null),u=!0},p(e,[a]){const f={};a&2&&(f.hidden=e[1]),r.$set(f),e[0]?t&&(F(),_(t,1,1,()=>{t=null}),q()):t?(t.p(e,a),a&1&&p(t,1)):(t=V(e),t.c(),p(t,1),t.m(s,i)),e[0]?n||(n=x(),n.c(),n.m(s,null)):n&&(n.d(1),n=null)},i(e){u||(p(r.$$.fragment,e),p(t),u=!0)},o(e){_(r.$$.fragment,e),_(t),u=!1},d(e){e&&m(s),S(r),t&&t.d(),n&&n.d()}}}function z(c,s,r){let o=!0,i,u,t,n;return A(async()=>{r(1,i=C.get()),r(4,n=new URL(window.location.href).searchParams.get("random")==="true"||!1);const e=await H("",n);r(3,t=e.daily),r(2,u=e.tracks);const a=L(t);Y.set(a),r(0,o=!1)}),C.listen(e=>{r(1,i=e)}),[o,i,u,t,n]}class X extends B{constructor(s){super(),G(this,s,z,j,M,{})}}export{X as default};