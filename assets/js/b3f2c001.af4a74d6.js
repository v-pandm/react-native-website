(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[741],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,s=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(s,l(l({ref:t},c),{},{components:n})):a.createElement(s,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59683:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(29603),r=n(50120),i=(n(27378),n(35318)),l={id:"viewtoken",title:"ViewToken \u5bf9\u8c61"},o=void 0,p={unversionedId:"viewtoken",id:"version-0.66/viewtoken",isDocsHomePage:!1,title:"ViewToken \u5bf9\u8c61",description:"ViewToken object is returned as one of properties in the onViewableItemsChanged callback, for example in FlatList component. It is exported by ViewabilityHelper.js.",source:"@site/versioned_docs/version-0.66/viewtoken.md",sourceDirName:".",slug:"/viewtoken",permalink:"/docs/viewtoken",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/viewtoken.md",tags:[],version:"0.66",frontMatter:{id:"viewtoken",title:"ViewToken \u5bf9\u8c61"},sidebar:"version-0.66/\u7ec4\u4ef6",previous:{title:"\u77e9\u5f62\u533a\u57df\u5bf9\u8c61",permalink:"/docs/rect"}},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u5c5e\u6027\u4e0e\u503c",id:"\u5c5e\u6027\u4e0e\u503c",children:[{value:"<code>index</code>",id:"index",children:[]},{value:"<code>isViewable</code>",id:"isviewable",children:[]},{value:"<code>item</code>",id:"item",children:[]},{value:"<code>key</code>",id:"key",children:[]},{value:"<code>section</code>",id:"section",children:[]}]},{value:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ViewToken")," object is returned as one of properties in the ",(0,i.kt)("inlineCode",{parentName:"p"},"onViewableItemsChanged")," callback, for example in ",(0,i.kt)("a",{parentName:"p",href:"flatlist"},"FlatList")," component. It is exported by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/Lists/ViewabilityHelper.js"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewabilityHelper.js")),"."),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  item: { key: "key-12" },\n  key: "key-12",\n  index: 11,\n  isViewable: true\n}\n')),(0,i.kt)("h2",{id:"\u5c5e\u6027\u4e0e\u503c"},"\u5c5e\u6027\u4e0e\u503c"),(0,i.kt)("h3",{id:"index"},(0,i.kt)("inlineCode",{parentName:"h3"},"index")),(0,i.kt)("p",null,"Unique numeric identifier assigned to the data element."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h3",{id:"isviewable"},(0,i.kt)("inlineCode",{parentName:"h3"},"isViewable")),(0,i.kt)("p",null,"Specifies if at least some part of list element is visible in the viewport."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h3",{id:"item"},(0,i.kt)("inlineCode",{parentName:"h3"},"item")),(0,i.kt)("p",null,"Item data"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h3",{id:"key"},(0,i.kt)("inlineCode",{parentName:"h3"},"key")),(0,i.kt)("p",null,"Key identifier assigned of the data element extracted to the top level."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h3",{id:"section"},(0,i.kt)("inlineCode",{parentName:"h3"},"section")),(0,i.kt)("p",null,"Item section data when used with ",(0,i.kt)("inlineCode",{parentName:"p"},"SectionList"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h2",{id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"},"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"flatlist"},(0,i.kt)("inlineCode",{parentName:"a"},"FlatList"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sectionlist"},(0,i.kt)("inlineCode",{parentName:"a"},"SectionList"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"virtualizedlist"},(0,i.kt)("inlineCode",{parentName:"a"},"VirtualizedList")))))}u.isMDXComponent=!0}}]);