"use strict";
//   *|-----------------------------------------------------------------------------
//   *|            This source code is provided under the Apache 2.0 license      --
//   *|  and is provided AS IS with no warranty or guarantee of fit for purpose.  --
//   *|                See the project's LICENSE.md for details.                  --
//   *|           Copyright Thomson Reuters 2017. All rights reserved.            --
//   *|-----------------------------------------------------------------------------
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
    return Options;
}());
Options.svgNs = "http://www.w3.org/2000/svg";
exports.default = Options;
//# sourceMappingURL=options.js.map