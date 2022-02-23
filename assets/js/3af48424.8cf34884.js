"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[412],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9783:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"setup",title:"Control Server Setup"},l={unversionedId:"enchiridion/setup",id:"enchiridion/setup",isDocsHomePage:!1,title:"Control Server Setup",description:"Operating System Installation",source:"@site/docs/enchiridion/setup.md",sourceDirName:"enchiridion",slug:"/enchiridion/setup",permalink:"/docs/enchiridion/setup",editUrl:"https://github.com/hpcng/warewulf-web-old/edit/main/docs/enchiridion/setup.md",version:"current",frontMatter:{id:"setup",title:"Control Server Setup"},sidebar:"someSidebar",previous:{title:"Stateless Provisioning",permalink:"/docs/enchiridion/stateless"},next:{title:"Warewulf Installation",permalink:"/docs/enchiridion/installation"}},u=[{value:"Operating System Installation",id:"operating-system-installation",children:[]},{value:"Network",id:"network",children:[{value:"Addressing",id:"addressing",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"operating-system-installation"},"Operating System Installation"),(0,i.kt)("p",null,"Warewulf has almost no predetermined or required configurations aside from a base architecture networking layout. Install your Linux distribution of choice as you would like, but do pay attention to the cluster's private network configuration."),(0,i.kt)("h2",{id:"network"},"Network"),(0,i.kt)("p",null,'A clustered resource depends on a private management network. This network can be either persistent (it is always "up" even after provisioning) to temporary which might only be used for provisioning and/or out of band system control and management e.g. IPMI).'),(0,i.kt)("p",null,"It is important for this management network to be private to the compute resource because Warewulf requires network services on that network which may conflict with services on the production/public network (e.g. DHCP). It is also important from a security perspective as the management network for typical HPC systems have an implied trust level associated with it and generally there is no firewalling or network monitoring occurring on these networks."),(0,i.kt)("p",null,'Usually, the control node is "dual homed" which means it has at least two interface cards, one connected to the private cluster network and one dedicated to the public network (as the figure above demonstrates).'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"note: It is possible to omit the public network interface with a reverse NAT. Warewulf can operate in this configuration but it extends beyond the scope of this documentation.")),(0,i.kt)("p",null,"Many clusters have more then one private network. This is common for performance critical HPC clusters that implement a high speed and low latency network like InfiniBand. In this case, this network is used for high speed data transfers for inter-process communication between compute nodes and file system IO."),(0,i.kt)("p",null,"Warewulf will need to be configured to use the private cluster management network. Warewulf will use this network for booting the nodes over PXE. There are three network protocols used to accomplish this DHCP/BOOT, TFTP, and HTTP on port ",(0,i.kt)("inlineCode",{parentName:"p"},"9873"),". Warewulf will use the operating system's provided version of DHCP (ISC-DHCP) and TFTP for the PXE bootstrap to iPXE, and then iPXE will use Warewulf's internal HTTP services to transfer the larger files for provisioning."),(0,i.kt)("h3",{id:"addressing"},"Addressing"),(0,i.kt)("p",null,"The addressing scheme of your private cluster network is 100% up to the system integrator, but for large clusters, many organizations like to organize the address allocations. Below is a recommended IP addressing scheme which we will use for the rest of this document."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"10.0.0.1"),": Private network address IP"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"255.255.252.0"),": Private network subnet mask")),(0,i.kt)("p",null,"Here is an example of how the cluster's address can be divided for a 255 node cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"10.0.0.1 - 10.0.0.255"),": Cluster infrastructure including this host, schedulers, file systems, routers, switches, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"10.0.1.1 - 10.0.1.255"),": DHCP range for booting nodes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"10.0.2.1 - 10.0.2.255"),": Static node addresses"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"10.0.3.1 - 10.0.3.255"),": IPMI and/or out of band addresses for the compute nodes")))}d.isMDXComponent=!0}}]);