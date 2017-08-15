export default class HashIcon {
    private options;
    constructor(inputtedOptions?: any);
    drawString(inputtedString: string, container: HTMLElement): void;
    private drawImage(structure, colour, container);
    getImageStructureForString(input: ArrayBuffer): boolean[][];
    getImageColourForString(input: ArrayBuffer): string;
    sha256Hash(inputstring: string): PromiseLike<ArrayBuffer>;
    private hex(buffer, length);
    private bin(buffer, length);
    private padAndTrimString(padChar, length, inputString);
}
