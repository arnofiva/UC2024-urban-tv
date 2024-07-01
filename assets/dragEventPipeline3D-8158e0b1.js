import{eH as v,eI as m,eJ as E,eK as S,eL as $,eM as y,bP as R,eo as i,eN as D,eO as H,eP as I,eF as G,eG as U,eQ as g,eR as T,eS as b,el as O,eT as x,eU as F,eV as h,eW as A,eX as k,eY as _,eZ as q,e_ as J,e$ as C,f0 as K}from"./index-b9c5f9ae.js";import{w as j}from"./InteractiveToolBase-2b6c83a1.js";function z(e,r){return M(e,()=>r)}function Z(e){return M(e,r=>r.plane)}function M(e,r){const t=i(),l=i();let s=!1;return n=>{const o=r(n);if(n.action==="start"){const c=m(n.screenStart,E(S.get())),u=$(e.state.camera,c,w);u!=null&&(s=y(o,u,t))}if(!s)return null;const a=m(n.screenEnd,E(S.get())),d=$(e.state.camera,a,w);return d==null?null:y(o,d,l)?{...n,renderStart:t,renderEnd:l,plane:o,ray:d}:null}}function B(e,r,t=0,l=null,s=null){let n=null;return o=>{if(o.action==="start"&&(n=e.sceneIntersectionHelper.intersectElevationFromScreen(g(o.screenStart.x,o.screenStart.y),r,t,s),n!=null&&l!=null&&!T(n,n,l))||n==null)return null;const a=e.sceneIntersectionHelper.intersectElevationFromScreen(g(o.screenEnd.x,o.screenEnd.y),r,t,s);return a!=null&&(l==null||T(a,a,l))?{...o,mapStart:n,mapEnd:a}:null}}function L(e,r,t,l=null,s=null){return B(e,t,D(r,e,t),l,s)}function ee(e,r,t,l){const s=t.toMap(e.screenStart);return s!=null?L(r,s,t.elevationInfo,l):null}function Q(e,r){const t=N,l=P,s=b();e.renderCoordsHelper.worldUpAtPosition(r,t);const n=O(F(s),t,x(l,r,e.state.camera.eye));return O(n,n,t),h(r,n,s)}function ne(e,r,t){let l=null;const s=new j;return s.next(z(e,Q(e,r))).next(V(e,r)).next(W(e,t)).next(n=>{n.mapEnd.x=n.mapStart.x,n.mapEnd.y=n.mapStart.y,l=n}),n=>(l=null,s.execute(n),l)}function V(e,r){const t=i(),l=H(r);e.renderCoordsHelper.worldUpAtPosition(r,t);const s=i(),n=i(),o=a=>(x(a,a,r),A(t,a,a),e.viewingMode==="global"&&H(a)*Math.sign(k(t,a))<.001-l&&x(a,_(a,t,.001),r),q(a,a,r),a);return a=>(a.renderStart=o(I(s,a.renderStart)),a.renderEnd=o(I(n,a.renderEnd)),a)}function te(e,r){const t=l=>{const s=m(l,E(S.get())),n=$(e.state.camera,s,w);return n==null?null:J(r,n,N,P)[1]};return l=>{const s=t(l.screenStart);if(s==null)return null;const n=t(l.screenEnd);return n==null?null:{...l,renderStart:s,renderEnd:n}}}function W(e,r){const t=e.renderCoordsHelper;return l=>{const s=t.fromRenderCoords(l.renderStart,new R({spatialReference:r})),n=t.fromRenderCoords(l.renderEnd,new R({spatialReference:r}));return s!=null&&n!=null?{...l,mapStart:s,mapEnd:n}:null}}var f;function re(e){let r=null;return t=>{switch(t.action){case"start":r=e.disableDisplay();break;case"end":case"cancel":r!=null&&(r.remove(),r=null)}return t}}function le(e,r=null){const t=G(e.state.viewingMode);t.options.selectionMode=!0,t.options.store=U.MIN,t.options.hud=!1;const l=g(),s={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},n=i(),o=r??e.spatialReference,a=c=>{e.map.ground&&e.map.ground.opacity<1?s.exclude.add(C):s.exclude.delete(C),e.sceneIntersectionHelper.intersectIntersectorScreen(m(c,l),t,s);const u=t.results.min;let p;if(u.getIntersectionPoint(n))p=u.intersector===K.TERRAIN?f.GROUND:f.OTHER;else{if(!t.results.ground.getIntersectionPoint(n))return null;p=f.GROUND}return{location:e.renderCoordsHelper.fromRenderCoords(n,new R({spatialReference:o})),surfaceType:p}};let d;return c=>{if(c.action==="start"){const p=a(c.screenStart);d=p!=null?p.location:null}if(d==null)return null;const u=a(c.screenEnd);return u?.location!=null?{...c,mapStart:d,mapEnd:u.location,surfaceType:u.surfaceType}:null}}(function(e){e[e.GROUND=0]="GROUND",e[e.OTHER=1]="OTHER"})(f||(f={}));const N=i(),P=i(),w=v();export{W as A,Z as C,L as D,ne as G,ee as M,z as O,te as k,re as q,le as z};
