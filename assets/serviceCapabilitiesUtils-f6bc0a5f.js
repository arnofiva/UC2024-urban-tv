import{aC as g,aU as A,cK as S}from"./index-b9c5f9ae.js";function t(s,p,e){return!!h(s,p,e)}function c(s,p,e){return h(s,p,e)}function h(s,p,e){return s&&s.hasOwnProperty(p)?s[p]:e}const Q={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function v(s){const p=s?.supportedSpatialAggregationStatistics?.map(e=>e.toLowerCase());return{envelope:!!p?.includes("envelopeaggregate"),centroid:!!p?.includes("centroidaggregate"),convexHull:!!p?.includes("convexhullaggregate")}}function d(s,p){return!!s?.supportedOperationsWithCacheHint?.map(r=>r.toLowerCase())?.includes(p.toLowerCase())}function z(s,p){return{analytics:f(s),attachment:R(s),data:x(s),metadata:F(s),operations:T(s.capabilities,s,p),query:E(s,p),queryRelated:w(s),queryTopFeatures:D(s),editing:M(s)}}function f(s){return{supportsCacheHint:d(s.advancedQueryCapabilities,"queryAnalytics")}}function R(s){const p=s.attachmentProperties,e={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:d(s.advancedQueryCapabilities,"queryAttachments"),supportsResize:t(s,"supportsAttachmentsResizing",!1)};return p&&Array.isArray(p)&&p.forEach(r=>{const o=Q[r.name];o&&(e[o]=!!r.isEnabled)}),e}function x(s){return{isVersioned:t(s,"isDataVersioned",!1),supportsAttachment:t(s,"hasAttachments",!1),supportsM:t(s,"hasM",!1),supportsZ:t(s,"hasZ",!1)}}function F(s){return{supportsAdvancedFieldProperties:t(s,"supportsFieldDescriptionProperty",!1)}}function T(s,p,e){const r=s?s.toLowerCase().split(",").map(C=>C.trim()):[],o=e?g(e):null,l=r.includes(o!=null&&o.serverType==="MapServer"?"data":"query"),u=r.includes("editing")&&!p.datesInUnknownTimezone;let a=u&&r.includes("create"),n=u&&r.includes("delete"),i=u&&r.includes("update");const y=r.includes("changetracking"),m=p.advancedQueryCapabilities;return u&&!(a||n||i)&&(a=n=i=!0),{supportsCalculate:t(p,"supportsCalculate",!1),supportsTruncate:t(p,"supportsTruncate",!1),supportsValidateSql:t(p,"supportsValidateSql",!1),supportsAdd:a,supportsDelete:n,supportsEditing:u,supportsChangeTracking:y,supportsQuery:l,supportsQueryAnalytics:t(m,"supportsQueryAnalytic",!1),supportsQueryAttachments:t(m,"supportsQueryAttachments",!1),supportsQueryTopFeatures:t(m,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:t(p,"supportsAttachmentsResizing",!1),supportsSync:r.includes("sync"),supportsUpdate:i,supportsExceedsLimitStatistics:t(p,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:t(p,"supportsAsyncConvert3D",!1)}}function E(s,p){const e=s.advancedQueryCapabilities,r=s.ownershipBasedAccessControlForFeatures,o=s.archivingInfo,l=s.currentVersion,u=p?.includes("MapServer"),a=!u||l>=A("mapserver-pbf-version-support"),n=S(p),i=new Set((s.supportedQueryFormats??"").split(",").map(y=>y.toLowerCase().trim()));return{maxRecordCount:c(s,"maxRecordCount",void 0),maxRecordCountFactor:c(s,"maxRecordCountFactor",void 0),standardMaxRecordCount:c(s,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:v(e),supportsCacheHint:t(e,"supportsQueryWithCacheHint",!1)||d(e,"query"),supportsCentroid:t(e,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:n,supportsDefaultSpatialReference:t(e,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:t(e,"supportsDisjointSpatialRel",!1),supportsDistance:t(e,"supportsQueryWithDistance",!1),supportsDistinct:t(e,"supportsDistinct",s.supportsAdvancedQueries),supportsExtent:t(e,"supportsReturningQueryExtent",!1),supportsFormatPBF:a&&i.has("pbf"),supportsFullTextSearch:t(e,"supportsFullTextSearch",!1),supportsGeometryProperties:t(e,"supportsReturningGeometryProperties",!1),supportsHavingClause:t(e,"supportsHavingClause",!1),supportsHistoricMoment:t(o,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:t(e,"supportsMaxRecordCountFactor",!1),supportsOrderBy:t(e,"supportsOrderBy",s.supportsAdvancedQueries),supportsPagination:t(e,"supportsPagination",!1),supportsPercentileStatistics:t(e,"supportsPercentileStatistics",!1),supportsQuantization:t(s,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:t(s,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:t(r,"allowAnonymousToQuery",!0),supportsQueryByOthers:t(r,"allowOthersToQuery",!0),supportsQueryGeometry:t(s,"supportsReturningQueryGeometry",!1),supportsResultType:t(e,"supportsQueryWithResultType",!1),supportsSpatialAggregationStatistics:t(e,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:t(e,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:t(s,"useStandardizedQueries",!1),supportsStatistics:t(e,"supportsStatistics",s.supportsStatistics),supportsTopFeaturesQuery:t(e,"supportsTopFeaturesQuery",!1),tileMaxRecordCount:c(s,"tileMaxRecordCount",void 0)}}function w(s){const p=s.advancedQueryCapabilities,e=t(p,"supportsAdvancedQueryRelated",!1);return{supportsPagination:t(p,"supportsQueryRelatedPagination",!1),supportsCount:e,supportsOrderBy:e,supportsCacheHint:d(p,"queryRelated")}}function D(s){return{supportsCacheHint:d(s.advancedQueryCapabilities,"queryTopFilter")}}function M(s){const p=s.ownershipBasedAccessControlForFeatures,e=s?s.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:t(s,"allowGeometryUpdates",!0),supportsGlobalId:t(s,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:t(s,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:t(s,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:t(s,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:t(s,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:t(p,"allowAnonymousToDelete",!0),supportsDeleteByOthers:t(p,"allowOthersToDelete",!0),supportsUpdateByAnonymous:t(p,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:t(p,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:t(e,"supportsAsyncApplyEdits",!1),zDefault:c(s,"zDefault",void 0)}}function U(s){return{operations:{supportsAppend:t(s,"supportsAppend",!1),supportsExportClip:t(s,"supportsExportClip",!1),supportsExportFrameset:t(s,"supportsExportFrameset",!1),supportsMensuration:t(s,"supportsMensuration",!1),supportsUpdate:t(s,"supportsUpdate",!1)},query:{supportsCoverageQuery:s?.playbackInfo?.klv["0601"]??!1}}}export{z as a,U as g};
