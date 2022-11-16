"use strict";(self.webpackChunkspa_assignment=self.webpackChunkspa_assignment||[]).push([[109],{109:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});const s=(e,n)=>{const t=e.parentNode;let s;for(let e of t.children)if(e.classList.contains("input_notice")){s=e;break}if(!s)return console.error('Input does not have an "input_notice" div-element!'),!1;t.classList.add("have_error"),s.children[1].innerText=n},l=e=>{e.parentNode.classList.remove("have_error")},i=e=>{e.insertAdjacentHTML("afterbegin",'\n<div id="login">\n    <section class="section">\n        <h1 class="section_title">Logga in</h1>\n        <p class="section_text">Som inloggad användare kan du boka tider hos oss snabbt och enkelt!</p>    \n    </section>\n    <form id="loginForm" class="form" method="post">\n    \n        <div class="notice">\n            <svg class="notice_symbol feather feather-alert-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>\n                <line x1="12" y1="9" x2="12" y2="13"></line>\n                <line x1="12" y1="17" x2="12.01" y2="17"></line>\n            </svg>\n            <section class="notice_section">\n                <h4 class="notice_title">Oj hehe!</h4>\n                <p classs="notice_text">Något gick snett, prova igen!</p>\n            </section>\n        </div>\n    \n        \x3c!--Mejl address--\x3e\n        <label class="input">\n            <p class="input_label">Mejl address</p>\n            <input class="input_field" type="email" name="email" title="Email"/>\n            <div class="input_notice">\n                <svg class="feather feather-alert-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                    <circle cx="12" cy="12" r="10"></circle>\n                    <line x1="12" y1="8" x2="12" y2="12"></line>\n                    <line x1="12" y1="16" x2="12.01" y2="16"></line>\n                </svg>\n                <p class="input_notice_text">Något gick fel!</p>\n            </div>\n        </label>\n        \n        \x3c!--Mobilnummer--\x3e\n        <label class="input">\n            <p class="input_label">Mobilnummer</p>\n            <input class="input_field" type="tel" name="tel" title="Mobilnummer"/>\n            <div class="input_notice">\n                <svg class="feather feather-alert-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                    <circle cx="12" cy="12" r="10"></circle>\n                    <line x1="12" y1="8" x2="12" y2="12"></line>\n                    <line x1="12" y1="16" x2="12.01" y2="16"></line>\n                </svg>\n                <p class="input_notice_text">Något gick fel!</p>\n            </div>\n        </label>\n        \n        \x3c!--Håll mig inloggad--\x3e\n        <label id="checkboxLabel" class="checkbox" for="keepSession" title="Håll mig inloggad" >\n            <svg class="feather feather-check-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                <polyline points="9 11 12 14 22 4"></polyline>\n                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>\n            </svg>\n            <svg class="feather feather-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>\n            </svg>\n            <p>Håll mig inloggad!</p>\n        </label>\n        \n        <input id="keepSession" style="display:none;" type="checkbox" name="keepSession"/>\n        \n        <input class="button button_solid" type="submit" name="submit" value="Logga in" title="Logga in"/>\n        \n    </form>\n</div>\n'),document.querySelector("#keepSession").addEventListener("change",(e=>{e.target.checked?document.getElementById("checkboxLabel").classList.add("is_checked"):document.getElementById("checkboxLabel").classList.remove("is_checked")})),document.getElementById("loginForm").onsubmit=e=>{e.preventDefault(),(e=>{let n=!0;const t=new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),i=new RegExp(/^((((0{2}?)|(\+){1})46)|0)7[\d]{8}/g);for(let a of e)switch(a.type){case"email":t.test(a.value)?l(a):(n=!1,s(a,"Nja, tror inte riktigt på den där mejladressen."));break;case"tel":i.test(a.value)?l(a):(n=!1,s(a,"Hmm, ser inte ut att vara ett kontaktbart nummer!"));break;default:continue}return n})(e.target.elements)?alert("SUBMIT"):console.log("FAIL")}}}}]);