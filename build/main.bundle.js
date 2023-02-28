/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/***/ (() => {

// api url
const baseUrl = 'https://tarmeezacademy.com/api/v1/';

// modal fires when user clicks on the forget password button.
document.getElementById('forgotten-password').addEventListener('click', () => {
  Swal.fire({
    title: 'Forgot your password?',
    text: 'Don\'t forget it again, ok?',
    icon: 'info',
    confirmButtonColor: "#3fc3ee"
  });
});

// click to show sign up window.
document.getElementById('create-new-acc').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.sign-up').classList.add('active');
});

// click to hide sign up window.
document.getElementById('close-sign-up').addEventListener('click', () => {
  document.querySelector('.sign-up').classList.remove('active');
});
let emailLogin = document.getElementById('email-login').value;
let passwordLogin = document.getElementById('password-login').value;
let nameSignUp = document.getElementById('name-sign-up').value;
let emailSignUp = document.getElementById('email-sign-up').value;
let passwordSignUp = document.getElementById('password-sign-up').value;
let pictureSignUp = document.getElementById('file-sign-up');
function login(username, password) {
  // axios({
  //     method: 'post',
  //     url: `${baseUrl}/login`,
  //     data: {
  //         email: username,
  //         password
  //     }
  // });
}
// axios.get('https://api.aladhan.com/v1/calendarByCity/2017/4?city=Cairo&country=Egypt&method=5').then(data => console.log(data.data.data));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/_index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/_index.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0px;\n  font-family: \"Mukta\", sans-serif;\n  font-size: 30px;\n}\n\n.wrapper {\n  background-color: #222;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 100px;\n  max-width: 100vw;\n  min-height: 100vh;\n}\n@media (max-width: 800px) {\n  .wrapper {\n    flex-direction: column;\n    gap: 0px;\n  }\n}\n\n.logo {\n  font-family: \"Comfortaa\", sans-serif;\n}\n\n@media (max-width: 800px) {\n  .text {\n    padding-top: 40px;\n  }\n}\n.text .logo {\n  font-family: \"Comfortaa\", sans-serif;\n  font-size: 60px;\n  user-select: none;\n}\n.text .logo span {\n  font-weight: 800;\n  letter-spacing: -4px;\n  letter-spacing: -4px;\n}\n.text .logo .outer {\n  position: relative;\n  bottom: 8px;\n  right: 12px;\n}\n.text .slogan {\n  font-size: 17px;\n  margin-top: -13px;\n  font-weight: 100;\n}\n\n.login-box {\n  box-shadow: 0 2px 5px rgb(0, 0, 0), 0 8px 20px 0px rgb(0, 0, 0);\n}\n.login-box .title {\n  color: #464646;\n  user-select: none;\n  font-weight: 400;\n}\n.login-box .title span {\n  font-weight: 700;\n  letter-spacing: -1px;\n  font-family: \"Comfortaa\", sans-serif;\n}\n.login-box .forgotten-password {\n  font-size: 13px;\n  padding-top: 10px;\n  cursor: pointer;\n  user-select: none;\n  width: fit-content;\n  margin: auto;\n}\n.login-box .forgotten-password:hover {\n  text-decoration: underline;\n}\n.login-box input {\n  transition: color 0.3s ease;\n  outline: none;\n  height: 50px;\n  border: 1px solid #cacaca;\n  min-width: 370px;\n  font-size: 15px;\n  background: none;\n}\n@media (max-width: 500px) {\n  .login-box input {\n    min-width: 300px;\n  }\n}\n.login-box input:focus {\n  border-color: rgb(13, 202, 240);\n  border-width: 2px;\n}\n.login-box input::placeholder {\n  color: #919191;\n  user-select: none;\n  font-size: 18px;\n}\n.login-box input:focus::placeholder {\n  color: #c9c9c9;\n}\n.login-box .or {\n  bottom: 56px;\n  left: 50%;\n  transform: translatex(-50%);\n  user-select: none;\n}\n\n.sign-up {\n  background-color: hsla(0, 0%, 13%, 0.9);\n  transition: opacity 0.3s ease-in-out;\n  opacity: 0;\n  pointer-events: none;\n}\n.sign-up.active {\n  opacity: 1;\n  pointer-events: all;\n}\n.sign-up.active form {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n.sign-up form {\n  max-width: 400px;\n  background-color: #fff;\n  padding: 15px;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;\n  box-shadow: 0 2px 5px rgb(0, 0, 0), 0 8px 20px 0px rgb(0, 0, 0);\n}\n.sign-up form i.fa-xmark {\n  color: #777;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 25px;\n  cursor: pointer;\n  padding: 7px;\n}\n.sign-up form .header {\n  color: #222;\n}\n.sign-up form .header .title {\n  font-weight: 700;\n  font-size: 30px;\n  margin: 0px;\n}\n.sign-up form .header p {\n  font-size: 15px;\n  color: #606770;\n  margin: 0px;\n}\n.sign-up form .header hr {\n  margin: 10px 0 15px;\n}\n.sign-up form input {\n  color: #222;\n  transition: color 0.3s ease;\n  outline: none;\n  height: 40px;\n  border: 1px solid #cacaca;\n  min-width: 370px;\n  font-size: 15px;\n  background: none;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  padding-left: 10px;\n}\n.sign-up form input[type=file] {\n  display: none;\n}\n@media (max-width: 500px) {\n  .sign-up form input {\n    min-width: 300px;\n  }\n}\n.sign-up form label {\n  color: #222;\n  font-size: 15px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  border: 1px solid #cacaca;\n  border-radius: 5px;\n  padding: 10px;\n}\n.sign-up form label i {\n  padding-right: 10px;\n}\n.sign-up form label span {\n  display: block;\n  margin-top: -23px;\n  margin-left: 30px;\n}\n.sign-up form .info {\n  font-size: 11px;\n  color: #777;\n  font-weight: 600;\n}\n.sign-up form .info p {\n  margin-bottom: 10px;\n}\n.sign-up form button {\n  width: 50%;\n  margin: 10px auto;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_global.scss","webpack://./src/scss/_index.scss","webpack://./src/scss/pages/login.scss","webpack://./src/scss/abstract/_colors.scss"],"names":[],"mappings":"AAAA;;;EAGC,SAAA;EACA,UAAA;EACA,sBAAA;ACCD;;ADEA;EACC,WAAA;EACA,gCAAA;EACA,eAAA;ACCD;;ACTA;EACC,sBCJqB;EDKrB,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;EACA,iBAAA;ADYD;ACVC;EACC;IACC,sBAAA;IACA,QAAA;EDYD;AACF;;ACRA;EACC,oCAAA;ADWD;;ACPC;EACC;IACC,iBAAA;EDUD;AACF;ACPC;EACC,oCAAA;EACA,eAAA;EACA,iBAAA;ADSF;ACPE;EACC,gBAAA;EACA,oBAAA;EACA,oBAAA;ADSH;ACNE;EACC,kBAAA;EACA,WAAA;EACA,WAAA;ADQH;ACJC;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;ADMF;;ACFA;EACC,+DAAA;ADKD;ACHC;EACC,cAAA;EACA,iBAAA;EACA,gBAAA;ADKF;ACHE;EACC,gBAAA;EACA,oBAAA;EACA,oCAAA;ADKH;ACDC;EACC,eAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;ADGF;ACDE;EACC,0BAAA;ADGH;ACCC;EACC,2BAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;ADCF;ACCE;EACC;IACC,gBAAA;EDCF;AACF;ACEE;EACC,+BAAA;EACA,iBAAA;ADAH;ACGE;EACC,cAAA;EACA,iBAAA;EACA,eAAA;ADDH;ACIE;EACC,cAAA;ADFH;ACMC;EACC,YAAA;EACA,SAAA;EACA,2BAAA;EACA,iBAAA;ADJF;;ACQA;EACC,uCAAA;EACA,oCAAA;EACA,UAAA;EACA,oBAAA;ADLD;ACOC;EACC,UAAA;EACA,mBAAA;ADLF;ACOE;EACC,yCAAA;EACA,UAAA;ADLH;ACSC;EACC,gBAAA;EACA,sBAAA;EACA,aAAA;EACA,QAAA;EACA,SAAA;EACA,yCAAA;EACA,UAAA;EACA,gEAAA;EACA,+DAAA;ADPF;ACSE;EACC,WAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,eAAA;EACA,eAAA;EACA,YAAA;ADPH;ACUE;EACC,WAAA;ADRH;ACUG;EACC,gBAAA;EACA,eAAA;EACA,WAAA;ADRJ;ACWG;EACC,eAAA;EACA,cAAA;EACA,WAAA;ADTJ;ACYG;EACC,mBAAA;ADVJ;ACcE;EACC,WAAA;EACA,2BAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;ADZH;ACcG;EACC,aAAA;ADZJ;ACeG;EACC;IACC,gBAAA;EDbH;AACF;ACiBE;EACC,WAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;ADfH;ACiBG;EACC,mBAAA;ADfJ;ACkBG;EACC,cAAA;EACA,iBAAA;EACA,iBAAA;ADhBJ;ACoBE;EACC,eAAA;EACA,WAAA;EACA,gBAAA;ADlBH;ACoBG;EACC,mBAAA;ADlBJ;ACsBE;EACC,UAAA;EACA,iBAAA;ADpBH","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0px;\r\n\tfont-family: \"Mukta\", sans-serif;\r\n\tfont-size: 30px;\r\n}\r\n","*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0px;\n  font-family: \"Mukta\", sans-serif;\n  font-size: 30px;\n}\n\n.wrapper {\n  background-color: #222;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 100px;\n  max-width: 100vw;\n  min-height: 100vh;\n}\n@media (max-width: 800px) {\n  .wrapper {\n    flex-direction: column;\n    gap: 0px;\n  }\n}\n\n.logo {\n  font-family: \"Comfortaa\", sans-serif;\n}\n\n@media (max-width: 800px) {\n  .text {\n    padding-top: 40px;\n  }\n}\n.text .logo {\n  font-family: \"Comfortaa\", sans-serif;\n  font-size: 60px;\n  user-select: none;\n}\n.text .logo span {\n  font-weight: 800;\n  letter-spacing: -4px;\n  letter-spacing: -4px;\n}\n.text .logo .outer {\n  position: relative;\n  bottom: 8px;\n  right: 12px;\n}\n.text .slogan {\n  font-size: 17px;\n  margin-top: -13px;\n  font-weight: 100;\n}\n\n.login-box {\n  box-shadow: 0 2px 5px rgb(0, 0, 0), 0 8px 20px 0px rgb(0, 0, 0);\n}\n.login-box .title {\n  color: #464646;\n  user-select: none;\n  font-weight: 400;\n}\n.login-box .title span {\n  font-weight: 700;\n  letter-spacing: -1px;\n  font-family: \"Comfortaa\", sans-serif;\n}\n.login-box .forgotten-password {\n  font-size: 13px;\n  padding-top: 10px;\n  cursor: pointer;\n  user-select: none;\n  width: fit-content;\n  margin: auto;\n}\n.login-box .forgotten-password:hover {\n  text-decoration: underline;\n}\n.login-box input {\n  transition: color 0.3s ease;\n  outline: none;\n  height: 50px;\n  border: 1px solid #cacaca;\n  min-width: 370px;\n  font-size: 15px;\n  background: none;\n}\n@media (max-width: 500px) {\n  .login-box input {\n    min-width: 300px;\n  }\n}\n.login-box input:focus {\n  border-color: rgb(13, 202, 240);\n  border-width: 2px;\n}\n.login-box input::placeholder {\n  color: #919191;\n  user-select: none;\n  font-size: 18px;\n}\n.login-box input:focus::placeholder {\n  color: #c9c9c9;\n}\n.login-box .or {\n  bottom: 56px;\n  left: 50%;\n  transform: translatex(-50%);\n  user-select: none;\n}\n\n.sign-up {\n  background-color: hsla(0, 0%, 13%, 0.9);\n  transition: opacity 0.3s ease-in-out;\n  opacity: 0;\n  pointer-events: none;\n}\n.sign-up.active {\n  opacity: 1;\n  pointer-events: all;\n}\n.sign-up.active form {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n.sign-up form {\n  max-width: 400px;\n  background-color: #fff;\n  padding: 15px;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;\n  box-shadow: 0 2px 5px rgb(0, 0, 0), 0 8px 20px 0px rgb(0, 0, 0);\n}\n.sign-up form i.fa-xmark {\n  color: #777;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 25px;\n  cursor: pointer;\n  padding: 7px;\n}\n.sign-up form .header {\n  color: #222;\n}\n.sign-up form .header .title {\n  font-weight: 700;\n  font-size: 30px;\n  margin: 0px;\n}\n.sign-up form .header p {\n  font-size: 15px;\n  color: #606770;\n  margin: 0px;\n}\n.sign-up form .header hr {\n  margin: 10px 0 15px;\n}\n.sign-up form input {\n  color: #222;\n  transition: color 0.3s ease;\n  outline: none;\n  height: 40px;\n  border: 1px solid #cacaca;\n  min-width: 370px;\n  font-size: 15px;\n  background: none;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  padding-left: 10px;\n}\n.sign-up form input[type=file] {\n  display: none;\n}\n@media (max-width: 500px) {\n  .sign-up form input {\n    min-width: 300px;\n  }\n}\n.sign-up form label {\n  color: #222;\n  font-size: 15px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  border: 1px solid #cacaca;\n  border-radius: 5px;\n  padding: 10px;\n}\n.sign-up form label i {\n  padding-right: 10px;\n}\n.sign-up form label span {\n  display: block;\n  margin-top: -23px;\n  margin-left: 30px;\n}\n.sign-up form .info {\n  font-size: 11px;\n  color: #777;\n  font-weight: 600;\n}\n.sign-up form .info p {\n  margin-bottom: 10px;\n}\n.sign-up form button {\n  width: 50%;\n  margin: 10px auto;\n}","@use \"../base\";\r\n@use \"../abstract\";\r\n\r\n.wrapper {\r\n\tbackground-color: abstract.$mainBackgroundColor;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 100px;\r\n\tmax-width: 100vw;\r\n\tmin-height: 100vh;\r\n\r\n\t@media (max-width: 800px) {\r\n\t\t& {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 0px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.logo {\r\n\tfont-family: \"Comfortaa\", sans-serif;\r\n}\r\n\r\n.text {\r\n\t@media (max-width: 800px) {\r\n\t\t& {\r\n\t\t\tpadding-top: 40px;\r\n\t\t}\r\n\t}\r\n\r\n\t.logo {\r\n\t\tfont-family: \"Comfortaa\", sans-serif;\r\n\t\tfont-size: 60px;\r\n\t\tuser-select: none;\r\n\r\n\t\tspan {\r\n\t\t\tfont-weight: 800;\r\n\t\t\tletter-spacing: -4px;\r\n\t\t\tletter-spacing: -4px;\r\n\t\t}\r\n\r\n\t\t.outer {\r\n\t\t\tposition: relative;\r\n\t\t\tbottom: 8px;\r\n\t\t\tright: 12px;\r\n\t\t}\r\n\t}\r\n\r\n\t.slogan {\r\n\t\tfont-size: 17px;\r\n\t\tmargin-top: -13px;\r\n\t\tfont-weight: 100;\r\n\t}\r\n}\r\n\r\n.login-box {\r\n\tbox-shadow: 0 2px 5px rgb(0 0 0), 0 8px 20px 0px rgb(0 0 0);\r\n\r\n\t.title {\r\n\t\tcolor: #464646;\r\n\t\tuser-select: none;\r\n\t\tfont-weight: 400;\r\n\r\n\t\tspan {\r\n\t\t\tfont-weight: 700;\r\n\t\t\tletter-spacing: -1px;\r\n\t\t\tfont-family: \"Comfortaa\", sans-serif;\r\n\t\t}\r\n\t}\r\n\r\n\t.forgotten-password {\r\n\t\tfont-size: 13px;\r\n\t\tpadding-top: 10px;\r\n\t\tcursor: pointer;\r\n\t\tuser-select: none;\r\n\t\twidth: fit-content;\r\n\t\tmargin: auto;\r\n\r\n\t\t&:hover {\r\n\t\t\ttext-decoration: underline;\r\n\t\t}\r\n\t}\r\n\r\n\tinput {\r\n\t\ttransition: color 0.3s ease;\r\n\t\toutline: none;\r\n\t\theight: 50px;\r\n\t\tborder: 1px solid #cacaca;\r\n\t\tmin-width: 370px;\r\n\t\tfont-size: 15px;\r\n\t\tbackground: none;\r\n\r\n\t\t@media (max-width: 500px) {\r\n\t\t\t& {\r\n\t\t\t\tmin-width: 300px;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&:focus {\r\n\t\t\tborder-color: rgb(13, 202, 240);\r\n\t\t\tborder-width: 2px;\r\n\t\t}\r\n\r\n\t\t&::placeholder {\r\n\t\t\tcolor: #919191;\r\n\t\t\tuser-select: none;\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\r\n\t\t&:focus::placeholder {\r\n\t\t\tcolor: #c9c9c9;\r\n\t\t}\r\n\t}\r\n\r\n\t.or {\r\n\t\tbottom: 56px;\r\n\t\tleft: 50%;\r\n\t\ttransform: translatex(-50%);\r\n\t\tuser-select: none;\r\n\t}\r\n}\r\n\r\n.sign-up {\r\n\tbackground-color: hsla(0, 0%, 13%, 0.9);\r\n\ttransition: opacity 0.3s ease-in-out;\r\n\topacity: 0;\r\n\tpointer-events: none;\r\n\r\n\t&.active {\r\n\t\topacity: 1;\r\n\t\tpointer-events: all;\r\n\r\n\t\tform {\r\n\t\t\ttransform: translate(-50%, -50%) scale(1);\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}\r\n\r\n\tform {\r\n\t\tmax-width: 400px;\r\n\t\tbackground-color: #fff;\r\n\t\tpadding: 15px;\r\n\t\ttop: 60%;\r\n\t\tleft: 50%;\r\n\t\ttransform: translate(-50%, -50%) scale(0);\r\n\t\topacity: 0;\r\n\t\ttransition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;\r\n\t\tbox-shadow: 0 2px 5px rgb(0 0 0), 0 8px 20px 0px rgb(0 0 0);\r\n\r\n\t\ti.fa-xmark {\r\n\t\t\tcolor: #777;\r\n\t\t\tposition: absolute;\r\n\t\t\tright: 10px;\r\n\t\t\ttop: 10px;\r\n\t\t\tfont-size: 25px;\r\n\t\t\tcursor: pointer;\r\n\t\t\tpadding: 7px;\r\n\t\t}\r\n\r\n\t\t.header {\r\n\t\t\tcolor: #222;\r\n\r\n\t\t\t.title {\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tfont-size: 30px;\r\n\t\t\t\tmargin: 0px;\r\n\t\t\t}\r\n\r\n\t\t\tp {\r\n\t\t\t\tfont-size: 15px;\r\n\t\t\t\tcolor: #606770;\r\n\t\t\t\tmargin: 0px;\r\n\t\t\t}\r\n\r\n\t\t\thr {\r\n\t\t\t\tmargin: 10px 0 15px;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tinput {\r\n\t\t\tcolor: #222;\r\n\t\t\ttransition: color 0.3s ease;\r\n\t\t\toutline: none;\r\n\t\t\theight: 40px;\r\n\t\t\tborder: 1px solid #cacaca;\r\n\t\t\tmin-width: 370px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tbackground: none;\r\n\t\t\tborder-radius: 5px;\r\n\t\t\tmargin-bottom: 10px;\r\n\t\t\tpadding-left: 10px;\r\n\r\n\t\t\t&[type=\"file\"] {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width: 500px) {\r\n\t\t\t\t& {\r\n\t\t\t\t\tmin-width: 300px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlabel {\r\n\t\t\tcolor: #222;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tmargin-bottom: 15px;\r\n\t\t\tcursor: pointer;\r\n\t\t\tborder: 1px solid #cacaca;\r\n\t\t\tborder-radius: 5px;\r\n\t\t\tpadding: 10px;\r\n\r\n\t\t\ti {\r\n\t\t\t\tpadding-right: 10px;\r\n\t\t\t}\r\n\r\n\t\t\tspan {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tmargin-top: -23px;\r\n\t\t\t\tmargin-left: 30px;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.info {\r\n\t\t\tfont-size: 11px;\r\n\t\t\tcolor: #777;\r\n\t\t\tfont-weight: 600;\r\n\r\n\t\t\tp {\r\n\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tbutton {\r\n\t\t\twidth: 50%;\r\n\t\t\tmargin: 10px auto;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// body {\r\n// \tdisplay: flex;\r\n// \tflex-direction: column;\r\n// \talign-items: center;\r\n// \tjustify-content: center;\r\n// \theight: 100vh;\r\n// }\r\n\r\n// .login-box {\r\n// \tbackground-color: darkgray;\r\n// \tmax-width: 400px;\r\n// \tborder-radius: 10px;\r\n// \tmargin-top: 30px;\r\n// }\r\n\r\n// form {\r\n// \tdisplay: flex;\r\n// \tflex-direction: column;\r\n// \tpadding: 20px;\r\n// }\r\n\r\n// input {\r\n// \tmargin-bottom: 10px;\r\n// \toutline: none;\r\n// \tborder: none;\r\n// \tborder-radius: 5px;\r\n// \tmin-width: 300px;\r\n// \tpadding-left: 10px;\r\n// }\r\n","$mainBackgroundColor: #222;\r\n// $mainBackgroundColor: red;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/_index.scss":
/*!******************************!*\
  !*** ./src/scss/_index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./_index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/_index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/_index.scss */ "./src/scss/_index.scss");
/* harmony import */ var _js_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/login */ "./src/js/login.js");
/* harmony import */ var _js_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_login__WEBPACK_IMPORTED_MODULE_1__);
// css


// js

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map