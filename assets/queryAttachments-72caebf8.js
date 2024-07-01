import{hY as u,hZ as f,av as p}from"./index-b9c5f9ae.js";import{t as d}from"./query-3a4c8fa9.js";import{a as l}from"./AttachmentInfo-ff02527a.js";import"./normalizeUtils-512dfd53.js";import"./normalizeUtilsCommon-050bf0c4.js";import"./pbfQueryUtils-9accdce5.js";import"./pbf-99c355c5.js";import"./queryZScale-9cc7de1b.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function k(n,t){const e={};for(const o of t){const{parentObjectId:a,parentGlobalId:s,attachmentInfos:c}=o;for(const r of c){const{id:h}=r,i=u(f(`${n.path}/${a}/attachments/${h}`)),m=l.fromJSON(r);m.set({url:i,parentObjectId:a,parentGlobalId:s}),e[a]?e[a].push(m):e[a]=[m]}}return e}function w(n,t,e){let o={query:d({...n.query,f:"json",...y(t)})};return e&&(o={...e,...o,query:{...e.query,...o.query}}),p(n.path+"/queryAttachments",o).then(a=>a.data.attachmentGroups)}async function z(n,t,e){const{objectIds:o}=t,a=[];for(const s of o)a.push(p(n.path+"/"+s+"/attachments",e));return Promise.all(a).then(s=>o.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{w as executeAttachmentQuery,z as fetchAttachments,k as processAttachmentQueryResult};
