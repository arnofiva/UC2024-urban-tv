import{ai as h,aM as c,ao as u,ep as m,aQ as p,aR as d,aN as y,aO as g,aj as i,ak as o,am as f}from"./index-b9c5f9ae.js";import{c as b,y as w,C as I,T as _,j as v,S as C,w as O}from"./Stop-74ce851d.js";import{l as S}from"./LayerView3D-2a51d3a6.js";import{O as V}from"./GraphicsProcessor-4a248c2a.js";import{l as G}from"./projectExtentUtils-2c067488.js";import{h as $}from"./EventedSet-c6899c49.js";import{y as P}from"./LayerView-fa457db7.js";import"./diffUtils-8f72b702.js";import"./Graphics3DObjectStates-2cfd6f63.js";import"./UniqueValueRenderer-7b7c2094.js";import"./ColorStop-3fcdc0d6.js";import"./colorRamps-4e691737.js";import"./jsonUtils-a21420ee.js";import"./FieldsIndex-0939f6d2.js";import"./UnknownTimeZone-25b10fba.js";import"./heatmapUtils-aa7c68b3.js";import"./optimizedFeatureQueryEngineAdapter-45806bd8.js";import"./PooledRBush-73842d9a.js";import"./quickselect-43e2d66b.js";import"./popupUtils-a16b4cb5.js";function j(e){return e instanceof b||e instanceof w||e instanceof I||e instanceof _||e instanceof v||e instanceof C||e instanceof O}let s=class extends S(P){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new $,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new V({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this._updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),h),this.addResolvingPromise(G(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.addHandles(c(()=>this.view?.basemapTerrain?.ready,()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",u(this.processor)),this._get("_routeItems")?.destroy()}get _routeItems(){return new m({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,this.layer.routeInfo!=null?new p([this.layer.routeInfo]):null]})}_routeItemsChanged(e){if(e.removed.length){this.loadedGraphics.removeMany(e.removed.map(t=>{const r=this._byObjectID.get(t);return this._byObjectID.delete(t),r}));for(const t of e.removed)this.removeHandles(t)}if(e.added.length){this.loadedGraphics.addMany(e.added.map(t=>{const r=t.toGraphic();return this._byObjectID.set(t,r),r}));for(const t of e.added)this.addHandles([d(()=>t.geometry,(r,a)=>{this._updateGraphic(t,"geometry",r,a)}),d(()=>t.symbol,(r,a)=>{this._updateGraphic(t,"symbol",r,a)})],t)}}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}get visibleAtCurrentScale(){return!this.processor?.scaleVisibilitySuspended}getSuspendInfo(){const e=super.getSuspendInfo();return e.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,e}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor?.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}async queryGraphics(){return new p(this.loadedGraphics.toArray())}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return j(e)&&(e=this._byObjectID.get(e)),this.processor.highlight(e)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||y.SYNC}isUpdating(){return!(!this.processor?.updating&&this.view?.basemapTerrain?.ready)}get performanceInfo(){return new g(this.processor?.graphicsCore.usedMemory??0,this.loadedGraphics.length,-1,-1,0,this.processor?.graphicsCore.performanceInfo??null)}_updateGraphic(e,t,r,a){const l=this._byObjectID.get(e);l[t]=r,n.graphic=l,n.property=t,n.oldValue=a,n.newValue=r,this.processor?.graphicsCore.graphicUpdateHandler(n)}};i([o()],s.prototype,"_routeItems",null),i([o()],s.prototype,"loadedGraphics",void 0),i([o({readOnly:!0})],s.prototype,"legendEnabled",null),i([o({readOnly:!0})],s.prototype,"visibleAtCurrentScale",null),i([o()],s.prototype,"layer",void 0),i([o({readOnly:!0})],s.prototype,"processor",void 0),i([o({type:Boolean})],s.prototype,"slicePlaneEnabled",void 0),s=i([f("esri.views.3d.layers.RouteLayerView3D")],s);const n={graphic:null,property:null,oldValue:null,newValue:null},W=s;export{W as default};
