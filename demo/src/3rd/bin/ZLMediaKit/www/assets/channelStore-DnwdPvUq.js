import{aa as c,a as l,u as A,i as o}from"./index-BTLZq6OH.js";const p=c("channelStore",()=>{const t=l([]),n=e=>{t.value=e};return{channelData:t,SET_CHANNEL_DATA:n,GET_CHANNEL_DATA:()=>{const{SEND_MESSAGE:e}=A(),a={type:"getMediaChannelList"};o.on(a.type,s=>{if(s.result===0){const r=s.data.channels;n(r)}else message.error("请求失败");o.off(a.type)}),e(a)}}},{persist:{paths:["channelData"]}});export{p as c};
