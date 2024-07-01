import{em as p,gf as S,au as x,dC as E,fn as f,eD as g}from"./index-8b5e7d9b.js";import{t as O}from"./pbfQueryUtils-0854066b.js";import{t as R}from"./queryZScale-9dee68ff.js";function m(r){const e={};for(const i in r){if(i==="declaredClass")continue;const t=r[i];if(t!=null&&typeof t!="function")if(Array.isArray(t)){e[i]=[];for(let n=0;n<t.length;n++)e[i][n]=m(t[n])}else typeof t=="object"?t.toJSON&&(e[i]=JSON.stringify(t)):e[i]=t}return e}const d="Layer does not support extent calculation.";function j(r,e){if(e&&r.type==="extent")return`${r.xmin},${r.ymin},${r.xmax},${r.ymax}`;if(e&&r.type==="point")return`${r.x},${r.y}`;const i=r.toJSON();return delete i.spatialReference,JSON.stringify(i)}function F(r,e){const i=r.geometry,t=r.toJSON();delete t.compactGeometryEnabled,delete t.defaultSpatialReferenceEnabled;const n=t;let a,o,s;if(i!=null&&(o=i.spatialReference,s=f(o),n.geometryType=g(i),n.geometry=j(i,r.compactGeometryEnabled),n.inSR=s),t.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=t.groupByFieldsForStatistics.join(",")),t.objectIds&&(n.objectIds=t.objectIds.join(",")),t.orderByFields&&(n.orderByFields=t.orderByFields.join(",")),!t.outFields||!t.returnDistinctValues&&(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?delete n.outFields:t.outFields.includes("*")?n.outFields="*":n.outFields=t.outFields.join(","),t.outSR?(n.outSR=f(t.outSR),a=r.outSpatialReference):i&&(t.returnGeometry||t.returnCentroid)&&(n.outSR=n.inSR,a=o),t.returnGeometry&&delete t.returnGeometry,t.outStatistics&&(n.outStatistics=JSON.stringify(t.outStatistics)),t.fullText&&(n.fullText=JSON.stringify(t.fullText)),t.pixelSize&&(n.pixelSize=JSON.stringify(t.pixelSize)),t.quantizationParameters&&(r.defaultSpatialReferenceEnabled&&o!=null&&r.quantizationParameters?.extent!=null&&o.equals(r.quantizationParameters.extent.spatialReference)&&delete t.quantizationParameters.extent.spatialReference,n.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.parameterValues&&(n.parameterValues=JSON.stringify(t.parameterValues)),t.rangeValues&&(n.rangeValues=JSON.stringify(t.rangeValues)),t.dynamicDataSource&&(n.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t.timeExtent){const c=t.timeExtent,{start:u,end:y}=c;u==null&&y==null||(n.time=u===y?u:`${u??"null"},${y??"null"}`),delete t.timeExtent}return r.defaultSpatialReferenceEnabled&&o!=null&&a!=null&&o.equals(a)&&(n.defaultSR=n.inSR,delete n.inSR,delete n.outSR),n}async function w(r,e,i,t){const n=e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{features:[]}}:await l(r,e,"json",t);return R(e,i,n.data),n}async function P(r,e,i,t){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:i.createFeatureResult()};const n=await b(r,e,t),a=n;return a.data=O(n.data,i),a}function b(r,e,i){return l(r,e,"pbf",i)}function z(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):l(r,e,"json",i,{returnIdsOnly:!0})}function I(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):l(r,e,"json",i,{returnIdsOnly:!0,returnCountOnly:!0})}async function V(r,e,i){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const t=await l(r,e,"json",i,{returnExtentOnly:!0,returnCountOnly:!0}),n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(d);if(n.hasOwnProperty("count"))throw new Error(d);return t}async function l(r,e,i,t={},n={}){const a=typeof r=="string"?p(r):r,o=e.geometry?[e.geometry]:[],s=await S(o,null,{signal:t.signal}),c=s?.[0];c!=null&&((e=e.clone()).geometry=c);const u=m({...a.query,f:i,...n,...F(e,n)});return x(E(a.path,q(e,n)?"query3d":"query"),{...t,responseType:i==="pbf"?"array-buffer":"json",query:{...u,...t.query}})}function q(r,e){return r.formatOf3DObjects!=null&&!(e.returnCountOnly||e.returnExtentOnly||e.returnIdsOnly)}export{l as E,I as S,w as c,b as d,P as f,z as p,m as t,V as x};
