!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).markerWithLabel={})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?s(e):t}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g=function(e){return e&&e.Math==Math&&e},v=g("object"==typeof globalThis&&globalThis)||g("object"==typeof window&&window)||g("object"==typeof self&&self)||g("object"==typeof f&&f)||function(){return this}()||Function("return this")(),p={},h=function(e){try{return!!e()}catch(e){return!0}},b=!h((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),d=!h((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})),y=d,m=Function.prototype.call,L=y?m.bind(m):function(){return m.apply(m,arguments)},O={},D={}.propertyIsEnumerable,w=Object.getOwnPropertyDescriptor,S=w&&!D.call({1:2},1);O.f=S?function(e){var t=w(this,e);return!!t&&t.enumerable}:D;var j,P,k=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},T=d,M=Function.prototype,C=M.bind,I=M.call,x=T&&C.bind(I,I),E=T?function(e){return e&&x(e)}:function(e){return e&&function(){return I.apply(e,arguments)}},_=E,N=_({}.toString),R=_("".slice),A=function(e){return R(N(e),8,-1)},z=E,F=h,G=A,V=v.Object,H=z("".split),B=F((function(){return!V("z").propertyIsEnumerable(0)}))?function(e){return"String"==G(e)?H(e,""):V(e)}:V,q=v.TypeError,W=function(e){if(null==e)throw q("Can't call method on "+e);return e},Z=B,U=W,K=function(e){return Z(U(e))},X=function(e){return"function"==typeof e},Y=X,$=function(e){return"object"==typeof e?null!==e:Y(e)},J=v,Q=X,ee=function(e){return Q(e)?e:void 0},te=function(e,t){return arguments.length<2?ee(J[e]):J[e]&&J[e][t]},ne=E({}.isPrototypeOf),re=v,ie=te("navigator","userAgent")||"",oe=re.process,ae=re.Deno,se=oe&&oe.versions||ae&&ae.version,le=se&&se.v8;le&&(P=(j=le.split("."))[0]>0&&j[0]<4?1:+(j[0]+j[1])),!P&&ie&&(!(j=ie.match(/Edge\/(\d+)/))||j[1]>=74)&&(j=ie.match(/Chrome\/(\d+)/))&&(P=+j[1]);var ce=P,ue=ce,fe=h,ge=!!Object.getOwnPropertySymbols&&!fe((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ue&&ue<41})),ve=ge&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,pe=te,he=X,be=ne,de=ve,ye=v.Object,me=de?function(e){return"symbol"==typeof e}:function(e){var t=pe("Symbol");return he(t)&&be(t.prototype,ye(e))},Le=v.String,Oe=X,De=function(e){try{return Le(e)}catch(e){return"Object"}},we=v.TypeError,Se=function(e){if(Oe(e))return e;throw we(De(e)+" is not a function")},je=Se,Pe=L,ke=X,Te=$,Me=v.TypeError,Ce={exports:{}},Ie=v,xe=Object.defineProperty,Ee=function(e,t){try{xe(Ie,e,{value:t,configurable:!0,writable:!0})}catch(n){Ie[e]=t}return t},_e=Ee,Ne="__core-js_shared__",Re=v[Ne]||_e(Ne,{}),Ae=Re;(Ce.exports=function(e,t){return Ae[e]||(Ae[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var ze=W,Fe=v.Object,Ge=function(e){return Fe(ze(e))},Ve=Ge,He=E({}.hasOwnProperty),Be=Object.hasOwn||function(e,t){return He(Ve(e),t)},qe=E,We=0,Ze=Math.random(),Ue=qe(1..toString),Ke=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Ue(++We+Ze,36)},Xe=v,Ye=Ce.exports,$e=Be,Je=Ke,Qe=ge,et=ve,tt=Ye("wks"),nt=Xe.Symbol,rt=nt&&nt.for,it=et?nt:nt&&nt.withoutSetter||Je,ot=function(e){if(!$e(tt,e)||!Qe&&"string"!=typeof tt[e]){var t="Symbol."+e;Qe&&$e(nt,e)?tt[e]=nt[e]:tt[e]=et&&rt?rt(t):it(t)}return tt[e]},at=L,st=$,lt=me,ct=function(e,t){var n=e[t];return null==n?void 0:je(n)},ut=function(e,t){var n,r;if("string"===t&&ke(n=e.toString)&&!Te(r=Pe(n,e)))return r;if(ke(n=e.valueOf)&&!Te(r=Pe(n,e)))return r;if("string"!==t&&ke(n=e.toString)&&!Te(r=Pe(n,e)))return r;throw Me("Can't convert object to primitive value")},ft=ot,gt=v.TypeError,vt=ft("toPrimitive"),pt=function(e,t){if(!st(e)||lt(e))return e;var n,r=ct(e,vt);if(r){if(void 0===t&&(t="default"),n=at(r,e,t),!st(n)||lt(n))return n;throw gt("Can't convert object to primitive value")}return void 0===t&&(t="number"),ut(e,t)},ht=me,bt=function(e){var t=pt(e,"string");return ht(t)?t:t+""},dt=$,yt=v.document,mt=dt(yt)&&dt(yt.createElement),Lt=function(e){return mt?yt.createElement(e):{}},Ot=Lt,Dt=!b&&!h((function(){return 7!=Object.defineProperty(Ot("div"),"a",{get:function(){return 7}}).a})),wt=b,St=L,jt=O,Pt=k,kt=K,Tt=bt,Mt=Be,Ct=Dt,It=Object.getOwnPropertyDescriptor;p.f=wt?It:function(e,t){if(e=kt(e),t=Tt(t),Ct)try{return It(e,t)}catch(e){}if(Mt(e,t))return Pt(!St(jt.f,e,t),e[t])};var xt={},Et=b&&h((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),_t=v,Nt=$,Rt=_t.String,At=_t.TypeError,zt=function(e){if(Nt(e))return e;throw At(Rt(e)+" is not an object")},Ft=b,Gt=Dt,Vt=Et,Ht=zt,Bt=bt,qt=v.TypeError,Wt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Ut="enumerable",Kt="configurable",Xt="writable";xt.f=Ft?Vt?function(e,t,n){if(Ht(e),t=Bt(t),Ht(n),"function"==typeof e&&"prototype"===t&&"value"in n&&Xt in n&&!n.writable){var r=Zt(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:Kt in n?n.configurable:r.configurable,enumerable:Ut in n?n.enumerable:r.enumerable,writable:!1})}return Wt(e,t,n)}:Wt:function(e,t,n){if(Ht(e),t=Bt(t),Ht(n),Gt)try{return Wt(e,t,n)}catch(e){}if("get"in n||"set"in n)throw qt("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var Yt=xt,$t=k,Jt=b?function(e,t,n){return Yt.f(e,t,$t(1,n))}:function(e,t,n){return e[t]=n,e},Qt={exports:{}},en=X,tn=Re,nn=E(Function.toString);en(tn.inspectSource)||(tn.inspectSource=function(e){return nn(e)});var rn,on,an,sn=tn.inspectSource,ln=X,cn=sn,un=v.WeakMap,fn=ln(un)&&/native code/.test(cn(un)),gn=Ce.exports,vn=Ke,pn=gn("keys"),hn={},bn=fn,dn=v,yn=E,mn=$,Ln=Jt,On=Be,Dn=Re,wn=function(e){return pn[e]||(pn[e]=vn(e))},Sn=hn,jn="Object already initialized",Pn=dn.TypeError,kn=dn.WeakMap;if(bn||Dn.state){var Tn=Dn.state||(Dn.state=new kn),Mn=yn(Tn.get),Cn=yn(Tn.has),In=yn(Tn.set);rn=function(e,t){if(Cn(Tn,e))throw new Pn(jn);return t.facade=e,In(Tn,e,t),t},on=function(e){return Mn(Tn,e)||{}},an=function(e){return Cn(Tn,e)}}else{var xn=wn("state");Sn[xn]=!0,rn=function(e,t){if(On(e,xn))throw new Pn(jn);return t.facade=e,Ln(e,xn,t),t},on=function(e){return On(e,xn)?e[xn]:{}},an=function(e){return On(e,xn)}}var En={set:rn,get:on,has:an,enforce:function(e){return an(e)?on(e):rn(e,{})},getterFor:function(e){return function(t){var n;if(!mn(t)||(n=on(t)).type!==e)throw Pn("Incompatible receiver, "+e+" required");return n}}},_n=b,Nn=Be,Rn=Function.prototype,An=_n&&Object.getOwnPropertyDescriptor,zn=Nn(Rn,"name"),Fn=zn&&"something"===function(){}.name,Gn=zn&&(!_n||_n&&An(Rn,"name").configurable),Vn=v,Hn=X,Bn=Be,qn=Jt,Wn=Ee,Zn=sn,Un={EXISTS:zn,PROPER:Fn,CONFIGURABLE:Gn}.CONFIGURABLE,Kn=En.get,Xn=En.enforce,Yn=String(String).split("String");(Qt.exports=function(e,t,n,r){var i,o=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet,l=r&&void 0!==r.name?r.name:t;Hn(n)&&("Symbol("===String(l).slice(0,7)&&(l="["+String(l).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Bn(n,"name")||Un&&n.name!==l)&&qn(n,"name",l),(i=Xn(n)).source||(i.source=Yn.join("string"==typeof l?l:""))),e!==Vn?(o?!s&&e[t]&&(a=!0):delete e[t],a?e[t]=n:qn(e,t,n)):a?e[t]=n:Wn(t,n)})(Function.prototype,"toString",(function(){return Hn(this)&&Kn(this).source||Zn(this)}));var $n={},Jn=Math.ceil,Qn=Math.floor,er=function(e){var t=+e;return t!=t||0===t?0:(t>0?Qn:Jn)(t)},tr=er,nr=Math.max,rr=Math.min,ir=er,or=Math.min,ar=function(e){return e>0?or(ir(e),9007199254740991):0},sr=function(e){return ar(e.length)},lr=K,cr=function(e,t){var n=tr(e);return n<0?nr(n+t,0):rr(n,t)},ur=sr,fr=function(e){return function(t,n,r){var i,o=lr(t),a=ur(o),s=cr(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},gr={includes:fr(!0),indexOf:fr(!1)},vr=Be,pr=K,hr=gr.indexOf,br=hn,dr=E([].push),yr=function(e,t){var n,r=pr(e),i=0,o=[];for(n in r)!vr(br,n)&&vr(r,n)&&dr(o,n);for(;t.length>i;)vr(r,n=t[i++])&&(~hr(o,n)||dr(o,n));return o},mr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Lr=yr,Or=mr.concat("length","prototype");$n.f=Object.getOwnPropertyNames||function(e){return Lr(e,Or)};var Dr={};Dr.f=Object.getOwnPropertySymbols;var wr=te,Sr=$n,jr=Dr,Pr=zt,kr=E([].concat),Tr=wr("Reflect","ownKeys")||function(e){var t=Sr.f(Pr(e)),n=jr.f;return n?kr(t,n(e)):t},Mr=Be,Cr=Tr,Ir=p,xr=xt,Er=h,_r=X,Nr=/#|\.prototype\./,Rr=function(e,t){var n=zr[Ar(e)];return n==Gr||n!=Fr&&(_r(t)?Er(t):!!t)},Ar=Rr.normalize=function(e){return String(e).replace(Nr,".").toLowerCase()},zr=Rr.data={},Fr=Rr.NATIVE="N",Gr=Rr.POLYFILL="P",Vr=Rr,Hr=v,Br=p.f,qr=Jt,Wr=Qt.exports,Zr=Ee,Ur=function(e,t,n){for(var r=Cr(t),i=xr.f,o=Ir.f,a=0;a<r.length;a++){var s=r[a];Mr(e,s)||n&&Mr(n,s)||i(e,s,o(t,s))}},Kr=Vr,Xr=function(e,t){var n,r,i,o,a,s=e.target,l=e.global,c=e.stat;if(n=l?Hr:c?Hr[s]||Zr(s,{}):(Hr[s]||{}).prototype)for(r in t){if(o=t[r],i=e.noTargetGet?(a=Br(n,r))&&a.value:n[r],!Kr(l?r:s+(c?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Ur(o,i)}(e.sham||i&&i.sham)&&qr(o,"sham",!0),Wr(n,r,o,e)}},Yr=yr,$r=mr,Jr=Object.keys||function(e){return Yr(e,$r)},Qr=b,ei=E,ti=L,ni=h,ri=Jr,ii=Dr,oi=O,ai=Ge,si=B,li=Object.assign,ci=Object.defineProperty,ui=ei([].concat),fi=!li||ni((function(){if(Qr&&1!==li({b:1},li(ci({},"a",{enumerable:!0,get:function(){ci(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=li({},e)[n]||ri(li({},t)).join("")!=r}))?function(e,t){for(var n=ai(e),r=arguments.length,i=1,o=ii.f,a=oi.f;r>i;)for(var s,l=si(arguments[i++]),c=o?ui(ri(l),o(l)):ri(l),u=c.length,f=0;u>f;)s=c[f++],Qr&&!ti(a,l,s)||(n[s]=l[s]);return n}:li;Xr({target:"Object",stat:!0,forced:Object.assign!==fi},{assign:fi});var gi={};gi[ot("toStringTag")]="z";var vi="[object z]"===String(gi),pi=v,hi=vi,bi=X,di=A,yi=ot("toStringTag"),mi=pi.Object,Li="Arguments"==di(function(){return arguments}()),Oi=hi?di:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=mi(e),yi))?n:Li?di(t):"Object"==(r=di(t))&&bi(t.callee)?"Arguments":r},Di=Oi,wi=vi?{}.toString:function(){return"[object "+Di(this)+"]"},Si=vi,ji=Qt.exports,Pi=wi;Si||ji(Object.prototype,"toString",Pi,{unsafe:!0});var ki=Lt("span").classList,Ti=ki&&ki.constructor&&ki.constructor.prototype,Mi=Ti===Object.prototype?void 0:Ti,Ci=Se,Ii=d,xi=E(E.bind),Ei=A,_i=Array.isArray||function(e){return"Array"==Ei(e)},Ni=E,Ri=h,Ai=X,zi=Oi,Fi=sn,Gi=function(){},Vi=[],Hi=te("Reflect","construct"),Bi=/^\s*(?:class|function)\b/,qi=Ni(Bi.exec),Wi=!Bi.exec(Gi),Zi=function(e){if(!Ai(e))return!1;try{return Hi(Gi,Vi,e),!0}catch(e){return!1}},Ui=function(e){if(!Ai(e))return!1;switch(zi(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Wi||!!qi(Bi,Fi(e))}catch(e){return!0}};Ui.sham=!0;var Ki=!Hi||Ri((function(){var e;return Zi(Zi.call)||!Zi(Object)||!Zi((function(){e=!0}))||e}))?Ui:Zi,Xi=v,Yi=_i,$i=Ki,Ji=$,Qi=ot("species"),eo=Xi.Array,to=function(e){var t;return Yi(e)&&(t=e.constructor,($i(t)&&(t===eo||Yi(t.prototype))||Ji(t)&&null===(t=t[Qi]))&&(t=void 0)),void 0===t?eo:t},no=function(e,t){return Ci(e),void 0===t?e:Ii?xi(e,t):function(){return e.apply(t,arguments)}},ro=B,io=Ge,oo=sr,ao=function(e,t){return new(to(e))(0===t?0:t)},so=E([].push),lo=function(e){var t=1==e,n=2==e,r=3==e,i=4==e,o=6==e,a=7==e,s=5==e||o;return function(l,c,u,f){for(var g,v,p=io(l),h=ro(p),b=no(c,u),d=oo(h),y=0,m=f||ao,L=t?m(l,d):n||a?m(l,0):void 0;d>y;y++)if((s||y in h)&&(v=b(g=h[y],y,p),e))if(t)L[y]=v;else if(v)switch(e){case 3:return!0;case 5:return g;case 6:return y;case 2:so(L,g)}else switch(e){case 4:return!1;case 7:so(L,g)}return o?-1:r||i?i:L}},co={forEach:lo(0),map:lo(1),filter:lo(2),some:lo(3),every:lo(4),find:lo(5),findIndex:lo(6),filterReject:lo(7)},uo=h,fo=co.forEach,go=v,vo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},po=Mi,ho=function(e,t){var n=[][e];return!!n&&uo((function(){n.call(null,t||function(){return 1},1)}))}("forEach")?[].forEach:function(e){return fo(this,e,arguments.length>1?arguments[1]:void 0)},bo=Jt,yo=function(e){if(e&&e.forEach!==ho)try{bo(e,"forEach",ho)}catch(t){e.forEach=ho}};for(var mo in vo)vo[mo]&&yo(go[mo]&&go[mo].prototype);function Lo(e,t){for(var n in t.prototype)e.prototype[n]=t.prototype[n]}function Oo(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0,e.preventDefault?e.preventDefault():e.returnValue=!1}function Do(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}yo(po);var wo=h,So=ce,jo=ot("species"),Po=co.map;Xr({target:"Array",proto:!0,forced:!function(e){return So>=51||!wo((function(){var t=[];return(t.constructor={})[jo]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}("map")},{map:function(e){return Po(this,e,arguments.length>1?arguments[1]:void 0)}});var ko=Oi,To=v.String,Mo=W,Co=function(e){if("Symbol"===ko(e))throw TypeError("Cannot convert a Symbol value to a string");return To(e)},Io=/"/g,xo=E("".replace),Eo=h,_o=function(e,t,n,r){var i=Co(Mo(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+xo(Co(r),Io,"&quot;")+'"'),o+">"+i+"</"+t+">"};Xr({target:"String",proto:!0,forced:function(e){return Eo((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}("anchor")},{anchor:function(e){return _o(this,"a","name",e)}});var No="block",Ro="none",Ao="absolute",zo="marker-label",Fo="marker-label-event",Go=function(e){i(o,e);var n=c(o);function o(e){var r,i=e.clickable,a=void 0===i||i,s=e.cursor,l=void 0===s?"pointer":s,c=e.draggable,u=void 0===c||c,f=e.labelAnchor,g=void 0===f?new google.maps.Point(0,0):f,v=e.labelClass,p=void 0===v?zo:v,h=e.labelContent,b=e.position,d=e.opacity,y=void 0===d?1:d,m=e.map,L=e.labelZIndexOffset,O=void 0===L?1:L,D=e.visible,w=void 0===D||D,S=e.zIndex,j=void 0===S?0:S;return t(this,o),(r=n.call(this)).createElements(),r.anchor=g,r.content=h,r.className=p,r.clickable=a,r.cursor=l,r.draggable=u,b instanceof google.maps.LatLng?r.position=b:r.position=new google.maps.LatLng(b),r.opacity=y,r.visible=w,r.zIndex=j,r.zIndexOffset=O,m&&r.setMap(m),r}return r(o,[{key:"element",get:function(){return this.labelDiv}},{key:"content",get:function(){return this.labelDiv.innerHTML},set:function(e){"string"==typeof e?(this.labelDiv.innerHTML=e,this.eventDiv.innerHTML=e):(this.labelDiv.innerHTML="",this.labelDiv.appendChild(e),this.eventDiv.innerHTML="",this.eventDiv.appendChild(e.cloneNode(!0)))}},{key:"className",get:function(){return this.labelDiv.className},set:function(e){this.labelDiv.className=e,this.labelDiv.classList.add(zo),this.eventDiv.className=e,this.eventDiv.classList.add(Fo)}},{key:"cursor",get:function(){return this.isInteractive?this.hoverCursor:"inherit"},set:function(e){this.hoverCursor=e,this.isInteractive&&(this.eventDiv.style.cursor=e)}},{key:"isInteractive",get:function(){return this.draggable||this.clickable}},{key:"opacity",set:function(e){this.labelDiv.style.opacity=String(e)}},{key:"title",set:function(e){this.eventDiv.title=e}},{key:"visible",set:function(e){e?(this.labelDiv.style.display=No,this.eventDiv.style.display=No):(this.labelDiv.style.display=Ro,this.eventDiv.style.display=Ro)}},{key:"onAdd",value:function(){this.getPanes().markerLayer.appendChild(this.labelDiv),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv)}},{key:"draw",value:function(){var e=this.getProjection().fromLatLngToDivPixel(this.position),t=Math.round(e.x+this.anchor.x),n=Math.round(e.y+this.anchor.y);this.labelDiv.style.left="".concat(t,"px"),this.labelDiv.style.top="".concat(n,"px"),this.eventDiv.style.left=this.labelDiv.style.left,this.eventDiv.style.top=this.labelDiv.style.top;var r=(this.zIndex||Math.ceil(e.y))+this.zIndexOffset;this.labelDiv.style.zIndex=String(r),this.eventDiv.style.zIndex=String(r),this.eventDiv.style.display=this.isInteractive?this.eventDiv.style.display:Ro,this.eventDiv.style.cursor=this.cursor}},{key:"addDomListener",value:function(e,t){return google.maps.event.addDomListener(this.eventDiv,e,t)}},{key:"onRemove",value:function(){this.labelDiv.parentNode.removeChild(this.labelDiv),this.eventDiv.parentNode.removeChild(this.eventDiv)}},{key:"createElements",value:function(){this.labelDiv=document.createElement("div"),this.eventDiv=document.createElement("div"),this.labelDiv.classList.add(zo),this.labelDiv.classList.add(Fo),this.labelDiv.style.position=Ao,this.eventDiv.style.position=Ao,this.eventDiv.style.opacity="0.01"}}]),o}(r((function e(){t(this,e),Lo(e,google.maps.OverlayView)}))),Vo="click",Ho="dblclick",Bo="drag",qo="dragend",Wo="dragstart",Zo="mousedown",Uo="mouseover",Ko="mouseout",Xo="mouseup",Yo=function(e){i(a,e);var n=c(a);function a(e){var r;return t(this,a),(r=n.call(this,function(e,t){var n=Object.assign({},e);return t.forEach((function(e){return delete n[e]})),n}(e,["labelAnchor","labelZIndexOffset","labelClass","labelContent"]))).isTouchScreen=!1,r.isDraggingLabel=!1,r.isMouseDownOnLabel=!1,r.shouldIgnoreClick=!1,r.label=new Go(Object.assign({},e)),r.propertyListeners=[google.maps.event.addListener(s(r),"clickable_changed",r.handleClickableOrDraggableChange),google.maps.event.addListener(s(r),"cursor_changed",(function(){r.label.cursor=r.getCursor()})),google.maps.event.addListener(s(r),"draggable_changed",r.handleClickableOrDraggableChange),google.maps.event.addListener(s(r),"position_changed",(function(){r.label.position=r.getPosition()})),google.maps.event.addListener(s(r),"opacity_changed",(function(){r.label.opacity=r.getOpacity()})),google.maps.event.addListener(s(r),"title_changed",(function(){r.label.title=r.getTitle()})),google.maps.event.addListener(s(r),"visible_changed",(function(){r.label.visible=r.getVisible()})),google.maps.event.addListener(s(r),"zindex_changed",(function(){r.label.zIndex=r.getZIndex(),r.label.draw()}))],r}return r(a,[{key:"isInteractive",get:function(){return this.getClickable()||this.getDraggable()}},{key:"labelElement",get:function(){return this.label.element}},{key:"labelContent",get:function(){return this.label.content},set:function(e){this.label.content=e}},{key:"labelClass",get:function(){return this.label.className},set:function(e){this.label.className=e}},{key:"setMap",value:function(e){var t=this;u(o(a.prototype),"setMap",this).call(this,e),setTimeout((function(){t.label.setMap(e),t.removeInteractiveListeners(),e&&t.addInteractiveListeners()}))}},{key:"handleClickableOrDraggableChange",value:function(){this.label.clickable=this.getClickable(),this.label.draggable=this.getDraggable(),this.isInteractive?this.addInteractiveListeners():this.removeInteractiveListeners()}},{key:"removeInteractiveListeners",value:function(){this.interactiveListeners&&(this.interactiveListeners.forEach((function(e){return google.maps.event.removeListener(e)})),this.interactiveListeners=null)}},{key:"addInteractiveListeners",value:function(){var e=this;if(!this.interactiveListeners){if(!this.getMap())return;this.interactiveListeners=[this.label.addDomListener(Uo,(function(t){e.isTouchScreen||(google.maps.event.trigger(e,Uo,{latLng:e.getPosition()}),Oo(t))})),this.label.addDomListener(Ko,(function(t){e.isTouchScreen||(e.mouseOutTimeout&&clearTimeout(e.mouseOutTimeout),e.isMouseDownOnLabel?e.mouseOutTimeout=setTimeout((function(){e.isMouseDownOnLabel&&(e.isMouseDownOnLabel=!1,google.maps.event.trigger(e,Xo,{latLng:e.getPosition()}),e.isDraggingLabel&&(e.isDraggingLabel=!1,e.shouldIgnoreClick=!0,google.maps.event.trigger(e,qo,{latLng:e.getPosition()}))),google.maps.event.trigger(e,Ko,{latLng:e.getPosition()})}),200):google.maps.event.trigger(e,Ko,{latLng:e.getPosition()}),Oo(t))})),this.label.addDomListener(Zo,(function(t){e.isDraggingLabel=!1,e.isMouseDownOnLabel=!0,google.maps.event.trigger(e,Zo,{latLng:e.getPosition()}),e.isTouchScreen||Oo(t)})),this.label.addDomListener(Xo,(function(t){var n={latLng:e.getPosition()};e.isMouseDownOnLabel&&(e.isMouseDownOnLabel=!1,google.maps.event.trigger(e,Xo,n),e.isDraggingLabel&&(e.isDraggingLabel=!1,e.shouldIgnoreClick=!0,google.maps.event.trigger(e,qo,n)),e.getDraggable()||Oo(t))})),this.label.addDomListener(Vo,(function(t){e.shouldIgnoreClick?e.shouldIgnoreClick=!1:google.maps.event.trigger(e,Vo,{latLng:e.getPosition()}),Oo(t)})),this.label.addDomListener(Ho,(function(t){google.maps.event.trigger(e,Ho,{latLng:e.getPosition()}),Oo(t)})),google.maps.event.addListener(this.getMap(),"mousemove",(function(t){if(e.isMouseDownOnLabel&&e.getDraggable())if(e.isDraggingLabel){var n=new google.maps.LatLng(t.latLng.lat()-e.eventOffset.y,t.latLng.lng()-e.eventOffset.x);google.maps.event.trigger(e,Bo,Object.assign(Object.assign({},t),{latLng:n}))}else e.isDraggingLabel=!0,e.eventOffset=new google.maps.Point(t.latLng.lng()-e.getPosition().lng(),t.latLng.lat()-e.getPosition().lat()),google.maps.event.trigger(e,Wo,Object.assign(Object.assign({},t),{latLng:e.getPosition()}))})),google.maps.event.addListener(this,Wo,(function(){e.label.zIndex=1e6})),google.maps.event.addListener(this,Bo,(function(t){var n=t.latLng;e.setPosition(n)})),google.maps.event.addListener(this,qo,(function(){e.label.zIndex=e.getZIndex(),e.label.draw()})),this.label.addDomListener("touchstart",(function(t){e.isTouchScreen=!0,Do(t)})),this.label.addDomListener("touchmove",(function(e){Do(e)})),this.label.addDomListener("touchend",(function(e){Do(e)}))]}}}]),a}(r((function e(n){t(this,e),Lo(e,google.maps.Marker),google.maps.Marker.call(this,n)})));e.MarkerWithLabel=Yo,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
