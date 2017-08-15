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
//# sourceMappingURL=options.js.map