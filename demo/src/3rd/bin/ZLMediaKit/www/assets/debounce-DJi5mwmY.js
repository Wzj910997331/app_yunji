import{cB as A,cC as B,cs as I,cD as M}from"./index-aNIfo854.js";var N="[object Symbol]";function j(e){return typeof e=="symbol"||A(e)&&B(e)==N}var R=/\s/;function $(e){for(var r=e.length;r--&&R.test(e.charAt(r)););return r}var D=/^\s+/;function F(e){return e&&e.slice(0,$(e)+1).replace(D,"")}var k=NaN,_=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,H=/^0o[0-7]+$/i,P=parseInt;function S(e){if(typeof e=="number")return e;if(j(e))return k;if(I(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=I(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=F(e);var i=G.test(e);return i||H.test(e)?P(e.slice(2),i?2:8):_.test(e)?k:+e}var y=function(){return M.Date.now()},U="Expected a function",X=Math.max,q=Math.min;function J(e,r,i){var s,c,l,u,t,f,o=0,h=!1,d=!1,T=!0;if(typeof e!="function")throw new TypeError(U);r=S(r)||0,I(i)&&(h=!!i.leading,d="maxWait"in i,l=d?X(S(i.maxWait)||0,r):l,T="trailing"in i?!!i.trailing:T);function b(n){var a=s,m=c;return s=c=void 0,o=n,u=e.apply(m,a),u}function O(n){return o=n,t=setTimeout(g,r),h?b(n):u}function W(n){var a=n-f,m=n-o,E=r-a;return d?q(E,l-m):E}function p(n){var a=n-f,m=n-o;return f===void 0||a>=r||a<0||d&&m>=l}function g(){var n=y();if(p(n))return v(n);t=setTimeout(g,W(n))}function v(n){return t=void 0,T&&s?b(n):(s=c=void 0,u)}function C(){t!==void 0&&clearTimeout(t),o=0,s=f=c=t=void 0}function L(){return t===void 0?u:v(y())}function x(){var n=y(),a=p(n);if(s=arguments,c=this,f=n,a){if(t===void 0)return O(f);if(d)return clearTimeout(t),t=setTimeout(g,r),b(f)}return t===void 0&&(t=setTimeout(g,r)),u}return x.cancel=C,x.flush=L,x}export{J as d,j as i,S as t};
