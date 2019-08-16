!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WebAuth=t():e.WebAuth=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(1),u=(n=a)&&n.__esModule?n:{default:n};var c=function(){function e(t){var o=t.key,n=t.jwt,r=t.debug,i=t.remember;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.token=n,this.payload=null,this.key=o||"auth-key",this.debug=r||!1,this.remember=i||!1}return i(e,[{key:"init",value:function(e){var t=this,o=window[this.checkStorage()].getItem(this.key);this.token=this.token||o,this.setup(function(o){if(o)throw new Error("Token cannot be empty");t.setPayload(),t.checkExpiration(function(o){o&&"function"==typeof e?e({valid:!0,token:t.token,payload:t.payload}):"function"==typeof e?e({valid:!1,token:t.token,payload:t.payload}):t.Debug("info",{valid:!1,token:t.token,payload:t.payload})})})}},{key:"setup",value:function(e){var t=!1,o=this.remember?"localStorage":"sessionStorage";this.cleanTokens(),this.token?window[o].setItem(this.key,this.token):t=!0,"function"==typeof e&&e(t)}},{key:"checkExpiration",value:function(e){e(1e3*this.payload.exp>=(new Date).getTime())}},{key:"setPayload",value:function(){var e=this,t=(0,u.default)(this.token);this.Debug("info",t),this.payload="object"===(void 0===t?"undefined":r(t))?t:(e.Debug("error",{token:e.token,payload:e.payload}),e.Debug("error",new Error("Payload isn't an object")),{})}},{key:"checkStorage",value:function(){return window.localStorage.getItem(this.key)?"localStorage":"sessionStorage"}},{key:"cleanTokens",value:function(){window.localStorage.removeItem(this.key),window.sessionStorage.removeItem(this.key)}},{key:"Debug",value:function(e,t){var o="string"==typeof e?e:"info";this.debug&&console[o](t)}}]),e}();e.exports=c},function(e,t,o){"use strict";var n=o(2);function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidTokenError",e.exports=function(e,t){if("string"!=typeof e)throw new r("Invalid token specified");var o=!0===(t=t||{}).header?0:1;try{return JSON.parse(n(e.split(".")[o]))}catch(e){throw new r("Invalid token specified: "+e.message)}},e.exports.InvalidTokenError=r},function(e,t,o){"use strict";var n=o(3);e.exports=function(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(n(e).replace(/(.)/g,function(e,t){var o=t.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(t)}catch(e){return n(t)}}},function(e,t,o){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidCharacterError",e.exports="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,i,a=0,u=0,c="";i=t.charAt(u++);~i&&(o=a%4?64*o+i:i,a++%4)?c+=String.fromCharCode(255&o>>(-2*a&6)):0)i=n.indexOf(i);return c}}])});
//# sourceMappingURL=web-auth.bundle.js.map