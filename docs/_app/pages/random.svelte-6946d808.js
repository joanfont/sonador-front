import{S as x,i as w,s as D,e as p,c as _,a as $,d as m,g,o as u,p as I,q as f,K as E,v as G,n as V,w as v,k as q,x as b,m as F,b as k,H as L,y,B as h}from"../chunks/index-3e5c58ca.js";import{G as S,F as A,L as B}from"../chunks/LoadingIndicator-d95501b5.js";import{t as C,l as H}from"../chunks/store-6f681db4.js";import{l as K}from"../chunks/util-e8a01521.js";import"../chunks/stores-051684e8.js";import"../chunks/Button-007fe1e2.js";import"../chunks/index-f751c6c9.js";function M(l){let e,r,t,o,i,s;return t=new S({props:{custom:!1,random:!0}}),i=new A({props:{custom:!0}}),{c(){e=p("div"),r=p("div"),v(t.$$.fragment),o=q(),v(i.$$.fragment),this.h()},l(a){e=_(a,"DIV",{class:!0});var n=$(e);r=_(n,"DIV",{class:!0});var c=$(r);b(t.$$.fragment,c),c.forEach(m),n.forEach(m),o=F(a),b(i.$$.fragment,a),this.h()},h(){k(r,"class","text-center p-3"),k(e,"class","max-w-screen-md mx-auto")},m(a,n){g(a,e,n),L(e,r),y(t,r,null),g(a,o,n),y(i,a,n),s=!0},i(a){s||(f(t.$$.fragment,a),f(i.$$.fragment,a),s=!0)},o(a){u(t.$$.fragment,a),u(i.$$.fragment,a),s=!1},d(a){a&&m(e),h(t),a&&m(o),h(i,a)}}}function R(l){let e,r;return e=new B({}),{c(){v(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){y(e,t,o),r=!0},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function j(l){let e,r,t,o;const i=[R,M],s=[];function a(n,c){return n[0]?0:1}return r=a(l),t=s[r]=i[r](l),{c(){e=p("div"),t.c()},l(n){e=_(n,"DIV",{});var c=$(e);t.l(c),c.forEach(m)},m(n,c){g(n,e,c),s[r].m(e,null),o=!0},p(n,[c]){let d=r;r=a(n),r!==d&&(V(),u(s[d],1,1,()=>{s[d]=null}),I(),t=s[r],t||(t=s[r]=i[r](n),t.c()),f(t,1),t.m(e,null))},i(n){o||(f(t),o=!0)},o(n){u(t),o=!1},d(n){n&&m(e),s[r].d()}}}function z(l,e,r){let t;return E(l,H,o=>r(0,t=o)),G(async()=>{C.set({attempts:0,type:"random",guesses:[],date:new Date,correct:!1}),await K("",!0)}),[t]}class W extends x{constructor(e){super(),w(this,e,z,j,D,{})}}export{W as default};