import{S as G,T as O}from"./SearchForm-DaFpT3z_.js";import{W as H}from"./WForm-C7akG1Od.js";import{_ as F,u as L,a2 as $,b as c,o as E,W as X,w as l,f as q,c as n,g as i,h as _,a3 as V,j as y,k as g,B as W,d as Z,Z as J,E as Q,e as T,a1 as Y,X as A}from"./index-CYQXq1Hw.js";import{c as U}from"./channelStore-Bt12TOzT.js";import{_ as ee}from"./index-LC1FJtUD.js";import{u as te,_ as ae}from"./index.es-BFPZ6LQM.js";import{P as oe}from"./PlusOutlined-BZuS2wjB.js";import{_ as ne}from"./index-5kSmPd7P.js";import"./index-CZglWv9X.js";import"./Col-CgBZr6YF.js";import"./debounce-C1k7YIl0.js";import"./index-BsRFuyma.js";import"./List-dtbjobtR.js";import"./index-BS4Hp4Ns.js";import"./index-BhuQxcmV.js";import"./index-Bq6jBos-.js";import"./ActionButton-Gb4Z9eYp.js";const se={class:"footer"},le={__name:"Edit",emits:["success"],setup(z,{expose:h,emit:w}){const{SEND_MESSAGE:x}=L(),{channelData:v}=$(U()),s=c(!1),I=c(""),u=c({}),d=c(!1),N=w,p=c(""),B=async()=>{if(!await p.value.validate())return;const a={type:"setMediaChannelInfo",...u.value};if(!a.mediaId&&a.mediaId!=0){const r=v.value.find(k=>k.mediaDelete==1);r&&(a.mediaId=r.mediaId)}y.on(a.type,r=>{r.result===0?(g.success("操作成功"),s.value=!1,N("success")):g.error("请求失败"),y.off(a.type),d.value=!1}),d.value=!0,x(a)},f=[{type:"input",label:"视频地址",key:"mediaUrl"},{type:"input",label:"相机编号",key:"mediaName"},{type:"textarea",label:"相机描述",key:"mediaDesc"}],M=m=>{p.value&&p.value.resetForm(),I.value=m?"编辑":"新增",u.value=m||{},s.value=!0,d.value=!1},b=()=>{s.value=!1},D={mediaUrl:[{required:!0,message:"请输入",trigger:"blur"}],mediaName:[{required:!0,message:"请输入",trigger:"blur"}],mediaDesc:[{required:!0,message:"请输入",trigger:"blur"}]};return h({showDrawer:M}),(m,a)=>{const r=W,k=ee;return E(),X(k,{open:i(s),"onUpdate:open":a[1]||(a[1]=e=>V(s)?s.value=e:null),title:i(I),width:"520","footer-style":{textAlign:"right"},onClose:b},{footer:l(()=>[q("div",se,[n(r,{type:"primary",onClick:B,loading:i(d)},{default:l(()=>a[2]||(a[2]=[_("确认")])),_:1},8,["loading"]),n(r,{class:"close",onClick:b},{default:l(()=>a[3]||(a[3]=[_("取消")])),_:1})])]),default:l(()=>[n(H,{ref_key:"wFormRef",ref:p,modelValue:i(u),"onUpdate:modelValue":a[0]||(a[0]=e=>V(u)?u.value=e:null),formList:f,rules:D,labelWidth:"100px"},null,8,["modelValue"])]),_:1},8,["open","title"])}}},re=F(le,[["__scopeId","data-v-ba6fd5cf"]]),ie={class:"channel-container"},ue={style:{display:"flex","justify-content":"end","margin-bottom":"20px"}},de={key:0},ce={key:1},me={__name:"index",setup(z){const{SEND_MESSAGE:h}=L(),{SET_CHANNEL_DATA:w}=U(),{channelData:x}=$(U()),v=c([]),s=c(0),I=Z(()=>({total:s.value,current:p.value,pageSize:B.value})),u=()=>{const e={type:"getMediaChannelList"};y.on(e.type,t=>{if(t.result===0){console.log("🚀 ~ bus.on ~ res:",t);const o=t.data.channels;w(o),console.log(x.value),v.value=x.value.filter(S=>S.mediaDelete==0),s.value=v.value.length}else g.error("请求失败");y.off(e.type)}),h(e)},{run:d,loading:N,current:p,pageSize:B}=te(u,{formatResult:e=>{console.log(e,"run==========")},pagination:{currentKey:"page",pageSizeKey:"results"}});let f=null;const M=()=>{f&&clearInterval(f),f=setInterval(()=>{console.log("五秒一次"),d()},5e3)};J(()=>{M()}),Q(()=>{clearInterval(f)});const b=c(""),D=(e=null)=>{b.value.showDrawer(e)},m=(e,t)=>{if(console.log("🚀 ~ handleDelete ~ mediaStatus:",t),t==2){g.error("通道被使用，请先删除相关任务");return}const o={type:"delMediaChannelInfo",mediaId:e};y.on(o.type,S=>{S.result===0?(g.success("操作成功"),d()):g.error("请求失败"),y.off(o.type)}),h(o)},a=(e,t,o)=>{console.log("🚀 ~ handleTableChange ~ pag, filters, sorter:",e,t,o),d({results:e.pageSize,page:e==null?void 0:e.current,sortField:o.field,sortOrder:o.order,...t})},r=[{type:"input",key:"keyWord",label:"相机编号"},{type:"select",key:"screenKey",label:"通道状态",list:[{value:"name",label:"分组名称"},{value:"description",label:"描述"}]}],k=[{title:"相机编号",dataIndex:"mediaId",key:"mediaName"},{title:"视频地址",dataIndex:"mediaUrl",key:"mediaUrl"},{title:"通道状态",key:"mediaStatus",dataIndex:"mediaStatus"},{title:"操作",key:"action"}];return(e,t)=>{const o=W,S=O,K=ne,P=ae;return E(),T("div",ie,[n(G,{searchList:r}),q("div",ue,[n(o,{type:"primary",onClick:t[0]||(t[0]=R=>D(null)),disabled:i(s)>=16},{default:l(()=>[n(i(oe)),t[2]||(t[2]=_("新建 "))]),_:1},8,["disabled"])]),n(P,{columns:k,"data-source":i(v),pagination:i(I),loading:i(N),onChange:a,scroll:{x:!0,y:520}},{bodyCell:l(({column:R,record:C})=>[R.key==="mediaStatus"?(E(),T("span",de,[n(S,{color:C.mediaStatus?"green":"volcano"},{default:l(()=>[_(Y(C.mediaStatus?"正常":"异常"),1)]),_:2},1032,["color"])])):A("",!0),R.key==="action"?(E(),T("span",ce,[n(o,{type:"link",onClick:j=>D(C)},{default:l(()=>t[3]||(t[3]=[_("编辑")])),_:2},1032,["onClick"]),n(K,{title:"是否确定删除该数据?",onConfirm:j=>m(C.mediaId,C.mediaStatus),onCancel:t[1]||(t[1]=()=>{})},{default:l(()=>[n(o,{type:"link"},{default:l(()=>t[4]||(t[4]=[_("删除")])),_:1})]),_:2},1032,["onConfirm"])])):A("",!0)]),_:1},8,["data-source","pagination","loading"]),n(re,{ref_key:"editRef",ref:b,onSuccess:u},null,512)])}}},Be=F(me,[["__scopeId","data-v-830b0a4b"]]);export{Be as default};