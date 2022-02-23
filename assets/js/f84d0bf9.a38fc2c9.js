"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[572],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,h=c["".concat(s,".").concat(p)]||c[p]||f[p]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"profiles",title:"Node Profiles"},s={unversionedId:"enchiridion/profiles",id:"enchiridion/profiles",isDocsHomePage:!1,title:"Node Profiles",description:"Profiles provide a way to scalably group node configurations together. Instead of redundant configurations for each node, you can put that into a profile and the nodes will inherit these configurations. This is very handy if you have groups of node specific customizations. For example, a few hundred nodes that are running a particular container or kernel, and another group of nodes that are running a different kernel or container.",source:"@site/docs/enchiridion/profiles.md",sourceDirName:"enchiridion",slug:"/enchiridion/profiles",permalink:"/docs/enchiridion/profiles",editUrl:"https://github.com/hpcng/warewulf-web-old/edit/main/docs/enchiridion/profiles.md",version:"current",frontMatter:{id:"profiles",title:"Node Profiles"},sidebar:"someSidebar",previous:{title:"Node Configuration",permalink:"/docs/enchiridion/nodeconfig"},next:{title:"Warewulf Overlays",permalink:"/docs/enchiridion/overlays"}},u=[{value:"An Introduction To Profiles",id:"an-introduction-to-profiles",children:[]},{value:"Multiple Profiles",id:"multiple-profiles",children:[]},{value:"Cascading Profiles",id:"cascading-profiles",children:[]},{value:"Overriding Profiles",id:"overriding-profiles",children:[]},{value:"How To Use Profiles Effectively",id:"how-to-use-profiles-effectively",children:[]}],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Profiles provide a way to scalably group node configurations together. Instead of redundant configurations for each node, you can put that into a profile and the nodes will inherit these configurations. This is very handy if you have groups of node specific customizations. For example, a few hundred nodes that are running a particular container or kernel, and another group of nodes that are running a different kernel or container."),(0,i.kt)("p",null,"Any node configuration attributes can be applied to a profile, but there are always going to be some node configurations which must be specific to a node, like a network HW/MAC address or an IP address."),(0,i.kt)("h2",{id:"an-introduction-to-profiles"},"An Introduction To Profiles"),(0,i.kt)("p",null,"Every new node is automatically added to a profile called ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". You can view the configuration attributes of this profile by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwctl profile list")," command. Like the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwctl node list")," command, this will provide a summary, but you can see ",(0,i.kt)("strong",{parentName:"p"},"all")," configuration attributes by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--all")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-a")," flag as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo wwctl profile list\nPROFILE NAME         COMMENT/DESCRIPTION\n================================================================================\ndefault              This profile is automatically included for each node\n")),(0,i.kt)("p",null,"And with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-a")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo wwctl profile list -a\n################################################################################\nPROFILE NAME         FIELD              VALUE\ndefault              Id                 default\ndefault              Comment            This profile is automatically included for each node\ndefault              Cluster            --\ndefault              Container          --\ndefault              Kernel             --\ndefault              KernelArgs         --\ndefault              Init               --\ndefault              Root               --\ndefault              RuntimeOverlay     --\ndefault              SystemOverlay      --\ndefault              Ipxe               --\ndefault              IpmiIpaddr         --\ndefault              IpmiNetmask        --\ndefault              IpmiPort           --\ndefault              IpmiGateway        --\ndefault              IpmiUserName       --\ndefault              IpmiInterface      --\n")),(0,i.kt)("p",null,'As you can see here, there is only one attribute set by default in this profile, and that is the "Comment" field. That Comment is inherited by any nodes that are configured to use this profile. So if we look at the node we configured in the last section, we can see that configuration attribute there:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo wwctl node list -a | head -n 5\n################################################################################\nNODE                 FIELD              PROFILE      VALUE\nn0000                Id                 --           n0000\nn0000                Comment            default      This profile is automatically included for each node\nn0000                Cluster            --           --\n")),(0,i.kt)("p",null,'Here you can see that the "Comment" attribute was inherited by this node, and it also provides you with the information of which profile this attribute was inherited from. This is very useful information as nodes can be part of multiple profiles with inheritance being cascading.'),(0,i.kt)("h2",{id:"multiple-profiles"},"Multiple Profiles"),(0,i.kt)("p",null,"For demonstration purposes, let's create another profile and demonstrate how to use this second profile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo wwctl profile add test_profile\n$ sudo wwctl profile list\nPROFILE NAME         COMMENT/DESCRIPTION\n================================================================================\ndefault              This profile is automatically included for each node\ntest_profile         --\n")),(0,i.kt)("p",null,"Now that we've created a new profile, let's create a configuration attribute in this profile:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo wwctl profile set --cluster cluster01 test_profile\n? Are you sure you want to modify 1 profile(s)? [y/N] y\u2588\n\n$ sudo wwctl profile list -a test_profile | grep Cluster\ntest_profile         Cluster            cluster01\n")),(0,i.kt)("p",null,"Lastly we just need to configure this profile to our node(s):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo wwctl node set --addprofile test_profile n0000\nAre you sure you want to modify 1 nodes(s): y\n")),(0,i.kt)("p",null,"And you can now verify that the node has both profile configurations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo wwctl node list -a | head -n 6\n################################################################################\nNODE                 FIELD              PROFILE      VALUE\nn0000                Id                 --           n0000\nn0000                Comment            default      This profile is automatically included for each node\nn0000                Cluster            test_profile cluster01\nn0000                Profiles           --           default,test_profile\n")),(0,i.kt)("h2",{id:"cascading-profiles"},"Cascading Profiles"),(0,i.kt)("p",null,"In the previous example, we set a single node to have two profile configurations. We can also overwrite configurations as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ sudo wwctl profile set --comment "test comment" test_profile\nAre you sure you want to modify 1 profile(s): y\n\n$ sudo wwctl node list -a | head -n 6\n################################################################################\nNODE                 FIELD              PROFILE      VALUE\nn0000                Id                 --           n0000\nn0000                Comment            test_profile test comment\nn0000                Cluster            test_profile cluster01\nn0000                Profiles           --           default,test_profile\n')),(0,i.kt)("p",null,"And if we delete the superseded profile attribute from ",(0,i.kt)("inlineCode",{parentName:"p"},"test_profile")," we can now see the previous configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo wwctl profile set --comment UNDEF test_profile\nAre you sure you want to modify 1 profile(s): y\n\n$ sudo wwctl node list -a | head -n 6\n################################################################################\nNODE                 FIELD              PROFILE      VALUE\nn0000                Id                 --           n0000\nn0000                Comment            default      This profile is automatically included for each node\nn0000                Cluster            test_profile cluster01\nn0000                Profiles           --           default,test_profile\n")),(0,i.kt)("p",null,"This is a very useful feature for dealing with many groups of cluster nodes and/or testing new configurations on smaller subsets of cluster nodes. For example, you can use this method to run a different kernel on only a subset or group of cluster nodes without changing any other node attributes."),(0,i.kt)("h2",{id:"overriding-profiles"},"Overriding Profiles"),(0,i.kt)("p",null,"All profile configurations can be overwritten by a node configuration as can be seen here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ sudo wwctl node set --comment "This value takes precedent" n0000\nAre you sure you want to modify 1 nodes(s): y\n\n$ sudo wwctl node list -a | head -n 6\n################################################################################\nNODE                 FIELD              PROFILE      VALUE\nn0000                Id                 --           n0000\nn0000                Comment            SUPERSEDED   This value takes precedent\nn0000                Cluster            test_profile cluster01\nn0000                Profiles           --           default,test_profile\n')),(0,i.kt)("h2",{id:"how-to-use-profiles-effectively"},"How To Use Profiles Effectively"),(0,i.kt)("p",null,"There are a lot of ways to use profiles to facilitate the management of large cluster node attributes, but there is nothing inherent in the design of Warewulf that requires use of them for anything. It is completely reasonable to not use profiles at all to help with node configuration attributes."),(0,i.kt)("p",null,'But if you do wish to use profiles, the best way to use them is to manage "fixed" configurations of groups of cluster nodes. For example, if you have multiple sub-clusters in your cluster, it might be advantageous to have a ',(0,i.kt)("inlineCode",{parentName:"p"},"cluster_name")," profile which includes things like network configurations, and/or a specific kernel, container, boot arguments, etc."),(0,i.kt)("p",null,"Node specific information, like HW/MAC addresses and IP addresses should always be put in a node configuration rather than a profile configuration."))}f.isMDXComponent=!0}}]);