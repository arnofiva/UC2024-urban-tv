import{aj as r,ak as p,am as s,dE as m,dF as l,at as i,c$ as n,aH as y}from"./index-b9c5f9ae.js";import{g as d}from"./FeatureLayerViewBase3D-4e053d01.js";import"./Graphics3DGraphicsPipeline-b3952dd1.js";import"./timeSupport-53bf9b98.js";import"./projectExtentUtils-2c067488.js";import"./dehydratedFeatureComparison-e8477f4e.js";import"./queryForSymbologySnapping-acd02907.js";import"./hash-6f442295.js";import"./diffUtils-8f72b702.js";import"./UniqueValueRenderer-7b7c2094.js";import"./ColorStop-3fcdc0d6.js";import"./colorRamps-4e691737.js";import"./Graphics3DObjectStates-2cfd6f63.js";import"./jsonUtils-a21420ee.js";import"./FieldsIndex-0939f6d2.js";import"./UnknownTimeZone-25b10fba.js";import"./heatmapUtils-aa7c68b3.js";import"./optimizedFeatureQueryEngineAdapter-45806bd8.js";import"./PooledRBush-73842d9a.js";import"./quickselect-43e2d66b.js";import"./popupUtils-a16b4cb5.js";import"./FeatureFilter-cd09ce2a.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-da2f83e0.js";import"./normalizeUtils-512dfd53.js";import"./normalizeUtilsCommon-050bf0c4.js";import"./WhereClause-061880b7.js";import"./TimeOnly-6b0b4a91.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-30b20cb3.js";import"./utils-1637909e.js";import"./utils-a7cc7030.js";import"./ClassBreaksDefinition-c6a7e60d.js";import"./FeatureSet-0bdd79f0.js";import"./FeatureStore-4ad62b24.js";import"./BoundsStore-315742f7.js";import"./LayerView3D-2a51d3a6.js";import"./query-3a4c8fa9.js";import"./pbfQueryUtils-9accdce5.js";import"./pbf-99c355c5.js";import"./queryZScale-9cc7de1b.js";import"./WorkerHandle-8f3c3e4b.js";import"./EventedSet-c6899c49.js";import"./FeatureEffect-72786df8.js";import"./LayerView-fa457db7.js";import"./RefreshableLayerView-355ffb88.js";let t=class extends d{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=m()}initialize(){const{layer:e,view:a}=this;l(e)?.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new i("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),e.infoFor3D!=null&&(this.direct3DObjectFeatureLayerDisplayEnabled?this.addResolvingPromise((async()=>{const o=await n(()=>this.graphicsPipeline);this.destroyed||o.destroyed||(o.suspendResumeExtentMode="computed")})()):this.addResolvingPromise(Promise.reject(new i("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),e.geometryType!=="mesh"||y(e.spatialReference,a.spatialReference)||this.addResolvingPromise(Promise.reject(new i("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){return this.view.featureTiles?.tilingScheme?.spatialReference}};r([p({constructOnly:!0})],t.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),r([p()],t.prototype,"layer",void 0),t=r([s("esri.views.3d.layers.FeatureLayerView3D")],t);const ae=t;export{ae as default};
