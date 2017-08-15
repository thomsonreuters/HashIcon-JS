//   *|-----------------------------------------------------------------------------
//   *|            This source code is provided under the Apache 2.0 license      --
//   *|  and is provided AS IS with no warranty or guarantee of fit for purpose.  --
//   *|                See the project's LICENSE.md for details.                  --
//   *|           Copyright Thomson Reuters 2017. All rights reserved.            --
//   *|-----------------------------------------------------------------------------

import Options from './options';

declare var TextEncoder;

export default class HashIcon {

    private options: Options;

    constructor(inputtedOptions: any = null) {
        this.options = new Options(inputtedOptions);
    }

    public drawString(inputtedString: string, container: any) {
        let containerElement: Node;

        if (typeof container === 'string' || container instanceof String) {
            containerElement = document.querySelector(<string>container);
            if (containerElement == null) {
                throw new Error(`The container element ${container} does not exist`);
            }
        }
        else if (container instanceof Node) {
            containerElement = container;
        }
        else {
            throw new Error('2nd parameter must be a string or an Element');
        }

        this.sha256Hash(inputtedString)
            .then(buffer => this.drawImage(this.getImageStructureForString(buffer),
                                           this.getImageColourForString(buffer), 
                                           containerElement));
    }

    private drawImage(structure: boolean[][], colour: string, container: Node) {
        let newImage = document.createElementNS(Options.svgNs, "svg");
        newImage.setAttributeNS(null, 'viewBox', '0 0 100 100');
        newImage.setAttributeNS(null, 'preserveAspectRatio', 'xMinYMin meet');


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
        for (var i = 0; i < view.byteLength; i += 1) {
            var value = view.getUint8(i);
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