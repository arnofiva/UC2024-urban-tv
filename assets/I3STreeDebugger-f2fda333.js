import{dP as d,hK as S,eP as r,gn as u,h7 as h,al as g,aj as o,ak as c,am as b,fB as j,eo as v}from"./index-b9c5f9ae.js";import{d as m}from"./TileTreeDebugger-e138ece8.js";let p=class extends m{constructor(n){super(n)}getTiles(){const n=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,i=this.nodeSR;return n.map(l=>y(l,t,i)).filter(d).sort((l,s)=>l.lij[0]===s.lij[0]?l.label>s.label?-1:1:l.lij[0]-s.lij[0])}};function y(n,t,i){const l=n.serviceObbInIndexSR;if(l==null||t==null)return null;S(a,l.quaternion),r(e,l.center),u(e,i,0,e,t,0,1),a[12]=e[0],a[13]=e[1],a[14]=e[2];const s=[[],[],[]];h(e,l.halfSize,a),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),r(e,l.halfSize),e[0]=-e[0],h(e,e,a),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),r(e,l.halfSize),e[0]=-e[0],e[1]=-e[1],h(e,e,a),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),r(e,l.halfSize),e[1]=-e[1],h(e,e,a),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),r(e,l.halfSize),e[0]=-e[0],e[2]=-e[2],h(e,e,a),u(e,t,0,e,i,0,1),s[1].push([e[0],e[1]]),r(e,l.halfSize),e[2]=-e[2],h(e,e,a),u(e,t,0,e,i,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),r(e,l.halfSize),e[1]=-e[1],e[2]=-e[2],h(e,e,a),u(e,t,0,e,i,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const f=new g({rings:s,spatialReference:i});return{lij:[n.level,n.childCount,0],label:n.id,geometry:f}}o([c({constructOnly:!0})],p.prototype,"lv",void 0),o([c({constructOnly:!0})],p.prototype,"nodeSR",void 0),p=o([b("esri.views.3d.layers.support.I3STreeDebugger")],p);const a=j(),e=v();export{p as I3STreeDebugger};
