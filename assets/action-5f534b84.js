import{fI as y,fJ as C,fH as k,fG as o,fK as z}from"./index-b9c5f9ae.js";import{t as p}from"./dom-4b2f4ae5.js";import{g as w}from"./guid-dbdce6d5.js";import{c as I,d as E,u as L,I as T}from"./interactive-4d9c788f.js";import{s as S,a as M,c as O}from"./loadable-d6fa9db7.js";import{u as $,c as F,a as H,s as A,d as R,b as W}from"./t9n-2bff84c9.js";import{c as j}from"./observers-a2717ada.js";import{g as D}from"./component-af7c3ce5.js";import{d as V}from"./icon-9c20b045.js";import{d as _}from"./loader-f5915841.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const i={button:"button",buttonTextVisible:"button--text-visible",buttonCompact:"button--compact",indicatorText:"indicator-text",iconContainer:"icon-container",slotContainer:"slot-container",slotContainerHidden:"slot-container--hidden",textContainer:"text-container",textContainerVisible:"text-container--visible",indicatorWithIcon:"indicator-with-icon",indicatorWithoutIcon:"indicator-without-icon"},U={tooltip:"tooltip"},B=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-color-brand);--calcite-action-color-transparent-hover:var(--calcite-color-transparent-hover);--calcite-action-color-transparent-press:var(--calcite-color-transparent-press)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-color-foreground-1);fill:var(--calcite-color-text-3);font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}.button:focus{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.button:active{background-color:var(--calcite-color-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1.5rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([data-active]) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-color-foreground-3);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([active]) .button:active{background-color:var(--calcite-color-foreground-1)}:host([appearance=transparent][active]) .button,:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-action-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-action-color-transparent-press)}:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading][appearance=solid]) .button,:host([loading][appearance=solid]) .button:hover,:host([loading][appearance=solid]) .button:focus{background-color:var(--calcite-color-foreground-1)}:host([loading][appearance=solid]) .button .text-container,:host([loading][appearance=solid]) .button:hover .text-container,:host([loading][appearance=solid]) .button:focus .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-color-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-color-foreground-1);opacity:var(--calcite-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-color-foreground-3);opacity:var(--calcite-opacity-disabled)}.indicator-with-icon{position:relative}.indicator-with-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color)}.indicator-without-icon{margin-inline:0.25rem;inline-size:1rem;position:relative}.indicator-without-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color)}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`,G=B,J=y(class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.mutationObserver=j("mutation",()=>k(this)),this.guid=`calcite-action-${w()}`,this.indicatorId=`${this.guid}-indicator`,this.buttonId=`${this.guid}-button`,this.handleTooltipSlotChange=t=>{const e=t.target.assignedElements({flatten:!0}).filter(a=>a?.matches("calcite-tooltip"))[0];e&&(e.referenceElement=this.buttonEl)},this.active=!1,this.alignment=void 0,this.appearance="solid",this.compact=!1,this.disabled=!1,this.icon=void 0,this.iconFlipRtl=!1,this.indicator=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){$(this,this.effectiveLocale)}connectedCallback(){I(this),F(this),H(this),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}async componentWillLoad(){S(this),await A(this)}componentDidLoad(){M(this)}disconnectedCallback(){E(this),R(this),W(this),this.mutationObserver?.disconnect()}componentDidRender(){L(this)}async setFocus(){await O(this),this.buttonEl?.focus()}renderTextContainer(){const{text:t,textEnabled:n}=this,e={[i.textContainer]:!0,[i.textContainerVisible]:n};return t?o("div",{class:e,key:"text-container"},t):null}renderIndicatorText(){const{indicator:t,messages:n,indicatorId:e,buttonId:a}=this;return o("div",{"aria-labelledby":a,"aria-live":"polite",class:i.indicatorText,id:e,role:"region"},t?n.indicator:null)}renderIconContainer(){const{loading:t,icon:n,scale:e,el:a,iconFlipRtl:r,indicator:l}=this,d=e==="l"?"l":"m",u=t?o("calcite-loader",{inline:!0,label:this.messages.loading,scale:d}):null,c=n?o("calcite-icon",{class:{[i.indicatorWithIcon]:l},flipRtl:r,icon:n,scale:D(this.scale)}):null,s=u||c,b=s||a.children?.length,h=o("div",{class:{[i.slotContainer]:!0,[i.slotContainerHidden]:t}},o("slot",null));return b?o("div",{"aria-hidden":"true",class:i.iconContainer,key:"icon-container"},s,h):null}render(){const{active:t,compact:n,disabled:e,icon:a,loading:r,textEnabled:l,label:d,text:u,indicator:c,indicatorId:s,buttonId:b,messages:h}=this,f=d||u,g=f?`${f}${c?` (${h.indicator})`:""}`:"",v={[i.button]:!0,[i.buttonTextVisible]:l,[i.buttonCompact]:n};return o(z,{key:"ea1d66de5f1b0d591306a8f40d1ce22c6b99a8cd"},o(T,{key:"ac7794e91182528fa2729ecac860a1abe4fbaeec",disabled:e},o("button",{key:"32d7d5461e68006e2baadf7f65e504fbf2f0f9a0","aria-busy":p(r),"aria-controls":c?s:null,"aria-disabled":p(e),"aria-label":g,"aria-pressed":p(t),class:v,disabled:e,id:b,ref:x=>this.buttonEl=x},this.renderIconContainer(),this.renderTextContainer(),!a&&c&&o("div",{class:i.indicatorWithoutIcon,key:"indicator-no-icon"})),o("slot",{key:"5e4ba8c04428b6797dfdaaa8ca1e96d6bc8487a7",name:U.tooltip,onSlotchange:this.handleTooltipSlotChange}),this.renderIndicatorText()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return G}},[1,"calcite-action",{active:[516],alignment:[513],appearance:[513],compact:[516],disabled:[516],icon:[1],iconFlipRtl:[516,"icon-flip-rtl"],indicator:[516],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function K(){if(typeof customElements>"u")return;["calcite-action","calcite-icon","calcite-loader"].forEach(t=>{switch(t){case"calcite-action":customElements.get(t)||customElements.define(t,J);break;case"calcite-icon":customElements.get(t)||V();break;case"calcite-loader":customElements.get(t)||_();break}})}K();export{J as A,K as d};
