import{S as z,i as D,s as J,a as N,e as I,c as O,b as A,B as M,h as f,k as d,q as E,l as v,m as h,r as w,C as c,u as j,n,O as X,P as x}from"../../../chunks/index-31d0cd1b.js";import{j as b}from"../../../chunks/singletons-a2e316fc.js";import{p as G}from"../../../chunks/parse-f0c618df.js";b.disable_scroll_handling;b.goto;b.invalidate;const H=b.invalidateAll;b.preload_data;b.preload_code;b.before_navigate;b.after_navigate;const K=b.apply_action;function Q(u){const e=JSON.parse(u);return e.data&&(e.data=G(e.data)),e}function R(u){var r;let e,l,s=((r=u[0])==null?void 0:r.error_message)+"",i;return{c(){e=d("p"),l=E("Oops! "),i=E(s)},l(a){e=v(a,"P",{});var o=h(e);l=w(o,"Oops! "),i=w(o,s),o.forEach(f)},m(a,o){A(a,e,o),c(e,l),c(e,i)},p(a,o){var t;o&1&&s!==(s=((t=a[0])==null?void 0:t.error_message)+"")&&j(i,s)},d(a){a&&f(e)}}}function V(u){let e,l,s,i,r,a,o,t,p,m,P,g,T,y,L,S,U;return{c(){e=d("form"),l=d("label"),s=E("Name: "),i=d("input"),r=N(),a=d("label"),o=E("Email: "),t=d("input"),p=N(),m=d("label"),P=E("Message: "),g=d("textarea"),T=N(),y=d("button"),L=E("Send Email"),this.h()},l(k){e=v(k,"FORM",{action:!0,class:!0});var _=h(e);l=v(_,"LABEL",{class:!0});var q=h(l);s=w(q,"Name: "),i=v(q,"INPUT",{type:!0,name:!0,id:!0,class:!0}),q.forEach(f),r=O(_),a=v(_,"LABEL",{class:!0});var B=h(a);o=w(B,"Email: "),t=v(B,"INPUT",{type:!0,name:!0,id:!0,class:!0}),B.forEach(f),p=O(_),m=v(_,"LABEL",{class:!0});var F=h(m);P=w(F,"Message: "),g=v(F,"TEXTAREA",{name:!0,id:!0,class:!0}),h(g).forEach(f),F.forEach(f),T=O(_),y=v(_,"BUTTON",{type:!0,class:!0});var C=h(y);L=w(C,"Send Email"),C.forEach(f),_.forEach(f),this.h()},h(){n(i,"type","text"),i.required=!0,n(i,"name","name"),n(i,"id","name"),n(i,"class","svelte-1oaguw1"),n(l,"class","svelte-1oaguw1"),n(t,"type","email"),t.required=!0,n(t,"name","email"),n(t,"id","email"),n(t,"class","svelte-1oaguw1"),n(a,"class","svelte-1oaguw1"),g.required=!0,n(g,"name","message"),n(g,"id","message"),n(g,"class","svelte-1oaguw1"),n(m,"class","svelte-1oaguw1"),n(y,"type","submit"),n(y,"class","svelte-1oaguw1"),n(e,"action","/contact?/email"),n(e,"class","svelte-1oaguw1")},m(k,_){A(k,e,_),c(e,l),c(l,s),c(l,i),c(e,r),c(e,a),c(a,o),c(a,t),c(e,p),c(e,m),c(m,P),c(m,g),c(e,T),c(e,y),c(y,L),S||(U=X(e,"submit",x(u[1])),S=!0)},p:M,d(k){k&&f(e),S=!1,U()}}}function W(u){var i;let e,l=((i=u[0])==null?void 0:i.message)+"",s;return{c(){e=d("p"),s=E(l)},l(r){e=v(r,"P",{});var a=h(e);s=w(a,l),a.forEach(f)},m(r,a){A(r,e,a),c(e,s)},p(r,a){var o;a&1&&l!==(l=((o=r[0])==null?void 0:o.message)+"")&&j(s,l)},d(r){r&&f(e)}}}function Y(u){var o;let e,l,s=((o=u[0])==null?void 0:o.error_message)&&R(u);function i(t,p){var m;return(m=t[0])!=null&&m.message?W:V}let r=i(u),a=r(u);return{c(){s&&s.c(),e=N(),a.c(),l=I()},l(t){s&&s.l(t),e=O(t),a.l(t),l=I()},m(t,p){s&&s.m(t,p),A(t,e,p),a.m(t,p),A(t,l,p)},p(t,[p]){var m;(m=t[0])!=null&&m.error_message?s?s.p(t,p):(s=R(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),r===(r=i(t))&&a?a.p(t,p):(a.d(1),a=r(t),a&&(a.c(),a.m(l.parentNode,l)))},i:M,o:M,d(t){s&&s.d(t),t&&f(e),a.d(t),t&&f(l)}}}function Z(u,e,l){let{form:s}=e;async function i(r){const a=new FormData(this),o=await fetch(this.action,{method:"POST",body:a}),t=Q(await o.text());t.type==="success"&&await H(),K(t)}return u.$$set=r=>{"form"in r&&l(0,s=r.form)},[s,i]}class ae extends z{constructor(e){super(),D(this,e,Z,Y,J,{form:0})}}export{ae as default};