import{aj as v,am as u,aR as l,aZ as o,ig as d,a_ as w,c$ as f,ja as h}from"./index-b9c5f9ae.js";import{n as m}from"./InteractiveToolBase-2b6c83a1.js";let n=class extends m{constructor(a){super(a)}initialize(){this.addHandles(l(()=>this.analysisViewData.visible,a=>this.visible=a,o))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};n=v([u("esri.views.interactive.AnalysisToolBase")],n);function D(a,t){a.interactive=!0;const{tool:i,view:s}=a;s.activeTool=i;let e=d(t,()=>{s.activeTool===i&&(s.activeTool=null)});return w(async r=>{await f(()=>i==null||!i.active,r),e=h(e)},t)}function b(a,t){return l(()=>a.interactive,()=>y(a,t),o)}function y(a,t){a.interactive?$(a,t):c(a)}function $(a,t){c(a);const{view:i,analysis:s}=a,e=new t({view:i,analysis:s,analysisViewData:a});return a.tool=e,i.tools.add(e),e}function c(a){const{view:t,tool:i}=a;i!=null&&(t.tools.remove(i),a.tool=null)}export{b as a,D as l,n as o,c as v};
