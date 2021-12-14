(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{1317:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){__webpack_require__.d(__webpack_exports__,"default",(function(){return SnackbarComponent}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46);var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1759);var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(124);var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1718);var _component_PositionSnackbar__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3177);var _component_DirectionSnackbar__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3178);var _component_FadeSnackbar__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3179);var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(175);var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(13);var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(68);function _typeof(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function e(t){return typeof t}}else{_typeof=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return _typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);return e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return _setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function r(){var n=_getPrototypeOf(e),a;if(t){var _=_getPrototypeOf(this).constructor;a=Reflect.construct(n,arguments,_)}else{a=n.apply(this,arguments)}return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var SnackbarComponent=function(_React$Component){_inherits(SnackbarComponent,_React$Component);var _super=_createSuper(SnackbarComponent);function SnackbarComponent(){var e;_classCallCheck(this,SnackbarComponent);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}e=_super.call.apply(_super,[this].concat(r));e.state={open:false};e.handleClick=function(){e.setState({open:true})};e.handleClose=function(t,r){if(r==="clickaway"){return}e.setState({open:false})};return e}_createClass(SnackbarComponent,[{key:"render",value:function e(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"snackbar-wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_8__["a"],{title:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["a"],{id:"sidebar.snackbar"}),match:this.props.match}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_10__["a"],{colClasses:"col-sm-12 col-md-12 col-xl-6",heading:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["a"],{id:"widgets.transitionControlDirection"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_DirectionSnackbar__WEBPACK_IMPORTED_MODULE_6__["a"],null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_10__["a"],{colClasses:"col-sm-12 col-md-12 col-xl-6",heading:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["a"],{id:"widgets.simpleSnackbar"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",color:"primary",className:"text-white mr-10 mb-10 d-inline-block",onClick:this.handleClick},"simple snackbar"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__["a"],{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,message:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{id:"message-id"},"Note archived"),action:[react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",key:"undo",className:"btn-danger btn-sm text-white",dense:"true",onClick:this.handleClose}," UNDO "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["a"],{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleClose},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-close"}))]}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_FadeSnackbar__WEBPACK_IMPORTED_MODULE_7__["a"],null))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_10__["a"],{heading:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["a"],{id:"widgets.positionedSnackbar"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_PositionSnackbar__WEBPACK_IMPORTED_MODULE_5__["a"],null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_10__["a"],{heading:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["a"],{id:"widgets.contexualColoredSnackbars"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-sm-12 col-md-12 col-xl-6"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__["a"],{className:"bg-primary mb-15",message:"I Love Bloomtech Admin Theme."}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__["a"],{className:"bg-success mb-15",message:"I Love Bloomtech Admin Theme."}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__["a"],{className:"bg-danger mb-15",message:"I Love Bloomtech Admin Theme."})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-sm-12 col-md-12 col-xl-6"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__["a"],{className:"bg-warning mb-15",message:"I Love Bloomtech Admin Theme."}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__["a"],{className:"bg-secondary mb-15",message:"I Love Bloomtech Admin Theme."}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__["a"],{className:"bg-info mb-15",message:"I Love Bloomtech Admin Theme."})))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return SnackbarComponent}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(SnackbarComponent,"SnackbarComponent","D:\\front\\bloomtech-front\\src\\routes\\components\\snackbar\\index.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(7)(module))},1718:function(e,t,r){"use strict";var n=r(19);var a=r(48);var _=r(4);var o=r(0);var i=r.n(o);var c=r(1);var l=r.n(c);var u=r(20);var s=r(25);var f=r(594);var d=r(32);var p=function e(t){var r=t.palette.type==="light"?.8:.98;var n=Object(d["d"])(t.palette.background.default,r);return{root:Object(_["a"])({},t.typography.body2,Object(a["a"])({color:t.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:t.shape.borderRadius,flexGrow:1},t.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}};var E=o["forwardRef"]((function e(t,r){var a=t.action,i=t.classes,c=t.className,l=t.message,s=t.role,d=s===void 0?"alert":s,p=Object(n["a"])(t,["action","classes","className","message","role"]);return o["createElement"](f["a"],Object(_["a"])({role:d,square:true,elevation:6,className:Object(u["default"])(i.root,c),ref:r},p),o["createElement"]("div",{className:i.message},l),a?o["createElement"]("div",{className:i.action},a):null)}));false?undefined:void 0;t["a"]=Object(s["a"])(p,{name:"MuiSnackbarContent"})(E)},1759:function(e,t,r){"use strict";var n=r(19);var a=r(48);var _=r(4);var o=r(0);var i=r(1);var c=r(20);var l=r(25);var u=r(77);var s=r(35);var f=r(98);var d=r(39);var p=r(87);function E(e){return e.substring(2).toLowerCase()}function b(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}function m(e){var t=e.children,r=e.disableReactTree,n=r===void 0?false:r,a=e.mouseEvent,_=a===void 0?"onClick":a,i=e.onClickAway,c=e.touchEvent,l=c===void 0?"onTouchEnd":c;var u=o["useRef"](false);var m=o["useRef"](null);var O=o["useRef"](false);var P=o["useRef"](false);o["useEffect"]((function(){setTimeout((function(){O.current=true}),0);return function(){O.current=false}}),[]);var D=o["useCallback"]((function(e){m.current=s["findDOMNode"](e)}),[]);var v=Object(d["a"])(t.ref,D);var C=Object(p["a"])((function(e){var t=P.current;P.current=false;if(!O.current||!m.current||b(e)){return}if(u.current){u.current=false;return}var r;if(e.composedPath){r=e.composedPath().indexOf(m.current)>-1}else{var a=Object(f["a"])(m.current);r=!a.documentElement.contains(e.target)||m.current.contains(e.target)}if(!r&&(n||!t)){i(e)}}));var y=function e(r){return function(e){P.current=true;var n=t.props[r];if(n){n(e)}}};var M={ref:v};if(l!==false){M[l]=y(l)}o["useEffect"]((function(){if(l!==false){var e=E(l);var t=Object(f["a"])(m.current);var r=function e(){u.current=true};t.addEventListener(e,C);t.addEventListener("touchmove",r);return function(){t.removeEventListener(e,C);t.removeEventListener("touchmove",r)}}return undefined}),[C,l]);if(_!==false){M[_]=y(_)}o["useEffect"]((function(){if(_!==false){var e=E(_);var t=Object(f["a"])(m.current);t.addEventListener(e,C);return function(){t.removeEventListener(e,C)}}return undefined}),[C,_]);return o["createElement"](o["Fragment"],null,o["cloneElement"](t,M))}false?undefined:void 0;if(false){}var O=m;var P=r(27);var D=r(127);var v=r(1239);var C=r(1718);var y=function e(t){var r={top:8};var n={bottom:8};var o={justifyContent:"flex-end"};var i={justifyContent:"flex-start"};var c={top:24};var l={bottom:24};var u={right:24};var s={left:24};var f={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:t.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(_["a"])({},r,Object(a["a"])({},t.breakpoints.up("sm"),Object(_["a"])({},c,f))),anchorOriginBottomCenter:Object(_["a"])({},n,Object(a["a"])({},t.breakpoints.up("sm"),Object(_["a"])({},l,f))),anchorOriginTopRight:Object(_["a"])({},r,o,Object(a["a"])({},t.breakpoints.up("sm"),Object(_["a"])({left:"auto"},c,u))),anchorOriginBottomRight:Object(_["a"])({},n,o,Object(a["a"])({},t.breakpoints.up("sm"),Object(_["a"])({left:"auto"},l,u))),anchorOriginTopLeft:Object(_["a"])({},r,i,Object(a["a"])({},t.breakpoints.up("sm"),Object(_["a"])({right:"auto"},c,s))),anchorOriginBottomLeft:Object(_["a"])({},n,i,Object(a["a"])({},t.breakpoints.up("sm"),Object(_["a"])({right:"auto"},l,s)))}};var M=o["forwardRef"]((function e(t,r){var a=t.action,i=t.anchorOrigin;i=i===void 0?{vertical:"bottom",horizontal:"center"}:i;var l=i.vertical,s=i.horizontal,f=t.autoHideDuration,d=f===void 0?null:f,E=t.children,b=t.classes,m=t.className,y=t.ClickAwayListenerProps,M=t.ContentProps,h=t.disableWindowBlurListener,k=h===void 0?false:h,R=t.message,L=t.onClose,T=t.onEnter,g=t.onEntered,B=t.onEntering,w=t.onExit,I=t.onExited,A=t.onExiting,U=t.onMouseEnter,W=t.onMouseLeave,K=t.open,S=t.resumeHideDuration,j=t.TransitionComponent,x=j===void 0?v["a"]:j,N=t.transitionDuration,H=N===void 0?{enter:u["b"].enteringScreen,exit:u["b"].leavingScreen}:N,q=t.TransitionProps,G=Object(n["a"])(t,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]);var z=o["useRef"]();var F=o["useState"](true),$=F[0],J=F[1];var X=Object(p["a"])((function(){if(L){L.apply(void 0,arguments)}}));var Y=Object(p["a"])((function(e){if(!L||e==null){return}clearTimeout(z.current);z.current=setTimeout((function(){X(null,"timeout")}),e)}));o["useEffect"]((function(){if(K){Y(d)}return function(){clearTimeout(z.current)}}),[K,d,Y]);var Q=function e(){clearTimeout(z.current)};var V=o["useCallback"]((function(){if(d!=null){Y(S!=null?S:d*.5)}}),[d,S,Y]);var Z=function e(t){if(U){U(t)}Q()};var ee=function e(t){if(W){W(t)}V()};var te=function e(t){if(L){L(t,"clickaway")}};var re=function e(){J(true)};var ne=function e(){J(false)};o["useEffect"]((function(){if(!k&&K){window.addEventListener("focus",V);window.addEventListener("blur",Q);return function(){window.removeEventListener("focus",V);window.removeEventListener("blur",Q)}}return undefined}),[k,V,K]);if(!K&&$){return null}return o["createElement"](O,Object(_["a"])({onClickAway:te},y),o["createElement"]("div",Object(_["a"])({className:Object(c["default"])(b.root,b["anchorOrigin".concat(Object(P["a"])(l)).concat(Object(P["a"])(s))],m),onMouseEnter:Z,onMouseLeave:ee,ref:r},G),o["createElement"](x,Object(_["a"])({appear:true,in:K,onEnter:Object(D["a"])(ne,T),onEntered:g,onEntering:B,onExit:w,onExited:Object(D["a"])(re,I),onExiting:A,timeout:H,direction:l==="top"?"down":"up"},q),E||o["createElement"](C["a"],Object(_["a"])({message:R,action:a},M)))))}));false?undefined:void 0;var h=t["a"]=Object(l["a"])(y,{flip:false,name:"MuiSnackbar"})(M)},3177:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46);var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1759);function _typeof(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function e(t){return typeof t}}else{_typeof=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return _typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t){n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))}r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){ownKeys(Object(r),true).forEach((function(t){_defineProperty(e,t,r[t])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}return e}function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);return e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return _setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function r(){var n=_getPrototypeOf(e),a;if(t){var _=_getPrototypeOf(this).constructor;a=Reflect.construct(n,arguments,_)}else{a=n.apply(this,arguments)}return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var PositionedSnackbar=function(_React$Component){_inherits(PositionedSnackbar,_React$Component);var _super=_createSuper(PositionedSnackbar);function PositionedSnackbar(){var e;_classCallCheck(this,PositionedSnackbar);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}e=_super.call.apply(_super,[this].concat(r));e.state={open:false,vertical:"top",horizontal:"center"};e.handleClick=function(t){return function(){e.setState(_objectSpread({open:true},t))}};e.handleClose=function(){e.setState({open:false})};return e}_createClass(PositionedSnackbar,[{key:"render",value:function e(){var t=this.state,r=t.vertical,n=t.horizontal,a=t.open;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",className:"mr-15 mb-10 btn-primary text-white",onClick:this.handleClick({vertical:"top",horizontal:"center"})},"Top-Center"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",className:"mr-15 mb-10 btn-danger text-white",onClick:this.handleClick({vertical:"top",horizontal:"right"})},"Top-Right"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",className:"mr-15 mb-10 btn-success text-white",onClick:this.handleClick({vertical:"bottom",horizontal:"right"})},"Bottom-Right"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",className:"mr-15 mb-10 btn-warning text-white",onClick:this.handleClick({vertical:"bottom",horizontal:"center"})},"Bottom-Center"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",className:"mr-15 mb-10 btn-info text-white",onClick:this.handleClick({vertical:"bottom",horizontal:"left"})},"Bottom-Left"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",className:"mr-15 mb-10 btn-secondary text-white",onClick:this.handleClick({vertical:"top",horizontal:"left"})},"Top-Left"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__["a"],{anchorOrigin:{vertical:r,horizontal:n},open:a,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{id:"message-id"},"I love snacks")}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return PositionedSnackbar}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);var _default=PositionedSnackbar;__webpack_exports__["a"]=_default;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(PositionedSnackbar,"PositionedSnackbar","D:\\front\\bloomtech-front\\src\\routes\\components\\snackbar\\component\\PositionSnackbar.js");e.register(_default,"default","D:\\front\\bloomtech-front\\src\\routes\\components\\snackbar\\component\\PositionSnackbar.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(7)(module))},3178:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46);var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1759);var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1215);function _typeof(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function e(t){return typeof t}}else{_typeof=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return _typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);return e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return _setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function r(){var n=_getPrototypeOf(e),a;if(t){var _=_getPrototypeOf(this).constructor;a=Reflect.construct(n,arguments,_)}else{a=n.apply(this,arguments)}return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}function _extends(){_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};return _extends.apply(this,arguments)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};function TransitionLeft(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__["a"],_extends({direction:"left"},e))}function TransitionUp(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__["a"],_extends({direction:"up"},e))}function TransitionRight(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__["a"],_extends({direction:"right"},e))}function TransitionDown(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__["a"],_extends({direction:"down"},e))}var DirectionSnackbar=function(_React$Component){_inherits(DirectionSnackbar,_React$Component);var _super=_createSuper(DirectionSnackbar);function DirectionSnackbar(){var e;_classCallCheck(this,DirectionSnackbar);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}e=_super.call.apply(_super,[this].concat(r));e.state={open:false};e.handleClick=function(t){return function(){e.setState({open:true})}};e.handleClose=function(){e.setState({open:false})};return e}_createClass(DirectionSnackbar,[{key:"render",value:function e(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",className:"btn-info text-white mr-15 mb-10",onClick:this.handleClick(TransitionLeft)},"Right"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",className:"btn-warning text-white mr-15 mb-10",onClick:this.handleClick(TransitionUp)},"Up"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",className:"btn-danger text-white mr-15 mb-10",onClick:this.handleClick(TransitionRight)},"Left"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained",color:"primary",className:"text-white mr-15 mb-10",onClick:this.handleClick(TransitionDown)},"Down"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__["a"],{open:this.state.open,onClose:this.handleClose,message:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{id:"message-id"},"I love snacks")}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return DirectionSnackbar}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);var _default=DirectionSnackbar;__webpack_exports__["a"]=_default;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(TransitionLeft,"TransitionLeft","D:\\front\\bloomtech-front\\src\\routes\\components\\snackbar\\component\\DirectionSnackbar.js");e.register(TransitionUp,"TransitionUp","D:\\front\\bloomtech-front\\src\\routes\\components\\snackbar\\component\\DirectionSnackbar.js");e.register(TransitionRight,"TransitionRight","D:\\front\\bloomtech-front\\src\\routes\\components\\snackbar\\component\\DirectionSnackbar.js");e.register(TransitionDown,"TransitionDown","D:\\front\\bloomtech-front\\src\\routes\\components\\snackbar\\component\\DirectionSnackbar.js");e.register(DirectionSnackbar,"DirectionSnackbar","D:\\front\\bloomtech-front\\src\\routes\\components\\snackbar\\component\\DirectionSnackbar.js");e.register(_default,"default","D:\\front\\bloomtech-front\\src\\routes\\components\\snackbar\\component\\DirectionSnackbar.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(7)(module))},3179:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return FadeSnackbar}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46);var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1759);function _typeof(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function e(t){return typeof t}}else{_typeof=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return _typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);return e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return _setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function r(){var n=_getPrototypeOf(e),a;if(t){var _=_getPrototypeOf(this).constructor;a=Reflect.construct(n,arguments,_)}else{a=n.apply(this,arguments)}return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var FadeSnackbar=function(_React$Component){_inherits(FadeSnackbar,_React$Component);var _super=_createSuper(FadeSnackbar);function FadeSnackbar(){var e;_classCallCheck(this,FadeSnackbar);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}e=_super.call.apply(_super,[this].concat(r));e.state={open:false};e.handleClick=function(){e.setState({open:true})};e.handleClose=function(){e.setState({open:false})};return e}_createClass(FadeSnackbar,[{key:"render",value:function e(){var t;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-inline-block"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],(t={variant:"contained",color:"primary"},_defineProperty(t,"color","primary"),_defineProperty(t,"className","text-white mb-10"),_defineProperty(t,"onClick",this.handleClick),t),"Open with Fade Transition"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__["a"],{open:this.state.open,onClose:this.handleClose,message:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{id:"message-id"},"I love snacks")}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return FadeSnackbar}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(FadeSnackbar,"FadeSnackbar","D:\\front\\bloomtech-front\\src\\routes\\components\\snackbar\\component\\FadeSnackbar.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(7)(module))}}]);