(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[99],{2117:function(e,r,t){e.exports=t(2118)},2118:function(e,r,t){var n=function(e){"use strict";var r=Object.prototype;var t=r.hasOwnProperty;var n;var o=typeof Symbol==="function"?Symbol:{};var i=o.iterator||"@@iterator";var a=o.asyncIterator||"@@asyncIterator";var u=o.toStringTag||"@@toStringTag";function c(e,r,t){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true});return e[r]}try{c({},"")}catch(e){c=function(e,r,t){return e[r]=t}}function f(e,r,t,n){var o=r&&r.prototype instanceof y?r:y;var i=Object.create(o.prototype);var a=new T(n||[]);i._invoke=O(e,t,a);return i}e.wrap=f;function s(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(e){return{type:"throw",arg:e}}}var l="suspendedStart";var h="suspendedYield";var v="executing";var p="completed";var d={};function y(){}function w(){}function g(){}var m={};c(m,i,(function(){return this}));var b=Object.getPrototypeOf;var E=b&&b(b(S([])));if(E&&E!==r&&t.call(E,i)){m=E}var x=g.prototype=y.prototype=Object.create(m);w.prototype=g;c(x,"constructor",g);c(g,"constructor",w);w.displayName=c(g,u,"GeneratorFunction");function L(e){["next","throw","return"].forEach((function(r){c(e,r,(function(e){return this._invoke(r,e)}))}))}e.isGeneratorFunction=function(e){var r=typeof e==="function"&&e.constructor;return r?r===w||(r.displayName||r.name)==="GeneratorFunction":false};e.mark=function(e){if(Object.setPrototypeOf){Object.setPrototypeOf(e,g)}else{e.__proto__=g;c(e,u,"GeneratorFunction")}e.prototype=Object.create(x);return e};e.awrap=function(e){return{__await:e}};function j(e,r){function n(o,i,a,u){var c=s(e[o],e,i);if(c.type==="throw"){u(c.arg)}else{var f=c.arg;var l=f.value;if(l&&typeof l==="object"&&t.call(l,"__await")){return r.resolve(l.__await).then((function(e){n("next",e,a,u)}),(function(e){n("throw",e,a,u)}))}return r.resolve(l).then((function(e){f.value=e;a(f)}),(function(e){return n("throw",e,a,u)}))}}var o;function i(e,t){function i(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}L(j.prototype);c(j.prototype,a,(function(){return this}));e.AsyncIterator=j;e.async=function(r,t,n,o,i){if(i===void 0)i=Promise;var a=new j(f(r,t,n,o),i);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))};function O(e,r,t){var n=l;return function o(i,a){if(n===v){throw new Error("Generator is already running")}if(n===p){if(i==="throw"){throw a}return N()}t.method=i;t.arg=a;while(true){var u=t.delegate;if(u){var c=k(u,t);if(c){if(c===d)continue;return c}}if(t.method==="next"){t.sent=t._sent=t.arg}else if(t.method==="throw"){if(n===l){n=p;throw t.arg}t.dispatchException(t.arg)}else if(t.method==="return"){t.abrupt("return",t.arg)}n=v;var f=s(e,r,t);if(f.type==="normal"){n=t.done?p:h;if(f.arg===d){continue}return{value:f.arg,done:t.done}}else if(f.type==="throw"){n=p;t.method="throw";t.arg=f.arg}}}}function k(e,r){var t=e.iterator[r.method];if(t===n){r.delegate=null;if(r.method==="throw"){if(e.iterator["return"]){r.method="return";r.arg=n;k(e,r);if(r.method==="throw"){return d}}r.method="throw";r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(t,e.iterator,r.arg);if(o.type==="throw"){r.method="throw";r.arg=o.arg;r.delegate=null;return d}var i=o.arg;if(!i){r.method="throw";r.arg=new TypeError("iterator result is not an object");r.delegate=null;return d}if(i.done){r[e.resultName]=i.value;r.next=e.nextLoc;if(r.method!=="return"){r.method="next";r.arg=n}}else{return i}r.delegate=null;return d}L(x);c(x,u,"Generator");c(x,i,(function(){return this}));c(x,"toString",(function(){return"[object Generator]"}));function _(e){var r={tryLoc:e[0]};if(1 in e){r.catchLoc=e[1]}if(2 in e){r.finallyLoc=e[2];r.afterLoc=e[3]}this.tryEntries.push(r)}function P(e){var r=e.completion||{};r.type="normal";delete r.arg;e.completion=r}function T(e){this.tryEntries=[{tryLoc:"root"}];e.forEach(_,this);this.reset(true)}e.keys=function(e){var r=[];for(var t in e){r.push(t)}r.reverse();return function t(){while(r.length){var n=r.pop();if(n in e){t.value=n;t.done=false;return t}}t.done=true;return t}};function S(e){if(e){var r=e[i];if(r){return r.call(e)}if(typeof e.next==="function"){return e}if(!isNaN(e.length)){var o=-1,a=function r(){while(++o<e.length){if(t.call(e,o)){r.value=e[o];r.done=false;return r}}r.value=n;r.done=true;return r};return a.next=a}}return{next:N}}e.values=S;function N(){return{value:n,done:true}}T.prototype={constructor:T,reset:function(e){this.prev=0;this.next=0;this.sent=this._sent=n;this.done=false;this.delegate=null;this.method="next";this.arg=n;this.tryEntries.forEach(P);if(!e){for(var r in this){if(r.charAt(0)==="t"&&t.call(this,r)&&!isNaN(+r.slice(1))){this[r]=n}}}},stop:function(){this.done=true;var e=this.tryEntries[0];var r=e.completion;if(r.type==="throw"){throw r.arg}return this.rval},dispatchException:function(e){if(this.done){throw e}var r=this;function o(t,o){u.type="throw";u.arg=e;r.next=t;if(o){r.method="next";r.arg=n}return!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];var u=a.completion;if(a.tryLoc==="root"){return o("end")}if(a.tryLoc<=this.prev){var c=t.call(a,"catchLoc");var f=t.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc){return o(a.catchLoc,true)}else if(this.prev<a.finallyLoc){return o(a.finallyLoc)}}else if(c){if(this.prev<a.catchLoc){return o(a.catchLoc,true)}}else if(f){if(this.prev<a.finallyLoc){return o(a.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function(e,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}if(i&&(e==="break"||e==="continue")&&i.tryLoc<=r&&r<=i.finallyLoc){i=null}var a=i?i.completion:{};a.type=e;a.arg=r;if(i){this.method="next";this.next=i.finallyLoc;return d}return this.complete(a)},complete:function(e,r){if(e.type==="throw"){throw e.arg}if(e.type==="break"||e.type==="continue"){this.next=e.arg}else if(e.type==="return"){this.rval=this.arg=e.arg;this.method="return";this.next="end"}else if(e.type==="normal"&&r){this.next=r}return d},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e){this.complete(t.completion,t.afterLoc);P(t);return d}}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if(n.type==="throw"){var o=n.arg;P(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){this.delegate={iterator:S(e),resultName:r,nextLoc:t};if(this.method==="next"){this.arg=n}return d}};return e}(true?e.exports:undefined);try{regeneratorRuntime=n}catch(e){if(typeof globalThis==="object"){globalThis.regeneratorRuntime=n}else{Function("r","regeneratorRuntime = r")(n)}}},3243:function(e,r,t){var n,o,i;(function(t,a){if(true){!(o=[],n=a,i=typeof n==="function"?n.apply(r,o):n,i!==undefined&&(e.exports=i))}else{}})(this,(function(){var e=function(){},r={},t={},n={};function o(e,r){e=e.push?e:[e];var o=[],i=e.length,a=i,u,c,f,s;u=function(e,t){if(t.length)o.push(e);a--;if(!a)r(o)};while(i--){c=e[i];f=t[c];if(f){u(c,f);continue}s=n[c]=n[c]||[];s.push(u)}}function i(e,r){if(!e)return;var o=n[e];t[e]=r;if(!o)return;while(o.length){o[0](e,r);o.splice(0,1)}}function a(r,t){if(r.call)r={success:r};if(t.length)(r.error||e)(t);else(r.success||e)(r)}function u(r,t,n,o){var i=document,a=n.async,c=(n.numRetries||0)+1,f=n.before||e,s=r.replace(/[\?|#].*$/,""),l=r.replace(/^(css|img)!/,""),h,v;o=o||0;if(/(^css!|\.css$)/.test(s)){v=i.createElement("link");v.rel="stylesheet";v.href=l;h="hideFocus"in v;if(h&&v.relList){h=0;v.rel="preload";v.as="style"}}else if(/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(s)){v=i.createElement("img");v.src=l}else{v=i.createElement("script");v.src=r;v.async=a===undefined?true:a}v.onload=v.onerror=v.onbeforeload=function(e){var i=e.type[0];if(h){try{if(!v.sheet.cssText.length)i="e"}catch(e){if(e.code!=18)i="e"}}if(i=="e"){o+=1;if(o<c){return u(r,t,n,o)}}else if(v.rel=="preload"&&v.as=="style"){return v.rel="stylesheet"}t(r,i,e.defaultPrevented)};if(f(r,v)!==false)i.head.appendChild(v)}function c(e,r,t){e=e.push?e:[e];var n=e.length,o=n,i=[],a,c;a=function(e,t,o){if(t=="e")i.push(e);if(t=="b"){if(o)i.push(e);else return}n--;if(!n)r(i)};for(c=0;c<o;c++)u(e[c],a,t)}function f(e,t,n){var o,u;if(t&&t.trim)o=t;u=(o?n:t)||{};if(o){if(o in r){throw"LoadJS"}else{r[o]=true}}function f(r,t){c(e,(function(e){a(u,e);if(r){a({success:r,error:t},e)}i(o,e)}),u)}if(u.returnPromise)return new Promise(f);else f()}f.ready=function e(r,t){o(r,(function(e){a(t,e)}));return f};f.done=function e(r){i(r,[])};f.reset=function e(){r={};t={};n={}};f.isDefined=function e(t){return t in r};return f}))},3359:function(e,r,t){"use strict";t.d(r,"a",(function(){return T}));var n=t(2117);var o=t.n(n);var i=t(0);var a=t.n(i);var u=t(3243);var c=t.n(u);function f(){f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}return e};return f.apply(this,arguments)}var s="https://platform.twitter.com/widgets.js";var l="twttr";var h=l;var v=!!(typeof window!=="undefined"&&window.document&&window.document.createElement);function p(){c()(s,h)}function d(){return new Promise((function(e,r){var t=function e(){return r(new Error("Could not load remote twitter widgets js"))};c.a.ready(h,{success:function r(){var n=window[l];if(!n||!n.widgets){t()}e(n.widgets)},error:t})}))}function y(e,r){if(e){e.querySelectorAll("*").forEach((function(e){if(e.hasAttribute(r)){e.remove()}}))}}function w(e,r){if(e===r){return e!==0||r!==0||1/e===1/r}else{return e!==e&&r!==r}}function g(e,r){if(w(e,r)){return true}if(typeof e!=="object"||e===null||typeof r!=="object"||r===null){return false}var t=Object.keys(e);var n=Object.keys(r);if(t.length!==n.length){return false}for(var o=0;o<t.length;o++){if(!Object.prototype.hasOwnProperty.call(r,t[o])||!w(e[t[o]],r[t[o]])){return false}}return true}function m(e){var r=Object(i["useRef"])();if(!g(e,r.current)){r.current=e}return r.current}function b(e){return typeof e==="object"?f({},e):e}function E(e,r,t,n,o,i,a){try{var u=e[i](a);var c=u.value}catch(e){t(e);return}if(u.done){r(c)}else{Promise.resolve(c).then(n,o)}}function x(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function a(e){E(i,n,o,a,u,"next",e)}function u(e){E(i,n,o,a,u,"throw",e)}a(undefined)}))}}if(v){p()}var L="twdiv";function j(e,r,t,n){var a=Object(i["useState"])(null),u=a[0],c=a[1];var f=Object(i["useRef"])(null);if(!v){return{ref:f,error:u}}var s=[e,m(r),m(t)];Object(i["useEffect"])((function(){c(null);var i=false;if(f.current){var a=function(){var a=x(o.a.mark((function a(){var u,s,l;return o.a.wrap((function o(a){while(1){switch(a.prev=a.next){case 0:if(!(!f||!f.current)){a.next=2;break}return a.abrupt("return");case 2:u=document.createElement("div");u.setAttribute(L,"yes");f.current.appendChild(u);a.prev=5;a.next=8;return d();case 8:s=a.sent;a.next=11;return s[e](b(r),u,b(t));case 11:l=a.sent;if(!(!l&&!i)){a.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or "+"Tweet, ensure the screenName/tweetId exists.");case 14:a.next=21;break;case 16:a.prev=16;a.t0=a["catch"](5);console.error(a.t0);c(a.t0);return a.abrupt("return");case 21:if(!(!f||!f.current)){a.next=23;break}return a.abrupt("return");case 23:if(!i){a.next=26;break}if(u){u.remove()}return a.abrupt("return");case 26:if(n){n()}case 27:case"end":return a.stop()}}}),a,null,[[5,16]])})));return function e(){return a.apply(this,arguments)}}();y(f.current,L);a()}return function(){i=true}}),s);return{ref:f,error:u}}var O=function e(r){var t=r.username,n=r.options,o=r.onLoad,i=r.renderError;var u=j("createFollowButton",t,n,o),c=u.ref,f=u.error;return a.a.createElement("div",{ref:c},f&&i&&i(f))};var k=function e(r){var t=r.hashtag,n=r.options,o=r.onLoad,i=r.renderError;var u=j("createHashtagButton",t,n,o),c=u.ref,f=u.error;return a.a.createElement("div",{ref:c},f&&i&&i(f))};var _=function e(r){var t=r.username,n=r.options,o=r.onLoad,i=r.renderError;var u=j("createMentionButton",t,n,o),c=u.ref,f=u.error;return a.a.createElement("div",{ref:c},f&&i&&i(f))};var P=function e(r){var t=r.url,n=r.options,o=r.onLoad,i=r.renderError;var u=j("createShareButton",t,n,o),c=u.ref,f=u.error;return a.a.createElement("div",{ref:c},f&&i&&i(f))};var T=function e(r){var t=r.dataSource,n=r.options,o=r.onLoad,i=r.renderError;var u=j("createTimeline",t,n,o),c=u.ref,f=u.error;return a.a.createElement("div",{ref:c},f&&i&&i(f))};var S=function e(r){var t=r.tweetId,n=r.options,o=r.onLoad,i=r.renderError;var u=j("createTweet",t,n,o),c=u.ref,f=u.error;return a.a.createElement("div",{ref:c},f&&i&&i(f))}}}]);