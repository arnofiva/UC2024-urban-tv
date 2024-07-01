import{aj as o,ak as p,bT as x,az as c,bS as m,aA as R,bW as T,am as L,h0 as O,jG as K,aC as U,jH as P,jI as V,aL as f,jJ as C,aF as M,at as h,av as v,b2 as z,hG as I,b3 as q,hE as b,h_ as F,hv as _,jK as J,hF as k}from"./index-b9c5f9ae.js";import{g as B,p as D}from"./commonProperties-8243c624.js";import{r as G}from"./I3SIndexInfo-58ee6b9d.js";let H=null;function Z(){return H}const Y=s=>{let a=class extends s{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=O(async(r,e,i)=>{switch(r){case y.SAVE:return this._save(e);case y.SAVE_AS:return this._saveAs(i,e)}})}readSpatialReference(r,e){return g(e)}readFullExtent(r,e,i){if(r!=null&&typeof r=="object"){const l=r.spatialReference==null?{...r,spatialReference:g(e)}:r;return m.fromJSON(l,i)}const t=e.store,n=g(e);return n==null||t?.extent==null||!Array.isArray(t.extent)||t.extent.some(l=>l<S)?null:new m({xmin:t.extent[0],ymin:t.extent[1],xmax:t.extent[2],ymax:t.extent[3],spatialReference:n})}parseVersionString(r){const e={major:Number.NaN,minor:Number.NaN,versionString:r},i=r.split(".");return i.length>=2&&(e.major=parseInt(i[0],10),e.minor=parseInt(i[1],10)),e}readVersion(r,e){const i=e.store,t=i.version!=null?i.version.toString():"";return this.parseVersionString(t)}readTitlePortalItem(r){return this.sublayerTitleMode!=="item-title"?void 0:r}readTitleService(r,e){const i=this.portalItem?.title;if(this.sublayerTitleMode==="item-title")return this.url?K(this.url,e.name):e.name;let t=e.name;if(!t&&this.url){const n=U(this.url);n!=null&&(t=n.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(t=i+" - "+t),P(t)}set url(r){if(r==null)return void this._set("url",r);const e=V({layer:this,url:r,nonStandardUrlAllowed:!1,logger:f.getLogger(this)});this._set("url",e.url),e.layerId!=null&&this._set("layerId",e.layerId)}writeUrl(r,e,i,t){C(this,r,"layers",e,t)}get parsedUrl(){const r=this._get("url"),e=M(r);return e&&this.layerId!=null&&(e.path=`${e.path}/layers/${this.layerId}`),e}async _fetchIndexAndUpdateExtent(r,e){this.indexInfo=G(this.parsedUrl?.path??"",this.rootNode,r,this.customParameters,this.apiKey,f.getLogger(this),e),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(r){if(r?.type==="page"){const e=r.rootIndex%r.pageSize,i=r.rootPage?.nodes?.[e];if(i?.obb?.center==null||i.obb.halfSize==null)throw new h("sceneservice:invalid-node-page","Invalid node page.");if(i.obb.center[0]<S||this.fullExtent==null||this.fullExtent.hasZ)return;const t=i.obb.halfSize,n=i.obb.center[2],l=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.fullExtent.zmin=n-l,this.fullExtent.zmax=n+l}else if(r?.type==="node"){const e=r.rootNode?.mbs;if(!Array.isArray(e)||e.length!==4||e[0]<S)return;const i=e[2],t=e[3],{fullExtent:n}=this;n&&(n.zmin=i-t,n.zmax=i+t)}}async _fetchService(r){if(this.url==null)throw new h("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const e=await this._fetchFirstLayerId(r);e!=null&&(this.layerId=e)}return this._fetchServiceLayer(r)}async _fetchFirstLayerId(r){const e=await v(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r});if(e.data&&Array.isArray(e.data.layers)&&e.data.layers.length>0)return e.data.layers[0].id}async _fetchServiceLayer(r){const e=await v(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r});e.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(e.data.layerType&&e.data.layerType==="Voxel"&&(i=!0),i)return this._fetchVoxelServiceLayer();const t=e.data;this.read(t,this._getServiceContext()),this.validateLayer(t)}async _fetchVoxelServiceLayer(r){const e=(await v(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r})).data;this.read(e,this._getServiceContext()),this.validateLayer(e)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(r){}async _saveAs(r,e){const i={...A,...e};let t=z.from(r);if(!t)throw new h("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");I(t),t.id&&(t=t.clone(),t.id=null);const n=t.portal||q.getDefault();await this._ensureLoadBeforeSave(),t.type=w,t.portal=n;const l=b(t,"portal-item",!0),d={layers:[this.write({},l)]};return await Promise.all(l.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(d,l,i),this.url&&(t.url=this.url),t.title||(t.title=this.title),N(t,i,u.newItem),await n.signIn(),await n.user?.addItem({item:t,folder:i?.folder,data:d}),await F(this.resourceReferences,l),this.portalItem=t,_(l),l.portalItem=t,t}async _save(r){const e={...A,...r};if(!this.portalItem)throw new h("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(I(this.portalItem),this.portalItem.type!==w)throw new h("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${w}"`);await this._ensureLoadBeforeSave();const i=b(this.portalItem,"portal-item",!0),t={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(t,i,e),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),N(this.portalItem,e,u.existingItem),await J(this.portalItem,t,this.resourceReferences,i),_(i),this.portalItem}async _validateAgainstJSONSchema(r,e,i){const t=i?.validationOptions;k(e,{errorName:"sceneservice:save"},{ignoreUnsupported:t?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const n=t?.enabled,l=Z();if(n&&l){const d=(await l()).validate(r,i.portalItemLayerType);if(!d.length)return;const E=`Layer item did not validate:
${d.join(`
`)}`;if(f.getLogger(this).error(`_validateAgainstJSONSchema(): ${E}`),t.failPolicy==="throw"){const j=d.map($=>new h("sceneservice:schema-validation",$));throw new h("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:j})}}}};return o([p(B)],a.prototype,"id",void 0),o([p({type:x})],a.prototype,"spatialReference",void 0),o([c("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readSpatialReference",null),o([p({type:m})],a.prototype,"fullExtent",void 0),o([c("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readFullExtent",null),o([p({readOnly:!0,type:R})],a.prototype,"heightModelInfo",void 0),o([p({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],a.prototype,"minScale",void 0),o([p({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],a.prototype,"maxScale",void 0),o([p({readOnly:!0})],a.prototype,"version",void 0),o([c("version",["store.version"])],a.prototype,"readVersion",null),o([p({type:String,json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),o([p({type:String,json:{read:!1}})],a.prototype,"sublayerTitleMode",void 0),o([p({type:String})],a.prototype,"title",void 0),o([c("portal-item","title")],a.prototype,"readTitlePortalItem",null),o([c("service","title",["name"])],a.prototype,"readTitleService",null),o([p({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],a.prototype,"layerId",void 0),o([p(D)],a.prototype,"url",null),o([T("url")],a.prototype,"writeUrl",null),o([p()],a.prototype,"parsedUrl",null),o([p({readOnly:!0})],a.prototype,"store",void 0),o([p({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),a=o([L("esri.layers.mixins.SceneService")],a),a},S=-1e38;function g(s){if(s.spatialReference!=null)return x.fromJSON(s.spatialReference);const a=s.store,r=a.indexCRS||a.geographicCRS,e=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return e!=null?new x(e):null}function N(s,a,r){s.typeKeywords||(s.typeKeywords=[]);const e=a.getTypeKeywords();for(const i of e)s.typeKeywords.push(i);s.typeKeywords&&(s.typeKeywords=s.typeKeywords.filter((i,t,n)=>n.indexOf(i)===t),r===u.newItem&&(s.typeKeywords=s.typeKeywords.filter(i=>i!=="Hosted Service")))}var u;(function(s){s[s.existingItem=0]="existingItem",s[s.newItem=1]="newItem"})(u||(u={}));const w="Scene Service",A={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var y;(function(s){s[s.SAVE=0]="SAVE",s[s.SAVE_AS=1]="SAVE_AS"})(y||(y={}));export{y as C,Y as L};
