import{at as y,cV as v,ef as W,aR as l,ai as T,eg as r,eh as _,aO as A,aW as E,ei as x,ej as L,bT as M,ek as I,el as D,em as P,en as F,aL as V,aj as m,ak as b,am as $,eo as S}from"./index-b9c5f9ae.js";import{l as C}from"./LayerView3D-2a51d3a6.js";import{i as R}from"./PopupSceneLayerView-b034d342.js";import{y as U}from"./LayerView-fa457db7.js";import"./popupUtils-a16b4cb5.js";var i;(function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"})(i||(i={}));const d=S(),w=S();let c=class extends R(C(U)){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){return this.layer.parsedUrl?.path??""}get wasmLayerId(){return this._wasmLayerId}initialize(){if(this._dbgFlags.add(i.Error),this.view.viewingMode!=="local")throw new y("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat)throw new y("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const e=this.layer.spatialReference;if(!v(e,this.view.spatialReference))throw new y("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const s=this.layer.currentVariableId,a=this.layer.getVolume(s),o=this.layer.getVariable(s);if(a!=null&&o!=null){const n=a.dimensions[0],t=a.dimensions[1],u=a.zDimension;if(u>1){const g=a.dimensions[u],f=n.size*t.size*g.size;let p=1;switch(o.renderingFormat.type){case"Int16":case"UInt16":p=2;break;case"Int32":case"UInt32":case"Float32":p=4}this._futureMemory=p*f}}const h=W(this).then(n=>{this._wasmLayerId=n,this._suspendedHandle=l(()=>this.suspended,t=>{const u=r(this.view);u&&u.setEnabled(this,!t)},T),this.addHandles([l(()=>this.layer.renderMode,t=>this._pushRenderModeToWasm(t)),l(()=>this.layer.currentVariableId,t=>this._pushCurrentVariableIdToWasm(t)),l(()=>this.layer.getSections(),t=>this._pushSectionsToWasm(t)),l(()=>this.layer.getVariableStyles(),t=>this._pushVariableStylesToWasm(t)),l(()=>this.layer.getVolumeStyles(),t=>this._pushVolumeStylesToWasm(t)),l(()=>this.layer.enableDynamicSections,t=>this._pushEnableDynamicSectionsToWasm(t)),l(()=>this.layer.enableIsosurfaces,t=>this._pushEnableIsosurfacesToWasm(t)),l(()=>this.layer.enableSections,t=>this._pushEnableSectionsToWasm(t)),l(()=>this.layer.enableSlices,t=>this._pushEnableSlicesToWasm(t)),l(()=>[this.layer.timeOffset,this.layer.timeExtent,this.layer.useViewTime],()=>this._updateLayerTimeProperties()),l(()=>this.slicePlaneEnabled,t=>this._pushAnalysisSliceToWasm(t,this.view.slicePlane)),l(()=>this.view.slicePlane,t=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,t))])}).catch(n=>{if(_(this),this._wasmLayerId=-1,n===-1)throw new y("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(n===-2)throw new y("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})});this.addResolvingPromise(h)}destroy(){_(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=r(this.view);return!(this._wasmLayerId<0||e==null)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return new A(this.usedMemory)}get visibleAtCurrentScale(){return E(this.layer.effectiveScaleRange,this.view.terrainScale)}whenGraphicBounds(e,s){const a=e.attributes["Voxel.WorldPosition"];if(a){const o=x(),h=JSON.parse(a);if(L(h,this.view.renderSpatialReference,w,this.view.spatialReference||M.WGS84))return I(o,w),Promise.resolve({boundingBox:o,screenSpaceObjects:[]})}return Promise.reject()}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){r(this.view)?.captureFrustum()}toggleFullVolumeExtentDraw(){r(this.view)?.toggleFullVolumeExtentDraw(this)}getLayerTimes(){return r(this.view)?.getLayerTimes(this)??[]}getCurrentLayerTimeIndex(){return r(this.view)?.getCurrentLayerTimeIndex(this)??0}_pushRenderModeToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setRenderMode(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setStaticSections(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(s?"have WASM":"don't have WASM!!!")),s?.setCurrentVariable(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setVariableStyles(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(e,s){const a=s??this.layer.enableSlices;for(let o=0;o<e.length;++o){const h=e[o];for(const n of h.slices)n.enabled=n.enabled&&a}}_pushVolumeStylesToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s&&(this._accountForEnableSlices(e,null),s.setVolumeStyles(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,s){const a=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(a?"have WASM":"don't have WASM!!!"));let o=!1;if(a){if(s){const h=s.origin;D(d,s.basis1,s.basis2),P(d,d),o=a.setAnalysisSlice(this,e,h,d)}else F(d,0,0,1),o=a.setAnalysisSlice(this,!1,d,d);o||this._dbg(i.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_updateLayerTimeProperties(){const e=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._updateLayerTimeProperties() called, "+(e?"have WASM":"don't have WASM!!!")),e&&e.updateLayerTimeProperties(this)}_pushEnableDynamicSectionsToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setEnableDynamicSections(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(e){const s=r(this.view);if(this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s){const a=this.layer.getVolumeStyles();this._accountForEnableSlices(a,e),s.setVolumeStyles(this,a)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setEnableIsosurfaces(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setEnableSections(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}async whenGraphicAttributes(e,s){return e}_dbg(e,s){this._dbgFlags.has(e)&&(e===i.Error?V.getLogger(this).error(s):V.getLogger(this).warn(s))}};m([b()],c.prototype,"layer",void 0),m([b()],c.prototype,"baseUrl",null),m([b({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0),m([b({readOnly:!0})],c.prototype,"visibleAtCurrentScale",null),c=m([$("esri.views.3d.layers.VoxelLayerView3D")],c);const B=c;export{B as default};
