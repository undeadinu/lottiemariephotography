webpackJsonp([0x67ef26645b2a,60335399758886],{102:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Lottie Marie Photography"}}},layoutContext:{}}},195:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(5),i=r(a),u=n(199),c=r(u),l=n(102),f=r(l);e.default=function(t){return i.default.createElement(c.default,o({},t,f.default))},t.exports=e.default},203:function(t,e,n){t.exports={default:n(213),__esModule:!0}},205:function(t,e,n){t.exports={default:n(215),__esModule:!0}},209:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(203),a=r(o);e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},210:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}},213:function(t,e,n){n(238),t.exports=n(16).Object.assign},215:function(t,e,n){n(240),t.exports=n(16).Object.keys},228:function(t,e,n){"use strict";var r=n(42),o=n(78),a=n(54),i=n(83),u=n(131),c=Object.assign;t.exports=!c||n(26)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=i(t),c=arguments.length,l=1,f=o.f,s=a.f;c>l;)for(var p,d=u(arguments[l++]),T=f?r(d).concat(f(d)):r(d),E=T.length,h=0;E>h;)s.call(d,p=T[h++])&&(n[p]=d[p]);return n}:c},232:function(t,e,n){var r=n(25),o=n(16),a=n(26);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},238:function(t,e,n){var r=n(25);r(r.S+r.F,"Object",{assign:n(228)})},240:function(t,e,n){var r=n(83),o=n(42);n(232)("keys",function(){return function(t){return o(r(t))}})},279:function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function a(t,e,n){var a,f;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(c(t))return!!c(e)&&(t=i.call(t),e=i.call(e),l(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(a=0;a<t.length;a++)if(t[a]!==e[a])return!1;return!0}try{var s=u(t),p=u(e)}catch(t){return!1}if(s.length!=p.length)return!1;for(s.sort(),p.sort(),a=s.length-1;a>=0;a--)if(s[a]!=p[a])return!1;for(a=s.length-1;a>=0;a--)if(f=s[a],!l(t[f],e[f],n))return!1;return typeof t==typeof e}var i=Array.prototype.slice,u=n(281),c=n(280),l=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:a(t,e,n))}},280:function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},281:function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},288:function(t,e,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}()},154:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return a(O+t)}function a(t){return t.replace(/^\/\//g,"/")}function i(t,e){var n=(0,g.createLocation)(t,null,null,e.location);return n.pathname=o(n.pathname),n}e.__esModule=!0,e.navigateTo=void 0;var u=n(209),c=r(u),l=n(205),f=r(l),s=n(210),p=r(s),d=n(53),T=r(d),E=n(72),h=r(E),A=n(71),y=r(A);e.withPrefix=o;var v=n(5),_=r(v),m=n(69),S=n(7),b=r(S),g=n(101),O="/";O="/lottiemariephotography";var R={activeClassName:b.default.string,activeStyle:b.default.object,exact:b.default.bool,strict:b.default.bool,isActive:b.default.func,location:b.default.object},M=function(t,e){var n=new window.IntersectionObserver(function(r){r.forEach(function(r){t===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),e())})});n.observe(t)},P=function(t){function e(n,r){(0,T.default)(this,e);var o=(0,h.default)(this,t.call(this)),a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var u=r.router.history,c=i(n.to,u);return o.state={path:(0,g.createPath)(c),to:c,IOSupported:a},o.handleRef=o.handleRef.bind(o),o}return(0,y.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=i(t.to,history);this.setState({path:(0,g.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},e.prototype.handleRef=function(t){var e=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&M(t,function(){___loader.enqueue(e.state.to.pathname)})},e.prototype.render=function(){var t=this,e=this.props,n=e.onClick,r=(0,p.default)(e,["onClick"]),o=void 0;return o=(0,f.default)(R).some(function(e){return t.props[e]})?m.NavLink:m.Link,_.default.createElement(o,(0,c.default)({onClick:function(e){if(n&&n(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var r=t.state.path;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=t.state.path.split("#").slice(1).join("#"),a=document.getElementById(o);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},r,{to:this.state.to,innerRef:this.handleRef}))},e}(_.default.Component);P.propTypes=(0,c.default)({},R,{innerRef:b.default.func,onClick:b.default.func,to:b.default.oneOfType([b.default.string,b.default.object]).isRequired}),P.contextTypes={router:b.default.object},e.default=P;e.navigateTo=function(t){window.___navigateTo(t)}},390:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.Helmet=void 0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(5),s=r(f),p=n(7),d=r(p),T=n(409),E=r(T),h=n(279),A=r(h),y=n(391),v=n(182),_=function(t){var e,n;return n=e=function(e){function n(){return a(this,n),i(this,e.apply(this,arguments))}return u(n,e),n.prototype.shouldComponentUpdate=function(t){return!(0,A.default)(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case v.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return c({},r,(e={},e[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,a))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,a=t.newChildProps,i=t.nestedChildren;switch(r.type){case v.TAG_NAMES.TITLE:return c({},o,(e={},e[r.type]=i,e.titleAttributes=c({},a),e));case v.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},a)});case v.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},a)})}return c({},o,(n={},n[r.type]=c({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=c({},e);return Object.keys(t).forEach(function(e){var r;n=c({},n,(r={},r[e]=t[e],r))}),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return s.default.Children.forEach(t,function(t){if(t&&t.props){var a=t.props,i=a.children,u=o(a,["children"]),c=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(t,i),t.type){case v.TAG_NAMES.LINK:case v.TAG_NAMES.META:case v.TAG_NAMES.NOSCRIPT:case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:i})}}}),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=o(e,["children"]),a=c({},r);return n&&(a=this.mapChildrenToProps(n,a)),s.default.createElement(t,a)},l(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(s.default.Component),e.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n},m=function(){return null},S=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(m),b=_(S);b.renderStatic=b.rewind,e.Helmet=b,e.default=b},182:function(t,e){e.__esModule=!0;var n=(e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(e.VALID_TAG_NAMES=Object.keys(n).map(function(t){return n[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce(function(t,e){return t[r[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},391:function(t,e,n){(function(t){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(5),u=r(i),c=n(4),l=r(c),f=n(182),s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(t){var e=A(t,f.TAG_NAMES.TITLE),n=A(t,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,function(){return e});var r=A(t,f.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},d=function(t){return A(t,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(t,e){return e.filter(function(e){return"undefined"!=typeof e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return a({},t,e)},{})},E=function(t,e){return e.filter(function(t){return"undefined"!=typeof t[f.TAG_NAMES.BASE]}).map(function(t){return t[f.TAG_NAMES.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(t.indexOf(i)!==-1&&n[i])return e.concat(n)}return e},[])},h=function(t,e,n){var r={};return n.filter(function(e){return!!Array.isArray(e[t])||("undefined"!=typeof e[t]&&b("Helmet: "+t+' should be of type "Array". Instead found type "'+o(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,n){var o={};n.filter(function(t){for(var n=void 0,a=Object.keys(t),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();e.indexOf(c)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||c===f.TAG_PROPERTIES.REL&&"stylesheet"===t[c].toLowerCase()||(n=c),e.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,l.default)({},r[u],o[u]);r[u]=c}return t},[]).reverse()},A=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},y=function(t){return{baseTag:E([f.TAG_PROPERTIES.HREF],t),bodyAttributes:T(f.ATTRIBUTE_NAMES.BODY,t),defer:A(t,f.HELMET_PROPS.DEFER),encode:A(t,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(f.ATTRIBUTE_NAMES.HTML,t),linkTags:h(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],t),metaTags:h(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:h(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:d(t),scriptTags:h(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],t),styleTags:h(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],t),title:p(t),titleAttributes:T(f.ATTRIBUTE_NAMES.TITLE,t)}},v=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){v(e)},0)}}(),_=function(t){return clearTimeout(t)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||v:t.requestAnimationFrame||v,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_:t.cancelAnimationFrame||_,b=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},g=null,O=function(t){g&&S(g),t.defer?g=m(function(){R(t,function(){g=null})}):(R(t),g=null)},R=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,s=t.styleTags,p=t.title,d=t.titleAttributes;w(f.TAG_NAMES.BODY,r),w(f.TAG_NAMES.HTML,o),P(p,d);var T={baseTag:C(f.TAG_NAMES.BASE,n),linkTags:C(f.TAG_NAMES.LINK,a),metaTags:C(f.TAG_NAMES.META,i),noscriptTags:C(f.TAG_NAMES.NOSCRIPT,u),scriptTags:C(f.TAG_NAMES.SCRIPT,l),styleTags:C(f.TAG_NAMES.STYLE,s)},E={},h={};Object.keys(T).forEach(function(t){var e=T[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(h[t]=T[t].oldTags)}),e&&e(),c(t,E,h)},M=function(t){return Array.isArray(t)?t.join(""):t},P=function(t,e){"undefined"!=typeof t&&document.title!==t&&(document.title=M(t)),w(f.TAG_NAMES.TITLE,e)},w=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(e),u=0;u<i.length;u++){var c=i[u],l=e[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var s=a.indexOf(c);s!==-1&&a.splice(s,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,i.join(","))}},C=function(t,e){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u="undefined"==typeof e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return i=e,n.isEqualNode(t)})?o.splice(i,1):a.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),a.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:a}},I=function(t){return Object.keys(t).reduce(function(e,n){var r="undefined"!=typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},N=function(t,e,n,r){var o=I(n),a=M(e);return o?"<"+t+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+t+">":"<"+t+" "+f.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+t+">"},L=function(t,e,n){return e.reduce(function(e,r){var o=Object.keys(r).filter(function(t){return!(t===f.TAG_PROPERTIES.INNER_HTML||t===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o="undefined"==typeof r[e]?e:e+'="'+s(r[e],n)+'"';return t?t+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=f.SELF_CLOSING_TAGS.indexOf(t)===-1;return e+"<"+t+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+t+">")},"")},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[f.REACT_TAG_MAP[n]||n]=t[n],e},e)},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[f.HTML_TAG_MAP[n]||n]=t[n],e},e)},H=function(t,e,n){var r,o=(r={key:e},r[f.HELMET_ATTRIBUTE]=!0,r),a=j(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,a,e)]},x=function(t,e){return e.map(function(e,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach(function(t){var n=f.REACT_TAG_MAP[t]||t;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]}),u.default.createElement(t,o)})},k=function(t,e,n){switch(t){case f.TAG_NAMES.TITLE:return{toComponent:function(){return H(t,e.title,e.titleAttributes,n)},toString:function(){return N(t,e.title,e.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(e)},toString:function(){return I(e)}};default:return{toComponent:function(){return x(t,e)},toString:function(){return L(t,e,n)}}}},U=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,u=t.noscriptTags,c=t.scriptTags,l=t.styleTags,s=t.title,p=void 0===s?"":s,d=t.titleAttributes;return{base:k(f.TAG_NAMES.BASE,e,r),bodyAttributes:k(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(f.ATTRIBUTE_NAMES.HTML,o,r),link:k(f.TAG_NAMES.LINK,a,r),meta:k(f.TAG_NAMES.META,i,r),noscript:k(f.TAG_NAMES.NOSCRIPT,u,r),script:k(f.TAG_NAMES.SCRIPT,c,r),style:k(f.TAG_NAMES.STYLE,l,r),title:k(f.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};e.convertReactPropstoHtmlAttributes=G,e.handleClientStateChange=O,e.mapStateOnServer=U,e.reducePropsToState=y,e.requestAnimationFrame=m,e.warn=b}).call(e,function(){return this}())},409:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(5),c=r(u),l=n(288),f=r(l),s=n(426),p=r(s);t.exports=function(t,e,n){function r(t){return t.displayName||t.name||"Component"}if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function s(){T=t(d.map(function(t){return t.props})),E.canUseDOM?e(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,E=function(t){function e(){return o(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.peek=function(){return T},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=T;return T=void 0,d=[],t},e.prototype.shouldComponentUpdate=function(t){return!(0,p.default)(t,this.props)},e.prototype.componentWillMount=function(){d.push(this),s()},e.prototype.componentDidUpdate=function(){s()},e.prototype.componentWillUnmount=function(){var t=d.indexOf(this);d.splice(t,1),s()},e.prototype.render=function(){return c.default.createElement(l,this.props)},e}(u.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=f.default.canUseDOM,E}}},426:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var f=t[l],s=e[l];if(o=n?n.call(r,f,s,l):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},198:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(5),a=r(o),i=n(154),u=r(i),c=n(289),l=r(c),f=n(125),s=r(f),p=function(t){var e=t.siteTitle;return a.default.createElement("header",{className:l.default.header},a.default.createElement("p",{className:"h1 text--center"},a.default.createElement(u.default,{to:"/"},e)),a.default.createElement(s.default,null))};e.default=p,t.exports=e.default},289:function(t,e){t.exports={header:"src-components-header----header-module---header---19Rvl"}},125:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=n(5),c=r(u),l=n(154),f=r(l),s=n(290),p=r(s),d=function(t){function e(){o(this,e);var n=a(this,t.call(this));return n.state={navigation:!1},n.toggleNavigation=n.toggleNavigation.bind(n),n}return i(e,t),e.prototype.toggleNavigation=function(){this.setState({navigation:!this.state.navigation})},e.prototype.render=function(){return c.default.createElement("div",{className:this.state.navigation?[p.default.navigation,p.default["navigation--active"]].join(" "):p.default.navigation},c.default.createElement("div",{onClick:this.toggleNavigation,className:p.default.navigation__icon},c.default.createElement("span",null),c.default.createElement("span",null),c.default.createElement("span",null)),c.default.createElement("nav",null,c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement(f.default,{onClick:this.toggleNavigation,to:"/"},"Home")))))},e}(c.default.Component);e.default=d,t.exports=e.default},290:function(t,e){t.exports={navigation:"src-components-navigation----navigation-module---navigation---3UBlC","navigation--active":"src-components-navigation----navigation-module---navigation--active---2mKdy",navigation__icon:"src-components-navigation----navigation-module---navigation__icon---3IG8N"}},199:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.query=void 0;var o=n(5),a=r(o),i=n(7),u=r(i),c=n(390),l=r(c),f=n(198),s=r(f),p=n(125);r(p);n(323);var d=function(t){var e=t.children,n=t.data;return a.default.createElement("div",{className:"container"},a.default.createElement(l.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),a.default.createElement(s.default,{siteTitle:n.site.siteMetadata.title}),a.default.createElement("div",null,e()))};d.propTypes={children:u.default.func},e.default=d;e.query="** extracted graphql fragment **"},323:function(t,e){}});
//# sourceMappingURL=component---src-layouts-index-js-4fe594161f9ff72213d1.js.map