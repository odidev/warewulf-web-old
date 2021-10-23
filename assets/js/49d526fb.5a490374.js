"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[3934],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return b}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(r),b=o,f=s["".concat(u,".").concat(b)]||s[b]||p[b]||i;return r?t.createElement(f,a(a({ref:n},d),{},{components:r})):t.createElement(f,a({ref:n},d))}));function b(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6799:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={},u="Debian, Buster",l={unversionedId:"debian/debian",id:"debian/debian",isDocsHomePage:!1,title:"Debian, Buster",description:"Docker container",source:"@site/docs/debian/debian.md",sourceDirName:"debian",slug:"/debian/debian",permalink:"/docs/debian/debian",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/debian/debian.md",tags:[],version:"current",frontMatter:{}},d=[{value:"Docker container",id:"docker-container",children:[{value:"build and push",id:"build-and-push",children:[],level:3},{value:"import docker container into warewulf",id:"import-docker-container-into-warewulf",children:[],level:3}],level:2}],p={toc:d};function s(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debian-buster"},"Debian, Buster"),(0,i.kt)("h2",{id:"docker-container"},"Docker container"),(0,i.kt)("h3",{id:"build-and-push"},"build and push"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"PSI specific, change for upstream")),(0,i.kt)("p",null,"change into your docker build directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t docker.psi.ch:5000/debian:buster-slim .\ndocker push docker.psi.ch:5000/debian:buster-slim\n")),(0,i.kt)("h3",{id:"import-docker-container-into-warewulf"},"import docker container into warewulf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wwctl container import docker://docker.psi.ch:5000/debian:buster-slim debian-10:slim\n")))}s.isMDXComponent=!0}}]);