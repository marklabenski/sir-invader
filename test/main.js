import Invader from '../dist/main';
import { assert, should, expect } from 'chai';

describe('Invader Object', function() {
  describe('Methods and Objects', function() {
    it('should contain all methods and objects it provides', function() {
      expect(Invader.createInvader).to.be.not.empty;
      expect(Invader.createInvader).to.be.an('function');
      expect(Invader.calculateInvaderCosts).to.be.not.empty;
      expect(Invader.calculateInvaderCosts).to.be.an('function');
      expect(Invader.emptyAppearance).to.be.not.empty;
      expect(Invader.emptyAppearance).to.be.an('object');
      expect(Invader.exportSvg).to.be.not.empty;
      expect(Invader.exportSvg).to.be.an('function');
    });
  });
});
