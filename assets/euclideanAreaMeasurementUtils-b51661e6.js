import{j0 as f,j1 as R,j2 as U,j3 as b,eo as h,en as $,ej as v,j4 as C,j5 as k,j6 as x,j7 as A,eU as F,j8 as M,j9 as W}from"./index-b9c5f9ae.js";import{geodesicArea as w}from"./geometryEngine-3592e805.js";import{p as K,y as S}from"./geodesicLengthMeasurementUtils-bff5c3df.js";function L(n){const{spatialReference:e}=n;return K(e,Z,z,n)}function Z(n){return f(Math.abs(S([n],"square-meters")[0]),"square-meters")}function z(n){try{return f(Math.abs(w(n,"square-meters")),"square-meters")}catch{return null}}function N(n,e=q()){return g(n,e)}function O(n,e=q()){return g(n,e,!1)}function g(n,e,o=n.hasZ){const a=U(n.spatialReference),u=b(a);if(u==null)return null;const d=(i,s)=>!(s.length<2)&&($(i,s[0],s[1],o&&s[2]||0),!0);let j=0;for(const i of n.rings){const s=i.length;if(s<3)continue;const{positionsWorldCoords:r}=e;for(;r.length<s;)r.push(h());const p=B,c=$(D,0,0,0),y=1/s;for(let t=0;t<s;t++){if(!d(p,i[t])||!v(p,n.spatialReference,r[t],a))return null;C(c,c,r[t],y)}const m=k(r[0],r[1],c,x());if(A(F(m))===0)continue;for(let t=0;t<s;t++)M(m,c,r[t],r[t]);const l=E(r);for(let t=0;t<l.length;t+=3)j+=W(r[l[t]],r[l[t+1]],r[l[t+2]])}return f(j,u)}const B=h(),D=h();function q(){return{positionsWorldCoords:[]}}function E(n){return R(G(n),[],2)}function G(n){const e=new Float64Array(2*n.length);for(let o=0;o<n.length;++o){const a=n[o],u=2*o;e[u]=a[0],e[u+1]=a[1]}return e}export{q as U,N as g,O as j,E as k,L as o};
