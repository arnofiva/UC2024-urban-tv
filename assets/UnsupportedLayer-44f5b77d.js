import{ar as n,hr as p,aj as s,ak as a,am as l,aB as d,at as u}from"./index-b9c5f9ae.js";import{j as y}from"./PortalLayer-0852baa6.js";let t=class extends y(n(d)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{p(()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let i="Unsupported layer type";r&&(i+=" "+r),o(new u("layer:unsupported-layer-type",i,{layerType:r}))})}))}read(e,o){const r={resourceInfo:e};e.id!=null&&(r.id=e.id),e.title!=null&&(r.title=e.title),super.read(r,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};s([a({readOnly:!0})],t.prototype,"resourceInfo",void 0),s([a({type:["show","hide"]})],t.prototype,"listMode",void 0),s([a({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),s([a({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=s([l("esri.layers.UnsupportedLayer")],t);const f=t;export{f as default};
