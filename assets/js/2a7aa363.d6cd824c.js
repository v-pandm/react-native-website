(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[20129],{35318:function(t,n,e){"use strict";e.d(n,{Zo:function(){return s},kt:function(){return u}});var r=e(27378);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){if(null==t)return{};var e,r,l=function(t,n){if(null==t)return{};var e,r,l={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var c=r.createContext({}),p=function(t){var n=r.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},s=function(t){var n=p(t.components);return r.createElement(c.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(t,n){var e=t.components,l=t.mdxType,i=t.originalType,c=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),k=p(e),u=l,m=k["".concat(c,".").concat(u)]||k[u]||d[u]||i;return e?r.createElement(m,o(o({ref:n},s),{},{components:e})):r.createElement(m,o({ref:n},s))}));function u(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var i=e.length,o=new Array(i);o[0]=k;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=t,a.mdxType="string"==typeof t?t:l,o[1]=a;for(var p=2;p<i;p++)o[p]=e[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}k.displayName="MDXCreateElement"},4788:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=e(29603),l=e(50120),i=(e(27378),e(35318)),o={id:"components-and-apis",title:"\u6838\u5fc3\u7ec4\u4ef6\u548cAPI"},a=void 0,c={unversionedId:"components-and-apis",id:"version-0.65/components-and-apis",isDocsHomePage:!1,title:"\u6838\u5fc3\u7ec4\u4ef6\u548cAPI",description:"React Native \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5185\u7f6e\u7684\u6838\u5fc3\u7ec4\u4ef6\u4f9b\u4f60\u4f7f\u7528\u3002\u4f60\u53ef\u4ee5\u5728\u7f51\u7ad9\u7684\u5de6\u4fa7\u770b\u5230\u7ec4\u4ef6\u7684\u5b8c\u6574\u5217\u8868\u3002\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u4ece\u54ea\u770b\u8d77\uff0c\u90a3\u4e48\u53ef\u4ee5\u5148\u770b\u4e00\u4e0b\u4e0b\u9762\u8fd9\u4e2a\u7b80\u5355\u7684\u5206\u7c7b\uff1a",source:"@site/versioned_docs/version-0.65/components-and-apis.md",sourceDirName:".",slug:"/components-and-apis",permalink:"/docs/0.65/components-and-apis",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/components-and-apis.md",tags:[],version:"0.65",frontMatter:{id:"components-and-apis",title:"\u6838\u5fc3\u7ec4\u4ef6\u548cAPI"},sidebar:"version-0.65/\u7ec4\u4ef6",next:{title:"ActivityIndicator",permalink:"/docs/0.65/activityindicator"}},p=[{value:"\u57fa\u7840\u7ec4\u4ef6",id:"\u57fa\u7840\u7ec4\u4ef6",children:[]},{value:"\u4ea4\u4e92\u63a7\u4ef6",id:"\u4ea4\u4e92\u63a7\u4ef6",children:[]},{value:"\u5217\u8868\u89c6\u56fe",id:"\u5217\u8868\u89c6\u56fe",children:[]},{value:"iOS \u72ec\u6709\u7684\u7ec4\u4ef6\u548c API",id:"ios-\u72ec\u6709\u7684\u7ec4\u4ef6\u548c-api",children:[]},{value:"Android \u72ec\u6709\u7684\u7ec4\u4ef6\u548c API",id:"android-\u72ec\u6709\u7684\u7ec4\u4ef6\u548c-api",children:[]},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[]}],s={toc:p};function d(t){var n=t.components,e=(0,l.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Native \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5185\u7f6e\u7684",(0,i.kt)("a",{parentName:"p",href:"intro-react-native-components"},"\u6838\u5fc3\u7ec4\u4ef6"),"\u4f9b\u4f60\u4f7f\u7528\u3002\u4f60\u53ef\u4ee5\u5728\u7f51\u7ad9\u7684\u5de6\u4fa7\u770b\u5230\u7ec4\u4ef6\u7684\u5b8c\u6574\u5217\u8868\u3002\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u4ece\u54ea\u770b\u8d77\uff0c\u90a3\u4e48\u53ef\u4ee5\u5148\u770b\u4e00\u4e0b\u4e0b\u9762\u8fd9\u4e2a\u7b80\u5355\u7684\u5206\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"components-and-apis#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6"},"\u57fa\u7840\u7ec4\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"components-and-apis#%E4%BA%A4%E4%BA%92%E6%8E%A7%E4%BB%B6"},"\u4ea4\u4e92\u63a7\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"components-and-apis#%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE"},"\u5217\u8868\u89c6\u56fe")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"components-and-apis#iOS%E7%8B%AC%E6%9C%89%E7%9A%84%E7%BB%84%E4%BB%B6%E5%92%8CAPI"},"iOS \u72ec\u6709\u7ec4\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"components-and-apis#Android%E7%8B%AC%E6%9C%89%E7%9A%84%E7%BB%84%E4%BB%B6%E5%92%8CAPI"},"Android \u72ec\u6709\u7ec4\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"components-and-apis#%E5%85%B6%E4%BB%96"},"\u5176\u4ed6"))),(0,i.kt)("p",null,"\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c\u4f60\u4e0d\u4f1a\u88ab\u5c40\u9650\u5728\u8fd9\u4e9b\u5185\u7f6e\u7ec4\u4ef6\u4e0a\u3002React Native \u662f\u5927\u5f00\u6e90\u793e\u533a\u7684\u4f5c\u54c1\uff0c\u6240\u4ee5\u4f60\u8fd8\u53ef\u4ee5\u5728 github \u6216\u662f npm \u4e0a\u641c\u7d22\u5230\u5e26\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"react native"),"\u5173\u952e\u5b57\u7684\u5927\u91cf\u7684\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u57fa\u7840\u7ec4\u4ef6"},"\u57fa\u7840\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u5927\u591a\u6570\u5e94\u7528\u90fd\u4f1a\u7528\u5230\u8fd9\u91cc\u7684\u57fa\u7840\u7ec4\u4ef6\u3002\u5982\u679c\u4f60\u662f\u65b0\u624b\u7684\u8bdd\uff0c\u90a3\u66f4\u5e94\u8be5\u5148\u597d\u597d\u719f\u6089\u4e00\u4e0b\u8fd9\u4e9b\u7ec4\u4ef6\uff1a"),(0,i.kt)("div",{class:"component-grid component-grid-border"},(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"view"},"View")),(0,i.kt)("p",null,"\u642d\u5efa\u7528\u6237\u754c\u9762\u7684\u6700\u57fa\u7840\u7ec4\u4ef6\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"text"},"Text")),(0,i.kt)("p",null,"\u663e\u793a\u6587\u672c\u5185\u5bb9\u7684\u7ec4\u4ef6\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"image"},"Image")),(0,i.kt)("p",null,"\u663e\u793a\u56fe\u7247\u5185\u5bb9\u7684\u7ec4\u4ef6\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"textinput"},"TextInput")),(0,i.kt)("p",null,"\u6587\u672c\u8f93\u5165\u6846\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"scrollview"},"ScrollView")),(0,i.kt)("p",null,"\u53ef\u6eda\u52a8\u7684\u5bb9\u5668\u89c6\u56fe\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"stylesheet"},"StyleSheet")),(0,i.kt)("p",null,"\u63d0\u4f9b\u7c7b\u4f3cCSS\u6837\u5f0f\u8868\u7684\u6837\u5f0f\u62bd\u8c61\u5c42\u3002"))),(0,i.kt)("h2",{id:"\u4ea4\u4e92\u63a7\u4ef6"},"\u4ea4\u4e92\u63a7\u4ef6"),(0,i.kt)("p",null,"\u63d0\u4f9b\u4e00\u4e9b\u5e38\u89c1\u7684\u8de8\u5e73\u53f0\u7684\u4ea4\u4e92\u63a7\u4ef6\u3002"),(0,i.kt)("div",{class:"component-grid component-grid-border"},(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"button"},"Button")),(0,i.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u8de8\u5e73\u53f0\u7684\u6309\u94ae\u63a7\u4ef6\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"picker"},"Picker")),(0,i.kt)("p",null,"\u5728iOS\u548cAndroid\u4e0a\u8c03\u7528\u5404\u81ea\u539f\u751f\u7684\u9009\u62e9\u5668\u63a7\u4ef6\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"slider"},"Slider")),(0,i.kt)("p",null,"\u6ed1\u52a8\u6570\u503c\u9009\u62e9\u5668\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"switch"},"Switch")),(0,i.kt)("p",null,"\u5f00\u5173\u63a7\u4ef6\u3002"))),(0,i.kt)("h2",{id:"\u5217\u8868\u89c6\u56fe"},"\u5217\u8868\u89c6\u56fe"),(0,i.kt)("p",null,"\u548c\u4e00\u822c\u5316\u7528\u9014\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"ScrollView"),"\u4e0d\u540c\uff0c\u4e0b\u9762\u7684\u5217\u8868\u7ec4\u4ef6\u53ea\u4f1a\u6e32\u67d3\u5f53\u524d\u5c4f\u5e55\u53ef\u89c1\u7684\u5143\u7d20\uff0c\u8fd9\u6837\u6709\u5229\u4e8e\u663e\u793a\u5927\u91cf\u7684\u6570\u636e\u3002"),(0,i.kt)("div",{class:"component-grid component-grid-border"},(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"flatlist"},"FlatList")),(0,i.kt)("p",null,"\u9ad8\u6027\u80fd\u7684\u6eda\u52a8\u5217\u8868\u7ec4\u4ef6\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"sectionlist"},"SectionList")),(0,i.kt)("p",null,"\u7c7b\u4f3c",(0,i.kt)("code",null,"FlatList"),"\uff0c\u4f46\u662f\u591a\u4e86\u5206\u7ec4\u663e\u793a\u3002"))),(0,i.kt)("h2",{id:"ios-\u72ec\u6709\u7684\u7ec4\u4ef6\u548c-api"},"iOS \u72ec\u6709\u7684\u7ec4\u4ef6\u548c API"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u7ec4\u4ef6\u90fd\u662f\u5bf9\u5e38\u7528\u7684 UIKit \u7c7b\u7684\u5c01\u88c5\u3002"),(0,i.kt)("div",{class:"component-grid component-grid-border"},(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"actionsheetios"},"ActionSheetIOS")),(0,i.kt)("p",null,"\u4ece\u8bbe\u5907\u5e95\u90e8\u5f39\u51fa\u4e00\u4e2a\u663e\u793a\u4e00\u4e2aActionSheet\u5f39\u51fa\u6846\u9009\u9879\u83dc\u5355\u6216\u5206\u4eab\u83dc\u5355\u3002"))),(0,i.kt)("h2",{id:"android-\u72ec\u6709\u7684\u7ec4\u4ef6\u548c-api"},"Android \u72ec\u6709\u7684\u7ec4\u4ef6\u548c API"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u5bf9 Android \u5e38\u7528\u7c7b\u7684\u5c01\u88c5\u3002"),(0,i.kt)("div",{class:"component-grid component-grid-border"},(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"backhandler"},"BackHandler")),(0,i.kt)("p",null,"\u76d1\u542c\u5e76\u5904\u7406\u8bbe\u5907\u4e0a\u7684\u8fd4\u56de\u6309\u94ae\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"drawerlayoutandroid"},"DrawerLayoutAndroid")),(0,i.kt)("p",null,"\u6e32\u67d3\u4e00\u4e2a",(0,i.kt)("code",null,"DrawerLayout"),"\u62bd\u5c49\u5e03\u5c40\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"permissionsandroid"},"PermissionsAndroid")),(0,i.kt)("p",null,"\u5bf9Android 6.0\u5f15\u5165\u7684\u6743\u9650\u6a21\u578b\u7684\u5c01\u88c5\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"toastandroid"},"ToastAndroid")),(0,i.kt)("p",null,"\u5f39\u51fa\u4e00\u4e2aToast\u63d0\u793a\u6846\u3002"))),(0,i.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u7ec4\u4ef6\u53ef\u80fd\u9002\u7528\u4e8e\u4e00\u4e9b\u7279\u5b9a\u573a\u666f\u3002"),(0,i.kt)("div",{class:"component-grid"},(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"activityindicator"},"ActivityIndicator")),(0,i.kt)("p",null,"\u663e\u793a\u4e00\u4e2a\u5706\u5f62\u7684\u6b63\u5728\u52a0\u8f7d\u7684\u7b26\u53f7\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"alert"},"Alert")),(0,i.kt)("p",null,"\u5f39\u51fa\u4e00\u4e2a\u63d0\u793a\u6846\uff0c\u663e\u793a\u6307\u5b9a\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"animated"},"Animated")),(0,i.kt)("p",null,"\u6613\u4e8e\u4f7f\u7528\u548c\u7ef4\u62a4\u7684\u52a8\u753b\u5e93\uff0c\u53ef\u751f\u6210\u6d41\u7545\u800c\u5f3a\u5927\u7684\u52a8\u753b\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"dimensions"},"Dimensions")),(0,i.kt)("p",null,"\u83b7\u53d6\u8bbe\u5907\u5c3a\u5bf8\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"keyboardavoidingview"},"KeyboardAvoidingView")),(0,i.kt)("p",null,"\u4e00\u79cd\u89c6\u56fe\u5bb9\u5668\uff0c\u53ef\u4ee5\u968f\u952e\u76d8\u5347\u8d77\u800c\u81ea\u52a8\u79fb\u52a8\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"linking"},"Linking")),(0,i.kt)("p",null,"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u901a\u7528\u7684\u63a5\u53e3\u6765\u8c03\u8d77\u5176\u4ed6\u5e94\u7528\u6216\u88ab\u5176\u4ed6\u5e94\u7528\u8c03\u8d77\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"modal"},"Modal")),(0,i.kt)("p",null,"\u4e00\u79cd\u7b80\u5355\u7684\u8986\u76d6\u5168\u5c4f\u7684\u6a21\u6001\u89c6\u56fe\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"pixelratio"},"PixelRatio")),(0,i.kt)("p",null,"\u53ef\u4ee5\u83b7\u53d6\u8bbe\u5907\u7684\u50cf\u7d20\u5bc6\u5ea6\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"refreshcontrol"},"RefreshControl")),(0,i.kt)("p",null,"\u6b64\u7ec4\u4ef6\u7528\u5728",(0,i.kt)("code",null,"ScrollView"),"\u53ca\u5176\u884d\u751f\u7ec4\u4ef6\u7684\u5185\u90e8\uff0c\u7528\u4e8e\u6dfb\u52a0\u4e0b\u62c9\u5237\u65b0\u7684\u529f\u80fd\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"statusbar"},"StatusBar")),(0,i.kt)("p",null,"\u7528\u4e8e\u63a7\u5236\u5e94\u7528\u9876\u90e8\u72b6\u6001\u680f\u6837\u5f0f\u7684\u7ec4\u4ef6\u3002")),(0,i.kt)("div",{class:"component"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"webview"},"WebView")),(0,i.kt)("p",null,"\u5728\u539f\u751f\u89c6\u56fe\u4e2d\u663e\u793aWeb\u5185\u5bb9\u7684\u7ec4\u4ef6\u3002"))))}d.isMDXComponent=!0}}]);