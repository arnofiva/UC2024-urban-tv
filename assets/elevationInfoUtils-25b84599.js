import{dM as c}from"./index-8b5e7d9b.js";function a(n){return n?b:E}function d(n,e){return e?.mode?e.mode:a(n).mode}function v(n,e){return e??a(n)}function g(n,e){return d(n!=null&&n.hasZ,e)}function x(n,e){return v(n!=null&&!!n.hasZ,e)}function y(n){const e=h(n),t=g(n.geometry,e);return{mode:t,offset:e!=null&&t!=="on-the-ground"?(e.offset??0)*c(e.unit??"meters"):0}}function h(n){return n.layer&&"elevationInfo"in n.layer?n.layer.elevationInfo:null}function I(n,e,t,o=null){return f(n,e.x,e.y,e.hasZ?e.z:0,e.spatialReference,t,o)}function $(n,e,t,o,u=null){return f(n,e[0],e[1],e.length>2?e[2]:0,t,o,u)}function f(n,e,t,o,u,i,l=null){if(i==null)return;const r=l!=null?l.mode:"absolute-height";if(r==="on-the-ground")return 0;const{absoluteZ:s}=m(e,t,o,u,n,i);return p(s,e,t,o,u,n,l,r)}function m(n,e,t,o,u,i){const l=i.offset!=null?i.offset:0;switch(i.mode){case"absolute-height":return{absoluteZ:t+l,elevation:0};case"on-the-ground":{const r=u.elevationProvider.getElevation(n,e,0,o,"ground")??0;return{absoluteZ:r,elevation:r}}case"relative-to-ground":{const r=u.elevationProvider.getElevation(n,e,t,o,"ground")??0;return{absoluteZ:t+r+l,elevation:r}}case"relative-to-scene":{const r=u.elevationProvider.getElevation(n,e,t,o,"scene")??0;return{absoluteZ:t+r+l,elevation:r}}}}function p(n,e,t,o,u,i,l,r){const s=l?.offset!=null?l.offset:0;switch(r){case"absolute-height":return n-s;case"relative-to-ground":return n-((i.elevationProvider.getElevation(e,t,o,u,"ground")??0)+s);case"relative-to-scene":return n-((i.elevationProvider.getElevation(e,t,o,u,"scene")??0)+s)}}function P(n,e){if(e==null)return!1;const{mode:t}=e;return t!=null&&(n==="scene"&&t==="relative-to-scene"||n==="ground"&&t!=="absolute-height")}function w(n,e,t){return t&&t.mode!==e?`${n} only support ${e} elevation mode`:null}function z(n,e,t){return t?.mode===e?`${n} do not support ${e} elevation mode`:null}function M(n,e){return e?.featureExpressionInfo!=null&&e.featureExpressionInfo.expression!=="0"?`${n} do not support featureExpressionInfo`:null}function R(n,e){e&&n.warn(".elevationInfo=",e)}const b={mode:"absolute-height",offset:0},E={mode:"on-the-ground",offset:null};export{M as E,E as Z,z as b,I as c,$ as d,m as g,P as m,w as p,g as r,y as s,x as u,R as x,b as y};
