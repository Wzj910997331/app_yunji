import{q,s as G,aH as Q,p as P,t as J,bx as Y,bK as Z,x as ee,aQ as ne,br as ae,b as F,A as ie,a as O,R as te,y as le,X as ce,S as se,c as p,G as B,aW as de,bn as oe,bJ as A,aM as re,an as ue,P as c,as as X,_ as he,r as ge,o as s,U as u,w as g,d as _,F as D,Y as L,Z as we,$ as I,V as S,a$ as N,T as U,g as z,bL as j,e as K,bM as Se,a7 as pe,a8 as ve,B as ye}from"./index-BRitYTiU.js";import{I as me,h as be,_ as $e,F as fe}from"./index-tmqCaoZs.js";import{S as Ie,R as Me,_ as xe}from"./index-Ckjajqdl.js";const Ce=e=>{const{componentCls:a}=e,i=`${a}-inner`;return{[a]:{[`&${a}-small`]:{minWidth:e.switchMinWidthSM,height:e.switchHeightSM,lineHeight:`${e.switchHeightSM}px`,[`${a}-inner`]:{paddingInlineStart:e.switchInnerMarginMaxSM,paddingInlineEnd:e.switchInnerMarginMinSM,[`${i}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSizeSM+e.switchPadding*2}px - ${e.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSizeSM+e.switchPadding*2}px + ${e.switchInnerMarginMaxSM*2}px)`},[`${i}-unchecked`]:{marginTop:-e.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${a}-handle`]:{width:e.switchPinSizeSM,height:e.switchPinSizeSM},[`${a}-loading-icon`]:{top:(e.switchPinSizeSM-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize},[`&${a}-checked`]:{[`${a}-inner`]:{paddingInlineStart:e.switchInnerMarginMinSM,paddingInlineEnd:e.switchInnerMarginMaxSM,[`${i}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${i}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSizeSM+e.switchPadding*2}px + ${e.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSizeSM+e.switchPadding*2}px - ${e.switchInnerMarginMaxSM*2}px)`}},[`${a}-handle`]:{insetInlineStart:`calc(100% - ${e.switchPinSizeSM+e.switchPadding}px)`}},[`&:not(${a}-disabled):active`]:{[`&:not(${a}-checked) ${i}`]:{[`${i}-unchecked`]:{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2}},[`&${a}-checked ${i}`]:{[`${i}-checked`]:{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2}}}}}}},Pe=e=>{const{componentCls:a}=e;return{[a]:{[`${a}-loading-icon${e.iconCls}`]:{position:"relative",top:(e.switchPinSize-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${a}-checked ${a}-loading-icon`]:{color:e.switchColor}}}},_e=e=>{const{componentCls:a}=e,i=`${a}-handle`;return{[a]:{[i]:{position:"absolute",top:e.switchPadding,insetInlineStart:e.switchPadding,width:e.switchPinSize,height:e.switchPinSize,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:e.colorWhite,borderRadius:e.switchPinSize/2,boxShadow:e.switchHandleShadow,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${a}-checked ${i}`]:{insetInlineStart:`calc(100% - ${e.switchPinSize+e.switchPadding}px)`},[`&:not(${a}-disabled):active`]:{[`${i}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${a}-checked ${i}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},ze=e=>{const{componentCls:a}=e,i=`${a}-inner`;return{[a]:{[i]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:e.switchInnerMarginMax,paddingInlineEnd:e.switchInnerMarginMin,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${i}-checked, ${i}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${i}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSize+e.switchPadding*2}px - ${e.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSize+e.switchPadding*2}px + ${e.switchInnerMarginMax*2}px)`},[`${i}-unchecked`]:{marginTop:-e.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${a}-checked ${i}`]:{paddingInlineStart:e.switchInnerMarginMin,paddingInlineEnd:e.switchInnerMarginMax,[`${i}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${i}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSize+e.switchPadding*2}px + ${e.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSize+e.switchPadding*2}px - ${e.switchInnerMarginMax*2}px)`}},[`&:not(${a}-disabled):active`]:{[`&:not(${a}-checked) ${i}`]:{[`${i}-unchecked`]:{marginInlineStart:e.switchPadding*2,marginInlineEnd:-e.switchPadding*2}},[`&${a}-checked ${i}`]:{[`${i}-checked`]:{marginInlineStart:-e.switchPadding*2,marginInlineEnd:e.switchPadding*2}}}}}},Ve=e=>{const{componentCls:a}=e;return{[a]:P(P(P(P({},J(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:e.switchMinWidth,height:e.switchHeight,lineHeight:`${e.switchHeight}px`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${a}-disabled)`]:{background:e.colorTextTertiary}}),Y(e)),{[`&${a}-checked`]:{background:e.switchColor,[`&:hover:not(${a}-disabled)`]:{background:e.colorPrimaryHover}},[`&${a}-loading, &${a}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${a}-rtl`]:{direction:"rtl"}})}},He=q("Switch",e=>{const a=e.fontSize*e.lineHeight,i=e.controlHeight/2,d=2,v=a-d*2,r=i-d*2,h=G(e,{switchMinWidth:v*2+d*4,switchHeight:a,switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchInnerMarginMin:v/2,switchInnerMarginMax:v+d+d*2,switchPadding:d,switchPinSize:v,switchBg:e.colorBgContainer,switchMinWidthSM:r*2+d*2,switchHeightSM:i,switchInnerMarginMinSM:r/2,switchInnerMarginMaxSM:r+d+d*2,switchPinSizeSM:r,switchHandleShadow:`0 2px 4px 0 ${new Q("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:e.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[Ve(h),ze(h),_e(h),Pe(h),Ce(h)]}),Ee=Z("small","default"),Te=()=>({id:String,prefixCls:String,size:c.oneOf(Ee),disabled:{type:Boolean,default:void 0},checkedChildren:c.any,unCheckedChildren:c.any,tabindex:c.oneOfType([c.string,c.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:c.oneOfType([c.string,c.number,c.looseBool]),checkedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!0),unCheckedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}),We=ee({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:Te(),slots:Object,setup(e,a){let{attrs:i,slots:d,expose:v,emit:r}=a;const h=ne(),M=ae(),f=F(()=>{var t;return(t=e.disabled)!==null&&t!==void 0?t:M.value});ie(()=>{});const w=O(e.checked!==void 0?e.checked:i.defaultChecked),y=F(()=>w.value===e.checkedValue);te(()=>e.checked,()=>{w.value=e.checked});const{prefixCls:o,direction:V,size:H}=le("switch",e),[E,T]=He(o),b=O(),x=()=>{var t;(t=b.value)===null||t===void 0||t.focus()};v({focus:x,blur:()=>{var t;(t=b.value)===null||t===void 0||t.blur()}}),ce(()=>{se(()=>{e.autofocus&&!f.value&&b.value.focus()})});const $=(t,m)=>{f.value||(r("update:checked",t),r("change",t,m),h.onFieldChange())},C=t=>{r("blur",t)},W=t=>{x();const m=y.value?e.unCheckedValue:e.checkedValue;$(m,t),r("click",m,t)},n=t=>{t.keyCode===X.LEFT?$(e.unCheckedValue,t):t.keyCode===X.RIGHT&&$(e.checkedValue,t),r("keydown",t)},k=t=>{var m;(m=b.value)===null||m===void 0||m.blur(),r("mouseup",t)},l=F(()=>({[`${o.value}-small`]:H.value==="small",[`${o.value}-loading`]:e.loading,[`${o.value}-checked`]:y.value,[`${o.value}-disabled`]:f.value,[o.value]:!0,[`${o.value}-rtl`]:V.value==="rtl",[T.value]:!0}));return()=>{var t;return E(p(re,null,{default:()=>[p("button",B(B(B({},de(e,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),i),{},{id:(t=e.id)!==null&&t!==void 0?t:h.id.value,onKeydown:n,onClick:W,onBlur:C,onMouseup:k,type:"button",role:"switch","aria-checked":w.value,disabled:f.value||e.loading,class:[i.class,l.value],ref:b}),[p("div",{class:`${o.value}-handle`},[e.loading?p(oe,{class:`${o.value}-loading-icon`},null):null]),p("span",{class:`${o.value}-inner`},[p("span",{class:`${o.value}-inner-checked`},[A(d,e,"checkedChildren")]),p("span",{class:`${o.value}-inner-unchecked`},[A(d,e,"unCheckedChildren")])])])]}))}}}),ke=ue(We),Fe={key:0,class:"form-text"},Be={__name:"WForm",props:{formList:{type:Array,default:()=>[],required:!0},modelValue:{type:Object,default:()=>({}),required:!0},rules:{type:Object,default:()=>({})},itemWidth:{type:String,default:"100%"},span:{type:Number,default:24},labelWidth:{type:String,default:"60px"},isFooter:{type:Boolean,default:!1}},setup(e,{expose:a}){const i=e,d=ge({name:"",delivery:!1,type:[],resource:"",desc:""}),v=()=>{console.log("submit!",Se(d))},r={style:{width:i.labelWidth}},h={span:i.span},M=O("");return a({validate:async()=>{let w=!0;return await M.value.validate().then(()=>{console.log(222)}).catch(y=>{console.log(333),w=!1}),w}}),(w,y)=>{const o=me,V=Ie,H=ke,E=pe,T=ve,b=Me,x=xe,R=be,$=$e,C=ye,W=fe;return s(),u(W,{ref_key:"formRef",ref:M,model:e.modelValue,"label-col":r,"wrapper-col":h,rules:e.rules},{default:g(()=>[(s(!0),_(D,null,L(e.formList,(n,k)=>(s(),u($,{key:k,label:n.isSlot?null:n.label,name:n.key,style:{width:"100%"}},we({default:g(()=>[n.type==="text"?(s(),_("div",Fe,I(e.modelValue[n.key]||e.modelValue[n.key]==0?e.modelValue[n.key]:"-")+"   ",1)):S("",!0),n.type==="input"?(s(),u(o,{key:1,value:e.modelValue[n.key],"onUpdate:value":l=>e.modelValue[n.key]=l,placeholder:"请输入"+n.label,disabled:n.disabled,class:N({bg:n.disabled}),style:U({width:n.itemWidth||e.itemWidth})},null,8,["value","onUpdate:value","placeholder","disabled","class","style"])):S("",!0),n.type==="select"?(s(),u(V,{key:2,value:e.modelValue[n.key],"onUpdate:value":l=>e.modelValue[n.key]=l,placeholder:"请选择"+n.label,options:n.list,disabled:n.disabled,class:N({bg:n.disabled}),style:U({width:n.itemWidth||e.itemWidth})},null,8,["value","onUpdate:value","placeholder","options","disabled","class","style"])):S("",!0),n.type==="switch"?(s(),u(H,{key:3,checked:e.modelValue[n.key],"onUpdate:checked":l=>e.modelValue[n.key]=l,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#dcdfe6"},"inline-prompt":"","active-value":n.activeValue||1,"inactive-value":n.inactiveValue||0,"active-text":n.activeText||"开","inactive-text":n.inactiveText||"关"},null,8,["checked","onUpdate:checked","active-value","inactive-value","active-text","inactive-text"])):S("",!0),n.type==="checkbox"?(s(),u(T,{key:4,value:e.modelValue[n.key],"onUpdate:value":l=>e.modelValue[n.key]=l},{default:g(()=>[(s(!0),_(D,null,L(n.list,l=>(s(),u(E,{value:l.value,key:l.value},{default:g(()=>[z(I(l.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):S("",!0),n.type==="radio"?(s(),u(x,{key:5,value:e.modelValue[n.key],"onUpdate:value":l=>e.modelValue[n.key]=l},{default:g(()=>[(s(!0),_(D,null,L(n.list,l=>(s(),u(b,{value:l.value,key:l.value},{default:g(()=>[z(I(l.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):S("",!0),n.type==="textarea"?(s(),u(R,{key:6,value:e.modelValue[n.key],"onUpdate:value":l=>e.modelValue[n.key]=l,placeholder:"请输入"+n.label,style:U({width:n.itemWidth||e.itemWidth})},null,8,["value","onUpdate:value","placeholder","style"])):S("",!0),n.type==="slot"?j(w.$slots,`${n.key}`,{key:7},()=>[K("span",null,I(n.label),1)],!0):S("",!0)]),_:2},[n.isSlot?{name:"label",fn:g(()=>[j(w.$slots,`${n.key}Label`,{},()=>[K("span",null,I(n.label),1)],!0)]),key:"0"}:void 0]),1032,["label","name"]))),128)),e.isFooter?(s(),u($,{key:0,"wrapper-col":{span:14,offset:4}},{default:g(()=>[p(C,{type:"primary",onClick:v},{default:g(()=>y[0]||(y[0]=[z("Create")])),_:1}),p(C,{style:{"margin-left":"10px"}},{default:g(()=>y[1]||(y[1]=[z("Cancel")])),_:1})]),_:1})):S("",!0)]),_:3},8,["model","rules"])}}},Oe=he(Be,[["__scopeId","data-v-02069822"]]);export{Oe as W};
