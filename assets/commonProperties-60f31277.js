import{d9 as l,gK as o,gH as t,gL as d,gM as c,ch as f,bd as u}from"./index-8b5e7d9b.js";import{h as w}from"./ElevationInfo-36952bdf.js";function g(i){if(!i)return i;const{start:e,end:n}=i;return new l({start:e!=null?o(e,-e.getTimezoneOffset(),"minutes"):e,end:n!=null?o(n,-n.getTimezoneOffset(),"minutes"):n})}function b(i){if(!i)return i;const{start:e,end:n}=i;return new l({start:e!=null?o(e,e.getTimezoneOffset(),"minutes"):e,end:n!=null?o(n,n.getTimezoneOffset(),"minutes"):n})}const T={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:t}}},I={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(i,e)=>!e.disablePopup},write:{enabled:!0,writer(i,e,n){e[n]=!i}}}},O={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:t}}},C={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:c}}},D={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:t}}},S={value:null,type:w,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:t}}};function h(i){return{type:i,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const m={write:{enabled:!0,layerContainerTypes:t},read:!0},p={type:Number,json:{origins:{"web-document":m,"portal-item":{write:!0}}}},N={...p,json:{...p.json,origins:{"web-document":{...m,write:{enabled:!0,layerContainerTypes:t,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(i,e,n)=>n&&n.origin!=="service"||!e.drawingInfo||e.drawingInfo.transparency===void 0?e.layerDefinition?.drawingInfo&&e.layerDefinition.drawingInfo.transparency!==void 0?d(e.layerDefinition.drawingInfo.transparency):void 0:d(e.drawingInfo.transparency)}}},x={type:l,readOnly:!0,get(){if(!this.layer?.timeInfo)return null;const{datesInUnknownTimezone:i,timeOffset:e,useViewTime:n}=this.layer,s=this.view?.timeExtent;let a=this.layer.timeExtent;i&&(a=b(a));let r=n?s&&a?s.intersection(a):s||a:a;if(!r||r.isEmpty||r.isAllTime)return r;e&&(r=r.offset(-e.value,e.unit)),i&&(r=g(r));const y=this._get("timeExtent");return r.equals(y)?y:r}},z={type:f,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(i,e)=>{const n=f.fromJSON(i);return e.spatialReference!=null&&typeof e.spatialReference=="object"&&(n.spatialReference=u.fromJSON(e.spatialReference)),n}}}},read:!1}},R={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},E={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:t}}},name:"layerDefinition.minScale",write:!0}},B={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:t}}},name:"layerDefinition.maxScale",write:!0}},L={json:{write:{ignoreOrigin:!0,layerContainerTypes:t},origins:{"web-map":{read:!1,write:!1}}}};export{L as C,R as I,B as S,E as T,N as b,D as c,C as d,S as f,p as g,x as j,O as m,T as p,z as v,h as w,I as y};
