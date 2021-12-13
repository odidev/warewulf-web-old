"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[760],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1614:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),l=["components"],a={id:"kernel",title:"Kernel Management"},c={unversionedId:"enchiridion/kernel",id:"enchiridion/kernel",isDocsHomePage:!1,title:"Kernel Management",description:"Importing a Kernel",source:"@site/docs/enchiridion/kernel.md",sourceDirName:"enchiridion",slug:"/enchiridion/kernel",permalink:"/docs/enchiridion/kernel",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/enchiridion/kernel.md",version:"current",frontMatter:{id:"kernel",title:"Kernel Management"},sidebar:"someSidebar",previous:{title:"Container Management",permalink:"/docs/enchiridion/containers"},next:{title:"Node Configuration",permalink:"/docs/enchiridion/nodeconfig"}},u=[{value:"Importing a Kernel",id:"importing-a-kernel",children:[]},{value:"Listing All Imported Kernels",id:"listing-all-imported-kernels",children:[]}],s={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"importing-a-kernel"},"Importing a Kernel"),(0,i.kt)("p",null,"Warewulf nodes require a Linux kernel to boot. There are a number of ways to import a kernel into Warewulf, but this document is going to focus on the easiest and most widely used manner, which is to import it from the host."),(0,i.kt)("p",null,"If your compute nodes have any special hardware configurations or need any customizations, make and test those customizations on the control node, and when your control node kernel is built and working as you like, you can import it into Warewulf with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo wwctl kernel import $(uname -r)\n4.18.0-305.3.1.el8_4.x86_64: Done\n")),(0,i.kt)("p",null,"This process will import not only the kernel image itself, but also all of the kernel modules and firmware associated to this kernel. "),(0,i.kt)("h2",{id:"listing-all-imported-kernels"},"Listing All Imported Kernels"),(0,i.kt)("p",null,"Once the kernel has been imported, you can list them all with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo wwctl kernel list\nVNFS NAME                           NODES \n4.18.0-305.3.1.el8_4.x86_64              0\n")),(0,i.kt)("p",null,"Once a kernel has been imported and showing up in this list you can configure it to boot compute nodes."))}p.isMDXComponent=!0}}]);