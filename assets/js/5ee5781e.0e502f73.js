"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[8746],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8337:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"installation",title:"Warewulf Installation"},s=void 0,u={unversionedId:"enchiridion/installation",id:"enchiridion/installation",isDocsHomePage:!1,title:"Warewulf Installation",description:"There are multiple methods to install Warewulf, this page describes the installation process of multiple methods:",source:"@site/docs/enchiridion/installation.md",sourceDirName:"enchiridion",slug:"/enchiridion/installation",permalink:"/docs/enchiridion/installation",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/enchiridion/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Warewulf Installation"},sidebar:"someSidebar",previous:{title:"Control Server Setup",permalink:"/docs/enchiridion/setup"},next:{title:"Warewulf Configuration",permalink:"/docs/enchiridion/configuration"}},c=[{value:"Binary RPMs",id:"binary-rpms",children:[],level:2},{value:"Compiled Source code",id:"compiled-source-code",children:[{value:"Release Tarball",id:"release-tarball",children:[],level:3},{value:"Git",id:"git",children:[],level:3},{value:"Runtime Dependencies",id:"runtime-dependencies",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are multiple methods to install Warewulf, this page describes the installation process of multiple methods:"),(0,a.kt)("h2",{id:"binary-rpms"},"Binary RPMs"),(0,a.kt)("p",null,"While the Warewulf project does not build binary RPMs, you can obtain them from ",(0,a.kt)("a",{parentName:"p",href:"http://www.ctrliq.com"},"CIQ")," and use them for non-production use from their public YUM and DNF repositories at: ",(0,a.kt)("a",{parentName:"p",href:"http://repo.ctrliq.com"},"http://repo.ctrliq.com"),"."),(0,a.kt)("p",null,"This is the easiest method to install Warewulf and can be done as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install -y https://repo.ctrliq.com/rhel/8/ciq-release.rpm\nsudo yum install -y warewulf\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"note: as mentioned, these binaries are part of CIQ's commercial support offering but they can be used for non-production and testing uses. If you are interested in using these binaries for production, please contact CIQ at: ",(0,a.kt)("a",{parentName:"p",href:"mailto:info@ctrliq.com"},"info@ctrliq.com"),".")),(0,a.kt)("h2",{id:"compiled-source-code"},"Compiled Source code"),(0,a.kt)("p",null,"Before you build the Warewulf source code you will first need to install the build dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"make"),": This should be available via your Linux distribution's package manager (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"dnf install make"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"go"),": Golang is also available on most current Linux distributions, but if you wish to install the most recent version, you can find that here: (",(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/)%5Bhttps://golang.org/dl/%5D"},"https://golang.org/dl/)[https://golang.org/dl/]")),(0,a.kt)("li",{parentName:"ul"},"Depending on your Linux Distribution, you may need to install other development packages. Typically it is recommended to install the entire development group like ",(0,a.kt)("inlineCode",{parentName:"li"},'dnf groupinstall "Development Tools"'))),(0,a.kt)("p",null,"Once these dependencies are installed, you can obtain and build the source code as follows:"),(0,a.kt)("h3",{id:"release-tarball"},"Release Tarball"),(0,a.kt)("p",null,"When the Warewulf project releases stable versions, they are available via source form here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hpcng/warewulf/tags"},"https://github.com/hpcng/warewulf/tags")),(0,a.kt)("p",null,"Select the version you wish to install and download the tarball to any location on the server, then follow these directions making the appropriate substitutions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# EDIT HERE\nVERSION=4.2.0\nDOWNLOAD=/tmp/warewulf-${4.2.0}.tar.gz\n\n# COPY/PASTE THIS\nmkdir ~/src\ncd ~/src\ntar xvf ${DOWNLOAD}\ncd warewulf-${VERSION}\nmake all && sudo make install\n")),(0,a.kt)("h3",{id:"git"},"Git"),(0,a.kt)("p",null,'Warewulf is developed in "Git", a source code management platform that allows collaborative development and revision control. From the Git repository, you can download different versions of the project either from tags or branches. By default, when you go to the GitHub page, you will find the default branch entitled ',(0,a.kt)("inlineCode",{parentName:"p"},"main"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch is where most of the active development occurs, so if you want to obtain the latest and greatest version of Warewulf, this is where to go. But be forewarned, using a snapshot from ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," is not guaranteed to be stable or generally supported for production. If you are building for production, it is best to download a release tarball from the main site, the GitHub releases page, or from a Git tag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/git\ncd ~/git\ngit clone https://github.com/hpcng/warewulf.git\ncd warewulf\ngit checkout main # or switch to a tag like '4.2.0'\nmake all && sudo make install\n")),(0,a.kt)("h3",{id:"runtime-dependencies"},"Runtime Dependencies"),(0,a.kt)("p",null,"In Warewulf's default configuration, it will require some operating system provided services. Generally these are provided by your installation vendor and can be installed over the network."),(0,a.kt)("p",null,"These are the services you will need to install:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dhcp-server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tftp-server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nfs-utils"))),(0,a.kt)("p",null,"If you are using an Enterprise Linux compatible distribution you can install them with: ",(0,a.kt)("inlineCode",{parentName:"p"},"yum install dhcp-server tftp-server nfs-utils")))}d.isMDXComponent=!0}}]);