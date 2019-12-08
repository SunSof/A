parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JHql":[function(require,module,exports) {

},{"./img/tower.png":[["tower.8b835d1b.png","d+iC"],"d+iC"],"./img/arrow.png":[["arrow.410a4e8e.png","X2Fd"],"X2Fd"]}],"dP4H":[function(require,module,exports) {

},{}],"Zavz":[function(require,module,exports) {

},{"./img/heart.png":[["heart.291c3286.png","qSYX"],"qSYX"],"./img/mouse.png":[["mouse.38b46574.png","IxGp"],"IxGp"],"./img/lamp.png":[["lamp.c6ebc387.png","N85u"],"N85u"]}],"Qcs7":[function(require,module,exports) {

},{"./img/cups.jpg":[["cups.5041518b.jpg","2ZAO"],"2ZAO"],"./img/books.jpg":[["books.cb7308e6.jpg","UDWC"],"UDWC"],"./img/whiskey.png":[["whiskey.9c637b7c.png","loI/"],"loI/"]}],"hA1B":[function(require,module,exports) {

},{"./img/mountin.jpg":[["mountin.eba0d832.jpg","uagR"],"uagR"]}],"ycpq":[function(require,module,exports) {

},{"./img/repair.png":[["repair.3dd54560.png","dpZe"],"dpZe"],"./img/roller.png":[["roller.0fe9b4a7.png","kWT1"],"kWT1"],"./img/game.png":[["game.8e16d553.png","08C6"],"08C6"],"./img/plug.png":[["plug.e01439c4.png","4NJU"],"4NJU"]}],"eCtu":[function(require,module,exports) {

},{"./img/man.png":[["man.f7de2324.png","vA2T"],"vA2T"]}],"i71s":[function(require,module,exports) {

},{"./img/project.png":[["project.6a3f9ec3.png","QR4O"],"QR4O"]}],"aXbk":[function(require,module,exports) {

},{"./img/love.png":[["love.44da7b48.png","XVG6"],"XVG6"]}],"/4Ru":[function(require,module,exports) {

},{"./img/Latest.png":[["Latest.cd458958.png","qZuF"],"qZuF"]}],"nOZ7":[function(require,module,exports) {

},{"./img/subscribe.png":[["subscribe.49f48289.png","RDe8"],"RDe8"]}],"Ilra":[function(require,module,exports) {

},{"./img/office.jpg":[["office.802e3206.jpg","zDwx"],"zDwx"],"./img/office2.jpeg":[["office2.76c3a261.jpeg","/UFr"],"/UFr"],"./img/office3.jpg":[["office3.58405db2.jpg","rSIL"],"rSIL"]}],"H99C":[function(require,module,exports) {
"use strict";require("./1-start.scss"),require("./2-hello.scss"),require("./3-about.scss"),require("./4-feature.scss"),require("./5-submit.scss"),require("./6-services.scss"),require("./7-impressed.scss"),require("./8-portfolio.scss"),require("./9-team.scss"),require("./10-loved.scss"),require("./11-testimonials.scss"),require("./12-latest.scss"),require("./13-price.scss"),require("./14-subscribe.scss"),require("./15-contacts.scss"),require("./16-map.scss"),require("./17-follow.scss"),require("./18-words.scss"),require("./mixins.scss"),$(function(){var s=$(".b-card--bg1-hov");$(".js-open").on("click",function(){s.addClass("alt")}),$(".js-close").on("click",function(){s.removeClass("alt")}),$(".js-slider").slick({dots:!0}),$(".js-about-slider").slick({dots:!0,arrows:!1}),$(".b-hello__btn-contact-us").on("click",function(s){var e=$(".b-contacts__all");e.length&&(s.preventDefault(),$("html, body").stop().animate({scrollTop:e.offset().top},1e3))})});
},{"./1-start.scss":"JHql","./2-hello.scss":"dP4H","./3-about.scss":"Zavz","./4-feature.scss":"Qcs7","./5-submit.scss":"hA1B","./6-services.scss":"ycpq","./7-impressed.scss":"eCtu","./8-portfolio.scss":"i71s","./9-team.scss":"dP4H","./10-loved.scss":"aXbk","./11-testimonials.scss":"dP4H","./12-latest.scss":"/4Ru","./13-price.scss":"dP4H","./14-subscribe.scss":"nOZ7","./15-contacts.scss":"Ilra","./16-map.scss":"dP4H","./17-follow.scss":"dP4H","./18-words.scss":"dP4H","./mixins.scss":"dP4H"}]},{},["H99C"], null)
//# sourceMappingURL=https://sunsof.github.io/Bouncy/src.ffa29459.js.map