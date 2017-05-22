export class Options {
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