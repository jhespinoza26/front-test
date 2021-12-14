(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[79],{1362:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){__webpack_require__.d(__webpack_exports__,"default",(function(){return ProjectTaskManagement}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(124);var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(46);var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(97);var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(104);var reactstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(172);var reactstrap__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1214);var reactstrap__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(38);var reactstrap__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(47);var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1226);var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(63);var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_10__);var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1550);var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(144);var Routes_widgets_data__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1766);var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(357);var Components_RctCard__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(233);var Helpers_helpers__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(66);var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(13);function _typeof(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function e(a){return typeof a}}else{_typeof=function e(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a}}return _typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function ownKeys(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);if(a){r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))}t.push.apply(t,r)}return t}function _objectSpread(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};if(a%2){ownKeys(Object(t),true).forEach((function(a){_defineProperty(e,a,t[a])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}else{ownKeys(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}}return e}function _defineProperty(e,a,t){if(a in e){Object.defineProperty(e,a,{value:t,enumerable:true,configurable:true,writable:true})}else{e[a]=t}return e}function _classCallCheck(e,a){if(!(e instanceof a)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function _createClass(e,a,t){if(a)_defineProperties(e.prototype,a);if(t)_defineProperties(e,t);return e}function _inherits(e,a){if(typeof a!=="function"&&a!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:true,configurable:true}});if(a)_setPrototypeOf(e,a)}function _setPrototypeOf(e,a){_setPrototypeOf=Object.setPrototypeOf||function e(a,t){a.__proto__=t;return a};return _setPrototypeOf(e,a)}function _createSuper(e){var a=_isNativeReflectConstruct();return function t(){var r=_getPrototypeOf(e),o;if(a){var _=_getPrototypeOf(this).constructor;o=Reflect.construct(r,arguments,_)}else{o=r.apply(this,arguments)}return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(e,a){if(a&&(_typeof(a)==="object"||typeof a==="function")){return a}else if(a!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function e(a){return a.__proto__||Object.getPrototypeOf(a)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var ProjectTaskManagement=function(_Component){_inherits(ProjectTaskManagement,_Component);var _super=_createSuper(ProjectTaskManagement);function ProjectTaskManagement(e){var a;_classCallCheck(this,ProjectTaskManagement);a=_super.call(this,e);a.state={sectionReload:false,projectTaskData:Routes_widgets_data__WEBPACK_IMPORTED_MODULE_13__["g"],projectData:Routes_widgets_data__WEBPACK_IMPORTED_MODULE_13__["g"],collapse:false,selectedProject:null,newTask:{taskTitle:"",taskDate:null,status:"",color:"",completed:false,team:null}};return a}_createClass(ProjectTaskManagement,[{key:"closeForm",value:function e(a){this.setState({selectedProject:a,collapse:false})}},{key:"openForm",value:function e(a){this.setState({selectedProject:a,collapse:true})}},{key:"onChangeDueDate",value:function e(a){var t=Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_16__["a"])(a.target.value);this.setState({newTask:_objectSpread(_objectSpread({},this.state.newTask),{},{taskDate:t})})}},{key:"addNewTask",value:function e(a){var t=this;var r=this.state.newTask,o=r.taskTitle,_=r.taskDate;if(o!==""&&_){var n={title:o,date:_,status:"Planning",color:"primary",team:[{id:1,name:"Lucile",avatar:"https://reactify.theironnetwork.org/data/images/user-1.jpg"}]};this.setState({sectionReload:true,collapse:false});var l=this;setTimeout((function(){var e=t.state.projectData;e[a].push(n);l.setState({projectData:e,collapse:false,sectionReload:false,newTask:{taskTitle:"",taskDate:null}})}),1500)}}},{key:"render",value:function e(){var a=this;var t=this.state,r=t.projectData,o=t.collapse,_=t.selectedProject;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"task-management-wrapper"},this.state.sectionReload&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_14__["a"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_10__["Scrollbars"],{className:"rct-scroll",autoHeight:true,autoHeightMin:100,autoHeightMax:600,autoHide:true},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"mb-0"},Object.keys(r).map((function(e,t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:t},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"project-heading d-flex justify-content-between align-items-center border-bottom"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{className:"fw-semi-bold mb-0"},e),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["a"],{onClick:function t(){return a.openForm(e)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"material-icons"},"add_circle"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["a"],{className:"p-0"},r&&r[e].map((function(e,a){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["a"],{button:true,className:"justify-content-between align-items-center border-bottom post-item",key:a},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"task-title pr-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{className:"mb-5"},e.title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"fs-12 text-base"},Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_16__["c"])(e.date,"DD MMM YYYY"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-40 d-flex justify-content-between"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["a"],{color:e.color},e.status)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"team-avatar"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"m-0 list-inline"},e.team.map((function(e,a){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"list-inline-item",key:a},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12__["a"],{id:"tooltip-top",title:e.name,placement:"top"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["a"],{src:e.avatar,alt:"avatar",className:"rounded-circle"})))}))))))}))),_===e&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["a"],{isOpen:o},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex p-4 form-wrap border-bottom justify-content-between"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"mr-10"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["a"],{id:"taskName",onChange:function e(t){return a.setState({newTask:_objectSpread(_objectSpread({},a.state.newTask),{},{taskTitle:t.target.value})})},value:a.state.newTask.taskTitle,label:"Task Name",type:"text",fullWidth:true,className:"mx-5 mb-30"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["a"],{id:"date",label:"Due Date",type:"date",InputLabelProps:{shrink:true},fullWidth:true,onChange:function e(t){return a.onChangeDueDate(t)},className:"mx-5"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"align-self-end d-flex flex-column text-center"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["a"],{variant:"contained",color:"primary",className:"mb-30 text-white  btn-xs",onClick:function t(){return a.addNewTask(e)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["a"],{id:"button.add"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["a"],{variant:"contained",onClick:function t(){return a.closeForm(e)},className:"btn-xs btn-danger text-white"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["a"],{id:"button.cancel"})))))))})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_15__["c"],{customClasses:" d-flex justify-content-between align-items-center"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex w-40 align-items-center justify-content-between"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"fs-12 w-50 text-base"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["a"],{id:"widgets.selectProject"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"app-selectbox-sm"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["a"],{className:"mb-0"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["a"],{type:"select",className:"fs-12",name:"select",id:"projectSelect"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{disabled:true},"Select Project"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:"all"},"all"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:"BookingKoala"},"BookingKoala"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:"Reactify"},"Reactify"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:"Adminify"},"Adminify"))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"fs-12 text-base"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"mr-15 zmdi zmdi-refresh"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["a"],{id:"widgets.updated10Minago"}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return ProjectTaskManagement}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(ProjectTaskManagement,"ProjectTaskManagement","D:\\front\\bloomtech-front\\src\\components\\Widgets\\ProjectTaskManagement.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(7)(module))},1550:function(e,a,t){"use strict";var r=t(4);var o=t(19);var _=t(0);var n=t.n(_);var l=t(1);var i=t.n(l);var s=t(20);var c=t(2204);var d=t(3384);var u=t(3439);var f=t(2205);var p=t(2020);var m=t(2596);var E=t(2424);var b=t(25);var g={standard:c["a"],filled:d["a"],outlined:u["a"]};var P={root:{}};var D=_["forwardRef"]((function e(a,t){var n=a.autoComplete,l=a.autoFocus,i=l===void 0?false:l,c=a.children,d=a.classes,u=a.className,b=a.color,P=b===void 0?"primary":b,D=a.defaultValue,M=a.disabled,O=M===void 0?false:M,v=a.error,h=v===void 0?false:v,C=a.FormHelperTextProps,y=a.fullWidth,L=y===void 0?false:y,w=a.helperText,T=a.hiddenLabel,B=a.id,R=a.InputLabelProps,k=a.inputProps,A=a.InputProps,j=a.inputRef,I=a.label,W=a.multiline,U=W===void 0?false:W,K=a.name,S=a.onBlur,N=a.onChange,x=a.onFocus,H=a.placeholder,J=a.required,F=J===void 0?false:J,q=a.rows,G=a.rowsMax,V=a.maxRows,Y=a.minRows,z=a.select,$=z===void 0?false:z,Q=a.SelectProps,X=a.type,Z=a.value,ee=a.variant,ae=ee===void 0?"standard":ee,te=Object(o["a"])(a,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]);if(false){}var re={};if(ae==="outlined"){if(R&&typeof R.shrink!=="undefined"){re.notched=R.shrink}if(I){var oe;var _e=(oe=R===null||R===void 0?void 0:R.required)!==null&&oe!==void 0?oe:F;re.label=_["createElement"](_["Fragment"],null,I,_e&&" *")}}if($){if(!Q||!Q.native){re.id=undefined}re["aria-describedby"]=undefined}var ne=w&&B?"".concat(B,"-helper-text"):undefined;var le=I&&B?"".concat(B,"-label"):undefined;var ie=g[ae];var se=_["createElement"](ie,Object(r["a"])({"aria-describedby":ne,autoComplete:n,autoFocus:i,defaultValue:D,fullWidth:L,multiline:U,name:K,rows:q,rowsMax:G,maxRows:V,minRows:Y,type:X,value:Z,id:B,inputRef:j,onBlur:S,onChange:N,onFocus:x,placeholder:H,inputProps:k},re,A));return _["createElement"](p["a"],Object(r["a"])({className:Object(s["default"])(d.root,u),disabled:O,error:h,fullWidth:L,hiddenLabel:T,ref:t,required:F,color:P,variant:ae},te),I&&_["createElement"](f["a"],Object(r["a"])({htmlFor:B,id:le},R),I),$?_["createElement"](E["a"],Object(r["a"])({"aria-describedby":ne,id:B,labelId:le,value:Z,input:se},Q),c):se,w&&_["createElement"](m["a"],Object(r["a"])({id:ne},C),w))}));false?undefined:void 0;a["a"]=Object(b["a"])(P,{name:"MuiTextField"})(D)},1639:function(e,a,t){e.exports=t.p+"static/media/device-1.d4bbc33d.jpg"},1640:function(e,a,t){e.exports=t.p+"static/media/device-2.1d97b4da.jpg"},1641:function(e,a,t){e.exports=t.p+"static/media/device-3.103e009f.jpg"},1766:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return n}));t.d(a,"i",(function(){return l}));t.d(a,"m",(function(){return i}));t.d(a,"h",(function(){return c}));t.d(a,"c",(function(){return p}));t.d(a,"b",(function(){return m}));t.d(a,"f",(function(){return E}));t.d(a,"d",(function(){return b}));t.d(a,"l",(function(){return g}));t.d(a,"e",(function(){return P}));t.d(a,"n",(function(){return D}));t.d(a,"k",(function(){return M}));t.d(a,"j",(function(){return v}));t.d(a,"g",(function(){return w}));var r=t(176);var o=t(66);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();var _=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var n={label:"Daily Sales",chartdata:[100,200,125,250,200,150,200],labels:["9","10","11","12","13","14","15"]};var l={chartData:{labels:["Space Used","Space Left"],datasets:[{data:[275,100],backgroundColor:[r["a"].color.primary,r["a"].color.info],hoverBackgroundColor:[r["a"].color.primary,r["a"].color.info]}]}};var i={label:"Direct User",labels:["Direct User","Referral","Facebook","Google","Instagram"],chartdata:[8.5,6.75,5.5,7,4.75]};var s={totalSales:"12,550",earning:"$35,000",products:[{id:1,productName:"HD Classic Gold Headphone",price:"300",productImage:t(1639)},{id:2,productName:"HD Classic Gold Headphone",price:"300",productImage:t(1640)},{id:3,productName:"HD Classic Gold Headphone",price:"300",productImage:t(1641)}]};var c=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}];var d={chartData:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],data:[600,500,650,470,520,700,500,650,580,500,650,700]},monthly:7233,weekly:5529};var u={chartData:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],data:[600,500,650,470,520,700,500,650,580,500,650,700]},today:6544,totalRevenue:9125};var f={chartData:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],data:[600,500,650,470,520,700,500,650,580,500,650,700]},today:5652,totalRevenue:8520};var p={labels:["Opened","Bounced","Spam","Unsent"],datasets:[{label:"Series A",backgroundColor:r["a"].color.white,borderColor:r["a"].color.primary,borderWidth:0,hoverBackgroundColor:r["a"].color.white,hoverBorderColor:r["a"].color.white,data:[53,15,30,7]}]};var m={labels:["0.00","1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","11.0","12.0","13.0","14.0","15.0"],datasets:[{label:"Series A",backgroundColor:r["a"].color.white,borderColor:r["a"].color.white,borderWidth:4,hoverBackgroundColor:r["a"].color.white,hoverBorderColor:r["a"].color.white,data:[65,59,80,81,56,55,40,45,35,45,65,70,75,80,30,45]}],totalUsed:"200 GB"};var E={labels:["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"],datasets:[{label:"Series A",fill:false,tension:0,backgroundColor:r["a"].color.primary,borderColor:r["a"].color.primary,borderWidth:4,hoverBackgroundColor:r["a"].color.primary,hoverBorderColor:r["a"].color.primary,data:[2500,900,400,1100,1250,900,2100,3400,1950,2e3,700,740]},{label:"Series B",fill:false,tension:0,backgroundColor:r["a"].color.info,borderColor:r["a"].color.info,borderWidth:4,hoverBackgroundColor:r["a"].color.info,hoverBorderColor:r["a"].color.info,data:[3800,3300,2300,3500,2800,3200,3100,4100,3500,3e3,2500,2300]}],customLegends:[{name:"Admin Theme",class:"badge-primary"},{name:"Wordpress Theme",class:"badge-info"}]};var b={chartData:{open:{data:[80,180,165,220,130,255,245,325],labels:["Jan","Feb","Mar","Apr","May","June","July","Aug"]},bounce:{data:[275,215,235,120,190,145,170,90],labels:["Jan","Feb","Mar","Apr","May","June","July","Aug"]},unsubscribe:{data:[275,215,235,120,190,145,170,90],labels:["Jan","Feb","Mar","Apr","May","June","July","Aug"]}}};var g={chartData:{labels:["Last Week","Target"],datasets:[{data:[100,260],backgroundColor:[r["a"].color.info,r["a"].color.primary],hoverBackgroundColor:[r["a"].color.info,r["a"].color.primary]}]},target:"$566",lastWeek:"$100"};var P={markers:[{latLng:[41.9,12.45],name:"Vatican City"},{latLng:[43.73,7.41],name:"Monaco"},{latLng:[-.52,166.93],name:"Nauru"},{latLng:[-8.51,179.21],name:"Tuvalu"},{latLng:[43.93,12.46],name:"San Marino"},{latLng:[47.14,9.52],name:"Liechtenstein"},{latLng:[7.11,171.06],name:"Marshall Islands"},{latLng:[17.3,-62.73],name:"Saint Kitts and Nevis"},{latLng:[3.2,73.22],name:"Maldives"},{latLng:[35.88,14.5],name:"Malta"},{latLng:[12.05,-61.75],name:"Grenada"},{latLng:[13.16,-61.23],name:"Saint Vincent and the Grenadines"},{latLng:[13.16,-59.55],name:"Barbados"},{latLng:[17.11,-61.85],name:"Antigua and Barbuda"},{latLng:[-4.61,55.45],name:"Seychelles"},{latLng:[7.35,134.46],name:"Palau"},{latLng:[42.5,1.51],name:"Andorra"},{latLng:[14.01,-60.98],name:"Saint Lucia"},{latLng:[6.91,158.18],name:"Federated States of Micronesia"},{latLng:[1.3,103.8],name:"Singapore"},{latLng:[1.46,173.03],name:"Kiribati"},{latLng:[-21.13,-175.2],name:"Tonga"},{latLng:[15.3,-61.38],name:"Dominica"},{latLng:[-20.2,57.5],name:"Mauritius"},{latLng:[26.02,50.55],name:"Bahrain"},{latLng:[.33,6.73],name:"São Tomé and Príncipe"}],totalVisitors:"1655+"};var D={totalActiveUsers:"359,234",chartData:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],data:[40,30,85,50,90,45,55,45,80,72,78,63]}};var M={chartData:{labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],data:[10,120,50,150,120,70,140,150,110,130,180,85],label:"Earns"},legend:{name:"Total Earns",class:"badge-primary"}};var O={chartLabels:["0.00","1.0","2.0","3.0","4.0","5.0","6.0"],chartDatasets:[{barPercentage:20,categoryPercentage:.03,label:"Series A",backgroundColor:r["a"].color.primary,borderColor:r["a"].color.primary,borderWidth:1,hoverBackgroundColor:r["a"].color.primary,hoverBorderColor:r["a"].color.primary,data:[65,59,80,81,56,55,40]},{barPercentage:20,categoryPercentage:.05,label:"Series B",backgroundColor:r["a"].color.default,borderColor:r["a"].color.default,borderWidth:1,hoverBackgroundColor:r["a"].color.default,hoverBorderColor:r["a"].color.default,data:[45,39,40,60,35,25,60]}],onlineSources:"3500",today:"17,020",lastMonth:"20.30%"};var v={labels:["Jan 1","Jan 7","Jan 14","Jan 21","Jan 28","Feb 4","Feb 11","Feb 18","Feb 25","Feb 28","Mar 2","Mar 6"],datasets:[{label:"Sales",fill:true,lineTension:0,fillOpacity:.5,backgroundColor:Object(o["d"])(r["a"].color.primary,.8),borderColor:r["a"].color.primary,pointBorderColor:r["a"].color.white,pointBackgroundColor:r["a"].color.white,pointBorderWidth:0,pointHoverRadius:5,pointHoverBackgroundColor:Object(o["d"])(r["a"].color.primary,1),pointHoverBorderColor:Object(o["d"])(r["a"].color.primary,1),pointHoverBorderWidth:8,pointRadius:0,pointHitRadius:10,data:[250,350,270,420,380,220,400,550,480,190,390,380]},{label:"Visitors",fill:true,lineTension:0,fillOpacity:.5,backgroundColor:Object(o["d"])(r["a"].color.warning,.4),borderColor:r["a"].color.warning,pointBorderColor:r["a"].color.white,pointBackgroundColor:r["a"].color.white,pointBorderWidth:0,pointHoverRadius:5,pointHoverBackgroundColor:Object(o["d"])(r["a"].color.warning,1),pointHoverBorderColor:Object(o["d"])(r["a"].color.warning,1),pointHoverBorderWidth:8,pointRadius:0,pointHitRadius:10,data:[600,400,500,350,650,630,450,480,650,500,530,550]}]};var h={label:"Sales",chartdata:[250,310,150,420,250,450],labels:["Jan","Feb","Mar","Apr","May","June"]};var C={label:"Net Profit",chartdata:[250,310,150,420,250,450],labels:["Jan","Feb","Mar","Apr","May","June"]};var y={label:"Tax",chartdata:[250,310,150,420,250,450],labels:["Jan","Feb","Mar","Apr","May","June"]};var L={label:"Expenses",chartdata:[250,310,150,420,250,450],labels:["Jan","Feb","Mar","Apr","May","June"]};var w={BookingKoala:[{id:1,title:"Wireframing for dashboard sidebar and topbar",date:1528368468,status:"Planning",color:"primary",team:[{id:1,name:"Maggie",avatar:"https://reactify.theironnetwork.org/data/images/user-1.jpg"},{id:2,name:"Lisa",avatar:"https://reactify.theironnetwork.org/data/images/user-2.jpg"},{id:3,name:"Lucile",avatar:"https://reactify.theironnetwork.org/data/images/user-3.jpg"}]},{id:2,title:"Wireframing for dashboard sidebar and topbar",date:1529346600,status:"In Progress",color:"success",team:[{id:1,name:"Maggie",avatar:"https://reactify.theironnetwork.org/data/images/user-1.jpg"},{id:2,name:"Lisa",avatar:"https://reactify.theironnetwork.org/data/images/user-2.jpg"},{id:3,name:"Lucile",avatar:"https://reactify.theironnetwork.org/data/images/user-3.jpg"}]}],Reactify:[{id:1,title:"Create video placeholder for website",date:1529951400,status:"In Progress",color:"success",team:[{id:1,name:"Maggie",avatar:"https://reactify.theironnetwork.org/data/images/user-1.jpg"},{id:2,name:"Lisa",avatar:"https://reactify.theironnetwork.org/data/images/user-2.jpg"},{id:3,name:"Lucile",avatar:"https://reactify.theironnetwork.org/data/images/user-3.jpg"}]},{id:2,title:"Social media ads banner for launching",date:1531161e3,status:"On Hold",color:"success",team:[{id:1,name:"Maggie",avatar:"https://reactify.theironnetwork.org/data/images/user-1.jpg"},{id:2,name:"Lisa",avatar:"https://reactify.theironnetwork.org/data/images/user-2.jpg"},{id:3,name:"Lucile",avatar:"https://reactify.theironnetwork.org/data/images/user-3.jpg"}]}],Adminify:[{id:1,title:"Create new design for frontend website",date:1530729e3,status:"Completed",color:"danger",team:[{id:1,name:"Maggie",avatar:"https://reactify.theironnetwork.org/data/images/user-1.jpg"},{id:2,name:"Lisa",avatar:"https://reactify.theironnetwork.org/data/images/user-2.jpg"},{id:3,name:"Lucile",avatar:"https://reactify.theironnetwork.org/data/images/user-3.jpg"}]},{id:2,title:"Update new logo everywhere",date:1532716200,status:"Completed",color:"danger",team:[{id:1,name:"Maggie",avatar:"https://reactify.theironnetwork.org/data/images/user-1.jpg"},{id:2,name:"Lisa",avatar:"https://reactify.theironnetwork.org/data/images/user-2.jpg"},{id:3,name:"Lucile",avatar:"https://reactify.theironnetwork.org/data/images/user-3.jpg"}]}]};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(n,"dailySales","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(l,"spaceUsed","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(i,"trafficChannel","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(s,"topSellingProducts","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(c,"siteVisitors","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(d,"visitorsData","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(u,"salesData","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(f,"ordersData","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(p,"emailStatisticsData","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(m,"dataUsed","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(E,"productStats","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(b,"emailStatisticsV2Data","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(g,"totalRevenue","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(P,"onlineVisitorsData","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(D,"trafficSources","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(M,"totalEarnsV2","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(O,"trafficStatus","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(v,"totalEarns","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(h,"totalSales","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(C,"netProfit","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(y,"taxStats","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(L,"expenses","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js");e.register(w,"projectTaskData","D:\\front\\bloomtech-front\\src\\routes\\widgets\\data.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))}}]);