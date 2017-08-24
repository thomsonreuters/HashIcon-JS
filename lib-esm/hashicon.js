//   *|-----------------------------------------------------------------------------
//   *|            This source code is provided under the Apache 2.0 license      --
//   *|  and is provided AS IS with no warranty or guarantee of fit for purpose.  --
//   *|                See the project's LICENSE.md for details.                  --
//   *|           Copyright Thomson Reuters 2017. All rights reserved.            --
//   *|-----------------------------------------------------------------------------
import Options from './options';
var HashIcon = (function () {
    function HashIcon(inputtedOptions) {
        if (inputtedOptions === void 0) { inputtedOptions = null; }
        this.options = new Options(inputtedOptions);
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
        var newImage = document.createElementNS(Options.svgNs, "svg");
        newImage.setAttributeNS(null, 'viewBox', '0 0 100 100');
        newImage.setAttributeNS(null, 'preserveAspectRatio', 'xMinYMin meet');
        var blockSizeWidth = 100 / this.options.amountCols;
        var blockSizeHeight = 100 / this.options.amountRows;
        for (var r = 0; r < this.options.amountRows; r++) {
            for (var c = 0; c < this.options.amountCols; c++) {
                if (!structure[r][c]) {
                    continue;
                }
                var rect = document.createElementNS(Options.svgNs, 'rect');
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
export default HashIcon;
//# sourceMappingURL=hashicon.js.map