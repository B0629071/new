(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var c="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},g;if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var h;a:{var k={g:!0},l={};try{l.__proto__=k;h=l.g;break a}catch(a){}h=!1}g=h?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var m=g,n=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");},p=n(this);var q="abort canplay canplaythrough durationchange emptied ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");var r=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},t=function(a){if(r(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&r(a))return a;return null};var u=function(a,b,d){d=void 0===d?null:d;var f=document.createEvent("CustomEvent");f.initCustomEvent(a,!0,!0,d);b.dispatchEvent(f)};var v=Object.keys(HTMLMediaElement.prototype).concat(["sources"]),w=function(){var a=HTMLElement.call(this)||this;a.a=a.ownerDocument.createElement("audio");a.b=function(b){u(b.type,a,b.detail)};a.f=!1;a.c=!1;return a},x=HTMLElement;w.prototype=c(x.prototype);w.prototype.constructor=w;if(m)m(w,x);else for(var y in x)if("prototype"!=y)if(Object.defineProperties){var z=Object.getOwnPropertyDescriptor(x,y);z&&Object.defineProperty(w,y,z)}else w[y]=x[y];
w.prototype.connectedCallback=function(){if(!this.c){for(;this.firstChild;)this.removeChild(this.firstChild);var a=this.ownerDocument.createElement("div");a.classList.add("intermediate-element");a.appendChild(this.a);this.appendChild(a);this.c=!0}for(a=0;a<q.length;a++)this.a.addEventListener(q[a],this.b,!1);this.gwdIsLoaded()||((a=t(this))?a.gwdIsLoaded()&&this.gwdLoad():this.gwdLoad());this.autoplay&&this.paused&&this.play()};
w.prototype.disconnectedCallback=function(){for(var a=0;a<q.length;a++)this.a.removeEventListener(q[a],this.b,!1)};w.prototype.attributeChangedCallback=function(a){"sources"==a&&A(this);"muted"==a&&(this.a.muted=this.muted);var b=this.a;if(this.hasAttribute(a)){var d=this.getAttribute(a);b.setAttribute(a,d)}else b.removeAttribute(a)};w.prototype.gwdLoad=function(){A(this);this.f=!0;u("ready",this)};w.prototype.gwdIsLoaded=function(){return this.f};
var A=function(a){var b=a.getAttribute("sources");b=b?b.split(","):[];for(var d;d=a.a.firstChild;)a.a.removeChild(d);for(d=0;d<b.length;d++){var f=a.ownerDocument.createElement("source");var e=b[d];e=e.trim();e=window.Enabler?window.Enabler.getUrl(e):e;f.src=e;a.a.appendChild(f)}};w.prototype.mute=function(){this.muted=!this.muted};w.prototype.replay=function(){this.seek(0);this.play()};w.prototype.seek=function(a){this.currentTime!=a&&(this.currentTime=a)};w.prototype.play=function(){this.a.play()};
w.prototype.pause=function(){this.a.pause()};
p.Object.defineProperties(w.prototype,{nativeElement:{configurable:!0,enumerable:!0,get:function(){return this.a}},autoplay:{configurable:!0,enumerable:!0,get:function(){return this.a.autoplay},set:function(a){a?this.setAttribute("autoplay",""):this.removeAttribute("autoplay")}},controls:{configurable:!0,enumerable:!0,get:function(){return this.a.controls},set:function(a){a?this.setAttribute("controls",""):this.removeAttribute("controls")}},currentTime:{configurable:!0,enumerable:!0,get:function(){return this.a.currentTime},
set:function(a){this.a.currentTime=a}},duration:{configurable:!0,enumerable:!0,get:function(){return this.a.duration}},loop:{configurable:!0,enumerable:!0,get:function(){return this.a.loop},set:function(a){a?this.setAttribute("loop",""):this.removeAttribute("loop")}},muted:{configurable:!0,enumerable:!0,get:function(){return this.hasAttribute("muted")},set:function(a){a?this.setAttribute("muted",""):this.removeAttribute("muted")}},paused:{configurable:!0,enumerable:!0,get:function(){return this.a.paused}},
volume:{configurable:!0,enumerable:!0,get:function(){return this.a.volume},set:function(a){this.a.volume=a}}});p.Object.defineProperties(w,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return v}}});customElements.define("gwd-audio",w);}).call(this);
