import{S as h,i as x,s as w,e as b,c as k,a as v,d as m,g as _,o as u,p as D,q as f,K as G,v as I,n as q,w as d,k as E,x as $,m as F,b as L,y as g,B as y}from"../../../chunks/index-3e5c58ca.js";import{G as S,F as V,L as A}from"../../../chunks/LoadingIndicator-d95501b5.js";import{t as B,l as C}from"../../../chunks/store-6f681db4.js";import{l as K}from"../../../chunks/util-e8a01521.js";import"../../../chunks/stores-051684e8.js";import"../../../chunks/Button-007fe1e2.js";import"../../../chunks/index-f751c6c9.js";function M(l){let e,r,t,n,o;return r=new S({props:{custom:!0,random:!0}}),n=new V({props:{custom:!0}}),{c(){e=b("div"),d(r.$$.fragment),t=E(),d(n.$$.fragment),this.h()},l(a){e=k(a,"DIV",{class:!0});var i=v(e);$(r.$$.fragment,i),i.forEach(m),t=F(a),$(n.$$.fragment,a),this.h()},h(){L(e,"class","max-w-screen-md text-center p-3 mx-auto")},m(a,i){_(a,e,i),g(r,e,null),_(a,t,i),g(n,a,i),o=!0},i(a){o||(f(r.$$.fragment,a),f(n.$$.fragment,a),o=!0)},o(a){u(r.$$.fragment,a),u(n.$$.fragment,a),o=!1},d(a){a&&m(e),y(r),a&&m(t),y(n,a)}}}function R(l){let e,r;return e=new A({}),{c(){d(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,n){g(e,t,n),r=!0},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){y(e,t)}}}function j(l){let e,r,t,n;const o=[R,M],a=[];function i(s,c){return s[0]?0:1}return r=i(l),t=a[r]=o[r](l),{c(){e=b("div"),t.c()},l(s){e=k(s,"DIV",{});var c=v(e);t.l(c),c.forEach(m)},m(s,c){_(s,e,c),a[r].m(e,null),n=!0},p(s,[c]){let p=r;r=i(s),r!==p&&(q(),u(a[p],1,1,()=>{a[p]=null}),D(),t=a[r],t||(t=a[r]=o[r](s),t.c()),f(t,1),t.m(e,null))},i(s){n||(f(t),n=!0)},o(s){u(t),n=!1},d(s){s&&m(e),a[r].d()}}}function z(l,e,r){let t;G(l,C,o=>r(0,t=o));let{playlist:n}=e;return I(async()=>{B.set({attempts:0,type:"custom_random",guesses:[],date:new Date,correct:!1}),await K(n,!0)}),l.$$set=o=>{"playlist"in o&&r(1,n=o.playlist)},[t,n]}class U extends h{constructor(e){super(),x(this,e,z,j,w,{playlist:1})}}export{U as default};
