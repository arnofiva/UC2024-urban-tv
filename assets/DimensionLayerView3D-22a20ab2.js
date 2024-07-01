import{aj as a,ak as t,am as y,aQ as h,d5 as w,aR as u,aZ as d,at as c,a_ as V,ao as p,a$ as _,aK as m,ax as v}from"./index-b9c5f9ae.js";import{l as A}from"./LayerView3D-2a51d3a6.js";import{y as f}from"./LayerView-fa457db7.js";const D=i=>{let s=class extends i{constructor(...e){super(...e),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(e){this.analysisView!=null&&(this.analysisView.interactive=e)}get results(){return this.analysisView!=null?this.analysisView.results:new h}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(e){this.analysisView!=null&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(e)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),s=a([y("esri.views.layers.DimensionLayerView")],s),s},o="analysis-view-handles";let n=class extends A(D(f)){constructor(i){super(i),this.type="dimension-3d",this._analysisModule=null}initialize(){this.addHandles(u(()=>this.layer.source,i=>{this._destroyAnalysisView(),i!=null&&this._createAnalysisView(i)},d),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new c("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(i){const s=V(async e=>(this.analysisView=await this._createAnalysisViewPromise(i,e),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(i,s){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:i,view:this.view,parent:this});if(await l.when(),m(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return v(()=>import("./DimensionAnalysisView3D-3874e024.js"),["./DimensionAnalysisView3D-3874e024.js","./index-b9c5f9ae.js","./index-e15ba190.css","./AnalysisView3D-0d85e2e0.js","./LengthDimension-245472cb.js","./TextOverlayItem-97ff30cb.js","./unitFormatUtils-6f18ee14.js","./Segment-da520f90.js","./LineVisualElement-8d99b1d5.js","./geodesicLengthMeasurementUtils-bff5c3df.js","./geometryEngine-3592e805.js","./geometryEngineBase-110537d2.js","./hydrated-c8750e78.js","./SnappingOperation-b40376cb.js","./ExtendedLineVisualElement-35cf9443.js","./vec4f32-0d1b2306.js","./EngineVisualElement-51b9c840.js","./LaserlineVisualElement-c883ff0e.js","./PointVisualElement-3c6d9f4f.js","./RightAngleQuadVisualElement-469ff09d.js","./SnappingManagerPool-e41ad62b.js","./geometry2dUtils-b95ed64a.js","./FeatureFilter-cd09ce2a.js","./floorFilterUtils-73949d2d.js","./keybindings-de2f1787.js","./PointSnappingHint-352c7a75.js","./InteractiveToolBase-2b6c83a1.js","./EditGeometryOperations-54784994.js","./dehydratedFeatureComparison-e8477f4e.js","./dragEventPipeline3D-8158e0b1.js","./ImageMaterial-d8618430.js","./memoize-3e55df82.js","./Factory-cbf0d03b.js","./analysisViewUtils-ca510bb5.js","./ToolIntersector-2696682b.js","./projectionUtils-aa69d3c0.js"],import.meta.url)}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([y("esri.views.3d.layers.DimensionLayerView3D")],n);const $=n;export{$ as default};
