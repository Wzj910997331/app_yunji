import{u as z,_ as N}from"./index.es-9CUF-kWl.js";import{_ as B,u as I,a as l,b as P,o as V,d as D,e as E,c as s,w as i,f as o,g as L,a1 as T,j as d,B as M,i as c}from"./index-hI_BHtZ1.js";import{P as $}from"./PlusOutlined-LVlNiO5e.js";import{_ as q}from"./index-Bhpy9z5_.js";import"./Col-eL2dFxCZ.js";import"./index-BkLvWLkG.js";import"./index-Bws9bqCi.js";const A={class:"planTemplate-container"},K={class:"header-tool"},O={__name:"index",setup(R){const{SEND_MESSAGE:m}=I(),p=e=>{e.file.status!=="uploading"&&console.log(e.file,e.fileList),e.file.status==="done"?d.success(`${e.file.name} file uploaded successfully`):e.file.status==="error"&&d.error(`${e.file.name} file upload failed.`)},n=l([]),_={authorization:"authorization-text"},r=l([]),f=l(0),g=P(()=>({total:f.value,current:v.value,pageSize:w.value})),h=()=>{const e={type:"getAiModelList"};c.on(e.type,t=>{if(t.result===0||t.msg){const a=t.data.models;r.value=a}else d.error("请求失败");c.off(e.type)}),m(e)},{run:y,loading:x,current:v,pageSize:w}=z(h,{formatResult:e=>e.data.results,pagination:{currentKey:"page",pageSizeKey:"results"}}),S=(e,t,a)=>{console.log("🚀 ~ handleTableChange ~ pag, filters, sorter:",e,t,a),y({results:e.pageSize,page:e==null?void 0:e.current,sortField:a.field,sortOrder:a.order,...t})},b=[{title:"文件",dataIndex:"modelName",key:"modelName",width:180},{title:"参数值",dataIndex:"modelPath",key:"modelPath",width:180},{title:"算法描述",dataIndex:"modelDesc",key:"modelDesc",width:180},{title:"版本日期",dataIndex:"modelVersion",key:"modelVersion",width:180}];return(e,t)=>{const a=M,k=q,C=N;return V(),D("div",A,[E("div",K,[s(k,{"file-list":o(n),"onUpdate:fileList":t[0]||(t[0]=u=>T(n)?n.value=u:null),name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:_,onChange:p},{default:i(()=>[s(a,{type:"primary"},{default:i(()=>[s(o($)),t[1]||(t[1]=L("上传资源 "))]),_:1})]),_:1},8,["file-list"])]),s(C,{columns:b,"data-source":o(r),pagination:o(g),loading:o(x),onChange:S,scroll:{x:!0,y:460}},{bodyCell:i(({column:u,record:j})=>t[2]||(t[2]=[])),_:1},8,["data-source","pagination","loading"])])}}},X=B(O,[["__scopeId","data-v-4988c9df"]]);export{X as default};
