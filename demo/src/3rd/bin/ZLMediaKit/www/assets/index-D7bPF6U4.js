import{S as T,T as W}from"./SearchForm-DaFpT3z_.js";import{W as $}from"./WForm-C7akG1Od.js";import{_ as N,b as u,o as f,W as z,w as n,f as P,c as o,h as r,g as i,a3 as B,B as S,d as E,e as C,a1 as O,X as L}from"./index-CYQXq1Hw.js";import{_ as R}from"./index-LC1FJtUD.js";import{u as q,_ as D}from"./index.es-BFPZ6LQM.js";import{P as F}from"./PlusOutlined-BZuS2wjB.js";import"./index-CZglWv9X.js";import"./Col-CgBZr6YF.js";import"./debounce-C1k7YIl0.js";import"./index-BsRFuyma.js";import"./List-dtbjobtR.js";import"./index-BS4Hp4Ns.js";import"./index-BhuQxcmV.js";import"./index-Bq6jBos-.js";const J={class:"footer"},K={__name:"Edit",setup(V,{expose:k}){const d=u({}),v=[{type:"input",label:"参数标识",key:"name"},{type:"select",label:"参数值",key:"description",list:[{value:11,label:"测试"}]},{type:"textarea",label:"参数描述",key:"description"}],s=u(!1);u(!1);const p=()=>{s.value=!1},c=u("新增"),m=(g,a)=>{c.value=g,s.value=!0},_={name:[{required:!0,message:"Please select activity resource",trigger:"change"}],description:[{required:!0,message:"Please select activity resource",trigger:"change"}]};return k({handleOpen:m}),(g,a)=>{const y=S,b=R;return f(),z(b,{open:i(s),"onUpdate:open":a[1]||(a[1]=e=>B(s)?s.value=e:null),title:i(c),width:"520","footer-style":{textAlign:"right"},onClose:p},{footer:n(()=>[P("div",J,[o(y,{type:"primary",onClick:p},{default:n(()=>a[2]||(a[2]=[r("确认")])),_:1}),o(y,{class:"close",onClick:p},{default:n(()=>a[3]||(a[3]=[r("取消")])),_:1})])]),default:n(()=>[o($,{modelValue:i(d),"onUpdate:modelValue":a[0]||(a[0]=e=>B(d)?d.value=e:null),formList:v,rules:_,labelWidth:"100px"},null,8,["modelValue"])]),_:1},8,["open","title"])}}},U=N(K,[["__scopeId","data-v-aed7c838"]]),A={class:"parameterConfig-container"},G={class:"header-tool"},X={key:0},Y={key:1},j={__name:"index",setup(V){const k=e=>{},{run:d,loading:v,current:s,pageSize:p}=q(k,{formatResult:e=>e.data.results,pagination:{currentKey:"page",pageSizeKey:"results"}}),c=E(()=>({total:200,current:s.value,pageSize:p.value})),m=u(""),_=e=>{m.value.handleOpen(e)},g=(e,t,l)=>{console.log("🚀 ~ handleTableChange ~ pag, filters, sorter:",e,t,l),d({results:e.pageSize,page:e==null?void 0:e.current,sortField:l.field,sortOrder:l.order,...t})},a=[{type:"input",key:"keyWord",label:"参数标识"},{type:"select",key:"screenKey",label:"参数值",list:[{value:"name",label:"分组名称"},{value:"description",label:"描述"}]}],y=[{title:"参数标识",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"age",key:"age"},{title:"参数值",key:"tags",dataIndex:"tags"},{title:"参数描述",key:"tags",dataIndex:"tags"},{title:"操作",key:"action"}],b=[{key:"1",name:"John Brown",age:"/data/bm-app",address:"New York No. 1 Lake Park",tags:1},{key:"2",name:"Jim Green",age:"/data/bm-app",address:"London No. 1 Lake Park",tags:1},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:0}];return(e,t)=>{const l=S,w=W,I=D;return f(),C("div",A,[o(T,{searchList:a}),P("div",G,[o(l,{type:"primary",onClick:t[0]||(t[0]=x=>_("新增"))},{default:n(()=>[o(i(F)),t[2]||(t[2]=r("添加参数 "))]),_:1}),o(l,{class:"close info"},{default:n(()=>t[3]||(t[3]=[r("快速导入")])),_:1})]),o(I,{columns:y,"data-source":b,pagination:i(c),loading:i(v),onChange:g,scroll:{x:!0,y:460}},{bodyCell:n(({column:x,record:h})=>[x.key==="tags"?(f(),C("span",X,[o(w,{color:h.tags?"green":"volcano"},{default:n(()=>[r(O(h.tags?"正常":"异常"),1)]),_:2},1032,["color"])])):L("",!0),x.key==="action"?(f(),C("span",Y,[o(l,{type:"link",onClick:t[1]||(t[1]=H=>_("编辑"))},{default:n(()=>t[4]||(t[4]=[r("编辑")])),_:1})])):L("",!0)]),_:1},8,["pagination","loading"]),o(U,{ref_key:"editRef",ref:m},null,512)])}}},ue=N(j,[["__scopeId","data-v-c7d67b05"]]);export{ue as default};