import{jd as W,at as d,gy as I,eu as A,je as V,i$ as K,jf as P,hM as q,au as L,jg as Z,dS as B,b0 as H,bR as E,bQ as J,bP as k,jh as G,ev as C}from"./index-b9c5f9ae.js";class N{constructor(e,t=null){if(this.tile=e,t!=null&&e!=null){const n=e.extent;this._samplerData=new W(t,n)}}get zmin(){return this._samplerData!=null?this._samplerData.data.minValue:0}get zmax(){return this._samplerData!=null?this._samplerData.data.maxValue:0}get hasNoDataValues(){return!!this._samplerData?.data.hasNoDataValues}sample(e,t){if(this._samplerData==null)return;const{safeWidth:n,data:i,dx:l,dy:s,y1:a,x0:r}=this._samplerData,{width:c,values:u,noDataValue:m}=i,f=j(s*(a-t),0,n),h=j(l*(e-r),0,n),T=Math.floor(f),M=Math.floor(h),x=T*c+M,F=x+c,_=u[x],R=u[F],$=u[x+1],b=u[F+1];if(_!==m&&R!==m&&$!==m&&b!==m){const z=h-M,S=_+($-_)*z;return S+(R+(b-R)*z-S)*(f-T)}}}function j(o,e,t){return o<e?e:o>t?t:o}class ue{async queryAll(e,t,n){if(!(e=n?.ignoreInvisibleLayers?e.filter(c=>c.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const i=y.fromGeometry(t);let l=!1;n?.returnSampleInfo||(l=!0);const s={...w,...n,returnSampleInfo:!0},a=await this.query(e[e.length-1],i,s),r=await this._queryAllContinue(e,a,s);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r}async query(e,t,n){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof y)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new d("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const i={...w,...n},l=new X(e,t.spatialReference,i),s=i.signal;return await e.load({signal:s}),await ee(l,t,s),await this._selectTiles(l,s),await g(l,s),ae(l),oe(l,s)}async createSampler(e,t,n){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const i={...w,...n};return this._createSampler(e,t,i)}async createSamplerAll(e,t,n){if(!(e=n?.ignoreInvisibleLayers?e.filter(s=>s.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const i={...w,...n,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],t,i);return this._createSamplerAllContinue(e,t,l,i)}async _createSampler(e,t,n,i){const l=n.signal;await e.load({signal:l});const s=t.spatialReference,a=e.tileInfo.spatialReference;s.equals(a)||(await I([{source:s,dest:a}],{signal:l}),t=A(t,a));const r=new Y(e,t,n,i);return await this._selectTiles(r,l),await g(r,l),new V(r.elevationTiles,r.layer.tileInfo,r.options.noDataValue)}async _createSamplerAllContinue(e,t,n,i){if(e.pop(),!e.length)return n;const l=n.samplers.filter(c=>!c.tile.hasNoDataValues).map(c=>K(c.extent)),s=await this._createSampler(e[e.length-1],t,i,l);if(s.samplers.length===0)return n;const a=n.samplers.concat(s.samplers),r=new V(a,i.noDataValue);return this._createSamplerAllContinue(e,t,r,i)}async _queryAllContinue(e,t,n){const i=e.pop(),l=t.geometry.coordinates,s=t.sampleInfo;P(s);const a=[],r=[];for(let f=0;f<l.length;f++){const h=s[f];h.demResolution>=0?h.source||(h.source=i):e.length&&(a.push(l[f]),r.push(f))}if(!e.length||a.length===0)return t;const c=t.geometry.clone(a),u=await this.query(e[e.length-1],c,n),m=u.sampleInfo;if(!m)throw new Error("no sampleInfo");return r.forEach((f,h)=>{l[f].z=u.geometry.coordinates[h].z,s[f].demResolution=m[h].demResolution}),this._queryAllContinue(e,t,n)}async _selectTiles(e,t){e.type==="geometry"&&te(e);const n=e.options.demResolution;if(typeof n=="number")ie(e,n);else if(n==="finest-contiguous")await this._selectTilesFinestContiguous(e,t);else{if(n!=="auto")throw new d("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${n}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}async _selectTilesFinestContiguous(e,t){const{tileInfo:n,tilemapCache:i}=e.layer,l=Q(n,i,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,l,t)}async _selectTilesFinestContiguousAt(e,t,n){const i=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const l=i.tilemapCache,s=e.getTilesToFetch();try{if(l&&!D(l))await q(Promise.all(s.map(a=>l.fetchAvailability(a.level,a.row,a.col,{signal:n}))),n);else if(await g(e,n),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new d("elevation-query:has-unavailable-tiles")}catch(a){L(a),await this._selectTilesFinestContiguousAt(e,t-1,n)}}async _selectTilesAuto(e,t){le(e),se(e);const n=e.layer.tilemapCache;if(!n||D(n))return this._selectTilesAutoPrefetchUpsample(e,t);const i=e.getTilesToFetch(),l={},s=i.map(async a=>{const r=new Z(null,0,0,0,B()),c=await H(n.fetchAvailabilityUpsample(a.level,a.row,a.col,r,{signal:t}));c.ok!==!1?a.id!=null&&(l[a.id]=r):L(c.error)});await q(Promise.all(s),t),e.remapTiles(l)}async _selectTilesAutoPrefetchUpsample(e,t){const n=e.layer.tileInfo;await g(e,t);let i=!1;e.forEachTileToFetch((l,s)=>{n.upsampleTile(l)?i=!0:s()}),i&&await this._selectTilesAutoPrefetchUpsample(e,t)}}class y{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new y;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(n=>n.clone()),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await I([{source:this.spatialReference,dest:e}],{signal:t});const n=new E({spatialReference:this.spatialReference,points:this.coordinates.map(a=>[a.x,a.y])}),i=A(n,e);if(!i)return null;const l=this.coordinates.map((a,r)=>{const c=a.clone(),u=i.points[r];return c.x=u[0],c.y=u[1],c}),s=this.clone(l);return s.spatialReference=e,s}static fromGeometry(e){const t=new y;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof y)t.coordinates=e.coordinates.map(n=>n.clone()),t._exporter=(n,i)=>{const l=e.clone(n);return l.spatialReference=i,l};else switch(e.type){case"point":{const n=e,{hasZ:i,hasM:l}=n;t.coordinates=i&&l?[new p(n.x,n.y,n.z,n.m)]:i?[new p(n.x,n.y,n.z)]:l?[new p(n.x,n.y,null,n.m)]:[new p(n.x,n.y)],t._exporter=(s,a)=>e.hasM?new k(s[0].x,s[0].y,s[0].z,s[0].m,a):new k(s[0].x,s[0].y,s[0].z,a);break}case"multipoint":{const n=e,{hasZ:i,hasM:l}=n;t.coordinates=i&&l?n.points.map(s=>new p(s[0],s[1],s[2],s[3])):i?n.points.map(s=>new p(s[0],s[1],s[2])):l?n.points.map(s=>new p(s[0],s[1],null,s[2])):n.points.map(s=>new p(s[0],s[1])),t._exporter=(s,a)=>e.hasM?new E({points:s.map(r=>[r.x,r.y,r.z,r.m]),hasZ:!0,hasM:!0,spatialReference:a}):new E(s.map(r=>[r.x,r.y,r.z]),a);break}case"polyline":{const n=e,i=[],l=[],{hasZ:s,hasM:a}=e;let r=0;for(const c of n.paths)if(l.push([r,r+c.length]),r+=c.length,s&&a)for(const u of c)i.push(new p(u[0],u[1],u[2],u[3]));else if(s)for(const u of c)i.push(new p(u[0],u[1],u[2]));else if(a)for(const u of c)i.push(new p(u[0],u[1],null,u[2]));else for(const u of c)i.push(new p(u[0],u[1]));t.coordinates=i,t._exporter=(c,u)=>{const m=e.hasM?c.map(h=>[h.x,h.y,h.z,h.m]):c.map(h=>[h.x,h.y,h.z]),f=l.map(h=>m.slice(h[0],h[1]));return new J({paths:f,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}}class p{constructor(e,t,n=null,i=null,l=null,s=null){this.x=e,this.y=t,this.z=n,this.m=i,this.tile=l,this.elevationTile=s}clone(){return new p(this.x,this.y,this.z,this.m)}}class U{constructor(e,t){this.layer=e,this.options=t}}class X extends U{constructor(e,t,n){super(e,n),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>t.tile=null);else{const{tileInfo:t,tilemapCache:n}=this.layer,i=v(t,n)[e].level;this.geometry.coordinates.forEach(l=>l.tile=t.tileAt(i,l.x,l.y))}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates){const n=t.tile?.id;t.tile=n?e[n]:null}}getTilesToFetch(){const e={},t=[];for(const n of this.geometry.coordinates){const i=n.tile;if(!i)continue;const l=n.tile?.id;n.elevationTile||!l||e[l]||(e[l]=i,t.push(i))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}}class Y extends U{constructor(e,t,n,i){super(e,n),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.clone().intersection(e.fullExtent),this.maskExtents=i}selectTilesAtLOD(e,t){const n=this._maximumLodForRequests(t),i=Math.min(n,e);i<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)}_maximumLodForRequests(e){const{tileInfo:t,tilemapCache:n}=this.layer,i=v(t,n);if(!e)return i.length-1;const l=this.extent;if(l==null)return-1;for(let s=i.length-1;s>=0;s--){const a=i[s],r=a.resolution*t.size[0],c=a.resolution*t.size[1];if(Math.ceil(l.width/r)*Math.ceil(l.height/c)<=e)return s}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const n=t.id&&e[t.id];n&&(this._fetchedCandidates.add(t),this.elevationTiles.push(n))}}remapTiles(e){this._candidateTiles=O(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const n=this._candidateTiles;this._candidateTiles=[],n.forEach(i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let l=!1;e(i,()=>l=!0),l?t&&t(i):this._candidateTiles.push(i)}),this._candidateTiles=O(this._candidateTiles,t)}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(t==null)return;const{tileInfo:n,tilemapCache:i}=this.layer,l=v(n,i)[e],s=n.tileAt(l.level,t.xmin,t.ymin),a=s.extent;if(a==null)return;const r=l.resolution*n.size[0],c=l.resolution*n.size[1],u=Math.ceil((t.xmax-a[0])/r),m=Math.ceil((t.ymax-a[1])/c);for(let f=0;f<m;f++)for(let h=0;h<u;h++){const T=new Z(null,s.level,s.row-f,s.col+h);n.updateTileInfo(T),this._tileIsMasked(T)||this._candidateTiles.push(T)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&G(t,e.extent))}}function Q(o,e,t=0){const n=v(o,e);let i=n.length-1;if(t>0){const l=t/C(o.spatialReference),s=n.findIndex(a=>a.resolution<l);s===0?i=0:s>0&&(i=s-1)}return i}const w={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};async function ee(o,e,t){let n;const i=o.layer.tileInfo.spatialReference;if(e instanceof y?n=await e.project(i,t):(await I([{source:e.spatialReference,dest:i}],{signal:t}),n=A(e,i)),!n)throw new d("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${e.spatialReference.wkid}' on an elevation service in '${i.wkid}'`);o.geometry=y.fromGeometry(n)}function te(o){if(o.layer.fullExtent==null)return;const e=new N(null);e.sample=()=>o.options.noDataValue,o.outsideExtentTile=e;const t=o.layer.fullExtent;o.geometry.coordinates.forEach(n=>{const i=n.x,l=n.y;(i<t.xmin||i>t.xmax||l<t.ymin||l>t.ymax)&&(n.elevationTile=e)})}function ne(o,e){const{tileInfo:t,tilemapCache:n}=o.layer,i=e/C(t.spatialReference),l=v(t,n);let s=l[0],a=0;for(let r=1;r<l.length;r++){const c=l[r];Math.abs(c.resolution-i)<Math.abs(s.resolution-i)&&(s=c,a=r)}return a}function ie(o,e){const t=ne(o,e);o.selectTilesAtLOD(t)}function le(o){const{tileInfo:e,tilemapCache:t}=o.layer,n=Q(e,t,o.options.minDemResolution);o.selectTilesAtLOD(n,o.options.maximumAutoTileRequests)}function v(o,e){const t=o.lods;if(D(e)){const{effectiveMinLOD:n,effectiveMaxLOD:i}=e;return t.filter(l=>l.level>=n&&l.level<=i)}return t}async function g(o,e){const t=o.getTilesToFetch(),n={},i=o.options.cache,l=o.options.noDataValue,s=t.map(async a=>{if(a.id==null)return;const r=`${o.layer.uid}:${a.id}:${l}`,c=i!=null?i.get(r):null,u=c??await o.layer.fetchTile(a.level,a.row,a.col,{noDataValue:l,signal:e});i?.put(r,u),n[a.id]=new N(a,u)});await q(Promise.allSettled(s),e),o.populateElevationTiles(n)}function se(o){const e=o.layer.tileInfo;let t=0;const n={},i=a=>{a.id!=null&&(a.id in n?n[a.id]++:(n[a.id]=1,t++))},l=a=>{if(a.id==null)return;const r=n[a.id];r===1?(delete n[a.id],t--):n[a.id]=r-1};o.forEachTileToFetch(i,l);let s=!0;for(;s&&(s=!1,o.forEachTileToFetch(a=>{t<=o.options.maximumAutoTileRequests||(l(a),e.upsampleTile(a)&&(s=!0),i(a))},l),s););}function ae(o){o.geometry.coordinates.forEach(e=>{const t=e.elevationTile;let n=o.options.noDataValue;if(t){const i=t.sample(e.x,e.y);i!=null?n=i:e.elevationTile=null}e.z=n})}function O(o,e){const t={},n=[];for(const l of o){const s=l.id;s&&!t[s]?(t[s]=l,n.push(l)):e&&e(l)}const i=n.sort((l,s)=>l.level-s.level);return i.filter((l,s)=>{for(let a=0;a<s;a++){const r=i[a].extent;if(r&&l.extent&&G(r,l.extent))return e&&e(l),!1}return!0})}async function oe(o,e){const t=await o.geometry.project(o.outSpatialReference,e);P(t);const n={geometry:t.export(),noDataValue:o.options.noDataValue};return o.options.returnSampleInfo&&(n.sampleInfo=re(o)),o.geometry.coordinates.forEach(i=>{i.tile=null,i.elevationTile=null}),n}function re(o){const e=o.layer.tileInfo,t=C(e.spatialReference);return o.geometry.coordinates.map(n=>{let i=-1;return n.elevationTile&&n.elevationTile!==o.outsideExtentTile&&(i=e.lodAt(n.elevationTile.tile.level).resolution*t),{demResolution:i}})}function D(o){return o?.tileInfo!=null}export{ue as ElevationQuery,y as GeometryDescriptor,Q as getFinestLodIndex};
