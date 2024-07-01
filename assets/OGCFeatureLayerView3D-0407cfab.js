import{ah as t,ai as e,ak as o,as as a}from"./index-8b5e7d9b.js";import{_ as s}from"./FeatureLayerViewBase3D-91374a1b.js";import"./FeatureLikeLayerView3D-8f33ec1f.js";import"./Query-630c5d65.js";import"./dehydratedFeatureComparison-43e0df71.js";import"./queryForSymbologySnapping-44fbc011.js";import"./elevationInfoUtils-25b84599.js";import"./hash-6f442295.js";import"./diffUtils-3ed1f592.js";import"./UniqueValueRenderer-176db886.js";import"./ColorStop-ac9a118d.js";import"./colorRamps-cf6fa9ce.js";import"./Graphics3DObjectStates-b80419b4.js";import"./jsonUtils-3d6448c4.js";import"./DictionaryLoader-1a1ab2cc.js";import"./FieldsIndex-85e142d0.js";import"./heatmapUtils-3c0e0ece.js";import"./defaults-4b2d7493.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-717c64bf.js";import"./PooledRBush-05d409af.js";import"./quickselect-fc5bb707.js";import"./popupUtils-049df13a.js";import"./FeatureFilter-5ab88729.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-03d16de6.js";import"./WhereClause-4988664d.js";import"./TimeOnly-a96593b0.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-4576de5f.js";import"./utils-e24aed40.js";import"./generateRendererUtils-1c8bce12.js";import"./FeatureSet-05a1ff98.js";import"./FeatureStore-d414226c.js";import"./BoundsStore-409e99ee.js";import"./projectExtentUtils-4faf6b68.js";import"./LayerView3D-239175ff.js";import"./query-ae6e69b4.js";import"./pbfQueryUtils-0854066b.js";import"./pbf-97a34880.js";import"./queryZScale-9dee68ff.js";import"./EventedSet-74df0505.js";import"./commonProperties-60f31277.js";import"./ElevationInfo-36952bdf.js";import"./FeatureEffect-40ff6b77.js";import"./jsonUtils-16d33138.js";import"./LayerView-840504cd.js";import"./RefreshableLayerView-c5fc5cdc.js";const l=p=>{let r=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([e()],r.prototype,"layer",void 0),t([e({readOnly:!0})],r.prototype,"availableFields",null),r=t([o("esri.views.layers.OGCFeatureLayerView")],r),r};let i=class extends l(s){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new a("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};t([e()],i.prototype,"layer",void 0),i=t([o("esri.views.3d.layers.OGCFeatureLayerView3D")],i);const pr=i;export{pr as default};
