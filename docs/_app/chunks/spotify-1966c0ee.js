import{S as ge,i as _e,s as ve,e as v,k as N,c as b,a as _,d as h,m as V,b as d,g as A,I as f,K as De,t as E,h as I,j as Q,w as de,G as X,x as he,H as x,y as me,J as se,q as H,o as G,B as pe,L as Et,v as bt,N as It,O as St,P as Dt,Q as $t,Z as Nt,n as wt,p as kt,l as $e,_ as st,$ as Vt,a0 as At,a1 as Tt,a2 as Pt,a3 as lt}from"./vendor-003f673f.js";import{t as K,a as L,c as te,s as ke,r as rt}from"./store-3ff3bc7c.js";import{a as ee}from"./analytics-e1d11e77.js";function Ct(a){let e,t,s,l,r,n,i,o,c,u,p,m,w,k,g,y,S,P;return{c(){e=v("div"),t=v("div"),l=N(),r=v("div"),i=N(),o=v("div"),u=N(),p=v("div"),w=N(),k=v("div"),y=N(),S=v("div"),this.h()},l($){e=b($,"DIV",{class:!0});var D=_(e);t=b(D,"DIV",{class:!0}),_(t).forEach(h),l=V(D),r=b(D,"DIV",{class:!0}),_(r).forEach(h),i=V(D),o=b(D,"DIV",{class:!0}),_(o).forEach(h),u=V(D),p=b(D,"DIV",{class:!0}),_(p).forEach(h),w=V(D),k=b(D,"DIV",{class:!0}),_(k).forEach(h),y=V(D),S=b(D,"DIV",{class:!0}),_(S).forEach(h),D.forEach(h),this.h()},h(){d(t,"class",s=`w-2/12 ${a[1](0,a[0].attempts)} border-r border-l`),d(r,"class",n=`w-2/12 ${a[1](1,a[0].attempts)} border-r border-l`),d(o,"class",c=`w-4/12 ${a[1](2,a[0].attempts)} border-r border-l`),d(p,"class",m=`w-4/12 ${a[1](3,a[0].attempts)} border-r border-l`),d(k,"class",g=`w-6/12 ${a[1](4,a[0].attempts)} border-r border-l`),d(S,"class",P=`w-6/12 ${a[1](5,a[0].attempts)} border-r border-l`),d(e,"class","max-w-3xl mx-auto flex h-3")},m($,D){A($,e,D),f(e,t),f(e,l),f(e,r),f(e,i),f(e,o),f(e,u),f(e,p),f(e,w),f(e,k),f(e,y),f(e,S)},p($,[D]){D&1&&s!==(s=`w-2/12 ${$[1](0,$[0].attempts)} border-r border-l`)&&d(t,"class",s),D&1&&n!==(n=`w-2/12 ${$[1](1,$[0].attempts)} border-r border-l`)&&d(r,"class",n),D&1&&c!==(c=`w-4/12 ${$[1](2,$[0].attempts)} border-r border-l`)&&d(o,"class",c),D&1&&m!==(m=`w-4/12 ${$[1](3,$[0].attempts)} border-r border-l`)&&d(p,"class",m),D&1&&g!==(g=`w-6/12 ${$[1](4,$[0].attempts)} border-r border-l`)&&d(k,"class",g),D&1&&P!==(P=`w-6/12 ${$[1](5,$[0].attempts)} border-r border-l`)&&d(S,"class",P)},i:De,o:De,d($){$&&h(e)}}}function Mt(a,e,t){let{attempt:s}=e;const l=(r,n)=>{let i="bg-black opacity-40";return n===r&&!s.correct?i="bg-blue-500":n===r+1&&s.correct?i="bg-green-600":n>r&&s.guesses[r].artistCorrect?i="bg-amber-400":n>r&&!s.guesses[r].song?i="bg-gray-500":n>r&&(i="bg-red-600"),i};return a.$$set=r=>{"attempt"in r&&t(0,s=r.attempt)},[s,l]}class jt extends ge{constructor(e){super();_e(this,e,Mt,Ct,ve,{attempt:0})}}function at(a){let e,t;return{c(){e=v("div"),t=E(a[4]),this.h()},l(s){e=b(s,"DIV",{class:!0});var l=_(e);t=I(l,a[4]),l.forEach(h),this.h()},h(){d(e,"class","flex flex-1 justify-start font-mono")},m(s,l){A(s,e,l),f(e,t)},p(s,l){l&16&&Q(t,s[4])},d(s){s&&h(e)}}}function ot(a){let e,t=Math.floor(a[3]/60)+":"+(Math.round(a[3]%60)<10?"0"+Math.round(a[3]%60):Math.round(a[3]%60)),s;return{c(){e=v("div"),s=E(t),this.h()},l(l){e=b(l,"DIV",{class:!0});var r=_(e);s=I(r,t),r.forEach(h),this.h()},h(){d(e,"class","flex flex-1 justify-end font-mono")},m(l,r){A(l,e,r),f(e,s)},p(l,r){r&8&&t!==(t=Math.floor(l[3]/60)+":"+(Math.round(l[3]%60)<10?"0"+Math.round(l[3]%60):Math.round(l[3]%60)))&&Q(s,t)},d(l){l&&h(e)}}}function Lt(a){let e,t,s,l,r,n,i,o,c,u,p,m,w,k,g,y,S,P,$,D,U,le,Y;s=new jt({props:{attempt:a[1]}});let C=a[0]&&at(a),M=a[0]&&ot(a);return{c(){e=v("footer"),t=v("div"),de(s.$$.fragment),l=N(),r=v("div"),n=v("div"),C&&C.c(),i=N(),o=v("div"),c=v("button"),u=X("svg"),p=X("path"),m=X("path"),k=N(),g=v("button"),y=X("svg"),S=X("path"),P=X("path"),D=N(),M&&M.c(),this.h()},l(T){e=b(T,"FOOTER",{class:!0});var j=_(e);t=b(j,"DIV",{class:!0});var R=_(t);he(s.$$.fragment,R),R.forEach(h),l=V(j),r=b(j,"DIV",{class:!0});var oe=_(r);n=b(oe,"DIV",{class:!0});var z=_(n);C&&C.l(z),i=V(z),o=b(z,"DIV",{class:!0});var Z=_(o);c=b(Z,"BUTTON",{title:!0,class:!0});var ne=_(c);u=x(ne,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var re=_(u);p=x(re,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),_(p).forEach(h),m=x(re,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),_(m).forEach(h),re.forEach(h),ne.forEach(h),k=V(Z),g=b(Z,"BUTTON",{title:!0,class:!0});var W=_(g);y=x(W,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var F=_(y);S=x(F,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),_(S).forEach(h),P=x(F,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),_(P).forEach(h),F.forEach(h),W.forEach(h),Z.forEach(h),D=V(z),M&&M.l(z),z.forEach(h),oe.forEach(h),j.forEach(h),this.h()},h(){d(t,"class","border-b"),d(p,"stroke-linecap","round"),d(p,"stroke-linejoin","round"),d(p,"stroke-width","2"),d(p,"d","M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"),d(m,"stroke-linecap","round"),d(m,"stroke-linejoin","round"),d(m,"stroke-width","2"),d(m,"d","M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),d(u,"class","w-14 h-14 mx-auto"),d(u,"fill","none"),d(u,"stroke","currentColor"),d(u,"viewBox","0 0 24 24"),d(u,"xmlns","http://www.w3.org/2000/svg"),d(c,"title","Play Song"),d(c,"class",w=`hover:text-blue-600 transition-colors duration-200 ${a[2]?"":"hidden"}`),d(S,"stroke-linecap","round"),d(S,"stroke-linejoin","round"),d(S,"d","M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),d(P,"stroke-linecap","round"),d(P,"stroke-linejoin","round"),d(P,"d","M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"),d(y,"xmlns","http://www.w3.org/2000/svg"),d(y,"class","w-14 h-14 mx-auto"),d(y,"fill","none"),d(y,"viewBox","0 0 24 24"),d(y,"stroke","currentColor"),d(y,"stroke-width","2"),d(g,"title","Pause Song"),d(g,"class",$=`hover:text-blue-600 transition-colors duration-200 ${a[2]?"hidden":""}`),d(o,"class","text-center flex-1 justify-center"),d(n,"class","flex justify-evenly items-center w-full"),d(r,"class","max-w-screen-md mx-auto p-3"),d(e,"class","border-t border-white bottom-0 w-full fixed bg-gray-800")},m(T,j){A(T,e,j),f(e,t),me(s,t,null),f(e,l),f(e,r),f(r,n),C&&C.m(n,null),f(n,i),f(n,o),f(o,c),f(c,u),f(u,p),f(u,m),f(o,k),f(o,g),f(g,y),f(y,S),f(y,P),f(n,D),M&&M.m(n,null),U=!0,le||(Y=[se(c,"click",a[5]),se(g,"click",a[6])],le=!0)},p(T,[j]){const R={};j&2&&(R.attempt=T[1]),s.$set(R),T[0]?C?C.p(T,j):(C=at(T),C.c(),C.m(n,i)):C&&(C.d(1),C=null),(!U||j&4&&w!==(w=`hover:text-blue-600 transition-colors duration-200 ${T[2]?"":"hidden"}`))&&d(c,"class",w),(!U||j&4&&$!==($=`hover:text-blue-600 transition-colors duration-200 ${T[2]?"hidden":""}`))&&d(g,"class",$),T[0]?M?M.p(T,j):(M=ot(T),M.c(),M.m(n,null)):M&&(M.d(1),M=null)},i(T){U||(H(s.$$.fragment,T),U=!0)},o(T){G(s.$$.fragment,T),U=!1},d(T){T&&h(e),pe(s),C&&C.d(),M&&M.d(),le=!1,Et(Y)}}}function Kt(a,e,t){let s,l={attempts:0,guesses:[],correct:!1,date:new Date},r=!0,n=0,i="0:00",o,{custom:c=!1}=e;bt(()=>{c?t(1,l=K.get()):t(1,l=L.get()),t(0,s=new Audio(te.get().preview)),s.addEventListener("loadedmetadata",()=>t(3,n=s.duration)),navigator.mediaSession.setActionHandler("play",()=>null),navigator.mediaSession.setActionHandler("pause",()=>null),navigator.mediaSession.setActionHandler("seekbackward",null),navigator.mediaSession.setActionHandler("seekforward",()=>null)}),c?K.listen(m=>t(1,l=m)):L.listen(m=>t(1,l=m)),te.listen(m=>t(0,s=new Audio(m.preview))),ke.listen(m=>t(2,r=m));const u=()=>{ee.track("play-song"),ke.set(!1),s.play(),t(4,i="0:00");let m;const w=.08333333;switch(l.attempts){case 0:m=w;break;case 1:m=w*2;break;case 2:m=w*4;break;case 3:m=.5;break;case 4:m=.75;break;default:m=1;break}const k=l.correct?s.duration*1e3:s.duration/2*1e3*m;setTimeout(()=>{s.pause(),t(0,s.currentTime=0,s),ke.set(!0),clearInterval(o)},k),o=setInterval(()=>{t(4,i=`${Math.floor(s.currentTime/60)}:${s.currentTime%60<10?"0"+Math.round(s.currentTime%60):Math.round(s.currentTime%60)}`)},1e3)},p=()=>{s.pause(),t(0,s.currentTime=0,s),ke.set(!0)};return a.$$set=m=>{"custom"in m&&t(7,c=m.custom)},[s,l,r,n,i,u,p,c]}class os extends ge{constructor(e){super();_e(this,e,Kt,Lt,ve,{custom:7})}}const nt=a=>({name:a.name,artist:a.artists?a.artists[0].name:"unknown artist",id:a.id,preview:a.preview_url}),yt=(a,e)=>{const t=Math.abs(a.getTime()-e.getTime());return Math.ceil(t/(1e3*60*60*24))};function Bt(a){let e,t,s,l,r;const n=a[5].default,i=It(n,a,a[4],null);return{c(){e=v("button"),i&&i.c(),this.h()},l(o){e=b(o,"BUTTON",{title:!0,class:!0});var c=_(e);i&&i.l(c),c.forEach(h),this.h()},h(){d(e,"title",a[1]),d(e,"class",t=`p-2 text-white ${a[2]} rounded-md shadow hover:shadow-lg transition-all duration-200 ${a[0]}`)},m(o,c){A(o,e,c),i&&i.m(e,null),s=!0,l||(r=se(e,"click",a[6]),l=!0)},p(o,[c]){i&&i.p&&(!s||c&16)&&St(i,n,o,o[4],s?$t(n,o[4],c,null):Dt(o[4]),null),(!s||c&2)&&d(e,"title",o[1]),(!s||c&5&&t!==(t=`p-2 text-white ${o[2]} rounded-md shadow hover:shadow-lg transition-all duration-200 ${o[0]}`))&&d(e,"class",t)},i(o){s||(H(i,o),s=!0)},o(o){G(i,o),s=!1},d(o){o&&h(e),i&&i.d(o),l=!1,r()}}}function Rt(a,e,t){let{$$slots:s={},$$scope:l}=e,{type:r}=e,{className:n=""}=e,{title:i}=e,o;switch(r){case"primary":o="bg-blue-600 hover:bg-blue-500";break;case"submit":o="bg-green-600 hover:bg-green-500";break;case"warning":o="bg-orange-600 hover:bg-orange-500";break;case"breaking":o="bg-red-600 hover:bg-red-500";break;case"muted":o="bg-gray-600 hover:bg-gray-500";break;default:o="bg-blue-600 hover:bg-blue-500";break}function c(u){Nt.call(this,a,u)}return a.$$set=u=>{"type"in u&&t(3,r=u.type),"className"in u&&t(0,n=u.className),"title"in u&&t(1,i=u.title),"$$scope"in u&&t(4,l=u.$$scope)},[n,i,o,r,l,s,c]}class Ke extends ge{constructor(e){super();_e(this,e,Rt,Bt,ve,{type:3,className:0,title:1})}}function it(a){let e,t=te.get().name+"",s,l,r=te.get().artist+"",n,i,o,c;return{c(){e=v("div"),s=E(t),l=E(" by "),n=E(r),this.h()},l(u){e=b(u,"DIV",{title:!0,class:!0});var p=_(e);s=I(p,t),l=I(p," by "),n=I(p,r),p.forEach(h),this.h()},h(){d(e,"title","Open in Spotify"),d(e,"class",i="cursor-pointer border-blue-600 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden")},m(u,p){A(u,e,p),f(e,s),f(e,l),f(e,n),o||(c=se(e,"click",a[6]),o=!0)},p:De,d(u){u&&h(e),o=!1,c()}}}function ct(a){let e,t=a[1]?"custom ":"",s,l,r=yt(new Date,a[3])+"",n;return{c(){e=v("span"),s=E(t),l=E("audial #"),n=E(r),this.h()},l(i){e=b(i,"SPAN",{class:!0});var o=_(e);s=I(o,t),l=I(o,"audial #"),n=I(o,r),o.forEach(h),this.h()},h(){d(e,"class","my-2")},m(i,o){A(i,e,o),f(e,s),f(e,l),f(e,n)},p(i,o){o&2&&t!==(t=i[1]?"custom ":"")&&Q(s,t)},d(i){i&&h(e)}}}function ut(a){let e,t,s,l,r,n,i;return t=new Ke({props:{title:"Share Score",className:"block mx-auto",type:"submit",$$slots:{default:[zt]},$$scope:{ctx:a}}}),t.$on("click",a[5]),{c(){e=v("div"),de(t.$$.fragment),s=N(),l=v("p"),r=E("copied to clipboard."),this.h()},l(o){e=b(o,"DIV",{class:!0});var c=_(e);he(t.$$.fragment,c),s=V(c),l=b(c,"P",{class:!0});var u=_(l);r=I(u,"copied to clipboard."),u.forEach(h),c.forEach(h),this.h()},h(){d(l,"class",n=`${a[2]?"opacity-100":"opacity-0"} text-blue-100 font-semibold transition-all duration-500 my-2`),d(e,"class","w-full mx-auto my-2")},m(o,c){A(o,e,c),me(t,e,null),f(e,s),f(e,l),f(l,r),i=!0},p(o,c){const u={};c&128&&(u.$$scope={dirty:c,ctx:o}),t.$set(u),(!i||c&4&&n!==(n=`${o[2]?"opacity-100":"opacity-0"} text-blue-100 font-semibold transition-all duration-500 my-2`))&&d(l,"class",n)},i(o){i||(H(t.$$.fragment,o),i=!0)},o(o){G(t.$$.fragment,o),i=!1},d(o){o&&h(e),pe(t)}}}function zt(a){let e;return{c(){e=E("share")},l(t){e=I(t,"share")},m(t,s){A(t,e,s)},d(t){t&&h(e)}}}function Ot(a){let e,t=a[1]?!K.get().correct:!L.get().correct,s,l,r,n=a[4]()+"",i,o,c,u=t&&it(a),p=!a[0]&&ct(a),m=!a[0]&&ut(a);return{c(){e=v("div"),u&&u.c(),s=N(),p&&p.c(),l=N(),r=v("span"),i=E(n),o=N(),m&&m.c(),this.h()},l(w){e=b(w,"DIV",{class:!0});var k=_(e);u&&u.l(k),s=V(k),p&&p.l(k),l=V(k),r=b(k,"SPAN",{});var g=_(r);i=I(g,n),g.forEach(h),o=V(k),m&&m.l(k),k.forEach(h),this.h()},h(){d(e,"class","py-3")},m(w,k){A(w,e,k),u&&u.m(e,null),f(e,s),p&&p.m(e,null),f(e,l),f(e,r),f(r,i),f(e,o),m&&m.m(e,null),c=!0},p(w,[k]){k&2&&(t=w[1]?!K.get().correct:!L.get().correct),t?u?u.p(w,k):(u=it(w),u.c(),u.m(e,s)):u&&(u.d(1),u=null),w[0]?p&&(p.d(1),p=null):p?p.p(w,k):(p=ct(w),p.c(),p.m(e,l)),w[0]?m&&(wt(),G(m,1,1,()=>{m=null}),kt()):m?(m.p(w,k),k&1&&H(m,1)):(m=ut(w),m.c(),H(m,1),m.m(e,null))},i(w){c||(H(m),c=!0)},o(w){G(m),c=!1},d(w){w&&h(e),u&&u.d(),p&&p.d(),m&&m.d()}}}function Ht(a,e,t){let{forceRandom:s}=e,{custom:l}=e,r=!1;const n=new Date("3/29/2022"),i=()=>{let u="";for(const p of(l?K.get().guesses:L.get().guesses)||[])p.correct?u+="\u{1F7E9} ":p.artistCorrect?u+="\u{1F7E8} ":p.song?u+="\u{1F7E5} ":u+="\u2B1C ";for(let p=0;p<6-(l?K.get().attempts:L.get().attempts);p++)u+="\u2B1B ";return u},o=()=>{let u=`${l?"custom ":""}audial #`+yt(new Date,n);u+=`
`+i();const p="https://audial.mogdan.xyz"+(l?"/custom?playlist="+new URLSearchParams(window.location.search).get("playlist"):"");u+=`
`+p,navigator.clipboard.writeText(u),t(2,r=!0),ee.track("share-score",{result:i(),custom:l})},c=()=>{window.open(`https://open.spotify.com/track/${te.get().id}`,"_blank").focus()};return a.$$set=u=>{"forceRandom"in u&&t(0,s=u.forceRandom),"custom"in u&&t(1,l=u.custom)},[s,l,r,n,i,o,c]}class Ft extends ge{constructor(e){super();_e(this,e,Ht,Ot,ve,{forceRandom:0,custom:1})}}function ft(a,e,t){const s=a.slice();return s[14]=e[t],s}function dt(a,e,t){const s=a.slice();return s[14]=e[t],s}function ht(a){let e,t,s;return{c(){e=v("div"),t=v("span"),s=E("listen to the song and try to guess it correctly. you have 6 attempts."),this.h()},l(l){e=b(l,"DIV",{class:!0});var r=_(e);t=b(r,"SPAN",{class:!0});var n=_(t);s=I(n,"listen to the song and try to guess it correctly. you have 6 attempts."),n.forEach(h),r.forEach(h),this.h()},h(){d(t,"class","text-center mx-auto w-full text-blue-100"),d(e,"class","w-full px-0 sm:px-20 transition-all duration-200")},m(l,r){A(l,e,r),f(e,t),f(t,s)},d(l){l&&h(e)}}}function mt(a){let e,t,s=a[2].guesses.filter(_t),l=[];for(let i=0;i<s.length;i+=1)l[i]=pt(dt(a,s,i));let r=a[2].guesses.filter(vt),n=[];for(let i=0;i<r.length;i+=1)n[i]=gt(ft(a,r,i));return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=N();for(let i=0;i<n.length;i+=1)n[i].c();t=$e()},l(i){for(let o=0;o<l.length;o+=1)l[o].l(i);e=V(i);for(let o=0;o<n.length;o+=1)n[o].l(i);t=$e()},m(i,o){for(let c=0;c<l.length;c+=1)l[c].m(i,o);A(i,e,o);for(let c=0;c<n.length;c+=1)n[c].m(i,o);A(i,t,o)},p(i,o){if(o&4){s=i[2].guesses.filter(_t);let c;for(c=0;c<s.length;c+=1){const u=dt(i,s,c);l[c]?l[c].p(u,o):(l[c]=pt(u),l[c].c(),l[c].m(e.parentNode,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=s.length}if(o&4){r=i[2].guesses.filter(vt);let c;for(c=0;c<r.length;c+=1){const u=ft(i,r,c);n[c]?n[c].p(u,o):(n[c]=gt(u),n[c].c(),n[c].m(t.parentNode,t))}for(;c<n.length;c+=1)n[c].d(1);n.length=r.length}},d(i){st(l,i),i&&h(e),st(n,i),i&&h(t)}}}function Gt(a){let e,t;return{c(){e=v("div"),t=E("song guess skipped"),this.h()},l(s){e=b(s,"DIV",{class:!0});var l=_(e);t=I(l,"song guess skipped"),l.forEach(h),this.h()},h(){d(e,"class","border-gray-600 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden")},m(s,l){A(s,e,l),f(e,t)},p:De,d(s){s&&h(e)}}}function Ut(a){let e,t=a[14].song.name+"",s,l,r=a[14].song.artist+"",n,i,o,c;function u(){return a[9](a[14])}return{c(){e=v("div"),s=E(t),l=E(" by "),n=E(r),this.h()},l(p){e=b(p,"DIV",{title:!0,class:!0});var m=_(e);s=I(m,t),l=I(m," by "),n=I(m,r),m.forEach(h),this.h()},h(){d(e,"title","Open in Spotify"),d(e,"class",i=`cursor-pointer ${a[14].artistCorrect?"border-amber-400":"border-red-600"} border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden`)},m(p,m){A(p,e,m),f(e,s),f(e,l),f(e,n),o||(c=se(e,"click",u),o=!0)},p(p,m){a=p,m&4&&t!==(t=a[14].song.name+"")&&Q(s,t),m&4&&r!==(r=a[14].song.artist+"")&&Q(n,r),m&4&&i!==(i=`cursor-pointer ${a[14].artistCorrect?"border-amber-400":"border-red-600"} border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden`)&&d(e,"class",i)},d(p){p&&h(e),o=!1,c()}}}function pt(a){let e;function t(r,n){return r[14].song?Ut:Gt}let s=t(a),l=s(a);return{c(){l.c(),e=$e()},l(r){l.l(r),e=$e()},m(r,n){l.m(r,n),A(r,e,n)},p(r,n){s===(s=t(r))&&l?l.p(r,n):(l.d(1),l=s(r),l&&(l.c(),l.m(e.parentNode,e)))},d(r){l.d(r),r&&h(e)}}}function gt(a){let e,t=a[14].song.name+"",s,l,r=a[14].song.artist+"",n,i,o,c;function u(){return a[10](a[14])}return{c(){e=v("div"),s=E(t),l=E(" by "),n=E(r),i=N(),this.h()},l(p){e=b(p,"DIV",{title:!0,class:!0});var m=_(e);s=I(m,t),l=I(m," by "),n=I(m,r),i=V(m),m.forEach(h),this.h()},h(){d(e,"title","Open in Spotify"),d(e,"class","cursor-pointer border-green-600 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden")},m(p,m){A(p,e,m),f(e,s),f(e,l),f(e,n),f(e,i),o||(c=se(e,"click",u),o=!0)},p(p,m){a=p,m&4&&t!==(t=a[14].song.name+"")&&Q(s,t),m&4&&r!==(r=a[14].song.artist+"")&&Q(n,r)},d(p){p&&h(e),o=!1,c()}}}function qt(a){let e,t;return e=new Ft({props:{custom:a[1]||a[0],forceRandom:a[0]}}),{c(){de(e.$$.fragment)},l(s){he(e.$$.fragment,s)},m(s,l){me(e,s,l),t=!0},p(s,l){const r={};l&3&&(r.custom=s[1]||s[0]),l&1&&(r.forceRandom=s[0]),e.$set(r)},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){G(e.$$.fragment,s),t=!1},d(s){pe(e,s)}}}function Jt(a){let e,t,s,l,r,n,i,o,c,u,p,m;function w(g){a[11](g)}let k={name:"song-selection",className:"w-10/12",inputClassName:"border-gray-600 border-2 w-full h-8 px-2 py-5 rounded-sm bg-gray-900 hover:border-gray-400 focus:border-gray-400 outline-none transition-all duration-200",dropdownClassName:"p-0 bg-gray-900",placeholder:`${6-a[2].attempts} ${6-a[2].attempts!==1?"attempts":"attempt"} left`,items:a[3],minCharactersToSearch:2,searchFunction:a[7],labelFieldName:"name",valueFieldName:"id",showLoadingIndicator:!0,noInputStyles:!0,hideArrow:!0,$$slots:{loading:[Zt],"no-results":[Yt],item:[Qt,({label:g,item:y})=>({12:g,13:y}),({label:g,item:y})=>(g?4096:0)|(y?8192:0)]},$$scope:{ctx:a}};return a[4]!==void 0&&(k.selectedItem=a[4]),t=new Vt({props:k}),At.push(()=>Tt(t,"selectedItem",w)),n=new Ke({props:{title:"Submit Song Guess",type:"primary",className:"w-full",$$slots:{default:[Wt]},$$scope:{ctx:a}}}),n.$on("click",a[5]),{c(){e=v("div"),de(t.$$.fragment),l=N(),r=v("div"),de(n.$$.fragment),i=N(),o=v("div"),c=E("skip"),this.h()},l(g){e=b(g,"DIV",{class:!0,title:!0});var y=_(e);he(t.$$.fragment,y),l=V(y),r=b(y,"DIV",{class:!0,title:!0});var S=_(r);he(n.$$.fragment,S),i=V(S),o=b(S,"DIV",{class:!0});var P=_(o);c=I(P,"skip"),P.forEach(h),S.forEach(h),y.forEach(h),this.h()},h(){d(o,"class","text-gray-400 cursor-pointer text-center underline underline-offset-1"),d(r,"class","w-2/12 pl-4 mt-0.5"),d(r,"title","guess selected song"),d(e,"class","flex mt-6 mb-2"),d(e,"title","guess a song")},m(g,y){A(g,e,y),me(t,e,null),f(e,l),f(e,r),me(n,r,null),f(r,i),f(r,o),f(o,c),u=!0,p||(m=se(o,"click",a[6]),p=!0)},p(g,y){const S={};y&4&&(S.placeholder=`${6-g[2].attempts} ${6-g[2].attempts!==1?"attempts":"attempt"} left`),y&8&&(S.items=g[3]),y&532480&&(S.$$scope={dirty:y,ctx:g}),!s&&y&16&&(s=!0,S.selectedItem=g[4],Pt(()=>s=!1)),t.$set(S);const P={};y&524288&&(P.$$scope={dirty:y,ctx:g}),n.$set(P)},i(g){u||(H(t.$$.fragment,g),H(n.$$.fragment,g),u=!0)},o(g){G(t.$$.fragment,g),G(n.$$.fragment,g),u=!1},d(g){g&&h(e),pe(t),pe(n),p=!1,m()}}}function Qt(a){let e,t,s=a[13].name+"",l,r,n=a[13].artist+"",i;return{c(){e=v("div"),t=v("span"),l=E(s),r=E(" by "),i=E(n),this.h()},l(o){e=b(o,"DIV",{slot:!0,class:!0});var c=_(e);t=b(c,"SPAN",{});var u=_(t);l=I(u,s),r=I(u," by "),i=I(u,n),u.forEach(h),c.forEach(h),this.h()},h(){d(e,"slot","item"),d(e,"class","border-2 h-10 px-2 py-3 w-full text-left rounded-sm bg-gray-900 text-white hover:text-blue-500 hover:border-blue-500 overflow-ellipsis whitespace-nowrap overflow-hidden transition-colors duration-150")},m(o,c){A(o,e,c),f(e,t),f(t,l),f(t,r),f(t,i)},p(o,c){c&8192&&s!==(s=o[13].name+"")&&Q(l,s),c&8192&&n!==(n=o[13].artist+"")&&Q(i,n)},d(o){o&&h(e)}}}function Yt(a){let e,t,s;return{c(){e=v("div"),t=v("span"),s=E("could not find this song in our list."),this.h()},l(l){e=b(l,"DIV",{slot:!0,class:!0});var r=_(e);t=b(r,"SPAN",{});var n=_(t);s=I(n,"could not find this song in our list."),n.forEach(h),r.forEach(h),this.h()},h(){d(e,"slot","no-results"),d(e,"class","py-1")},m(l,r){A(l,e,r),f(e,t),f(t,s)},d(l){l&&h(e)}}}function Zt(a){let e,t,s;return{c(){e=v("div"),t=v("span"),s=E("searching for songs..."),this.h()},l(l){e=b(l,"DIV",{slot:!0,class:!0});var r=_(e);t=b(r,"SPAN",{});var n=_(t);s=I(n,"searching for songs..."),n.forEach(h),r.forEach(h),this.h()},h(){d(e,"slot","loading"),d(e,"class","py-1")},m(l,r){A(l,e,r),f(e,t),f(t,s)},d(l){l&&h(e)}}}function Wt(a){let e,t;return{c(){e=X("svg"),t=X("path"),this.h()},l(s){e=x(s,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var l=_(e);t=x(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),_(t).forEach(h),l.forEach(h),this.h()},h(){d(t,"stroke-linecap","round"),d(t,"stroke-linejoin","round"),d(t,"d","M13 7l5 5m0 0l-5 5m5-5H6"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","h-6 w-6 mx-auto"),d(e,"fill","none"),d(e,"viewBox","0 0 24 24"),d(e,"stroke","currentColor"),d(e,"stroke-width","2")},m(s,l){A(s,e,l),f(e,t)},d(s){s&&h(e)}}}function Xt(a){let e,t,s,l,r,n,i,o=a[2].attempts===0&&ht(),c=a[2].guesses&&mt(a);const u=[Jt,qt],p=[];function m(w,k){return w[2].attempts<6&&!w[2].correct?0:1}return r=m(a),n=p[r]=u[r](a),{c(){e=v("div"),o&&o.c(),t=N(),s=v("div"),c&&c.c(),l=N(),n.c(),this.h()},l(w){e=b(w,"DIV",{});var k=_(e);o&&o.l(k),t=V(k),s=b(k,"DIV",{class:!0});var g=_(s);c&&c.l(g),l=V(g),n.l(g),g.forEach(h),k.forEach(h),this.h()},h(){d(s,"class","w-full px-0 transition-all sm:px-20 items-center game")},m(w,k){A(w,e,k),o&&o.m(e,null),f(e,t),f(e,s),c&&c.m(s,null),f(s,l),p[r].m(s,null),i=!0},p(w,[k]){w[2].attempts===0?o||(o=ht(),o.c(),o.m(e,t)):o&&(o.d(1),o=null),w[2].guesses?c?c.p(w,k):(c=mt(w),c.c(),c.m(s,l)):c&&(c.d(1),c=null);let g=r;r=m(w),r===g?p[r].p(w,k):(wt(),G(p[g],1,1,()=>{p[g]=null}),kt(),n=p[r],n?n.p(w,k):(n=p[r]=u[r](w),n.c()),H(n,1),n.m(s,null))},i(w){i||(H(n),i=!0)},o(w){G(n),i=!1},d(w){w&&h(e),o&&o.d(),c&&c.d(),p[r].d()}}}const _t=a=>!a.correct,vt=a=>a.correct;function xt(a,e,t){let{forceRandom:s=!1}=e,l={},{allTracks:r=[]}=e,{custom:n=!1}=e;bt(async()=>{(new Date(L.get().date).toLocaleDateString()!==new Date().toLocaleDateString()||!L)&&L.set({guesses:[],date:new Date,correct:!1,attempts:0}),n||s?(t(2,l=K.get()),K.listen(g=>t(2,l=g))):(t(2,l=L.get()),L.listen(g=>t(2,l=g)))});let i=[],o={};const c=()=>{if(!o)return;const g=[...l.guesses||[]];if(o.id===te.get().id)g.push({song:te.get(),correct:!0,artistCorrect:!0}),n||s?(K.setKey("guesses",g),K.setKey("correct",!0),K.setKey("attempts",l.attempts+1)):(L.setKey("guesses",g),L.setKey("correct",!0),L.setKey("attempts",l.attempts+1)),ee.track("guess-song",{correct:!0,custom:n}),ee.track("attempt-correct");else{const y=r.find(S=>S.id==o.id);g.push({song:nt(y),correct:!1,artistCorrect:o.artist.includes(te.get().artist)}),n||s?(K.setKey("guesses",g),K.setKey("attempts",l.attempts+1)):(L.setKey("guesses",g),L.setKey("attempts",l.attempts+1)),ee.track("guess-song",{correct:!1,custom:n})}l.attempts===6&&!l.correct&&ee.track("attempt-fail"),t(4,o=void 0),ke.set(!0)},u=()=>{const g=[...l.guesses||[]];g.push({song:null,correct:!1,artistCorrect:!1}),n||s?(K.setKey("guesses",g),K.setKey("attempts",l.attempts+1)):(L.setKey("guesses",g),L.setKey("attempts",l.attempts+1)),ee.track("skip-song",{custom:n})},p=async g=>(t(3,i=r.filter(y=>(y.name+" "+y.artists[0].name).toLowerCase().includes(g.toLowerCase()))),t(3,i=i.map(y=>nt(y))),i),m=g=>{window.open(`https://open.spotify.com/track/${g.song.id}`,"_blank").focus()},w=g=>{window.open(`https://open.spotify.com/track/${g.song.id}`,"_blank").focus()};function k(g){o=g,t(4,o)}return a.$$set=g=>{"forceRandom"in g&&t(0,s=g.forceRandom),"allTracks"in g&&t(8,r=g.allTracks),"custom"in g&&t(1,n=g.custom)},[s,n,l,i,o,c,u,p,r,m,w,k]}class ns extends ge{constructor(e){super();_e(this,e,xt,Xt,ve,{forceRandom:0,allTracks:8,custom:1})}}function es(a){let e;return{c(){e=E("sounds cool")},l(t){e=I(t,"sounds cool")},m(t,s){A(t,e,s)},d(t){t&&h(e)}}}function ts(a){let e,t,s,l,r,n,i,o,c,u,p,m,w,k,g,y,S,P,$,D,U,le,Y,C,M,T,j,R,oe,z,Z,ne,re,W,F,Ne,ie,Ve,Ae,Te,be,ae,Pe,ce,Ce,Me,je,ue,J,ye,Le,Be;return J=new Ke({props:{title:"Close Popup",className:"mx-auto text-center block",type:"primary",$$slots:{default:[es]},$$scope:{ctx:a}}}),J.$on("click",a[2]),{c(){e=v("div"),t=v("div"),s=N(),l=v("div"),r=v("div"),n=v("h1"),i=E("instructions"),o=N(),c=v("div"),u=v("ul"),p=v("li"),m=v("span"),w=E("press the play button"),k=N(),g=v("li"),y=v("span"),S=E("listen to the song snippet"),P=N(),$=v("li"),D=v("span"),U=E("type the name of the song or song artist into the box"),le=N(),Y=v("li"),C=v("span"),M=E("if you get the song incorrect or press skip, more of the song will be revealed"),T=N(),j=v("li"),R=v("span"),oe=E("a "),z=v("span"),Z=E("red result"),ne=E(" means you guessed incorrectly."),re=N(),W=v("li"),F=v("span"),Ne=E("a "),ie=v("span"),Ve=E("yellow result"),Ae=E(" means the artist was correct."),Te=N(),be=v("li"),ae=v("span"),Pe=E("a "),ce=v("span"),Ce=E("green result"),Me=E(" means your guess was correct!"),je=N(),ue=v("div"),de(J.$$.fragment),this.h()},l(O){e=b(O,"DIV",{});var q=_(e);t=b(q,"DIV",{class:!0}),_(t).forEach(h),s=V(q),l=b(q,"DIV",{class:!0});var we=_(l);r=b(we,"DIV",{class:!0});var fe=_(r);n=b(fe,"H1",{class:!0});var Re=_(n);i=I(Re,"instructions"),Re.forEach(h),o=V(fe),c=b(fe,"DIV",{class:!0});var ze=_(c);u=b(ze,"UL",{class:!0});var B=_(u);p=b(B,"LI",{});var Oe=_(p);m=b(Oe,"SPAN",{});var He=_(m);w=I(He,"press the play button"),He.forEach(h),Oe.forEach(h),k=V(B),g=b(B,"LI",{});var Fe=_(g);y=b(Fe,"SPAN",{});var Ge=_(y);S=I(Ge,"listen to the song snippet"),Ge.forEach(h),Fe.forEach(h),P=V(B),$=b(B,"LI",{});var Ue=_($);D=b(Ue,"SPAN",{});var qe=_(D);U=I(qe,"type the name of the song or song artist into the box"),qe.forEach(h),Ue.forEach(h),le=V(B),Y=b(B,"LI",{});var Je=_(Y);C=b(Je,"SPAN",{});var Qe=_(C);M=I(Qe,"if you get the song incorrect or press skip, more of the song will be revealed"),Qe.forEach(h),Je.forEach(h),T=V(B),j=b(B,"LI",{});var Ye=_(j);R=b(Ye,"SPAN",{});var Ee=_(R);oe=I(Ee,"a "),z=b(Ee,"SPAN",{class:!0});var Ze=_(z);Z=I(Ze,"red result"),Ze.forEach(h),ne=I(Ee," means you guessed incorrectly."),Ee.forEach(h),Ye.forEach(h),re=V(B),W=b(B,"LI",{});var We=_(W);F=b(We,"SPAN",{});var Ie=_(F);Ne=I(Ie,"a "),ie=b(Ie,"SPAN",{class:!0});var Xe=_(ie);Ve=I(Xe,"yellow result"),Xe.forEach(h),Ae=I(Ie," means the artist was correct."),Ie.forEach(h),We.forEach(h),Te=V(B),be=b(B,"LI",{});var xe=_(be);ae=b(xe,"SPAN",{});var Se=_(ae);Pe=I(Se,"a "),ce=b(Se,"SPAN",{class:!0});var et=_(ce);Ce=I(et,"green result"),et.forEach(h),Me=I(Se," means your guess was correct!"),Se.forEach(h),xe.forEach(h),B.forEach(h),ze.forEach(h),je=V(fe),ue=b(fe,"DIV",{class:!0});var tt=_(ue);he(J.$$.fragment,tt),tt.forEach(h),fe.forEach(h),we.forEach(h),q.forEach(h),this.h()},h(){d(t,"class","flex overflow-y-auto overflow-x-hidden fixed absolute right-0 left-0 z-40 justify-center items-center h-modal md:h-full md:inset-0 bg-black opacity-50"),d(n,"class","text-3xl mx-auto text-center"),d(z,"class","text-red-500"),d(ie,"class","text-amber-400"),d(ce,"class","text-green-500"),d(u,"class","text-left"),d(c,"class","p-4"),d(ue,"class","w-full"),d(r,"class","relative rounded-lg mt-6 bg-gray-700 p-3 opacity-100 shadow"),d(l,"class","relative px-4 w-full max-w-2xl h-full md:h-auto mx-auto z-50"),lt(e,"hidden",a[0])},m(O,q){A(O,e,q),f(e,t),f(e,s),f(e,l),f(l,r),f(r,n),f(n,i),f(r,o),f(r,c),f(c,u),f(u,p),f(p,m),f(m,w),f(u,k),f(u,g),f(g,y),f(y,S),f(u,P),f(u,$),f($,D),f(D,U),f(u,le),f(u,Y),f(Y,C),f(C,M),f(u,T),f(u,j),f(j,R),f(R,oe),f(R,z),f(z,Z),f(R,ne),f(u,re),f(u,W),f(W,F),f(F,Ne),f(F,ie),f(ie,Ve),f(F,Ae),f(u,Te),f(u,be),f(be,ae),f(ae,Pe),f(ae,ce),f(ce,Ce),f(ae,Me),f(r,je),f(r,ue),me(J,ue,null),ye=!0,Le||(Be=se(t,"click",a[1]),Le=!0)},p(O,[q]){const we={};q&8&&(we.$$scope={dirty:q,ctx:O}),J.$set(we),q&1&&lt(e,"hidden",O[0])},i(O){ye||(H(J.$$.fragment,O),ye=!0)},o(O){G(J.$$.fragment,O),ye=!1},d(O){O&&h(e),pe(J),Le=!1,Be()}}}function ss(a,e,t){let{hidden:s=!0}=e;const l=()=>{t(0,s=!0),rt.set(!0)},r=()=>{t(0,s=!0),rt.set(!0)};return a.$$set=n=>{"hidden"in n&&t(0,s=n.hidden)},[s,l,r]}class is extends ge{constructor(e){super();_e(this,e,ss,ts,ve,{hidden:0})}}const cs=async(a,e)=>(ee.track("get-track",{playlist:a||"default",random:e}),await(await fetch(`https://us-central1-audial-6e1bd.cloudfunctions.net/daily?playlist=${a}&random=${e}&locale=${new Date().toDateString()}`,{method:"GET",cache:"reload"})).json());export{Ke as B,os as F,ns as G,is as I,nt as c,cs as g};
