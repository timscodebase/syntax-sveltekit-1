import{S as q,i as E,s as C,k as p,q as H,a as b,M as w,l as u,m as f,r as x,h,c as I,N as S,n as g,b as T,C as m,u as k,B as y,Q as A}from"../../../../chunks/index-31d0cd1b.js";import"../../../../chunks/AudioPlayer.svelte_svelte_type_style_lang-e7952dab.js";import{c as B}from"../../../../chunks/stores-0391e4db.js";function D(i){let t,e,a,r=i[0].title+"",s,c,o,d=i[0].html+"";return{c(){t=p("article"),e=p("div"),a=p("h1"),s=H(r),c=b(),o=new w(!1),this.h()},l(l){t=u(l,"ARTICLE",{class:!0});var n=f(t);e=u(n,"DIV",{class:!0});var _=f(e);a=u(_,"H1",{});var v=f(a);s=x(v,r),v.forEach(h),c=I(_),o=S(_,!1),_.forEach(h),n.forEach(h),this.h()},h(){o.a=null,g(e,"class","content svelte-11qd9iy"),g(t,"class","svelte-11qd9iy")},m(l,n){T(l,t,n),m(t,e),m(e,a),m(a,s),m(e,c),o.m(d,e)},p(l,[n]){n&1&&r!==(r=l[0].title+"")&&k(s,r),n&1&&d!==(d=l[0].html+"")&&o.p(d)},i:y,o:y,d(l){l&&h(t)}}}function L(i,t,e){let a,r,{data:s}=t;return A(()=>{B.set(a)}),i.$$set=c=>{"data"in c&&e(1,s=c.data)},i.$$.update=()=>{i.$$.dirty&2&&e(0,{episode:a,user:r}=s,a)},[a,s]}class Q extends q{constructor(t){super(),E(this,t,L,D,C,{data:1})}}export{Q as default};