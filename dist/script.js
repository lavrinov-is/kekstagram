/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/utils */ "./src/js/modules/utils.js");
/* harmony import */ var _modules_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/test */ "./src/js/modules/test.js");




window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_utils__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_test__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
/*
Обновил ветку мастер и создал ветку module3-task3. Можно приступать работе
материал для изучения перед 3-ей лекции:
  * https://developer.mozilla.org/ru/docs/Web/API/Console
  * https://htmlacademy.ru/blog/boost/frontend/collections-js
  * https://habr.com/ru/post/243815/
  * https://habr.com/ru/post/413287/
  * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
лекция 3 https://up.htmlacademy.ru/javascript/19/module/3/lecture
задание к 3-ей лекции https://up.htmlacademy.ru/javascript/20/tasks/8
*/

/***/ }),

/***/ "./src/js/modules/test.js":
/*!********************************!*\
  !*** ./src/js/modules/test.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var test = function test() {
  var COUTN_PICTURES = 25;
  var MockData = {
    COMMENTS: ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'],
    NAMES: ['Артем', 'Тамби', 'Алекс', 'Сеня', 'Джорджина']
  };
  var pictureTmpl = document.querySelector('#picture').content.children[0];

  var getRandomComment = function getRandomComment() {
    var comments = [];
    comments.push({
      avatar: "img/avatar-".concat(window.utils.getRandomNumber(0, 6), ".svg"),
      message: MockData.COMMENTS[window.utils.getRandomNumber(0, MockData.COMMENTS.length - 1)],
      name: MockData.NAMES[window.utils.getRandomNumber(0, MockData.NAMES.length - 1)]
    });
    return comments;
  };

  var createPictureDescObj = function createPictureDescObj() {
    var obj = [];

    for (var i = 1; i <= COUTN_PICTURES; i++) {
      obj.push({
        url: "assets/files/".concat(i, ".jpg"),
        description: 'описание фотографии',
        likes: window.utils.getRandomNumber(15, 200),
        comments: getRandomComment()
      });
    }

    return obj;
  };

  var renderPicture = function renderPicture(pictureObj) {
    var newPictureElement = pictureTmpl.cloneNode(true);
    var comment = pictureObj.comments[0].message;
    newPictureElement.querySelector('img').src = pictureObj.url;
    newPictureElement.querySelector('.picture__comments').textContent = comment;
    newPictureElement.querySelector('.picture__likes').textContent = pictureObj.likes;
    return newPictureElement;
  };

  function addPicturesToList() {
    var pictureListElement = document.querySelector('.pictures');
    var fragmentPictures = document.createDocumentFragment();

    for (var i = 0; i < createPictureDescObj().length; i++) {
      fragmentPictures.append(renderPicture(createPictureDescObj()[i]));
    }

    return pictureListElement.append(fragmentPictures);
  }

  addPicturesToList();
};

/* harmony default export */ __webpack_exports__["default"] = (test);

/***/ }),

/***/ "./src/js/modules/utils.js":
/*!*********************************!*\
  !*** ./src/js/modules/utils.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var utils = function utils() {
  var getRandomNumber = function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  window.utils = {
    getRandomNumber: getRandomNumber
  };
};

/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map