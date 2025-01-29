const {expect} = require('chai');
const rgbToHexColor = require('./rgbToHexColor');

describe('rgbToHexColor', () => {

    it('converts white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('converts black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('converts red to hex', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('converts green to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });

    it('converts blue to hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('returns undefined for string params', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined;
    });

    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('returns undefined for values > 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('converts (151, 104, 172) to hex', () => {
        expect(rgbToHexColor(151, 104, 172)).to.equal('#9768AC');
    });

    it('converts (42, 173, 170)', () => {
        expect(rgbToHexColor(42, 173, 170)).to.equal('#2AADAA');
    });

    it('returns undefined for null values', () => {
        expect(rgbToHexColor(null, null, null)).to.be.undefined;
    });
    
    it('returns undefined for undefined values', () => {
        expect(rgbToHexColor(undefined, undefined, undefined)).to.be.undefined;
    });
    
    it('returns undefined for object input', () => {
        expect(rgbToHexColor({}, {}, {})).to.be.undefined;
    });

    it('returns undefined for decimal values', () => {
        expect(rgbToHexColor(12.5, 100.3, 200.9)).to.be.undefined;
    });

    it('works correctly at boundary values 0 and 255', () => {
        expect(rgbToHexColor(0, 255, 255)).to.equal('#00FFFF');
        expect(rgbToHexColor(255, 0, 255)).to.equal('#FF00FF');
        expect(rgbToHexColor(255, 255, 0)).to.equal('#FFFF00');
    });

    it('returns undefined for out-of-range values (-1, 0, 0)', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('returns undefined for out-of-range values (0, -1, 0)', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it('returns undefined for out-of-range values (0, 0, -1)', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('returns undefined for out-of-range values (256, 0, 0)', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('returns undefined for out-of-range values (0, 256, 0)', () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });

    it('returns undefined for out-of-range values (0, 0, 256)', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
})