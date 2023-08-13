(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{5928:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-me",function(){return t(2917)}])},638:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}n.default=function(e,n){var t=u.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](i):i instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var i,l;var s=r=a({},r,n);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return t(s);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,o(t,r);delete r.ssr}return t(r)};i(t(7294));var u=i(t(4302));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return delete n.webpack,delete n.modules,e(n)}},6319:function(e,n,t){"use strict";var r;Object.defineProperty(n,"__esModule",{value:!0}),n.LoadableContext=void 0;var a=((r=t(7294))&&r.__esModule?r:{default:r}).default.createContext(null);n.LoadableContext=a},4302:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,o=(i=t(7294))&&i.__esModule?i:{default:i},l=t(7161),s=t(6319);var c=[],d=[],f=!1;function b(e){var n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}var p=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=n,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var n,t,a;return n=e,(t=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,t=this._opts;if(n.loading){if("number"===typeof t.delay)if(0===t.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),t.delay)}if("number"===typeof t.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),t.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(n){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var n=this;return this._callbacks.add(e),function(){n._callbacks.delete(e)}}}])&&r(n.prototype,t),a&&r(n,a),e}();function h(e){return function(e,n){var t=function(){if(!a){var n=new p(e,r);a={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},n);r.suspense&&(r.lazy=o.default.lazy(r.loader));var a=null;if(!f&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&d.push((function(e){var n=!0,r=!1,a=void 0;try{for(var u,o=i[Symbol.iterator]();!(n=(u=o.next()).done);n=!0){var l=u.value;if(-1!==e.indexOf(l))return t()}}catch(s){r=!0,a=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}}))}var c=r.suspense?function(e,n){return o.default.createElement(r.lazy,u({},e,{ref:n}))}:function(e,n){t();var u=o.default.useContext(s.LoadableContext),i=l.useSubscription(a);return o.default.useImperativeHandle(n,(function(){return{retry:a.retry}}),[]),u&&Array.isArray(r.modules)&&r.modules.forEach((function(e){u(e)})),o.default.useMemo((function(){return i.loading||i.error?o.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?o.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!r.suspense&&t()},c.displayName="LoadableComponent",o.default.forwardRef(c)}(b,e)}function m(e,n){for(var t=[];e.length;){var r=e.pop();t.push(r(n))}return Promise.all(t).then((function(){if(e.length)return m(e,n)}))}h.preloadAll=function(){return new Promise((function(e,n){m(c).then(e,n)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(n){var t=function(){return f=!0,n()};m(d,e).then(t,t)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var y=h;n.default=y},2917:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=t(4515);n.default=function(){return(0,r.jsx)(a.Xg,{PAGE_SEO:{title:"About Me",description:"Hi I am Runzhou(Kilin) Mao, a frontend engineer.",keywords:"Kilin Mao, Runzhou Mao",author:"Runzhou Mao"},home:!0,children:(0,r.jsx)("section",{className:"container px-3 md:pb-20 md:pt-10 pt-20",children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(a.xv,{title:!0,className:"mb-5 mt-10 dark:text-sky-400 text-sky-600",children:"Hi, It's Kilin Mao."}),(0,r.jsx)(a.xv,{p:!0,className:"text-lg",children:"Hello everyone, my name is Runzhou(Kilin) Mao, and I am a Front-end Engineer. I graduated with a Bachelor's degree from China University of Mining and Technology and continued my studies by pursuing a Master's degree at the Technical University of Berlin. I am highly passionate about computer graphics and image processing, and I envision myself growing and advancing as a WebGL front-end developer in the future."}),(0,r.jsx)(a.xv,{p:!0,className:"text-lg",children:"Outside of work, I am an outgoing and adventurous person who loves to explore new places by traveling. I appreciate good food and enjoy a diverse range of music genres. Staying fit is important to me, and I engage in sports such as swimming, badminton, and roller-skating to maintain a healthy lifestyle. Additionally, I am an avid fan of ACG (Anime, Comic, and Games) and am a dedicated reader of novels, often immersing myself in the exciting stories that they weave."})]})})})}},4515:function(e,n,t){"use strict";t.d(n,{Xg:function(){return a},xv:function(){return u},Ee:function(){return i},ty:function(){return o},aV:function(){return l},e9:function(){return s},iR:function(){return c},GJ:function(){return d},Y7:function(){return f}});var r=t(5152),a=(0,r.default)((function(){return Promise.all([t.e(874),t.e(228),t.e(13),t.e(788)]).then(t.bind(t,8788))}),{loadableGenerated:{webpack:function(){return[8788]}}}),u=(0,r.default)((function(){return t.e(980).then(t.bind(t,6980))}),{loadableGenerated:{webpack:function(){return[6980]}}}),i=(0,r.default)((function(){return t.e(28).then(t.bind(t,3028))}),{loadableGenerated:{webpack:function(){return[3028]}}}),o=(0,r.default)((function(){return t.e(199).then(t.bind(t,2199))}),{loadableGenerated:{webpack:function(){return[2199]}}}),l=(0,r.default)((function(){return t.e(70).then(t.bind(t,7070))}),{loadableGenerated:{webpack:function(){return[7070]}}}),s=(0,r.default)((function(){return Promise.resolve().then(t.bind(t,534))}),{loadableGenerated:{webpack:function(){return[534]}}}),c=(0,r.default)((function(){return t.e(162).then(t.bind(t,162))}),{loadableGenerated:{webpack:function(){return[162]}}}),d=(0,r.default)((function(){return t.e(354).then(t.bind(t,7354))}),{loadableGenerated:{webpack:function(){return[7354]}}}),f=(0,r.default)((function(){return Promise.all([t.e(4),t.e(931)]).then(t.bind(t,931))}),{loadableGenerated:{webpack:function(){return[931]}}})},5152:function(e,n,t){e.exports=t(638)},8217:function(e,n,t){"use strict";var r=t(6086),a=t(7294);n.useSubscription=function(e){var n=e.getCurrentValue,t=e.subscribe,u=a.useState((function(){return{getCurrentValue:n,subscribe:t,value:n()}}));e=u[0];var i=u[1];return u=e.value,e.getCurrentValue===n&&e.subscribe===t||(u=n(),i({getCurrentValue:n,subscribe:t,value:u})),a.useDebugValue(u),a.useEffect((function(){function e(){if(!a){var e=n();i((function(a){return a.getCurrentValue!==n||a.subscribe!==t||a.value===e?a:r({},a,{value:e})}))}}var a=!1,u=t(e);return e(),function(){a=!0,u()}}),[n,t]),u}},7161:function(e,n,t){"use strict";e.exports=t(8217)}},function(e){e.O(0,[774,888,179],(function(){return n=5928,e(e.s=n);var n}));var n=e.O();_N_E=n}]);