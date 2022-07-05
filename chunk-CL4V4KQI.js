import{a as h,b as l}from"./chunk-BGRHNNGM.js";import{a as s,b as a,e as c,f as u,g as e,o as d}from"./chunk-A2UGGNEY.js";import{a as o}from"./chunk-NZ3RGSR6.js";var v=s`:host {
  display: var(--bl-button-display, inline-block);
  max-width: 100%;
  position: relative;

  --bl-button-main-color: var(--bl-color-primary);
  --bl-button-main-hover-color: var(--bl-color-primary-hover);
  --bl-button-content-color: #fff;
  --bl-button-bg-color: var(--bl-button-main-color);
  --bl-button-border-color: var(--bl-button-main-color);
  --bl-button-padding-vertical: var(--bl-size-2xs);
  --bl-button-padding-horizontal: var(--bl-size-m);
  --bl-button-margin-icon: var(--bl-button-padding-vertical);
  --bl-button-icon-size: var(--bl-size-m);
  --bl-button-font: var(--bl-font-title-3-medium);
  --bl-button-height: var(--bl-size-2xl);
}

.button {
  display: flex;
  gap: var(--bl-button-margin-icon);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: var(--bl-button-height);
  border: solid 1px var(--bl-button-border-color);
  border-radius: 6px;
  text-decoration: none;
  padding: var(--bl-button-padding-vertical) var(--bl-button-padding-horizontal);
  cursor: pointer;
  background-color: var(--bl-button-bg-color);
  color: var(--bl-button-content-color);
  font: var(--bl-button-font);
  font-kerning: none;
  user-select: none;
}

.button:hover {
  --bl-button-bg-color: var(--bl-button-main-hover-color);
  --bl-button-border-color: var(--bl-button-main-hover-color);
}

.label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

:host([size='small']) {
  --bl-button-font: var(--bl-font-title-4-medium);
  --bl-button-padding-vertical: var(--bl-size-3xs);
  --bl-button-padding-horizontal: var(--bl-size-2xs);
  --bl-button-icon-size: var(--bl-size-s);
  --bl-button-height: var(--bl-size-xl);
}

:host([size='large']) {
  --bl-button-font: var(--bl-font-title-3-medium);
  --bl-button-padding-vertical: var(--bl-size-xs);
  --bl-button-padding-horizontal: var(--bl-size-xl);
  --bl-button-margin-icon: var(--bl-size-2xs);
  --bl-button-height: var(--bl-size-3xl);
}

.button:focus {
  outline: none;
}

:host ::slotted(bl-icon) {
  font-size: var(--bl-button-icon-size);
}

.has-icon:not(.has-content) {
  --bl-button-padding-horizontal: var(--bl-button-padding-vertical);
  --bl-button-margin-icon: 0;
}

:host([secondary]) {
  --bl-button-main-color: var(--bl-color-secondary);
  --bl-button-main-hover-color: var(--bl-color-secondary-hover);
}

:host([success]) {
  --bl-button-main-color: var(--bl-color-success);
  --bl-button-main-hover-color: var(--bl-color-success-hover);
}

:host([danger]) {
  --bl-button-main-color: var(--bl-color-danger);
  --bl-button-main-hover-color: var(--bl-color-danger-hover);
}

:host([text]) {
  --bl-button-content-color: var(--bl-button-main-color);
  --bl-button-border-color: transparent;
  --bl-button-bg-color: transparent;
}

:host([text]) .button {
  text-decoration: underline;
}

:host([disabled]) {
  cursor: not-allowed;

  --bl-button-main-color: var(--bl-color-tertiary);
  --bl-button-main-hover-color: var(--bl-color-tertiary);
  --bl-button-content-color: var(--bl-color-content-passive);
  --bl-button-bg-color: var(--bl-button-main-color);
}

:host([disabled]) .button {
  pointer-events: none;
  text-decoration: none;
}

:host([outline]) {
  --bl-button-bg-color: transparent;
}

:host([outline]:not(:hover):not([disabled])) {
  --bl-button-content-color: var(--bl-button-main-color);
}

:host([text]:not([disabled])) .button:hover {
  --bl-button-content-color: var(--bl-button-main-hover-color);
  --bl-button-border-color: transparent;
  --bl-button-bg-color: transparent;
}
`,p=v;var t=class extends c{constructor(){super(...arguments);this.primary=!1;this.secondary=!1;this.success=!1;this.danger=!1;this.outline=!1;this.text=!1;this.size="medium";this.disabled=!1;this.target="_self"}static get styles(){return[p]}get _hasIconSlot(){return this.querySelector(':scope > [slot="icon"]')!==null}get _hasDefaultSlot(){return[...this.childNodes].some(r=>{let n=r.nodeType;return n===r.TEXT_NODE&&r.textContent?.trim()!==""||n===r.ELEMENT_NODE&&!r.hasAttribute("slot")})}render(){let i=!!this.href,r=this.icon?a`<bl-icon name=${this.icon}></bl-icon>`:"",n=a`<slot name="icon">${r}</slot> <span class="label"><slot></slot></span>`,b=h({button:!0,"has-icon":this.icon||this._hasIconSlot,"has-content":this._hasDefaultSlot});return i?a`<a
          class=${b}
          aria-disabled="${l(this.disabled)}"
          aria-label="${l(this.label)}"
          href=${l(this.href)}
          target=${l(this.target)}
          role="button"
          >${n}</a
        >`:a`<button
          class=${b}
          aria-disabled="${l(this.disabled)}"
          aria-label="${l(this.label)}"
          ?disabled=${this.disabled}
          @click="${this._handleClick}"
        >
          ${n}
        </button>`}_handleClick(){this.onClick("Click event fired!")}};o([e({type:Boolean,reflect:!0})],t.prototype,"primary",2),o([e({type:Boolean,reflect:!0})],t.prototype,"secondary",2),o([e({type:Boolean,reflect:!0})],t.prototype,"success",2),o([e({type:Boolean,reflect:!0})],t.prototype,"danger",2),o([e({type:Boolean,reflect:!0})],t.prototype,"outline",2),o([e({type:Boolean,reflect:!0})],t.prototype,"text",2),o([e({type:String,reflect:!0})],t.prototype,"size",2),o([e({type:String})],t.prototype,"label",2),o([e({type:Boolean,reflect:!0})],t.prototype,"disabled",2),o([e({type:String})],t.prototype,"href",2),o([e({type:String})],t.prototype,"icon",2),o([e({type:String})],t.prototype,"target",2),o([d("bl-click")],t.prototype,"onClick",2),t=o([u("bl-button")],t);export{t as a};
//# sourceMappingURL=chunk-CL4V4KQI.js.map
