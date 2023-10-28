(()=>{"use strict";var e={1387:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var o=n(2990),l=n(5050),a=n(3561),r=n(1124),i=n(3744),s=n(9128),d=n(1085),u=n(1296),f=n(2259),c=n(1898),h=n(885),x=n(837),y=n(7674);function b(e){var t=e.navigation,n=(0,o.useState)(!0),l=(0,h.default)(n,2),a=l[0],r=l[1];return(0,y.jsxs)(u.default,{style:g.navContainer,children:[(0,y.jsx)(x.default,{style:g.navListHeader,onPress:function(){return r(!a)},children:(0,y.jsx)(d.default,{style:g.headerText,children:"Navigation Menu"})}),(0,y.jsxs)(u.default,{style:a?g.showNavList:g.hideNavList,children:[(0,y.jsx)(x.default,{style:g.navButton,onPress:function(){return t.navigate("Home")},title:"Go to Home Page",children:(0,y.jsx)(d.default,{style:g.buttonLabel,children:"Home"})}),(0,y.jsx)(x.default,{style:g.navButton,onPress:function(){return t.navigate("About")},title:"Go to About Page",children:(0,y.jsx)(d.default,{style:g.buttonLabel,children:"About"})}),(0,y.jsx)(x.default,{style:g.navButton,onPress:function(){return t.navigate("Projects")},title:"Go to Projects Page",children:(0,y.jsx)(d.default,{style:g.buttonLabel,children:"Projects"})})]})]})}var g=s.default.create({navContainer:{backgroundColor:"#fff",alignItems:"center",marginBottom:5},navListHeader:{height:30,marginBottom:5},headerText:{fontSize:20},hideNavList:{display:"none",height:10},showNavList:{flexDirection:"row"},navButton:{borderRadius:25,height:35,width:120,backgroundColor:"purple",alignItems:"center",justifyContent:"center",margin:1},buttonLabel:{color:"#fff",fontWeight:"bold",fontSize:20}});function j(e){var t=e.navigation;return(0,y.jsxs)(f.SafeAreaView,{style:p.container,children:[(0,y.jsxs)(u.default,{style:p.main,children:[(0,y.jsx)(b,{navigation:t}),(0,y.jsx)(u.default,{style:p.body,children:(0,y.jsx)(d.default,{style:p.bodyText,children:"This is the Home Page."})})]}),(0,y.jsx)(c.default,{style:"auto"})]})}var p=s.default.create({container:{flex:1,width:"auto",backgroundColor:"#fff"},main:{height:"auto",alignItems:"center",justifyContent:"flex-start"},body:{margin:10,paddingHorizontal:15,textAlign:"left"},bodyText:{fontSize:18}});function m(e){var t=e.navigation;return(0,y.jsxs)(f.SafeAreaView,{style:v.container,children:[(0,y.jsxs)(u.default,{style:v.main,children:[(0,y.jsx)(b,{navigation:t}),(0,y.jsx)(u.default,{style:v.body,children:(0,y.jsx)(d.default,{style:v.bodyText,children:"This is the Profile Page. "})})]}),(0,y.jsx)(c.default,{style:"auto"})]})}var v=s.default.create({container:{flex:1,width:"auto",backgroundColor:"#fff"},main:{height:"auto",alignItems:"center",justifyContent:"flex-start"},body:{margin:10,paddingHorizontal:15,textAlign:"left"},bodyText:{fontSize:18}});function w(e){var t=e.navigation;return(0,y.jsxs)(f.SafeAreaView,{style:S.container,children:[(0,y.jsxs)(u.default,{style:S.main,children:[(0,y.jsx)(b,{navigation:t}),(0,y.jsx)(u.default,{style:S.body,children:(0,y.jsx)(d.default,{style:S.bodyText,children:"Hello, My name is Chrystal. I am currently learning how to develop cross platform apps with React. Follow my discovery journey here and find links to various completed projects, as they become available."})})]}),(0,y.jsx)(c.default,{style:"auto"})]})}var S=s.default.create({container:{flex:1,width:"auto",backgroundColor:"#fff"},main:{height:"auto",alignItems:"center",justifyContent:"flex-start"},body:{margin:10,paddingHorizontal:15,textAlign:"left"},bodyText:{fontSize:18}}),P=n(1629),C=n(8264);function T(){var e=(0,o.useState)(!0),t=(0,h.default)(e,2),n=t[0],l=t[1],a=(0,o.useState)(""),r=(0,h.default)(a,2),i=r[0],s=r[1],f=(0,o.useState)(0),c=(0,h.default)(f,2),b=c[0],g=c[1];return(0,y.jsxs)(u.default,{style:k.body,children:[(0,y.jsxs)(x.default,{onPress:function(){return l(!n)},children:[(0,y.jsx)(d.default,{style:k.h1,children:"Simple Calculator"}),(0,y.jsx)(d.default,{style:k.descText,children:"A task from a React Education Course to create the simplest working calculator. "}),(0,y.jsx)(d.default,{style:{fontStyle:"italic"},children:"Click to view."})]}),(0,y.jsxs)(u.default,{style:n?k.showCalc:k.hide,children:[(0,y.jsx)(d.default,{style:k.result,children:b}),(0,y.jsx)(C.default,{style:k.inputbox,value:i,placeholder:"Type a number",inputMode:"numeric",onChangeText:function(e){return s(e)}}),(0,y.jsxs)(u.default,{style:k.buttonRow,children:[(0,y.jsx)(x.default,{style:k.opButton,onPress:function(e){e.preventDefault(),g((function(e){return e+Number(i)}))},children:(0,y.jsx)(d.default,{style:k.opButtonLabel,children:"+"})}),(0,y.jsx)(x.default,{style:k.opButton,onPress:function(e){e.preventDefault(),g((function(e){return e-Number(i)}))},children:(0,y.jsx)(d.default,{style:k.opButtonLabel,children:"-"})}),(0,y.jsx)(x.default,{style:k.opButton,onPress:function(e){e.preventDefault(),g((function(e){return e*Number(i)}))},children:(0,y.jsx)(d.default,{style:k.opButtonLabel,children:"*"})}),(0,y.jsx)(x.default,{style:k.opButton,onPress:function(e){e.preventDefault(),0!==b&&g((function(e){return e/Number(i)}))},children:(0,y.jsx)(d.default,{style:k.opButtonLabel,children:"/"})})]}),(0,y.jsxs)(u.default,{style:k.buttonRow,children:[(0,y.jsx)(x.default,{style:k.button,onPress:function(e){e.preventDefault(),s("")},children:(0,y.jsx)(d.default,{style:k.buttonLabel,children:"Reset Input"})}),(0,y.jsx)(x.default,{style:k.button,onPress:function(e){e.preventDefault(),g(0),s("")},children:(0,y.jsx)(d.default,{style:k.buttonLabel,children:"Reset All"})})]})]})]})}var k=s.default.create({body:{flex:1,backgroundColor:"#fff",alignItems:"center",height:"auto",marginTop:10},h1:{fontWeight:"bold",fontSize:20,textAlign:"center"},descText:{fontSize:16},hide:{display:"none",height:10},showCalc:{alignItems:"center",height:"auto",width:350},result:{margin:5,fontSize:35},inputbox:{margin:5,borderStyle:"solid",borderWidth:1,borderColor:"orange",padding:2,fontSize:20},buttonRow:{flexDirection:"row",width:"auto",alignItems:"center"},opButton:{borderRadius:10,height:35,width:60,backgroundColor:"orange",alignItems:"center",justifyContent:"center",margin:1},opButtonLabel:{color:"#fff",fontWeight:"bold",fontSize:25},button:{borderRadius:10,height:35,width:120,backgroundColor:"red",alignItems:"center",justifyContent:"center",margin:1},buttonLabel:{color:"#fff",fontWeight:"bold",fontSize:20}}),L=n(6408);function z(){var e=(0,o.useState)(!0),t=(0,h.default)(e,2),l=t[0],a=t[1];var r=n(8064),i=n(8732),s=n(6210),f=(0,o.useState)(80),c=(0,h.default)(f,2),b=c[0],g=c[1],j=(0,o.useState)(80),p=(0,h.default)(j,2),m=p[0],v=p[1],w=(0,o.useState)(80),S=(0,h.default)(w,2),P=S[0],C=S[1],T=(0,o.useState)("I am your pet!"),k=(0,h.default)(T,2),z=k[0],I=k[1],B=(0,o.useState)(r),H=(0,h.default)(B,2),M=H[0],R=H[1];function O(){m>=70&&b>=70&&P>=70?(I("I am loved!"),R(r)):(m<70||b<70||P<70)&&(R(i),I("I miss you."),(m<50||b<50||P<50)&&(R(s),I("I need you.")))}function N(e,t){return Math.min(Math.max(e+t,0),100)}function W(e,t){return Math.min(Math.max(e-t,0),100)}return(0,y.jsxs)(u.default,{style:A.body,children:[(0,y.jsxs)(x.default,{onPress:function(){return a(!l)},children:[(0,y.jsx)(d.default,{style:A.h1,children:"My Wild Pet"}),(0,y.jsx)(d.default,{style:A.descText,children:"Personal task, inspired by a popular digital pet game. "}),(0,y.jsx)(d.default,{style:{fontStyle:"italic"},children:"Click to view."})]}),(0,y.jsxs)(u.default,{style:l?A.showPet:A.hide,children:[(0,y.jsxs)(u.default,{style:A.petContainer,children:[(0,y.jsx)(d.default,{style:A.petText,children:"Fido"}),(0,y.jsx)(d.default,{style:A.petText,children:z}),(0,y.jsxs)(d.default,{style:A.petText,children:["Happy: ",b," | Full: ",m," | Entertained: ",P]}),(0,y.jsx)(u.default,{style:A.petMood,children:(0,y.jsx)(L.default,{style:A.img,source:M})})]}),(0,y.jsxs)(u.default,{style:A.buttonRow,children:[(0,y.jsx)(x.default,{style:A.button,onPress:function(){g(N(b,10)),C(N(P,5)),O()},children:(0,y.jsx)(d.default,{style:A.buttonLabel,children:"Pet"})}),(0,y.jsx)(x.default,{style:A.button,onPress:function(){m<100?(v(N(m,10)),g(N(b,5)),C(W(P,5))):(g(W(b,10)),C(W(P,5))),O()},children:(0,y.jsx)(d.default,{style:A.buttonLabel,children:"Feed"})}),(0,y.jsx)(x.default,{style:A.button,onPress:function(){C(N(P,10)),g(N(b,5)),v(W(m,5)),O()},children:(0,y.jsx)(d.default,{style:A.buttonLabel,children:"Play"})})]})]})]})}var A=s.default.create({body:{flex:1,backgroundColor:"#fff",alignItems:"center",height:"auto",marginTop:10},h1:{fontWeight:"bold",fontSize:20,textAlign:"center"},descText:{fontSize:16},hide:{display:"none",height:10},showPet:{alignItems:"center",height:"auto",width:300},petContainer:{height:250,width:"auto",alignItems:"center"},petText:{fontSize:16},petMood:{backgroundColor:"#fff"},img:{height:200,width:200},buttonRow:{flexDirection:"row",width:"auto",alignItems:"center"},button:{borderRadius:10,height:35,width:60,backgroundColor:"blue",alignContent:"center",justifyContent:"center",margin:1},buttonLabel:{color:"#fff",fontWeight:"bold",fontSize:20,textAlign:"center"}});function I(e){var t=e.navigation;return(0,y.jsxs)(f.SafeAreaView,{style:B.container,children:[(0,y.jsxs)(u.default,{style:B.main,children:[(0,y.jsx)(b,{navigation:t}),(0,y.jsxs)(u.default,{style:B.body,children:[(0,y.jsx)(d.default,{style:B.h1,children:"This is the Projects Page. "}),(0,y.jsxs)(P.default,{indicatorStyle:"black",children:[(0,y.jsx)(u.default,{style:B.entry,children:(0,y.jsx)(T,{})}),(0,y.jsx)(u.default,{style:B.entry,children:(0,y.jsx)(z,{})})]})]})]}),(0,y.jsx)(c.default,{style:"auto"})]})}var B=s.default.create({container:{flex:1,width:"auto",backgroundColor:"#fff"},main:{flex:1,alignItems:"center"},body:{flex:1,margin:10,paddingHorizontal:15,textAlign:"left"},h1:{fontWeight:"bold",fontSize:20,textAlign:"center"},entry:{marginTop:10,marginHorizontal:10,width:350}}),H=(0,a.default)();function M(){return(0,y.jsx)(r.SafeAreaProvider,{initialMetrics:i.initialWindowMetrics,children:(0,y.jsx)(l.default,{children:(0,y.jsxs)(H.Navigator,{initialRouteName:"Projects",children:[(0,y.jsx)(H.Screen,{name:"Home",component:j,options:{title:"Welcome"}}),(0,y.jsx)(H.Screen,{name:"Profile",component:m,options:{title:"Profile"}}),(0,y.jsx)(H.Screen,{name:"About",component:w,options:{title:"About"}}),(0,y.jsx)(H.Screen,{name:"Projects",component:I,options:{title:"Projects"}})]})})})}},6210:(e,t,n)=>{e.exports=n.p+"static/media/tempAngrywolf.c46bfa7dcf1b1a60a465.png"},8064:(e,t,n)=>{e.exports=n.p+"static/media/tempHappywolf.1fa78e29b2bb2f7b081b.png"},8732:(e,t,n)=>{e.exports=n.p+"static/media/tempSadwolf.afe80dfd43bcbeb387c7.png"}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,o,l,a)=>{if(!o){var r=1/0;for(u=0;u<e.length;u++){for(var[o,l,a]=e[u],i=!0,s=0;s<o.length;s++)(!1&a||r>=a)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(i=!1,a<r&&(r=a));if(i){e.splice(u--,1);var d=l();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,l,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/playground/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var l,a,[r,i,s]=o,d=0;if(r.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(s)var u=s(n)}for(t&&t(o);d<r.length;d++)a=r[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[326],(()=>n(4178)));o=n.O(o)})();
//# sourceMappingURL=main.cb4c0908.js.map