import{an as a,d6 as d,d7 as o,aq as u,ah as p,aL as y,ao as h,d3 as l,aj as i,ak as s,am as g}from"./index-b9c5f9ae.js";let t=class extends a(d(o.EventedMixin(u))){constructor(e){super(e),this._updatingHandles=new p,this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if(e.name!=="layerview:create-error"){const n=this.layer&&this.layer.id||"no id",r=this.layer?.title||"no title";y.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${n}')`,e)}})}destroy(){this._updatingHandles=h(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&this.layer?.legendEnabled===!0}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return this.layer?.visible===!0}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,n=this.layer?.visibilityTimeExtent;return!e||!n||!e.intersection(n).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&l(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return l(r)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};i([s()],t.prototype,"view",void 0),i([s()],t.prototype,"fullOpacity",null),i([s()],t.prototype,"layer",void 0),i([s()],t.prototype,"parent",void 0),i([s({readOnly:!0})],t.prototype,"suspended",null),i([s({readOnly:!0})],t.prototype,"suspendInfo",null),i([s({readOnly:!0})],t.prototype,"legendEnabled",null),i([s({type:Boolean,readOnly:!0})],t.prototype,"updating",null),i([s({readOnly:!0})],t.prototype,"updatingProgress",null),i([s()],t.prototype,"updateSuspended",null),i([s()],t.prototype,"visible",null),i([s({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),i([s({readOnly:!0})],t.prototype,"visibleAtCurrentTimeExtent",null),t=i([g("esri.views.layers.LayerView")],t);const c=t;export{c as y};
