(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[143],{1425:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){__webpack_require__.d(__webpack_exports__,"default",(function(){return NewslaterCampaign}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var Components_Charts_StackedLineChart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3264);function _typeof(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function e(t){return typeof t}}else{_typeof=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return _typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);return e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return _setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function r(){var o=_getPrototypeOf(e),n;if(t){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,a)}else{n=o.apply(this,arguments)}return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var NewslaterCampaign=function(_Component){_inherits(NewslaterCampaign,_Component);var _super=_createSuper(NewslaterCampaign);function NewslaterCampaign(){_classCallCheck(this,NewslaterCampaign);return _super.apply(this,arguments)}_createClass(NewslaterCampaign,[{key:"render",value:function e(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Charts_StackedLineChart__WEBPACK_IMPORTED_MODULE_1__["a"],null))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return NewslaterCampaign}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(NewslaterCampaign,"NewslaterCampaign","D:\\front\\bloomtech-front\\src\\components\\Widgets\\NewslaterCampaign.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(7)(module))},3264:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(355);var react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29);var Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(176);var Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(66);function _typeof(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function e(t){return typeof t}}else{_typeof=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return _typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);return e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return _setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function r(){var o=_getPrototypeOf(e),n;if(t){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,a)}else{n=o.apply(this,arguments)}return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var options={legend:{display:true},scales:{x:{display:true},y:{grid:{display:false},display:true}}};var StackedLineChart=function(_Component){_inherits(StackedLineChart,_Component);var _super=_createSuper(StackedLineChart);function StackedLineChart(){_classCallCheck(this,StackedLineChart);return _super.apply(this,arguments)}_createClass(StackedLineChart,[{key:"render",value:function e(){var t=this.props.darkMode;var r=function e(r){var o=r.getContext("2d");var n=o.createLinearGradient(0,0,0,350);var a=o.createLinearGradient(0,0,0,325);n.addColorStop(0,Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["d"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["a"].color.info,1));n.addColorStop(1,t?"#2c3644":"#FFFFFF");a.addColorStop(0,Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["d"])(Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["a"].color.primary,1));a.addColorStop(1,t?"#000000":"#FFFFFF");return{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Campaign 1",fill:"start",lineTension:0,backgroundColor:n,borderColor:Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["a"].color.info,borderWidth:3,pointBorderWidth:0,pointRadius:0,data:[50,45,22,18,25,5,35,20,45,22,30,70,40]},{label:"Campaign 2",lineTension:0,fill:"start",backgroundColor:a,borderColor:Constants_chart_config__WEBPACK_IMPORTED_MODULE_3__["a"].color.primary,borderWidth:3,pointBorderWidth:0,pointRadius:0,data:[40,30,60,30,35,50,10,30,25,28,55,65,80]}]}};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["d"],{data:r,options,height:200})}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return StackedLineChart}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);var mapStateToProps=function e(t){var r=t.settings;var o=r.darkMode;return{darkMode:o}};var _default=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["b"])(mapStateToProps)(StackedLineChart);__webpack_exports__["a"]=_default;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(options,"options","D:\\front\\bloomtech-front\\src\\components\\Charts\\StackedLineChart.js");e.register(StackedLineChart,"StackedLineChart","D:\\front\\bloomtech-front\\src\\components\\Charts\\StackedLineChart.js");e.register(mapStateToProps,"mapStateToProps","D:\\front\\bloomtech-front\\src\\components\\Charts\\StackedLineChart.js");e.register(_default,"default","D:\\front\\bloomtech-front\\src\\components\\Charts\\StackedLineChart.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(7)(module))}}]);