this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["stock-filter"]=function(e){function t(t){for(var n,s,l=t[0],a=t[1],u=t[2],b=0,d=[];b<l.length;b++)s=l[b],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(i&&i(t);d.length;)d.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,l=1;l<c.length;l++){var a=c[l];0!==o[a]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},o={42:0},r=[];function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=a;return r.push([423,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.compose},102:function(e,t,c){"use strict";var n=c(0),o=c(7),r=c(1),s=c(3),l=c(11);function a(e){let{level:t}=e;const c={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return c.hasOwnProperty(t)?Object(n.createElement)(l.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(l.Path,{d:c[t]})):null}class u extends n.Component{createLevelControl(e,t,c){const o=e===t;return{icon:Object(n.createElement)(a,{level:e}),title:Object(r.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(r.__)("Heading %d","woo-gutenberg-products-block"),e),isActive:o,onClick:()=>c(e)}}render(){const{isCollapsed:e=!0,minLevel:t,maxLevel:c,selectedLevel:r,onChange:l}=this.props;return Object(n.createElement)(s.ToolbarGroup,{isCollapsed:e,icon:Object(n.createElement)(a,{level:r}),controls:Object(o.range)(t,c).map(e=>this.createLevelControl(e,r,l))})}}t.a=u},107:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(30);c(243),t.a=e=>{let{name:t,count:c}=e;return Object(n.createElement)(n.Fragment,null,t,Number.isFinite(c)&&Object(n.createElement)(r.a,{label:c.toString(),screenReaderLabel:Object(o.sprintf)(
/* translators: %s number of products. */
Object(o._n)("%s product","%s products",c,"woo-gutenberg-products-block"),c),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))}},11:function(e,t){e.exports=window.wp.primitives},110:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(8);function o(e,t){const c=Object(n.useRef)();return Object(n.useEffect)(()=>{c.current===e||t&&!t(e,c.current)||(c.current=e)},[e,t]),c.current}},121:function(e,t,c){"use strict";var n=c(0),o=c(5),r=c(10),s=c(1);c(155),t.a=Object(r.withInstanceId)(e=>{let{className:t,headingLevel:c,onChange:r,heading:l,instanceId:a}=e;const u="h"+c;return Object(n.createElement)(u,{className:t},Object(n.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+a},Object(s.__)("Block title","woo-gutenberg-products-block")),Object(n.createElement)(o.PlainText,{id:"block-title-"+a,className:"wc-block-editor-components-title",value:l,onChange:r}))})},122:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"string"==typeof e},124:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0);const o=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}},125:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(18),o=c(9),r=c(0),s=c(49),l=c(124);const a=e=>{const{namespace:t,resourceName:c,resourceValues:a=[],query:u={},shouldSelect:i=!0}=e;if(!t||!c)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(r.useRef)({results:[],isLoading:!0}),d=Object(s.a)(u),p=Object(s.a)(a),O=Object(l.a)(),m=Object(o.useSelect)(e=>{if(!i)return null;const o=e(n.COLLECTIONS_STORE_KEY),r=[t,c,d,p],s=o.getCollectionError(...r);if(s){if(!(s instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");O(s)}return{results:o.getCollection(...r),isLoading:!o.hasFinishedResolution("getCollection",r)}},[t,c,p,d,i]);return null!==m&&(b.current=m),b.current}},13:function(e,t){e.exports=window.wp.blocks},14:function(e,t){e.exports=window.wp.htmlEntities},143:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(4),s=c.n(r),l=c(30);c(185),t.a=e=>{let{className:t,disabled:c,label:
/* translators: Submit button text for filters. */
r=Object(o.__)("Go","woo-gutenberg-products-block"),onClick:a,screenReaderLabel:u=Object(o.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{type:"submit",className:s()("wc-block-filter-submit-button","wc-block-components-filter-submit-button",t),disabled:c,onClick:a},Object(n.createElement)(l.a,{label:r,screenReaderLabel:u}))}},155:function(e,t){},16:function(e,t){e.exports=window.wp.url},166:function(e,t,c){"use strict";c.d(t,"b",(function(){return o})),c.d(t,"a",(function(){return r})),c.d(t,"c",(function(){return s}));var n=c(16);const o="query_type_",r="filter_";function s(e){return window?Object(n.getQueryArg)(window.location.href,e):null}},18:function(e,t){e.exports=window.wc.wcBlocksData},185:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},202:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(4),s=c.n(r);c(244),t.a=e=>{let{className:t,onChange:c=(()=>{}),options:r=[],checked:l=[],isLoading:a=!1,isDisabled:u=!1,limit:i=10}=e;const[b,d]=Object(n.useState)(!1),p=Object(n.useMemo)(()=>[...Array(5)].map((e,t)=>Object(n.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),O=Object(n.useMemo)(()=>{const e=r.length-i;return!b&&Object(n.createElement)("li",{key:"show-more",className:"show-more"},Object(n.createElement)("button",{onClick:()=>{d(!0)},"aria-expanded":!1,"aria-label":Object(o.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(o._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(o.sprintf)(
/* translators: %s number of options to reveal. */
Object(o._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[r,i,b]),m=Object(n.useMemo)(()=>b&&Object(n.createElement)("li",{key:"show-less",className:"show-less"},Object(n.createElement)("button",{onClick:()=>{d(!1)},"aria-expanded":!0,"aria-label":Object(o.__)("Show less options","woo-gutenberg-products-block")},Object(o.__)("Show less","woo-gutenberg-products-block"))),[b]),f=Object(n.useMemo)(()=>{const e=r.length>i+5;return Object(n.createElement)(n.Fragment,null,r.map((t,o)=>Object(n.createElement)(n.Fragment,{key:t.value},Object(n.createElement)("li",e&&!b&&o>=i&&{hidden:!0},Object(n.createElement)("input",{type:"checkbox",id:t.value,value:t.value,onChange:e=>{c(e.target.value)},checked:l.includes(t.value),disabled:u}),Object(n.createElement)("label",{htmlFor:t.value},t.label)),e&&o===i-1&&O)),e&&m)},[r,c,l,b,i,m,O,u]),j=s()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":a},t);return Object(n.createElement)("ul",{className:j},a?p:f)}},242:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},243:function(e,t){},244:function(e,t){},25:function(e,t){e.exports=window.wp.isShallowEqual},298:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(0),o=c(274),r=c(7),s=c(49),l=c(75),a=c(125),u=c(50);const i=e=>{let{queryAttribute:t,queryPrices:c,queryStock:i,queryState:b}=e,d=Object(u.a)();d+="-collection-data";const[p]=Object(l.a)(d),[O,m]=Object(l.b)("calculate_attribute_counts",[],d),[f,j]=Object(l.b)("calculate_price_range",null,d),[w,h]=Object(l.b)("calculate_stock_status_counts",null,d),g=Object(s.a)(t||{}),v=Object(s.a)(c),k=Object(s.a)(i);Object(n.useEffect)(()=>{"object"==typeof g&&Object.keys(g).length&&(O.find(e=>e.taxonomy===g.taxonomy)||m([...O,g]))},[g,O,m]),Object(n.useEffect)(()=>{f!==v&&void 0!==v&&j(v)},[v,j,f]),Object(n.useEffect)(()=>{w!==k&&void 0!==k&&h(k)},[k,h,w]);const[_,E]=Object(n.useState)(!1),[y]=Object(o.a)(_,200);_||E(!0);const S=Object(n.useMemo)(()=>(e=>{const t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(r.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:c}=e;return{taxonomy:t,query_type:c}}),["taxonomy","query_type"])),t})(p),[p]);return Object(a.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...b,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...S},shouldSelect:y})}},3:function(e,t){e.exports=window.wp.components},30:function(e,t,c){"use strict";var n=c(0),o=c(4),r=c.n(o);t.a=e=>{let t,{label:c,screenReaderLabel:o,wrapperElement:s,wrapperProps:l={}}=e;const a=null!=c,u=null!=o;return!a&&u?(t=s||"span",l={...l,className:r()(l.className,"screen-reader-text")},Object(n.createElement)(t,l,o)):(t=s||n.Fragment,a&&u&&c!==o?Object(n.createElement)(t,l,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},o)):Object(n.createElement)(t,l,c))}},423:function(e,t,c){e.exports=c(492)},424:function(e,t){},425:function(e,t){},45:function(e,t){e.exports=window.wp.a11y},49:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(0),o=c(25),r=c.n(o);function s(e){const t=Object(n.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},492:function(e,t,c){"use strict";c.r(t);var n=c(6),o=c.n(n),r=c(0),s=c(1),l=c(13),a=c(114),u=c(542),i=c(4),b=c.n(i),d=c(5),p=c(3),O=c(102),m=c(121),f=c(45),j=c(49),w=c(110),h=c(75),g=c(298),v=c(2),k=c(202),_=c(143),E=c(107),y=c(25),S=c.n(y),C=c(14),x=c(242),N=c(16),P=c(166);const L=[{value:"preview-1",name:"In Stock",label:Object(r.createElement)(E.a,{name:"In Stock",count:3})},{value:"preview-2",name:"Out of sotck",label:Object(r.createElement)(E.a,{name:"Out of stock",count:3})},{value:"preview-3",name:"On backorder",label:Object(r.createElement)(E.a,{name:"On backorder",count:2})}];c(425);var T=c(122);const F=(e,t)=>{const c=Object(P.c)(t);if(!c)return[];const n=Object(T.a)(c)?c.split(","):c;return Object.keys(e).filter(e=>n.includes(e))},H=P.a+"stock_status";var V=e=>{let{attributes:t,isEditor:c=!1}=e;const n=Object(v.getSettingWithCoercion)("is_rendering_php_template",!1,x.a),[o,l]=Object(r.useState)(!1),[a]=Object(r.useState)(Object(v.getSetting)("hideOutOfStockItems",!1)),[{outofstock:u,...i}]=Object(r.useState)(Object(v.getSetting)("stockStatusOptions",{})),[b]=Object(r.useState)(a?i:{outofstock:u,...i}),[d,p]=Object(r.useState)(F(b,H)),[O,m]=Object(r.useState)(t.isPreview?L:[]),[y]=Object(r.useState)(Object.entries(b).map(e=>{let[t,c]=e;return{slug:t,name:c}}).filter(e=>!!e.name).sort((e,t)=>e.slug.localeCompare(t.slug))),[P]=Object(h.a)(),[T,V]=Object(h.b)("stock_status",[]),{results:M,isLoading:R}=Object(g.a)({queryStock:!0,queryState:P}),B=Object(r.useCallback)(e=>M.stock_status_counts?M.stock_status_counts.find(t=>{let{status:c,count:n}=t;return c===e&&0!==Number(n)}):null,[M]);Object(r.useEffect)(()=>{if(R||t.isPreview)return;const e=y.map(e=>{const c=B(e.slug);if(!(c||d.includes(e.slug)||(n=e.slug,null!=P&&P.stock_status&&P.stock_status.some(e=>{let{status:t=[]}=e;return t.includes(n)}))))return null;var n;const o=c?Number(c.count):0;return{value:e.slug,name:Object(C.decodeEntities)(e.name),label:Object(r.createElement)(E.a,{name:Object(C.decodeEntities)(e.name),count:t.showCounts?o:null})}}).filter(Boolean);m(e)},[t.showCounts,t.isPreview,R,B,d,P.stock_status,y]);const A=Object(r.useCallback)(e=>{c||(e&&V(d),n&&(e=>{if(0===e.length){const e=Object(N.removeQueryArgs)(window.location.href,H);return void(e!==window.location.href&&(window.location.href=e))}const t=Object(N.addQueryArgs)(window.location.href,{[H]:e.join(",")});t!==window.location.href&&(window.location.href=t)})(d))},[c,V,d,n]);Object(r.useEffect)(()=>{t.showFilterButton||A(d)},[t.showFilterButton,d,A]);const z=Object(r.useMemo)(()=>T,[T]),q=Object(j.a)(z),Q=Object(w.a)(q);Object(r.useEffect)(()=>{S()(Q,q)||S()(d,q)||p(q)},[d,q,Q]),Object(r.useEffect)(()=>{n&&p(d)},[n,d]),Object(r.useEffect)(()=>{!o&&n&&(V(F(b,H)),l(!0))},[b,n,V,o,l]);const Y=Object(r.useCallback)(e=>{const t=e=>{const{name:t}=O.find(t=>t.value===e);return t},c=e=>{let{filterAdded:c,filterRemoved:n}=e;const o=c?t(c):null,r=n?t(n):null;o?Object(f.speak)(Object(s.sprintf)(
/* translators: %s stock statuses (for example: 'instock'...) */
Object(s.__)("%s filter added.","woo-gutenberg-products-block"),o)):r&&Object(f.speak)(Object(s.sprintf)(
/* translators: %s stock statuses (for example:'instock'...) */
Object(s.__)("%s filter removed.","woo-gutenberg-products-block"),r))},n=d.includes(e),o=d.filter(t=>t!==e);n?c({filterRemoved:e}):(o.push(e),o.sort(),c({filterAdded:e})),p(o)},[d,O]);if(0===O.length)return null;const I="h"+t.headingLevel,D=!t.isPreview&&!b,K=!t.isPreview&&R;return Object(v.getSettingWithCoercion)("has_filterable_products",!1,x.a)?Object(r.createElement)(r.Fragment,null,!c&&t.heading&&Object(r.createElement)(I,{className:"wc-block-stock-filter__title"},t.heading),Object(r.createElement)("div",{className:"wc-block-stock-filter"},Object(r.createElement)(k.a,{className:"wc-block-stock-filter-list",options:O,checked:d,onChange:Y,isLoading:D,isDisabled:K}),t.showFilterButton&&Object(r.createElement)(_.a,{className:"wc-block-stock-filter__button",disabled:D||K,onClick:()=>A(d)}))):null};c(424);var M=Object(p.withSpokenMessages)(e=>{let{attributes:t,setAttributes:c}=e;const{className:n,heading:o,headingLevel:l,showCounts:a,showFilterButton:u}=t;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(d.InspectorControls,{key:"inspector"},Object(r.createElement)(p.PanelBody,{title:Object(s.__)("Content","woo-gutenberg-products-block")},Object(r.createElement)(p.ToggleControl,{label:Object(s.__)("Product count","woo-gutenberg-products-block"),help:a?Object(s.__)("Product count is visible.","woo-gutenberg-products-block"):Object(s.__)("Product count is hidden.","woo-gutenberg-products-block"),checked:a,onChange:()=>c({showCounts:!a})}),Object(r.createElement)("p",null,Object(s.__)("Heading Level","woo-gutenberg-products-block")),Object(r.createElement)(O.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:l,onChange:e=>c({headingLevel:e})})),Object(r.createElement)(p.PanelBody,{title:Object(s.__)("Block Settings","woo-gutenberg-products-block")},Object(r.createElement)(p.ToggleControl,{label:Object(s.__)("Filter button","woo-gutenberg-products-block"),help:u?Object(s.__)("Products will only update when the button is pressed.","woo-gutenberg-products-block"):Object(s.__)("Products will update as options are selected.","woo-gutenberg-products-block"),checked:u,onChange:e=>c({showFilterButton:e})}))),Object(r.createElement)("div",{className:b()("wc-block-stock-filter",n)},Object(r.createElement)(m.a,{className:"wc-block-stock-filter__title",headingLevel:l,heading:o,onChange:e=>c({heading:e})}),Object(r.createElement)(p.Disabled,null,Object(r.createElement)(V,{attributes:t,isEditor:!0}))))});Object(l.registerBlockType)("woocommerce/stock-filter",{title:Object(s.__)("Filter Products by Stock","woo-gutenberg-products-block"),icon:{src:Object(r.createElement)(a.a,{icon:u.a,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[Object(s.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(s.__)("Allow customers to filter the grid by products stock status. Works in combination with the All Products block.","woo-gutenberg-products-block"),supports:{html:!1,multiple:!1},example:{attributes:{isPreview:!0}},attributes:{heading:{type:"string",default:Object(s.__)("Filter by stock status","woo-gutenberg-products-block")},headingLevel:{type:"number",default:3},showCounts:{type:"boolean",default:!0},showFilterButton:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},edit:M,save(e){let{attributes:t}=e;const{className:c,showCounts:n,heading:s,headingLevel:l,showFilterButton:a}=t,u={"data-show-counts":n,"data-heading":s,"data-heading-level":l};return a&&(u["data-show-filter-button"]=a),Object(r.createElement)("div",o()({className:b()("is-loading",c)},u),Object(r.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-stock-filter__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},50:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(0);const o=Object(n.createContext)("page"),r=()=>Object(n.useContext)(o);o.Provider},7:function(e,t){e.exports=window.lodash},75:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return d})),c.d(t,"c",(function(){return p}));var n=c(18),o=c(9),r=c(0),s=c(25),l=c.n(s),a=c(49),u=c(110),i=c(50);const b=e=>{const t=Object(i.a)();e=e||t;const c=Object(o.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:s}=Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[c,Object(r.useCallback)(t=>{s(e,t)},[e,s])]},d=(e,t,c)=>{const s=Object(i.a)();c=c||s;const l=Object(o.useSelect)(o=>o(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(c,e,t),[c,e]),{setQueryValue:a}=Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[l,Object(r.useCallback)(t=>{a(c,e,t)},[c,e,a])]},p=(e,t)=>{const c=Object(i.a)();t=t||c;const[n,o]=b(t),s=Object(a.a)(n),d=Object(a.a)(e),p=Object(u.a)(d),O=Object(r.useRef)(!1);return Object(r.useEffect)(()=>{l()(p,d)||(o(Object.assign({},s,d)),O.current=!0)},[s,d,p,o]),O.current?[n,o]:[e,o]}},8:function(e,t){e.exports=window.React},9:function(e,t){e.exports=window.wp.data}});