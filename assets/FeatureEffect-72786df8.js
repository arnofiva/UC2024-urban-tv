import{aj as i,ak as a,cX as c,cY as d,cZ as u,am as b,cA as y,at as f}from"./index-b9c5f9ae.js";import{d as m}from"./FeatureFilter-cd09ce2a.js";var n;const w={read:{reader:d},write:{writer:u,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},p={read:{reader:d},write:{writer:u,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},h={name:"showExcludedLabels",default:!0};let t=n=class extends y{constructor(r){super(r),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(r,e){const l=super.write(r,e);if(e?.origin){if(l.filter){const s=Object.keys(l.filter);if(s.length>1||s[0]!=="where")return e.messages?.push(new f("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:e.layer,effect:this})),null}if("showExcludedLabels"in l)return e.messages?.push(new f("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:e.layer,effect:this})),null}return l}clone(){return new n({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};i([a({type:m,json:{write:{allowNull:!0,writer(r,e,l,s){const o=r?.write({},s);o&&Object.keys(o).length!==0?c(l,o,e):c(l,null,e)}}}})],t.prototype,"filter",void 0),i([a({json:{read:d,write:{writer:u,allowNull:!0},origins:{"web-map":w,"portal-item":w}}})],t.prototype,"includedEffect",void 0),i([a({json:{read:d,write:{writer:u,allowNull:!0},origins:{"web-map":p,"portal-item":p}}})],t.prototype,"excludedEffect",void 0),i([a({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":h,"portal-item":h}}})],t.prototype,"excludedLabelsVisible",void 0),t=n=i([b("esri.layers.support.FeatureEffect")],t);const v=t;export{v as w};
