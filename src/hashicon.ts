/* *|-----------------------------------------------------------------------------
   *|            This source code is provided under the Apache 2.0 license      --
   *|  and is provided AS IS with no warranty or guarantee of fit for purpose.  --
   *|                See the project's LICENSE.md for details.                  --
   *|           Copyright Thomson Reuters 2017. All rights reserved.            --
   *|----------------------------------------------------------------------------- */

import {Options} from './options';

export class HashIcon {

    private options: Options;

    constructor(inputtedOptions: any = null) {
        this.options = new Options(inputtedOptions);
    }

    public drawString(inputtedString: string, container: HTMLElement) {
        this.drawImage(this.getImageStructureForString(inputtedString),
                       this.getImageColourForString(inputtedString),
                       container);
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

    public getImageStructureForString(stringInput: string): boolean[][] {
        let rtn: boolean[][] = [];

        let parts = this.options.amountCols * this.options.amountRows;

        let hashCode = this.hashCode(stringInput);
        let bin = this.padAndTrimString("0", parts, (hashCode >>> 0).toString(2));

        for (let i =0;i<this.options.amountRows; i++) {
            let t: boolean[] = [];
            for (let j = 0;j<this.options.amountCols;j++) {
                t.push(bin[(i * this.options.amountCols) + j] === '1');
            }
            rtn.push(t);
        }

        return rtn;
    }

    public getImageColourForString(stringInput: string): string {
        return '#' + this.intToRGB(this.hashCode(stringInput));
    }

    private hashCode(inputString: string): number {
        let hash = 5381;
        for (let i = 0; i < inputString.length; i++) {
            hash = ((hash << 5) + hash) + inputString.charCodeAt(i);
            hash = hash & hash;
        }
        return hash;
    }

    private intToRGB(i: number): string {
        var c = (i & 0x00FFFFFF)
                .toString(16)
                .toUpperCase();
        return this.padAndTrimString("0", 6, c);
    }

    private padAndTrimString(padChar: string, maxLength: number, inputString: string): string {
        if (inputString.length === maxLength) {
            return inputString;
        }
        if (inputString.length > maxLength) {
            return inputString.substr(0, maxLength);
        }
        return padChar.repeat(maxLength).substring(0, maxLength - inputString.length) + inputString;
    }

}