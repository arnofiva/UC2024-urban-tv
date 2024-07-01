import{dG as G,dH as j,bP as z,dI as O,dJ as v,bJ as P,dK as V,bT as _,bs as A}from"./index-b9c5f9ae.js";import{l as D,u as J}from"./heatmapUtils-aa7c68b3.js";import{Z as L}from"./utils-1637909e.js";import{c as E,B as R}from"./utils-a7cc7030.js";let c=null;const U=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Y(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function W(t,e,o,r){const a=G(o)?j(o):null,u=a?Math.round((a.valid[1]-a.valid[0])/e.scale[0]):null;return t.map(s=>{const i=new z(s.geometry);return O(e,i,i),s.geometry=a?Y(i,u??0,r[0]):i,s})}function k(t,e=18,o,r,a){const u=new Float64Array(r*a);e=Math.round(A(e));let s=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;const N=J(o);for(const{geometry:p,attributes:g}of t){const{x,y:m}=p,I=Math.max(0,x-e),M=Math.max(0,m-e),F=Math.min(a,m+e),$=Math.min(r,x+e),h=+N(g);for(let f=M;f<F;f++)for(let d=I;d<$;d++){const y=f*r+d,w=D(d-x,f-m,e)*h,l=u[y]+=w;s=Math.min(s,l),i=Math.max(i,l)}}return{min:s,max:i}}function Z(t){const e=U.exec(t);if(!e)return null;const{hh:o,mm:r,ss:a,ms:u}=e.groups;return Number(o)*v.hours+Number(r)*v.minutes+Number(a)*v.seconds+Number(u||0)}async function q(t,e,o=!0){if(!e)return[];const{field:r,field2:a,field3:u,fieldDelimiter:s,fieldInfos:i,timeZone:N}=t,p=r&&i?.find(l=>l.name.toLowerCase()===r.toLowerCase()),g=!!p&&P(p),x=!!p&&L(p),m=t.valueExpression,I=t.normalizationType,M=t.normalizationField,F=t.normalizationTotal,$=[],h=t.viewInfoParams;let f=null,d=null;if(m){if(!c){const{arcadeUtils:l}=await V();c=l}c.hasGeometryOperations(m)&&await c.enableGeometryOperations(),f=c.createFunction(m),d=h?c.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new _(h.spatialReference)}):null}const y=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(l=>{const b=l.attributes;let n;if(m){const T=w?{...l,layer:w}:l,C=c.createExecContext(T,d,N);n=c.executeFunction(f,C)}else b&&(n=b[r],a?(n=`${E(n)}${s}${E(b[a])}`,u&&(n=`${n}${s}${E(b[u])}`)):typeof n=="string"&&o&&(x?n=n?new Date(n).getTime():null:g&&(n=n?Z(n):null)));if(I&&typeof n=="number"&&isFinite(n)){const T=b&&parseFloat(b[M]);n=R(n,I,T,F)}$.push(n)}),$}export{q as b,W as j,Z as w,k as x};
