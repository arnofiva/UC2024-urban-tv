import{bT as E,aX as h,bS as S,dz as m,bP as y,dA as D,dB as N,bH as d,dC as M,dD as w,aL as T}from"./index-b9c5f9ae.js";import{d as b}from"./FeatureSet-0bdd79f0.js";const F=()=>T.getLogger("esri.rest.support.meshFeatureSet");function v(t,e,s){const r=s.features;s.features=[],delete s.geometryType;const n=b.fromJSON(s);if(n.geometryType="mesh",!s.assetMaps)return n;const a=P(e,s.assetMaps),i=t.sourceSpatialReference??E.WGS84,l=s.globalIdFieldName,{outFields:o}=t,f=o!=null&&o.length>0?I(o.includes("*")?null:new Set(o)):()=>({});for(const u of r){const c=L(u,l,i,e,a);n.features.push(new h({geometry:c,attributes:f(u)}))}return n}function I(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const s in e)t.has(s)||delete e[s];return e}}function L(t,e,s,r,n){const a=t.attributes[e],i=n.get(a);if(i==null||!t.geometry)return null;const l=A(t,s,r),o=S.fromJSON(t.geometry);o.spatialReference=s;const f=O(t.attributes,r),u=s.isGeographic?"local":"georeferenced",c=x(i);return c?m.createWithExternalSource(l,c,{extent:o,transform:f,vertexSpace:u}):m.createIncomplete(l,{extent:o,transform:f,vertexSpace:u})}function A({attributes:t},e,{transformFieldRoles:s}){const r=t[s.originX],n=t[s.originY],a=t[s.originZ];return new y({x:r,y:n,z:a,spatialReference:e})}function O(t,{transformFieldRoles:e}){return new D({translation:[t[e.translationX],-t[e.translationZ],t[e.translationY]],rotationAxis:[t[e.rotationX],-t[e.rotationZ],t[e.rotationY]],rotationAngle:t[e.rotationDeg],scale:[t[e.scaleX],t[e.scaleZ],t[e.scaleY]]})}var p;function P(t,e){const s=new Map;for(const r of e){const n=r.parentGlobalId;if(n==null)continue;const a=r.assetName,i=r.assetType,l=r.assetHash,o=r.assetURL,f=r.conversionStatus,u=r.seqNo,c=N(i,t.supportedFormats);if(!c){F().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const g=d(s,n,()=>({files:new Map}));d(g.files,a,()=>({name:a,type:i,mimeType:c,status:$(f),parts:[]})).parts[u]={hash:l,url:o}}return s}function x(t){const e=Array.from(t.files.values()),s=new Array;for(const r of e){if(r.status!==p.COMPLETED)return null;const n=new Array;for(const a of r.parts){if(!a)return null;n.push(new M(a.url,a.hash))}s.push(new w(r.name,r.mimeType,n))}return s}function $(t){switch(t){case"COMPLETED":case"SUBMITTED":return p.COMPLETED;case"INPROGRESS":return p.PENDING;default:return p.FAILED}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(p||(p={}));export{P as assetMapFromAssetMapsJSON,L as extractMesh,v as meshFeatureSetFromJSON};
