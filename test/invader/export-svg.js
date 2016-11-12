/*<svg width="9" height="9"><rect x="0" y="0" width="1" height="1" style="fill:rgb(0,0,0); stroke-width:0" /></svg>*/
import exportSvg from '../dist/invader/export-svg';
import { assert, should, expect } from 'chai';

describe('exportSvg', function() {
  describe('exportSvg', function() {
    it('should export a valid svg', function() {
      const invaderMock = { appearance : {
        pixels: [true, false]
      }};
      expect(exportSvg(invaderMock)).to.equal('<svg width="9" height="9">\n' +
        '<rect x="0" y="0" width="1" height="1" style="fill:rgb(255,255,255); stroke-width:0" />\n' +
        '<rect x="0" y="0" width="1" height="1" style="fill:rgb(0,0,0); stroke-width:0" />\n' +
        '</svg>');
    });
  });
});
