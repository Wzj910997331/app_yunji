import{av as c,b as l,u as A,j as o}from"./index-0WvK6C2i.js";const p=c("channelStore",()=>{const a=l([]),n=e=>{a.value=e};return{channelData:a,SET_CHANNEL_DATA:n,GET_CHANNEL_DATA:()=>{const{SEND_MESSAGE:e}=A(),t={type:"getMediaChannelList"};o.on(t.type,s=>{if(s.result===0){const r=s.data.channels;n(r)}else message.error("请求失败");o.off(t.type)}),e(t)}}},{persist:{paths:["channelData"]}});export{p as c};
