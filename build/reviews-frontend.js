!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=203)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},103:function(e,t,r){"use strict";var n=r(0),o=(r(8),r(4)),s=r.n(o),i=r(21),c=r(12);r(115),t.a=Object(c.withInstanceId)(e=>{let{className:t,instanceId:r,label:o,onChange:c,options:a,screenReaderLabel:l,readOnly:p,value:u}=e;const d="wc-block-components-sort-select__select-"+r;return Object(n.createElement)("div",{className:s()("wc-block-sort-select","wc-block-components-sort-select",t)},Object(n.createElement)(i.a,{label:o,screenReaderLabel:l,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:d}}),Object(n.createElement)("select",{id:d,className:"wc-block-sort-select__select wc-block-components-sort-select__select",onChange:c,readOnly:p,value:u},a.map(e=>Object(n.createElement)("option",{key:e.key,value:e.key},e.label))))})},11:function(e,t){e.exports=window.wp.isShallowEqual},115:function(e,t){},12:function(e,t){e.exports=window.wp.compose},137:function(e,t,r){function n(e){for(var t,r,n=[],o=0;o<rowCut.length;o++)(t=rowCut.substring(o).match(/^&[a-z0-9#]+;/))?(r=t[0],n.push(r),o+=r.length-1):n.push(rowCut[o]);return n}e.exports&&(e.exports=function(e,t){for(var r,o,s,i,c,a=(t=t||{}).limit||100,l=void 0===t.preserveTags||t.preserveTags,p=void 0!==t.wordBreak&&t.wordBreak,u=t.suffix||"...",d=t.moreLink||"",b=t.moreText||"»",w=t.preserveWhiteSpace||!1,m=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),g=0,h=[],v=!1,f=0;f<m.length;f++)if(r=m[f],rowCut=w?r:r.replace(/[ ]+/g," "),r.length){var _=n(rowCut);if("<"!==r[0])if(g>=a)r="";else if(g+_.length>=a){if(" "===_[(o=a-g)-1])for(;o&&" "===_[(o-=1)-1];);else s=_.slice(o).indexOf(" "),p||(-1!==s?o+=s:o=r.length);r=_.slice(0,o).join("")+u,d&&(r+='<a href="'+d+'" style="display:inline">'+b+"</a>"),g=a,v=!0}else g+=_.length;else if(l){if(g>=a)if(c=(i=r.match(/[a-zA-Z]+/))?i[0]:"")if("</"!==r.substring(0,2))h.push(c),r="";else{for(;h[h.length-1]!==c&&h.length;)h.pop();h.length&&(r=""),h.pop()}else r=""}else r="";m[f]=r}return{html:m.join("\n").replace(/\n/g,""),more:v}})},15:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},16:function(e,t,r){"use strict";var n=r(15),o=r.n(n),s=r(0),i=r(3),c=r(1),a=r(65),l=e=>{let{imageUrl:t=a.l+"/block-error.svg",header:r=Object(c.__)("Oops!","woo-gutenberg-products-block"),text:n=Object(c.__)("There was an error loading the content.","woo-gutenberg-products-block"),errorMessage:o,errorMessagePrefix:i=Object(c.__)("Error:","woo-gutenberg-products-block"),button:l}=e;return Object(s.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&Object(s.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),Object(s.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&Object(s.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),n&&Object(s.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},n),o&&Object(s.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},i?i+" ":"",o),l&&Object(s.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},l)))};r(37);class p extends i.Component{constructor(){super(...arguments),o()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(s.createElement)(s.Fragment,null,Object(s.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:t,showErrorMessage:r=!0,text:n,errorMessagePrefix:o,renderError:i,button:c}=this.props,{errorMessage:a,hasError:p}=this.state;return p?"function"==typeof i?i({errorMessage:a}):Object(s.createElement)(l,{errorMessage:r?a:null,header:e,imageUrl:t,text:n,errorMessagePrefix:o,button:c}):this.props.children}}t.a=p},171:function(e,t){},172:function(e,t){},173:function(e,t){},174:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},203:function(e,t,r){"use strict";r.r(t);var n=r(53),o=r(0),s=r(1),i=r(23),c=r(3),a=(r(8),r(27)),l=r.n(a),p=r(4),u=r.n(p),d=r(2),b=r(21);r(174);const w=e=>{let{onClick:t,label:r,screenReaderLabel:n}=e;return Object(o.createElement)("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},Object(o.createElement)("button",{className:"wp-block-button__link",onClick:t},Object(o.createElement)(b.a,{label:r,screenReaderLabel:n})))};w.defaultProps={label:Object(s.__)("Load more","woo-gutenberg-products-block")};var m=w,g=r(103);r(171);var h=e=>{let{onChange:t,readOnly:r,value:n}=e;return Object(o.createElement)(g.a,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",label:Object(s.__)("Order by","woo-gutenberg-products-block"),onChange:t,options:[{key:"most-recent",label:Object(s.__)("Most recent","woo-gutenberg-products-block")},{key:"highest-rating",label:Object(s.__)("Highest rating","woo-gutenberg-products-block")},{key:"lowest-rating",label:Object(s.__)("Lowest rating","woo-gutenberg-products-block")}],readOnly:r,screenReaderLabel:Object(s.__)("Order reviews by","woo-gutenberg-products-block"),value:n})},v=r(15),f=r.n(v),_=r(137),y=r.n(_);const O=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";const n=y()(e,{suffix:r,limit:t});return n.html},k=(e,t,r)=>(t<=r?e.start=e.middle+1:e.end=e.middle-1,e),j=(e,t,r,n)=>{const o=((e,t,r)=>{let n={start:0,middle:0,end:e.length};for(;n.start<=n.end;)n.middle=Math.floor((n.start+n.end)/2),t.innerHTML=O(e,n.middle),n=k(n,t.clientHeight,r);return n.middle})(e,t,r);return O(e,o-n.length,n)},E={className:"read-more-content",ellipsis:"&hellip;",lessText:Object(s.__)("Read less","woo-gutenberg-products-block"),maxLines:3,moreText:Object(s.__)("Read more","woo-gutenberg-products-block")};class R extends c.Component{constructor(e){super(e),this.state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},this.reviewContent=Object(c.createRef)(),this.reviewSummary=Object(c.createRef)(),this.getButton=this.getButton.bind(this),this.onClick=this.onClick.bind(this)}componentDidMount(){if(this.props.children){const{maxLines:e,ellipsis:t}=this.props;if(!this.reviewSummary.current||!this.reviewContent.current)return;const r=(this.reviewSummary.current.clientHeight+1)*e+1,n=this.reviewContent.current.clientHeight+1>r;this.setState({clampEnabled:n}),n&&this.setState({summary:j(this.reviewContent.current.innerHTML,this.reviewSummary.current,r,t)})}}getButton(){const{isExpanded:e}=this.state,{className:t,lessText:r,moreText:n}=this.props,s=e?r:n;if(s)return Object(o.createElement)("a",{href:"#more",className:t+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},s)}onClick(e){e.preventDefault();const{isExpanded:t}=this.state;this.setState({isExpanded:!t})}render(){const{className:e}=this.props,{content:t,summary:r,clampEnabled:n,isExpanded:s}=this.state;return t?!1===n?Object(o.createElement)("div",{className:e},Object(o.createElement)("div",{ref:this.reviewContent},t)):Object(o.createElement)("div",{className:e},(!s||null===n)&&Object(o.createElement)("div",{ref:this.reviewSummary,"aria-hidden":s,dangerouslySetInnerHTML:{__html:r}}),(s||null===n)&&Object(o.createElement)("div",{ref:this.reviewContent,"aria-hidden":!s},t),this.getButton()):null}}f()(R,"defaultProps",E);var S=R;r(173);var x=e=>{let{attributes:t,review:r={}}=e;const{imageType:n,showReviewDate:i,showReviewerName:c,showReviewImage:a,showReviewRating:l,showReviewContent:p,showProductName:d}=t,{rating:b}=r,w=!Object.keys(r).length>0,m=Number.isFinite(b)&&l;return Object(o.createElement)("li",{className:u()("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":w,"wc-block-components-review-list-item__item--has-image":a}),"aria-hidden":w},(d||i||c||a||m)&&Object(o.createElement)("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},a&&function(e,t,r){var n,i;return r||!e?Object(o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"}):Object(o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===t?Object(o.createElement)("img",{"aria-hidden":"true",alt:(null===(n=e.product_image)||void 0===n?void 0:n.alt)||"",src:(null===(i=e.product_image)||void 0===i?void 0:i.thumbnail)||""}):Object(o.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[96]||""}),e.verified&&Object(o.createElement)("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:Object(s.__)("Verified buyer","woo-gutenberg-products-block")},Object(s.__)("Verified buyer","woo-gutenberg-products-block")))}(r,n,w),(d||c||m||i)&&Object(o.createElement)("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},m&&function(e){const{rating:t}=e,r={width:t/5*100+"%"},n=Object(s.sprintf)(
/* translators: %f is referring to the average rating value */
Object(s.__)("Rated %f out of 5","woo-gutenberg-products-block"),t),i={__html:Object(s.sprintf)(
/* translators: %s is referring to the average rating value */
Object(s.__)("Rated %s out of 5","woo-gutenberg-products-block"),Object(s.sprintf)('<strong class="rating">%f</strong>',t))};return Object(o.createElement)("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},Object(o.createElement)("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":n},Object(o.createElement)("span",{style:r,dangerouslySetInnerHTML:i})))}(r),d&&function(e){return Object(o.createElement)("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},Object(o.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(r),c&&function(e){const{reviewer:t=""}=e;return Object(o.createElement)("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},t)}(r),i&&function(e){const{date_created:t,formatted_date_created:r}=e;return Object(o.createElement)("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:t},r)}(r))),p&&function(e){return Object(o.createElement)(S,{maxLines:10,moreText:Object(s.__)("Read full review","woo-gutenberg-products-block"),lessText:Object(s.__)("Hide full review","woo-gutenberg-products-block"),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},Object(o.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(r))};r(172);var P=e=>{let{attributes:t,reviews:r}=e;const n=Object(d.getSetting)("showAvatars",!0),s=Object(d.getSetting)("reviewRatingsEnabled",!0),i=(n||"product"===t.imageType)&&t.showReviewImage,c=s&&t.showReviewRating,a={...t,showReviewImage:i,showReviewRating:c};return Object(o.createElement)("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===r.length?Object(o.createElement)(x,{attributes:a}):r.map((e,t)=>Object(o.createElement)(x,{key:e.id||t,attributes:a,review:e})))},T=r(10),C=r.n(T),N=r(11),A=r.n(N),L=r(88),M=(e=>{class t extends c.Component{constructor(){super(...arguments),f()(this,"isPreview",!!this.props.attributes.previewReviews),f()(this,"delayedAppendReviews",this.props.delayFunction(this.appendReviews)),f()(this,"isMounted",!1),f()(this,"state",{error:null,loading:!0,reviews:this.isPreview?this.props.attributes.previewReviews:[],totalReviews:this.isPreview?this.props.attributes.previewReviews.length:0}),f()(this,"setError",async e=>{if(!this.isMounted)return;const{onReviewsLoadError:t}=this.props,r=await Object(L.a)(e);this.setState({reviews:[],loading:!1,error:r}),t(r)})}componentDidMount(){this.isMounted=!0,this.replaceReviews()}componentDidUpdate(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}shouldReplaceReviews(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!A()(e.categoryIds,t.categoryIds)}componentWillUnmount(){this.isMounted=!1,this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}getArgs(e){const{categoryIds:t,order:r,orderby:n,productId:o,reviewsToDisplay:s}=this.props,i={order:r,orderby:n,per_page:s-e,offset:e};return t&&t.length&&(i.category_id=Array.isArray(t)?t.join(","):t),o&&(i.product_id=o),i}replaceReviews(){if(this.isPreview)return;const{onReviewsReplaced:e}=this.props;this.updateListOfReviews().then(e)}appendReviews(){if(this.isPreview)return;const{onReviewsAppended:e,reviewsToDisplay:t}=this.props,{reviews:r}=this.state;t<=r.length||this.updateListOfReviews(r).then(e)}updateListOfReviews(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const{reviewsToDisplay:t}=this.props,{totalReviews:r}=this.state,n=Math.min(r,t)-e.length;return this.setState({loading:!0,reviews:e.concat(Array(n).fill({}))}),(o=this.getArgs(e.length),l()({path:"/wc/store/products/reviews?"+Object.entries(o).map(e=>e.join("=")).join("&"),parse:!1}).then(e=>e.json().then(t=>({reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)})))).then(t=>{let{reviews:r,totalReviews:n}=t;return this.isMounted&&this.setState({reviews:e.filter(e=>Object.keys(e).length).concat(r),totalReviews:n,loading:!1,error:null}),{newReviews:r}}).catch(this.setError);var o}render(){const{reviewsToDisplay:t}=this.props,{error:r,loading:n,reviews:s,totalReviews:i}=this.state;return Object(o.createElement)(e,C()({},this.props,{error:r,isLoading:n,reviews:s.slice(0,t),totalReviews:i}))}}f()(t,"defaultProps",{delayFunction:e=>e,onReviewsAppended:()=>{},onReviewsLoadError:()=>{},onReviewsReplaced:()=>{}});const{displayName:r=e.name||"Component"}=e;return t.displayName=`WithReviews( ${r} )`,t})(e=>{let{attributes:t,onAppendReviews:r,onChangeOrderby:n,reviews:i,sortSelectValue:c,totalReviews:a}=e;if(0===i.length)return null;const l=Object(d.getSetting)("reviewRatingsEnabled",!0);return Object(o.createElement)(o.Fragment,null,"false"!==t.showOrderby&&l&&Object(o.createElement)(h,{value:c,onChange:n}),Object(o.createElement)(P,{attributes:t,reviews:i}),"false"!==t.showLoadMore&&a>i.length&&Object(o.createElement)(m,{onClick:r,screenReaderLabel:Object(s.__)("Load more reviews","woo-gutenberg-products-block")}))});class I extends c.Component{constructor(){super(...arguments);const{attributes:e}=this.props;this.state={orderby:e.orderby,reviewsToDisplay:parseInt(e.reviewsOnPageLoad,10)},this.onAppendReviews=this.onAppendReviews.bind(this),this.onChangeOrderby=this.onChangeOrderby.bind(this)}onAppendReviews(){const{attributes:e}=this.props,{reviewsToDisplay:t}=this.state;this.setState({reviewsToDisplay:t+parseInt(e.reviewsOnLoadMore,10)})}onChangeOrderby(e){const{attributes:t}=this.props;this.setState({orderby:e.target.value,reviewsToDisplay:parseInt(t.reviewsOnPageLoad,10)})}onReviewsAppended(e){let{newReviews:t}=e;Object(i.speak)(Object(s.sprintf)(
/* translators: %d is the count of reviews loaded. */
Object(s._n)("%d review loaded.","%d reviews loaded.",t.length,"woo-gutenberg-products-block"),t.length))}onReviewsReplaced(){Object(i.speak)(Object(s.__)("Reviews list updated.","woo-gutenberg-products-block"))}onReviewsLoadError(){Object(i.speak)(Object(s.__)("There was an error loading the reviews.","woo-gutenberg-products-block"))}render(){const{attributes:e}=this.props,{categoryIds:t,productId:r}=e,{reviewsToDisplay:n}=this.state,{order:s,orderby:i}=(e=>{if(Object(d.getSetting)("reviewRatingsEnabled",!0)){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}})(this.state.orderby);return Object(o.createElement)(M,{attributes:e,categoryIds:t,onAppendReviews:this.onAppendReviews,onChangeOrderby:this.onChangeOrderby,onReviewsAppended:this.onReviewsAppended,onReviewsLoadError:this.onReviewsLoadError,onReviewsReplaced:this.onReviewsReplaced,order:s,orderby:i,productId:r,reviewsToDisplay:n,sortSelectValue:this.state.orderby})}}var B=I;Object(n.a)({selector:"\n\t.wp-block-woocommerce-all-reviews,\n\t.wp-block-woocommerce-reviews-by-product,\n\t.wp-block-woocommerce-reviews-by-category\n",Block:B,getProps:e=>({attributes:{showReviewDate:e.classList.contains("has-date"),showReviewerName:e.classList.contains("has-name"),showReviewImage:e.classList.contains("has-image"),showReviewRating:e.classList.contains("has-rating"),showReviewContent:e.classList.contains("has-content"),showProductName:e.classList.contains("has-product-name")}})})},21:function(e,t,r){"use strict";var n=r(0),o=r(4),s=r.n(o);t.a=e=>{let t,{label:r,screenReaderLabel:o,wrapperElement:i,wrapperProps:c={}}=e;const a=null!=r,l=null!=o;return!a&&l?(t=i||"span",c={...c,className:s()(c.className,"screen-reader-text")},Object(n.createElement)(t,c,o)):(t=i||n.Fragment,a&&l&&r!==o?Object(n.createElement)(t,c,Object(n.createElement)("span",{"aria-hidden":"true"},r),Object(n.createElement)("span",{className:"screen-reader-text"},o)):Object(n.createElement)(t,c,r))}},23:function(e,t){e.exports=window.wp.a11y},27:function(e,t){e.exports=window.wp.apiFetch},3:function(e,t){e.exports=window.React},37:function(e,t){},4:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},42:function(e,t,r){"use strict";var n=r(43);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,s,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return r.PropTypes=r,r}},43:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},53:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(10),o=r.n(n),s=r(0),i=r(16);const c=[".wp-block-woocommerce-cart"],a=e=>{let{Block:t,containers:r,getProps:n=(()=>({})),getErrorBoundaryProps:c=(()=>({}))}=e;0!==r.length&&Array.prototype.forEach.call(r,(e,r)=>{const a=n(e,r),l=c(e,r),p={...e.dataset,...a.attributes||{}};(e=>{let{Block:t,container:r,attributes:n={},props:c={},errorBoundaryProps:a={}}=e;Object(s.render)(Object(s.createElement)(i.a,a,Object(s.createElement)(s.Suspense,{fallback:Object(s.createElement)("div",{className:"wc-block-placeholder"})},t&&Object(s.createElement)(t,o()({},c,{attributes:n})))),r,()=>{r.classList&&r.classList.remove("is-loading")})})({Block:t,container:e,props:a,attributes:p,errorBoundaryProps:l})})},l=e=>{const t=document.body.querySelectorAll(c.join(",")),{Block:r,getProps:n,getErrorBoundaryProps:o,selector:s}=e;(e=>{let{Block:t,getProps:r,getErrorBoundaryProps:n,selector:o,wrappers:s}=e;const i=document.body.querySelectorAll(o);s&&s.length>0&&Array.prototype.filter.call(i,e=>!((e,t)=>Array.prototype.some.call(t,t=>t.contains(e)&&!t.isSameNode(e)))(e,s)),a({Block:t,containers:i,getProps:r,getErrorBoundaryProps:n})})({Block:r,getProps:n,getErrorBoundaryProps:o,selector:s,wrappers:t}),Array.prototype.forEach.call(t,t=>{t.addEventListener("wc-blocks_render_blocks_frontend",()=>{(e=>{let{Block:t,getProps:r,getErrorBoundaryProps:n,selector:o,wrapper:s}=e;const i=s.querySelectorAll(o);a({Block:t,containers:i,getProps:r,getErrorBoundaryProps:n})})({...e,wrapper:t})})})}},65:function(e,t,r){"use strict";r.d(t,"n",(function(){return s})),r.d(t,"l",(function(){return i})),r.d(t,"k",(function(){return c})),r.d(t,"m",(function(){return a})),r.d(t,"i",(function(){return l})),r.d(t,"d",(function(){return p})),r.d(t,"f",(function(){return u})),r.d(t,"j",(function(){return d})),r.d(t,"c",(function(){return b})),r.d(t,"e",(function(){return w})),r.d(t,"g",(function(){return m})),r.d(t,"a",(function(){return g})),r.d(t,"h",(function(){return h})),r.d(t,"b",(function(){return v}));var n,o=r(2);const s=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=s.pluginUrl+"images/",c=s.pluginUrl+"build/",a=s.buildPhase,l=null===(n=o.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,p=(o.STORE_PAGES.checkout.id,o.STORE_PAGES.checkout.permalink),u=o.STORE_PAGES.privacy.permalink,d=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),b=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id,o.STORE_PAGES.cart.permalink),w=o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),m=Object(o.getSetting)("shippingCountries",{}),g=Object(o.getSetting)("allowedCountries",{}),h=Object(o.getSetting)("shippingStates",{}),v=Object(o.getSetting)("allowedStates",{})},8:function(e,t,r){e.exports=r(42)()},88:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));var n=r(1);const o=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}},s=e=>{if(e.data&&"rest_invalid_param"===e.code){const t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(n.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}}});