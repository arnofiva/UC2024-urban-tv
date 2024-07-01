import{ah as i,ai as o,ak as g,ao as _,dp as f,j0 as k,bj as S,af as b,kE as C,aP as H,kF as L,aY as w,aQ as E,ay as $,dO as O}from"./index-8b5e7d9b.js";import{a as I,i as V}from"./DimensionAnalysisView3D-97b08dcc.js";import{r as R}from"./VertexSnappingCandidate-bd6d5c7c.js";import"./LineVisualElement-fc7385d7.js";import"./LengthDimension-aec24abc.js";import"./Segment-ec50fd17.js";import"./unitFormatUtils-4b3497b3.js";import"./elevationInfoUtils-25b84599.js";import"./analysisViewUtils-d9ecfeae.js";import"./Factory-9cf1118b.js";import"./ImageMaterial-0b6c45d0.js";import"./vec4f32-0d1b2306.js";import"./RightAngleQuadVisualElement-f61633a8.js";import"./PointVisualElement-8a3927d0.js";import"./Query-630c5d65.js";import"./EditGeometryOperations-aafb8f81.js";import"./FeatureFilter-5ab88729.js";import"./floorFilterUtils-73949d2d.js";import"./dehydratedFeatureComparison-43e0df71.js";let d=class extends _{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new j(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const s=e.coordinateHelper,{point:u}=e,a=x;this.renderCoordsHelper.toRenderCoords(u,s.spatialReference,a);const p=e.distance,c=typeof p=="number"?p:p.distance,h=await this._workerHandle.invoke({bounds:f(a[0],a[1],a[2],c),returnEdge:e.returnEdge,returnVertex:e.vertexMode!=="none"},t);return h.candidates.sort((y,m)=>y.distance-m.distance),h.candidates.map(y=>this._convertCandidate(s,y))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new I({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new R({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const s=S();return this.renderCoordsHelper.fromRenderCoords(t,s,e),V(s)}async _fetchAllEdgeLocations(e,t){const s=[],u=[];for(const{id:a,uid:p}of e.components)this._ids.has(a)&&s.push((async()=>{const c=await this.fetchEdgeLocations(a,t.signal),h=c.locations.buffer;return u.push(h),{id:a,uid:p,objectIds:c.objectIds,locations:h,origin:c.origin,type:c.type}})());return{result:{components:(await Promise.all(s)).filter(({id:a})=>this._ids.has(a))},transferList:u}}};i([o({constructOnly:!0})],d.prototype,"renderCoordsHelper",void 0),i([o({constructOnly:!0})],d.prototype,"fetchEdgeLocations",void 0),i([o({constructOnly:!0})],d.prototype,"schedule",void 0),i([o({readOnly:!0})],d.prototype,"availability",void 0),d=i([g("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],d);class j extends k{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}const x=S();let n=class extends _{get updating(){return this._updatingHandles.updating}constructor(r){super(r),this.availability=1,this._updatingHandles=new b,this._abortController=new AbortController}destroy(){this._tracker=C(this._tracker),this._abortController=H(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:r}=this,e=r.resourceController;this._edgeWorker=new L(v(e)),this._workerHandle=new d({renderCoordsHelper:this.view.renderCoordsHelper,schedule:v(e),fetchEdgeLocations:async(t,s)=>{if(this._tracker==null)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(t,this._edgeWorker,s)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([w(this._workerHandle),w(this._edgeWorker)])}async fetchCandidates(r,e){return this._workerHandle.fetchCandidates(r,e)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const r=this._abortController?.signal,e=await this.getLayerView();e==null||E(r)||(this._tracker=e.trackSnappingSources({add:(t,s)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:t,bounds:s},r))},remove:t=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:t},r))}}))}};function v(r){return e=>r.immediate.schedule(e)}i([o({constructOnly:!0})],n.prototype,"getLayerView",void 0),i([o({constructOnly:!0})],n.prototype,"view",void 0),i([o({readOnly:!0})],n.prototype,"updating",null),i([o({readOnly:!0})],n.prototype,"availability",void 0),n=i([g("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],n);let l=class extends _{get updating(){return this._i3sSources.some(r=>r.updating)}constructor(r){super(r),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(r=>r.destroy()),this._i3sSources.length=0}initialize(){const{view:r}=this,e=this.layerSource.layer;this._i3sSources=e.type==="building-scene"?this._getBuildingSceneI3SSources(r,e):[this._getSceneLayerI3SSource(r,e)]}async fetchCandidates(r,e){const t=await Promise.all(this._i3sSources.map(s=>s.fetchCandidates(r,e)));return $(e),t.flat()}refresh(){this._i3sSources.forEach(r=>r.refresh())}_getBuildingSceneI3SSources(r,e){return e.allSublayers.toArray().map(t=>t.type==="building-component"?new n({getLayerView:async()=>(await r.whenLayerView(e)).whenSublayerView(t),view:r}):null).filter(O)}_getSceneLayerI3SSource(r,e){return new n({getLayerView:async()=>{const t=await r.whenLayerView(e);return t.type==="scene-layer-graphics-3d"?void 0:t},view:r})}};i([o({constructOnly:!0})],l.prototype,"layerSource",void 0),i([o({constructOnly:!0})],l.prototype,"view",void 0),i([o({readOnly:!0})],l.prototype,"updating",null),i([o({readOnly:!0})],l.prototype,"availability",void 0),l=i([g("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],l);export{l as SceneLayerSnappingSource};
