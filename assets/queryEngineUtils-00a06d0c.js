import{r as a,a as d,c as i}from"./DimensionAnalysisView3D-97b08dcc.js";import{r as g}from"./VertexSnappingCandidate-bd6d5c7c.js";function r({x:t,y:e,z:n}){return i(t,e,n??0)}function s(t,e){switch(t.type){case"edge":return t.draped?new a({edgeStart:r(t.start),edgeEnd:r(t.end),targetPoint:r(t.target),objectId:t.objectId,getGroundElevation:e}):new d({edgeStart:r(t.start),edgeEnd:r(t.end),targetPoint:r(t.target),objectId:t.objectId,isDraped:!1});case"vertex":return new g({targetPoint:r(t.target),objectId:t.objectId,isDraped:!1})}}function p(t,e){return t!=null&&t.type==="3d"?(n,o)=>t.elevationProvider.getElevation(n,o,0,e,"ground"):()=>null}export{s as a,p as o};
