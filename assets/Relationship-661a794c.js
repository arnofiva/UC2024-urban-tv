import{aj as t,ak as e,am as n,cA as h,bP as v,aq as G,bQ as w}from"./index-b9c5f9ae.js";let a=class extends h{constructor(o){super(o),this.properties=null}};t([e({json:{write:!0}})],a.prototype,"properties",void 0),a=t([n("esri.rest.knowledgeGraph.GraphObject")],a);const y=a;let i=class extends y{constructor(o){super(o),this.typeName=null,this.id=null}};t([e({type:String,json:{write:!0}})],i.prototype,"typeName",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"id",void 0),i=t([n("esri.rest.knowledgeGraph.GraphNamedObject")],i);const m=i;let l=class extends m{constructor(o){super(o),this.layoutGeometry=null}};t([e({type:v,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=t([n("esri.rest.knowledgeGraph.Entity")],l);const x=l;let u=class extends G{constructor(o){super(o),this.openCypherQuery=""}};t([e()],u.prototype,"openCypherQuery",void 0),u=t([n("esri.rest.knowledgeGraph.GraphQuery")],u);const g=u;let s=class extends g{constructor(r){super(r),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null,this.provenanceBehavior=null}};t([e()],s.prototype,"bindParameters",void 0),t([e()],s.prototype,"bindGeometryQuantizationParameters",void 0),t([e()],s.prototype,"outputQuantizationParameters",void 0),t([e()],s.prototype,"outputSpatialReference",void 0),t([e()],s.prototype,"provenanceBehavior",void 0),s=t([n("esri.rest.knowledgeGraph.GraphQueryStreaming")],s);const P=s;let c=class extends y{constructor(r){super(r)}};c=t([n("esri.rest.knowledgeGraph.ObjectValue")],c);const S=c;let d=class extends h{constructor(o){super(o),this.path=null}};t([e({type:[y],json:{write:!0}})],d.prototype,"path",void 0),d=t([n("esri.rest.knowledgeGraph.Path")],d);const z=d;let p=class extends m{constructor(r){super(r),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};t([e({type:String,json:{write:!0}})],p.prototype,"originId",void 0),t([e({type:String,json:{write:!0}})],p.prototype,"destinationId",void 0),t([e({type:w,json:{write:!0}})],p.prototype,"layoutGeometry",void 0),p=t([n("esri.rest.knowledgeGraph.Relationship")],p);const I=p;export{z as c,x as m,I as p,P as s,S as t};
