import{cH as m,cD as s,aj as l,ak as n,az as a,bW as r,cE as u,cJ as p,am as d,cA as v}from"./index-b9c5f9ae.js";function o(i,t){return u.fromJSON({value:i,unit:t})}let e=class extends m(v){constructor(i){super(i),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0,this.stops=null}readFullTimeExtent(i,t){return t.timeExtent&&Array.isArray(t.timeExtent)&&t.timeExtent.length===2?s.fromArray(t.timeExtent):null}writeFullTimeExtent(i,t){i?.start!=null&&i.end!=null?t.timeExtent=i.toArray():t.timeExtent=null}readInterval(i,t){return t.timeInterval&&t.timeIntervalUnits?o(t.timeInterval,t.timeIntervalUnits):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?o(t.defaultTimeInterval,t.defaultTimeIntervalUnits):null}writeInterval(i,t){t.timeInterval=i?.toJSON().value??null,t.timeIntervalUnits=i?.toJSON().unit??null}};l([n({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],e.prototype,"cumulative",void 0),l([n({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],e.prototype,"endField",void 0),l([n({type:s,json:{write:{enabled:!0,allowNull:!0}}})],e.prototype,"fullTimeExtent",void 0),l([a("fullTimeExtent",["timeExtent"])],e.prototype,"readFullTimeExtent",null),l([r("fullTimeExtent")],e.prototype,"writeFullTimeExtent",null),l([n({type:Boolean,json:{write:!0}})],e.prototype,"hasLiveData",void 0),l([n({type:u,json:{write:{enabled:!0,allowNull:!0}}})],e.prototype,"interval",void 0),l([a("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],e.prototype,"readInterval",null),l([r("interval")],e.prototype,"writeInterval",null),l([n({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],e.prototype,"startField",void 0),l([n(p("timeReference",!0))],e.prototype,"timeZone",void 0),l([n({type:String,json:{write:{enabled:!0,allowNull:!0}}})],e.prototype,"trackIdField",void 0),l([n({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],e.prototype,"useTime",void 0),l([n({type:[Date],json:{read:!1}})],e.prototype,"stops",void 0),e=l([d("esri.layers.support.TimeInfo")],e);const I=e;export{I as d};
