import{u as I,_ as v}from"./index.es-DX6mIkRE.js";import{_ as w,b as B,d as C,o as L,e as N,f as z,c as o,w as l,g as n,h as P,a3 as S,k as r,B as T}from"./index-aNIfo854.js";import{P as J}from"./PlusOutlined-B7gLAiVd.js";import{_ as V}from"./index-DxH2LU7E.js";import"./Col-B8w7Ubqz.js";import"./index-XsA9DfIQ.js";import"./debounce-DJi5mwmY.js";import"./List-DoRPfoeT.js";import"./index-eE3Tj_Ig.js";import"./index-D_uLXcOy.js";import"./index-B6yYNcnT.js";const $={class:"planTemplate-container"},K={class:"header-tool"},O={__name:"index",setup(R){const d=e=>{e.file.status!=="uploading"&&console.log(e.file,e.fileList),e.file.status==="done"?r.success(`${e.file.name} file uploaded successfully`):e.file.status==="error"&&r.error(`${e.file.name} file upload failed.`)},s=B([]),u={authorization:"authorization-text"},c=e=>{},{run:p,loading:m,current:g,pageSize:_}=I(c,{formatResult:e=>e.data.results,pagination:{currentKey:"page",pageSizeKey:"results"}}),f=C(()=>({total:200,current:g.value,pageSize:_.value})),k=(e,a,t)=>{console.log("🚀 ~ handleTableChange ~ pag, filters, sorter:",e,a,t),p({results:e.pageSize,page:e==null?void 0:e.current,sortField:t.field,sortOrder:t.order,...a})},y=[{title:"所属算法",dataIndex:"name",key:"name"},{title:"告警类型",dataIndex:"age",key:"age"},{title:"告警描述",dataIndex:"age",key:"age"},{title:"语言文件",dataIndex:"age",key:"age"},{title:"通道状态",dataIndex:"age",key:"age"},{title:"一级编号",dataIndex:"age",key:"age"},{title:"二级编号",dataIndex:"age",key:"age"}],x=[{key:"1",name:"John Brown",age:"/data/bm-app",address:"New York No. 1 Lake Park",tags:1},{key:"2",name:"Jim Green",age:"/data/bm-app",address:"London No. 1 Lake Park",tags:1},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:0}];return(e,a)=>{const t=T,h=V,b=v;return L(),N("div",$,[z("div",K,[o(h,{"file-list":n(s),"onUpdate:fileList":a[0]||(a[0]=i=>S(s)?s.value=i:null),name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:u,onChange:d},{default:l(()=>[o(t,{type:"primary"},{default:l(()=>[o(n(J)),a[1]||(a[1]=P("上传语音 "))]),_:1})]),_:1},8,["file-list"])]),o(b,{columns:y,"data-source":x,pagination:n(f),loading:n(m),onChange:k,scroll:{x:!0,y:460}},{bodyCell:l(({column:i,record:q})=>a[2]||(a[2]=[])),_:1},8,["pagination","loading"])])}}},W=w(O,[["__scopeId","data-v-62b6acf1"]]);export{W as default};
