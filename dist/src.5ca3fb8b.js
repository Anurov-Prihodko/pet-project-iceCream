parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hR3q":[function(require,module,exports) {
!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}();
},{}],"clu1":[function(require,module,exports) {

},{"./..\\images\\product\\mobile-icecream.png":[["mobile-icecream.5005ed79.png","fcXD"],"fcXD"],"./..\\images\\product\\mobile-icecream@2x.png":[["mobile-icecream@2x.e80779c9.png","CvuA"],"CvuA"],"./..\\images\\product\\tablet-icecream.png":[["tablet-icecream.3a5aa0c9.png","sLl2"],"sLl2"],"./..\\images\\product\\tablet-icecream@2x.png":[["tablet-icecream@2x.9f95d862.png","fdAw"],"fdAw"],"./..\\images\\product\\desktop-icecream.png":[["desktop-icecream.78da0950.png","NBQt"],"NBQt"],"./..\\images\\product\\desktop-icecream@2x.png":[["desktop-icecream@2x.b4ba299a.png","w18W"],"w18W"],"./..\\images\\product\\mobile-ice-coffee.png":[["mobile-ice-coffee.21c6cff0.png","tY1Y"],"tY1Y"],"./..\\images\\product\\mobile-ice-coffee@2x.png":[["mobile-ice-coffee@2x.aaab81a4.png","ytxh"],"ytxh"],"./..\\images\\product\\tablet-ice-coffee.png":[["tablet-ice-coffee.2682bafd.png","mYWL"],"mYWL"],"./..\\images\\product\\tablet-ice-coffee@2x.png":[["tablet-ice-coffee@2x.737b1a71.png","SicM"],"SicM"],"./..\\images\\product\\desktop-ice-coffee.png":[["desktop-ice-coffee.ed6ba62f.png","Bmu5"],"Bmu5"],"./..\\images\\product\\desktop-ice-coffee@2x.png":[["desktop-ice-coffee@2x.5b1baf85.png","aPTM"],"aPTM"],"./..\\images\\product\\mobile-milkshakes.png":[["mobile-milkshakes.8d0f7d5e.png","h2aJ"],"h2aJ"],"./..\\images\\product\\mobile-milkshakes@2x.png":[["mobile-milkshakes@2x.e10f355e.png","lOh0"],"lOh0"],"./..\\images\\product\\tablet-milkshakes.png":[["tablet-milkshakes.131c3125.png","xSxv"],"xSxv"],"./..\\images\\product\\tablet-milkshakes@2x.png":[["tablet-milkshakes@2x.d7f65e5e.png","rOJ2"],"rOJ2"],"./..\\images\\product\\desktop-milkshakes.png":[["desktop-milkshakes.5c4a72a4.png","zfD5"],"zfD5"],"./..\\images\\product\\desktop-milkshakes@2x.png":[["desktop-milkshakes@2x.fc4f318e.png","SyY1"],"SyY1"],"./..\\images\\product\\dots-products.png":[["dots-products.5bada95c.png","fMZc"],"fMZc"],"./..\\images\\about\\mobile-sectionbg.png":[["mobile-sectionbg.25628853.png","b1tG"],"b1tG"],"./..\\images\\about\\mobile-sectionbg@2x.png":[["mobile-sectionbg@2x.bf8dbfbc.png","EvUz"],"EvUz"],"./..\\images\\about\\desktop-sectionbg.png":[["desktop-sectionbg.0c4d0c14.png","rPVa"],"rPVa"],"./..\\images\\about\\desktop-sectionbg@2x.png":[["desktop-sectionbg@2x.a31b20f8.png","JYZr"],"JYZr"],"./..\\images\\icon-send.svg":[["icon-send.39fe3d13.svg","JNM1"],"JNM1"],"./..\\images\\udder.svg":[["udder.67750231.svg","qRYn"],"qRYn"],"./..\\images\\apples.svg":[["apples.a72621b6.svg","PQQU"],"PQQU"],"./..\\images\\heart.svg":[["heart.90a627b9.svg","xypF"],"xypF"],"C:\\Users\\user\\Documents\\GitHub\\pet-project-iceCream\\src\\images\\quotes.png":[["quotes.7652c3c3.png","qrdy"],"qrdy"]}],"Focm":[function(require,module,exports) {
"use strict";require("./modal"),require("./sass/main.scss"),function(){var t=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-menu]"),s=document.querySelector("[data-menu-close]"),o=document.querySelector("[bat-close]"),c=document.querySelector("[bat-ref]"),l=document.querySelector("[data-id-exit1]"),a=document.querySelector("[data-id-exit2]"),i=document.querySelector("[data-id-exit3]"),n=document.querySelector("[data-id-exit4]"),r=document.querySelector("[data-id-exit5]");t.addEventListener("click",function(){e.classList.toggle("is-open"),o.classList.toggle("bat-close"),c.classList.toggle("bat-ref")}),c.addEventListener("click",function(){e.classList.toggle("is-open"),o.classList.toggle("bat-close"),c.classList.toggle("bat-ref")}),l.addEventListener("click",function(){e.classList.toggle("is-open"),o.classList.toggle("bat-close"),c.classList.toggle("bat-ref")}),a.addEventListener("click",function(){e.classList.toggle("is-open"),o.classList.toggle("bat-close"),c.classList.toggle("bat-ref")}),i.addEventListener("click",function(){e.classList.toggle("is-open"),o.classList.toggle("bat-close"),c.classList.toggle("bat-ref")}),n.addEventListener("click",function(){e.classList.toggle("is-open"),o.classList.toggle("bat-close"),c.classList.toggle("bat-ref")}),r.addEventListener("click",function(){e.classList.toggle("is-open"),o.classList.toggle("bat-close"),c.classList.toggle("bat-ref")}),s.addEventListener("click",function(){e.classList.toggle("is-open"),o.classList.toggle("bat-close"),c.classList.toggle("bat-ref")})}(),$(document).ready(function(){$("#menu1").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),s=$(e).offset().top;$("body,html").animate({scrollTop:s},1500)})}),$(document).ready(function(){$("#menu2").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),s=$(e).offset().top;$("body,html").animate({scrollTop:s},1500)})}),$(".single-item").slick({autoplay:!0,arrows:!1,dots:!0,dotsClass:"slick-dots"});
},{"./modal":"hR3q","./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/pet-project-icecream/src.5ca3fb8b.js.map