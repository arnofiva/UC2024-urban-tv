import{hQ as P,bd as D,hR as q,hS as E,ay as z,hT as G,hU as $,hV as Q,hW as W,bQ as A}from"./index-8b5e7d9b.js";import{u as B}from"./elevationInfoUtils-25b84599.js";async function N(a,d,l,b,s){const{elevationProvider:f,renderCoordsHelper:i}=a,{elevationInfo:u}=d,{pointsInFeatures:R,spatialReference:h}=b,g=D.fromJSON(h),y=q(u,!0),m=await E(y,g,s);z(s);const c=[],e=new Set,t=new Set;p.spatialReference=g;const o=a.elevationProvider.spatialReference??a.spatialReference;for(const{objectId:n,points:r}of R){const I=l(n);if(I==null){for(const S of r)c.push(S.z??0);e.add(n);continue}I.isDraped&&t.add(n);const C=I.graphic.geometry;w.setFromElevationInfo(B(C,u)),w.updateFeatureExpressionInfoContext(m,I.graphic,d);for(const{x:S,y:F,z:O}of r)p.x=S,p.y=F,p.z=O??0,await G(p,j,o,0,{signal:s}),$(j,f,w,i,v),c.push(v.z)}return{elevations:c,drapedObjectIds:t,failedObjectIds:e}}const w=new Q,p=P(0,0,0,D.WGS84),v=new W,j=[0,0,0];async function T(a,d,l){if(a==null||d.candidates.length===0)return x;const b=a.graphics3DGraphicsByObjectID??a.graphics3DGraphics,s=[],f=[],{renderer:i}=a,u=i!=null&&"arcadeRequired"in i&&i.arcadeRequired?A():null,R=async(e,{graphic:t,graphics3DSymbol:o})=>{const n=await u,r=await a.getRenderingInfoAsync(t,i,n,{signal:l});return r==null?[]:o.queryForSnapping(e,g,r,l)},{candidates:h,spatialReference:g}=d;for(let e=0;e<h.length;++e){const t=h[e],{objectId:o}=t,n=typeof o=="number"?b?.get(o):void 0;if(n==null)continue;const{graphics3DSymbol:r}=n;r.symbologySnappingSupported&&(s.push(R(t,n)),f.push(e))}if(s.length===0)return x;const y=await Promise.all(s);z(l);const m=[],c=[];for(let e=0;e<y.length;++e){const t=y[e],o=f[e];for(const n of t)m.push(n),c.push(o)}return{candidates:m,sourceCandidateIndices:c}}const x={candidates:[],sourceCandidateIndices:[]};export{N as c,T as r};
