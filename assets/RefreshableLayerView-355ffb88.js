import{aj as i,am as t,d8 as h,bf as d,aL as l}from"./index-b9c5f9ae.js";const f=s=>{let e=class extends s{initialize(){this.addHandles(h(()=>this.layer,"refresh",r=>{this.doRefresh(r.dataChanged).catch(a=>{d(a)||l.getLogger(this).error(a)})}),"RefreshableLayerView")}};return e=i([t("esri.views.layers.RefreshableLayerView")],e),e};export{f as i};
