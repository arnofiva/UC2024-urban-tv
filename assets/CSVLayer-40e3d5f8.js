import{ah as i,ai as r,ak as p,hM as v,aS as w,ch as S,gt as O,cJ as F,az as b,ds as I,gM as q,bd as N,at as _,em as J,as as c}from"./index-8b5e7d9b.js";import C from"./FeatureLayer-72a3b1cd.js";import{d as P}from"./FeatureSet-05a1ff98.js";import{l as j}from"./clientSideDefaults-7259c628.js";import{b as l}from"./Query-630c5d65.js";import"./UniqueValueRenderer-176db886.js";import"./ColorStop-ac9a118d.js";import"./diffUtils-3ed1f592.js";import"./colorRamps-cf6fa9ce.js";import"./jsonUtils-3d6448c4.js";import"./DictionaryLoader-1a1ab2cc.js";import"./FieldsIndex-85e142d0.js";import"./heatmapUtils-3c0e0ece.js";import"./FeatureLayerBase-56c03a7a.js";import"./commonProperties-60f31277.js";import"./ElevationInfo-36952bdf.js";import"./featureLayerUtils-d891b150.js";import"./featureQueryAll-778379dd.js";import"./AttachmentQuery-ac66f9a7.js";import"./RelationshipQuery-249800df.js";import"./LayerFloorInfo-5c97dc41.js";import"./serviceCapabilitiesUtils-1513785a.js";import"./editsZScale-03b9f186.js";import"./queryZScale-9dee68ff.js";import"./APIKeyMixin-9d7343aa.js";import"./ArcGISService-1771a240.js";import"./BlendLayer-dce91235.js";import"./jsonUtils-16d33138.js";import"./CustomParametersMixin-45f14a7d.js";import"./EditBusLayer-3babd061.js";import"./FeatureEffectLayer-50d5188d.js";import"./FeatureEffect-40ff6b77.js";import"./FeatureFilter-5ab88729.js";import"./FeatureReductionLayer-826e078c.js";import"./FeatureReductionSelection-4ea33fb1.js";import"./LabelClass-06cdad9c.js";import"./defaults-4b2d7493.js";import"./defaultsJSON-59981e75.js";import"./MD5-715f37cd.js";import"./OperationalLayer-5c10068f.js";import"./OrderedLayer-b68b3bb4.js";import"./PortalLayer-c3739096.js";import"./ScaleRangeLayer-5b526f5a.js";import"./TemporalLayer-683091de.js";import"./FeatureTemplate-0e5c0008.js";import"./FeatureType-347e5e8f.js";import"./fieldProperties-49b9eb67.js";import"./labelingInfo-4784a348.js";import"./versionUtils-e8eeb271.js";import"./styleUtils-f17e2eb8.js";import"./TopFeaturesQuery-268791e0.js";import"./popupUtils-6f3d55df.js";import"./QueryEngineCapabilities-85c4f1d0.js";let a=class extends v{constructor(t){super(t),this.type="csv",this.refresh=w(async e=>{await this.load();const{extent:s,timeExtent:n}=await this._connection.invoke("refresh",e);return s&&(this.sourceJSON.extent=s),n&&(this.sourceJSON.timeInfo.timeExtent=[n.start,n.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const s=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return P.fromJSON(s)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const s=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:s.count,extent:S.fromJSON(s.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await O("CSVSourceWorker",{strategy:F("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:s,fields:n,latitudeField:h,longitudeField:m,spatialReference:y,timeInfo:f}=this.loadOptions,u=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:s,fields:n?.map(g=>g.toJSON()),latitudeField:h,longitudeField:m,spatialReference:y?.toJSON(),timeInfo:f?.toJSON()}},{signal:t});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter}};i([r()],a.prototype,"type",void 0),i([r()],a.prototype,"loadOptions",void 0),i([r()],a.prototype,"customParameters",void 0),i([r()],a.prototype,"locationInfo",void 0),i([r()],a.prototype,"sourceJSON",void 0),i([r()],a.prototype,"delimiter",void 0),a=i([p("esri.layers.graphics.sources.CSVSource")],a);function d(t,e){throw new c(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let o=class extends C{constructor(...t){super(...t),this.geometryType="point",this.capabilities=j(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=N.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=t!=null?t.signal:null,s=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(_).then(async()=>this.initLayerProperties(await this.createGraphicsSource(e)));return this.addResolvingPromise(s),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(t,e){return e.showLabels!=null?e.showLabels:!!e.layerDefinition?.drawingInfo?.labelingInfo}set url(t){if(!t)return void this._set("url",t);const e=J(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new a({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(l.from(t)||this.createQuery())).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(l.from(t)||this.createQuery()))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(l.from(t)||this.createQuery()))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(l.from(t)||this.createQuery()))}read(t,e){super.read(t,e),e&&e.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new c("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return d(this,"csv-layer:save")}async saveAs(t,e){return d(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return e!=null&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],o.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],o.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),i([b("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],o.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],o.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],o.prototype,"operationalLayerType",void 0),i([r()],o.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],o.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:a,readOnly:!0})],o.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],o.prototype,"type",void 0),i([r({json:{read:I,write:{isRequired:!0,ignoreOrigin:!0,writer:q}}})],o.prototype,"url",null),o=i([p("esri.layers.CSVLayer")],o);const jt=o;export{jt as default};
