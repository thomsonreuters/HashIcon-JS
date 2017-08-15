(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("HashIcon", [], factory);
	else if(typeof exports === 'object')
		exports["HashIcon"] = factory();
	else
		root["HashIcon"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var options_1 = __webpack_require__(1);
var HashIcon = (function () {
    function HashIcon(inputtedOptions) {
        if (inputtedOptions === void 0) { inputtedOptions = null; }
        this.options = new options_1.default(inputtedOptions);
    }
    HashIcon.prototype.drawString = function (inputtedString, container) {
        var _this = this;
        var containerElement;
        if (typeof container === 'string' || container instanceof String) {
            containerElement = document.querySelector(container);
            if (containerElement == null) {
                throw new Error("The container element " + container + " does not exist");
            }
        }
        else if (container instanceof Node) {
            containerElement = container;
        }
        else {
            throw new Error('2nd parameter must be a string or an Element');
        }
        this.sha256Hash(inputtedString)
            .then(function (buffer) { return _this.drawImage(_this.getImageStructureForString(buffer), _this.getImageColourForString(buffer), containerElement); });
    };
    HashIcon.prototype.drawImage = function (structure, colour, container) {
        var newImage = document.createElementNS(options_1.default.svgNs, "svg");
        newImage.setAttributeNS(null, 'viewBox', '0 0 100 100');
        newImage.setAttributeNS(null, 'preserveAspectRatio', 'xMinYMin meet');
        var blockSizeWidth = 100 / this.options.amountCols;
        var blockSizeHeight = 100 / this.options.amountRows;
        for (var r = 0; r < this.options.amountRows; r++) {
            for (var c = 0; c < this.options.amountCols; c++) {
                if (!structure[r][c]) {
                    continue;
                }
                var rect = document.createElementNS(options_1.default.svgNs, 'rect');
                rect.setAttributeNS(null, 'x', c * blockSizeWidth + '%');
                rect.setAttributeNS(null, 'y', r * blockSizeHeight + '%');
                rect.setAttributeNS(null, 'height', blockSizeHeight + '%');
                rect.setAttributeNS(null, 'width', blockSizeWidth + '%');
                rect.setAttributeNS(null, 'fill', colour);
                newImage.appendChild(rect);
            }
        }
        container.appendChild(newImage);
    };
    HashIcon.prototype.getImageStructureForString = function (input) {
        var bin = this.bin(input, this.options.amountRows * this.options.amountCols);
        var rtn = [];
        for (var i = 0; i < this.options.amountRows; i++) {
            var t = [];
            for (var j = 0; j < this.options.amountCols; j++) {
                t.push(bin[(i * this.options.amountCols) + j] === '1');
            }
            rtn.push(t);
        }
        return rtn;
    };
    HashIcon.prototype.getImageColourForString = function (input) {
        return "#" + this.hex(input, 6);
    };
    HashIcon.prototype.sha256Hash = function (inputstring) {
        var buffer = new TextEncoder("utf-8").encode(inputstring);
        return window.crypto.subtle.digest("SHA-256", buffer);
    };
    HashIcon.prototype.hex = function (buffer, length) {
        var hex = [];
        var view = new DataView(buffer);
        for (var i = 0; i < view.byteLength; i += 4) {
            var value = view.getUint32(i); // 4 bytes
            var stringValue = value.toString(16);
            var padding = '00000000';
            var paddedValue = (padding + stringValue).slice(-padding.length);
            hex.push(paddedValue);
        }
        var joinedHex = hex.join("");
        return this.padAndTrimString("0", length, joinedHex);
    };
    HashIcon.prototype.bin = function (buffer, length) {
        var bin = [];
        var view = new DataView(buffer);
        for (var i = 0; i < view.byteLength; i += 1) {
            var value = view.getUint8(i);
            var stringValue = value.toString(2);
            bin.push(stringValue);
        }
        var joinedBin = bin.join("");
        return this.padAndTrimString("0", length, joinedBin);
    };
    HashIcon.prototype.padAndTrimString = function (padChar, length, inputString) {
        return (inputString + padChar.repeat(length)).slice(0, length);
    };
    return HashIcon;
}());
exports.default = HashIcon;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Options = (function () {
    function Options(inputtedOptions) {
        this.amountRows = 5;
        this.amountCols = 5;
        this.height = "100";
        this.width = "100";
        if (!inputtedOptions) {
            return;
        }
        if (inputtedOptions.amountRows) {
            this.amountRows = inputtedOptions.amountRows;
        }
        if (inputtedOptions.amountCols) {
            this.amountCols = inputtedOptions.amountCols;
        }
    }
    Options.svgNs = "http://www.w3.org/2000/svg";
    return Options;
}());
exports.default = Options;


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=hashicon.js.map