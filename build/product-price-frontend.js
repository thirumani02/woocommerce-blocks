(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[62],{102:function(e,t,c){"use strict";var r=c(11),n=c.n(r),a=c(0),l=c(138),s=c(4),i=c.n(s);c(192);const o=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:c,currency:r,onValueChange:s,displayType:u="text",...p}=e;const m="string"==typeof c?parseInt(c,10):c;if(!Number.isFinite(m))return null;const b=m/10**r.minorUnit;if(!Number.isFinite(b))return null;const d=i()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),y={...p,...o(r),value:void 0,currency:void 0,onValueChange:void 0},f=s?e=>{const t=+e.value*10**r.minorUnit;s(t)}:()=>{};return Object(a.createElement)(l.a,n()({className:d,displayType:u},y,{value:b,onValueChange:f}))}},114:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c(103);var r=c(43);const n=()=>r.m>1},136:function(e,t,c){"use strict";c.d(t,"c",(function(){return i})),c.d(t,"d",(function(){return o})),c.d(t,"b",(function(){return u})),c.d(t,"a",(function(){return p}));var r=c(70),n=c(114),a=c(51),l=c(61);const s=e=>Object(a.a)(e)?JSON.parse(e)||{}:Object(l.a)(e)?e:{},i=e=>{if(!Object(n.a)()||"function"!=typeof r.__experimentalGetSpacingClassesAndStyles)return{style:{}};const t=Object(l.a)(e)?e:{},c=s(t.style);return Object(r.__experimentalGetSpacingClassesAndStyles)({...t,style:c})},o=e=>{const t=Object(l.a)(e)?e:{},c=s(t.style),r=Object(l.a)(c.typography)?c.typography:{};return{style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,textTransform:r.textTransform,fontFamily:t.fontFamily}}},u=e=>{if(!Object(n.a)())return{className:"",style:{}};const t=Object(l.a)(e)?e:{},c=s(t.style);return Object(r.__experimentalUseColorProps)({...t,style:c})},p=e=>{if(!Object(n.a)())return{className:"",style:{}};const t=Object(l.a)(e)?e:{},c=s(t.style);return Object(r.__experimentalUseBorderProps)({...t,style:c})}},192:function(e,t){},277:function(e,t,c){"use strict";var r=c(0),n=c(1),a=c(102),l=c(4),s=c.n(l),i=c(37);c(278);const o=e=>{let{currency:t,maxPrice:c,minPrice:l,priceClassName:o,priceStyle:u={}}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"screen-reader-text"},Object(n.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(n.__)("Price between %1$s and %2$s","woo-gutenberg-products-block"),Object(i.formatPrice)(l),Object(i.formatPrice)(c))),Object(r.createElement)("span",{"aria-hidden":!0},Object(r.createElement)(a.a,{className:s()("wc-block-components-product-price__value",o),currency:t,value:l,style:u})," — ",Object(r.createElement)(a.a,{className:s()("wc-block-components-product-price__value",o),currency:t,value:c,style:u})))},u=e=>{let{currency:t,regularPriceClassName:c,regularPriceStyle:l,regularPrice:i,priceClassName:o,priceStyle:u,price:p}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"screen-reader-text"},Object(n.__)("Previous price:","woo-gutenberg-products-block")),Object(r.createElement)(a.a,{currency:t,renderText:e=>Object(r.createElement)("del",{className:s()("wc-block-components-product-price__regular",c),style:l},e),value:i}),Object(r.createElement)("span",{className:"screen-reader-text"},Object(n.__)("Discounted price:","woo-gutenberg-products-block")),Object(r.createElement)(a.a,{currency:t,renderText:e=>Object(r.createElement)("ins",{className:s()("wc-block-components-product-price__value","is-discounted",o),style:u},e),value:p}))};t.a=e=>{let{align:t,className:c,currency:n,format:l="<price/>",maxPrice:i,minPrice:p,price:m,priceClassName:b,priceStyle:d,regularPrice:y,regularPriceClassName:f,regularPriceStyle:O}=e;const j=s()(c,"price","wc-block-components-product-price",{["wc-block-components-product-price--align-"+t]:t});l.includes("<price/>")||(l="<price/>",console.error("Price formats need to include the `<price/>` tag."));const g=y&&m!==y;let _=Object(r.createElement)("span",{className:s()("wc-block-components-product-price__value",b)});return g?_=Object(r.createElement)(u,{currency:n,price:m,priceClassName:b,priceStyle:d,regularPrice:y,regularPriceClassName:f,regularPriceStyle:O}):void 0!==p&&void 0!==i?_=Object(r.createElement)(o,{currency:n,maxPrice:i,minPrice:p,priceClassName:b,priceStyle:d}):m&&(_=Object(r.createElement)(a.a,{className:s()("wc-block-components-product-price__value",b),currency:n,value:m,style:d})),Object(r.createElement)("span",{className:j},Object(r.createInterpolateElement)(l,{price:_}))}},278:function(e,t){},399:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(4),a=c.n(n),l=c(277),s=c(37),i=c(42),o=c(120),u=c(136);t.default=Object(o.withProductDataContext)(e=>{var t,c;const{className:n,textAlign:o}=e,{parentClassName:p}=Object(i.useInnerBlockLayoutContext)(),{product:m}=Object(i.useProductDataContext)(),b=Object(u.b)(e),d=Object(u.d)(e),y=a()("wc-block-components-product-price",n,b.className,{[p+"__product-price"]:p}),f={...d.style,...b.style};if(!m.id)return Object(r.createElement)(l.a,{align:o,className:y});const O=m.prices,j=Object(s.getCurrencyFromPriceResponse)(O),g=O.price!==O.regular_price,_=a()({[p+"__product-price__value"]:p,[p+"__product-price__value--on-sale"]:g});return Object(r.createElement)(l.a,{align:o,className:y,priceStyle:f,regularPriceStyle:f,priceClassName:_,currency:j,price:O.price,minPrice:null==O||null===(t=O.price_range)||void 0===t?void 0:t.min_amount,maxPrice:null==O||null===(c=O.price_range)||void 0===c?void 0:c.max_amount,regularPrice:O.regular_price,regularPriceClassName:a()({[p+"__product-price__regular"]:p})})})},61:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return n}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function n(e,t){return r(e)&&t in e}}}]);