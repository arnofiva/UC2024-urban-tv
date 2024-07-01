import{ar as m,as as w,at as f,au as g,av as n,aw as T,ax as d,ay as c,aj as o,ak as s,az as y,aA as S,am as b,aB as _}from"./index-b9c5f9ae.js";import{p as $}from"./ArcGISCachedService-6c6d16c2.js";import{l as I}from"./ArcGISService-11e3ec1a.js";import{b as O}from"./OperationalLayer-a2efd50e.js";import{j as E}from"./PortalLayer-0852baa6.js";import{p as j}from"./commonProperties-8243c624.js";import{s as A,a as D}from"./LercDecoder-173696b2.js";import"./TileInfoTilemapCache-35752dad.js";import"./TilemapCache-476c01b2.js";import"./layerContainerType-e1118fe6.js";import"./WorkerHandle-8f3c3e4b.js";let i=class extends $(I(O(E(m(_))))){constructor(...t){super(...t),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=A()}normalizeCtorArgs(t,r){return typeof t=="string"?{url:t,...r}:t}destroy(){this._lercDecoder=w(this._lercDecoder)}readCapabilities(t,r){const e=r.capabilities&&r.capabilities.split(",").map(a=>a.toLowerCase().trim());return e?{operations:{supportsTileMap:e.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(t,r){let e=r.currentVersion;return e||(e=9.3),e}load(t){const r=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{if(e.typeKeywords){for(let a=0;a<e.typeKeywords.length;a++)if(e.typeKeywords[a].toLowerCase()==="elevation 3d layer")return!0}throw new f("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},t).catch(g).then(()=>this._fetchImageService(r))),Promise.resolve(this)}fetchTile(t,r,e,a){const l=(a=a||{signal:null}).signal!=null?a.signal:a.signal=new AbortController().signal,u={responseType:"array-buffer",signal:l},v={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(t,r,e,a)).then(()=>n(this.getTileUrl(t,r,e),u)).then(p=>this._lercDecoder.decode(p.data,v,l)).then(p=>new D(p))}getTileUrl(t,r,e){const a=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,l=T({...this.parsedUrl.query,blankTile:!a&&null});return`${this.parsedUrl.path}/tile/${t}/${r}/${e}${l?"?"+l:""}`}async queryElevation(t,r){const{ElevationQuery:e}=await d(()=>import("./ElevationQuery-fd9ab726.js"),["./ElevationQuery-fd9ab726.js","./index-b9c5f9ae.js","./index-e15ba190.css"],import.meta.url);return c(r),new e().query(this,t,r)}async createElevationSampler(t,r){const{ElevationQuery:e}=await d(()=>import("./ElevationQuery-fd9ab726.js"),["./ElevationQuery-fd9ab726.js","./index-b9c5f9ae.js","./index-e15ba190.css"],import.meta.url);return c(r),new e().createSampler(this,t,r)}_fetchTileAvailability(t,r,e,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(t,r,e,a):Promise.resolve("unknown")}async _fetchImageService(t){if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:t},e=await n(this.parsedUrl.path,r);e.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=e.data,this.read(e.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[h]}};o([s({readOnly:!0})],i.prototype,"capabilities",void 0),o([y("service","capabilities",["capabilities"])],i.prototype,"readCapabilities",null),o([s({json:{read:{source:"copyrightText"}}})],i.prototype,"copyright",void 0),o([s({readOnly:!0,type:S})],i.prototype,"heightModelInfo",void 0),o([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),o([s({type:["show","hide"]})],i.prototype,"listMode",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],i.prototype,"minScale",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],i.prototype,"maxScale",void 0),o([s({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),o([s({type:["ArcGISTiledElevationServiceLayer"]})],i.prototype,"operationalLayerType",void 0),o([s()],i.prototype,"sourceJSON",void 0),o([s({json:{read:!1},value:"elevation",readOnly:!0})],i.prototype,"type",void 0),o([s(j)],i.prototype,"url",void 0),o([s()],i.prototype,"version",void 0),o([y("version",["currentVersion"])],i.prototype,"readVersion",null),i=o([b("esri.layers.ElevationLayer")],i);const h=Symbol("default-fetch-tile");i.prototype.fetchTile[h]=!0;const F=i;export{F as default};
