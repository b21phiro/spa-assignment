"use strict";(self.webpackChunkspa_assignment=self.webpackChunkspa_assignment||[]).push([[179],{945:(n,r,e)=>{e.d(r,{Z:()=>l});var t=e(81),i=e.n(t),a=e(645),o=e.n(a)()(i());o.push([n.id,"*\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Source Sans 3';\r\n    color: var(--black);\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6\r\n{\r\n    font-family: 'Permanent Marker';\r\n}\r\n\r\nbody\r\n{\r\n    min-height: 100vh;\r\n}\r\n\r\n",""]);const l=o},716:(n,r,e)=>{e.d(r,{Z:()=>l});var t=e(81),i=e.n(t),a=e(645),o=e.n(a)()(i());o.push([n.id,"#root\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: clamp(2rem, 2.5vw, 4rem);\r\n    min-height: 100vh;\r\n}\r\n\r\n#main\r\n{\r\n    flex: 1;\r\n}\r\n\r\n#main .wrapper\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: clamp(1.5rem, 2.5vw, 2rem);\r\n}\r\n\r\n#footer .wrapper\r\n{\r\n    text-align: center;\r\n}\r\n\r\n#header, #main ,#footer\r\n{\r\n    display: grid;\r\n    grid-auto-columns: minmax(1rem, 10vw) 1fr minmax(1rem, 10vw);\r\n    grid-template-rows: 1fr;\r\n    grid-template-areas: '. wrapper .';\r\n}\r\n\r\n#header\r\n{\r\n    position: sticky;\r\n    z-index: 10;\r\n    background-color: var(--white);\r\n}\r\n\r\n#header .wrapper\r\n{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-block: 1rem;\r\n}\r\n\r\n#menu\r\n{\r\n    position: fixed;\r\n    inset: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    padding-top: 5rem;\r\n}\r\n\r\n#footer\r\n{\r\n    padding-block: clamp(1rem, 2.5vw, 2rem);\r\n}\r\n\r\n#login\r\n{\r\n    max-width: 62rem;\r\n    margin-inline: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: clamp(1.5rem, 2.5vw, 2rem);\r\n}",""]);const l=o},574:(n,r,e)=>{e.d(r,{Z:()=>l});var t=e(81),i=e.n(t),a=e(645),o=e.n(a)()(i());o.push([n.id,".feather\r\n{\r\n    fill: none;\r\n    stroke: var(--black);\r\n    stroke-width: 3;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n}\r\n\r\n.button\r\n{\r\n    width: 3rem;\r\n    height: 3rem;\r\n    border: none;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.author\r\n{\r\n    font-family: 'Permanent Marker';\r\n    color: var(--grey);\r\n}\r\n\r\n.wrapper\r\n{\r\n    grid-area: wrapper;\r\n}\r\n\r\n.brand\r\n{\r\n    position: relative;\r\n    width: max-content;\r\n}\r\n\r\n.brand_logotype\r\n{\r\n    font-size: clamp(1.5rem, 2.5vw, 2rem);\r\n    font-family: 'Permanent Marker';\r\n    transition: color 150ms;\r\n}\r\n\r\n.brand_link\r\n{\r\n    position: absolute;\r\n    inset: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.menu_background\r\n{\r\n    position: absolute;\r\n    inset: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgb(0,0,0,.32);\r\n    z-index: 0;\r\n    opacity: 0;\r\n    transition: opacity 150ms;\r\n}\r\n\r\n.menu_inner\r\n{\r\n    position: relative;\r\n    background-color: #F1F1F1;\r\n    z-index: 1;\r\n    height: 100%;\r\n    width: 75%;\r\n    left: -75%;\r\n    padding: clamp(1rem, 2.5vw, 1.5rem);\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: clamp(1rem, 2.5vw, 2rem);\r\n    box-shadow: 0 0 52px rgb(0,0,0,.08);\r\n    transition: transform 150ms;\r\n}\r\n\r\n.menu_title\r\n{\r\n    font-size: clamp(1.5rem, 2.5vw, 1.75rem);\r\n}\r\n\r\n.menu_nav\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu_link\r\n{\r\n    font-size: clamp(1rem, 2.5vw, 1.1875rem);\r\n    padding: 1rem;\r\n    font-weight: bold;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-decoration: none;\r\n}\r\n\r\n.menu_link .feather\r\n{\r\n    transition: transform 150ms;\r\n}\r\n\r\n.header_nav\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    column-gap: clamp(1.5rem, 2.5vw, 2rem)\r\n}\r\n\r\n.header_link\r\n{\r\n    display: inline-flex;\r\n    min-height: 3rem;\r\n    min-width: 3rem;\r\n    font-size: clamp(1rem, 2.5vw, 1.1875rem);\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.section\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: clamp(.625rem, 2.5vw, 1rem);\r\n}\r\n\r\n.section_title\r\n{\r\n    font-size: clamp(2rem, 2.5vw, 3rem);\r\n}\r\n\r\n.section_text\r\n{\r\n    font-size: clamp(1rem, 2.5vw, 1.1875rem);\r\n}\r\n\r\n.form\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: clamp(1rem, 2.5vw, 1.5rem);\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.input\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: .625rem;\r\n    width: 100%;\r\n}\r\n\r\n.input_field\r\n{\r\n    padding: .625rem;\r\n    background-color: var(--light-purple);\r\n    border-radius: .5rem;\r\n    border: 2px solid var(--light-purple);\r\n    font-size: clamp(1rem, 2.5vw, 1.1875rem);\r\n    font-weight: bold;\r\n}\r\n\r\n.input_label\r\n{\r\n    font-size: clamp(.875rem, 2.5vw, 1rem);\r\n}\r\n\r\n.input_notice\r\n{\r\n    flex-direction: row;\r\n    column-gap: clamp(.25rem, 2.5vw, .5rem);\r\n    align-items: center;\r\n}\r\n\r\n.input_notice .feather\r\n{\r\n    stroke: var(--pink);\r\n    width: clamp(1.1875rem, 2.5vw, 1.5rem);\r\n}\r\n\r\n.input_notice_text\r\n{\r\n    font-weight: bold;\r\n    color: var(--pink);\r\n    font-size: clamp(.875rem, 2.5vw, 1rem);\r\n}\r\n\r\n.checkbox\r\n{\r\n    display: flex;\r\n    flex-direction: row;\r\n    column-gap: clamp(.25rem, 2.5vw, .5rem);\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n.checkbox .feather-check-square\r\n{\r\n    stroke: var(--pink);\r\n}\r\n\r\n.button\r\n{\r\n    width: fit-content;\r\n    min-width: 3rem;\r\n    min-height: 3rem;\r\n    padding-inline: clamp(1rem, 2.5vw, 1.5rem);\r\n    font-family: 'Permanent Marker';\r\n    font-size: clamp(.875rem, 2.5vw, 1rem);\r\n    cursor: pointer;\r\n}\r\n\r\n.button_solid\r\n{\r\n    background-color: var(--pink);\r\n    border-radius: .5rem;\r\n    color: var(--white);\r\n    border: 2px solid var(--pink);\r\n    transition: transform 150ms, background-color 150ms, border-color 150ms, color 150ms;\r\n}\r\n\r\n.notice\r\n{\r\n    column-gap: 1rem;\r\n    align-items: center;\r\n    padding: clamp(1rem, 2.5vw, 1.5rem);\r\n    background-color: var(--pig);\r\n    border-radius: .5rem;\r\n    width: 100%;\r\n}\r\n\r\n.notice_symbol\r\n{\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\r\n\r\n.notice_section\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: .5rem;\r\n}\r\n\r\n.notice_title\r\n{\r\n    font-size: clamp(.875rem, 2.5vw, 1rem);\r\n    font-family: \"Source Sans 3\";\r\n    font-weight: bold;\r\n}\r\n\r\n.notice_text\r\n{\r\n    font-size: clamp(1rem, 2.5vw, 1.1875rem);\r\n}",""]);const l=o},440:(n,r,e)=>{e.d(r,{Z:()=>l});var t=e(81),i=e.n(t),a=e(645),o=e.n(a)()(i());o.push([n.id,".brand_link:hover ~ .brand_logotype,\r\n.brand_link:focus ~ .brand_logotype\r\n{\r\n    color: var(--pink);\r\n}\r\n\r\n.menu_link.is_current .feather\r\n{\r\n    display: none;\r\n}\r\n\r\n.menu_link.is_current,\r\n.header_link.is_current\r\n{\r\n    color: var(--pink);\r\n    font-style: italic;\r\n}\r\n\r\n.menu_link:hover,\r\n.menu_link:focus-within,\r\n.header_link:hover,\r\n.header_link:focus-within\r\n{\r\n    text-decoration: underline;\r\n}\r\n\r\n.menu_link:hover .feather,\r\n.menu_link:focus-within .feather\r\n{\r\n    transform: translateX(1rem);\r\n}\r\n\r\n#menuButton\r\n{\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#menuButton:before\r\n{\r\n    position: absolute;\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: red;\r\n    z-index: -1;\r\n    border-radius: 100%;\r\n    background-color: var(--light-purple);\r\n    transform: scale(0);\r\n    transition: 150ms transform;\r\n}\r\n\r\n#menuButton.pressed:before,\r\n#menuButton:active:before\r\n{\r\n    transform: scale(1);\r\n}\r\n\r\n#menu\r\n{\r\n    display: none;\r\n}\r\n\r\n#menu.is_open\r\n{\r\n    display: block;\r\n}\r\n\r\n.menu_inner.is_showing\r\n{\r\n    transform: translateX(100%);\r\n}\r\n\r\n.menu_background.is_showing\r\n{\r\n    opacity: 1;\r\n}\r\n\r\n#header .header_nav\r\n{\r\n    display: none;\r\n}\r\n\r\n/* Checkbox när den inte är i-checkad */\r\n.checkbox .feather-check-square,\r\n.checkbox.is_checked .feather-square\r\n{\r\n    display: none;\r\n}\r\n\r\n/* Checkbox när den ÄR i-checkad */\r\n.checkbox.is_checked .feather-check-square\r\n{\r\n    display: block;\r\n}\r\n\r\n.have_error .input_notice\r\n{\r\n    display: flex;\r\n}\r\n\r\n.input_notice\r\n{\r\n    display: none;\r\n}\r\n\r\n/* Formuläret har fel */\r\n.have_error .notice\r\n{\r\n    display: flex;\r\n}\r\n\r\n/* Formuläret har inget fel */\r\n.notice\r\n{\r\n    display: none;\r\n}\r\n\r\n.button_solid:hover,\r\n.button_solid:focus-within\r\n{\r\n    transform: scale(1.1);\r\n    background-color: var(--white);\r\n    border-color: var(--pink);\r\n    color: var(--pink);\r\n}\r\n\r\n@media (min-width: 600px)\r\n{\r\n    #menu,\r\n    #menuButton\r\n    {\r\n        display: none !important;\r\n    }\r\n\r\n    #header .header_nav\r\n    {\r\n        display: inline-flex;\r\n    }\r\n\r\n}\r\n",""]);const l=o},489:(n,r,e)=>{e.d(r,{Z:()=>g});var t=e(81),i=e.n(t),a=e(645),o=e.n(a),l=e(667),s=e.n(l),c=new URL(e(777),e.b),d=new URL(e(90),e.b),m=new URL(e(605),e.b),p=o()(i()),u=s()(c),f=s()(d),h=s()(m);p.push([n.id,":root\r\n{\r\n    --black: #131314;\r\n    --white: #fff;\r\n    --pink-gradient: radial-gradient(circle, rgba(235,18,122,1) 0%, rgba(252,70,107,1) 100%);\r\n    --pink: #EC0F5E;\r\n    --grey: #D6D6E0;\r\n    --light-purple: #E5E5F4;\r\n    --pig: #ffd2e8;\r\n}\r\n\r\n@font-face\r\n{\r\n    font-family: 'Source Sans 3';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url("+u+") format('truetype');\r\n}\r\n\r\n@font-face\r\n{\r\n    font-family: 'Source Sans 3';\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    src: url("+f+") format('truetype');\r\n}\r\n\r\n@font-face\r\n{\r\n    font-family: 'Permanent Marker';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url("+h+") format('truetype');\r\n}",""]);const g=p},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(o[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),r.push(d))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},o=[],l=0;l<n.length;l++){var s=n[l],c=t.base?s[0]+t.base:s[0],d=a[c]||0,m="".concat(c," ").concat(d);a[c]=d+1;var p=e(m),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(u);else{var f=i(u,t);t.byIndex=l,r.splice(l,0,{identifier:m,updater:f,references:1})}o.push(m)}return o}function i(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,i){var a=t(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var l=e(a[o]);r[l].references--}for(var s=t(n,i),c=0;c<a.length;c++){var d=e(a[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,i&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},460:(n,r,e)=>{var t=e(379),i=e.n(t),a=e(795),o=e.n(a),l=e(569),s=e.n(l),c=e(565),d=e.n(c),m=e(216),p=e.n(m),u=e(589),f=e.n(u),h=e(945),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),i()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var v=e(489),w={};w.styleTagTransform=f(),w.setAttributes=d(),w.insert=s().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=p(),i()(v.Z,w),v.Z&&v.Z.locals&&v.Z.locals;var y=e(440),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=s().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=p(),i()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;var k=e(574),x={};x.styleTagTransform=f(),x.setAttributes=d(),x.insert=s().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=p(),i()(k.Z,x),k.Z&&k.Z.locals&&k.Z.locals;var _=e(716),L={};L.styleTagTransform=f(),L.setAttributes=d(),L.insert=s().bind(null,"head"),L.domAPI=o(),L.insertStyleElement=p(),i()(_.Z,L),_.Z&&_.Z.locals&&_.Z.locals;const E=[],B=()=>{root.insertAdjacentHTML("beforeend",'\n<footer id="footer">\n    <div class="wrapper">\n        <p class="author">b21phiro</p>\n    </div>\n</footer>\n')},S=()=>{const n=document.getElementById("menu"),r=n.children[0],e=n.children[1],t="is_showing",i="is_open";n.classList.contains(i)?(r.classList.remove(t),e.classList.remove(t),setTimeout((()=>{n.classList.remove(i)}),150)):(n.classList.add(i),setTimeout((()=>{r.classList.add(t),e.classList.add(t)}),150))};((...n)=>{E.push(n)})({path:"/",title:"Framsida",page:e.e(441).then(e.bind(e,441))},{path:"/boka-tid",title:"Boka tid",page:e.e(463).then(e.bind(e,463))},{path:"/logga-in",title:"Logga in",page:e.e(109).then(e.bind(e,109))});const Z=async()=>{A();const n=(()=>{const n=window.location;for(let r of E[0])if(r.path==n.pathname)return r;return!1})();if(n){const r=await n.page;I(n.title),r.default(document.getElementById("main").children[0]),T(document.querySelectorAll(".header_link")),T(document.querySelectorAll(".menu_link"))}else console.error("Error 404")},T=n=>{for(let r of n)r.pathname==window.location.pathname?r.classList.add("is_current"):r.classList.remove("is_current")},A=()=>{const n=document.getElementById("main").children[0];for(;n.firstChild;)n.removeChild(n.lastChild)},I=n=>{document.title=`${n} | Klipp Mig`};window.onload=()=>{(()=>{const n=document.createElement("DIV");n.id="root",document.body.appendChild(n),(n=>{n.insertAdjacentHTML("beforeend",'\n<header id="header">\n    <div class="wrapper">\n        <div class="brand">\n            <a class="brand_link" href="/" title="Hem"></a>\n            <p class="brand_logotype">Klipp.</p>\n        </div>\n        <nav class="header_nav">\n            <a class="header_link" href="/" title="Hem">Hem</a>\n            <a class="header_link" href="/boka-tid">Boka</a>\n            <a class="header_link" href="logga-in" title="Logga in">Logga in</a>\n        </nav>\n        <button id="menuButton" class="button" type="button">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="feather feather-menu">\n                <line x1="3" y1="12" x2="21" y2="12"></line>\n                <line x1="3" y1="6" x2="21" y2="6"></line>\n                <line x1="3" y1="18" x2="21" y2="18"></line>\n            </svg>\n        </button>\n    </div>\n</header>\n'),document.getElementById("menuButton").addEventListener("click",(n=>{var r;(r=document.getElementById("menuButton")).classList.add("pressed"),setTimeout((()=>{r.classList.remove("pressed")}),150)}))})(n),(n=>{n.insertAdjacentHTML("beforeend",'\n<aside id="menu">\n    <div id="menuBackground" class="menu_background"></div>\n    <div class="menu_inner">\n        <h4 class="menu_title">Navigation</h4>\n        <nav class="menu_nav">\n            <a class="menu_link" href="/" title="Hem">\n                Hem\n                <svg class="feather feather-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                    <line x1="5" y1="12" x2="19" y2="12"></line>\n                    <polyline points="12 5 19 12 12 19"></polyline>\n                </svg>\n            </a>\n            <a class="menu_link" href="boka-tid" title="Boka tid">\n                Boka tid\n                <svg class="feather feather-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                    <line x1="5" y1="12" x2="19" y2="12"></line>\n                    <polyline points="12 5 19 12 12 19"></polyline>\n                </svg>\n            </a>\n        </nav>\n        <h4 class="menu_title">Funktioner</h4>\n        <nav class="menu_nav">\n            <a class="menu_link" href="/logga-in" title="Logga in">\n                Logga in\n                <svg class="feather feather-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                    <line x1="5" y1="12" x2="19" y2="12"></line>\n                    <polyline points="12 5 19 12 12 19"></polyline>\n                </svg>\n            </a>\n        </nav>\n    </div>\n</aside>\n'),(()=>{const n=document.querySelectorAll(".menu_link");for(let r of n)if(r.pathname==window.location.pathname){r.classList.add("is_current");break}})(),document.getElementById("menuButton").addEventListener("click",S),document.getElementById("menuBackground").addEventListener("click",S)})(n),(n=>{n.insertAdjacentHTML("beforeend",'\n<main id="main">\n    <div class="wrapper"></div>\n</main>')})(n),B()})(),history.replaceState(null,null,window.location),Z()},window.onpopstate=n=>{n.preventDefault(),history.replaceState(null,null,window.location),Z()},window.onclick=n=>{"A"==n.target.tagName&&"_blank"!=n.target.target&&(n.preventDefault(),history.pushState(null,null,new URL(n.target.href)),Z())}},605:(n,r,e)=>{n.exports=e.p+"109a10dca0508e41aa12.ttf"},90:(n,r,e)=>{n.exports=e.p+"4415c0f96d5d1b3d91fd.ttf"},777:(n,r,e)=>{n.exports=e.p+"8b91864a5f05c97bca55.ttf"}},n=>{n(n.s=460)}]);