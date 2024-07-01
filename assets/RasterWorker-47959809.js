import{aj as f,dd as u,am as p,bS as a,bP as S,lp as d}from"./index-b9c5f9ae.js";import{g as i,f as y,m as x,j as h,L as O,h as J,W as N,E as P,U as g,D as B,R as b,u as k,s as w}from"./dataUtils-327e8920.js";import{a as v,c as z,y as D,S as T}from"./PolynomialTransform-bffa0715.js";import{M as $,T as F,e as I}from"./rasterProjectionHelper-60e22268.js";import"./colorRamps-4e691737.js";var c;let l=c=class extends v{constructor(){super(...arguments),this.type="identity"}clone(){return new c}};f([u({IdentityXform:"identity"})],l.prototype,"type",void 0),l=c=f([p("esri.layers.support.rasterTransforms.IdentityTransform")],l);const j=l,E={GCSShiftXform:z,IdentityXform:j,PolynomialXform:D};function G(n){if(!n?.type)return null;const e=E[n?.type];if(e){const s=new e;return s.read(n),s}return null}class U{convertVectorFieldData(t){const e=i.fromJSON(t.pixelBlock),s=y(e,t.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(t){const e=i.fromJSON(t.pixelBlock),s=x(e);return Promise.resolve(s)}async decode(t){const e=await h(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?a.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(e!=null?e.toJSON():null)}async updateSymbolizer(t){this.symbolizer=O.fromJSON(t.symbolizerJSON),t.histograms&&this.symbolizer?.rendererJSON.type==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=T(t.rasterFunctionJSON)}async process(t){const e=this.rasterFunction.process({extent:a.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(s=>s!=null?i.fromJSON(s):null),primaryPixelSizes:t.primaryPixelSizes?.map(s=>s!=null?S.fromJSON(s):null),primaryRasterIds:t.primaryRasterIds});return e!=null?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(e?.toJSON())}estimateStatisticsHistograms(t){const e=J(i.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=N(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel??0,t.useBilinear===!1);return e&&e.forEach((s,o)=>{e.set(o,s?.toJSON())}),Promise.resolve(e)}clipTile(t){const e=i.fromJSON(t.pixelBlock),s=P({...t,pixelBlock:e});return Promise.resolve(s?.toJSON())}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(m=>m?new i(m):null),s=g(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,r=s;return t.coefs&&(r=B(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=b(t.destDimension,t.gcsGrid),r=k(r,t.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:r?.toJSON(),localNorthDirections:o}}async createFlowMesh(t,e){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:o,indexData:r}=await w(t.meshType,t.simulationSettings,s,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(t){const e=a.fromJSON(t.projectedExtent),s=a.fromJSON(t.srcBufferExtent);let o=null;t.datumTransformationSteps&&(o=new d({steps:t.datumTransformationSteps})),(t.includeGCSGrid||$(e.spatialReference,s.spatialReference,o))&&await F();const r=t.rasterTransform?G(t.rasterTransform):null;return I({...t,projectedExtent:e,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{U as default};
