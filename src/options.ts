//   *|-----------------------------------------------------------------------------
//   *|            This source code is provided under the Apache 2.0 license      --
//   *|  and is provided AS IS with no warranty or guarantee of fit for purpose.  --
//   *|                See the project's LICENSE.md for details.                  --
//   *|           Copyright Thomson Reuters 2017. All rights reserved.            --
//   *|-----------------------------------------------------------------------------

export default class Options {
    public static readonly svgNs = "http://www.w3.org/2000/svg";
    public amountRows = 5;
    public amountCols = 5;
    public height = "100";
    public width = "100";

    constructor(inputtedOptions: any) {
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

}