import {HashIcon} from '../src/hashicon';


describe('Hash Icon', () => {
    var hashIcon: HashIcon;

    var amountCols = 5;
    var amountRows = 5;

    beforeEach(() => {
        createHashIcon();
    });

    function createHashIcon() {
        hashIcon = new HashIcon({
            amountCols: amountCols,
            amountRows: amountRows
        });
    }

    it('should get correct structure and colour (1)', (done) => {
        let input = 'test';
        let expectedStructure = [[true, true, true, true, true], 
                                 [false, false, true, false, false], 
                                 [true, true, true, true, false], 
                                 [false, true, true, false, true], 
                                 [false, false, false, false, true]];
        let expectedColour = '#9E6865';

        testStructure(input, expectedStructure);
        testColour(input, expectedColour);
        done();
    });

    it('should get correct structure and colour (2)', (done) => {
        let input = 'eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlIjoiQVFBQiIsImV4dCI6dHJ1ZSwia2V5X29wcyI6WyJlbmNyeXB0Il0sImt0eSI6IlJTQSIsIm4iOiI2VURXeko2Z1dFV3RuUVRZNGhEVEpyQnpfcTNzRFV6VlFLWHdDU0tza1Fna2V3Mm1PRjQ3eGFjc29zZ0J2al8wTUlXWVpOMEF6dzFGMUx0VWc4LVBtN1VLeENWeHhCZ0VzNExPM2NsMGFLblEzaXlvdHh4NE1OR3RfNC1YNDVYb1kxUVFUX3JRY0JxSmJJOXp3d3lMTEdlNGxzRWhSYmVHY2lOOG1rMEM4TURnMXdURzVEdm95aEZWRW1KOTZLMkZMMFBvTE9VWnd6SW1KV3ZoTFJQSTE5T2Jlb2g1Wk9LajJ5MGJTWmk2VHltXzRSRVVldUFETGJjNF9aVVlFMnpUUl9lUlpmdEppc0dLR1BsTmNMTllLR3VDblQ3YU1sYjJYUzVRX2xjZnYwemw0Mk1pMHJPZ3RGb3QyTGI5TjdYN05LVzBwbkhyLUdRN0szWlQxdFhuUnciLCJraWQiOiJub3Bhc3MifQ==';
        let expectedStructure = [[true, false, false, false, false], 
                                 [true, true, false, true, true], 
                                 [true, false, true, true, true], 
                                 [true, false, false, false, true], 
                                 [false, false, true, true, false]];
        let expectedColour = '#EF134E';

        testStructure(input, expectedStructure);
        testColour(input, expectedColour);
        done();
    });

    it('should get correct structure and colour (3)', (done) => {
        let input = '789y0uojhgyt78y9uopjhgyt78y9uopjihugiyt78y9uopjhilgui7t8y9upoj';
        let expectedStructure = [[true, true, true, false, true], 
                                 [true, true, false, false, false], 
                                 [true, false, true, true, true], 
                                 [true, true, false, true, false], 
                                 [true, false, false, false, false]];
        let expectedColour = '#2FA851';

        testStructure(input, expectedStructure);
        testColour(input, expectedColour);
        done();
    });

    it('should get correct structure and colour (4)', (done) => {
        let input = '';
        let expectedStructure = [[false, false, false, false, false], 
                                 [false, false, false, false, false], 
                                 [false, false, true, false, true], 
                                 [false, true, false, false, false], 
                                 [false, false, true, false, true]];
        let expectedColour = '#001505';

        testStructure(input, expectedStructure);
        testColour(input, expectedColour);
        done();
    });

    it('should get correct structure and colour (small)', (done) => {
        amountCols = 2;
        amountRows = 2;
        createHashIcon();

        let input = 'test';
        let expectedStructure = [[true, true], 
                                 [true, true]];
        let expectedColour = '#9E6865';

        testStructure(input, expectedStructure);
        testColour(input, expectedColour);
        done();
    });

    it('should get correct structure and colour (large)', (done) => {
        amountCols = 6;
        amountRows = 6;
        createHashIcon();

        let input = 'test';
        let expectedStructure = [[false, false, false, false, false, true], 
                                 [true, true, true, true, false, false], 
                                 [true, false, false, true, true, true], 
                                 [true, false, false, true, true, false], 
                                 [true, false, false, false, false, true], 
                                 [true, false, false, true, false, true]];
        let expectedColour = '#9E6865';

        testStructure(input, expectedStructure);
        testColour(input, expectedColour);
        done();
    });

    function testStructure(testString: string, expectedStructure: boolean[][]) {
        let rtn = hashIcon.getImageStructureForString(testString);
        expect(rtn.length).toBe(amountRows);
        for (let row of rtn) {
            expect(row.length).toBe(amountCols);
        }

        for (let r=0; r<amountRows; r++) {
            for (let c=0; c<amountCols; c++) {
                expect(rtn[r][c]).toBe(expectedStructure[r][c]);
            }
        }
    }

    function testColour(testString: string, expectedColour: string) {
        let rtn = hashIcon.getImageColourForString(testString);
        expect(rtn).toBe(expectedColour);    
    }

});