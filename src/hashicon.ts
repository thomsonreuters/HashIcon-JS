import {Options} from './options';

declare var TextEncoder;

export class HashIcon {

    private options: Options;

    constructor(inputtedOptions: any = null) {
        this.options = new Options(inputtedOptions);
    }

    public drawString(inputtedString: string, container: HTMLElement) {
        this.sha256Hash(inputtedString)
            .then(buffer => this.drawImage(this.getImageStructureForString(buffer),
                                           this.getImageColourForString(buffer), 
                                           container));
    }

    private drawImage(structure: boolean[][], colour: string, container: HTMLElement) {
        let newImage = document.createElementNS(Options.svgNs, "svg");
        newImage.setAttributeNS(null, 'height', this.options.height);
        newImage.setAttributeNS(null, 'width', this.options.width);

        let blockSizeWidth = 100 / this.options.amountCols;
        let blockSizeHeight = 100 / this.options.amountRows;

        for (let r=0; r<this.options.amountRows; r++) {
            for (let c=0; c<this.options.amountCols; c++){
                if (!structure[r][c]) {
                    continue;
                }
                var rect = document.createElementNS(Options.svgNs, 'rect');
                rect.setAttributeNS(null, 'x', c * blockSizeWidth +'%');
                rect.setAttributeNS(null, 'y', r * blockSizeHeight +'%');
                rect.setAttributeNS(null, 'height', blockSizeHeight + '%');
                rect.setAttributeNS(null, 'width',  blockSizeWidth + '%');
                rect.setAttributeNS(null, 'fill', colour);
                newImage.appendChild(rect);
            }
        }

        container.appendChild(newImage);
    }

    public getImageStructureForString(input: ArrayBuffer): boolean[][] {
        let bin = this.bin(input, this.options.amountRows * this.options.amountCols);
        let rtn: boolean[][] = [];
        for (let i =0;i<this.options.amountRows; i++) {
            let t: boolean[] = [];
            for (let j = 0;j<this.options.amountCols;j++) {
                t.push(bin[(i * this.options.amountCols) + j] === '1');
            }
            rtn.push(t);
        }
        return rtn;
    }

    public getImageColourForString(input: ArrayBuffer): string {
        return "#" + this.hex(input, 6);
    }

    public sha256Hash(inputstring: string): PromiseLike<ArrayBuffer> {
        var buffer = new TextEncoder("utf-8").encode(inputstring);
        return window.crypto.subtle.digest("SHA-256", buffer);
    }

    private hex(buffer: ArrayBuffer, length: number): string {
        var hex = [];
        var view = new DataView(buffer);
        for (var i = 0; i < view.byteLength; i += 4) {
            var value = view.getUint32(i);  // 4 bytes
            var stringValue = value.toString(16);
            var padding = '00000000'
            var paddedValue = (padding + stringValue).slice(-padding.length)
            hex.push(paddedValue);
        }
        let joinedHex = hex.join("");
        return this.padAndTrimString("0", length, joinedHex);
    }

    private bin(buffer: ArrayBuffer, length: number): string {
        var bin = [];
        var view = new DataView(buffer);
        for (var i = 0; i < view.byteLength; i += 4) {
            var value = view.getUint32(i);  // 4 bytes
            var stringValue = value.toString(2);
            bin.push(stringValue);
        }
        let joinedBin = bin.join("");
        return this.padAndTrimString("0", length, joinedBin);
    }

    private padAndTrimString(padChar: string, length: number, inputString: string): string {
        return (inputString + padChar.repeat(length)).slice(0, length);
    }

}