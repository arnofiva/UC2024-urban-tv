import{aq as b,hL as F,aR as c,ai as h,d8 as E,ay as s,aj as o,ak as r,am as V,hM as $}from"./index-b9c5f9ae.js";import{t as C}from"./memoize-3e55df82.js";import{j as D,y as A}from"./SnappingManagerPool-e41ad62b.js";import{o as I,i as q}from"./queryEngineUtils-8023524f.js";import{i as d,r as G,n as m}from"./symbologySnappingCandidates-7ac8185d.js";import"./geodesicLengthMeasurementUtils-bff5c3df.js";import"./geometryEngine-3592e805.js";import"./geometryEngineBase-110537d2.js";import"./hydrated-c8750e78.js";import"./geometry2dUtils-b95ed64a.js";import"./FeatureFilter-cd09ce2a.js";import"./floorFilterUtils-73949d2d.js";import"./keybindings-de2f1787.js";import"./VertexSnappingCandidate-6990a552.js";import"./PointSnappingHint-352c7a75.js";let a=class extends b{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return d();const n=async(p,l)=>(await $(e.whenLayerView(t),l)).elevationAlignPointsInFeatures(p,l);return d(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return G(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?m(this._symbologySnappingSupported,async(i,n)=>{const p=await e.whenLayerView(t);return s(n),p.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)}):m()}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&(e.whenLayerView(t).then(i=>this._layerView3D=i),this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:n}=t;F(i,n)&&this._snappingElevationAligner.notifyElevationSourceChange()}),c(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),h),c(()=>this._layerView3D!=null?this._layerView3D.layer?.renderer:null,()=>this._symbologySnappingFetcher.notifySymbologyChange(),h),E(()=>this._layerView3D?.layer,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(e){super(e),this.view=null,this._layerView3D=null,this._memoizedMakeGetGroundElevation=C(q)}refresh(){}async fetchCandidates(e,t){const{layer:i}=this.layerSource,n=i.source;if(!n?.querySnapping)return[];const p=D(i),l=A(e,this.view?.type??"2d",p),v=await n.querySnapping(l,{signal:t});s(t);const u=e.coordinateHelper.spatialReference,y=await this._snappingElevationAligner.alignCandidates(v.candidates,u,t);s(t);const g=await this._symbologySnappingFetcher.fetch(y,t);s(t);const S=g.length===0?y:[...y,...g],w=this._snappingElevationFilter.filter(l,S),_=this._memoizedMakeGetGroundElevation(this.view,u);return w.map(f=>I(f,_))}};o([r({constructOnly:!0})],a.prototype,"layerSource",void 0),o([r({constructOnly:!0})],a.prototype,"view",void 0),o([r()],a.prototype,"_snappingElevationAligner",null),o([r()],a.prototype,"_snappingElevationFilter",null),o([r()],a.prototype,"_symbologySnappingFetcher",null),o([r()],a.prototype,"_layerView3D",void 0),o([r()],a.prototype,"_symbologySnappingSupported",null),a=o([V("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],a);export{a as FeatureCollectionSnappingSource};
