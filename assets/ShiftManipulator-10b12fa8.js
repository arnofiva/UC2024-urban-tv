import{cH as it,cA as nt,lm as at,aj as k,ak as V,bP as qe,hq as Ee,cj as ve,jb as Ae,am as ot,dh as q,oD as ze,kc as ct,kd as dt,fi as se,kf as Re,ot as Pe,kj as lt,ko as ut,ax as gt,kt as ht,ku as pt,pq as ft,kv as mt,py as bt,kq as J,lr as _t,kC as $t,pr as Tt,kI as Ot,kJ as wt,kn as It,pn as Ct,kP as Et,kN as vt,ox as At,f4 as $,f8 as Me,i9 as Rt,pz as oe,eH as Pt,fr as d,eY as p,eP as M,pA as Xe,eX as j,el as v,em as N,eZ as m,eO as y,eT as w,nN as Mt,eV as Ye,nP as X,pB as Nt,pC as he,pD as yt,pE as St,io as Lt,en as re,pF as _e,fy as Ze,nR as z,pG as Je,j7 as kt,eD as Ut,lx as Ke,h6 as xt,pH as Ht,nG as Qe,pI as pe,pJ as Ne,nL as Vt,fE as ye,pK as jt,aL as Dt,f9 as B,aR as $e,ai as Te,b6 as A,fb as U,pL as _,f3 as P,oG as Wt,oE as et,fz as Gt,fA as Se,fv as K,ks as Q,eo as ie,pM as Le,mC as ke,fB as ue,hK as Ue,pN as xe,pO as He,pP as Ve,pQ as Ft}from"./index-b9c5f9ae.js";import{e as Bt,i as je,u as De,v as qt,C as te,g as zt,j as Xt,k as Yt,q as Zt,b as Jt,d as We,s as Kt,n as tt,x as fe,U as Qt,S as Ge,c as es,l as ts,a as ss}from"./sliceToolConfig-0d88804b.js";import{O as rs,e as Oe,c as is,d as b,j as st}from"./InteractiveToolBase-2b6c83a1.js";import{g as ns}from"./ImageMaterial-d8618430.js";import{j as F}from"./persistable-33923315.js";import{r as as}from"./projectionUtils-aa69d3c0.js";import{a as os,f as cs}from"./LineVisualElement-8d99b1d5.js";let I=class extends it(nt){constructor(t){super(t),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}equals(t){return this.heading===t.heading&&this.tilt===t.tilt&&at(this.position,t.position)&&this.width===t.width&&this.height===t.height}};k([V({readOnly:!0,json:{read:!1,write:!0}})],I.prototype,"type",void 0),k([V({type:qe}),F()],I.prototype,"position",void 0),k([V({type:Number,nonNullable:!0,range:{min:0,max:360}}),F(),Ee(e=>ve.normalize(Ae(e),0,!0))],I.prototype,"heading",void 0),k([V({type:Number,nonNullable:!0,range:{min:0,max:360}}),F(),Ee(e=>ve.normalize(Ae(e),0,!0))],I.prototype,"tilt",void 0),k([V({type:Number,nonNullable:!0}),F()],I.prototype,"width",void 0),k([V({type:Number,nonNullable:!0}),F()],I.prototype,"height",void 0),I=k([ot("esri.analysis.SlicePlane")],I);const ds=I,ls=q(0,0,0,.04);function us({accentColor:e}){return ze(e,.5)}function gs({accentColor:e}){return ze(e,.7)}function hs(e){const t=new ct,{vertex:a,fragment:r,attributes:i,varyings:n}=t;return dt(a,e),i.add(se.POSITION,"vec3"),i.add(se.UV0,"vec2"),n.add("vUV","vec2"),a.code.add(Re`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),r.uniforms.add(new Pe("backgroundColor",s=>s.backgroundColor),new Pe("gridColor",s=>s.gridColor),new lt("gridWidth",s=>s.gridWidth)),r.code.add(Re`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),t}const ps=Object.freeze(Object.defineProperty({__proto__:null,build:hs},Symbol.toStringTag,{value:"Module"}));class fs extends Tt{constructor(){super(...arguments),this.backgroundColor=q(1,0,0,.5),this.gridColor=q(0,1,0,.5),this.gridWidth=4}}class ce extends ht{initializeProgram(t){return new pt(t.rctx,ce.shader.get().build(this.configuration),ft)}initializePipeline(){return mt({blending:bt(J.ONE,J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA),depthTest:{func:_t.LESS},colorWrite:$t})}}ce.shader=new ut(ps,()=>gt(()=>import("./SlicePlaneMaterial.glsl-1e34ad3a.js"),["./SlicePlaneMaterial.glsl-1e34ad3a.js","./index-b9c5f9ae.js","./index-e15ba190.css","./sliceToolConfig-0d88804b.js","./InteractiveToolBase-2b6c83a1.js","./EditGeometryOperations-54784994.js","./geometry2dUtils-b95ed64a.js","./ImageMaterial-d8618430.js","./persistable-33923315.js","./MD5-715f37cd.js","./resourceExtension-8cfc5a00.js","./projectionUtils-aa69d3c0.js","./LineVisualElement-8d99b1d5.js"],import.meta.url));let ms=class extends Ot{constructor(t){super(t,new _s),this.produces=new Map([[wt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,a=>a===It.Color]]),this._configuration=new Ct}createBufferWriter(){return new Et(vt)}createGLMaterial(t){return new bs(t)}getConfiguration(){return this._configuration}};class bs extends At{constructor(t){super(t),this.ensureTechnique(ce,null)}beginSlot(){return this.technique}}class _s extends fs{constructor(){super(...arguments),this.renderOccluded=$.Occlude,this.isDecoration=!1}}class $s extends os{constructor(t){super(t),this._material=null,this._renderOccluded=$.OccludeAndTransparent,this._gridWidth=1,this._gridColor=q(1,0,0,1),this._backgroundColor=q(1,0,0,1),this.applyProperties(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(t){this._gridWidth!==t&&(this._gridWidth=t,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(t){Me(this._gridColor,t),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){Me(this._backgroundColor,t),this._updateMaterial()}createExternalResources(){this._material=new ms(this._materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(t){this._material!=null&&t(this._material)}createGeometries(t){if(this._material!=null){const a=Rt(this._material);t.addGeometry(a)}}get _materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){this._material!=null&&this._material.setParameters(this._materialParameters)}}function Vs(e,t,a,r,i,n,s,o){return Ts(t,s.worldUpAtPosition(e,d.get()),i,n,o.basis1,o.basis2),p(o.basis1,o.basis1,a),p(o.basis2,o.basis2,r),M(o.origin,e),Xe(o.basis2,o.basis1,o.origin,o.plane),o}function Ts(e,t,a,r,i,n){const s=j(e,t),o=d.get(),l=d.get();switch(r===R.HORIZONTAL_OR_VERTICAL?Math.abs(s)>Bt?R.HORIZONTAL:R.VERTICAL:r){case R.VERTICAL:{const c=Math.abs(s)<=je?e:a.viewUp;v(o,c,t),M(l,t);break}case R.HORIZONTAL:v(o,a.viewUp,t),v(l,t,o);break;case R.TILTED:{const c=Math.abs(s)<=je?t:a.viewUp;v(o,c,e),v(l,e,o);break}}const u=v(d.get(),o,l);j(u,a.viewForward)>0&&p(l,l,-1),N(i,o),N(n,l)}function Os(e,t,a){const r=t.worldUpAtPosition(e.origin,d.get()),i=e.basis1,n=Ce(e,r),s=Math.round(n/D)*D;return pe(e,s-n,i,a)}function js(e,t,a,r,i,n){const s=M(d.get(),i.origin);m(s,s,p(d.get(),i.basis1,e.direction[0]<0?1:-1)),m(s,s,p(d.get(),i.basis2,e.direction[1]<0?1:-1));const o=y(i.basis1),l=y(i.basis2),u=w(d.get(),a,s),c=w(d.get(),t,s);let g=0,h=0;if(Ie(e)){const de=me(i),W=me(n);g=o-.5*e.direction[0]*j(i.basis1,c)/o,h=l-.5*e.direction[1]*j(i.basis2,c)/l;const Y=W/de;g*=Y,h*=Y}const f=g+.5*e.direction[0]*j(i.basis1,u)/o,O=h+.5*e.direction[1]*j(i.basis2,u)/l,x=p(d.get(),i.basis1,f/o),S=p(d.get(),i.basis2,O/l);(f<=0||Fe(n.origin,x,r)<=De)&&M(x,n.basis1),(O<=0||Fe(n.origin,S,r)<=De)&&M(S,n.basis2);const T=M(d.get(),s);return m(T,T,p(d.get(),x,e.direction[0]<0?-1:1)),m(T,T,p(d.get(),S,e.direction[1]<0?-1:1)),Mt(T,x,S,n)}function Ds(e,t){return qt*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function Ws(e,t,a,r){const i=v(d.get(),t,a);return v(i,i,t),Ye(e,i,r)}function Gs(e,t){return rs(e.basis1,e.basis2,e.origin,t)}function Fs(e,t,a,r){const i=t.worldUpAtPosition(e.origin,d.get()),n=d.get();switch(a){case ne.HEADING:M(n,i);break;case ne.TILT:M(n,e.basis1)}return Ye(e.origin,n,r)}function Bs(e,t,a,r){const i=we(a,C.NEGATIVE_X),n=X.get();Nt(n,t,i.edge*Math.PI/2);const s=N(d.get(),i.basis);let o=p(d.get(),s,i.direction*r.computeScreenPixelSizeAt(i.position)*te);m(o,o,i.position);const l=r.projectToRenderScreen(o,he(d.get())),u=ws(r,l);yt(r,l,ee),N(ee.direction,ee.direction);const c=d.get();!u&&St(a,ee,c)&&(o=c),n[12]=0,n[13]=0,n[14]=0,e.modelTransform=n,e.renderLocation=Lt(o),u?e.state|=ae:e.state&=~ae}function ws(e,t){const[a,r,i,n]=e.viewport,s=Math.min(i,n)/16;let o=!0;return t[0]<a+s?(t[0]=a+s,o=!1):t[0]>a+i-s&&(t[0]=a+i-s,o=!1),t[1]<r+s?(t[1]=r+s,o=!1):t[1]>r+n-s&&(t[1]=r+n-s,o=!1),o}function qs(e,t,a,r){const i=y(r.basis1),n=y(r.basis2),s=rt(r),o=me(r),l=re(d.get(),0,0,0);m(l,p(d.get(),r.basis1,t.direction[0]),p(d.get(),r.basis2,t.direction[1])),m(l,r.origin,l);let u=0,c=1;if(Ie(t))t.direction[0]===1&&t.direction[1]===-1?u=D:t.direction[0]===1&&t.direction[1]===1?u=Math.PI:t.direction[0]===-1&&t.direction[1]===1&&(u=3*Math.PI/2),c=o;else{const h=t.direction[0]!==0?1:2;u=h===1?D:0,c=(h===1?n:i)-s}const g=_e(X.get(),u);Ze(g,g,re(d.get(),c,c,c)),z(g,a,g),g[12]=0,g[13]=0,g[14]=0,e.modelTransform=g,e.renderLocation=l}function zs(e,t,a,r){const i=r.worldUpAtPosition(a.origin,d.get()),n=we(a,C.POSITIVE_X),s=_e(X.get(),n.edge*Math.PI/2);Je(s,s,-Ce(a,i)),z(s,t,s),s[12]=0,s[13]=0,s[14]=0,e.modelTransform=s,e.renderLocation=n.position}function Xs(e,t,a){const r=we(a,C.POSITIVE_Y),i=_e(X.get(),r.edge*Math.PI/2);Je(i,i,D),z(i,t,i),i[12]=0,i[13]=0,i[14]=0,e.modelTransform=i,e.renderLocation=r.position}var C;function we(e,t){switch(t){case C.POSITIVE_X:return{basis:e.basis1,direction:1,position:m(d.get(),e.origin,e.basis1),edge:t};case C.POSITIVE_Y:return{basis:e.basis2,direction:1,position:m(d.get(),e.origin,e.basis2),edge:t};case C.NEGATIVE_X:return{basis:e.basis1,direction:-1,position:w(d.get(),e.origin,e.basis1),edge:t};case C.NEGATIVE_Y:return{basis:e.basis2,direction:-1,position:w(d.get(),e.origin,e.basis2),edge:t}}}function Fe(e,t,a){const r=a.projectToRenderScreen(m(d.get(),e,t),he(d.get())),i=a.projectToRenderScreen(w(d.get(),e,t),he(d.get()));return kt(w(r,r,i))}function rt(e){const t=y(e.basis1),a=y(e.basis2);return zt*Math.min(t,a)}function me(e){return rt(e)}function Ie(e){return e.direction[0]!==0&&e.direction[1]!==0}function Ys(e){const t=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]];return new cs({view:e,attached:!1,color:gs(e.effectiveTheme),width:Xt,renderOccluded:$.OccludeAndTransparent,geometry:[t],isDecoration:!0})}function Zs(e){return new $s({view:e,attached:!1,backgroundColor:ls,gridColor:us(e.effectiveTheme),gridWidth:4,renderOccluded:$.OccludeAndTransparent,isDecoration:!0})}function Js(e,t,a,r=new ds){if(e==null)return null;const{renderCoordsHelper:i}=t,n=i.fromRenderCoords(e.origin,new qe({spatialReference:t.spatialReference}));if(n==null)return null;const s=Ut(n,a);if(s==null)return null;r.position=s;const o=2*y(e.basis1),l=2*y(e.basis2),u=Ke.renderUnitScaleFactor(t.spatialReference,a);r.width=o*u,r.height=l*u;const c=i.worldUpAtPosition(e.origin,d.get());return r.tilt=xt(Ce(e,c)),r.heading=i.headingAtPosition(e.origin,e.basis1)-90,r}function Ce(e,t){return Ht(t,e.basis2,e.basis1)+D}function Is(e,t,a,r,i,n,s=Qe()){return n.toRenderCoords(e,s.origin)?(n.worldBasisAtPosition(s.origin,Ne.X,s.basis1),n.worldBasisAtPosition(s.origin,Ne.Y,s.basis2),Xe(s.basis2,s.basis1,s.origin,s.plane),pe(s,-ye(t),Vt(s),s),pe(s,ye(a),s.basis1,s),p(s.basis1,s.basis1,r/2),p(s.basis2,s.basis2,i/2),jt(s),s):(Dt.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${e.spatialReference.wkid} is not supported`),null)}function Ks(e,t){if(e?.position==null)return null;const a=as(e.position,t.spatialReference,t.elevationProvider);if(a==null)return null;const r=Ke.renderUnitScaleFactor(e.position.spatialReference,t.spatialReference),i=e.width*r,n=e.height*r;return{position:a,heading:e.heading,tilt:e.tilt,renderWidth:i,renderHeight:n}}function Qs(e,t,a,r=Qe()){if(e==null)return null;const i=Is(e.position,e.heading,e.tilt,e.renderWidth,e.renderHeight,t.renderCoordsHelper,r);return a.tiltEnabled||i==null||Os(i,t.renderCoordsHelper,i),i}(function(e){e[e.POSITIVE_X=0]="POSITIVE_X",e[e.POSITIVE_Y=1]="POSITIVE_Y",e[e.NEGATIVE_X=2]="NEGATIVE_X",e[e.NEGATIVE_Y=3]="NEGATIVE_Y"})(C||(C={}));const E=oe.Custom1;var ne,R;(function(e){e[e.HEADING=1]="HEADING",e[e.TILT=2]="TILT"})(ne||(ne={})),function(e){e[e.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",e[e.HORIZONTAL=1]="HORIZONTAL",e[e.VERTICAL=2]="VERTICAL",e[e.TILTED=3]="TILTED"}(R||(R={}));const ae=oe.Custom2,ee=Pt(),D=Math.PI/2,ge=oe.Custom1,Cs=oe.Custom2;function er(e){return(e.type==="building-scene-3d"?e:null)!=null}class tr extends Oe{constructor(t,a){const r=Ie(a),i=r?Jt:We,n=i*Kt,s=We,o={renderOccluded:$.OccludeAndTransparent,isDecoration:!0},l=new B({...o,width:i}),u=new B({...o,width:n}),c=new B({...o,width:s});super({view:t,...is,...Es({isCorner:r,unfocusedMaterial:l,focusedMaterial:u,outlineMaterial:c})}),this._themeHandle=$e(()=>t.effectiveTheme.accentColor,g=>{const h=A.toUnitRGBA(g);l.setParameters({color:h}),u.setParameters({color:h}),c.setParameters({color:h})},Te)}destroy(){this._themeHandle.remove(),super.destroy()}}function Es({isCorner:e,unfocusedMaterial:t,focusedMaterial:a,outlineMaterial:r}){const i=e?[P(1,0,0),P(0,0,0),P(0,1,0)]:[P(1,0,0),P(-1,0,0)];return{renderObjects:[new b(U(t,i),_.Unfocused|ge),new b(U(a,i),_.Focused|ge),new b(U(r,i),Cs)],collisionType:{type:"line",paths:[i]},radius:e?Yt:Zt,state:ge}}class sr extends Oe{constructor(t,a){const r=new ns({transparent:!0,writeDepth:!1,renderOccluded:$.Opaque,isDecoration:!0}),i=st.calloutWidth,n=new B({width:i,renderOccluded:$.OccludeAndTransparent,isDecoration:!0});super({view:t,...vs({imageMaterial:r,calloutMaterial:n})}),this._currentTexture=null,this._themeHandle=$e(()=>t.effectiveTheme.accentColor,s=>{const o=Wt(s,.5),l=et(s),u=this._currentTexture,c=a(o,l);r.setParameters({textureId:c.texture.id}),n.setParameters({color:A.toUnitRGBA(s)}),this._currentTexture=c,u?.release()},Te)}destroy(){this._themeHandle.remove(),this._currentTexture?.release(),super.destroy()}}function vs({imageMaterial:e,calloutMaterial:t}){const{focusMultiplier:a,calloutLength:r,discRadius:i}=st,n=i*a,s=(c,g)=>{const h=[0,1,2,2,3,0];return new Gt(g,[[se.POSITION,new Se([r-c,-c,0,r+c,-c,0,r+c,c,0,r-c,c,0],h,3,!0)],[se.UV0,new Se([0,0,1,0,1,1,0,1],h,2,!0)]])},o=U(t,[[0,0,0],[r-i,0,0]]),l=U(t,[[0,0,0],[r-n,0,0]]),u=E;return{autoScaleRenderObjects:!1,collisionPriority:1,collisionType:{type:"disc",direction:[0,0,1],offset:[r,0,0]},focusMultiplier:a,radius:i,renderObjects:[new b(s(i,e),_.Unfocused|u),new b(o,_.Unfocused|u),new b(s(n,e),_.Focused|u),new b(l,_.Focused|u)],state:u}}var be;(function(e){e[e.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",e[e.CENTER_ON_ARROW=1]="CENTER_ON_ARROW"})(be||(be={}));class rr extends Oe{constructor(t,a){const r=new B({width:1,renderOccluded:$.OccludeAndTransparent,isDecoration:!0}),i=new K({cullFace:Q.Back,renderOccluded:$.Opaque,isDecoration:!0}),n=new K({cullFace:Q.Back,renderOccluded:$.Opaque,isDecoration:!0}),s=new K({cullFace:Q.Back,renderOccluded:$.Opaque,isDecoration:!0}),o=new K({writeDepth:!1,cullFace:Q.Front,renderOccluded:$.Transparent,isDecoration:!0});super({view:t,...As({offsetMode:a,tubeMaterial:i,tipMaterial:n,capMaterial:s,outlineMaterial:o,calloutMaterial:r})}),this._themeHandle=$e(()=>t.effectiveTheme.accentColor,l=>{const u=et(l),c=A.toUnitRGBA(l),g=A.toUnitRGBA(u),h=A.toUnitRGBA(A.blendColors(u,l,.4)),f=A.toUnitRGBA(A.blendColors(u,l,.14));r.setParameters({color:c}),i.setParameters({color:f}),n.setParameters({color:g}),s.setParameters({color:h}),o.setParameters({color:c})},Te)}destroy(){this._themeHandle.remove(),super.destroy()}}function As({offsetMode:e,tubeMaterial:t,tipMaterial:a,capMaterial:r,outlineMaterial:i,calloutMaterial:n}){const s=e===be.CENTER_ON_CALLOUT?te:0,o=[P(s,0,-Ge/2),P(s,0,Ge/2)],l=Ps(o),u=Be({vertices:o,padding:0,materials:{tube:t,tip:a,cap:r}}),c=Be({vertices:o,padding:Qt,materials:{tube:i,tip:i,cap:i}}),g=U(n,[[s,0,0],[s-te,0,0]]),h=U(n,[[s,0,0],[s-te,0,0]]);return{renderObjects:[...u.normal.map(f=>new b(f,_.Unfocused|E)),...c.normal.map(f=>new b(f,_.Unfocused|E)),new b(g,_.Unfocused|E|ae),...u.focused.map(f=>new b(f,_.Focused|E)),...c.focused.map(f=>new b(f,_.Focused|E)),new b(h,_.Focused|E|ae)],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[l]},collisionPriority:1,radius:tt,state:E}}function Be({vertices:e,padding:t,materials:a}){const r=i=>{const n=e.slice(0),s=w(d.get(),n[0],n[1]);N(s,s);const o=w(d.get(),n[n.length-1],n[n.length-2]);if(N(o,o),t>0){const G=p(ie(),o,-t);n[n.length-1]=m(G,G,n[n.length-1]);const H=p(ie(),s,-t);n[0]=m(H,H,n[0])}const l=i?es:1,u=fe*l,c=tt*l,g=Le(X.get());if(t>0){const G=u/4,H=re(d.get(),0,G,0),Z=1+t/G;ke(g,g,H),Ze(g,g,re(d.get(),Z,Z,Z)),ke(g,g,p(H,H,-1/Z))}const h=Le(ue()),f=P(0,1,0),O=Ue(ue(),xe(He.get(),f,o));O[12]=n[n.length-1][0],O[13]=n[n.length-1][1],O[14]=n[n.length-1][2],z(O,O,g);const x=a.tube,S=Rs(ts*(i?ss:1)+t,n,x);S.transformation=h;const T=[S],de=a.tip,W=Ve(de,u,c,24,!1,!1,!0);W.transformation=O,T.push(W);const Y=a.cap,le=Ve(Y,u,c,24,!1,!0,!1);le.transformation=O,T.push(le);const L=Ue(ue(),xe(He.get(),f,s));return L[12]=n[0][0],L[13]=n[0][1],L[14]=n[0][2],z(L,L,g),T.push(W.instantiate({transformation:L})),T.push(le.instantiate({transformation:L})),T};return{normal:r(!1),focused:r(!0)}}function Rs(e,t,a){const r=[];for(let n=0;n<12;n++){const s=n/12*2*Math.PI;r.push([Math.cos(s)*e,Math.sin(s)*e])}return Ft(a,r,t,[],[],!1)}function Ps(e,t){const a=w(ie(),e[e.length-1],e[e.length-2]);N(a,a),p(a,a,fe),m(a,a,e[e.length-1]);{const r=w(ie(),e[0],e[1]);return N(r,r),p(r,r,fe),m(r,r,e[0]),[r,...e,a]}}export{Ys as A,E as C,Ie as E,be as H,rr as I,Ks as L,R as M,Js as R,ae as S,Cs as U,Qs as V,ne as _,qs as a,gs as b,Gs as c,ls as d,Vs as e,Ws as f,sr as g,ds as h,us as i,Zs as j,me as k,Fs as l,zs as m,ge as n,Xs as p,js as r,Ds as s,hs as t,Bs as u,tr as v,er as x};
