const { expect } = require('chai');
const rgbToHexColor = require('./RgbToHex');

describe('RGB Converter', () => {
    it('convert white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    });

    it('convert black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    });

    it('convert blue', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF')
    });

    it('convert darkBlue', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465')
    });
});

describe('Invalid parameter', () => {
    it('returns undefinded for missing parameters', () => {
        expect(rgbToHexColor(255)).to.be.undefined;
    });

    it('returns undefinded for values out of range', () => {
        expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
    });
    it('returns undefinded for invalid parameter type', () => {
        expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
    });
    it('returns undefinded for any invalid parameter type', () => {
        expect(rgbToHexColor(1, 2, '0')).to.be.undefined;
    });
    it('returns undefinded for any out of range parameter type', () => {
        expect(rgbToHexColor(1, 2, 350)).to.be.undefined;
    });

});