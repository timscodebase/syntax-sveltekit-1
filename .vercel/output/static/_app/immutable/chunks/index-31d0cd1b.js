function w(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(D)}function O(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ht(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function R(t){return Object.keys(t).length===0}function U(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(U(n,e))}function pt(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],l=Math.max(n.dirty.length,r.length);for(let u=0;u<l;u+=1)o[u]=n.dirty[u]|r[u];return o}return n.dirty|r}return n.dirty}function gt(t,n,e,i,r,o){if(r){const l=P(n,e,i,o);t.p(l,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t){return t??""}let E=!1;function W(){E=!0}function V(){E=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<n.length;c++){const a=n[c];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const c=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=c?r+1:X(1,r,y=>n[e[y]].claim_order,c))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const o=[],l=[];let u=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(o.push(n[s-1]);u>=s;u--)l.push(n[u]);u--}for(;u>=0;u--)l.push(n[u]);o.reverse(),l.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<l.length;s++){for(;c<o.length&&l[s].claim_order>=o[c].claim_order;)c++;const a=c<o.length?o[c]:null;t.insertBefore(l[s],a)}}function Z(t,n){if(E){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){E&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function $t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function wt(){return S(" ")}function Nt(){return S("")}function Et(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function vt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function it(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Tt(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:it(t,n,e)}function rt(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){z(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(n(u)){const s=e(u);return s===void 0?t.splice(l,1):t[l]=s,r||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(n(u)){const s=e(u);return s===void 0?t.splice(l,1):t[l]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function lt(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const u=r.attributes[l];e[u.name]||o.push(u.name)}o.forEach(l=>r.removeAttribute(l))},()=>i(n))}function At(t,n,e){return lt(t,n,e,G)}function st(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function St(t){return st(t," ")}function L(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Mt(t,n){const e=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",e);if(e===i)return new B(void 0,n);z(t);const r=t.splice(e,i-e+1);N(r[0]),N(r[r.length-1]);const o=r.slice(1,r.length-1);for(const l of o)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new B(o,n)}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Ht(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}class ct{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=G(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(N)}}class B extends ct{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}function Ct(t,n){return new t(n)}let m;function h(t){m=t}function M(){if(!m)throw new Error("Function called outside component initialization");return m}function Lt(t){M().$$.before_update.push(t)}function Bt(t){M().$$.on_mount.push(t)}function kt(t){M().$$.after_update.push(t)}const d=[],k=[],b=[],q=[],I=Promise.resolve();let T=!1;function J(){T||(T=!0,I.then(K))}function qt(){return J(),I}function A(t){b.push(t)}const v=new Set;let x=0;function K(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),ut(n.$$)}for(h(null),d.length=0,x=0;k.length;)k.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];v.has(e)||(v.add(e),e())}b.length=0}while(d.length);for(;q.length;)q.pop()();T=!1,v.clear(),h(t)}function ut(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Ot(){_.r||p(_.c),_=_.p}function ot(t,n){t&&t.i&&($.delete(t),t.i(n))}function Pt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Gt(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||A(()=>{const l=t.$$.on_mount.map(D).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...l):p(l),t.$$.on_mount=[]}),o.forEach(A)}function at(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(d.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,o,l,u=[-1]){const s=m;h(t);const c=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:n.target||s.$$.root};l&&l(c.root);let a=!1;if(c.ctx=e?e(t,n.props||{},(f,y,...j)=>{const H=j.length?j[0]:y;return c.ctx&&r(c.ctx[f],c.ctx[f]=H)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](H),a&&_t(t,f)),y}):[],c.update(),a=!0,p(c.before_update),c.fragment=i?i(c.ctx):!1,n.target){if(n.hydrate){W();const f=rt(n.target);c.fragment&&c.fragment.l(f),f.forEach(N)}else c.fragment&&c.fragment.c();n.intro&&ot(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),V(),K()}h(s)}class It{$destroy(){at(this,1),this.$destroy=w}$on(n,e){if(!O(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!R(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{qt as A,w as B,Z as C,$t as D,bt as E,ht as F,Tt as G,pt as H,gt as I,xt as J,yt as K,mt as L,B as M,Mt as N,Et as O,vt as P,Lt as Q,It as S,wt as a,nt as b,St as c,Ot as d,Nt as e,ot as f,Dt as g,N as h,Ft as i,kt as j,G as k,At as l,rt as m,it as n,Bt as o,Ht as p,S as q,st as r,dt as s,Pt as t,jt as u,Ct as v,Gt as w,zt as x,ft as y,at as z};