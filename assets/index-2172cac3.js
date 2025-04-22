var za=Object.defineProperty;var Va=(e,n,t)=>n in e?za(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ce=(e,n,t)=>(Va(e,typeof n!="symbol"?n+"":n,t),t),qa=(e,n,t)=>{if(!n.has(e))throw TypeError("Cannot "+t)};var si=(e,n,t)=>{if(n.has(e))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(e):n.set(e,t)};var Xt=(e,n,t)=>(qa(e,n,"access private method"),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hi(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const ae={},st=[],Ye=()=>{},Ka=()=>!1,Vr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ui=e=>e.startsWith("onUpdate:"),ye=Object.assign,Bi=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Wa=Object.prototype.hasOwnProperty,X=(e,n)=>Wa.call(e,n),z=Array.isArray,lt=e=>qr(e)==="[object Map]",Ls=e=>qr(e)==="[object Set]",V=e=>typeof e=="function",me=e=>typeof e=="string",Mn=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",js=e=>(fe(e)||V(e))&&V(e.then)&&V(e.catch),Ns=Object.prototype.toString,qr=e=>Ns.call(e),Ga=e=>qr(e).slice(8,-1),Hs=e=>qr(e)==="[object Object]",zi=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Tt=Hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kr=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Ya=/-(\w)/g,qe=Kr(e=>e.replace(Ya,(n,t)=>t?t.toUpperCase():"")),Ja=/\B([A-Z])/g,Gn=Kr(e=>e.replace(Ja,"-$1").toLowerCase()),Wr=Kr(e=>e.charAt(0).toUpperCase()+e.slice(1)),li=Kr(e=>e?`on${Wr(e)}`:""),On=(e,n)=>!Object.is(e,n),ai=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Us=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},Qa=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let ko;const Gr=()=>ko||(ko=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vi(e){if(z(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],i=me(r)?nc(r):Vi(r);if(i)for(const o in i)n[o]=i[o]}return n}else if(me(e)||fe(e))return e}const Za=/;(?![^(]*\))/g,Xa=/:([^]+)/,ec=/\/\*[^]*?\*\//g;function nc(e){const n={};return e.replace(ec,"").split(Za).forEach(t=>{if(t){const r=t.split(Xa);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function qi(e){let n="";if(me(e))n=e;else if(z(e))for(let t=0;t<e.length;t++){const r=qi(e[t]);r&&(n+=r+" ")}else if(fe(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const tc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rc=Hi(tc);function Bs(e){return!!e||e===""}const zs=e=>!!(e&&e.__v_isRef===!0),K=e=>me(e)?e:e==null?"":z(e)||fe(e)&&(e.toString===Ns||!V(e.toString))?zs(e)?K(e.value):JSON.stringify(e,Vs,2):String(e),Vs=(e,n)=>zs(n)?Vs(e,n.value):lt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,i],o)=>(t[ci(r,o)+" =>"]=i,t),{})}:Ls(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>ci(t))}:Mn(n)?ci(n):fe(n)&&!z(n)&&!Hs(n)?String(n):n,ci=(e,n="")=>{var t;return Mn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class ic{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!n&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=je;try{return je=this,n()}finally{je=t}}}on(){je=this}off(){je=this.parent}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function oc(){return je}let le;const ui=new WeakSet;class qs{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ui.has(this)&&(ui.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ws(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,So(this),Gs(this);const n=le,t=Je;le=this,Je=!0;try{return this.fn()}finally{Ys(this),le=n,Je=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Gi(n);this.deps=this.depsTail=void 0,So(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ui.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wi(this)&&this.run()}get dirty(){return wi(this)}}let Ks=0,Et,Ct;function Ws(e,n=!1){if(e.flags|=8,n){e.next=Ct,Ct=e;return}e.next=Et,Et=e}function Ki(){Ks++}function Wi(){if(--Ks>0)return;if(Ct){let n=Ct;for(Ct=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Et;){let n=Et;for(Et=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function Gs(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Ys(e){let n,t=e.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),Gi(r),sc(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=n,e.depsTail=t}function wi(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Js(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Js(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ft))return;e.globalVersion=Ft;const n=e.dep;if(e.flags|=2,n.version>0&&!e.isSSR&&e.deps&&!wi(e)){e.flags&=-3;return}const t=le,r=Je;le=e,Je=!0;try{Gs(e);const i=e.fn(e._value);(n.version===0||On(i,e._value))&&(e._value=i,n.version++)}catch(i){throw n.version++,i}finally{le=t,Je=r,Ys(e),e.flags&=-3}}function Gi(e,n=!1){const{dep:t,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Gi(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function sc(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Je=!0;const Qs=[];function Fn(){Qs.push(Je),Je=!1}function Dn(){const e=Qs.pop();Je=e===void 0?!0:e}function So(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=le;le=void 0;try{n()}finally{le=t}}}let Ft=0;class lc{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yi{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!le||!Je||le===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==le)t=this.activeLink=new lc(le,this),le.deps?(t.prevDep=le.depsTail,le.depsTail.nextDep=t,le.depsTail=t):le.deps=le.depsTail=t,Zs(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=le.depsTail,t.nextDep=void 0,le.depsTail.nextDep=t,le.depsTail=t,le.deps===t&&(le.deps=r)}return t}trigger(n){this.version++,Ft++,this.notify(n)}notify(n){Ki();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Wi()}}}function Zs(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)Zs(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const ki=new WeakMap,Bn=Symbol(""),Si=Symbol(""),Dt=Symbol("");function ke(e,n,t){if(Je&&le){let r=ki.get(e);r||ki.set(e,r=new Map);let i=r.get(t);i||(r.set(t,i=new Yi),i.map=r,i.key=t),i.track()}}function vn(e,n,t,r,i,o){const s=ki.get(e);if(!s){Ft++;return}const l=a=>{a&&a.trigger()};if(Ki(),n==="clear")s.forEach(l);else{const a=z(e),u=a&&zi(t);if(a&&t==="length"){const c=Number(r);s.forEach((f,d)=>{(d==="length"||d===Dt||!Mn(d)&&d>=c)&&l(f)})}else switch((t!==void 0||s.has(void 0))&&l(s.get(t)),u&&l(s.get(Dt)),n){case"add":a?u&&l(s.get("length")):(l(s.get(Bn)),lt(e)&&l(s.get(Si)));break;case"delete":a||(l(s.get(Bn)),lt(e)&&l(s.get(Si)));break;case"set":lt(e)&&l(s.get(Bn));break}}Wi()}function Xn(e){const n=Z(e);return n===e?n:(ke(n,"iterate",Dt),Ve(e)?n:n.map(Se))}function Yr(e){return ke(e=Z(e),"iterate",Dt),e}const ac={__proto__:null,[Symbol.iterator](){return fi(this,Symbol.iterator,Se)},concat(...e){return Xn(this).concat(...e.map(n=>z(n)?Xn(n):n))},entries(){return fi(this,"entries",e=>(e[1]=Se(e[1]),e))},every(e,n){return _n(this,"every",e,n,void 0,arguments)},filter(e,n){return _n(this,"filter",e,n,t=>t.map(Se),arguments)},find(e,n){return _n(this,"find",e,n,Se,arguments)},findIndex(e,n){return _n(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return _n(this,"findLast",e,n,Se,arguments)},findLastIndex(e,n){return _n(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return _n(this,"forEach",e,n,void 0,arguments)},includes(...e){return pi(this,"includes",e)},indexOf(...e){return pi(this,"indexOf",e)},join(e){return Xn(this).join(e)},lastIndexOf(...e){return pi(this,"lastIndexOf",e)},map(e,n){return _n(this,"map",e,n,void 0,arguments)},pop(){return wt(this,"pop")},push(...e){return wt(this,"push",e)},reduce(e,...n){return Ao(this,"reduce",e,n)},reduceRight(e,...n){return Ao(this,"reduceRight",e,n)},shift(){return wt(this,"shift")},some(e,n){return _n(this,"some",e,n,void 0,arguments)},splice(...e){return wt(this,"splice",e)},toReversed(){return Xn(this).toReversed()},toSorted(e){return Xn(this).toSorted(e)},toSpliced(...e){return Xn(this).toSpliced(...e)},unshift(...e){return wt(this,"unshift",e)},values(){return fi(this,"values",Se)}};function fi(e,n,t){const r=Yr(e),i=r[n]();return r!==e&&!Ve(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=t(o.value)),o}),i}const cc=Array.prototype;function _n(e,n,t,r,i,o){const s=Yr(e),l=s!==e&&!Ve(e),a=s[n];if(a!==cc[n]){const f=a.apply(e,o);return l?Se(f):f}let u=t;s!==e&&(l?u=function(f,d){return t.call(this,Se(f),d,e)}:t.length>2&&(u=function(f,d){return t.call(this,f,d,e)}));const c=a.call(s,u,r);return l&&i?i(c):c}function Ao(e,n,t,r){const i=Yr(e);let o=t;return i!==e&&(Ve(e)?t.length>3&&(o=function(s,l,a){return t.call(this,s,l,a,e)}):o=function(s,l,a){return t.call(this,s,Se(l),a,e)}),i[n](o,...r)}function pi(e,n,t){const r=Z(e);ke(r,"iterate",Dt);const i=r[n](...t);return(i===-1||i===!1)&&Zi(t[0])?(t[0]=Z(t[0]),r[n](...t)):i}function wt(e,n,t=[]){Fn(),Ki();const r=Z(e)[n].apply(e,t);return Wi(),Dn(),r}const uc=Hi("__proto__,__v_isRef,__isVue"),Xs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mn));function fc(e){Mn(e)||(e=String(e));const n=Z(this);return ke(n,"has",e),n.hasOwnProperty(e)}class el{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(i?o?xc:il:o?rl:tl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const s=z(n);if(!i){let a;if(s&&(a=ac[t]))return a;if(t==="hasOwnProperty")return fc}const l=Reflect.get(n,t,Te(n)?n:r);return(Mn(t)?Xs.has(t):uc(t))||(i||ke(n,"get",t),o)?l:Te(l)?s&&zi(t)?l:l.value:fe(l)?i?sl(l):Jr(l):l}}class nl extends el{constructor(n=!1){super(!1,n)}set(n,t,r,i){let o=n[t];if(!this._isShallow){const a=Vn(o);if(!Ve(r)&&!Vn(r)&&(o=Z(o),r=Z(r)),!z(n)&&Te(o)&&!Te(r))return a?!1:(o.value=r,!0)}const s=z(n)&&zi(t)?Number(t)<n.length:X(n,t),l=Reflect.set(n,t,r,Te(n)?n:i);return n===Z(i)&&(s?On(r,o)&&vn(n,"set",t,r):vn(n,"add",t,r)),l}deleteProperty(n,t){const r=X(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&r&&vn(n,"delete",t,void 0),i}has(n,t){const r=Reflect.has(n,t);return(!Mn(t)||!Xs.has(t))&&ke(n,"has",t),r}ownKeys(n){return ke(n,"iterate",z(n)?"length":Bn),Reflect.ownKeys(n)}}class pc extends el{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const dc=new nl,hc=new pc,gc=new nl(!0);const Ai=e=>e,er=e=>Reflect.getPrototypeOf(e);function mc(e,n,t){return function(...r){const i=this.__v_raw,o=Z(i),s=lt(o),l=e==="entries"||e===Symbol.iterator&&s,a=e==="keys"&&s,u=i[e](...r),c=t?Ai:n?Ti:Se;return!n&&ke(o,"iterate",a?Si:Bn),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:l?[c(f[0]),c(f[1])]:c(f),done:d}},[Symbol.iterator](){return this}}}}function nr(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function _c(e,n){const t={get(i){const o=this.__v_raw,s=Z(o),l=Z(i);e||(On(i,l)&&ke(s,"get",i),ke(s,"get",l));const{has:a}=er(s),u=n?Ai:e?Ti:Se;if(a.call(s,i))return u(o.get(i));if(a.call(s,l))return u(o.get(l));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!e&&ke(Z(i),"iterate",Bn),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,s=Z(o),l=Z(i);return e||(On(i,l)&&ke(s,"has",i),ke(s,"has",l)),i===l?o.has(i):o.has(i)||o.has(l)},forEach(i,o){const s=this,l=s.__v_raw,a=Z(l),u=n?Ai:e?Ti:Se;return!e&&ke(a,"iterate",Bn),l.forEach((c,f)=>i.call(o,u(c),u(f),s))}};return ye(t,e?{add:nr("add"),set:nr("set"),delete:nr("delete"),clear:nr("clear")}:{add(i){!n&&!Ve(i)&&!Vn(i)&&(i=Z(i));const o=Z(this);return er(o).has.call(o,i)||(o.add(i),vn(o,"add",i,i)),this},set(i,o){!n&&!Ve(o)&&!Vn(o)&&(o=Z(o));const s=Z(this),{has:l,get:a}=er(s);let u=l.call(s,i);u||(i=Z(i),u=l.call(s,i));const c=a.call(s,i);return s.set(i,o),u?On(o,c)&&vn(s,"set",i,o):vn(s,"add",i,o),this},delete(i){const o=Z(this),{has:s,get:l}=er(o);let a=s.call(o,i);a||(i=Z(i),a=s.call(o,i)),l&&l.call(o,i);const u=o.delete(i);return a&&vn(o,"delete",i,void 0),u},clear(){const i=Z(this),o=i.size!==0,s=i.clear();return o&&vn(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=mc(i,e,n)}),t}function Ji(e,n){const t=_c(e,n);return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(X(t,i)&&i in r?t:r,i,o)}const yc={get:Ji(!1,!1)},bc={get:Ji(!1,!0)},vc={get:Ji(!0,!1)};const tl=new WeakMap,rl=new WeakMap,il=new WeakMap,xc=new WeakMap;function wc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kc(e){return e.__v_skip||!Object.isExtensible(e)?0:wc(Ga(e))}function Jr(e){return Vn(e)?e:Qi(e,!1,dc,yc,tl)}function ol(e){return Qi(e,!1,gc,bc,rl)}function sl(e){return Qi(e,!0,hc,vc,il)}function Qi(e,n,t,r,i){if(!fe(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const s=kc(e);if(s===0)return e;const l=new Proxy(e,s===2?r:t);return i.set(e,l),l}function at(e){return Vn(e)?at(e.__v_raw):!!(e&&e.__v_isReactive)}function Vn(e){return!!(e&&e.__v_isReadonly)}function Ve(e){return!!(e&&e.__v_isShallow)}function Zi(e){return e?!!e.__v_raw:!1}function Z(e){const n=e&&e.__v_raw;return n?Z(n):e}function Sc(e){return!X(e,"__v_skip")&&Object.isExtensible(e)&&Us(e,"__v_skip",!0),e}const Se=e=>fe(e)?Jr(e):e,Ti=e=>fe(e)?sl(e):e;function Te(e){return e?e.__v_isRef===!0:!1}function Oe(e){return ll(e,!1)}function Ac(e){return ll(e,!0)}function ll(e,n){return Te(e)?e:new Tc(e,n)}class Tc{constructor(n,t){this.dep=new Yi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:Z(n),this._value=t?n:Se(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||Ve(n)||Vn(n);n=r?n:Z(n),On(n,t)&&(this._rawValue=n,this._value=r?n:Se(n),this.dep.trigger())}}function ct(e){return Te(e)?e.value:e}const Ec={get:(e,n,t)=>n==="__v_raw"?e:ct(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const i=e[n];return Te(i)&&!Te(t)?(i.value=t,!0):Reflect.set(e,n,t,r)}};function al(e){return at(e)?e:new Proxy(e,Ec)}class Cc{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Yi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ft-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return Ws(this,!0),!0}get value(){const n=this.dep.track();return Js(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Pc(e,n,t=!1){let r,i;return V(e)?r=e:(r=e.get,i=e.set),new Cc(r,i,t)}const tr={},fr=new WeakMap;let Hn;function Rc(e,n=!1,t=Hn){if(t){let r=fr.get(t);r||fr.set(t,r=[]),r.push(e)}}function Oc(e,n,t=ae){const{immediate:r,deep:i,once:o,scheduler:s,augmentJob:l,call:a}=t,u=$=>i?$:Ve($)||i===!1||i===0?Rn($,1):Rn($);let c,f,d,g,v=!1,k=!1;if(Te(e)?(f=()=>e.value,v=Ve(e)):at(e)?(f=()=>u(e),v=!0):z(e)?(k=!0,v=e.some($=>at($)||Ve($)),f=()=>e.map($=>{if(Te($))return $.value;if(at($))return u($);if(V($))return a?a($,2):$()})):V(e)?n?f=a?()=>a(e,2):e:f=()=>{if(d){Fn();try{d()}finally{Dn()}}const $=Hn;Hn=c;try{return a?a(e,3,[g]):e(g)}finally{Hn=$}}:f=Ye,n&&i){const $=f,G=i===!0?1/0:i;f=()=>Rn($(),G)}const T=oc(),j=()=>{c.stop(),T&&T.active&&Bi(T.effects,c)};if(o&&n){const $=n;n=(...G)=>{$(...G),j()}}let M=k?new Array(e.length).fill(tr):tr;const N=$=>{if(!(!(c.flags&1)||!c.dirty&&!$))if(n){const G=c.run();if(i||v||(k?G.some((ve,pe)=>On(ve,M[pe])):On(G,M))){d&&d();const ve=Hn;Hn=c;try{const pe=[G,M===tr?void 0:k&&M[0]===tr?[]:M,g];a?a(n,3,pe):n(...pe),M=G}finally{Hn=ve}}}else c.run()};return l&&l(N),c=new qs(f),c.scheduler=s?()=>s(N,!1):N,g=$=>Rc($,!1,c),d=c.onStop=()=>{const $=fr.get(c);if($){if(a)a($,4);else for(const G of $)G();fr.delete(c)}},n?r?N(!0):M=c.run():s?s(N.bind(null,!0),!0):c.run(),j.pause=c.pause.bind(c),j.resume=c.resume.bind(c),j.stop=j,j}function Rn(e,n=1/0,t){if(n<=0||!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),n--,Te(e))Rn(e.value,n,t);else if(z(e))for(let r=0;r<e.length;r++)Rn(e[r],n,t);else if(Ls(e)||lt(e))e.forEach(r=>{Rn(r,n,t)});else if(Hs(e)){for(const r in e)Rn(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Rn(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qt(e,n,t,r){try{return r?e(...r):e()}catch(i){Qr(i,n,t)}}function dn(e,n,t,r){if(V(e)){const i=qt(e,n,t,r);return i&&js(i)&&i.catch(o=>{Qr(o,n,t)}),i}if(z(e)){const i=[];for(let o=0;o<e.length;o++)i.push(dn(e[o],n,t,r));return i}}function Qr(e,n,t,r=!0){const i=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||ae;if(n){let l=n.parent;const a=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const c=l.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,a,u)===!1)return}l=l.parent}if(o){Fn(),qt(o,null,10,[e,a,u]),Dn();return}}Ic(e,t,i,r,s)}function Ic(e,n,t,r=!0,i=!1){if(i)throw e;console.error(e)}const Pe=[];let ln=-1;const ut=[];let En=null,nt=0;const cl=Promise.resolve();let pr=null;function ul(e){const n=pr||cl;return e?n.then(this?e.bind(this):e):n}function $c(e){let n=ln+1,t=Pe.length;for(;n<t;){const r=n+t>>>1,i=Pe[r],o=Lt(i);o<e||o===e&&i.flags&2?n=r+1:t=r}return n}function Xi(e){if(!(e.flags&1)){const n=Lt(e),t=Pe[Pe.length-1];!t||!(e.flags&2)&&n>=Lt(t)?Pe.push(e):Pe.splice($c(n),0,e),e.flags|=1,fl()}}function fl(){pr||(pr=cl.then(dl))}function Mc(e){z(e)?ut.push(...e):En&&e.id===-1?En.splice(nt+1,0,e):e.flags&1||(ut.push(e),e.flags|=1),fl()}function To(e,n,t=ln+1){for(;t<Pe.length;t++){const r=Pe[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Pe.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pl(e){if(ut.length){const n=[...new Set(ut)].sort((t,r)=>Lt(t)-Lt(r));if(ut.length=0,En){En.push(...n);return}for(En=n,nt=0;nt<En.length;nt++){const t=En[nt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}En=null,nt=0}}const Lt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function dl(e){const n=Ye;try{for(ln=0;ln<Pe.length;ln++){const t=Pe[ln];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),qt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ln<Pe.length;ln++){const t=Pe[ln];t&&(t.flags&=-2)}ln=-1,Pe.length=0,pl(),pr=null,(Pe.length||ut.length)&&dl()}}let Ge=null,hl=null;function dr(e){const n=Ge;return Ge=e,hl=e&&e.type.__scopeId||null,n}function He(e,n=Ge,t){if(!n||e._n)return e;const r=(...i)=>{r._d&&Fo(-1);const o=dr(n);let s;try{s=e(...i)}finally{dr(o),r._d&&Fo(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function jn(e,n,t,r){const i=e.dirs,o=n&&n.dirs;for(let s=0;s<i.length;s++){const l=i[s];o&&(l.oldValue=o[s].value);let a=l.dir[r];a&&(Fn(),dn(a,t,8,[e.el,l,e,n]),Dn())}}const Fc=Symbol("_vte"),Dc=e=>e.__isTeleport;function eo(e,n){e.shapeFlag&6&&e.component?(e.transition=n,eo(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}/*! #__NO_SIDE_EFFECTS__ */function gl(e,n){return V(e)?(()=>ye({name:e.name},n,{setup:e}))():e}function ml(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function hr(e,n,t,r,i=!1){if(z(e)){e.forEach((v,k)=>hr(v,n&&(z(n)?n[k]:n),t,r,i));return}if(Pt(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&hr(e,n,t,r.component.subTree);return}const o=r.shapeFlag&4?io(r.component):r.el,s=i?null:o,{i:l,r:a}=e,u=n&&n.r,c=l.refs===ae?l.refs={}:l.refs,f=l.setupState,d=Z(f),g=f===ae?()=>!1:v=>X(d,v);if(u!=null&&u!==a&&(me(u)?(c[u]=null,g(u)&&(f[u]=null)):Te(u)&&(u.value=null)),V(a))qt(a,l,12,[s,c]);else{const v=me(a),k=Te(a);if(v||k){const T=()=>{if(e.f){const j=v?g(a)?f[a]:c[a]:a.value;i?z(j)&&Bi(j,o):z(j)?j.includes(o)||j.push(o):v?(c[a]=[o],g(a)&&(f[a]=c[a])):(a.value=[o],e.k&&(c[e.k]=a.value))}else v?(c[a]=s,g(a)&&(f[a]=s)):k&&(a.value=s,e.k&&(c[e.k]=s))};s?(T.id=-1,Le(T,t)):T()}}}Gr().requestIdleCallback;Gr().cancelIdleCallback;const Pt=e=>!!e.type.__asyncLoader,_l=e=>e.type.__isKeepAlive;function Lc(e,n){yl(e,"a",n)}function jc(e,n){yl(e,"da",n)}function yl(e,n,t=Ae){const r=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Zr(n,r,t),t){let i=t.parent;for(;i&&i.parent;)_l(i.parent.vnode)&&Nc(r,n,t,i),i=i.parent}}function Nc(e,n,t,r){const i=Zr(n,e,r,!0);bl(()=>{Bi(r[n],i)},t)}function Zr(e,n,t=Ae,r=!1){if(t){const i=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...s)=>{Fn();const l=Kt(t),a=dn(n,t,e,s);return l(),Dn(),a});return r?i.unshift(o):i.push(o),o}}const wn=e=>(n,t=Ae)=>{(!Nt||e==="sp")&&Zr(e,(...r)=>n(...r),t)},Hc=wn("bm"),hn=wn("m"),Uc=wn("bu"),Bc=wn("u"),zc=wn("bum"),bl=wn("um"),Vc=wn("sp"),qc=wn("rtg"),Kc=wn("rtc");function Wc(e,n=Ae){Zr("ec",e,n)}const vl="components";function dt(e,n){return Yc(vl,e,!0,n)||e}const Gc=Symbol.for("v-ndc");function Yc(e,n,t=!0,r=!1){const i=Ge||Ae;if(i){const o=i.type;if(e===vl){const l=Lu(o,!1);if(l&&(l===n||l===qe(n)||l===Wr(qe(n))))return o}const s=Eo(i[e]||o[e],n)||Eo(i.appContext[e],n);return!s&&r?o:s}}function Eo(e,n){return e&&(e[n]||e[qe(n)]||e[Wr(qe(n))])}function ft(e,n,t,r){let i;const o=t&&t[r],s=z(e);if(s||me(e)){const l=s&&at(e);let a=!1;l&&(a=!Ve(e),e=Yr(e)),i=new Array(e.length);for(let u=0,c=e.length;u<c;u++)i[u]=n(a?Se(e[u]):e[u],u,void 0,o&&o[u])}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=n(l+1,l,void 0,o&&o[l])}else if(fe(e))if(e[Symbol.iterator])i=Array.from(e,(l,a)=>n(l,a,void 0,o&&o[a]));else{const l=Object.keys(e);i=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const c=l[a];i[a]=n(e[c],c,a,o&&o[a])}}else i=[];return t&&(t[r]=i),i}const Ei=e=>e?Hl(e)?io(e):Ei(e.parent):null,Rt=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ei(e.parent),$root:e=>Ei(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>no(e),$forceUpdate:e=>e.f||(e.f=()=>{Xi(e.update)}),$nextTick:e=>e.n||(e.n=ul.bind(e.proxy)),$watch:e=>mu.bind(e)}),di=(e,n)=>e!==ae&&!e.__isScriptSetup&&X(e,n),Jc={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:l,appContext:a}=e;let u;if(n[0]!=="$"){const g=s[n];if(g!==void 0)switch(g){case 1:return r[n];case 2:return i[n];case 4:return t[n];case 3:return o[n]}else{if(di(r,n))return s[n]=1,r[n];if(i!==ae&&X(i,n))return s[n]=2,i[n];if((u=e.propsOptions[0])&&X(u,n))return s[n]=3,o[n];if(t!==ae&&X(t,n))return s[n]=4,t[n];Ci&&(s[n]=0)}}const c=Rt[n];let f,d;if(c)return n==="$attrs"&&ke(e.attrs,"get",""),c(e);if((f=l.__cssModules)&&(f=f[n]))return f;if(t!==ae&&X(t,n))return s[n]=4,t[n];if(d=a.config.globalProperties,X(d,n))return d[n]},set({_:e},n,t){const{data:r,setupState:i,ctx:o}=e;return di(i,n)?(i[n]=t,!0):r!==ae&&X(r,n)?(r[n]=t,!0):X(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:i,propsOptions:o}},s){let l;return!!t[s]||e!==ae&&X(e,s)||di(n,s)||(l=o[0])&&X(l,s)||X(r,s)||X(Rt,s)||X(i.config.globalProperties,s)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:X(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Co(e){return z(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Ci=!0;function Qc(e){const n=no(e),t=e.proxy,r=e.ctx;Ci=!1,n.beforeCreate&&Po(n.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:l,provide:a,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:g,updated:v,activated:k,deactivated:T,beforeDestroy:j,beforeUnmount:M,destroyed:N,unmounted:$,render:G,renderTracked:ve,renderTriggered:pe,errorCaptured:en,serverPrefetch:kn,expose:nn,inheritAttrs:Sn,components:Ln,directives:tn,filters:vt}=n;if(u&&Zc(u,r,null),s)for(const re in s){const Y=s[re];V(Y)&&(r[re]=Y.bind(t))}if(i){const re=i.call(t,t);fe(re)&&(e.data=Jr(re))}if(Ci=!0,o)for(const re in o){const Y=o[re],mn=V(Y)?Y.bind(t,t):V(Y.get)?Y.get.bind(t,t):Ye,An=!V(Y)&&V(Y.set)?Y.set.bind(t):Ye,rn=xe({get:mn,set:An});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>rn.value,set:Ie=>rn.value=Ie})}if(l)for(const re in l)xl(l[re],r,t,re);if(a){const re=V(a)?a.call(t):a;Reflect.ownKeys(re).forEach(Y=>{ir(Y,re[Y])})}c&&Po(c,e,"c");function _e(re,Y){z(Y)?Y.forEach(mn=>re(mn.bind(t))):Y&&re(Y.bind(t))}if(_e(Hc,f),_e(hn,d),_e(Uc,g),_e(Bc,v),_e(Lc,k),_e(jc,T),_e(Wc,en),_e(Kc,ve),_e(qc,pe),_e(zc,M),_e(bl,$),_e(Vc,kn),z(nn))if(nn.length){const re=e.exposed||(e.exposed={});nn.forEach(Y=>{Object.defineProperty(re,Y,{get:()=>t[Y],set:mn=>t[Y]=mn})})}else e.exposed||(e.exposed={});G&&e.render===Ye&&(e.render=G),Sn!=null&&(e.inheritAttrs=Sn),Ln&&(e.components=Ln),tn&&(e.directives=tn),kn&&ml(e)}function Zc(e,n,t=Ye){z(e)&&(e=Pi(e));for(const r in e){const i=e[r];let o;fe(i)?"default"in i?o=fn(i.from||r,i.default,!0):o=fn(i.from||r):o=fn(i),Te(o)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):n[r]=o}}function Po(e,n,t){dn(z(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function xl(e,n,t,r){let i=r.includes(".")?Fl(t,r):()=>t[r];if(me(e)){const o=n[e];V(o)&&or(i,o)}else if(V(e))or(i,e.bind(t));else if(fe(e))if(z(e))e.forEach(o=>xl(o,n,t,r));else{const o=V(e.handler)?e.handler.bind(t):n[e.handler];V(o)&&or(i,o,e)}}function no(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,l=o.get(n);let a;return l?a=l:!i.length&&!t&&!r?a=n:(a={},i.length&&i.forEach(u=>gr(a,u,s,!0)),gr(a,n,s)),fe(n)&&o.set(n,a),a}function gr(e,n,t,r=!1){const{mixins:i,extends:o}=n;o&&gr(e,o,t,!0),i&&i.forEach(s=>gr(e,s,t,!0));for(const s in n)if(!(r&&s==="expose")){const l=Xc[s]||t&&t[s];e[s]=l?l(e[s],n[s]):n[s]}return e}const Xc={data:Ro,props:Oo,emits:Oo,methods:At,computed:At,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:At,directives:At,watch:nu,provide:Ro,inject:eu};function Ro(e,n){return n?e?function(){return ye(V(e)?e.call(this,this):e,V(n)?n.call(this,this):n)}:n:e}function eu(e,n){return At(Pi(e),Pi(n))}function Pi(e){if(z(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ce(e,n){return e?[...new Set([].concat(e,n))]:n}function At(e,n){return e?ye(Object.create(null),e,n):n}function Oo(e,n){return e?z(e)&&z(n)?[...new Set([...e,...n])]:ye(Object.create(null),Co(e),Co(n??{})):n}function nu(e,n){if(!e)return n;if(!n)return e;const t=ye(Object.create(null),e);for(const r in n)t[r]=Ce(e[r],n[r]);return t}function wl(){return{app:null,config:{isNativeTag:Ka,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tu=0;function ru(e,n){return function(r,i=null){V(r)||(r=ye({},r)),i!=null&&!fe(i)&&(i=null);const o=wl(),s=new WeakSet,l=[];let a=!1;const u=o.app={_uid:tu++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Nu,get config(){return o.config},set config(c){},use(c,...f){return s.has(c)||(c&&V(c.install)?(s.add(c),c.install(u,...f)):V(c)&&(s.add(c),c(u,...f))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,f){return f?(o.components[c]=f,u):o.components[c]},directive(c,f){return f?(o.directives[c]=f,u):o.directives[c]},mount(c,f,d){if(!a){const g=u._ceVNode||oe(r,i);return g.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),f&&n?n(g,c):e(g,c,d),a=!0,u._container=c,c.__vue_app__=u,io(g.component)}},onUnmount(c){l.push(c)},unmount(){a&&(dn(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,f){return o.provides[c]=f,u},runWithContext(c){const f=pt;pt=u;try{return c()}finally{pt=f}}};return u}}let pt=null;function ir(e,n){if(Ae){let t=Ae.provides;const r=Ae.parent&&Ae.parent.provides;r===t&&(t=Ae.provides=Object.create(r)),t[e]=n}}function fn(e,n,t=!1){const r=Ae||Ge;if(r||pt){const i=pt?pt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&V(n)?n.call(r&&r.proxy):n}}const kl={},Sl=()=>Object.create(kl),Al=e=>Object.getPrototypeOf(e)===kl;function iu(e,n,t,r=!1){const i={},o=Sl();e.propsDefaults=Object.create(null),Tl(e,n,i,o);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);t?e.props=r?i:ol(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function ou(e,n,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,l=Z(i),[a]=e.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Xr(e.emitsOptions,d))continue;const g=n[d];if(a)if(X(o,d))g!==o[d]&&(o[d]=g,u=!0);else{const v=qe(d);i[v]=Ri(a,l,v,g,e,!1)}else g!==o[d]&&(o[d]=g,u=!0)}}}else{Tl(e,n,i,o)&&(u=!0);let c;for(const f in l)(!n||!X(n,f)&&((c=Gn(f))===f||!X(n,c)))&&(a?t&&(t[f]!==void 0||t[c]!==void 0)&&(i[f]=Ri(a,l,f,void 0,e,!0)):delete i[f]);if(o!==l)for(const f in o)(!n||!X(n,f))&&(delete o[f],u=!0)}u&&vn(e.attrs,"set","")}function Tl(e,n,t,r){const[i,o]=e.propsOptions;let s=!1,l;if(n)for(let a in n){if(Tt(a))continue;const u=n[a];let c;i&&X(i,c=qe(a))?!o||!o.includes(c)?t[c]=u:(l||(l={}))[c]=u:Xr(e.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,s=!0)}if(o){const a=Z(t),u=l||ae;for(let c=0;c<o.length;c++){const f=o[c];t[f]=Ri(i,a,f,u[f],e,!X(u,f))}}return s}function Ri(e,n,t,r,i,o){const s=e[t];if(s!=null){const l=X(s,"default");if(l&&r===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&V(a)){const{propsDefaults:u}=i;if(t in u)r=u[t];else{const c=Kt(i);r=u[t]=a.call(null,n),c()}}else r=a;i.ce&&i.ce._setProp(t,r)}s[0]&&(o&&!l?r=!1:s[1]&&(r===""||r===Gn(t))&&(r=!0))}return r}const su=new WeakMap;function El(e,n,t=!1){const r=t?su:n.propsCache,i=r.get(e);if(i)return i;const o=e.props,s={},l=[];let a=!1;if(!V(e)){const c=f=>{a=!0;const[d,g]=El(f,n,!0);ye(s,d),g&&l.push(...g)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!a)return fe(e)&&r.set(e,st),st;if(z(o))for(let c=0;c<o.length;c++){const f=qe(o[c]);Io(f)&&(s[f]=ae)}else if(o)for(const c in o){const f=qe(c);if(Io(f)){const d=o[c],g=s[f]=z(d)||V(d)?{type:d}:ye({},d),v=g.type;let k=!1,T=!0;if(z(v))for(let j=0;j<v.length;++j){const M=v[j],N=V(M)&&M.name;if(N==="Boolean"){k=!0;break}else N==="String"&&(T=!1)}else k=V(v)&&v.name==="Boolean";g[0]=k,g[1]=T,(k||X(g,"default"))&&l.push(f)}}const u=[s,l];return fe(e)&&r.set(e,u),u}function Io(e){return e[0]!=="$"&&!Tt(e)}const Cl=e=>e[0]==="_"||e==="$stable",to=e=>z(e)?e.map(an):[an(e)],lu=(e,n,t)=>{if(n._n)return n;const r=He((...i)=>to(n(...i)),t);return r._c=!1,r},Pl=(e,n,t)=>{const r=e._ctx;for(const i in e){if(Cl(i))continue;const o=e[i];if(V(o))n[i]=lu(i,o,r);else if(o!=null){const s=to(o);n[i]=()=>s}}},Rl=(e,n)=>{const t=to(n);e.slots.default=()=>t},Ol=(e,n,t)=>{for(const r in n)(t||r!=="_")&&(e[r]=n[r])},au=(e,n,t)=>{const r=e.slots=Sl();if(e.vnode.shapeFlag&32){const i=n._;i?(Ol(r,n,t),t&&Us(r,"_",i,!0)):Pl(n,r)}else n&&Rl(e,n)},cu=(e,n,t)=>{const{vnode:r,slots:i}=e;let o=!0,s=ae;if(r.shapeFlag&32){const l=n._;l?t&&l===1?o=!1:Ol(i,n,t):(o=!n.$stable,Pl(n,i)),s=n}else n&&(Rl(e,n),s={default:1});if(o)for(const l in i)!Cl(l)&&s[l]==null&&delete i[l]},Le=ku;function uu(e){return fu(e)}function fu(e,n){const t=Gr();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:l,createComment:a,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:g=Ye,insertStaticContent:v}=e,k=(p,h,m,b=null,_=null,x=null,C=void 0,E=null,A=!!h.dynamicChildren)=>{if(p===h)return;p&&!kt(p,h)&&(b=y(p),Ie(p,_,x,!0),p=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:w,ref:U,shapeFlag:O}=h;switch(w){case ei:T(p,h,m,b);break;case qn:j(p,h,m,b);break;case sr:p==null&&M(h,m,b,C);break;case Re:Ln(p,h,m,b,_,x,C,E,A);break;default:O&1?G(p,h,m,b,_,x,C,E,A):O&6?tn(p,h,m,b,_,x,C,E,A):(O&64||O&128)&&w.process(p,h,m,b,_,x,C,E,A,F)}U!=null&&_&&hr(U,p&&p.ref,x,h||p,!h)},T=(p,h,m,b)=>{if(p==null)r(h.el=l(h.children),m,b);else{const _=h.el=p.el;h.children!==p.children&&u(_,h.children)}},j=(p,h,m,b)=>{p==null?r(h.el=a(h.children||""),m,b):h.el=p.el},M=(p,h,m,b)=>{[p.el,p.anchor]=v(p.children,h,m,b,p.el,p.anchor)},N=({el:p,anchor:h},m,b)=>{let _;for(;p&&p!==h;)_=d(p),r(p,m,b),p=_;r(h,m,b)},$=({el:p,anchor:h})=>{let m;for(;p&&p!==h;)m=d(p),i(p),p=m;i(h)},G=(p,h,m,b,_,x,C,E,A)=>{h.type==="svg"?C="svg":h.type==="math"&&(C="mathml"),p==null?ve(h,m,b,_,x,C,E,A):kn(p,h,_,x,C,E,A)},ve=(p,h,m,b,_,x,C,E)=>{let A,w;const{props:U,shapeFlag:O,transition:D,dirs:B}=p;if(A=p.el=s(p.type,x,U&&U.is,U),O&8?c(A,p.children):O&16&&en(p.children,A,null,b,_,hi(p,x),C,E),B&&jn(p,null,b,"created"),pe(A,p,p.scopeId,C,b),U){for(const se in U)se!=="value"&&!Tt(se)&&o(A,se,null,U[se],x,b);"value"in U&&o(A,"value",null,U.value,x),(w=U.onVnodeBeforeMount)&&sn(w,b,p)}B&&jn(p,null,b,"beforeMount");const q=pu(_,D);q&&D.beforeEnter(A),r(A,h,m),((w=U&&U.onVnodeMounted)||q||B)&&Le(()=>{w&&sn(w,b,p),q&&D.enter(A),B&&jn(p,null,b,"mounted")},_)},pe=(p,h,m,b,_)=>{if(m&&g(p,m),b)for(let x=0;x<b.length;x++)g(p,b[x]);if(_){let x=_.subTree;if(h===x||Ll(x.type)&&(x.ssContent===h||x.ssFallback===h)){const C=_.vnode;pe(p,C,C.scopeId,C.slotScopeIds,_.parent)}}},en=(p,h,m,b,_,x,C,E,A=0)=>{for(let w=A;w<p.length;w++){const U=p[w]=E?Cn(p[w]):an(p[w]);k(null,U,h,m,b,_,x,C,E)}},kn=(p,h,m,b,_,x,C)=>{const E=h.el=p.el;let{patchFlag:A,dynamicChildren:w,dirs:U}=h;A|=p.patchFlag&16;const O=p.props||ae,D=h.props||ae;let B;if(m&&Nn(m,!1),(B=D.onVnodeBeforeUpdate)&&sn(B,m,h,p),U&&jn(h,p,m,"beforeUpdate"),m&&Nn(m,!0),(O.innerHTML&&D.innerHTML==null||O.textContent&&D.textContent==null)&&c(E,""),w?nn(p.dynamicChildren,w,E,m,b,hi(h,_),x):C||Y(p,h,E,null,m,b,hi(h,_),x,!1),A>0){if(A&16)Sn(E,O,D,m,_);else if(A&2&&O.class!==D.class&&o(E,"class",null,D.class,_),A&4&&o(E,"style",O.style,D.style,_),A&8){const q=h.dynamicProps;for(let se=0;se<q.length;se++){const ne=q[se],Me=O[ne],we=D[ne];(we!==Me||ne==="value")&&o(E,ne,Me,we,_,m)}}A&1&&p.children!==h.children&&c(E,h.children)}else!C&&w==null&&Sn(E,O,D,m,_);((B=D.onVnodeUpdated)||U)&&Le(()=>{B&&sn(B,m,h,p),U&&jn(h,p,m,"updated")},b)},nn=(p,h,m,b,_,x,C)=>{for(let E=0;E<h.length;E++){const A=p[E],w=h[E],U=A.el&&(A.type===Re||!kt(A,w)||A.shapeFlag&70)?f(A.el):m;k(A,w,U,null,b,_,x,C,!0)}},Sn=(p,h,m,b,_)=>{if(h!==m){if(h!==ae)for(const x in h)!Tt(x)&&!(x in m)&&o(p,x,h[x],null,_,b);for(const x in m){if(Tt(x))continue;const C=m[x],E=h[x];C!==E&&x!=="value"&&o(p,x,E,C,_,b)}"value"in m&&o(p,"value",h.value,m.value,_)}},Ln=(p,h,m,b,_,x,C,E,A)=>{const w=h.el=p?p.el:l(""),U=h.anchor=p?p.anchor:l("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:B}=h;B&&(E=E?E.concat(B):B),p==null?(r(w,m,b),r(U,m,b),en(h.children||[],m,U,_,x,C,E,A)):O>0&&O&64&&D&&p.dynamicChildren?(nn(p.dynamicChildren,D,m,_,x,C,E),(h.key!=null||_&&h===_.subTree)&&Il(p,h,!0)):Y(p,h,m,U,_,x,C,E,A)},tn=(p,h,m,b,_,x,C,E,A)=>{h.slotScopeIds=E,p==null?h.shapeFlag&512?_.ctx.activate(h,m,b,C,A):vt(h,m,b,_,x,C,A):Jn(p,h,A)},vt=(p,h,m,b,_,x,C)=>{const E=p.component=Iu(p,b,_);if(_l(p)&&(E.ctx.renderer=F),$u(E,!1,C),E.asyncDep){if(_&&_.registerDep(E,_e,C),!p.el){const A=E.subTree=oe(qn);j(null,A,h,m)}}else _e(E,p,h,m,_,x,C)},Jn=(p,h,m)=>{const b=h.component=p.component;if(xu(p,h,m))if(b.asyncDep&&!b.asyncResolved){re(b,h,m);return}else b.next=h,b.update();else h.el=p.el,b.vnode=h},_e=(p,h,m,b,_,x,C)=>{const E=()=>{if(p.isMounted){let{next:O,bu:D,u:B,parent:q,vnode:se}=p;{const Fe=$l(p);if(Fe){O&&(O.el=se.el,re(p,O,C)),Fe.asyncDep.then(()=>{p.isUnmounted||E()});return}}let ne=O,Me;Nn(p,!1),O?(O.el=se.el,re(p,O,C)):O=se,D&&ai(D),(Me=O.props&&O.props.onVnodeBeforeUpdate)&&sn(Me,q,O,se),Nn(p,!0);const we=gi(p),We=p.subTree;p.subTree=we,k(We,we,f(We.el),y(We),p,_,x),O.el=we.el,ne===null&&wu(p,we.el),B&&Le(B,_),(Me=O.props&&O.props.onVnodeUpdated)&&Le(()=>sn(Me,q,O,se),_)}else{let O;const{el:D,props:B}=h,{bm:q,m:se,parent:ne,root:Me,type:we}=p,We=Pt(h);if(Nn(p,!1),q&&ai(q),!We&&(O=B&&B.onVnodeBeforeMount)&&sn(O,ne,h),Nn(p,!0),D&&ue){const Fe=()=>{p.subTree=gi(p),ue(D,p.subTree,p,_,null)};We&&we.__asyncHydrate?we.__asyncHydrate(D,p,Fe):Fe()}else{Me.ce&&Me.ce._injectChildStyle(we);const Fe=p.subTree=gi(p);k(null,Fe,m,b,p,_,x),h.el=Fe.el}if(se&&Le(se,_),!We&&(O=B&&B.onVnodeMounted)){const Fe=h;Le(()=>sn(O,ne,Fe),_)}(h.shapeFlag&256||ne&&Pt(ne.vnode)&&ne.vnode.shapeFlag&256)&&p.a&&Le(p.a,_),p.isMounted=!0,h=m=b=null}};p.scope.on();const A=p.effect=new qs(E);p.scope.off();const w=p.update=A.run.bind(A),U=p.job=A.runIfDirty.bind(A);U.i=p,U.id=p.uid,A.scheduler=()=>Xi(U),Nn(p,!0),w()},re=(p,h,m)=>{h.component=p;const b=p.vnode.props;p.vnode=h,p.next=null,ou(p,h.props,b,m),cu(p,h.children,m),Fn(),To(p),Dn()},Y=(p,h,m,b,_,x,C,E,A=!1)=>{const w=p&&p.children,U=p?p.shapeFlag:0,O=h.children,{patchFlag:D,shapeFlag:B}=h;if(D>0){if(D&128){An(w,O,m,b,_,x,C,E,A);return}else if(D&256){mn(w,O,m,b,_,x,C,E,A);return}}B&8?(U&16&&ze(w,_,x),O!==w&&c(m,O)):U&16?B&16?An(w,O,m,b,_,x,C,E,A):ze(w,_,x,!0):(U&8&&c(m,""),B&16&&en(O,m,b,_,x,C,E,A))},mn=(p,h,m,b,_,x,C,E,A)=>{p=p||st,h=h||st;const w=p.length,U=h.length,O=Math.min(w,U);let D;for(D=0;D<O;D++){const B=h[D]=A?Cn(h[D]):an(h[D]);k(p[D],B,m,null,_,x,C,E,A)}w>U?ze(p,_,x,!0,!1,O):en(h,m,b,_,x,C,E,A,O)},An=(p,h,m,b,_,x,C,E,A)=>{let w=0;const U=h.length;let O=p.length-1,D=U-1;for(;w<=O&&w<=D;){const B=p[w],q=h[w]=A?Cn(h[w]):an(h[w]);if(kt(B,q))k(B,q,m,null,_,x,C,E,A);else break;w++}for(;w<=O&&w<=D;){const B=p[O],q=h[D]=A?Cn(h[D]):an(h[D]);if(kt(B,q))k(B,q,m,null,_,x,C,E,A);else break;O--,D--}if(w>O){if(w<=D){const B=D+1,q=B<U?h[B].el:b;for(;w<=D;)k(null,h[w]=A?Cn(h[w]):an(h[w]),m,q,_,x,C,E,A),w++}}else if(w>D)for(;w<=O;)Ie(p[w],_,x,!0),w++;else{const B=w,q=w,se=new Map;for(w=q;w<=D;w++){const De=h[w]=A?Cn(h[w]):an(h[w]);De.key!=null&&se.set(De.key,w)}let ne,Me=0;const we=D-q+1;let We=!1,Fe=0;const xt=new Array(we);for(w=0;w<we;w++)xt[w]=0;for(w=B;w<=O;w++){const De=p[w];if(Me>=we){Ie(De,_,x,!0);continue}let on;if(De.key!=null)on=se.get(De.key);else for(ne=q;ne<=D;ne++)if(xt[ne-q]===0&&kt(De,h[ne])){on=ne;break}on===void 0?Ie(De,_,x,!0):(xt[on-q]=w+1,on>=Fe?Fe=on:We=!0,k(De,h[on],m,null,_,x,C,E,A),Me++)}const xo=We?du(xt):st;for(ne=xo.length-1,w=we-1;w>=0;w--){const De=q+w,on=h[De],wo=De+1<U?h[De+1].el:b;xt[w]===0?k(null,on,m,wo,_,x,C,E,A):We&&(ne<0||w!==xo[ne]?rn(on,m,wo,2):ne--)}}},rn=(p,h,m,b,_=null)=>{const{el:x,type:C,transition:E,children:A,shapeFlag:w}=p;if(w&6){rn(p.component.subTree,h,m,b);return}if(w&128){p.suspense.move(h,m,b);return}if(w&64){C.move(p,h,m,F);return}if(C===Re){r(x,h,m);for(let O=0;O<A.length;O++)rn(A[O],h,m,b);r(p.anchor,h,m);return}if(C===sr){N(p,h,m);return}if(b!==2&&w&1&&E)if(b===0)E.beforeEnter(x),r(x,h,m),Le(()=>E.enter(x),_);else{const{leave:O,delayLeave:D,afterLeave:B}=E,q=()=>r(x,h,m),se=()=>{O(x,()=>{q(),B&&B()})};D?D(x,q,se):se()}else r(x,h,m)},Ie=(p,h,m,b=!1,_=!1)=>{const{type:x,props:C,ref:E,children:A,dynamicChildren:w,shapeFlag:U,patchFlag:O,dirs:D,cacheIndex:B}=p;if(O===-2&&(_=!1),E!=null&&hr(E,null,m,p,!0),B!=null&&(h.renderCache[B]=void 0),U&256){h.ctx.deactivate(p);return}const q=U&1&&D,se=!Pt(p);let ne;if(se&&(ne=C&&C.onVnodeBeforeUnmount)&&sn(ne,h,p),U&6)Zt(p.component,m,b);else{if(U&128){p.suspense.unmount(m,b);return}q&&jn(p,null,h,"beforeUnmount"),U&64?p.type.remove(p,h,m,F,b):w&&!w.hasOnce&&(x!==Re||O>0&&O&64)?ze(w,h,m,!1,!0):(x===Re&&O&384||!_&&U&16)&&ze(A,h,m),b&&Qn(p)}(se&&(ne=C&&C.onVnodeUnmounted)||q)&&Le(()=>{ne&&sn(ne,h,p),q&&jn(p,null,h,"unmounted")},m)},Qn=p=>{const{type:h,el:m,anchor:b,transition:_}=p;if(h===Re){Zn(m,b);return}if(h===sr){$(p);return}const x=()=>{i(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(p.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:E}=_,A=()=>C(m,x);E?E(p.el,x,A):A()}else x()},Zn=(p,h)=>{let m;for(;p!==h;)m=d(p),i(p),p=m;i(h)},Zt=(p,h,m)=>{const{bum:b,scope:_,job:x,subTree:C,um:E,m:A,a:w}=p;$o(A),$o(w),b&&ai(b),_.stop(),x&&(x.flags|=8,Ie(C,p,h,m)),E&&Le(E,h),Le(()=>{p.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ze=(p,h,m,b=!1,_=!1,x=0)=>{for(let C=x;C<p.length;C++)Ie(p[C],h,m,b,_)},y=p=>{if(p.shapeFlag&6)return y(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const h=d(p.anchor||p.el),m=h&&h[Fc];return m?d(m):h};let I=!1;const P=(p,h,m)=>{p==null?h._vnode&&Ie(h._vnode,null,null,!0):k(h._vnode||null,p,h,null,null,null,m),h._vnode=p,I||(I=!0,To(),pl(),I=!1)},F={p:k,um:Ie,m:rn,r:Qn,mt:vt,mc:en,pc:Y,pbc:nn,n:y,o:e};let J,ue;return n&&([J,ue]=n(F)),{render:P,hydrate:J,createApp:ru(P,J)}}function hi({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Nn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function pu(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Il(e,n,t=!1){const r=e.children,i=n.children;if(z(r)&&z(i))for(let o=0;o<r.length;o++){const s=r[o];let l=i[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[o]=Cn(i[o]),l.el=s.el),!t&&l.patchFlag!==-2&&Il(s,l)),l.type===ei&&(l.el=s.el)}}function du(e){const n=e.slice(),t=[0];let r,i,o,s,l;const a=e.length;for(r=0;r<a;r++){const u=e[r];if(u!==0){if(i=t[t.length-1],e[i]<u){n[r]=i,t.push(r);continue}for(o=0,s=t.length-1;o<s;)l=o+s>>1,e[t[l]]<u?o=l+1:s=l;u<e[t[o]]&&(o>0&&(n[r]=t[o-1]),t[o]=r)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=n[s];return t}function $l(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:$l(n)}function $o(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const hu=Symbol.for("v-scx"),gu=()=>fn(hu);function or(e,n,t){return Ml(e,n,t)}function Ml(e,n,t=ae){const{immediate:r,deep:i,flush:o,once:s}=t,l=ye({},t),a=n&&r||!n&&o!=="post";let u;if(Nt){if(o==="sync"){const g=gu();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=Ye,g.resume=Ye,g.pause=Ye,g}}const c=Ae;l.call=(g,v,k)=>dn(g,c,v,k);let f=!1;o==="post"?l.scheduler=g=>{Le(g,c&&c.suspense)}:o!=="sync"&&(f=!0,l.scheduler=(g,v)=>{v?g():Xi(g)}),l.augmentJob=g=>{n&&(g.flags|=4),f&&(g.flags|=2,c&&(g.id=c.uid,g.i=c))};const d=Oc(e,n,l);return Nt&&(u?u.push(d):a&&d()),d}function mu(e,n,t){const r=this.proxy,i=me(e)?e.includes(".")?Fl(r,e):()=>r[e]:e.bind(r,r);let o;V(n)?o=n:(o=n.handler,t=n);const s=Kt(this),l=Ml(i,o.bind(r),t);return s(),l}function Fl(e,n){const t=n.split(".");return()=>{let r=e;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const _u=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${qe(n)}Modifiers`]||e[`${Gn(n)}Modifiers`];function yu(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||ae;let i=t;const o=n.startsWith("update:"),s=o&&_u(r,n.slice(7));s&&(s.trim&&(i=t.map(c=>me(c)?c.trim():c)),s.number&&(i=t.map(Qa)));let l,a=r[l=li(n)]||r[l=li(qe(n))];!a&&o&&(a=r[l=li(Gn(n))]),a&&dn(a,e,6,i);const u=r[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,dn(u,e,6,i)}}function Dl(e,n,t=!1){const r=n.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let s={},l=!1;if(!V(e)){const a=u=>{const c=Dl(u,n,!0);c&&(l=!0,ye(s,c))};!t&&n.mixins.length&&n.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(fe(e)&&r.set(e,null),null):(z(o)?o.forEach(a=>s[a]=null):ye(s,o),fe(e)&&r.set(e,s),s)}function Xr(e,n){return!e||!Vr(n)?!1:(n=n.slice(2).replace(/Once$/,""),X(e,n[0].toLowerCase()+n.slice(1))||X(e,Gn(n))||X(e,n))}function gi(e){const{type:n,vnode:t,proxy:r,withProxy:i,propsOptions:[o],slots:s,attrs:l,emit:a,render:u,renderCache:c,props:f,data:d,setupState:g,ctx:v,inheritAttrs:k}=e,T=dr(e);let j,M;try{if(t.shapeFlag&4){const $=i||r,G=$;j=an(u.call(G,$,c,f,g,d,v)),M=l}else{const $=n;j=an($.length>1?$(f,{attrs:l,slots:s,emit:a}):$(f,null)),M=n.props?l:bu(l)}}catch($){Ot.length=0,Qr($,e,1),j=oe(qn)}let N=j;if(M&&k!==!1){const $=Object.keys(M),{shapeFlag:G}=N;$.length&&G&7&&(o&&$.some(Ui)&&(M=vu(M,o)),N=ht(N,M,!1,!0))}return t.dirs&&(N=ht(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(t.dirs):t.dirs),t.transition&&eo(N,t.transition),j=N,dr(T),j}const bu=e=>{let n;for(const t in e)(t==="class"||t==="style"||Vr(t))&&((n||(n={}))[t]=e[t]);return n},vu=(e,n)=>{const t={};for(const r in e)(!Ui(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function xu(e,n,t){const{props:r,children:i,component:o}=e,{props:s,children:l,patchFlag:a}=n,u=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return r?Mo(r,s,u):!!s;if(a&8){const c=n.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(s[d]!==r[d]&&!Xr(u,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?Mo(r,s,u):!0:!!s;return!1}function Mo(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(n[o]!==e[o]&&!Xr(t,o))return!0}return!1}function wu({vnode:e,parent:n},t){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=n.vnode).el=t,n=n.parent;else break}}const Ll=e=>e.__isSuspense;function ku(e,n){n&&n.pendingBranch?z(e)?n.effects.push(...e):n.effects.push(e):Mc(e)}const Re=Symbol.for("v-fgt"),ei=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),sr=Symbol.for("v-stc"),Ot=[];let Be=null;function te(e=!1){Ot.push(Be=e?null:[])}function Su(){Ot.pop(),Be=Ot[Ot.length-1]||null}let jt=1;function Fo(e,n=!1){jt+=e,e<0&&Be&&n&&(Be.hasOnce=!0)}function jl(e){return e.dynamicChildren=jt>0?Be||st:null,Su(),jt>0&&Be&&Be.push(e),e}function ie(e,n,t,r,i,o){return jl(S(e,n,t,r,i,o,!0))}function Au(e,n,t,r,i){return jl(oe(e,n,t,r,i,!0))}function mr(e){return e?e.__v_isVNode===!0:!1}function kt(e,n){return e.type===n.type&&e.key===n.key}const Nl=({key:e})=>e??null,lr=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||Te(e)||V(e)?{i:Ge,r:e,k:n,f:!!t}:e:null);function S(e,n=null,t=null,r=0,i=null,o=e===Re?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Nl(n),ref:n&&lr(n),scopeId:hl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ge};return l?(ro(a,t),o&128&&e.normalize(a)):t&&(a.shapeFlag|=me(t)?8:16),jt>0&&!s&&Be&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Be.push(a),a}const oe=Tu;function Tu(e,n=null,t=null,r=0,i=null,o=!1){if((!e||e===Gc)&&(e=qn),mr(e)){const l=ht(e,n,!0);return t&&ro(l,t),jt>0&&!o&&Be&&(l.shapeFlag&6?Be[Be.indexOf(e)]=l:Be.push(l)),l.patchFlag=-2,l}if(ju(e)&&(e=e.__vccOpts),n){n=Eu(n);let{class:l,style:a}=n;l&&!me(l)&&(n.class=qi(l)),fe(a)&&(Zi(a)&&!z(a)&&(a=ye({},a)),n.style=Vi(a))}const s=me(e)?1:Ll(e)?128:Dc(e)?64:fe(e)?4:V(e)?2:0;return S(e,n,t,r,i,s,o,!0)}function Eu(e){return e?Zi(e)||Al(e)?ye({},e):e:null}function ht(e,n,t=!1,r=!1){const{props:i,ref:o,patchFlag:s,children:l,transition:a}=e,u=n?Pu(i||{},n):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Nl(u),ref:n&&n.ref?t&&o?z(o)?o.concat(lr(n)):[o,lr(n)]:lr(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Re?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ht(e.ssContent),ssFallback:e.ssFallback&&ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&eo(c,a.clone(c)),c}function Ue(e=" ",n=0){return oe(ei,null,e,n)}function Cu(e,n){const t=oe(sr,null,e);return t.staticCount=n,t}function Ze(e="",n=!1){return n?(te(),Au(qn,null,e)):oe(qn,null,e)}function an(e){return e==null||typeof e=="boolean"?oe(qn):z(e)?oe(Re,null,e.slice()):mr(e)?Cn(e):oe(ei,null,String(e))}function Cn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ht(e)}function ro(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(z(n))t=16;else if(typeof n=="object")if(r&65){const i=n.default;i&&(i._c&&(i._d=!1),ro(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!Al(n)?n._ctx=Ge:i===3&&Ge&&(Ge.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else V(n)?(n={default:n,_ctx:Ge},t=32):(n=String(n),r&64?(t=16,n=[Ue(n)]):t=8);e.children=n,e.shapeFlag|=t}function Pu(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const i in r)if(i==="class")n.class!==r.class&&(n.class=qi([n.class,r.class]));else if(i==="style")n.style=Vi([n.style,r.style]);else if(Vr(i)){const o=n[i],s=r[i];s&&o!==s&&!(z(o)&&o.includes(s))&&(n[i]=o?[].concat(o,s):s)}else i!==""&&(n[i]=r[i])}return n}function sn(e,n,t,r=null){dn(e,n,7,[t,r])}const Ru=wl();let Ou=0;function Iu(e,n,t){const r=e.type,i=(n?n.appContext:e.appContext)||Ru,o={uid:Ou++,vnode:e,type:r,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ic(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:El(r,i),emitsOptions:Dl(r,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=yu.bind(null,o),e.ce&&e.ce(o),o}let Ae=null,_r,Oi;{const e=Gr(),n=(t,r)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};_r=n("__VUE_INSTANCE_SETTERS__",t=>Ae=t),Oi=n("__VUE_SSR_SETTERS__",t=>Nt=t)}const Kt=e=>{const n=Ae;return _r(e),e.scope.on(),()=>{e.scope.off(),_r(n)}},Do=()=>{Ae&&Ae.scope.off(),_r(null)};function Hl(e){return e.vnode.shapeFlag&4}let Nt=!1;function $u(e,n=!1,t=!1){n&&Oi(n);const{props:r,children:i}=e.vnode,o=Hl(e);iu(e,r,o,n),au(e,i,t);const s=o?Mu(e,n):void 0;return n&&Oi(!1),s}function Mu(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Jc);const{setup:r}=t;if(r){Fn();const i=e.setupContext=r.length>1?Du(e):null,o=Kt(e),s=qt(r,e,0,[e.props,i]),l=js(s);if(Dn(),o(),(l||e.sp)&&!Pt(e)&&ml(e),l){if(s.then(Do,Do),n)return s.then(a=>{Lo(e,a,n)}).catch(a=>{Qr(a,e,0)});e.asyncDep=s}else Lo(e,s,n)}else Ul(e,n)}function Lo(e,n,t){V(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:fe(n)&&(e.setupState=al(n)),Ul(e,t)}let jo;function Ul(e,n,t){const r=e.type;if(!e.render){if(!n&&jo&&!r.render){const i=r.template||no(e).template;if(i){const{isCustomElement:o,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,u=ye(ye({isCustomElement:o,delimiters:l},s),a);r.render=jo(i,u)}}e.render=r.render||Ye}{const i=Kt(e);Fn();try{Qc(e)}finally{Dn(),i()}}}const Fu={get(e,n){return ke(e,"get",""),e[n]}};function Du(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Fu),slots:e.slots,emit:e.emit,expose:n}}function io(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(al(Sc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Rt)return Rt[t](e)},has(n,t){return t in n||t in Rt}})):e.proxy}function Lu(e,n=!0){return V(e)?e.displayName||e.name:e.name||n&&e.__name}function ju(e){return V(e)&&"__vccOpts"in e}const xe=(e,n)=>Pc(e,n,Nt);function Bl(e,n,t){const r=arguments.length;return r===2?fe(n)&&!z(n)?mr(n)?oe(e,null,[n]):oe(e,n):oe(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&mr(t)&&(t=[t]),oe(e,n,t))}const Nu="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ii;const No=typeof window<"u"&&window.trustedTypes;if(No)try{Ii=No.createPolicy("vue",{createHTML:e=>e})}catch{}const zl=Ii?e=>Ii.createHTML(e):e=>e,Hu="http://www.w3.org/2000/svg",Uu="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,Ho=bn&&bn.createElement("template"),Bu={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const i=n==="svg"?bn.createElementNS(Hu,e):n==="mathml"?bn.createElementNS(Uu,e):t?bn.createElement(e,{is:t}):bn.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>bn.createTextNode(e),createComment:e=>bn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,i,o){const s=t?t.previousSibling:n.lastChild;if(i&&(i===o||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{Ho.innerHTML=zl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Ho.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}n.insertBefore(l,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},zu=Symbol("_vtc");function Vu(e,n,t){const r=e[zu];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Uo=Symbol("_vod"),qu=Symbol("_vsh"),Ku=Symbol(""),Wu=/(^|;)\s*display\s*:/;function Gu(e,n,t){const r=e.style,i=me(t);let o=!1;if(t&&!i){if(n)if(me(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();t[l]==null&&ar(r,l,"")}else for(const s in n)t[s]==null&&ar(r,s,"");for(const s in t)s==="display"&&(o=!0),ar(r,s,t[s])}else if(i){if(n!==t){const s=r[Ku];s&&(t+=";"+s),r.cssText=t,o=Wu.test(t)}}else n&&e.removeAttribute("style");Uo in e&&(e[Uo]=o?r.display:"",e[qu]&&(r.display="none"))}const Bo=/\s*!important$/;function ar(e,n,t){if(z(t))t.forEach(r=>ar(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=Yu(e,n);Bo.test(t)?e.setProperty(Gn(r),t.replace(Bo,""),"important"):e[r]=t}}const zo=["Webkit","Moz","ms"],mi={};function Yu(e,n){const t=mi[n];if(t)return t;let r=qe(n);if(r!=="filter"&&r in e)return mi[n]=r;r=Wr(r);for(let i=0;i<zo.length;i++){const o=zo[i]+r;if(o in e)return mi[n]=o}return n}const Vo="http://www.w3.org/1999/xlink";function qo(e,n,t,r,i,o=rc(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Vo,n.slice(6,n.length)):e.setAttributeNS(Vo,n,t):t==null||o&&!Bs(t)?e.removeAttribute(n):e.setAttribute(n,o?"":Mn(t)?String(t):t)}function Ko(e,n,t,r,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?zl(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,a=t==null?e.type==="checkbox"?"on":"":String(t);(l!==a||!("_value"in e))&&(e.value=a),t==null&&e.removeAttribute(n),e._value=t;return}let s=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Bs(t):t==null&&l==="string"?(t="",s=!0):l==="number"&&(t=0,s=!0)}try{e[n]=t}catch{}s&&e.removeAttribute(i||n)}function Ju(e,n,t,r){e.addEventListener(n,t,r)}function Qu(e,n,t,r){e.removeEventListener(n,t,r)}const Wo=Symbol("_vei");function Zu(e,n,t,r,i=null){const o=e[Wo]||(e[Wo]={}),s=o[n];if(r&&s)s.value=r;else{const[l,a]=Xu(n);if(r){const u=o[n]=tf(r,i);Ju(e,l,u,a)}else s&&(Qu(e,l,s,a),o[n]=void 0)}}const Go=/(?:Once|Passive|Capture)$/;function Xu(e){let n;if(Go.test(e)){n={};let r;for(;r=e.match(Go);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gn(e.slice(2)),n]}let _i=0;const ef=Promise.resolve(),nf=()=>_i||(ef.then(()=>_i=0),_i=Date.now());function tf(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;dn(rf(r,t.value),n,5,[r])};return t.value=e,t.attached=nf(),t}function rf(e,n){if(z(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>i=>!i._stopped&&r&&r(i))}else return n}const Yo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,of=(e,n,t,r,i,o)=>{const s=i==="svg";n==="class"?Vu(e,r,s):n==="style"?Gu(e,t,r):Vr(n)?Ui(n)||Zu(e,n,t,r,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):sf(e,n,r,s))?(Ko(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&qo(e,n,r,s,o,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!me(r))?Ko(e,qe(n),r,o,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),qo(e,n,r,s))};function sf(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&Yo(n)&&V(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Yo(n)&&me(t)?!1:n in e}const lf=ye({patchProp:of},Bu);let Jo;function af(){return Jo||(Jo=uu(lf))}const cf=(...e)=>{const n=af().createApp(...e),{mount:t}=n;return n.mount=r=>{const i=ff(r);if(!i)return;const o=n._component;!V(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=t(i,!1,uf(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},n};function uf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ff(e){return me(e)?document.querySelector(e):e}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const tt=typeof document<"u";function Vl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function pf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Vl(e.default)}const Q=Object.assign;function yi(e,n){const t={};for(const r in n){const i=n[r];t[r]=Xe(i)?i.map(e):e(i)}return t}const It=()=>{},Xe=Array.isArray,ql=/#/g,df=/&/g,hf=/\//g,gf=/=/g,mf=/\?/g,Kl=/\+/g,_f=/%5B/g,yf=/%5D/g,Wl=/%5E/g,bf=/%60/g,Gl=/%7B/g,vf=/%7C/g,Yl=/%7D/g,xf=/%20/g;function oo(e){return encodeURI(""+e).replace(vf,"|").replace(_f,"[").replace(yf,"]")}function wf(e){return oo(e).replace(Gl,"{").replace(Yl,"}").replace(Wl,"^")}function $i(e){return oo(e).replace(Kl,"%2B").replace(xf,"+").replace(ql,"%23").replace(df,"%26").replace(bf,"`").replace(Gl,"{").replace(Yl,"}").replace(Wl,"^")}function kf(e){return $i(e).replace(gf,"%3D")}function Sf(e){return oo(e).replace(ql,"%23").replace(mf,"%3F")}function Af(e){return e==null?"":Sf(e).replace(hf,"%2F")}function Ht(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Tf=/\/$/,Ef=e=>e.replace(Tf,"");function bi(e,n,t="/"){let r,i={},o="",s="";const l=n.indexOf("#");let a=n.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=n.slice(0,a),o=n.slice(a+1,l>-1?l:n.length),i=e(o)),l>-1&&(r=r||n.slice(0,l),s=n.slice(l,n.length)),r=Of(r??n,t),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:Ht(s)}}function Cf(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Qo(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Pf(e,n,t){const r=n.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&gt(n.matched[r],t.matched[i])&&Jl(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function gt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Jl(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Rf(e[t],n[t]))return!1;return!0}function Rf(e,n){return Xe(e)?Zo(e,n):Xe(n)?Zo(n,e):e===n}function Zo(e,n){return Xe(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function Of(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=t.length-1,s,l;for(s=0;s<r.length;s++)if(l=r[s],l!==".")if(l==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(s).join("/")}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ut;(function(e){e.pop="pop",e.push="push"})(Ut||(Ut={}));var $t;(function(e){e.back="back",e.forward="forward",e.unknown=""})($t||($t={}));function If(e){if(!e)if(tt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ef(e)}const $f=/^[^#]+#/;function Mf(e,n){return e.replace($f,"#")+n}function Ff(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const ni=()=>({left:window.scrollX,top:window.scrollY});function Df(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;n=Ff(i,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Xo(e,n){return(history.state?history.state.position-n:-1)+e}const Mi=new Map;function Lf(e,n){Mi.set(e,n)}function jf(e){const n=Mi.get(e);return Mi.delete(e),n}let Nf=()=>location.protocol+"//"+location.host;function Ql(e,n){const{pathname:t,search:r,hash:i}=n,o=e.indexOf("#");if(o>-1){let l=i.includes(e.slice(o))?e.slice(o).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),Qo(a,"")}return Qo(t,e)+r+i}function Hf(e,n,t,r){let i=[],o=[],s=null;const l=({state:d})=>{const g=Ql(e,location),v=t.value,k=n.value;let T=0;if(d){if(t.value=g,n.value=d,s&&s===v){s=null;return}T=k?d.position-k.position:0}else r(g);i.forEach(j=>{j(t.value,v,{delta:T,type:Ut.pop,direction:T?T>0?$t.forward:$t.back:$t.unknown})})};function a(){s=t.value}function u(d){i.push(d);const g=()=>{const v=i.indexOf(d);v>-1&&i.splice(v,1)};return o.push(g),g}function c(){const{history:d}=window;d.state&&d.replaceState(Q({},d.state,{scroll:ni()}),"")}function f(){for(const d of o)d();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:a,listen:u,destroy:f}}function es(e,n,t,r=!1,i=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:i?ni():null}}function Uf(e){const{history:n,location:t}=window,r={value:Ql(e,t)},i={value:n.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function o(a,u,c){const f=e.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?e:e.slice(f))+a:Nf()+e+a;try{n[c?"replaceState":"pushState"](u,"",d),i.value=u}catch(g){console.error(g),t[c?"replace":"assign"](d)}}function s(a,u){const c=Q({},n.state,es(i.value.back,a,i.value.forward,!0),u,{position:i.value.position});o(a,c,!0),r.value=a}function l(a,u){const c=Q({},i.value,n.state,{forward:a,scroll:ni()});o(c.current,c,!0);const f=Q({},es(r.value,a,null),{position:c.position+1},u);o(a,f,!1),r.value=a}return{location:r,state:i,push:l,replace:s}}function Bf(e){e=If(e);const n=Uf(e),t=Hf(e,n.state,n.location,n.replace);function r(o,s=!0){s||t.pauseListeners(),history.go(o)}const i=Q({location:"",base:e,go:r,createHref:Mf.bind(null,e)},n,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function zf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Bf(e)}function Vf(e){return typeof e=="string"||e&&typeof e=="object"}function Zl(e){return typeof e=="string"||typeof e=="symbol"}const Xl=Symbol("");var ns;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ns||(ns={}));function mt(e,n){return Q(new Error,{type:e,[Xl]:!0},n)}function yn(e,n){return e instanceof Error&&Xl in e&&(n==null||!!(e.type&n))}const ts="[^/]+?",qf={sensitive:!1,strict:!1,start:!0,end:!0},Kf=/[.+*?^${}()[\]/\\]/g;function Wf(e,n){const t=Q({},qf,n),r=[];let i=t.start?"^":"";const o=[];for(const u of e){const c=u.length?[]:[90];t.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const d=u[f];let g=40+(t.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(Kf,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:k,optional:T,regexp:j}=d;o.push({name:v,repeatable:k,optional:T});const M=j||ts;if(M!==ts){g+=10;try{new RegExp(`(${M})`)}catch($){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+$.message)}}let N=k?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(N=T&&u.length<2?`(?:/${N})`:"/"+N),T&&(N+="?"),i+=N,g+=20,T&&(g+=-8),k&&(g+=-20),M===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,t.sensitive?"":"i");function l(u){const c=u.match(s),f={};if(!c)return null;for(let d=1;d<c.length;d++){const g=c[d]||"",v=o[d-1];f[v.name]=g&&v.repeatable?g.split("/"):g}return f}function a(u){let c="",f=!1;for(const d of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const g of d)if(g.type===0)c+=g.value;else if(g.type===1){const{value:v,repeatable:k,optional:T}=g,j=v in u?u[v]:"";if(Xe(j)&&!k)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Xe(j)?j.join("/"):j;if(!M)if(T)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);c+=M}}return c||"/"}return{re:s,score:r,keys:o,parse:l,stringify:a}}function Gf(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function ea(e,n){let t=0;const r=e.score,i=n.score;for(;t<r.length&&t<i.length;){const o=Gf(r[t],i[t]);if(o)return o;t++}if(Math.abs(i.length-r.length)===1){if(rs(r))return 1;if(rs(i))return-1}return i.length-r.length}function rs(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Yf={type:0,value:""},Jf=/[a-zA-Z0-9_]/;function Qf(e){if(!e)return[[]];if(e==="/")return[[Yf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(g){throw new Error(`ERR (${t})/"${u}": ${g}`)}let t=0,r=t;const i=[];let o;function s(){o&&i.push(o),o=[]}let l=0,a,u="",c="";function f(){u&&(t===0?o.push({type:0,value:u}):t===1||t===2||t===3?(o.length>1&&(a==="*"||a==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):n("Invalid state to consume buffer"),u="")}function d(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:a==="/"?(u&&f(),s()):a===":"?(f(),t=1):d();break;case 4:d(),t=r;break;case 1:a==="("?t=2:Jf.test(a)?d():(f(),t=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:t=3:c+=a;break;case 3:f(),t=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),s(),i}function Zf(e,n,t){const r=Wf(Qf(e.path),t),i=Q(r,{record:e,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function Xf(e,n){const t=[],r=new Map;n=ls({strict:!1,end:!0,sensitive:!1},n);function i(f){return r.get(f)}function o(f,d,g){const v=!g,k=os(f);k.aliasOf=g&&g.record;const T=ls(n,f),j=[k];if("alias"in f){const $=typeof f.alias=="string"?[f.alias]:f.alias;for(const G of $)j.push(os(Q({},k,{components:g?g.record.components:k.components,path:G,aliasOf:g?g.record:k})))}let M,N;for(const $ of j){const{path:G}=$;if(d&&G[0]!=="/"){const ve=d.record.path,pe=ve[ve.length-1]==="/"?"":"/";$.path=d.record.path+(G&&pe+G)}if(M=Zf($,d,T),g?g.alias.push(M):(N=N||M,N!==M&&N.alias.push(M),v&&f.name&&!ss(M)&&s(f.name)),na(M)&&a(M),k.children){const ve=k.children;for(let pe=0;pe<ve.length;pe++)o(ve[pe],M,g&&g.children[pe])}g=g||M}return N?()=>{s(N)}:It}function s(f){if(Zl(f)){const d=r.get(f);d&&(r.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(s),f.alias.forEach(s))}}function l(){return t}function a(f){const d=tp(f,t);t.splice(d,0,f),f.record.name&&!ss(f)&&r.set(f.record.name,f)}function u(f,d){let g,v={},k,T;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw mt(1,{location:f});T=g.record.name,v=Q(is(d.params,g.keys.filter(N=>!N.optional).concat(g.parent?g.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),f.params&&is(f.params,g.keys.map(N=>N.name))),k=g.stringify(v)}else if(f.path!=null)k=f.path,g=t.find(N=>N.re.test(k)),g&&(v=g.parse(k),T=g.record.name);else{if(g=d.name?r.get(d.name):t.find(N=>N.re.test(d.path)),!g)throw mt(1,{location:f,currentLocation:d});T=g.record.name,v=Q({},d.params,f.params),k=g.stringify(v)}const j=[];let M=g;for(;M;)j.unshift(M.record),M=M.parent;return{name:T,path:k,params:v,matched:j,meta:np(j)}}e.forEach(f=>o(f));function c(){t.length=0,r.clear()}return{addRoute:o,resolve:u,removeRoute:s,clearRoutes:c,getRoutes:l,getRecordMatcher:i}}function is(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function os(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ep(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function ep(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function ss(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function np(e){return e.reduce((n,t)=>Q(n,t.meta),{})}function ls(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}function tp(e,n){let t=0,r=n.length;for(;t!==r;){const o=t+r>>1;ea(e,n[o])<0?r=o:t=o+1}const i=rp(e);return i&&(r=n.lastIndexOf(i,r-1)),r}function rp(e){let n=e;for(;n=n.parent;)if(na(n)&&ea(e,n)===0)return n}function na({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ip(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(Kl," "),s=o.indexOf("="),l=Ht(s<0?o:o.slice(0,s)),a=s<0?null:Ht(o.slice(s+1));if(l in n){let u=n[l];Xe(u)||(u=n[l]=[u]),u.push(a)}else n[l]=a}return n}function as(e){let n="";for(let t in e){const r=e[t];if(t=kf(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(Xe(r)?r.map(o=>o&&$i(o)):[r&&$i(r)]).forEach(o=>{o!==void 0&&(n+=(n.length?"&":"")+t,o!=null&&(n+="="+o))})}return n}function op(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=Xe(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return n}const sp=Symbol(""),cs=Symbol(""),so=Symbol(""),lo=Symbol(""),Fi=Symbol("");function St(){let e=[];function n(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function Pn(e,n,t,r,i,o=s=>s()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,a)=>{const u=d=>{d===!1?a(mt(4,{from:t,to:n})):d instanceof Error?a(d):Vf(d)?a(mt(2,{from:n,to:d})):(s&&r.enterCallbacks[i]===s&&typeof d=="function"&&s.push(d),l())},c=o(()=>e.call(r&&r.instances[i],n,t,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(d=>a(d))})}function vi(e,n,t,r,i=o=>o()){const o=[];for(const s of e)for(const l in s.components){let a=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Vl(a)){const c=(a.__vccOpts||a)[n];c&&o.push(Pn(c,t,r,s,l,i))}else{let u=a();o.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const f=pf(c)?c.default:c;s.mods[l]=c,s.components[l]=f;const g=(f.__vccOpts||f)[n];return g&&Pn(g,t,r,s,l,i)()}))}}return o}function us(e){const n=fn(so),t=fn(lo),r=xe(()=>{const a=ct(e.to);return n.resolve(a)}),i=xe(()=>{const{matched:a}=r.value,{length:u}=a,c=a[u-1],f=t.matched;if(!c||!f.length)return-1;const d=f.findIndex(gt.bind(null,c));if(d>-1)return d;const g=fs(a[u-2]);return u>1&&fs(c)===g&&f[f.length-1].path!==g?f.findIndex(gt.bind(null,a[u-2])):d}),o=xe(()=>i.value>-1&&fp(t.params,r.value.params)),s=xe(()=>i.value>-1&&i.value===t.matched.length-1&&Jl(t.params,r.value.params));function l(a={}){if(up(a)){const u=n[ct(e.replace)?"replace":"push"](ct(e.to)).catch(It);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:o,isExactActive:s,navigate:l}}function lp(e){return e.length===1?e[0]:e}const ap=gl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:us,setup(e,{slots:n}){const t=Jr(us(e)),{options:r}=fn(so),i=xe(()=>({[ps(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[ps(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=n.default&&lp(n.default(t));return e.custom?o:Bl("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},o)}}}),cp=ap;function up(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function fp(e,n){for(const t in n){const r=n[t],i=e[t];if(typeof r=="string"){if(r!==i)return!1}else if(!Xe(i)||i.length!==r.length||r.some((o,s)=>o!==i[s]))return!1}return!0}function fs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ps=(e,n,t)=>e??n??t,pp=gl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=fn(Fi),i=xe(()=>e.route||r.value),o=fn(cs,0),s=xe(()=>{let u=ct(o);const{matched:c}=i.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),l=xe(()=>i.value.matched[s.value]);ir(cs,xe(()=>s.value+1)),ir(sp,l),ir(Fi,i);const a=Oe();return or(()=>[a.value,l.value,e.name],([u,c,f],[d,g,v])=>{c&&(c.instances[f]=u,g&&g!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),u&&c&&(!g||!gt(c,g)||!d)&&(c.enterCallbacks[f]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=i.value,c=e.name,f=l.value,d=f&&f.components[c];if(!d)return ds(t.default,{Component:d,route:u});const g=f.props[c],v=g?g===!0?u.params:typeof g=="function"?g(u):g:null,T=Bl(d,Q({},v,n,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(f.instances[c]=null)},ref:a}));return ds(t.default,{Component:T,route:u})||T}}});function ds(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const dp=pp;function hp(e){const n=Xf(e.routes,e),t=e.parseQuery||ip,r=e.stringifyQuery||as,i=e.history,o=St(),s=St(),l=St(),a=Ac(Tn);let u=Tn;tt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=yi.bind(null,y=>""+y),f=yi.bind(null,Af),d=yi.bind(null,Ht);function g(y,I){let P,F;return Zl(y)?(P=n.getRecordMatcher(y),F=I):F=y,n.addRoute(F,P)}function v(y){const I=n.getRecordMatcher(y);I&&n.removeRoute(I)}function k(){return n.getRoutes().map(y=>y.record)}function T(y){return!!n.getRecordMatcher(y)}function j(y,I){if(I=Q({},I||a.value),typeof y=="string"){const h=bi(t,y,I.path),m=n.resolve({path:h.path},I),b=i.createHref(h.fullPath);return Q(h,m,{params:d(m.params),hash:Ht(h.hash),redirectedFrom:void 0,href:b})}let P;if(y.path!=null)P=Q({},y,{path:bi(t,y.path,I.path).path});else{const h=Q({},y.params);for(const m in h)h[m]==null&&delete h[m];P=Q({},y,{params:f(h)}),I.params=f(I.params)}const F=n.resolve(P,I),J=y.hash||"";F.params=c(d(F.params));const ue=Cf(r,Q({},y,{hash:wf(J),path:F.path})),p=i.createHref(ue);return Q({fullPath:ue,hash:J,query:r===as?op(y.query):y.query||{}},F,{redirectedFrom:void 0,href:p})}function M(y){return typeof y=="string"?bi(t,y,a.value.path):Q({},y)}function N(y,I){if(u!==y)return mt(8,{from:I,to:y})}function $(y){return pe(y)}function G(y){return $(Q(M(y),{replace:!0}))}function ve(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:P}=I;let F=typeof P=="function"?P(y):P;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=M(F):{path:F},F.params={}),Q({query:y.query,hash:y.hash,params:F.path!=null?{}:y.params},F)}}function pe(y,I){const P=u=j(y),F=a.value,J=y.state,ue=y.force,p=y.replace===!0,h=ve(P);if(h)return pe(Q(M(h),{state:typeof h=="object"?Q({},J,h.state):J,force:ue,replace:p}),I||P);const m=P;m.redirectedFrom=I;let b;return!ue&&Pf(r,F,P)&&(b=mt(16,{to:m,from:F}),rn(F,F,!0,!1)),(b?Promise.resolve(b):nn(m,F)).catch(_=>yn(_)?yn(_,2)?_:An(_):Y(_,m,F)).then(_=>{if(_){if(yn(_,2))return pe(Q({replace:p},M(_.to),{state:typeof _.to=="object"?Q({},J,_.to.state):J,force:ue}),I||m)}else _=Ln(m,F,!0,p,J);return Sn(m,F,_),_})}function en(y,I){const P=N(y,I);return P?Promise.reject(P):Promise.resolve()}function kn(y){const I=Zn.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(y):y()}function nn(y,I){let P;const[F,J,ue]=gp(y,I);P=vi(F.reverse(),"beforeRouteLeave",y,I);for(const h of F)h.leaveGuards.forEach(m=>{P.push(Pn(m,y,I))});const p=en.bind(null,y,I);return P.push(p),ze(P).then(()=>{P=[];for(const h of o.list())P.push(Pn(h,y,I));return P.push(p),ze(P)}).then(()=>{P=vi(J,"beforeRouteUpdate",y,I);for(const h of J)h.updateGuards.forEach(m=>{P.push(Pn(m,y,I))});return P.push(p),ze(P)}).then(()=>{P=[];for(const h of ue)if(h.beforeEnter)if(Xe(h.beforeEnter))for(const m of h.beforeEnter)P.push(Pn(m,y,I));else P.push(Pn(h.beforeEnter,y,I));return P.push(p),ze(P)}).then(()=>(y.matched.forEach(h=>h.enterCallbacks={}),P=vi(ue,"beforeRouteEnter",y,I,kn),P.push(p),ze(P))).then(()=>{P=[];for(const h of s.list())P.push(Pn(h,y,I));return P.push(p),ze(P)}).catch(h=>yn(h,8)?h:Promise.reject(h))}function Sn(y,I,P){l.list().forEach(F=>kn(()=>F(y,I,P)))}function Ln(y,I,P,F,J){const ue=N(y,I);if(ue)return ue;const p=I===Tn,h=tt?history.state:{};P&&(F||p?i.replace(y.fullPath,Q({scroll:p&&h&&h.scroll},J)):i.push(y.fullPath,J)),a.value=y,rn(y,I,P,p),An()}let tn;function vt(){tn||(tn=i.listen((y,I,P)=>{if(!Zt.listening)return;const F=j(y),J=ve(F);if(J){pe(Q(J,{replace:!0,force:!0}),F).catch(It);return}u=F;const ue=a.value;tt&&Lf(Xo(ue.fullPath,P.delta),ni()),nn(F,ue).catch(p=>yn(p,12)?p:yn(p,2)?(pe(Q(M(p.to),{force:!0}),F).then(h=>{yn(h,20)&&!P.delta&&P.type===Ut.pop&&i.go(-1,!1)}).catch(It),Promise.reject()):(P.delta&&i.go(-P.delta,!1),Y(p,F,ue))).then(p=>{p=p||Ln(F,ue,!1),p&&(P.delta&&!yn(p,8)?i.go(-P.delta,!1):P.type===Ut.pop&&yn(p,20)&&i.go(-1,!1)),Sn(F,ue,p)}).catch(It)}))}let Jn=St(),_e=St(),re;function Y(y,I,P){An(y);const F=_e.list();return F.length?F.forEach(J=>J(y,I,P)):console.error(y),Promise.reject(y)}function mn(){return re&&a.value!==Tn?Promise.resolve():new Promise((y,I)=>{Jn.add([y,I])})}function An(y){return re||(re=!y,vt(),Jn.list().forEach(([I,P])=>y?P(y):I()),Jn.reset()),y}function rn(y,I,P,F){const{scrollBehavior:J}=e;if(!tt||!J)return Promise.resolve();const ue=!P&&jf(Xo(y.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return ul().then(()=>J(y,I,ue)).then(p=>p&&Df(p)).catch(p=>Y(p,y,I))}const Ie=y=>i.go(y);let Qn;const Zn=new Set,Zt={currentRoute:a,listening:!0,addRoute:g,removeRoute:v,clearRoutes:n.clearRoutes,hasRoute:T,getRoutes:k,resolve:j,options:e,push:$,replace:G,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:o.add,beforeResolve:s.add,afterEach:l.add,onError:_e.add,isReady:mn,install(y){const I=this;y.component("RouterLink",cp),y.component("RouterView",dp),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ct(a)}),tt&&!Qn&&a.value===Tn&&(Qn=!0,$(i.location).catch(J=>{}));const P={};for(const J in Tn)Object.defineProperty(P,J,{get:()=>a.value[J],enumerable:!0});y.provide(so,I),y.provide(lo,ol(P)),y.provide(Fi,a);const F=y.unmount;Zn.add(y),y.unmount=function(){Zn.delete(y),Zn.size<1&&(u=Tn,tn&&tn(),tn=null,a.value=Tn,Qn=!1,re=!1),F()}}};function ze(y){return y.reduce((I,P)=>I.then(()=>kn(P)),Promise.resolve())}return Zt}function gp(e,n){const t=[],r=[],i=[],o=Math.max(n.matched.length,e.matched.length);for(let s=0;s<o;s++){const l=n.matched[s];l&&(e.matched.find(u=>gt(u,l))?r.push(l):t.push(l));const a=e.matched[s];a&&(n.matched.find(u=>gt(u,a))||i.push(a))}return[t,r,i]}function ao(e){return fn(lo)}const mp="/images/icon.jpg";const gn=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t},_p={},yp={class:"app"},bp={class:"header"},vp={class:"header-content"},xp={class:"header-left"},wp={class:"nav-links"},kp={class:"main-content"},Sp={class:"footer"},Ap={class:"footer-content"},Tp={class:"footer-links"};function Ep(e,n){const t=dt("router-link"),r=dt("router-view");return te(),ie("div",yp,[S("header",bp,[S("div",vp,[S("div",xp,[n[4]||(n[4]=S("img",{src:mp,alt:"Logo",class:"site-logo"},null,-1)),S("nav",wp,[oe(t,{to:"/",class:"nav-link"},{default:He(()=>n[0]||(n[0]=[Ue("首页")])),_:1}),oe(t,{to:"/blog",class:"nav-link"},{default:He(()=>n[1]||(n[1]=[Ue("博客")])),_:1}),oe(t,{to:"/notes",class:"nav-link"},{default:He(()=>n[2]||(n[2]=[Ue("偶记")])),_:1}),oe(t,{to:"/works",class:"nav-link"},{default:He(()=>n[3]||(n[3]=[Ue("作品")])),_:1})])])])]),S("main",kp,[oe(r)]),S("footer",Sp,[S("div",Ap,[S("div",Tp,[oe(t,{to:"/about",class:"footer-link"},{default:He(()=>n[5]||(n[5]=[Ue("关于")])),_:1}),oe(t,{to:"/contact",class:"footer-link"},{default:He(()=>n[6]||(n[6]=[Ue("联系")])),_:1}),n[7]||(n[7]=S("a",{href:"https://github.com/jasper/blog-theme",target:"_blank",rel:"noopener",class:"footer-link"},"主题",-1))]),n[8]||(n[8]=Cu('<div class="social-links"><a href="https://twitter.com" target="_blank" rel="noopener" class="footer-link">X/Twitter</a><a href="https://youtube.com" target="_blank" rel="noopener" class="footer-link">Youtube</a><a href="https://space.bilibili.com/1604548287" target="_blank" rel="noopener" class="footer-link">B站</a></div><p class="copyright">© 2025 Jasper. 保留所有权利</p>',2))])])])}const Cp=gn(_p,[["render",Ep]]),yr=`---
title: CSS Grid布局完全指南
date: 2024-05-12
description: 从基础到高级，全面掌握CSS Grid布局系统，打造复杂而优雅的网页布局
category: blog
---

## 为什么要学习CSS Grid？

在响应式设计成为标准的今天，掌握强大的布局工具变得尤为重要。CSS Grid是目前为止最强大的网页布局系统，它可以：

- 同时控制行与列
- 轻松创建不规则布局
- 精确控制元素位置
- 简化媒体查询
- 减少HTML标记

本文将带你从入门到精通，全面掌握CSS Grid布局系统。

## CSS Grid基础概念

### 网格容器与网格项

创建Grid布局的第一步是定义网格容器：

\`\`\`css
.container {
  display: grid;
  /* 或者 */
  display: inline-grid;
}
\`\`\`

容器内的直接子元素自动成为网格项(Grid Items)。

### 定义网格结构

使用\`grid-template-columns\`和\`grid-template-rows\`定义网格结构：

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 100px 200px;
}
\`\`\`

这将创建一个3列2行的网格，第一列宽200px，后两列平分剩余空间。

### fr单位与repeat函数

\`fr\`是fraction(分数)的缩写，表示剩余空间的一部分：

\`\`\`css
/* 三等分列 */
grid-template-columns: 1fr 1fr 1fr;

/* 使用repeat简化书写 */
grid-template-columns: repeat(3, 1fr);

/* 更复杂的模式 */
grid-template-columns: repeat(2, 100px 1fr);
\`\`\`

## 网格间距与对齐

### 设置间距

使用\`gap\`属性（或\`column-gap\`和\`row-gap\`）设置网格线的宽度：

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* 行列间距都是20px */
  
  /* 或分别设置 */
  column-gap: 20px;
  row-gap: 30px;
}
\`\`\`

### 内容对齐

Grid提供了强大的对齐能力：

\`\`\`css
.container {
  /* 水平对齐 */
  justify-items: start | end | center | stretch;
  
  /* 垂直对齐 */
  align-items: start | end | center | stretch;
  
  /* 简写 */
  place-items: <align-items> / <justify-items>;
}
\`\`\`

## 网格线与区域命名

### 使用网格线定位

每个网格都有编号的网格线，从1开始：

\`\`\`css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  
  /* 简写形式 */
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  
  /* 使用span关键字 */
  grid-column: 1 / span 2;
}
\`\`\`

### 网格区域命名

使用\`grid-template-areas\`可以创建命名区域：

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
\`\`\`

## 高级技巧

### 自动放置算法

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
\`\`\`

这会创建尽可能多的列，每列最小200px，最大1fr。

### 子网格(Subgrid)

最新的CSS Grid规范引入了子网格概念：

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}

.item {
  grid-column: span 3;
  display: grid;
  grid-template-columns: subgrid;
}
\`\`\`

## 实战案例：杂志布局

以下是一个杂志风格布局的示例：

\`\`\`css
.magazine {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1rem;
}

.headline {
  grid-column: 1 / -1;
  grid-row: 1;
}

.main-story {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}

.sidebar {
  grid-column: 3 / 5;
  grid-row: 2;
}

.featured {
  grid-column: 3 / 5;
  grid-row: 3;
}
\`\`\`

## 浏览器兼容性与Fallback

现代浏览器对CSS Grid的支持已经相当好，但对于旧浏览器，我们可以提供后备方案：

\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap;
}

@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

掌握CSS Grid让你能够以前所未有的方式控制网页布局，结合Flexbox可以解决几乎所有布局需求。无论是简单的网站还是复杂的应用界面，Grid都能以更少的代码实现更强大的布局。 `,Pp=Object.freeze(Object.defineProperty({__proto__:null,default:yr},Symbol.toStringTag,{value:"Module"})),br=`---
title: 前端性能优化实战指南
date: 2024-03-10
description: 详解如何提升你的网站性能，从加载速度到运行时优化的全方位攻略
category: blog
---

## 性能为何如此重要

在用户体验至上的今天，网站性能已经成为决定用户留存的关键因素：

- 53%的用户会因为页面加载时间超过3秒而放弃访问
- 每延迟1秒加载时间，转化率会下降7%
- Google搜索排名会考虑页面加载速度

本文将分享一系列前端性能优化的实战技巧，从资源加载到运行时性能，全方位提升你的网站体验。

## 资源加载优化

### 1. 图片优化

图片通常占据页面资源的大部分，优化图片是提升性能的首要任务：

\`\`\`html
<!-- 使用现代图片格式 -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jp2" type="image/jp2">
  <img src="image.jpg" alt="描述">
</picture>

<!-- 使用响应式图片 -->
<img 
  src="small.jpg" 
  srcset="medium.jpg 1000w, large.jpg 2000w" 
  sizes="(max-width: 600px) 100vw, 50vw" 
  alt="描述"
  loading="lazy"
>
\`\`\`

### 2. 资源压缩与合并

减小资源体积是提升加载速度的有效方法：

- 使用Webpack、Rollup等工具压缩JavaScript和CSS
- 启用Gzip或Brotli压缩传输
- 合理合并小文件减少HTTP请求

### 3. 按需加载

不是所有资源都需要在首屏加载：

\`\`\`javascript
// 路由级别的代码分割
const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')

// 组件级别的懒加载
Vue.component('heavy-component', () => import('./components/HeavyComponent.vue'))

// 条件加载
if (condition) {
  import('./moduleA').then(module => {
    // 使用moduleA
  })
}
\`\`\`

## 运行时性能优化

### 1. 避免长任务阻塞主线程

JavaScript运行在单线程环境，长任务会导致界面卡顿：

\`\`\`javascript
// 不好的例子
function processLargeData(data) {
  for (let i = 0; i < data.length; i++) {
    // 处理大量数据
  }
}

// 更好的例子
function processLargeData(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      // 使用Web Worker或切片处理
      const worker = new Worker('worker.js')
      worker.postMessage(data)
      worker.onmessage = e => resolve(e.data)
    }, 0)
  })
}
\`\`\`

### 2. 使用虚拟列表

当需要渲染大量列表项时，使用虚拟列表可以显著提升性能：

\`\`\`vue
<template>
  <RecycleScroller
    class="scroller"
    :items="items"
    :item-size="50"
    key-field="id"
  >
    <template v-slot="{ item }">
      <div class="list-item">{{ item.name }}</div>
    </template>
  </RecycleScroller>
</template>
\`\`\`

### 3. 优化重绘和回流

DOM操作是前端性能的主要瓶颈之一：

\`\`\`javascript
// 不好的例子
for (let i = 0; i < 1000; i++) {
  element.style.left = i + 'px'
}

// 更好的例子
// 1. 使用CSS类一次性修改多个样式
element.classList.add('move-animation')

// 2. 使用requestAnimationFrame
function animate() {
  // 更新动画
  requestAnimationFrame(animate)
}
\`\`\`

## 测量与监控

性能优化是一个持续的过程，需要建立有效的测量和监控机制：

1. 使用Lighthouse进行综合性能评估
2. Performance API收集真实用户数据
3. 设置性能预算并自动化监控

\`\`\`javascript
// 使用Performance API收集关键指标
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // 上报性能数据
    console.log(\`\${entry.name}: \${entry.startTime}ms\`)
  }
})

observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] })
\`\`\`

通过以上优化手段，你可以显著提升网站性能，为用户提供更加流畅的体验。记住，性能优化是一个持续的过程，需要根据实际使用场景不断调整和改进。 `,Rp=Object.freeze(Object.defineProperty({__proto__:null,default:br},Symbol.toStringTag,{value:"Module"})),vr=`---
title: 你好，世界
date: 2024-01-20
description: 这是我的第一篇博客文章
category: blog
---

## Markdown 支持

这个博客系统支持完整的 Markdown 语法：

### 列表

- 项目 1
- 项目 2
- 项目 3

### 代码块

\`\`\`javascript
console.log('Hello, World!');
\`\`\`

### 引用

> 这是一段引用文字

## 结语

希望这个简单的博客系统能够帮助你开始写作之旅！ `,Op=Object.freeze(Object.defineProperty({__proto__:null,default:vr},Symbol.toStringTag,{value:"Module"})),xr=`---
title: JavaScript异步编程精通指南
date: 2024-04-18
description: 从回调到Promise再到async/await，掌握JavaScript中的异步编程技术，编写更高效、更清晰的代码
category: blog
---

## JavaScript中的异步编程为何重要？

在JavaScript的世界里，异步编程不是一个可选项，而是必须掌握的核心技能。为什么异步编程如此重要？

- **JavaScript是单线程的**：浏览器中的JS运行在单一线程上
- **避免阻塞UI**：异步操作可以让用户界面保持响应
- **高效处理I/O操作**：网络请求、文件读写等操作都需要异步处理
- **优化性能**：同时处理多个操作可以提高应用性能

本文将带你从基础到高级，全面掌握JavaScript中的异步编程技术。

## 回调函数：异步编程的基础

回调函数是JavaScript中最基本的异步编程方式，其核心思想是将一个函数作为参数传递给另一个函数，并在特定事件发生时执行。

\`\`\`javascript
// 基本的回调函数示例
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log('数据获取成功:', data);
});
\`\`\`

虽然简单，但回调函数存在几个明显问题：

### 回调地狱（Callback Hell）

\`\`\`javascript
fetchUserData((userData) => {
  fetchUserPosts(userData.id, (posts) => {
    fetchPostComments(posts[0].id, (comments) => {
      fetchCommentAuthor(comments[0].authorId, (author) => {
        // 嵌套层级越来越深
        console.log(author);
      });
    });
  });
});
\`\`\`

这种深度嵌套使代码难以阅读和维护，而且错误处理变得复杂。

## Promise：更优雅的异步处理

Promise是ES6引入的异步编程解决方案，它代表一个异步操作的最终完成（或失败）及其结果值。

\`\`\`javascript
// 基本的Promise用法
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ name: 'John', age: 30 });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
}

fetchData()
  .then(data => console.log('数据获取成功:', data))
  .catch(error => console.error('错误:', error));
\`\`\`

### Promise链式调用

Promise的一大优势是可以链式调用，避免回调地狱：

\`\`\`javascript
fetchUserData()
  .then(userData => fetchUserPosts(userData.id))
  .then(posts => fetchPostComments(posts[0].id))
  .then(comments => fetchCommentAuthor(comments[0].authorId))
  .then(author => console.log(author))
  .catch(error => console.error('Error:', error));
\`\`\`

### Promise组合

Promise还提供了组合多个异步操作的方法：

\`\`\`javascript
// 所有Promise都成功后执行
Promise.all([fetchUsers(), fetchPosts(), fetchComments()])
  .then(([users, posts, comments]) => {
    // 处理所有结果
  })
  .catch(error => console.error('其中一个请求失败:', error));

// 返回最先完成的Promise结果
Promise.race([fetchFastAPI(), fetchSlowAPI()])
  .then(result => console.log('最快的API返回结果:', result));

// 等待所有Promise完成，无论成功失败
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    // results包含所有Promise的状态和结果
  });
\`\`\`

## Async/Await：异步编程的终极形态

ES2017引入的async/await是处理Promise的语法糖，让异步代码看起来更像同步代码：

\`\`\`javascript
async function getUserData() {
  try {
    const userData = await fetchUserData();
    const posts = await fetchUserPosts(userData.id);
    const comments = await fetchPostComments(posts[0].id);
    const author = await fetchCommentAuthor(comments[0].authorId);
    return author;
  } catch (error) {
    console.error('Error:', error);
  }
}

getUserData().then(author => console.log(author));
\`\`\`

### 并行执行异步操作

虽然await会等待Promise完成，但有时我们需要并行执行多个异步操作：

\`\`\`javascript
async function loadData() {
  // 并行执行多个异步操作
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]);
  
  return { users, posts, comments };
}
\`\`\`

## 实践技巧与最佳实践

### 1. 始终处理错误

无论使用哪种异步模式，都要妥善处理错误：

\`\`\`javascript
// Promise方式
fetchData()
  .then(data => processData(data))
  .catch(error => handleError(error))
  .finally(() => cleanup());

// Async/Await方式
async function getData() {
  try {
    const data = await fetchData();
    return processData(data);
  } catch (error) {
    handleError(error);
  } finally {
    cleanup();
  }
}
\`\`\`

### 2. 避免混用不同的异步风格

在一个代码库中保持一致的异步处理风格：

\`\`\`javascript
// 不推荐：混合使用回调和Promise
function processUser(userId, callback) {
  fetchUserData(userId)
    .then(userData => {
      // 处理数据后用回调返回
      callback(null, userData);
    })
    .catch(error => callback(error));
}
\`\`\`

### 3. 利用Promise.resolve/Promise.reject包装值

\`\`\`javascript
function getCachedData(key) {
  const cached = cache.get(key);
  if (cached) {
    // 将同步值包装成Promise
    return Promise.resolve(cached);
  }
  return fetchFromAPI(key);
}
\`\`\`

## 现代异步工具与库

除了JavaScript内置的异步机制，还有一些流行的库和工具：

- **RxJS**：用于复杂异步和事件处理的响应式编程库
- **Axios**：基于Promise的HTTP客户端
- **Async.js**：提供强大的异步工具函数集合

## 结语

异步编程是JavaScript开发中的关键技能，从最初的回调函数到Promise，再到现代的async/await，我们看到了JavaScript异步处理能力的不断进化。

掌握这些技术不仅能让你编写更加清晰、可维护的代码，还能帮助你构建更高性能、更流畅的Web应用。随着JavaScript生态系统的不断发展，保持对异步编程最佳实践的关注，将使你在前端开发领域保持竞争力。 `,Ip=Object.freeze(Object.defineProperty({__proto__:null,default:xr},Symbol.toStringTag,{value:"Module"})),wr=`---
title: React Hooks全面解析
date: 2024-03-25
description: 深入理解React Hooks的设计理念、使用方法和最佳实践，提升你的React组件开发效率
category: blog
---

## React Hooks：组件开发的革命

自React 16.8引入Hooks以来，函数式组件得到了前所未有的增强。Hooks彻底改变了我们编写React组件的方式，让函数组件拥有了状态管理、副作用处理等能力，同时避免了类组件的诸多问题。

本文将深入探讨React Hooks的核心概念、常用API以及最佳实践，帮助你全面掌握这一强大工具。

## 为什么需要Hooks？

在Hooks出现之前，React组件主要分为两类：

1. **函数组件**：简单，但不能拥有状态，也不能使用生命周期方法
2. **类组件**：功能全面，但复杂度高，逻辑复用困难

Hooks的出现主要解决了以下问题：

- **难以复用的状态逻辑**：类组件中，状态逻辑难以抽取和复用
- **复杂组件难以理解**：相关逻辑被生命周期方法分散
- **类组件的困惑**：\`this\`关键字、绑定事件处理器等额外理解成本
- **优化困难**：类组件中实现shouldComponentUpdate需要比较所有props

## 核心Hooks详解

### useState：状态管理

\`useState\`是最基本的Hook，让函数组件能够拥有状态：

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  // 声明一个状态变量count，初始值为0
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </div>
  );
}
\`\`\`

#### 函数式更新

当新状态依赖于之前的状态时，应该使用函数式更新：

\`\`\`jsx
// 不好的方式 - 可能导致竞态条件
setCount(count + 1);

// 推荐的方式
setCount(prevCount => prevCount + 1);
\`\`\`

#### 使用对象状态

\`\`\`jsx
const [user, setUser] = useState({ name: '张三', age: 25 });

// 更新对象的一部分
setUser(prevUser => ({ ...prevUser, age: 26 }));
\`\`\`

### useEffect：处理副作用

\`useEffect\`用于执行带有副作用的操作，如数据获取、订阅、DOM操作等：

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 声明异步函数
    async function fetchUser() {
      setLoading(true);
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    }
    
    // 调用异步函数
    fetchUser();
    
    // 清除函数
    return () => {
      // 取消请求或清理工作
    };
  }, [userId]); // 依赖数组
  
  if (loading) return <div>加载中...</div>;
  if (!user) return <div>未找到用户</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
\`\`\`

#### 依赖数组

\`useEffect\`的第二个参数控制效果的执行时机：

- **空数组**：只在组件挂载和卸载时执行
- **有依赖的数组**：在依赖项变化时执行
- **不提供**：每次渲染后执行

#### 清除函数

\`\`\`jsx
useEffect(() => {
  const subscription = someAPI.subscribe();
  
  // 返回清除函数
  return () => {
    subscription.unsubscribe();
  };
}, [someAPI]);
\`\`\`

### useContext：跨组件共享状态

\`useContext\`简化了Context API的使用：

\`\`\`jsx
import React, { createContext, useContext, useState } from 'react';

// 创建Context
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          切换主题
        </Button>
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  // 使用useContext获取当前主题
  const theme = useContext(ThemeContext);
  
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      当前主题: {theme}
    </div>
  );
}
\`\`\`

### useReducer：复杂状态管理

\`useReducer\`适用于管理包含多个子值的复杂状态逻辑：

\`\`\`jsx
import React, { useReducer } from 'react';

// 定义reducer函数
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error(\`未知的action类型: \${action.type}\`);
  }
}

function Counter() {
  // 使用useReducer管理状态
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>计数: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>增加</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>减少</button>
      <button onClick={() => dispatch({ type: 'reset' })}>重置</button>
    </div>
  );
}
\`\`\`

## 自定义Hooks：逻辑复用的最佳实践

自定义Hooks是Hooks机制提供的最强大的功能之一，它使状态逻辑的复用变得简单：

\`\`\`jsx
// 自定义Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  // 状态初始化逻辑
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  // 状态更新逻辑
  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// 使用自定义Hook
function App() {
  const [name, setName] = useLocalStorage('name', '访客');
  
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}
\`\`\`

### 常用自定义Hooks

一些广泛使用的自定义Hooks示例：

\`\`\`jsx
// useDebounce: 实现防抖功能
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// useFetch: 简化数据获取
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!url) return;
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}
\`\`\`

## Hooks使用规则

Hooks使用有两条基本规则：

1. **只在最顶层使用Hooks**：不要在循环、条件或嵌套函数中使用Hooks
2. **只在React函数组件或自定义Hooks中调用Hooks**：不要在普通JavaScript函数中调用Hooks

\`\`\`jsx
// 错误: 条件内使用Hook
function Form({ isLogin }) {
  if (isLogin) {
    // 违反规则: 在条件语句中使用Hook
    const [name, setName] = useState('');
  }
  // ...
}

// 正确: 将条件放在Hook之后
function Form({ isLogin }) {
  const [name, setName] = useState('');
  
  // 条件使用state的值，而不是条件调用Hook
  if (isLogin) {
    // 这样是可以的
    return <input value={name} onChange={e => setName(e.target.value)} />;
  }
  // ...
}
\`\`\`

## 性能优化Hooks

### React.memo: 组件级优化

\`\`\`jsx
const MemoizedComponent = React.memo(function MyComponent(props) {
  // 只有props变化时才会重新渲染
  return <div>{props.name}</div>;
});
\`\`\`

### useCallback: 记忆化回调函数

\`\`\`jsx
function Parent() {
  const [count, setCount] = useState(0);
  
  // 使用useCallback记忆化回调函数
  const handleClick = useCallback(() => {
    console.log('按钮被点击');
  }, []); // 空依赖数组意味着这个函数只会创建一次
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <ExpensiveChild onClick={handleClick} />
    </div>
  );
}
\`\`\`

### useMemo: 记忆化计算结果

\`\`\`jsx
function FilteredList({ items, filter }) {
  // 使用useMemo记忆化过滤结果
  const filteredItems = useMemo(() => {
    console.log('计算过滤结果');
    return items.filter(item => item.includes(filter));
  }, [items, filter]); // 只有items或filter变化时才重新计算
  
  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
\`\`\`

## 结语

React Hooks从根本上改变了React组件的编写方式，使函数组件的能力得到了极大增强。通过掌握各种内置Hooks和创建自定义Hooks，我们能够编写出更简洁、更可维护、更易于测试的React应用。

随着React的不断发展，Hooks已经成为现代React开发的标准模式。无论你是刚接触React的新手，还是有经验的开发者，深入理解和正确使用Hooks都将大大提升你的开发效率和代码质量。 `,$p=Object.freeze(Object.defineProperty({__proto__:null,default:wr},Symbol.toStringTag,{value:"Module"})),kr=`---
title: 乱写
date: 2024-05-07
description: 乱系的
category: blog
---

## TypeScript：静态类型的力量

TypeScript已经成为前端开发的标配，它不仅为JavaScript增加了类型系统，还带来了更好的开发体验、更早的错误发现和更强大的重构能力。然而，很多开发者仅仅停留在TypeScript的基础用法上，无法充分发挥其强大潜力。

`,Mp=Object.freeze(Object.defineProperty({__proto__:null,default:kr},Symbol.toStringTag,{value:"Module"})),Sr=`---
title: TypeScript高级技巧与最佳实践
date: 2024-05-25
description: 掌握TypeScript的高级类型、工具类型和设计模式，提升代码的类型安全性和开发效率
category: blog
---

## TypeScript：静态类型的力量

TypeScript已经成为前端开发的标配，它不仅为JavaScript增加了类型系统，还带来了更好的开发体验、更早的错误发现和更强大的重构能力。然而，很多开发者仅仅停留在TypeScript的基础用法上，无法充分发挥其强大潜力。

本文将分享一系列TypeScript高级技巧和最佳实践，帮助你更深入地理解和使用TypeScript，编写出更加健壮、可维护的代码。

## 高级类型技巧

### 1. 类型收窄（Type Narrowing）

TypeScript的类型系统是结构化的，它允许我们通过各种方式逐步缩小类型范围：

\`\`\`typescript
// 使用类型谓词(Type Predicates)
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: unknown) {
  if (isString(value)) {
    // 在这个作用域内，value 的类型被收窄为 string
    console.log(value.toUpperCase());
  }
}

// 使用判别联合(Discriminated Unions)
type Circle = {
  kind: 'circle';
  radius: number;
};

type Square = {
  kind: 'square';
  sideLength: number;
};

type Shape = Circle | Square;

function calculateArea(shape: Shape): number {
  // 使用判别属性 kind 收窄类型
  switch (shape.kind) {
    case 'circle':
      // 此时TypeScript知道shape是Circle类型
      return Math.PI * shape.radius ** 2;
    case 'square':
      // 此时TypeScript知道shape是Square类型
      return shape.sideLength ** 2;
  }
}
\`\`\`

### 2. 条件类型（Conditional Types）

条件类型允许我们基于条件表达式选择类型：

\`\`\`typescript
// 基本条件类型
type IsString<T> = T extends string ? true : false;

// 使用示例
type A = IsString<'hello'>; // true
type B = IsString<123>; // false

// 更复杂的条件类型
type NonNullable<T> = T extends null | undefined ? never : T;
type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// 使用示例
type C = NonNullable<string | null>; // string
function add(a: number, b: number): number { return a + b; }
type AddReturn = ExtractReturnType<typeof add>; // number
\`\`\`

### 3. 映射类型（Mapped Types）

映射类型允许你基于现有类型创建新类型：

\`\`\`typescript
// 创建只读版本的接口
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 创建可选版本的接口
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// 创建子集类型
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 实际使用
interface User {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
type UserBasicInfo = Pick<User, 'id' | 'name'>;
\`\`\`

### 4. 模板字面量类型（Template Literal Types）

TypeScript 4.1引入的模板字面量类型让我们可以基于字符串字面量类型创建新类型：

\`\`\`typescript
type EventName = 'click' | 'focus' | 'blur';
type EventHandler = \`on\${Capitalize<EventName>}\`;

// 结果: 'onClick' | 'onFocus' | 'onBlur'

// 实际应用：类型安全的CSS属性
type CSSProperty = 'margin' | 'padding' | 'border';
type CSSDirection = 'Top' | 'Right' | 'Bottom' | 'Left';

type CSSPropertyWithDirection = \`\${CSSProperty}\${CSSDirection}\`;
// 结果: 'marginTop' | 'marginRight' | ... | 'borderLeft'

// 类型安全的查询字符串构建
type QueryParams = {
  sort: 'asc' | 'desc';
  filter: string;
  page: number;
};

type QueryString<T> = {
  [K in keyof T]: \`\${string & K}=\${string & T[K]}\`;
}[keyof T];

// 使用示例
type PossibleQueries = QueryString<QueryParams>;
// 'sort=asc' | 'sort=desc' | 'filter=someValue' | 'page=1' | ...
\`\`\`

## 实用工具类型

TypeScript内置了许多实用的工具类型，了解它们可以大大提高你的开发效率：

### 1. Utility Types

\`\`\`typescript
// 从类型T中排除与类型U重叠的部分
type Exclude<T, U> = T extends U ? never : T;

// 提取T中所有可以赋值给U的类型
type Extract<T, U> = T extends U ? T : never;

// 获取函数类型的参数类型元组
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// 获取构造函数类型的实例类型
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

// 使用示例
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'b'>; // 'a' | 'b'

function greet(name: string, greeting: string): string {
  return \`\${greeting}, \${name}!\`;
}

type GreetParams = Parameters<typeof greet>; // [string, string]
\`\`\`

### 2. 自定义工具类型

除了内置的工具类型，你还可以创建自己的工具类型：

\`\`\`typescript
// 深度Readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// 类型安全的对象选择
type PickByValueType<T, ValueType> = {
  [K in keyof T as T[K] extends ValueType ? K : never]: T[K]
};

// 使用示例
interface User {
  id: number;
  name: string;
  settings: {
    theme: string;
    notifications: boolean;
  };
}

type ReadonlyUser = DeepReadonly<User>;
type StringProperties = PickByValueType<User, string>; // { name: string }
\`\`\`

## 高级模式与技巧

### 1. 类型安全的事件系统

\`\`\`typescript
type EventMap = {
  'user:login': { userId: string; timestamp: number };
  'user:logout': { userId: string };
  'item:added': { itemId: string; quantity: number };
};

// 类型安全的事件发射器
function emit<E extends keyof EventMap>(
  event: E,
  data: EventMap[E]
): void {
  // 实现...
}

// 类型安全的事件订阅
function on<E extends keyof EventMap>(
  event: E,
  callback: (data: EventMap[E]) => void
): void {
  // 实现...
}

// 使用示例
emit('user:login', { userId: '123', timestamp: Date.now() }); // 类型检查通过
emit('user:logout', { userId: '123', timestamp: Date.now() }); // 错误: 'timestamp' 不存在于类型 '{ userId: string; }' 中
\`\`\`

### 2. 类型安全的状态管理

\`\`\`typescript
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

// 定义操作映射
interface CounterActions {
  increment: undefined;
  decrement: undefined;
  incrementBy: number;
}

type CounterActionTypes = ActionMap<CounterActions>[keyof ActionMap<CounterActions>];

// 状态和reducer
interface CounterState {
  count: number;
}

function counterReducer(state: CounterState, action: CounterActionTypes): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'incrementBy':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
\`\`\`

### 3. 类型安全的API请求

\`\`\`typescript
// API路径和参数类型定义
interface ApiRoutes {
  '/users': {
    get: {
      response: User[];
      query: { role?: string };
    };
    post: {
      body: Omit<User, 'id'>;
      response: User;
    };
  };
  '/users/:id': {
    get: {
      params: { id: string };
      response: User;
    };
    put: {
      params: { id: string };
      body: Partial<User>;
      response: User;
    };
    delete: {
      params: { id: string };
      response: { success: boolean };
    };
  };
}

// 类型安全的HTTP客户端
function apiClient<
  Path extends keyof ApiRoutes,
  Method extends keyof ApiRoutes[Path],
  RouteInfo = ApiRoutes[Path][Method]
>(
  path: Path,
  method: Method,
  config: RouteInfo extends { params: infer P } ? { params: P } : {} &
    RouteInfo extends { query: infer Q } ? { query?: Q } : {} &
    RouteInfo extends { body: infer B } ? { body: B } : {}
): Promise<RouteInfo extends { response: infer R } ? R : unknown> {
  // 实现...
  return Promise.resolve({} as any);
}

// 使用示例
apiClient('/users', 'get', { query: { role: 'admin' } })
  .then(users => console.log(users));

apiClient('/users/:id', 'put', {
  params: { id: '123' },
  body: { name: 'New Name' }
}).then(user => console.log(user));
\`\`\`

## TypeScript配置最佳实践

适当的TypeScript配置可以大大提高项目的类型安全性：

\`\`\`json
{
  "compilerOptions": {
    // 启用严格模式
    "strict": true,
    
    // 不允许隐式的any类型
    "noImplicitAny": true,
    
    // 检查null和undefined
    "strictNullChecks": true,
    
    // 更严格的函数类型检查
    "strictFunctionTypes": true,
    
    // 启用更严格的类属性初始化检查
    "strictPropertyInitialization": true,
    
    // 禁止出现未使用的变量
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    
    // 确保switch语句覆盖所有情况
    "noFallthroughCasesInSwitch": true,
    
    // 在 .tsx 文件里支持 JSX
    "jsx": "react",
    
    // 模块解析策略
    "moduleResolution": "node",
    
    // 支持导入JSON文件
    "resolveJsonModule": true,
    
    // 生成声明文件
    "declaration": true,
    
    // 增量编译
    "incremental": true
  }
}
\`\`\`

## 结语

TypeScript的高级特性和技巧可以帮助你编写更安全、更可维护的代码。通过掌握类型收窄、条件类型、映射类型等高级特性，以及使用内置和自定义的工具类型，你可以充分利用TypeScript的类型系统，大幅提升开发效率和代码质量。

随着项目规模的增长，强大的类型系统将为你提供越来越多的价值，特别是在重构和维护阶段。持续学习和实践这些高级技巧，会让你在TypeScript的道路上走得更远。 `,Fp=Object.freeze(Object.defineProperty({__proto__:null,default:Sr},Symbol.toStringTag,{value:"Module"})),Ar=`---
title: Vue组件设计的5个最佳实践
date: 2024-02-15
description: 如何设计更加可复用、可维护的Vue组件，提高团队开发效率
category: blog
---

## 为什么组件设计如此重要？

在Vue项目中，组件是构建用户界面的基本单位。一个设计良好的组件系统可以：

- 提高代码复用率
- 降低维护成本
- 使团队协作更加顺畅
- 加快开发速度

但很多开发者在组件设计上走了弯路，导致项目后期难以维护。本文将分享5个Vue组件设计的最佳实践。

## 1. 遵循单一职责原则

每个组件应该只负责一件事情。如果你发现一个组件做了太多事情，那么是时候将它拆分为更小的组件了。

\`\`\`vue
<!-- 不好的例子 -->
<UserProfile 
  :user="user" 
  :posts="posts" 
  :comments="comments"
  @update-profile="updateProfile"
  @delete-post="deletePost"
/>

<!-- 更好的例子 -->
<UserBasicInfo :user="user" @update="updateProfile" />
<UserPostsList :posts="posts" @delete="deletePost" />
<UserCommentsList :comments="comments" />
\`\`\`

## 2. 提供合理的默认值

组件的props应该尽可能提供默认值，这样即使使用者忘记传递某些属性，组件也能正常工作。

\`\`\`javascript
export default {
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
\`\`\`

## 3. 使用插槽增强灵活性

插槽是Vue组件最强大的特性之一，它可以让组件更加灵活。

\`\`\`vue
<!-- 一个灵活的卡片组件 -->
<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">
        <h3>{{ title }}</h3>
      </slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
\`\`\`

## 4. 组合式API优于选项式API

对于复杂组件，使用组合式API可以更好地组织逻辑代码，提高可读性和可维护性。

\`\`\`javascript
import { ref, computed, watch } from 'vue'

export default {
  setup(props, { emit }) {
    // 状态
    const count = ref(0)
    
    // 计算属性
    const doubleCount = computed(() => count.value * 2)
    
    // 方法
    const increment = () => {
      count.value++
      emit('change', count.value)
    }
    
    // 监听
    watch(count, (newValue) => {
      console.log(\`Count changed to \${newValue}\`)
    })
    
    return {
      count,
      doubleCount,
      increment
    }
  }
}
\`\`\`

## 5. 编写完善的组件文档

好的组件应该有完善的文档，包括组件的用途、props、事件、插槽等信息。

你可以使用JSDoc或专门的组件文档工具（如Storybook）来编写组件文档。

\`\`\`javascript
/**
 * 按钮组件
 * @displayName MyButton
 * @example ./example.md
 */
export default {
  name: 'MyButton',
  
  /**
   * 按钮类型
   * @values 'primary', 'secondary', 'danger'
   */
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'danger'].includes(value)
    }
  }
}
\`\`\`

遵循这些最佳实践，你将能够构建一个更加健壮、可维护的Vue组件库，为你的项目带来长期收益。 `,Dp=Object.freeze(Object.defineProperty({__proto__:null,default:Ar},Symbol.toStringTag,{value:"Module"})),Tr=`---
title: 网页无障碍性设计全指南
date: 2024-06-05
description: 了解如何打造符合WCAG标准的无障碍网站，让所有人都能平等地获取信息和服务
category: blog
---

## 为什么网页无障碍性如此重要？

据世界卫生组织估计，全球有超过10亿人患有某种形式的残障。网页无障碍性（Web Accessibility，简称a11y）的目标是确保所有人，无论其能力如何，都能平等地访问、理解、导航和与网络内容进行交互。

无障碍设计不仅仅是道德责任和法律要求，它还能够：

- 扩大受众范围，增加用户基数
- 提升所有用户的用户体验
- 改善SEO和搜索排名
- 降低法律风险
- 促进创新和更好的设计

本文将带你全面了解网页无障碍性的原则、标准和实践方法，帮助你打造一个真正包容的数字世界。

## WCAG标准：无障碍设计的基础

Web内容无障碍指南（WCAG）是国际公认的网页无障碍标准，它基于四个核心原则：

### 1. 可感知（Perceivable）

信息和用户界面必须以用户可以感知的方式呈现。

#### 为图像提供替代文本

\`\`\`html
<!-- 不好的示例 -->
<img src="chart.png">

<!-- 好的示例 -->
<img src="chart.png" alt="2023年第一季度销售数据图表，显示了各地区的销售增长趋势">
\`\`\`

#### 为视频提供字幕和描述

\`\`\`html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="zh" label="中文字幕">
  <track kind="descriptions" src="descriptions.vtt" srclang="zh" label="视频描述">
</video>
\`\`\`

#### 确保足够的对比度

\`\`\`css
/* 不好的对比度示例 */
.low-contrast {
  color: #999; /* 浅灰色 */
  background-color: #777; /* 深灰色 */
}

/* 好的对比度示例 */
.high-contrast {
  color: #fff; /* 白色 */
  background-color: #333; /* 深灰色 */
}
\`\`\`

### 2. 可操作（Operable）

用户界面组件和导航必须是可操作的。

#### 确保所有功能可通过键盘访问

\`\`\`javascript
// 为自定义组件添加键盘支持
document.querySelector('.custom-dropdown').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    // 模拟点击操作
    e.preventDefault();
    e.target.click();
  } else if (e.key === 'Escape') {
    // 关闭下拉菜单
    closeDropdown();
  }
});
\`\`\`

#### 提供足够的时间

\`\`\`javascript
// 允许用户延长会话超时时间
function warnBeforeTimeout() {
  const dialog = document.getElementById('timeout-warning');
  dialog.showModal();
  
  document.getElementById('extend-session').addEventListener('click', () => {
    resetSessionTimeout();
    dialog.close();
  });
}
\`\`\`

#### 避免闪烁内容

\`\`\`css
/* 符合无障碍标准的动画 */
@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
    transition: none;
  }
}
\`\`\`

### 3. 可理解（Understandable）

信息和用户界面的操作必须是可理解的。

#### 使文本内容可读且可理解

\`\`\`html
<!-- 指定语言 -->
<html lang="zh-CN">
  <!-- 页面内容 -->
</html>

<!-- 对于页面内的不同语言内容 -->
<p>这是中文内容，包含英文短语 <span lang="en">Hello World</span></p>
\`\`\`

#### 以一致且可预测的方式呈现内容

\`\`\`html
<!-- 保持导航一致性 -->
<header>
  <nav aria-label="主导航">
    <ul>
      <li><a href="/">首页</a></li>
      <li><a href="/about">关于我们</a></li>
      <li><a href="/services">服务</a></li>
      <li><a href="/contact">联系方式</a></li>
    </ul>
  </nav>
</header>
\`\`\`

#### 帮助用户避免和纠正错误

\`\`\`html
<form>
  <div>
    <label for="username">用户名：</label>
    <input 
      type="text" 
      id="username" 
      aria-required="true"
      aria-describedby="username-help"
    >
    <p id="username-help">用户名必须包含3-20个字符，只能使用字母、数字和下划线</p>
  </div>
  
  <!-- 表单验证错误提示 -->
  <div role="alert" id="form-errors">
    请修正表单中的错误后再提交
  </div>
</form>
\`\`\`

### 4. 健壮性（Robust）

内容必须足够健壮，能被各种用户代理（包括辅助技术）可靠地解释。

#### 确保标记的兼容性

\`\`\`html
<!-- 不好的示例：使用非标准HTML -->
<custom-tag>内容</custom-tag>

<!-- 好的示例：使用标准HTML -->
<div role="region" aria-label="内容区域">内容</div>
\`\`\`

#### 正确使用ARIA

\`\`\`html
<!-- 模态对话框 -->
<div 
  role="dialog"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-desc"
  aria-modal="true"
>
  <h2 id="dialog-title">确认操作</h2>
  <p id="dialog-desc">您确定要删除这个项目吗？此操作无法撤销。</p>
  <button>取消</button>
  <button>确认</button>
</div>
\`\`\`

## 常见无障碍问题及解决方案

### 1. 表单无障碍

表单是用户交互的重要部分，确保其无障碍性至关重要：

\`\`\`html
<form>
  <div>
    <label for="email">电子邮箱：</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      autocomplete="email"
      required
      aria-required="true"
    >
  </div>
  
  <fieldset>
    <legend>订阅选项</legend>
    <div>
      <input type="radio" id="daily" name="frequency" value="daily">
      <label for="daily">每日通讯</label>
    </div>
    <div>
      <input type="radio" id="weekly" name="frequency" value="weekly">
      <label for="weekly">每周通讯</label>
    </div>
  </fieldset>
  
  <button type="submit">订阅</button>
</form>
\`\`\`

### 2. 动态内容与SPA应用

单页应用（SPA）需要特别注意无障碍性：

\`\`\`javascript
// 页面内容变化时通知屏幕阅读器
function announcePageChange(message) {
  const announcer = document.getElementById('a11y-announcer');
  announcer.textContent = message;
}

// 路由变化时
router.on('routeChanged', (route) => {
  // 更新页面标题
  document.title = route.title + ' - 网站名称';
  
  // 通知屏幕阅读器
  announcePageChange('已导航至' + route.title + '页面');
  
  // 将焦点移至主内容
  document.getElementById('main-content').focus();
});
\`\`\`

### 3. 响应式设计中的无障碍性

\`\`\`css
/* 确保在移动设备上的可点击区域足够大 */
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 16px;
}

/* 响应式字体大小 */
body {
  font-size: 16px;
}

@media (max-width: 768px) {
  body {
    font-size: 18px; /* 在小屏幕上使用更大的字体 */
  }
}
\`\`\`

## 测试与评估

### 自动化测试工具

- **axe-core**：集成到开发流程中的无障碍测试库
- **WAVE**：提供可视化无障碍评估的浏览器扩展
- **Lighthouse**：谷歌开发的性能和无障碍性审计工具

### 手动测试清单

1. **键盘导航测试**：尝试仅使用键盘浏览网站
2. **屏幕阅读器测试**：使用NVDA、VoiceOver或JAWS检查内容
3. **颜色对比度检查**：验证文本与背景的对比度
4. **缩放测试**：检查页面在200%和400%缩放下的行为
5. **减少动画测试**：启用"减少动画"设置检查网站行为

## 建立无障碍文化

技术实现只是无障碍性的一部分，建立组织内的无障碍文化同样重要：

1. **设计阶段就考虑无障碍性**：在线框图和设计原型阶段纳入无障碍性考量
2. **培训团队成员**：确保所有团队成员了解无障碍设计的重要性和基本原则
3. **纳入用户测试**：招募不同能力的用户参与测试
4. **制定无障碍指南**：为组织创建明确的无障碍标准和实践指南
5. **持续监控和改进**：将无障碍性测试纳入CI/CD流程

## 结语

网页无障碍性不仅仅是一种技术实践，它体现了一种包容性思维，尊重和重视每一个用户的需求。通过遵循WCAG标准和本文介绍的实践方法，你可以创建一个更加包容、公平的数字体验，真正实现"网络为所有人"的愿景。

无障碍设计绝不是额外负担，它是优秀设计的基础。当我们为最极端的用例设计时，所有用户都会受益。让我们一起努力，构建一个人人都能访问的网络世界。 `,Lp=Object.freeze(Object.defineProperty({__proto__:null,default:Tr},Symbol.toStringTag,{value:"Module"})),Er=`---
title: 咖啡馆编程日记
date: 2024-02-10
description: 在咖啡馆工作的利与弊，以及如何选择适合编程的咖啡馆
category: notes
---

## 咖啡馆编程指南

作为一名开发者，我有一半的代码是在咖啡馆里完成的。过去一年，我在城市里的各种咖啡馆"漂流"，积累了一些经验，今天分享给同样喜欢咖啡馆办公的朋友们。

## 咖啡馆办公的优势

### 1. 环境切换带来的心理暗示

家里的沙发和床总是充满诱惑，而咖啡馆提供了一个明确的心理暗示：我来这里是工作的。这种环境切换往往能带来更高的专注度。

### 2. 适度的背景噪音

研究表明，适度的环境噪音（约70分贝）实际上有助于创造性思维。咖啡机的嗡嗡声、杯碟的碰撞声、低声的交谈声，共同构成了一种"咖啡馆效应"，让大脑保持在一种轻度警觉但不紧张的状态。

### 3. 社交孤独感的平衡

在咖啡馆，你既可以独处，又不会感到孤独。这种"一个人，但不孤单"的状态特别适合需要专注但又不想完全与世隔绝的工作。

## 如何选择适合编程的咖啡馆

经过多次试错，我总结出了评价咖啡馆"适合编程指数"的几个关键指标：

| 指标 | 重要性 | 说明 |
|------|-------|------|
| 电源插座 | ★★★★★ | 编程耗电量大，没有插座等于时间限制 |
| 网络质量 | ★★★★☆ | Git操作和文档查询都需要稳定网络 |
| 座椅舒适度 | ★★★★☆ | 腰椎健康是程序员的命根子 |
| 噪音水平 | ★★★☆☆ | 人声嘈杂会影响思考，但完全安静又缺乏活力 |
| 咖啡品质 | ★★☆☆☆ | 好喝但非必须，水和茶也可接受 |
| 消费水平 | ★★★☆☆ | 一杯咖啡的"租金"应该是合理的 |

## 我的几个秘密武器

长期在咖啡馆编程，我随身携带的几样"装备"：

1. **降噪耳机**：在咖啡馆变得嘈杂时，这是救命稻草
2. **便携式电源**：对付没有插座的紧急情况
3. **可折叠笔记本支架**：改善颈椎角度，减少疲劳
4. **4G热点**：作为咖啡馆WiFi的备用方案
5. **防窥屏**：在公共场所保护代码隐私

## 不同类型咖啡馆的编程体验

我尝试过各种类型的咖啡馆，它们各有特点：

- **连锁品牌咖啡馆**：设施标准化，但人流量大，座位竞争激烈
- **独立精品咖啡馆**：环境通常更有特色，但对长时间办公的人可能不太友好
- **咖啡图书馆**：最适合编程，安静且鼓励长时间停留
- **咖啡共享工作空间**：专为工作设计，但失去了传统咖啡馆的随意感

## 咖啡馆编程的小习惯

1. 早上9点前到达，抢占优质座位
2. 适当点单，平均2-3小时一杯饮品
3. 非高峰期再访问厕所（避免座位被占）
4. 使用番茄工作法，每工作25分钟休息5分钟
5. 预先下载可能需要的文档和依赖包

## 意外收获

除了高效工作，咖啡馆编程还带来一些意外收获：

- 遇到了其他开发者，结交了几位志同道合的朋友
- 偶尔听到的对话启发了产品创意
- 不同咖啡馆的环境变化激发了不同类型的创造力

如果你还没尝试过咖啡馆编程，不妨给自己一周的时间挑战一下。它可能会成为提升你工作体验的一种全新方式。 `,jp=Object.freeze(Object.defineProperty({__proto__:null,default:Er},Symbol.toStringTag,{value:"Module"})),Cr=`---
title: 象牙塔里的清醒梦
date: 2024-03-15
description: 一个毕业五年技术人的大学反思录
category: notes
---


## 自由与迷失的量子叠加态

大学教会我的第一课是**自由即负担**。当突然拥有：

- 无人监管的24小时  
- 无限续杯的外卖优惠券  
- 可自定义的课程表  

大多数人的选择模式会陷入循环：

> "从兴奋到迷茫再到麻木的周期律，  
> 像极了未设置终止条件的递归函数"

## 知识采样的幸存者偏差

计算机系课程表的组成比例：

| 课程类型       | 占比   | 实用性 |
|--------------|-------|-------|
| 底层原理       | 70%   | ★★★☆☆ |
| 过时技术       | 20%   | ★☆☆☆☆ |
| 工程实践       | 10%   | ★★★★★ |

## 人际关系的TCP三次握手

宿舍生活本质是分布式系统协同问题：

1. **睡眠同步** - 需要NTP协议校准  
2. **资源分配** - 空调温度争夺战  
3. **任务调度** - 带饭需求的优先级队列  

## 认知升级的灰度发布

那些真正重要的隐性课程：

\`\`\`text
1. 自我管理 - 通过翘课被抓事件习得  
2. 信息检索 - 毕业论文查重攻防战  
3. 抗压能力 - 课程设计截止前24小时  
\`\`\` `,Np=Object.freeze(Object.defineProperty({__proto__:null,default:Cr},Symbol.toStringTag,{value:"Module"})),Pr=`---
title: 数字极简主义实验：30天断舍离
date: 2024-01-15
description: 一名开发者尝试数字极简主义30天，记录了戒除数字依赖的挑战与收获
category: notes
---

## 为什么要尝试数字极简主义

作为一名软件开发者，我的生活几乎完全数字化：工作在电脑前，休息看手机，社交在网络上，娱乐靠流媒体。我发现自己陷入了一种奇怪的矛盾：创造数字工具是为了提高效率，但我却被这些工具消耗了大量注意力。

于是我决定尝试数字极简主义，开始了一场为期30天的"数字断舍离"实验。

## 实验规则

我为自己设定了以下规则：

1. 工作时间外，每天使用手机不超过1小时
2. 电脑只用于工作和写作，不用于娱乐
3. 卸载所有社交媒体应用，只保留微信（仅用于必要沟通）
4. 关闭所有推送通知
5. 每天记录感受和发现

最关键的是：作为开发者，我并不排斥技术本身，而是寻求一种更健康的使用方式。

## 第一周：戒断反应

### 第1天
不夸张地说，第一天我感到了类似戒烟的戒断反应。我发现自己不自觉地拿起手机，解锁，然后才意识到不能刷了。这个动作一天重复了至少20次。

### 第3天
开始感到无聊和空虚。以前空闲时间全被手机填满，现在无所事事的感觉很陌生。为了对抗这种感觉，我开始随身携带一本纸质书。

### 第7天
一个有趣的发现：我开始注意到周围的细节。等公交时不再盯着手机，而是观察街道、行人和建筑。这些一直存在的景象突然变得新鲜起来。

## 第二周：建立新习惯

### 第10天
我重新拾起了几个被数字生活挤占的爱好：
- 素描（上次画画还是5年前）
- 弹吉他（积灰已久）
- 徒步（而不是看别人徒步的视频）

### 第12天
睡眠质量明显改善。不再深夜刷手机，也不再早上醒来第一件事就是查看通知。

### 第14天
开始思考：我真正想要的信息是什么？我订阅了两份电子邮件通讯，每周汇总行业动态，比每天刷数十条碎片化信息高效得多。

## 第三周：创造力复苏

### 第17天
工作效率有了显著提升。以前经常在编码过程中查看手机，现在能够保持长时间的深度专注状态。心流体验明显增多。

### 第20天
开始有更多原创想法。以前大脑处于信息过载状态，很难产生自己的思考。现在有了"空白"时间，创意开始涌现。

### 第21天
一个惊喜：我开发了一个小工具，帮助追踪数字使用时间，这个想法就来源于这次实验。讽刺的是，我创造了一个数字工具来减少数字依赖。

## 第四周：建立平衡

### 第25天
我不再严格限制手机使用时间，而是开始有意识地问自己：此刻拿起手机的目的是什么？是无聊随手一刷，还是有明确目标？

### 第28天
重新安装了部分应用，但设置了使用限制，并调整了界面：
- 主屏幕只保留工具类应用
- 社交和娱乐应用放在次级文件夹
- 手机设置为灰度模式，降低吸引力

### 第30天
实验结束，但数字极简主义已经成为一种习惯。我不再追求完全断绝，而是寻求健康平衡。

## 意外收获

这30天里，我有几个意外收获：

1. **注意力恢复**：能够专注阅读一本书2小时不分心
2. **时间感知变化**：日子不再"一眨眼就过去"，而是变得充实而漫长
3. **社交质量提升**：减少了在线互动，但增加了深度对话
4. **职业思考**：对自己作为开发者的角色有了新的思考——我们应该创造提升而非消耗注意力的产品

## 写给开发者的建议

作为开发人员，我们既是数字产品的创造者，也是消费者。这种双重身份给了我们独特的视角：

1. 开发能够真正解决问题的工具，而非争夺注意力
2. 在产品设计中考虑用户的数字健康
3. 自己先践行数字极简，才能设计出尊重用户时间的产品

这30天改变了我使用技术的方式，也改变了我创造技术的理念。

数字工具应该是增强人类能力的手段，而非消耗我们时间的黑洞。作为开发者，我们有责任引导这场变革。 `,Hp=Object.freeze(Object.defineProperty({__proto__:null,default:Pr},Symbol.toStringTag,{value:"Module"})),Rr=`---
title: 图书馆编程日记
date: 2024-02-10
description: 在咖啡馆工作的利与弊，以及如何选择适合编程的咖啡馆
category: notes
---

## 咖啡馆编程指南

作为一名开发者，我有一半的代码是在咖啡馆里完成的。过去一年，我在城市里的各种咖啡馆"漂流"，积累了一些经验，今天分享给同样喜欢咖啡馆办公的朋友们。

## 咖啡馆办公的优势

### 1. 环境切换带来的心理暗示

家里的沙发和床总是充满诱惑，而咖啡馆提供了一个明确的心理暗示：我来这里是工作的。这种环境切换往往能带来更高的专注度。

### 2. 适度的背景噪音

研究表明，适度的环境噪音（约70分贝）实际上有助于创造性思维。咖啡机的嗡嗡声、杯碟的碰撞声、低声的交谈声，共同构成了一种"咖啡馆效应"，让大脑保持在一种轻度警觉但不紧张的状态。

### 3. 社交孤独感的平衡

在咖啡馆，你既可以独处，又不会感到孤独。这种"一个人，但不孤单"的状态特别适合需要专注但又不想完全与世隔绝的工作。

## 如何选择适合编程的咖啡馆

经过多次试错，我总结出了评价咖啡馆"适合编程指数"的几个关键指标：

| 指标 | 重要性 | 说明 |
|------|-------|------|
| 电源插座 | ★★★★★ | 编程耗电量大，没有插座等于时间限制 |
| 网络质量 | ★★★★☆ | Git操作和文档查询都需要稳定网络 |
| 座椅舒适度 | ★★★★☆ | 腰椎健康是程序员的命根子 |
| 噪音水平 | ★★★☆☆ | 人声嘈杂会影响思考，但完全安静又缺乏活力 |
| 咖啡品质 | ★★☆☆☆ | 好喝但非必须，水和茶也可接受 |
| 消费水平 | ★★★☆☆ | 一杯咖啡的"租金"应该是合理的 |

## 我的几个秘密武器

长期在咖啡馆编程，我随身携带的几样"装备"：

1. **降噪耳机**：在咖啡馆变得嘈杂时，这是救命稻草
2. **便携式电源**：对付没有插座的紧急情况
3. **可折叠笔记本支架**：改善颈椎角度，减少疲劳
4. **4G热点**：作为咖啡馆WiFi的备用方案
5. **防窥屏**：在公共场所保护代码隐私

## 不同类型咖啡馆的编程体验

我尝试过各种类型的咖啡馆，它们各有特点：

- **连锁品牌咖啡馆**：设施标准化，但人流量大，座位竞争激烈
- **独立精品咖啡馆**：环境通常更有特色，但对长时间办公的人可能不太友好
- **咖啡图书馆**：最适合编程，安静且鼓励长时间停留
- **咖啡共享工作空间**：专为工作设计，但失去了传统咖啡馆的随意感

## 咖啡馆编程的小习惯

1. 早上9点前到达，抢占优质座位
2. 适当点单，平均2-3小时一杯饮品
3. 非高峰期再访问厕所（避免座位被占）
4. 使用番茄工作法，每工作25分钟休息5分钟
5. 预先下载可能需要的文档和依赖包

## 意外收获

除了高效工作，咖啡馆编程还带来一些意外收获：

- 遇到了其他开发者，结交了几位志同道合的朋友
- 偶尔听到的对话启发了产品创意
- 不同咖啡馆的环境变化激发了不同类型的创造力

如果你还没尝试过咖啡馆编程，不妨给自己一周的时间挑战一下。它可能会成为提升你工作体验的一种全新方式。 `,Up=Object.freeze(Object.defineProperty({__proto__:null,default:Rr},Symbol.toStringTag,{value:"Module"})),Or=`---
title: 《习惯》读后感：细微改变的巨大力量
date: 2024-03-20
description: 关于《原子习惯》这本书的阅读心得，以及如何将其应用到编程学习中
category: notes
---

## 读书笔记：《原子习惯》

最近读完了詹姆斯·克利尔（James Clear）的《原子习惯》，这本书讲述了如何通过微小但持续的改变构建强大的习惯。核心观点是：习惯的力量不在于一次性的巨大努力，而在于日复一日的微小积累。

## 四个习惯养成法则

书中提出了习惯养成的四个法则：

1. **让它显而易见**（Cue）
2. **让它具有吸引力**（Craving）
3. **让它变得容易**（Response）
4. **让它令人满足**（Reward）

这个框架启发我思考：我们能否将这套系统应用于编程学习中？

## 应用到编程学习

### 让编程显而易见

> "环境比意志力更重要"

- 在桌面创建编程项目的快捷方式
- 设置自动启动IDE的定时任务
- 将编程书籍放在显眼的位置

### 让编程具有吸引力

> "我们模仿三类人：接近的人、多数人和强大的人"

- 加入编程社区，结交志同道合的朋友
- 关注优秀开发者的博客和社交媒体
- 将学习与自己感兴趣的项目结合

### 让编程变得容易

> "习惯养成的关键不在于完美，而在于重复"

- 降低启动门槛：设定"只编程5分钟"的最小目标
- 准备好模板项目，减少重复性工作
- 分解学习任务，专注于一次掌握一个概念

### 让编程令人满足

> "即时反馈远比延迟满足更有效"

- 使用可视化工具记录编程时间和进度
- 完成小目标后给自己即时奖励
- 分享学习成果，获得社区反馈

## 个人实践

我尝试将这些原则应用到自己的编程学习中：

1. 每天早上第一件事：打开VSCode（显而易见）
2. 加入了一个编程学习小组，每周分享进度（具有吸引力）
3. 准备了几个可以快速上手的小项目模板（变得容易）
4. 使用GitHub的贡献图表记录每天的提交（令人满足）

实践一个月后，我的编程时间从每周3小时增加到12小时，更重要的是，编程从"应该做的事"变成了"想要做的事"。

## 改变身份认同

书中最打动我的观点是关于身份认同的：

> "最有效的习惯改变不是专注于结果，而是专注于成为某种类型的人。"

与其说"我要学编程"，不如说"我是一名开发者"。当编程成为身份的一部分，持续学习就变成了自然而然的事情。

希望这些思考对你也有所启发，无论是在编程学习还是其他领域的习惯养成上。 `,Bp=Object.freeze(Object.defineProperty({__proto__:null,default:Or},Symbol.toStringTag,{value:"Module"})),Ir=`---
title: 极简Markdown编辑器
date: 2024-01-30
description: 一个注重写作体验的开源Markdown编辑器，追求极简设计和高效编辑
category: works
github: https://github.com/jasper/minimal-md
---

## 项目背景

作为一名经常写作的开发者，我尝试过市面上几乎所有的Markdown编辑器，但总是感觉缺少一款真正专注于写作体验的工具。多数编辑器要么功能过于复杂，要么界面干扰太多，很少有产品能让我完全沉浸在写作中。

于是我决定打造一个极简的Markdown编辑器，专注于提供最纯粹的写作体验。

## 核心设计理念

### 1. 极简界面

编辑器的界面设计遵循"少即是多"的原则：

- 无工具栏和按钮，纯文本编辑区
- 完全沉浸式写作模式
- 支持自定义主题，默认提供明亮和暗黑两种模式
- 字体、行高、行宽等细节都经过精心调整，优化长时间阅读和写作体验

### 2. 无干扰写作

我特别注重减少写作过程中的干扰：

- 自动保存，无需手动操作
- 无需登录账号
- 离线优先，不依赖网络连接
- 专注模式：高亮当前编辑的段落，淡化其他内容

### 3. 高效编辑

虽然追求极简，但编辑效率不可妥协：

- 完整的键盘快捷键支持
- 智能Markdown语法补全
- 支持代码块语法高亮
- 表格编辑辅助功能
- 可扩展的Snippet系统

## 技术实现

项目采用现代Web技术栈构建：

- **前端框架**：Vue 3 + TypeScript
- **编辑器核心**：CodeMirror 6
- **构建工具**：Vite
- **部署**：Vercel + PWA支持

项目的架构设计特别注重模块化，使其易于扩展：

\`\`\`typescript
// 核心编辑器结构
export interface EditorOptions {
  theme: 'light' | 'dark' | 'custom';
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
  autoSave: boolean;
  // 其他选项...
}

export class MinimalMarkdown {
  private editor: EditorView;
  private storage: StorageManager;
  private extensions: Extension[];
  
  constructor(options: EditorOptions) {
    // 初始化编辑器...
  }
  
  // 公共API
  public getValue(): string { /* ... */ }
  public setValue(markdown: string): void { /* ... */ }
  public focus(): void { /* ... */ }
  public addExtension(ext: Extension): void { /* ... */ }
  // 其他方法...
}
\`\`\`

## 用户反馈与迭代

项目发布后，得到了意想不到的关注。许多用户反馈这款编辑器帮助他们重新找回了对写作的热情。

最常收到的正面评价是：

> "第一次感觉我在使用工具写作，而不是与工具斗争。"  
> "界面消失了，只剩下我和文字，这正是我需要的。"  
> "这可能是我用过的启动最快的Markdown编辑器。"

基于用户反馈，我持续迭代产品：

1. 添加了简单的文件管理功能
2. 优化了移动设备上的编辑体验
3. 增加了导出为PDF、HTML等格式的功能
4. 改进了深色模式下的代码块显示

## 开源与社区

项目采用MIT许可证完全开源，目前已有：

- GitHub Stars: 850+
- 贡献者: 15名
- 已解决的Issues: 72个
- 月活跃用户: 约8,000

## 未来计划

虽然项目已经实现了最初的目标，但我计划继续完善：

1. 添加协作编辑功能
2. 开发桌面客户端版本
3. 提供更多自定义主题
4. 增加绘图和思维导图支持

## 技术挑战与解决方案

在开发过程中，遇到了一些有趣的技术挑战：

### 挑战1：实时预览性能

初期版本在大文档编辑时，实时预览会导致明显卡顿。

**解决方案**：实现了增量渲染系统，只重新渲染修改过的部分，大幅提升了性能。

### 挑战2：移动设备兼容性

移动设备上的键盘操作体验不佳。

**解决方案**：为移动设备设计了特殊的快捷工具栏，提供常用Markdown语法的快速输入。

## 经验分享

通过这个项目，我学到了很多关于产品设计和用户体验的经验：

1. **少即是多**：认真思考每个功能是否必要
2. **关注核心体验**：把主要精力放在核心用例上
3. **重视用户反馈**：但不要盲目追随所有建议
4. **细节决定体验**：像字体渲染、动画过渡这样的小细节会极大影响整体感受

如果你也有兴趣参与这个项目，欢迎访问我们的GitHub仓库，提交PR或反馈建议！ `,zp=Object.freeze(Object.defineProperty({__proto__:null,default:Ir},Symbol.toStringTag,{value:"Module"})),$r=`---
title: 阅见 - 极简阅读追踪应用
date: 2024-04-10
description: 一款专注于记录阅读进度与心得的极简应用，帮助用户建立持续阅读习惯
category: works
---

## 项目起源

作为一个热爱阅读的开发者，我一直在寻找一款能够帮助我追踪阅读进度、记录阅读心得的应用。市面上的阅读类应用要么功能过于复杂，要么又过于简陋，很少有产品能平衡好简洁与实用。

"阅见"正是为了解决这个问题而诞生的：一款极简但功能恰到好处的阅读追踪应用。

## 核心功能

### 1. 阅读追踪

阅见的核心是帮助用户追踪阅读进度：

- 支持多种进度记录方式（页码、百分比、章节）
- 自动计算阅读速度和预计完成时间
- 可视化展示阅读习惯（日历热图、趋势图）
- 阅读提醒与目标设定

### 2. 笔记与思考

不只是追踪进度，更重要的是记录思考：

- 支持按章节或页码添加笔记
- 划线与批注功能
- Markdown格式支持
- 思维导图模式整理笔记
- 一键生成读书摘要

### 3. 社区分享

阅读不止是个人行为，也可以是社交活动：

- 可选择性分享读书进度和心得
- 好友间的阅读挑战
- 发现好友正在阅读的书籍
- 私密阅读圈子功能

## 产品设计

### 极简设计理念

阅见的设计遵循极简主义，但不牺牲功能性：

- 专注于阅读的核心体验
- 避免无关功能干扰
- 流畅优雅的交互设计
- 无广告，无打扰

### 界面预览

应用的主界面由四个主要部分组成：

1. **书架**：展示正在阅读和计划阅读的书籍
2. **阅读**：当前阅读进度与笔记
3. **统计**：阅读习惯与成就数据
4. **发现**：基于阅读历史的个性化推荐

## 技术实现

阅见采用了现代化的技术栈：

- **前端框架**：Vue 3 + Vite
- **状态管理**：Pinia
- **UI组件**：原生设计 + TailwindCSS
- **数据可视化**：ECharts
- **本地存储**：IndexedDB + localStorage
- **云同步**：Firebase
- **部署方式**：PWA + 小程序

### 技术亮点

1. **离线优先设计**

阅读应用需要考虑离线场景，我采用了离线优先的设计：

\`\`\`javascript
// 数据同步策略
export class SyncManager {
  constructor() {
    this.queue = []
    this.syncing = false
    this.online = navigator.onLine
    
    window.addEventListener('online', this.trySync.bind(this))
    window.addEventListener('offline', () => { this.online = false })
  }
  
  // 添加变更到同步队列
  addChange(change) {
    this.queue.push({
      ...change,
      timestamp: Date.now()
    })
    
    // 保存到本地，防止应用关闭丢失
    this.saveQueueToLocal()
    
    // 如果在线，尝试同步
    if (this.online) {
      this.trySync()
    }
  }
  
  // 尝试同步到云端
  async trySync() {
    if (this.syncing || !this.online || this.queue.length === 0) return
    
    this.syncing = true
    try {
      // 批量同步变更
      await api.syncChanges(this.queue)
      
      // 同步成功，清空队列
      this.queue = []
      this.saveQueueToLocal()
    } catch (error) {
      console.error('同步失败', error)
    } finally {
      this.syncing = false
    }
  }
  
  // 将队列保存到本地存储
  saveQueueToLocal() {
    localStorage.setItem('sync_queue', JSON.stringify(this.queue))
  }
  
  // 初始化时从本地加载队列
  loadQueueFromLocal() {
    const savedQueue = localStorage.getItem('sync_queue')
    if (savedQueue) {
      this.queue = JSON.parse(savedQueue)
    }
  }
}
\`\`\`

2. **渐进式数据加载**

为了提高性能，尤其是在书籍笔记较多的情况下，我实现了渐进式数据加载：

\`\`\`javascript
// 渐进式加载笔记
export function useProgressiveNotes(bookId) {
  const notes = ref([])
  const loading = ref(false)
  const hasMore = ref(true)
  const page = ref(1)
  const pageSize = 20
  
  // 初始加载
  async function loadInitialNotes() {
    loading.value = true
    try {
      const initialNotes = await notesApi.getBookNotes(bookId, {
        page: 1,
        pageSize
      })
      notes.value = initialNotes.data
      hasMore.value = initialNotes.total > pageSize
    } catch (error) {
      console.error('Failed to load notes', error)
    } finally {
      loading.value = false
    }
  }
  
  // 加载更多
  async function loadMoreNotes() {
    if (!hasMore.value || loading.value) return
    
    loading.value = true
    page.value++
    
    try {
      const moreNotes = await notesApi.getBookNotes(bookId, {
        page: page.value,
        pageSize
      })
      
      notes.value = [...notes.value, ...moreNotes.data]
      hasMore.value = notes.value.length < moreNotes.total
    } catch (error) {
      page.value--
      console.error('Failed to load more notes', error)
    } finally {
      loading.value = false
    }
  }
  
  onMounted(loadInitialNotes)
  
  return {
    notes,
    loading,
    hasMore,
    loadMoreNotes
  }
}
\`\`\`

## 用户反馈与迭代

阅见已经进行了3个月的内测，收到了许多宝贵反馈：

### 用户反馈摘要

> "终于找到一款不复杂也不简陋的阅读追踪应用。"  
> "每天看到自己的阅读热图慢慢变绿，非常有成就感。"  
> "笔记整理功能太棒了，帮我把零散的想法组织得更有条理。"

### 迭代改进

基于用户反馈，我们进行了多次迭代：

1. 添加了"阅读群组"功能，允许好友之间共同阅读一本书
2. 优化了数据导出功能，支持更多格式
3. 增强了笔记搜索功能
4. 改进了深色模式下的视觉体验

## 数据与成果

目前阅见已取得的成绩：

- 内测用户：500+
- 平均每用户阅读书籍：8本
- 用户留存率：3个月后仍有85%活跃
- 平均每周使用频次：5.2次

## 未来计划

阅见还处于持续发展中，未来计划包括：

1. **智能推荐**：基于阅读历史和笔记内容的个性化书籍推荐
2. **音频阅读支持**：添加有声书追踪功能
3. **AI阅读助手**：帮助理解复杂概念，生成问题
4. **开放API**：允许第三方应用集成

## 项目反思

开发阅见的过程中，我有几点重要收获：

1. **"少即是多"的实践**：严格控制功能范围，专注把核心体验做到极致
2. **用户反馈的重要性**：早期用户的反馈极大改变了产品方向
3. **小工具大影响**：看似简单的功能可以对用户的生活习惯产生深远影响
4. **技术为体验服务**：技术选型应以提升用户体验为最终目标

阅见不仅是一个应用，更是我对"如何培养持续阅读习惯"这个问题的思考和实践。希望它能帮助更多热爱阅读的人记录思考，沉淀知识。 `,Vp=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),Mr=`---
title: 我的第一个出海产品
date: 2025-03-01
description: 距离简单简历发布已经过了两年半，现在它已经有 20000 用户，所以我认为它已经是一个模式完全被验证的产品了，所以我创建了 TailwindResume 这个产品，通过冷启动的方式在两周内收获 50 个用户，赚到了 100 美元。
category: works
---

距离简单简历发布已经过了两年半，现在它已经有 20000 用户，所以我认为它已经是一个模式完全被验证的产品了，所以我创建了 TailwindResume 这个产品，通过冷启动的方式在两周内收获 50 个用户，赚到了 100 美元，不是特别惊人，所以非常真实，是每个想出海的独立开发者都可以完全复制的经验。

## 为什么要做这个产品？

在过去的两年半时间里，我一直在维护简单简历这个产品。通过与用户的交流，我发现很多用户都有一个共同的需求：他们希望能够快速创建一份专业的简历，而不需要花费太多时间在设计上。

## 如何实现冷启动？

1. 选择合适的平台
2. 找到目标用户
3. 提供有价值的内容
4. 持续优化产品

## 具体执行步骤

### 第一周

- 完成产品核心功能开发
- 发布到 Product Hunt
- 在 Twitter 上分享进展

### 第二周

- 收集用户反馈
- 快速迭代改进
- 实现首次付费

## 经验总结

1. 产品定位要清晰
2. 快速验证想法
3. 持续与用户沟通
4. 保持耐心和专注

希望这些经验能够帮助到其他想要出海的独立开发者。记住，每个成功都是从小小的第一步开始的。 `,qp=Object.freeze(Object.defineProperty({__proto__:null,default:Mr},Symbol.toStringTag,{value:"Module"})),Fr=`---
title: Luna UI：面向中后台的Vue组件库
date: 2023-11-15
description: 一套专为中后台系统设计的Vue 3组件库，注重开发效率与交互体验
category: works
---

## 项目概述

Luna UI是一套基于Vue 3的企业级组件库，专为中后台系统设计。在经历了多个企业内部管理系统的开发后，我发现市面上的组件库虽然功能全面，但往往需要大量二次开发才能满足复杂业务场景。因此，我设计并开发了这套组件库，重点优化了表单、表格、图表等中后台核心场景。

## 设计理念

### 1. 以业务为中心

Luna UI不同于一般的UI组件库，它更加注重业务场景的抽象：

- **智能表单**：支持动态表单配置，拖拽排序，联动校验
- **高级表格**：内置筛选、排序、导出、行内编辑等功能
- **配置式图表**：简化数据可视化的实现难度
- **工作流组件**：满足审批流、状态流转等复杂业务场景

### 2. 开发体验优先

组件库设计中特别注重开发体验：

- 完善的TypeScript类型定义
- 丰富的Snippets和模板
- 详尽的API文档和示例
- 极简的配置接口

### 3. 性能与可访问性

在保证功能完善的同时，不忘基础品质：

- 所有组件支持SSR
- 完全支持暗色模式
- 符合WCAG 2.1无障碍标准
- 组件代码经过性能优化

## 核心功能

### 智能表单组件

表单是中后台系统的核心，Luna UI提供了强大的表单解决方案：

\`\`\`vue
<template>
  <luna-form
    :schema="schema"
    :model="formData"
    :rules="rules"
    @submit="handleSubmit"
  />
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({})

const schema = [
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    props: { placeholder: '请输入姓名' }
  },
  {
    field: 'department',
    label: '部门',
    component: 'Select',
    props: {
      options: [
        { label: '研发部', value: 'dev' },
        { label: '产品部', value: 'product' },
        { label: '设计部', value: 'design' }
      ]
    }
  },
  {
    field: 'isManager',
    label: '是否主管',
    component: 'Switch'
  },
  {
    field: 'managedTeams',
    label: '管理团队',
    component: 'CheckboxGroup',
    props: {
      options: [
        { label: '前端团队', value: 'frontend' },
        { label: '后端团队', value: 'backend' },
        { label: '测试团队', value: 'testing' }
      ]
    },
    visible: (form) => form.isManager === true
  }
]

const rules = {
  name: [{ required: true, message: '请输入姓名' }],
  department: [{ required: true, message: '请选择部门' }]
}

const handleSubmit = (values) => {
  console.log('表单提交:', values)
}
<\/script>
\`\`\`

### 高级表格组件

Luna UI的表格组件解决了传统表格组件的痛点：

- **虚拟滚动**：支持10万行数据流畅渲染
- **树形表格**：支持层级数据展示
- **多种编辑模式**：行内编辑、弹窗编辑、单元格编辑
- **自动持久化**：表格列宽、排序、筛选条件自动保存

\`\`\`vue
<template>
  <luna-table
    :columns="columns"
    :data-source="dataSource"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #action="{ record }">
      <luna-button type="text" @click="editRecord(record)">编辑</luna-button>
      <luna-button type="text" @click="deleteRecord(record)">删除</luna-button>
    </template>
  </luna-table>
</template>
\`\`\`

### 工作流组件

独特的工作流组件满足复杂业务场景：

- 可视化流程设计器
- 流程执行状态展示
- 节点审批历史查看
- 支持条件分支和并行处理

## 技术实现

Luna UI采用现代化的技术栈：

- **框架**：Vue 3 + Composition API
- **类型系统**：100% TypeScript
- **构建工具**：Vite
- **测试**：Vitest + Vue Test Utils
- **文档**：VitePress
- **代码质量**：ESLint + Prettier

组件库架构遵循以下原则：

1. **高内聚低耦合**：每个组件独立维护
2. **组合优于继承**：充分利用Vue的组合式API
3. **拓展性优先**：提供丰富的插槽和事件
4. **性能优化**：懒加载、按需引入、虚拟化

## 项目成果

Luna UI目前已在多个项目中得到应用：

- 3个大型企业内部系统
- 2个SaaS产品
- 5个中小型管理后台

用户反馈显示，使用Luna UI后：

- 表单开发效率提升约60%
- 复杂表格功能开发时间减少约70%
- 代码量减少约40%
- UI一致性显著提高

## 开源与社区

项目采用MIT许可证开源，社区情况：

- GitHub Stars: 1200+
- 贡献者: 23名
- NPM周下载量: 2000+
- 已发布版本: 21个

## 未来规划

Luna UI的未来发展方向：

1. **低代码集成**：提供拖拽式组件配置界面
2. **AI辅助开发**：实现根据需求描述生成组件配置
3. **微前端支持**：优化在微前端架构中的应用
4. **国际化增强**：完善多语言支持

## 项目总结

开发Luna UI的过程中，我学到了组件库设计的关键要素：

1. **抽象的艺术**：找到合适的抽象层级是组件设计的核心
2. **默认值的智慧**：好的默认配置可以极大减少使用成本
3. **扩展性的平衡**：既要满足定制需求，又不能过度灵活导致使用复杂
4. **文档与示例同等重要**：再好的组件没有好文档也难以推广

Luna UI不仅仅是一个技术产品，更是我对中后台开发体验的思考。通过开源这个项目，我希望能为前端社区带来一些新的思路，同时也期待更多开发者的参与和贡献。 `,Kp=Object.freeze(Object.defineProperty({__proto__:null,default:Fr},Symbol.toStringTag,{value:"Module"}));function Wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var co={exports:{}},de={},Wt={},Ke={};function ta(e){return typeof e>"u"||e===null}function Gp(e){return typeof e=="object"&&e!==null}function Yp(e){return Array.isArray(e)?e:ta(e)?[]:[e]}function Jp(e,n){var t,r,i,o;if(n)for(o=Object.keys(n),t=0,r=o.length;t<r;t+=1)i=o[t],e[i]=n[i];return e}function Qp(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function Zp(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}Ke.isNothing=ta;Ke.isObject=Gp;Ke.toArray=Yp;Ke.repeat=Qp;Ke.isNegativeZero=Zp;Ke.extend=Jp;function Bt(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Bt.prototype=Object.create(Error.prototype);Bt.prototype.constructor=Bt;Bt.prototype.toString=function(n){var t=this.name+": ";return t+=this.reason||"(unknown reason)",!n&&this.mark&&(t+=" "+this.mark.toString()),t};var Gt=Bt,hs=Ke;function uo(e,n,t,r,i){this.name=e,this.buffer=n,this.position=t,this.line=r,this.column=i}uo.prototype.getSnippet=function(n,t){var r,i,o,s,l;if(!this.buffer)return null;for(n=n||4,t=t||75,r="",i=this.position;i>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(i-1))===-1;)if(i-=1,this.position-i>t/2-1){r=" ... ",i+=5;break}for(o="",s=this.position;s<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(s))===-1;)if(s+=1,s-this.position>t/2-1){o=" ... ",s-=5;break}return l=this.buffer.slice(i,s),hs.repeat(" ",n)+r+l+o+`
`+hs.repeat(" ",n+this.position-i+r.length)+"^"};uo.prototype.toString=function(n){var t,r="";return this.name&&(r+='in "'+this.name+'" '),r+="at line "+(this.line+1)+", column "+(this.column+1),n||(t=this.getSnippet(),t&&(r+=`:
`+t)),r};var Xp=uo,gs=Gt,ed=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],nd=["scalar","sequence","mapping"];function td(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function rd(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(ed.indexOf(t)===-1)throw new gs('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.defaultStyle=n.defaultStyle||null,this.styleAliases=td(n.styleAliases||null),nd.indexOf(this.kind)===-1)throw new gs('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var be=rd,ms=Ke,cr=Gt,id=be;function Di(e,n,t){var r=[];return e.include.forEach(function(i){t=Di(i,n,t)}),e[n].forEach(function(i){t.forEach(function(o,s){o.tag===i.tag&&o.kind===i.kind&&r.push(s)}),t.push(i)}),t.filter(function(i,o){return r.indexOf(o)===-1})}function od(){var e={scalar:{},sequence:{},mapping:{},fallback:{}},n,t;function r(i){e[i.kind][i.tag]=e.fallback[i.tag]=i}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function rt(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(n){if(n.loadKind&&n.loadKind!=="scalar")throw new cr("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=Di(this,"implicit",[]),this.compiledExplicit=Di(this,"explicit",[]),this.compiledTypeMap=od(this.compiledImplicit,this.compiledExplicit)}rt.DEFAULT=null;rt.create=function(){var n,t;switch(arguments.length){case 1:n=rt.DEFAULT,t=arguments[0];break;case 2:n=arguments[0],t=arguments[1];break;default:throw new cr("Wrong number of arguments for Schema.create function")}if(n=ms.toArray(n),t=ms.toArray(t),!n.every(function(r){return r instanceof rt}))throw new cr("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!t.every(function(r){return r instanceof id}))throw new cr("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new rt({include:n,explicit:t})};var bt=rt,sd=be,ld=new sd("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),ad=be,cd=new ad("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ud=be,fd=new ud("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),pd=bt,fo=new pd({explicit:[ld,cd,fd]}),dd=be;function hd(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function gd(){return null}function md(e){return e===null}var _d=new dd("tag:yaml.org,2002:null",{kind:"scalar",resolve:hd,construct:gd,predicate:md,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),yd=be;function bd(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function vd(e){return e==="true"||e==="True"||e==="TRUE"}function xd(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var wd=new yd("tag:yaml.org,2002:bool",{kind:"scalar",resolve:bd,construct:vd,predicate:xd,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"}),kd=Ke,Sd=be;function Ad(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Td(e){return 48<=e&&e<=55}function Ed(e){return 48<=e&&e<=57}function Cd(e){if(e===null)return!1;var n=e.length,t=0,r=!1,i;if(!n)return!1;if(i=e[t],(i==="-"||i==="+")&&(i=e[++t]),i==="0"){if(t+1===n)return!0;if(i=e[++t],i==="b"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(i!=="0"&&i!=="1")return!1;r=!0}return r&&i!=="_"}if(i==="x"){for(t++;t<n;t++)if(i=e[t],i!=="_"){if(!Ad(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}for(;t<n;t++)if(i=e[t],i!=="_"){if(!Td(e.charCodeAt(t)))return!1;r=!0}return r&&i!=="_"}if(i==="_")return!1;for(;t<n;t++)if(i=e[t],i!=="_"){if(i===":")break;if(!Ed(e.charCodeAt(t)))return!1;r=!0}return!r||i==="_"?!1:i!==":"?!0:/^(:[0-5]?[0-9])+$/.test(e.slice(t))}function Pd(e){var n=e,t=1,r,i,o=[];return n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0"?0:r==="0"?n[1]==="b"?t*parseInt(n.slice(2),2):n[1]==="x"?t*parseInt(n,16):t*parseInt(n,8):n.indexOf(":")!==-1?(n.split(":").forEach(function(s){o.unshift(parseInt(s,10))}),n=0,i=1,o.forEach(function(s){n+=s*i,i*=60}),t*n):t*parseInt(n,10)}function Rd(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!kd.isNegativeZero(e)}var Od=new Sd("tag:yaml.org,2002:int",{kind:"scalar",resolve:Cd,construct:Pd,predicate:Rd,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),ra=Ke,Id=be,$d=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Md(e){return!(e===null||!$d.test(e)||e[e.length-1]==="_")}function Fd(e){var n,t,r,i;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,i=[],"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:n.indexOf(":")>=0?(n.split(":").forEach(function(o){i.unshift(parseFloat(o,10))}),n=0,r=1,i.forEach(function(o){n+=o*r,r*=60}),t*n):t*parseFloat(n,10)}var Dd=/^[-+]?[0-9]+e/;function Ld(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ra.isNegativeZero(e))return"-0.0";return t=e.toString(10),Dd.test(t)?t.replace("e",".e"):t}function jd(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||ra.isNegativeZero(e))}var Nd=new Id("tag:yaml.org,2002:float",{kind:"scalar",resolve:Md,construct:Fd,predicate:jd,represent:Ld,defaultStyle:"lowercase"}),Hd=bt,ia=new Hd({include:[fo],implicit:[_d,wd,Od,Nd]}),Ud=bt,oa=new Ud({include:[ia]}),Bd=be,sa=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),la=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function zd(e){return e===null?!1:sa.exec(e)!==null||la.exec(e)!==null}function Vd(e){var n,t,r,i,o,s,l,a=0,u=null,c,f,d;if(n=sa.exec(e),n===null&&(n=la.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(t,r,i));if(o=+n[4],s=+n[5],l=+n[6],n[7]){for(a=n[7].slice(0,3);a.length<3;)a+="0";a=+a}return n[9]&&(c=+n[10],f=+(n[11]||0),u=(c*60+f)*6e4,n[9]==="-"&&(u=-u)),d=new Date(Date.UTC(t,r,i,o,s,l,a)),u&&d.setTime(d.getTime()-u),d}function qd(e){return e.toISOString()}var Kd=new Bd("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:zd,construct:Vd,instanceOf:Date,represent:qd}),Wd=be;function Gd(e){return e==="<<"||e===null}var Yd=new Wd("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Gd});function aa(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Un;try{var Jd=aa;Un=Jd("buffer").Buffer}catch{}var Qd=be,po=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Zd(e){if(e===null)return!1;var n,t,r=0,i=e.length,o=po;for(t=0;t<i;t++)if(n=o.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function Xd(e){var n,t,r=e.replace(/[\r\n=]/g,""),i=r.length,o=po,s=0,l=[];for(n=0;n<i;n++)n%4===0&&n&&(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)),s=s<<6|o.indexOf(r.charAt(n));return t=i%4*6,t===0?(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)):t===18?(l.push(s>>10&255),l.push(s>>2&255)):t===12&&l.push(s>>4&255),Un?Un.from?Un.from(l):new Un(l):l}function eh(e){var n="",t=0,r,i,o=e.length,s=po;for(r=0;r<o;r++)r%3===0&&r&&(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]),t=(t<<8)+e[r];return i=o%3,i===0?(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]):i===2?(n+=s[t>>10&63],n+=s[t>>4&63],n+=s[t<<2&63],n+=s[64]):i===1&&(n+=s[t>>2&63],n+=s[t<<4&63],n+=s[64],n+=s[64]),n}function nh(e){return Un&&Un.isBuffer(e)}var th=new Qd("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Zd,construct:Xd,predicate:nh,represent:eh}),rh=be,ih=Object.prototype.hasOwnProperty,oh=Object.prototype.toString;function sh(e){if(e===null)return!0;var n=[],t,r,i,o,s,l=e;for(t=0,r=l.length;t<r;t+=1){if(i=l[t],s=!1,oh.call(i)!=="[object Object]")return!1;for(o in i)if(ih.call(i,o))if(!s)s=!0;else return!1;if(!s)return!1;if(n.indexOf(o)===-1)n.push(o);else return!1}return!0}function lh(e){return e!==null?e:[]}var ah=new rh("tag:yaml.org,2002:omap",{kind:"sequence",resolve:sh,construct:lh}),ch=be,uh=Object.prototype.toString;function fh(e){if(e===null)return!0;var n,t,r,i,o,s=e;for(o=new Array(s.length),n=0,t=s.length;n<t;n+=1){if(r=s[n],uh.call(r)!=="[object Object]"||(i=Object.keys(r),i.length!==1))return!1;o[n]=[i[0],r[i[0]]]}return!0}function ph(e){if(e===null)return[];var n,t,r,i,o,s=e;for(o=new Array(s.length),n=0,t=s.length;n<t;n+=1)r=s[n],i=Object.keys(r),o[n]=[i[0],r[i[0]]];return o}var dh=new ch("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:fh,construct:ph}),hh=be,gh=Object.prototype.hasOwnProperty;function mh(e){if(e===null)return!0;var n,t=e;for(n in t)if(gh.call(t,n)&&t[n]!==null)return!1;return!0}function _h(e){return e!==null?e:{}}var yh=new hh("tag:yaml.org,2002:set",{kind:"mapping",resolve:mh,construct:_h}),bh=bt,Yt=new bh({include:[oa],implicit:[Kd,Yd],explicit:[th,ah,dh,yh]}),vh=be;function xh(){return!0}function wh(){}function kh(){return""}function Sh(e){return typeof e>"u"}var Ah=new vh("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:xh,construct:wh,predicate:Sh,represent:kh}),Th=be;function Eh(e){if(e===null||e.length===0)return!1;var n=e,t=/\/([gim]*)$/.exec(e),r="";return!(n[0]==="/"&&(t&&(r=t[1]),r.length>3||n[n.length-r.length-1]!=="/"))}function Ch(e){var n=e,t=/\/([gim]*)$/.exec(e),r="";return n[0]==="/"&&(t&&(r=t[1]),n=n.slice(1,n.length-r.length-1)),new RegExp(n,r)}function Ph(e){var n="/"+e.source+"/";return e.global&&(n+="g"),e.multiline&&(n+="m"),e.ignoreCase&&(n+="i"),n}function Rh(e){return Object.prototype.toString.call(e)==="[object RegExp]"}var Oh=new Th("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:Eh,construct:Ch,predicate:Rh,represent:Ph}),Dr;try{var Ih=aa;Dr=Ih("esprima")}catch{typeof window<"u"&&(Dr=window.esprima)}var $h=be;function Mh(e){if(e===null)return!1;try{var n="("+e+")",t=Dr.parse(n,{range:!0});return!(t.type!=="Program"||t.body.length!==1||t.body[0].type!=="ExpressionStatement"||t.body[0].expression.type!=="ArrowFunctionExpression"&&t.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function Fh(e){var n="("+e+")",t=Dr.parse(n,{range:!0}),r=[],i;if(t.type!=="Program"||t.body.length!==1||t.body[0].type!=="ExpressionStatement"||t.body[0].expression.type!=="ArrowFunctionExpression"&&t.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return t.body[0].expression.params.forEach(function(o){r.push(o.name)}),i=t.body[0].expression.body.range,t.body[0].expression.body.type==="BlockStatement"?new Function(r,n.slice(i[0]+1,i[1]-1)):new Function(r,"return "+n.slice(i[0],i[1]))}function Dh(e){return e.toString()}function Lh(e){return Object.prototype.toString.call(e)==="[object Function]"}var jh=new $h("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:Mh,construct:Fh,predicate:Lh,represent:Dh}),_s=bt,ti=_s.DEFAULT=new _s({include:[Yt],explicit:[Ah,Oh,jh]}),xn=Ke,ca=Gt,Nh=Xp,ua=Yt,Hh=ti,$n=Object.prototype.hasOwnProperty,Lr=1,fa=2,pa=3,jr=4,xi=1,Uh=2,ys=3,Bh=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,zh=/[\x85\u2028\u2029]/,Vh=/[,\[\]\{\}]/,da=/^(?:!|!!|![a-z\-]+!)$/i,ha=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function bs(e){return Object.prototype.toString.call(e)}function pn(e){return e===10||e===13}function zn(e){return e===9||e===32}function $e(e){return e===9||e===32||e===10||e===13}function it(e){return e===44||e===91||e===93||e===123||e===125}function qh(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function Kh(e){return e===120?2:e===117?4:e===85?8:0}function Wh(e){return 48<=e&&e<=57?e-48:-1}function vs(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function Gh(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var ga=new Array(256),ma=new Array(256);for(var et=0;et<256;et++)ga[et]=vs(et)?1:0,ma[et]=vs(et);function Yh(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||Hh,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function _a(e,n){return new ca(n,new Nh(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function H(e,n){throw _a(e,n)}function Nr(e,n){e.onWarning&&e.onWarning.call(null,_a(e,n))}var xs={YAML:function(n,t,r){var i,o,s;n.version!==null&&H(n,"duplication of %YAML directive"),r.length!==1&&H(n,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),i===null&&H(n,"ill-formed argument of the YAML directive"),o=parseInt(i[1],10),s=parseInt(i[2],10),o!==1&&H(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=s<2,s!==1&&s!==2&&Nr(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var i,o;r.length!==2&&H(n,"TAG directive accepts exactly two arguments"),i=r[0],o=r[1],da.test(i)||H(n,"ill-formed tag handle (first argument) of the TAG directive"),$n.call(n.tagMap,i)&&H(n,'there is a previously declared suffix for "'+i+'" tag handle'),ha.test(o)||H(n,"ill-formed tag prefix (second argument) of the TAG directive"),n.tagMap[i]=o}};function In(e,n,t,r){var i,o,s,l;if(n<t){if(l=e.input.slice(n,t),r)for(i=0,o=l.length;i<o;i+=1)s=l.charCodeAt(i),s===9||32<=s&&s<=1114111||H(e,"expected valid JSON character");else Bh.test(l)&&H(e,"the stream contains non-printable characters");e.result+=l}}function ws(e,n,t,r){var i,o,s,l;for(xn.isObject(t)||H(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(t),s=0,l=i.length;s<l;s+=1)o=i[s],$n.call(n,o)||(n[o]=t[o],r[o]=!0)}function ot(e,n,t,r,i,o,s,l){var a,u;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),a=0,u=i.length;a<u;a+=1)Array.isArray(i[a])&&H(e,"nested arrays are not supported inside keys"),typeof i=="object"&&bs(i[a])==="[object Object]"&&(i[a]="[object Object]");if(typeof i=="object"&&bs(i)==="[object Object]"&&(i="[object Object]"),i=String(i),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(a=0,u=o.length;a<u;a+=1)ws(e,n,o[a],t);else ws(e,n,o,t);else!e.json&&!$n.call(t,i)&&$n.call(n,i)&&(e.line=s||e.line,e.position=l||e.position,H(e,"duplicated mapping key")),n[i]=o,delete t[i];return n}function ho(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):H(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function ge(e,n,t){for(var r=0,i=e.input.charCodeAt(e.position);i!==0;){for(;zn(i);)i=e.input.charCodeAt(++e.position);if(n&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(pn(i))for(ho(e),i=e.input.charCodeAt(e.position),r++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&Nr(e,"deficient indentation"),r}function ri(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||$e(t)))}function go(e,n){n===1?e.result+=" ":n>1&&(e.result+=xn.repeat(`
`,n-1))}function Jh(e,n,t){var r,i,o,s,l,a,u,c,f=e.kind,d=e.result,g;if(g=e.input.charCodeAt(e.position),$e(g)||it(g)||g===35||g===38||g===42||g===33||g===124||g===62||g===39||g===34||g===37||g===64||g===96||(g===63||g===45)&&(i=e.input.charCodeAt(e.position+1),$e(i)||t&&it(i)))return!1;for(e.kind="scalar",e.result="",o=s=e.position,l=!1;g!==0;){if(g===58){if(i=e.input.charCodeAt(e.position+1),$e(i)||t&&it(i))break}else if(g===35){if(r=e.input.charCodeAt(e.position-1),$e(r))break}else{if(e.position===e.lineStart&&ri(e)||t&&it(g))break;if(pn(g))if(a=e.line,u=e.lineStart,c=e.lineIndent,ge(e,!1,-1),e.lineIndent>=n){l=!0,g=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=a,e.lineStart=u,e.lineIndent=c;break}}l&&(In(e,o,s,!1),go(e,e.line-a),o=s=e.position,l=!1),zn(g)||(s=e.position+1),g=e.input.charCodeAt(++e.position)}return In(e,o,s,!1),e.result?!0:(e.kind=f,e.result=d,!1)}function Qh(e,n){var t,r,i;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=i=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(In(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,i=e.position;else return!0;else pn(t)?(In(e,r,i,!0),go(e,ge(e,!1,n)),r=i=e.position):e.position===e.lineStart&&ri(e)?H(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);H(e,"unexpected end of the stream within a single quoted scalar")}function Zh(e,n){var t,r,i,o,s,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return In(e,t,e.position,!0),e.position++,!0;if(l===92){if(In(e,t,e.position,!0),l=e.input.charCodeAt(++e.position),pn(l))ge(e,!1,n);else if(l<256&&ga[l])e.result+=ma[l],e.position++;else if((s=Kh(l))>0){for(i=s,o=0;i>0;i--)l=e.input.charCodeAt(++e.position),(s=qh(l))>=0?o=(o<<4)+s:H(e,"expected hexadecimal character");e.result+=Gh(o),e.position++}else H(e,"unknown escape sequence");t=r=e.position}else pn(l)?(In(e,t,r,!0),go(e,ge(e,!1,n)),t=r=e.position):e.position===e.lineStart&&ri(e)?H(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}H(e,"unexpected end of the stream within a double quoted scalar")}function Xh(e,n){var t=!0,r,i=e.tag,o,s=e.anchor,l,a,u,c,f,d={},g,v,k,T;if(T=e.input.charCodeAt(e.position),T===91)a=93,f=!1,o=[];else if(T===123)a=125,f=!0,o={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),T=e.input.charCodeAt(++e.position);T!==0;){if(ge(e,!0,n),T=e.input.charCodeAt(e.position),T===a)return e.position++,e.tag=i,e.anchor=s,e.kind=f?"mapping":"sequence",e.result=o,!0;t||H(e,"missed comma between flow collection entries"),v=g=k=null,u=c=!1,T===63&&(l=e.input.charCodeAt(e.position+1),$e(l)&&(u=c=!0,e.position++,ge(e,!0,n))),r=e.line,_t(e,n,Lr,!1,!0),v=e.tag,g=e.result,ge(e,!0,n),T=e.input.charCodeAt(e.position),(c||e.line===r)&&T===58&&(u=!0,T=e.input.charCodeAt(++e.position),ge(e,!0,n),_t(e,n,Lr,!1,!0),k=e.result),f?ot(e,o,d,v,g,k):u?o.push(ot(e,null,d,v,g,k)):o.push(g),ge(e,!0,n),T=e.input.charCodeAt(e.position),T===44?(t=!0,T=e.input.charCodeAt(++e.position)):t=!1}H(e,"unexpected end of the stream within a flow collection")}function eg(e,n){var t,r,i=xi,o=!1,s=!1,l=n,a=0,u=!1,c,f;if(f=e.input.charCodeAt(e.position),f===124)r=!1;else if(f===62)r=!0;else return!1;for(e.kind="scalar",e.result="";f!==0;)if(f=e.input.charCodeAt(++e.position),f===43||f===45)xi===i?i=f===43?ys:Uh:H(e,"repeat of a chomping mode identifier");else if((c=Wh(f))>=0)c===0?H(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?H(e,"repeat of an indentation width identifier"):(l=n+c-1,s=!0);else break;if(zn(f)){do f=e.input.charCodeAt(++e.position);while(zn(f));if(f===35)do f=e.input.charCodeAt(++e.position);while(!pn(f)&&f!==0)}for(;f!==0;){for(ho(e),e.lineIndent=0,f=e.input.charCodeAt(e.position);(!s||e.lineIndent<l)&&f===32;)e.lineIndent++,f=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>l&&(l=e.lineIndent),pn(f)){a++;continue}if(e.lineIndent<l){i===ys?e.result+=xn.repeat(`
`,o?1+a:a):i===xi&&o&&(e.result+=`
`);break}for(r?zn(f)?(u=!0,e.result+=xn.repeat(`
`,o?1+a:a)):u?(u=!1,e.result+=xn.repeat(`
`,a+1)):a===0?o&&(e.result+=" "):e.result+=xn.repeat(`
`,a):e.result+=xn.repeat(`
`,o?1+a:a),o=!0,s=!0,a=0,t=e.position;!pn(f)&&f!==0;)f=e.input.charCodeAt(++e.position);In(e,t,e.position,!1)}return!0}function ks(e,n){var t,r=e.tag,i=e.anchor,o=[],s,l=!1,a;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),a=e.input.charCodeAt(e.position);a!==0&&!(a!==45||(s=e.input.charCodeAt(e.position+1),!$e(s)));){if(l=!0,e.position++,ge(e,!0,-1)&&e.lineIndent<=n){o.push(null),a=e.input.charCodeAt(e.position);continue}if(t=e.line,_t(e,n,pa,!1,!0),o.push(e.result),ge(e,!0,-1),a=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&a!==0)H(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return l?(e.tag=r,e.anchor=i,e.kind="sequence",e.result=o,!0):!1}function ng(e,n,t){var r,i,o,s,l=e.tag,a=e.anchor,u={},c={},f=null,d=null,g=null,v=!1,k=!1,T;for(e.anchor!==null&&(e.anchorMap[e.anchor]=u),T=e.input.charCodeAt(e.position);T!==0;){if(r=e.input.charCodeAt(e.position+1),o=e.line,s=e.position,(T===63||T===58)&&$e(r))T===63?(v&&(ot(e,u,c,f,d,null),f=d=g=null),k=!0,v=!0,i=!0):v?(v=!1,i=!0):H(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,T=r;else if(_t(e,t,fa,!1,!0))if(e.line===o){for(T=e.input.charCodeAt(e.position);zn(T);)T=e.input.charCodeAt(++e.position);if(T===58)T=e.input.charCodeAt(++e.position),$e(T)||H(e,"a whitespace character is expected after the key-value separator within a block mapping"),v&&(ot(e,u,c,f,d,null),f=d=g=null),k=!0,v=!1,i=!1,f=e.tag,d=e.result;else if(k)H(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=l,e.anchor=a,!0}else if(k)H(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=l,e.anchor=a,!0;else break;if((e.line===o||e.lineIndent>n)&&(_t(e,n,jr,!0,i)&&(v?d=e.result:g=e.result),v||(ot(e,u,c,f,d,g,o,s),f=d=g=null),ge(e,!0,-1),T=e.input.charCodeAt(e.position)),e.lineIndent>n&&T!==0)H(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return v&&ot(e,u,c,f,d,null),k&&(e.tag=l,e.anchor=a,e.kind="mapping",e.result=u),k}function tg(e){var n,t=!1,r=!1,i,o,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&H(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(r=!0,i="!!",s=e.input.charCodeAt(++e.position)):i="!",n=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(o=e.input.slice(n,e.position),s=e.input.charCodeAt(++e.position)):H(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!$e(s);)s===33&&(r?H(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(n-1,e.position+1),da.test(i)||H(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),s=e.input.charCodeAt(++e.position);o=e.input.slice(n,e.position),Vh.test(o)&&H(e,"tag suffix cannot contain flow indicator characters")}return o&&!ha.test(o)&&H(e,"tag name cannot contain such characters: "+o),t?e.tag=o:$n.call(e.tagMap,i)?e.tag=e.tagMap[i]+o:i==="!"?e.tag="!"+o:i==="!!"?e.tag="tag:yaml.org,2002:"+o:H(e,'undeclared tag handle "'+i+'"'),!0}function rg(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&H(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!$e(t)&&!it(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&H(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function ig(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!$e(r)&&!it(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&H(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),$n.call(e.anchorMap,t)||H(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],ge(e,!0,-1),!0}function _t(e,n,t,r,i){var o,s,l,a=1,u=!1,c=!1,f,d,g,v,k;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=s=l=jr===t||pa===t,r&&ge(e,!0,-1)&&(u=!0,e.lineIndent>n?a=1:e.lineIndent===n?a=0:e.lineIndent<n&&(a=-1)),a===1)for(;tg(e)||rg(e);)ge(e,!0,-1)?(u=!0,l=o,e.lineIndent>n?a=1:e.lineIndent===n?a=0:e.lineIndent<n&&(a=-1)):l=!1;if(l&&(l=u||i),(a===1||jr===t)&&(Lr===t||fa===t?v=n:v=n+1,k=e.position-e.lineStart,a===1?l&&(ks(e,k)||ng(e,k,v))||Xh(e,v)?c=!0:(s&&eg(e,v)||Qh(e,v)||Zh(e,v)?c=!0:ig(e)?(c=!0,(e.tag!==null||e.anchor!==null)&&H(e,"alias node should not have any properties")):Jh(e,v,Lr===t)&&(c=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):a===0&&(c=l&&ks(e,k))),e.tag!==null&&e.tag!=="!")if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&H(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),f=0,d=e.implicitTypes.length;f<d;f+=1)if(g=e.implicitTypes[f],g.resolve(e.result)){e.result=g.construct(e.result),e.tag=g.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else $n.call(e.typeMap[e.kind||"fallback"],e.tag)?(g=e.typeMap[e.kind||"fallback"][e.tag],e.result!==null&&g.kind!==e.kind&&H(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+g.kind+'", not "'+e.kind+'"'),g.resolve(e.result)?(e.result=g.construct(e.result),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):H(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):H(e,"unknown tag !<"+e.tag+">");return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||c}function og(e){var n=e.position,t,r,i,o=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};(s=e.input.charCodeAt(e.position))!==0&&(ge(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(o=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!$e(s);)s=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),i=[],r.length<1&&H(e,"directive name must not be less than one character in length");s!==0;){for(;zn(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!pn(s));break}if(pn(s))break;for(t=e.position;s!==0&&!$e(s);)s=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}s!==0&&ho(e),$n.call(xs,r)?xs[r](e,r,i):Nr(e,'unknown document directive "'+r+'"')}if(ge(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,ge(e,!0,-1)):o&&H(e,"directives end mark is expected"),_t(e,e.lineIndent-1,jr,!1,!0),ge(e,!0,-1),e.checkLineBreaks&&zh.test(e.input.slice(n,e.position))&&Nr(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&ri(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,ge(e,!0,-1));return}if(e.position<e.length-1)H(e,"end of the stream or a document separator is expected");else return}function ya(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new Yh(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,H(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)og(t);return t.documents}function ba(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var r=ya(e,t);if(typeof n!="function")return r;for(var i=0,o=r.length;i<o;i+=1)n(r[i])}function va(e,n){var t=ya(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new ca("expected a single document in the stream, but found more")}}function sg(e,n,t){return typeof n=="object"&&n!==null&&typeof t>"u"&&(t=n,n=null),ba(e,n,xn.extend({schema:ua},t))}function lg(e,n){return va(e,xn.extend({schema:ua},n))}Wt.loadAll=ba;Wt.load=va;Wt.safeLoadAll=sg;Wt.safeLoad=lg;var mo={},Jt=Ke,Qt=Gt,ag=ti,cg=Yt,xa=Object.prototype.toString,wa=Object.prototype.hasOwnProperty,ug=9,zt=10,fg=13,pg=32,dg=33,hg=34,ka=35,gg=37,mg=38,_g=39,yg=42,Sa=44,bg=45,Aa=58,vg=61,xg=62,wg=63,kg=64,Ta=91,Ea=93,Sg=96,Ca=123,Ag=124,Pa=125,Ee={};Ee[0]="\\0";Ee[7]="\\a";Ee[8]="\\b";Ee[9]="\\t";Ee[10]="\\n";Ee[11]="\\v";Ee[12]="\\f";Ee[13]="\\r";Ee[27]="\\e";Ee[34]='\\"';Ee[92]="\\\\";Ee[133]="\\N";Ee[160]="\\_";Ee[8232]="\\L";Ee[8233]="\\P";var Tg=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function Eg(e,n){var t,r,i,o,s,l,a;if(n===null)return{};for(t={},r=Object.keys(n),i=0,o=r.length;i<o;i+=1)s=r[i],l=String(n[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),a=e.compiledTypeMap.fallback[s],a&&wa.call(a.styleAliases,l)&&(l=a.styleAliases[l]),t[s]=l;return t}function Ss(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new Qt("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+Jt.repeat("0",r-n.length)+n}function Cg(e){this.schema=e.schema||ag,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Jt.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Eg(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function As(e,n){for(var t=Jt.repeat(" ",n),r=0,i=-1,o="",s,l=e.length;r<l;)i=e.indexOf(`
`,r),i===-1?(s=e.slice(r),r=l):(s=e.slice(r,i+1),r=i+1),s.length&&s!==`
`&&(o+=t),o+=s;return o}function Li(e,n){return`
`+Jt.repeat(" ",e.indent*n)}function Pg(e,n){var t,r,i;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(i=e.implicitTypes[t],i.resolve(n))return!0;return!1}function _o(e){return e===pg||e===ug}function yt(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==65279||65536<=e&&e<=1114111}function Rg(e){return yt(e)&&!_o(e)&&e!==65279&&e!==fg&&e!==zt}function Ts(e,n){return yt(e)&&e!==65279&&e!==Sa&&e!==Ta&&e!==Ea&&e!==Ca&&e!==Pa&&e!==Aa&&(e!==ka||n&&Rg(n))}function Og(e){return yt(e)&&e!==65279&&!_o(e)&&e!==bg&&e!==wg&&e!==Aa&&e!==Sa&&e!==Ta&&e!==Ea&&e!==Ca&&e!==Pa&&e!==ka&&e!==mg&&e!==yg&&e!==dg&&e!==Ag&&e!==vg&&e!==xg&&e!==_g&&e!==hg&&e!==gg&&e!==kg&&e!==Sg}function Ra(e){var n=/^\n* /;return n.test(e)}var Oa=1,Ia=2,$a=3,Ma=4,ur=5;function Ig(e,n,t,r,i){var o,s,l,a=!1,u=!1,c=r!==-1,f=-1,d=Og(e.charCodeAt(0))&&!_o(e.charCodeAt(e.length-1));if(n)for(o=0;o<e.length;o++){if(s=e.charCodeAt(o),!yt(s))return ur;l=o>0?e.charCodeAt(o-1):null,d=d&&Ts(s,l)}else{for(o=0;o<e.length;o++){if(s=e.charCodeAt(o),s===zt)a=!0,c&&(u=u||o-f-1>r&&e[f+1]!==" ",f=o);else if(!yt(s))return ur;l=o>0?e.charCodeAt(o-1):null,d=d&&Ts(s,l)}u=u||c&&o-f-1>r&&e[f+1]!==" "}return!a&&!u?d&&!i(e)?Oa:Ia:t>9&&Ra(e)?ur:u?Ma:$a}function $g(e,n,t,r){e.dump=function(){if(n.length===0)return"''";if(!e.noCompatMode&&Tg.indexOf(n)!==-1)return"'"+n+"'";var i=e.indent*Math.max(1,t),o=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-i),s=r||e.flowLevel>-1&&t>=e.flowLevel;function l(a){return Pg(e,a)}switch(Ig(n,s,e.indent,o,l)){case Oa:return n;case Ia:return"'"+n.replace(/'/g,"''")+"'";case $a:return"|"+Es(n,e.indent)+Cs(As(n,i));case Ma:return">"+Es(n,e.indent)+Cs(As(Mg(n,o),i));case ur:return'"'+Fg(n)+'"';default:throw new Qt("impossible error: invalid scalar style")}}()}function Es(e,n){var t=Ra(e)?String(n):"",r=e[e.length-1]===`
`,i=r&&(e[e.length-2]===`
`||e===`
`),o=i?"+":r?"":"-";return t+o+`
`}function Cs(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Mg(e,n){for(var t=/(\n+)([^\n]*)/g,r=function(){var u=e.indexOf(`
`);return u=u!==-1?u:e.length,t.lastIndex=u,Ps(e.slice(0,u),n)}(),i=e[0]===`
`||e[0]===" ",o,s;s=t.exec(e);){var l=s[1],a=s[2];o=a[0]===" ",r+=l+(!i&&!o&&a!==""?`
`:"")+Ps(a,n),i=o}return r}function Ps(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,i=0,o,s=0,l=0,a="";r=t.exec(e);)l=r.index,l-i>n&&(o=s>i?s:l,a+=`
`+e.slice(i,o),i=o+1),s=l;return a+=`
`,e.length-i>n&&s>i?a+=e.slice(i,s)+`
`+e.slice(s+1):a+=e.slice(i),a.slice(1)}function Fg(e){for(var n="",t,r,i,o=0;o<e.length;o++){if(t=e.charCodeAt(o),t>=55296&&t<=56319&&(r=e.charCodeAt(o+1),r>=56320&&r<=57343)){n+=Ss((t-55296)*1024+r-56320+65536),o++;continue}i=Ee[t],n+=!i&&yt(t)?e[o]:i||Ss(t)}return n}function Dg(e,n,t){var r="",i=e.tag,o,s;for(o=0,s=t.length;o<s;o+=1)Kn(e,n,t[o],!1,!1)&&(o!==0&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=i,e.dump="["+r+"]"}function Lg(e,n,t,r){var i="",o=e.tag,s,l;for(s=0,l=t.length;s<l;s+=1)Kn(e,n+1,t[s],!0,!0)&&((!r||s!==0)&&(i+=Li(e,n)),e.dump&&zt===e.dump.charCodeAt(0)?i+="-":i+="- ",i+=e.dump);e.tag=o,e.dump=i||"[]"}function jg(e,n,t){var r="",i=e.tag,o=Object.keys(t),s,l,a,u,c;for(s=0,l=o.length;s<l;s+=1)c="",s!==0&&(c+=", "),e.condenseFlow&&(c+='"'),a=o[s],u=t[a],Kn(e,n,a,!1,!1)&&(e.dump.length>1024&&(c+="? "),c+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Kn(e,n,u,!1,!1)&&(c+=e.dump,r+=c));e.tag=i,e.dump="{"+r+"}"}function Ng(e,n,t,r){var i="",o=e.tag,s=Object.keys(t),l,a,u,c,f,d;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new Qt("sortKeys must be a boolean or a function");for(l=0,a=s.length;l<a;l+=1)d="",(!r||l!==0)&&(d+=Li(e,n)),u=s[l],c=t[u],Kn(e,n+1,u,!0,!0,!0)&&(f=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,f&&(e.dump&&zt===e.dump.charCodeAt(0)?d+="?":d+="? "),d+=e.dump,f&&(d+=Li(e,n)),Kn(e,n+1,c,!0,f)&&(e.dump&&zt===e.dump.charCodeAt(0)?d+=":":d+=": ",d+=e.dump,i+=d));e.tag=o,e.dump=i||"{}"}function Rs(e,n,t){var r,i,o,s,l,a;for(i=t?e.explicitTypes:e.implicitTypes,o=0,s=i.length;o<s;o+=1)if(l=i[o],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof n=="object"&&n instanceof l.instanceOf)&&(!l.predicate||l.predicate(n))){if(e.tag=t?l.tag:"?",l.represent){if(a=e.styleMap[l.tag]||l.defaultStyle,xa.call(l.represent)==="[object Function]")r=l.represent(n,a);else if(wa.call(l.represent,a))r=l.represent[a](n,a);else throw new Qt("!<"+l.tag+'> tag resolver accepts not "'+a+'" style');e.dump=r}return!0}return!1}function Kn(e,n,t,r,i,o){e.tag=null,e.dump=t,Rs(e,t,!1)||Rs(e,t,!0);var s=xa.call(e.dump);r&&(r=e.flowLevel<0||e.flowLevel>n);var l=s==="[object Object]"||s==="[object Array]",a,u;if(l&&(a=e.duplicates.indexOf(t),u=a!==-1),(e.tag!==null&&e.tag!=="?"||u||e.indent!==2&&n>0)&&(i=!1),u&&e.usedDuplicates[a])e.dump="*ref_"+a;else{if(l&&u&&!e.usedDuplicates[a]&&(e.usedDuplicates[a]=!0),s==="[object Object]")r&&Object.keys(e.dump).length!==0?(Ng(e,n,e.dump,i),u&&(e.dump="&ref_"+a+e.dump)):(jg(e,n,e.dump),u&&(e.dump="&ref_"+a+" "+e.dump));else if(s==="[object Array]"){var c=e.noArrayIndent&&n>0?n-1:n;r&&e.dump.length!==0?(Lg(e,c,e.dump,i),u&&(e.dump="&ref_"+a+e.dump)):(Dg(e,c,e.dump),u&&(e.dump="&ref_"+a+" "+e.dump))}else if(s==="[object String]")e.tag!=="?"&&$g(e,e.dump,n,o);else{if(e.skipInvalid)return!1;throw new Qt("unacceptable kind of an object to dump "+s)}e.tag!==null&&e.tag!=="?"&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function Hg(e,n){var t=[],r=[],i,o;for(ji(e,t,r),i=0,o=r.length;i<o;i+=1)n.duplicates.push(t[r[i]]);n.usedDuplicates=new Array(o)}function ji(e,n,t){var r,i,o;if(e!==null&&typeof e=="object")if(i=n.indexOf(e),i!==-1)t.indexOf(i)===-1&&t.push(i);else if(n.push(e),Array.isArray(e))for(i=0,o=e.length;i<o;i+=1)ji(e[i],n,t);else for(r=Object.keys(e),i=0,o=r.length;i<o;i+=1)ji(e[r[i]],n,t)}function Fa(e,n){n=n||{};var t=new Cg(n);return t.noRefs||Hg(e,t),Kn(t,0,e,!0,!0)?t.dump+`
`:""}function Ug(e,n){return Fa(e,Jt.extend({schema:cg},n))}mo.dump=Fa;mo.safeDump=Ug;var ii=Wt,Da=mo;function oi(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}de.Type=be;de.Schema=bt;de.FAILSAFE_SCHEMA=fo;de.JSON_SCHEMA=ia;de.CORE_SCHEMA=oa;de.DEFAULT_SAFE_SCHEMA=Yt;de.DEFAULT_FULL_SCHEMA=ti;de.load=ii.load;de.loadAll=ii.loadAll;de.safeLoad=ii.safeLoad;de.safeLoadAll=ii.safeLoadAll;de.dump=Da.dump;de.safeDump=Da.safeDump;de.YAMLException=Gt;de.MINIMAL_SCHEMA=fo;de.SAFE_SCHEMA=Yt;de.DEFAULT_SCHEMA=ti;de.scan=oi("scan");de.parse=oi("parse");de.compose=oi("compose");de.addConstructor=oi("addConstructor");var Bg=de,zg=Bg,Os=zg,Vg="\\ufeff?",qg=typeof process<"u"?process.platform:"",Kg="^("+Vg+"(= yaml =|---)$([\\s\\S]*?)^(?:\\2|\\.\\.\\.)\\s*$"+(qg==="win32"?"\\r?":"")+"(?:\\n)?)",La=new RegExp(Kg,"m");co.exports=Wg;co.exports.test=Jg;function Wg(e,n){e=e||"";var t={allowUnsafe:!1};n=n instanceof Object?{...t,...n}:t,n.allowUnsafe=!!n.allowUnsafe;var r=e.split(/(\r?\n)/);return r[0]&&/= yaml =|---/.test(r[0])?Yg(e,n.allowUnsafe):{attributes:{},body:e,bodyBegin:1}}function Gg(e,n){for(var t=1,r=n.indexOf(`
`),i=e.index+e[0].length;r!==-1;){if(r>=i)return t;t++,r=n.indexOf(`
`,r+1)}return t}function Yg(e,n){var t=La.exec(e);if(!t)return{attributes:{},body:e,bodyBegin:1};var r=n?Os.load:Os.safeLoad,i=t[t.length-1].replace(/^\s+|\s+$/g,""),o=r(i)||{},s=e.replace(t[0],""),l=Gg(t,e);return{attributes:o,body:s,bodyBegin:l,frontmatter:i}}function Jg(e){return e=e||"",La.test(e)}var Qg=co.exports;const Qe=Wp(Qg),Zg="/images/avatar.jpg";const Xg={setup(){const e=Oe([]),n=Oe([]),t=Oe([]),r=i=>{const o=new Date(i);return`${o.getFullYear()}年${o.getMonth()+1}月${o.getDate()}日`};return hn(async()=>{let i,o,s;try{i=Object.assign({"/content/blog/css-grid-layout.md":yr,"/content/blog/frontend-performance.md":br,"/content/blog/hello-world.md":vr,"/content/blog/javascript-async.md":xr,"/content/blog/react-hooks.md":wr,"/content/blog/test.md":kr,"/content/blog/typescript-tips.md":Sr,"/content/blog/vue-components.md":Ar,"/content/blog/web-accessibility.md":Tr}),o=Object.assign({"/content/notes/coffee-shop.md":Er,"/content/notes/college.md":Cr,"/content/notes/digital-minimalism.md":Pr,"/content/notes/good.md":Rr,"/content/notes/reading-book.md":Or}),s=Object.assign({"/content/works/markdown-editor.md":Ir,"/content/works/reading-tracker.md":$r,"/content/works/tailwind-resume.md":Mr,"/content/works/vue-component-library.md":Fr})}catch{try{i=Object.assign({}),o=Object.assign({}),s=Object.assign({})}catch(f){console.error("Failed to load content files",f);return}}const l=Object.entries(i).map(([c,f])=>{const{attributes:d}=Qe(f),g=c.split("/").pop().replace(".md","");return{id:g,title:d.title||"Untitled",date:d.date||new Date().toISOString(),excerpt:d.description||"",category:"blog",path:`/blog/${g}`,github:d.github||null}}),a=Object.entries(o).map(([c,f])=>{const{attributes:d}=Qe(f),g=c.split("/").pop().replace(".md","");return{id:g,title:d.title||"Untitled",date:d.date||new Date().toISOString(),excerpt:d.description||"",category:"notes",path:`/notes/${g}`,github:d.github||null}}),u=Object.entries(s).map(([c,f])=>{const{attributes:d}=Qe(f),g=c.split("/").pop().replace(".md","");return{id:g,title:d.title||"Untitled",date:d.date||new Date().toISOString(),excerpt:d.description||"",category:"works",path:`/works/${g}`,github:d.github||null}});e.value=l.sort((c,f)=>new Date(f.date)-new Date(c.date)).slice(0,3),n.value=a.sort((c,f)=>new Date(f.date)-new Date(c.date)).slice(0,3),t.value=u.sort((c,f)=>new Date(f.date)-new Date(c.date)).slice(0,3)}),{blogPosts:e,notesPosts:n,worksPosts:t,formatDate:r}}},em={class:"index"},nm={class:"section"},tm={class:"post-list"},rm={class:"post-title"},im={class:"post-meta"},om={class:"post-excerpt"},sm={class:"section"},lm={class:"post-list"},am={class:"post-title"},cm={class:"post-meta"},um={class:"post-excerpt"},fm={class:"section"},pm={class:"post-list"},dm={class:"post-title"},hm={class:"post-meta"},gm={class:"post-excerpt"},mm={key:0,class:"work-links"},_m=["href"];function ym(e,n,t,r,i,o){const s=dt("router-link");return te(),ie("div",em,[n[3]||(n[3]=S("section",{class:"welcome-section"},[S("div",{class:"avatar-container"},[S("img",{src:Zg,alt:"个人头像",class:"avatar"})]),S("div",{class:"intro-text"},[S("p",null,"欢迎来到我的网站，我是Jasper，这里记录我的思考、学习和创造。")])],-1)),S("section",nm,[n[0]||(n[0]=S("h2",{class:"section-title"},"博客",-1)),S("div",tm,[(te(!0),ie(Re,null,ft(r.blogPosts,l=>(te(),ie("article",{key:l.id,class:"post-item"},[S("h3",rm,[oe(s,{to:l.path},{default:He(()=>[Ue(K(l.title),1)]),_:2},1032,["to"])]),S("div",im,[S("time",null,K(r.formatDate(l.date)),1)]),S("p",om,K(l.excerpt),1)]))),128))])]),S("section",sm,[n[1]||(n[1]=S("h2",{class:"section-title"},"偶记",-1)),S("div",lm,[(te(!0),ie(Re,null,ft(r.notesPosts,l=>(te(),ie("article",{key:l.id,class:"post-item"},[S("h3",am,[oe(s,{to:l.path},{default:He(()=>[Ue(K(l.title),1)]),_:2},1032,["to"])]),S("div",cm,[S("time",null,K(r.formatDate(l.date)),1)]),S("p",um,K(l.excerpt),1)]))),128))])]),S("section",fm,[n[2]||(n[2]=S("h2",{class:"section-title"},"作品",-1)),S("div",pm,[(te(!0),ie(Re,null,ft(r.worksPosts,l=>(te(),ie("article",{key:l.id,class:"post-item"},[S("h3",dm,[oe(s,{to:l.path},{default:He(()=>[Ue(K(l.title),1)]),_:2},1032,["to"])]),S("div",hm,[S("time",null,K(r.formatDate(l.date)),1)]),S("p",gm,K(l.excerpt),1),l.github?(te(),ie("div",mm,[S("a",{href:l.github,target:"_blank",rel:"noopener",class:"github-link"},"GitHub",8,_m)])):Ze("",!0)]))),128))])])])}const bm=gn(Xg,[["render",ym],["__scopeId","data-v-052e9aa5"]]);const vm={setup(){const e=Oe([]),n=Oe(1),t=8,r=xe(()=>Math.ceil(e.value.length/t)),i=xe(()=>{const l=(n.value-1)*t,a=l+t;return e.value.slice(l,a)}),o=l=>{l>=1&&l<=r.value&&(n.value=l,window.scrollTo(0,0))},s=l=>{const a=new Date(l);return`${a.getFullYear()}年${a.getMonth()+1}月${a.getDate()}日`};return hn(async()=>{let l;try{l=Object.assign({"/content/blog/css-grid-layout.md":yr,"/content/blog/frontend-performance.md":br,"/content/blog/hello-world.md":vr,"/content/blog/javascript-async.md":xr,"/content/blog/react-hooks.md":wr,"/content/blog/test.md":kr,"/content/blog/typescript-tips.md":Sr,"/content/blog/vue-components.md":Ar,"/content/blog/web-accessibility.md":Tr})}catch{l=Object.assign({})}if(!l||Object.keys(l).length===0)try{l=Object.assign({"../../content/blog/css-grid-layout.md":yr,"../../content/blog/frontend-performance.md":br,"../../content/blog/hello-world.md":vr,"../../content/blog/javascript-async.md":xr,"../../content/blog/react-hooks.md":wr,"../../content/blog/test.md":kr,"../../content/blog/typescript-tips.md":Sr,"../../content/blog/vue-components.md":Ar,"../../content/blog/web-accessibility.md":Tr})}catch(u){console.error("Failed to load blog posts",u);return}const a=Object.entries(l).map(([u,c])=>{const{attributes:f}=Qe(c);return{id:u.split("/").pop().replace(".md",""),title:f.title||"Untitled",date:f.date||new Date().toISOString(),excerpt:f.description||"",category:f.category||"blog"}});e.value=a.sort((u,c)=>new Date(c.date)-new Date(u.date))}),{paginatedPosts:i,currentPage:n,totalPages:r,changePage:o,formatDate:s}}},xm={class:"blog"},wm={class:"post-list"},km={class:"post-title"},Sm={class:"post-meta"},Am={class:"post-excerpt"},Tm={key:0,class:"pagination"},Em=["disabled"],Cm={class:"page-info"},Pm=["disabled"];function Rm(e,n,t,r,i,o){const s=dt("router-link");return te(),ie("div",xm,[n[2]||(n[2]=S("h1",{class:"page-title"},"博客",-1)),S("div",wm,[(te(!0),ie(Re,null,ft(r.paginatedPosts,l=>(te(),ie("article",{key:l.id,class:"post-item"},[S("h2",km,[oe(s,{to:"/blog/"+l.id},{default:He(()=>[Ue(K(l.title),1)]),_:2},1032,["to"])]),S("div",Sm,[S("time",null,K(r.formatDate(l.date)),1)]),S("p",Am,K(l.excerpt),1)]))),128))]),r.totalPages>1?(te(),ie("div",Tm,[S("button",{class:"pagination-btn",disabled:r.currentPage===1,onClick:n[0]||(n[0]=l=>r.changePage(r.currentPage-1))}," 上一页 ",8,Em),S("span",Cm,K(r.currentPage)+" / "+K(r.totalPages),1),S("button",{class:"pagination-btn",disabled:r.currentPage===r.totalPages,onClick:n[1]||(n[1]=l=>r.changePage(r.currentPage+1))}," 下一页 ",8,Pm)])):Ze("",!0)])}const Om=gn(vm,[["render",Rm],["__scopeId","data-v-e2d5259e"]]),Im="modulepreload",$m=function(e){return"/"+e},Is={},he=function(n,t,r){if(!t||t.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=$m(o),o in Is)return;Is[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const f=i[c];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Im,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},yo=(e,n)=>{const t=e[n];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+n)))})};function bo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Yn=bo();function ja(e){Yn=e}const Na=/[&<>"']/,Mm=new RegExp(Na.source,"g"),Ha=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Fm=new RegExp(Ha.source,"g"),Dm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$s=e=>Dm[e];function Ne(e,n){if(n){if(Na.test(e))return e.replace(Mm,$s)}else if(Ha.test(e))return e.replace(Fm,$s);return e}const Lm=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function jm(e){return e.replace(Lm,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Nm=/(^|[^\[])\^/g;function ee(e,n){e=typeof e=="string"?e:e.source,n=n||"";const t={replace:(r,i)=>(i=typeof i=="object"&&"source"in i?i.source:i,i=i.replace(Nm,"$1"),e=e.replace(r,i),t),getRegex:()=>new RegExp(e,n)};return t}function Ms(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Hr={exec:()=>null};function Fs(e,n){const t=e.replace(/\|/g,(o,s,l)=>{let a=!1,u=s;for(;--u>=0&&l[u]==="\\";)a=!a;return a?"|":" |"}),r=t.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function rr(e,n,t){const r=e.length;if(r===0)return"";let i=0;for(;i<r;){const o=e.charAt(r-i-1);if(o===n&&!t)i++;else if(o!==n&&t)i++;else break}return e.slice(0,r-i)}function Hm(e,n){if(e.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===n[0])t++;else if(e[r]===n[1]&&(t--,t<0))return r;return-1}function Ds(e,n,t,r){const i=n.href,o=n.title?Ne(n.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:t,href:i,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,l}return{type:"image",raw:t,href:i,title:o,text:Ne(s)}}function Um(e,n){const t=e.match(/^(\s+)(?:```)/);if(t===null)return n;const r=t[1];return n.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[s]=o;return s.length>=r.length?i.slice(r.length):i}).join(`
`)}class Ur{constructor(n){ce(this,"options");ce(this,"rules");ce(this,"lexer");this.options=n||Yn}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:rr(r,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const r=t[0],i=Um(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let r=t[2].trim();if(/#$/.test(r)){const i=rr(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const r=rr(t[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const o=this.lexer.blockTokens(r);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:o,text:r}}}list(n){let t=this.rules.block.list.exec(n);if(t){let r=t[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",a="",u=!1;for(;n;){let c=!1;if(!(t=s.exec(n))||this.rules.block.hr.test(n))break;l=t[0],n=n.substring(l.length);let f=t[2].split(`
`,1)[0].replace(/^\t+/,j=>" ".repeat(3*j.length)),d=n.split(`
`,1)[0],g=0;this.options.pedantic?(g=2,a=f.trimStart()):(g=t[2].search(/[^ ]/),g=g>4?1:g,a=f.slice(g),g+=t[1].length);let v=!1;if(!f&&/^ *$/.test(d)&&(l+=d+`
`,n=n.substring(d.length+1),c=!0),!c){const j=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),M=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),N=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),$=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;n;){const G=n.split(`
`,1)[0];if(d=G,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),N.test(d)||$.test(d)||j.test(d)||M.test(n))break;if(d.search(/[^ ]/)>=g||!d.trim())a+=`
`+d.slice(g);else{if(v||f.search(/[^ ]/)>=4||N.test(f)||$.test(f)||M.test(f))break;a+=`
`+d}!v&&!d.trim()&&(v=!0),l+=G+`
`,n=n.substring(G.length+1),f=d.slice(g)}}o.loose||(u?o.loose=!0:/\n *\n *$/.test(l)&&(u=!0));let k=null,T;this.options.gfm&&(k=/^\[[ xX]\] /.exec(a),k&&(T=k[0]!=="[ ] ",a=a.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:l,task:!!k,checked:T,loose:!1,text:a,tokens:[]}),o.raw+=l}o.items[o.items.length-1].raw=l.trimEnd(),o.items[o.items.length-1].text=a.trimEnd(),o.raw=o.raw.trimEnd();for(let c=0;c<o.items.length;c++)if(this.lexer.state.top=!1,o.items[c].tokens=this.lexer.blockTokens(o.items[c].text,[]),!o.loose){const f=o.items[c].tokens.filter(g=>g.type==="space"),d=f.length>0&&f.some(g=>/\n.*\n/.test(g.raw));o.loose=d}if(o.loose)for(let c=0;c<o.items.length;c++)o.items[c].loose=!0;return o}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:i,title:o}}}table(n){const t=this.rules.block.table.exec(n);if(t){if(!/[:|]/.test(t[2]))return;const r={type:"table",raw:t[0],header:Fs(t[1]).map(i=>({text:i,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){let i=r.align.length,o,s,l,a;for(o=0;o<i;o++){const u=r.align[o];u&&(/^ *-+: *$/.test(u)?r.align[o]="right":/^ *:-+: *$/.test(u)?r.align[o]="center":/^ *:-+ *$/.test(u)?r.align[o]="left":r.align[o]=null)}for(i=r.rows.length,o=0;o<i;o++)r.rows[o]=Fs(r.rows[o],r.header.length).map(u=>({text:u,tokens:[]}));for(i=r.header.length,s=0;s<i;s++)r.header[s].tokens=this.lexer.inline(r.header[s].text);for(i=r.rows.length,s=0;s<i;s++)for(a=r.rows[s],l=0;l<a.length;l++)a[l].tokens=this.lexer.inline(a[l].text);return r}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Ne(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=rr(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=Hm(t[2],"()");if(s>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],o=s[3])}else o=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),Ds(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let r;if((r=this.rules.inline.reflink.exec(n))||(r=this.rules.inline.nolink.exec(n))){let i=(r[2]||r[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return Ds(r,i,r[0],this.lexer)}}emStrong(n,t,r=""){let i=this.rules.inline.emStrong.lDelim.exec(n);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...i[0]].length-1;let l,a,u=s,c=0;const f=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*n.length+s);(i=f.exec(t))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(a=[...l].length,i[3]||i[4]){u+=a;continue}else if((i[5]||i[6])&&s%3&&!((s+a)%3)){c+=a;continue}if(u-=a,u>0)continue;a=Math.min(a,a+u+c);const d=[...i[0]][0].length,g=n.slice(0,s+i.index+d+a);if(Math.min(s,a)%2){const k=g.slice(1,-1);return{type:"em",raw:g,text:k,tokens:this.lexer.inlineTokens(k)}}const v=g.slice(2,-2);return{type:"strong",raw:g,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let r=t[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Ne(r,!0),{type:"codespan",raw:t[0],text:r}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let r,i;return t[2]==="@"?(r=Ne(t[1]),i="mailto:"+r):(r=Ne(t[1]),i=r),{type:"link",raw:t[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(n){let t;if(t=this.rules.inline.url.exec(n)){let r,i;if(t[2]==="@")r=Ne(t[0]),i="mailto:"+r;else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(o!==t[0]);r=Ne(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let r;return this.lexer.state.inRawBlock?r=t[0]:r=Ne(t[0]),{type:"text",raw:t[0],text:r}}}}const L={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Hr,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};L._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;L._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;L.def=ee(L.def).replace("label",L._label).replace("title",L._title).getRegex();L.bullet=/(?:[*+-]|\d{1,9}[.)])/;L.listItemStart=ee(/^( *)(bull) */).replace("bull",L.bullet).getRegex();L.list=ee(L.list).replace(/bull/g,L.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+L.def.source+")").getRegex();L._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";L._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;L.html=ee(L.html,"i").replace("comment",L._comment).replace("tag",L._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();L.lheading=ee(L.lheading).replace(/bull/g,L.bullet).getRegex();L.paragraph=ee(L._paragraph).replace("hr",L.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex();L.blockquote=ee(L.blockquote).replace("paragraph",L.paragraph).getRegex();L.normal={...L};L.gfm={...L.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};L.gfm.table=ee(L.gfm.table).replace("hr",L.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex();L.gfm.paragraph=ee(L._paragraph).replace("hr",L.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",L.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex();L.pedantic={...L.normal,html:ee(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",L._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Hr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ee(L.normal._paragraph).replace("hr",L.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",L.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const R={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Hr,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Hr,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};R._punctuation="\\p{P}$+<=>`^|~";R.punctuation=ee(R.punctuation,"u").replace(/punctuation/g,R._punctuation).getRegex();R.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;R.anyPunctuation=/\\[punct]/g;R._escapes=/\\([punct])/g;R._comment=ee(L._comment).replace("(?:-->|$)","-->").getRegex();R.emStrong.lDelim=ee(R.emStrong.lDelim,"u").replace(/punct/g,R._punctuation).getRegex();R.emStrong.rDelimAst=ee(R.emStrong.rDelimAst,"gu").replace(/punct/g,R._punctuation).getRegex();R.emStrong.rDelimUnd=ee(R.emStrong.rDelimUnd,"gu").replace(/punct/g,R._punctuation).getRegex();R.anyPunctuation=ee(R.anyPunctuation,"gu").replace(/punct/g,R._punctuation).getRegex();R._escapes=ee(R._escapes,"gu").replace(/punct/g,R._punctuation).getRegex();R._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;R._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;R.autolink=ee(R.autolink).replace("scheme",R._scheme).replace("email",R._email).getRegex();R._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;R.tag=ee(R.tag).replace("comment",R._comment).replace("attribute",R._attribute).getRegex();R._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;R._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;R._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;R.link=ee(R.link).replace("label",R._label).replace("href",R._href).replace("title",R._title).getRegex();R.reflink=ee(R.reflink).replace("label",R._label).replace("ref",L._label).getRegex();R.nolink=ee(R.nolink).replace("ref",L._label).getRegex();R.reflinkSearch=ee(R.reflinkSearch,"g").replace("reflink",R.reflink).replace("nolink",R.nolink).getRegex();R.normal={...R};R.pedantic={...R.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ee(/^!?\[(label)\]\((.*?)\)/).replace("label",R._label).getRegex(),reflink:ee(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",R._label).getRegex()};R.gfm={...R.normal,escape:ee(R.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};R.gfm.url=ee(R.gfm.url,"i").replace("email",R.gfm._extended_email).getRegex();R.breaks={...R.gfm,br:ee(R.br).replace("{2,}","*").getRegex(),text:ee(R.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class cn{constructor(n){ce(this,"tokens");ce(this,"options");ce(this,"state");ce(this,"tokenizer");ce(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Yn,this.options.tokenizer=this.options.tokenizer||new Ur,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:L.normal,inline:R.normal};this.options.pedantic?(t.block=L.pedantic,t.inline=R.pedantic):this.options.gfm&&(t.block=L.gfm,this.options.breaks?t.inline=R.breaks:t.inline=R.gfm),this.tokenizer.rules=t}static get rules(){return{block:L,inline:R}}static lex(n,t){return new cn(t).lex(n)}static lexInline(n,t){return new cn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(l,a,u)=>a+"    ".repeat(u.length));let r,i,o,s;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(r=l.call({lexer:this},n,t))?(n=n.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(n)){n=n.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(n)){n=n.substring(r.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(r);continue}if(r=this.tokenizer.fences(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(n)){n=n.substring(r.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+r.raw,i.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(n)){n=n.substring(r.raw.length),t.push(r);continue}if(o=n,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const a=n.slice(1);let u;this.options.extensions.startBlock.forEach(c=>{u=c.call({lexer:this},a),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(o=n.substring(0,l+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){i=t[t.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(r),s=o.length!==n.length,n=n.substring(r.raw.length);continue}if(r=this.tokenizer.text(n)){n=n.substring(r.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(r);continue}if(n){const l="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let r,i,o,s=n,l,a,u;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,l.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(a||(u=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(r=c.call({lexer:this},n,t))?(n=n.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(n)){n=n.substring(r.raw.length),i=t[t.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(r.raw.length),i=t[t.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(n,s,u)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(n)){n=n.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(n))){n=n.substring(r.raw.length),t.push(r);continue}if(o=n,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const f=n.slice(1);let d;this.options.extensions.startInline.forEach(g=>{d=g.call({lexer:this},f),typeof d=="number"&&d>=0&&(c=Math.min(c,d))}),c<1/0&&c>=0&&(o=n.substring(0,c+1))}if(r=this.tokenizer.inlineText(o)){n=n.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(u=r.raw.slice(-1)),a=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):t.push(r);continue}if(n){const c="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}}class Br{constructor(n){ce(this,"options");this.options=n||Yn}code(n,t,r){var o;const i=(o=(t||"").match(/^\S*/))==null?void 0:o[0];return n=n.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+Ne(i)+'">'+(r?n:Ne(n,!0))+`</code></pre>
`:"<pre><code>"+(r?n:Ne(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,r){return`<h${t}>${n}</h${t}>
`}hr(){return`<hr>
`}list(n,t,r){const i=t?"ol":"ul",o=t&&r!==1?' start="'+r+'"':"";return"<"+i+o+`>
`+n+"</"+i+`>
`}listitem(n,t,r){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+n+`</${r}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,t,r){const i=Ms(n);if(i===null)return r;n=i;let o='<a href="'+n+'"';return t&&(o+=' title="'+t+'"'),o+=">"+r+"</a>",o}image(n,t,r){const i=Ms(n);if(i===null)return r;n=i;let o=`<img src="${n}" alt="${r}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(n){return n}}class vo{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,r){return""+r}image(n,t,r){return""+r}br(){return""}}class un{constructor(n){ce(this,"options");ce(this,"renderer");ce(this,"textRenderer");this.options=n||Yn,this.options.renderer=this.options.renderer||new Br,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new vo}static parse(n,t){return new un(t).parse(n)}static parseInline(n,t){return new un(t).parseInline(n)}parse(n,t=!0){let r="";for(let i=0;i<n.length;i++){const o=n[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const s=o,l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){r+=l||"";continue}}switch(o.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{const s=o;r+=this.renderer.heading(this.parseInline(s.tokens),s.depth,jm(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=o;r+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=o;let l="",a="";for(let c=0;c<s.header.length;c++)a+=this.renderer.tablecell(this.parseInline(s.header[c].tokens),{header:!0,align:s.align[c]});l+=this.renderer.tablerow(a);let u="";for(let c=0;c<s.rows.length;c++){const f=s.rows[c];a="";for(let d=0;d<f.length;d++)a+=this.renderer.tablecell(this.parseInline(f[d].tokens),{header:!1,align:s.align[d]});u+=this.renderer.tablerow(a)}r+=this.renderer.table(l,u);continue}case"blockquote":{const s=o,l=this.parse(s.tokens);r+=this.renderer.blockquote(l);continue}case"list":{const s=o,l=s.ordered,a=s.start,u=s.loose;let c="";for(let f=0;f<s.items.length;f++){const d=s.items[f],g=d.checked,v=d.task;let k="";if(d.task){const T=this.renderer.checkbox(!!g);u?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=T+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=T+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:T+" "}):k+=T+" "}k+=this.parse(d.tokens,u),c+=this.renderer.listitem(k,v,!!g)}r+=this.renderer.list(c,l,a);continue}case"html":{const s=o;r+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=o;r+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=o,l=s.tokens?this.parseInline(s.tokens):s.text;for(;i+1<n.length&&n[i+1].type==="text";)s=n[++i],l+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);r+=t?this.renderer.paragraph(l):l;continue}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(n,t){t=t||this.renderer;let r="";for(let i=0;i<n.length;i++){const o=n[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=s||"";continue}}switch(o.type){case"escape":{const s=o;r+=t.text(s.text);break}case"html":{const s=o;r+=t.html(s.text);break}case"link":{const s=o;r+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{const s=o;r+=t.image(s.href,s.title,s.text);break}case"strong":{const s=o;r+=t.strong(this.parseInline(s.tokens,t));break}case"em":{const s=o;r+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{const s=o;r+=t.codespan(s.text);break}case"br":{r+=t.br();break}case"del":{const s=o;r+=t.del(this.parseInline(s.tokens,t));break}case"text":{const s=o;r+=t.text(s.text);break}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}}class Mt{constructor(n){ce(this,"options");this.options=n||Yn}preprocess(n){return n}postprocess(n){return n}}ce(Mt,"passThroughHooks",new Set(["preprocess","postprocess"]));var Vt,Ni,zr,Ua;class Bm{constructor(...n){si(this,Vt);si(this,zr);ce(this,"defaults",bo());ce(this,"options",this.setOptions);ce(this,"parse",Xt(this,Vt,Ni).call(this,cn.lex,un.parse));ce(this,"parseInline",Xt(this,Vt,Ni).call(this,cn.lexInline,un.parseInline));ce(this,"Parser",un);ce(this,"Renderer",Br);ce(this,"TextRenderer",vo);ce(this,"Lexer",cn);ce(this,"Tokenizer",Ur);ce(this,"Hooks",Mt);this.use(...n)}walkTokens(n,t){var i,o;let r=[];for(const s of n)switch(r=r.concat(t.call(this,s)),s.type){case"table":{const l=s;for(const a of l.header)r=r.concat(this.walkTokens(a.tokens,t));for(const a of l.rows)for(const u of a)r=r.concat(this.walkTokens(u.tokens,t));break}case"list":{const l=s;r=r.concat(this.walkTokens(l.items,t));break}default:{const l=s;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[l.type]?this.defaults.extensions.childTokens[l.type].forEach(a=>{r=r.concat(this.walkTokens(l[a],t))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,t)))}}return r}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const s=t.renderers[o.name];s?t.renderers[o.name]=function(...l){let a=o.renderer.apply(this,l);return a===!1&&(a=s.apply(this,l)),a}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=t[o.level];s?s.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),i.extensions=t),r.renderer){const o=this.defaults.renderer||new Br(this.defaults);for(const s in r.renderer){const l=r.renderer[s],a=s,u=o[a];o[a]=(...c)=>{let f=l.apply(o,c);return f===!1&&(f=u.apply(o,c)),f||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new Ur(this.defaults);for(const s in r.tokenizer){const l=r.tokenizer[s],a=s,u=o[a];o[a]=(...c)=>{let f=l.apply(o,c);return f===!1&&(f=u.apply(o,c)),f}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new Mt;for(const s in r.hooks){const l=r.hooks[s],a=s,u=o[a];Mt.passThroughHooks.has(s)?o[a]=c=>{if(this.defaults.async)return Promise.resolve(l.call(o,c)).then(d=>u.call(o,d));const f=l.call(o,c);return u.call(o,f)}:o[a]=(...c)=>{let f=l.apply(o,c);return f===!1&&(f=u.apply(o,c)),f}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,s=r.walkTokens;i.walkTokens=function(l){let a=[];return a.push(s.call(this,l)),o&&(a=a.concat(o.call(this,l))),a}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return cn.lex(n,t??this.defaults)}parser(n,t){return un.parse(n,t??this.defaults)}}Vt=new WeakSet,Ni=function(n,t){return(r,i)=>{const o={...i},s={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const l=Xt(this,zr,Ua).call(this,!!s.silent,!!s.async);if(typeof r>"u"||r===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(a=>n(a,s)).then(a=>s.walkTokens?Promise.all(this.walkTokens(a,s.walkTokens)).then(()=>a):a).then(a=>t(a,s)).then(a=>s.hooks?s.hooks.postprocess(a):a).catch(l);try{s.hooks&&(r=s.hooks.preprocess(r));const a=n(r,s);s.walkTokens&&this.walkTokens(a,s.walkTokens);let u=t(a,s);return s.hooks&&(u=s.hooks.postprocess(u)),u}catch(a){return l(a)}}},zr=new WeakSet,Ua=function(n,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const i="<p>An error occurred:</p><pre>"+Ne(r.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(r);throw r}};const Wn=new Bm;function W(e,n){return Wn.parse(e,n)}W.options=W.setOptions=function(e){return Wn.setOptions(e),W.defaults=Wn.defaults,ja(W.defaults),W};W.getDefaults=bo;W.defaults=Yn;W.use=function(...e){return Wn.use(...e),W.defaults=Wn.defaults,ja(W.defaults),W};W.walkTokens=function(e,n){return Wn.walkTokens(e,n)};W.parseInline=Wn.parseInline;W.Parser=un;W.parser=un.parse;W.Renderer=Br;W.TextRenderer=vo;W.Lexer=cn;W.lexer=cn.lex;W.Tokenizer=Ur;W.Hooks=Mt;W.parse=W;W.options;W.setOptions;W.use;W.walkTokens;W.parseInline;un.parse;cn.lex;const zm={setup(){const e=ao(),n=Oe(null),t=r=>{const i=new Date(r);return`${i.getFullYear()}年${i.getMonth()+1}月${i.getDate()}日`};return hn(async()=>{try{const r=e.params.id;let i;try{i=(await yo(Object.assign({"../../content/blog/css-grid-layout.md":()=>he(()=>Promise.resolve().then(()=>Pp),void 0),"../../content/blog/frontend-performance.md":()=>he(()=>Promise.resolve().then(()=>Rp),void 0),"../../content/blog/hello-world.md":()=>he(()=>Promise.resolve().then(()=>Op),void 0),"../../content/blog/javascript-async.md":()=>he(()=>Promise.resolve().then(()=>Ip),void 0),"../../content/blog/react-hooks.md":()=>he(()=>Promise.resolve().then(()=>$p),void 0),"../../content/blog/test.md":()=>he(()=>Promise.resolve().then(()=>Mp),void 0),"../../content/blog/typescript-tips.md":()=>he(()=>Promise.resolve().then(()=>Fp),void 0),"../../content/blog/vue-components.md":()=>he(()=>Promise.resolve().then(()=>Dp),void 0),"../../content/blog/web-accessibility.md":()=>he(()=>Promise.resolve().then(()=>Lp),void 0)}),`../../content/blog/${r}.md`)).default}catch(l){console.error("Failed to load post content:",l);return}const{attributes:o,body:s}=Qe(i);n.value={title:o.title||"Untitled",date:o.date||new Date().toISOString(),content:W(s),category:o.category||"blog"}}catch(r){console.error("Failed to load post:",r)}}),{post:n,formatDate:t}}},Vm={key:0,class:"post"},qm={class:"meta"},Km=["innerHTML"];function Wm(e,n,t,r,i,o){return r.post?(te(),ie("div",Vm,[S("article",null,[S("h1",null,K(r.post.title),1),S("div",qm,[S("time",null,K(r.formatDate(r.post.date)),1)]),S("div",{class:"content",innerHTML:r.post.content},null,8,Km)])])):Ze("",!0)}const Gm=gn(zm,[["render",Wm]]);const Ym={setup(){const e=Oe([]),n=Oe(1),t=8,r=xe(()=>Math.ceil(e.value.length/t)),i=xe(()=>{const l=(n.value-1)*t,a=l+t;return e.value.slice(l,a)}),o=l=>{l>=1&&l<=r.value&&(n.value=l,window.scrollTo(0,0))},s=l=>{const a=new Date(l);return`${a.getFullYear()}年${a.getMonth()+1}月${a.getDate()}日`};return hn(async()=>{let l;try{l=Object.assign({"/content/notes/coffee-shop.md":Er,"/content/notes/college.md":Cr,"/content/notes/digital-minimalism.md":Pr,"/content/notes/good.md":Rr,"/content/notes/reading-book.md":Or})}catch{l=Object.assign({})}if(!l||Object.keys(l).length===0)try{l=Object.assign({"../../content/notes/coffee-shop.md":Er,"../../content/notes/college.md":Cr,"../../content/notes/digital-minimalism.md":Pr,"../../content/notes/good.md":Rr,"../../content/notes/reading-book.md":Or})}catch(u){console.error("Failed to load notes",u);return}const a=Object.entries(l).map(([u,c])=>{const{attributes:f}=Qe(c);return{id:u.split("/").pop().replace(".md",""),title:f.title||"Untitled",date:f.date||new Date().toISOString(),excerpt:f.description||"",category:f.category||"notes"}});e.value=a.sort((u,c)=>new Date(c.date)-new Date(u.date))}),{paginatedNotes:i,currentPage:n,totalPages:r,changePage:o,formatDate:s}}},Jm={class:"notes"},Qm={class:"post-list"},Zm={class:"post-title"},Xm={class:"post-meta"},e0={class:"post-excerpt"},n0={key:0,class:"pagination"},t0=["disabled"],r0={class:"page-info"},i0=["disabled"];function o0(e,n,t,r,i,o){const s=dt("router-link");return te(),ie("div",Jm,[n[2]||(n[2]=S("h1",{class:"page-title"},"偶记",-1)),S("div",Qm,[(te(!0),ie(Re,null,ft(r.paginatedNotes,l=>(te(),ie("article",{key:l.id,class:"post-item"},[S("h2",Zm,[oe(s,{to:"/notes/"+l.id},{default:He(()=>[Ue(K(l.title),1)]),_:2},1032,["to"])]),S("div",Xm,[S("time",null,K(r.formatDate(l.date)),1)]),S("p",e0,K(l.excerpt),1)]))),128))]),r.totalPages>1?(te(),ie("div",n0,[S("button",{class:"pagination-btn",disabled:r.currentPage===1,onClick:n[0]||(n[0]=l=>r.changePage(r.currentPage-1))}," 上一页 ",8,t0),S("span",r0,K(r.currentPage)+" / "+K(r.totalPages),1),S("button",{class:"pagination-btn",disabled:r.currentPage===r.totalPages,onClick:n[1]||(n[1]=l=>r.changePage(r.currentPage+1))}," 下一页 ",8,i0)])):Ze("",!0)])}const s0=gn(Ym,[["render",o0],["__scopeId","data-v-fc51c3bd"]]);const l0={setup(){const e=ao(),n=Oe(null),t=r=>{const i=new Date(r);return`${i.getFullYear()}年${i.getMonth()+1}月${i.getDate()}日`};return hn(async()=>{try{const r=e.params.id;let i;try{i=(await yo(Object.assign({"../../content/notes/coffee-shop.md":()=>he(()=>Promise.resolve().then(()=>jp),void 0),"../../content/notes/college.md":()=>he(()=>Promise.resolve().then(()=>Np),void 0),"../../content/notes/digital-minimalism.md":()=>he(()=>Promise.resolve().then(()=>Hp),void 0),"../../content/notes/good.md":()=>he(()=>Promise.resolve().then(()=>Up),void 0),"../../content/notes/reading-book.md":()=>he(()=>Promise.resolve().then(()=>Bp),void 0)}),`../../content/notes/${r}.md`)).default}catch(l){console.error("Failed to load note content:",l);return}const{attributes:o,body:s}=Qe(i);n.value={title:o.title||"Untitled",date:o.date||new Date().toISOString(),content:W(s),category:o.category||"notes"}}catch(r){console.error("Failed to load note:",r)}}),{note:n,formatDate:t}}},a0={key:0,class:"note-detail"},c0={class:"meta"},u0=["innerHTML"];function f0(e,n,t,r,i,o){return r.note?(te(),ie("div",a0,[S("article",null,[S("h1",null,K(r.note.title),1),S("div",c0,[S("time",null,K(r.formatDate(r.note.date)),1)]),S("div",{class:"content",innerHTML:r.note.content},null,8,u0)])])):Ze("",!0)}const p0=gn(l0,[["render",f0],["__scopeId","data-v-6fd7fbff"]]);const d0={setup(){const e=Oe([]),n=Oe(1),t=8,r=xe(()=>Math.ceil(e.value.length/t)),i=xe(()=>{const l=(n.value-1)*t,a=l+t;return e.value.slice(l,a)}),o=l=>{l>=1&&l<=r.value&&(n.value=l,window.scrollTo(0,0))},s=l=>{const a=new Date(l);return`${a.getFullYear()}年${a.getMonth()+1}月${a.getDate()}日`};return hn(async()=>{let l;try{l=Object.assign({"/content/works/markdown-editor.md":Ir,"/content/works/reading-tracker.md":$r,"/content/works/tailwind-resume.md":Mr,"/content/works/vue-component-library.md":Fr})}catch{l=Object.assign({})}if(!l||Object.keys(l).length===0)try{l=Object.assign({"../../content/works/markdown-editor.md":Ir,"../../content/works/reading-tracker.md":$r,"../../content/works/tailwind-resume.md":Mr,"../../content/works/vue-component-library.md":Fr})}catch(u){console.error("Failed to load works",u);return}const a=Object.entries(l).map(([u,c])=>{const{attributes:f}=Qe(c);return{id:u.split("/").pop().replace(".md",""),title:f.title||"Untitled",date:f.date||new Date().toISOString(),excerpt:f.description||"",category:f.category||"works",github:f.github||null}});e.value=a.sort((u,c)=>new Date(c.date)-new Date(u.date))}),{paginatedWorks:i,currentPage:n,totalPages:r,changePage:o,formatDate:s}}},h0={class:"works"},g0={class:"post-list"},m0={class:"post-title"},_0={class:"post-meta"},y0={class:"post-excerpt"},b0={key:0,class:"work-links"},v0=["href"],x0={key:0,class:"pagination"},w0=["disabled"],k0={class:"page-info"},S0=["disabled"];function A0(e,n,t,r,i,o){const s=dt("router-link");return te(),ie("div",h0,[n[2]||(n[2]=S("h1",{class:"page-title"},"作品",-1)),S("div",g0,[(te(!0),ie(Re,null,ft(r.paginatedWorks,l=>(te(),ie("article",{key:l.id,class:"post-item"},[S("h2",m0,[oe(s,{to:"/works/"+l.id},{default:He(()=>[Ue(K(l.title),1)]),_:2},1032,["to"])]),S("div",_0,[S("time",null,K(r.formatDate(l.date)),1)]),S("p",y0,K(l.excerpt),1),l.github?(te(),ie("div",b0,[S("a",{href:l.github,target:"_blank",rel:"noopener",class:"github-link"},"GitHub",8,v0)])):Ze("",!0)]))),128))]),r.totalPages>1?(te(),ie("div",x0,[S("button",{class:"pagination-btn",disabled:r.currentPage===1,onClick:n[0]||(n[0]=l=>r.changePage(r.currentPage-1))}," 上一页 ",8,w0),S("span",k0,K(r.currentPage)+" / "+K(r.totalPages),1),S("button",{class:"pagination-btn",disabled:r.currentPage===r.totalPages,onClick:n[1]||(n[1]=l=>r.changePage(r.currentPage+1))}," 下一页 ",8,S0)])):Ze("",!0)])}const T0=gn(d0,[["render",A0],["__scopeId","data-v-95436df9"]]),E0="data:image/jpeg;base64,Isq+wP3NvMasyv2+3SIgCg==";const C0={setup(){const e=ao(),n=Oe(null),t=r=>{const i=new Date(r);return`${i.getFullYear()}年${i.getMonth()+1}月${i.getDate()}日`};return hn(async()=>{try{const r=e.params.id;let i;try{i=(await yo(Object.assign({"../../content/works/markdown-editor.md":()=>he(()=>Promise.resolve().then(()=>zp),void 0),"../../content/works/reading-tracker.md":()=>he(()=>Promise.resolve().then(()=>Vp),void 0),"../../content/works/tailwind-resume.md":()=>he(()=>Promise.resolve().then(()=>qp),void 0),"../../content/works/vue-component-library.md":()=>he(()=>Promise.resolve().then(()=>Kp),void 0)}),`../../content/works/${r}.md`)).default}catch(l){console.error("Failed to load work content:",l);return}const{attributes:o,body:s}=Qe(i);n.value={title:o.title||"Untitled",date:o.date||new Date().toISOString(),content:W(s),category:o.category||"works",github:o.github||null}}catch(r){console.error("Failed to load work:",r)}}),{work:n,formatDate:t}}},P0={key:0,class:"work-detail"},R0={class:"meta"},O0={class:"work-image"},I0=["alt"],$0=["innerHTML"],M0={key:0,class:"work-links"},F0=["href"];function D0(e,n,t,r,i,o){return r.work?(te(),ie("div",P0,[S("article",null,[S("h1",null,K(r.work.title),1),S("div",R0,[S("time",null,K(r.formatDate(r.work.date)),1)]),S("div",O0,[S("img",{src:E0,alt:r.work.title},null,8,I0)]),S("div",{class:"content",innerHTML:r.work.content},null,8,$0),r.work.github?(te(),ie("div",M0,[S("a",{href:r.work.github,target:"_blank",rel:"noopener",class:"work-link"},"查看GitHub",8,F0)])):Ze("",!0)])])):Ze("",!0)}const L0=gn(C0,[["render",D0],["__scopeId","data-v-b16b7049"]]);const j0={setup(){const e=Oe(null);return hn(async()=>{try{const n=await he(()=>import("./about-5d1a7057.js"),[]),{attributes:t,body:r}=Qe(n.default);e.value={title:t.title||"关于",content:W(r),date:t.date||new Date().toISOString()}}catch(n){console.error("Failed to load about page:",n)}}),{about:e}}},N0={key:0,class:"about"},H0=["innerHTML"];function U0(e,n,t,r,i,o){return r.about?(te(),ie("div",N0,[S("article",null,[S("h1",null,K(r.about.title),1),S("div",{class:"content",innerHTML:r.about.content},null,8,H0)])])):Ze("",!0)}const B0=gn(j0,[["render",U0],["__scopeId","data-v-34923fc9"]]);const z0={setup(){const e=Oe(null);return hn(async()=>{try{const n=await he(()=>import("./contact-c1a757cb.js"),[]),{attributes:t,body:r}=Qe(n.default);e.value={title:t.title||"联系",content:W(r),date:t.date||new Date().toISOString()}}catch(n){console.error("Failed to load contact page:",n)}}),{contact:e}}},V0={key:0,class:"contact"},q0=["innerHTML"];function K0(e,n,t,r,i,o){return r.contact?(te(),ie("div",V0,[S("article",null,[S("h1",null,K(r.contact.title),1),S("div",{class:"content",innerHTML:r.contact.content},null,8,q0)])])):Ze("",!0)}const W0=gn(z0,[["render",K0],["__scopeId","data-v-e4a4aa1d"]]),G0=hp({history:zf(),routes:[{path:"/",component:bm},{path:"/blog",component:Om},{path:"/blog/:id",component:Gm},{path:"/notes",component:s0},{path:"/notes/:id",component:p0},{path:"/works",component:T0},{path:"/works/:id",component:L0},{path:"/about",component:B0},{path:"/contact",component:W0}]}),Ba=cf(Cp);Ba.use(G0);Ba.mount("#app");
