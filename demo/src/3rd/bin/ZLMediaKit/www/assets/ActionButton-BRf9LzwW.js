import{aw as r,C as m,x as h,X as y,bJ as O,c as P,G as i,al as p,B as x,ai as R}from"./index-ZFhHKPxY.js";const A=()=>{const n=r(!1);return m(()=>{n.value=!0}),n},D={type:{type:String},actionFn:Function,close:Function,autofocus:Boolean,prefixCls:String,buttonProps:R(),emitEvent:Boolean,quitOnNullishReturnValue:Boolean};function d(n){return!!(n&&n.then)}const N=h({compatConfig:{MODE:3},name:"ActionButton",props:D,setup(n,g){let{slots:B}=g;const a=r(!1),c=r(),l=r(!1);let f;const v=A();y(()=>{n.autofocus&&(f=setTimeout(()=>{var e,t;return(t=(e=O(c.value))===null||e===void 0?void 0:e.focus)===null||t===void 0?void 0:t.call(e)}))}),m(()=>{clearTimeout(f)});const u=function(){for(var e,t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];(e=n.close)===null||e===void 0||e.call(n,...o)},C=e=>{d(e)&&(l.value=!0,e.then(function(){v.value||(l.value=!1),u(...arguments),a.value=!1},t=>(v.value||(l.value=!1),a.value=!1,Promise.reject(t))))},b=e=>{const{actionFn:t}=n;if(a.value)return;if(a.value=!0,!t){u();return}let o;if(n.emitEvent){if(o=t(e),n.quitOnNullishReturnValue&&!d(o)){a.value=!1,u(e);return}}else if(t.length)o=t(n.close),a.value=!1;else if(o=t(),!o){u();return}C(o)};return()=>{const{type:e,prefixCls:t,buttonProps:o}=n;return P(x,i(i(i({},p(e)),{},{onClick:b,loading:l.value,prefixCls:t},o),{},{ref:c}),B)}}});export{N as A};