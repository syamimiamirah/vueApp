(function(){"use strict";var t={1303:function(t,n,e){var r=e(5130),o=e(6768);const u={id:"app"};function a(t,n,e,r,a,c){const i=(0,o.g2)("TableComponent");return(0,o.uX)(),(0,o.CE)("div",u,[(0,o.bF)(i)])}var c=e(4232);const i={class:"center"};function s(t,n,e,r,u,a){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("button",{onClick:n[0]||(n[0]=(...t)=>a.exportToCSV&&a.exportToCSV(...t))},"Export to CSV"),(0,o.Lk)("table",i,[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.headers,(t=>((0,o.uX)(),(0,o.CE)("th",{key:t},(0,c.v_)(t),1)))),128))])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.data,((t,n)=>((0,o.uX)(),(0,o.CE)("tr",{key:n},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(Object.keys(t),(n=>((0,o.uX)(),(0,o.CE)("td",{key:n},(0,c.v_)(t[n]),1)))),128))])))),128))])])])}e(4114),e(4603),e(7566),e(8721);function l(t,n,e){const r=[],o=n.join(",");r.push(o),t.forEach((t=>{const e=n.map((n=>{const e=n.toLowerCase().replace(" ","_"),r=(""+t[e]).replace(/"/g,'\\"');return`"${r}"`}));r.push(e.join(","))}));const u=r.join("\n"),a=new Blob([u],{type:"text/csv"}),c=window.URL.createObjectURL(a),i=document.createElement("a");i.setAttribute("hidden",""),i.setAttribute("href",c),i.setAttribute("download",e),document.body.appendChild(i),i.click(),document.body.removeChild(i)}var p={name:"TableComponent",data(){return{headers:["Assets Name","Department"],data:[{assets_name:"Printer",department:"HR"},{assets_name:"Monitor",department:"IT"},{assets_name:"Barcode Scanner",department:"ACCOUNT"}]}},methods:{exportToCSV(){l(this.data,this.headers,"data.csv")}}},d=e(1241);const f=(0,d.A)(p,[["render",s]]);var v=f,h={name:"App",components:{TableComponent:v}};const b=(0,d.A)(h,[["render",a]]);var m=b;(0,r.Ef)(m).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return t[r].call(u.exports,u,u.exports,e),u.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,u){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],u=t[l][2];for(var c=!0,i=0;i<r.length;i++)(!1&u||a>=u)&&Object.keys(e.O).every((function(t){return e.O[t](r[i])}))?r.splice(i--,1):(c=!1,u<a&&(a=u));if(c){t.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}u=u||0;for(var l=t.length;l>0&&t[l-1][2]>u;l--)t[l]=t[l-1];t[l]=[r,o,u]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,u,a=r[0],c=r[1],i=r[2],s=0;if(a.some((function(n){return 0!==t[n]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(i)var l=i(e)}for(n&&n(r);s<a.length;s++)u=a[s],e.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return e.O(l)},r=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(1303)}));r=e.O(r)})();
//# sourceMappingURL=app.fccbdcf8.js.map