!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).MarkerWithLabel=t()}(this,(function(){"use strict";function e(e,t){for(let i in t.prototype)e.prototype[i]=t.prototype[i]}function t(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0,e.preventDefault?e.preventDefault():e.returnValue=!1}function i(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}class s{constructor(){e(s,google.maps.OverlayView)}}const a="block",n="none",l="absolute",o="marker-label",h="marker-label-event";class r extends s{constructor({clickable:e=!0,cursor:t="pointer",draggable:i=!0,labelAnchor:s=new google.maps.Point(0,0),labelClass:a=o,labelContent:n,position:l,opacity:h=1,map:r,labelZIndexOffset:g=1,visible:c=!0,zIndex:d=0}){super(),this.createElements(),this.anchor=s,this.content=n,this.className=a,this.clickable=e,this.cursor=t,this.draggable=i,l instanceof google.maps.LatLng?this.position=l:this.position=new google.maps.LatLng(l),this.opacity=h,this.visible=c,this.zIndex=d,this.zIndexOffset=g,r&&this.setMap(r)}set content(e){"string"==typeof e?(this.labelDiv.innerHTML=e,this.eventDiv.innerHTML=e):(this.labelDiv.innerHTML="",this.labelDiv.appendChild(e),this.eventDiv.innerHTML="",this.eventDiv.appendChild(e.cloneNode(!0)))}get className(){return this.labelDiv.className}set className(e){this.labelDiv.className=e,this.labelDiv.classList.add(o),this.eventDiv.className=e,this.eventDiv.classList.add(h)}set cursor(e){this.hoverCursor=e,this.isInteractive&&(this.eventDiv.style.cursor=e)}get cursor(){return this.isInteractive?this.hoverCursor:"inherit"}get isInteractive(){return this.draggable||this.clickable}set opacity(e){this.labelDiv.style.opacity=String(e)}set title(e){this.eventDiv.title=e}set visible(e){e?(this.labelDiv.style.display=a,this.eventDiv.style.display=a):(this.labelDiv.style.display=n,this.eventDiv.style.display=n)}onAdd(){this.getPanes().markerLayer.appendChild(this.labelDiv),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv)}draw(){const e=this.getProjection().fromLatLngToDivPixel(this.position),t=Math.round(e.x+this.anchor.x),i=Math.round(e.y+this.anchor.y);this.labelDiv.style.left=t+"px",this.labelDiv.style.top=i+"px",this.eventDiv.style.left=this.labelDiv.style.left,this.eventDiv.style.top=this.labelDiv.style.top;const s=(this.zIndex||Math.ceil(e.y))+this.zIndexOffset;this.labelDiv.style.zIndex=String(s),this.eventDiv.style.zIndex=String(s),this.eventDiv.style.display=this.isInteractive?this.eventDiv.style.display:n,this.eventDiv.style.cursor=this.cursor}addDomListener(e,t){return google.maps.event.addDomListener(this.eventDiv,e,t)}onRemove(){this.labelDiv.parentNode.removeChild(this.labelDiv),this.eventDiv.parentNode.removeChild(this.eventDiv)}createElements(){this.labelDiv=document.createElement("div"),this.eventDiv=document.createElement("div"),this.labelDiv.classList.add(o),this.labelDiv.classList.add(h),this.labelDiv.style.position=l,this.eventDiv.style.position=l,this.eventDiv.style.opacity="0.01"}}class g{constructor(t){e(g,google.maps.Marker),google.maps.Marker.call(this,t)}}const c="click",d="dblclick",v="drag",b="dragend",p="dragstart",u="mousedown",m="mouseover",L="mouseout",D="mouseup";return class extends g{constructor(e){super(Object.assign({},e)),this.isTouchScreen=!1,this.isDraggingLabel=!1,this.isMouseDownOnLabel=!1,this.shouldIgnoreClick=!1,this.label=new r(Object.assign({},e)),this.propertyListeners=[google.maps.event.addListener(this,"clickable_changed",this.handleClickableOrDraggableChange),google.maps.event.addListener(this,"cursor_changed",()=>{this.label.cursor=this.getCursor()}),google.maps.event.addListener(this,"draggable_changed",this.handleClickableOrDraggableChange),google.maps.event.addListener(this,"position_changed",()=>{this.label.position=this.getPosition()}),google.maps.event.addListener(this,"opacity_changed",()=>{this.label.opacity=this.getOpacity()}),google.maps.event.addListener(this,"title_changed",()=>{this.label.title=this.getTitle()}),google.maps.event.addListener(this,"visible_changed",()=>{this.label.visible=this.getVisible()}),google.maps.event.addListener(this,"zindex_changed",()=>{this.label.zIndex=this.getZIndex(),this.label.draw()})]}get isInteractive(){return this.getClickable()||this.getDraggable()}get labelClass(){return this.label.className}set labelClass(e){this.label.className=e}setMap(e){super.setMap(e),setTimeout(()=>{this.label.setMap(e),this.removeInteractiveListeners(),e&&this.addInteractiveListeners()})}handleClickableOrDraggableChange(){this.label.clickable=this.getClickable(),this.label.draggable=this.getDraggable(),this.isInteractive?this.addInteractiveListeners():this.removeInteractiveListeners()}removeInteractiveListeners(){this.interactiveListeners&&(this.interactiveListeners.forEach(e=>google.maps.event.removeListener(e)),this.interactiveListeners=null)}addInteractiveListeners(){if(!this.interactiveListeners){if(!this.getMap())return;this.interactiveListeners=[this.label.addDomListener(m,e=>{this.isTouchScreen||(google.maps.event.trigger(this,m,{latLng:this.getPosition()}),t(e))}),this.label.addDomListener(L,e=>{this.isTouchScreen||(this.mouseOutTimeout&&clearTimeout(this.mouseOutTimeout),this.mouseOutTimeout=setTimeout(()=>{this.isMouseDownOnLabel&&(this.isMouseDownOnLabel=!1,google.maps.event.trigger(this,D,{latLng:this.getPosition()}),this.isDraggingLabel&&(this.isDraggingLabel=!1,this.shouldIgnoreClick=!0,google.maps.event.trigger(this,b,{latLng:this.getPosition()}))),google.maps.event.trigger(this,L,{latLng:this.getPosition()})},200),t(e))}),this.label.addDomListener(u,e=>{this.isDraggingLabel=!1,this.isMouseDownOnLabel=!0,google.maps.event.trigger(this,u,{latLng:this.getPosition()}),this.isTouchScreen||t(e)}),this.label.addDomListener(D,e=>{const i={latLng:this.getPosition()};this.isMouseDownOnLabel&&(this.isMouseDownOnLabel=!1,google.maps.event.trigger(this,D,i),this.isDraggingLabel&&(this.isDraggingLabel=!1,this.shouldIgnoreClick=!0,google.maps.event.trigger(this,b,i)),this.getDraggable()||t(e))}),this.label.addDomListener(c,e=>{this.shouldIgnoreClick?this.shouldIgnoreClick=!1:google.maps.event.trigger(this,c,{latLng:this.getPosition()}),t(e)}),this.label.addDomListener(d,e=>{google.maps.event.trigger(this,d,{latLng:this.getPosition()}),t(e)}),google.maps.event.addListener(this.getMap(),"mousemove",e=>{if(this.isMouseDownOnLabel&&this.getDraggable())if(this.isDraggingLabel){const t=new google.maps.LatLng(e.latLng.lat()-this.eventOffset.y,e.latLng.lng()-this.eventOffset.x);google.maps.event.trigger(this,v,Object.assign(Object.assign({},e),{latLng:t}))}else this.isDraggingLabel=!0,this.eventOffset=new google.maps.Point(e.latLng.lng()-this.getPosition().lng(),e.latLng.lat()-this.getPosition().lat()),google.maps.event.trigger(this,p,Object.assign(Object.assign({},e),{latLng:this.getPosition()}))}),google.maps.event.addListener(this,p,()=>{this.label.zIndex=1e6}),google.maps.event.addListener(this,v,({latLng:e})=>{this.setPosition(e)}),google.maps.event.addListener(this,b,()=>{this.label.zIndex=this.getZIndex(),this.label.draw()}),this.label.addDomListener("touchstart",e=>{this.isTouchScreen=!0,i(e)}),this.label.addDomListener("touchmove",e=>{i(e)}),this.label.addDomListener("touchend",e=>{i(e)})]}}}}));
//# sourceMappingURL=index.umd.js.map
