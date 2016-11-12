import { createInvader, emptyAppearance, calculateInvaderCosts } from '../dist/invader/invader';
import { assert, should, expect } from 'chai';

describe('Invader', function() {
  describe('calculateInvaderCosts', function() {
    it('should calculate the invaders costs correctly', function() {
      let props = {
        health: 2,
        speed: 1,
        armed: 1,
        name: "Hello",
        appearance: emptyAppearance
      };
      const invaderCost4 = createInvader(props);
      expect(calculateInvaderCosts(invaderCost4)).to.equal(4);

      props = {
        health: 0,
        speed: 1,
        armed: 1,
        name: "Hello",
        appearance: emptyAppearance
      };
      const invaderCost2 = createInvader(props);
      expect(calculateInvaderCosts(invaderCost2)).to.equal(2);
    });
  });
  describe('emptyAppearance', function() {
    it('should contain an array of 81 pixels', function() {
      expect(emptyAppearance.pixels).to.not.be.empty;
      expect(emptyAppearance.pixels).to.have.lengthOf(81);
    });
  });
  describe('createInvader', function() {
    it('should create an empty Invader', function() {
      const expectedProps = {
        health: 0,
        speed: 0,
        cost: 0,
        armed: 0,
        name: "",
        appearance: emptyAppearance
      };
      const invaderProps = createInvader({});

      assert.equal(expectedProps.speed, invaderProps.speed);
      assert.equal(expectedProps.cost, invaderProps.cost);
      assert.equal(expectedProps.armed, invaderProps.armed);
      assert.equal(expectedProps.name, invaderProps.name);
      expect(invaderProps.appearance).to.not.be.empty;
      expect(invaderProps.appearance).to.be.an('object');
    });
    it('should create an Invader by options', function() {
      const expectedProps = {
        health: 2,
        speed: 1,
        cost: 4,
        armed: 1,
        name: "Hello",
        appearance: emptyAppearance
      };
      const invaderProps = createInvader(expectedProps);

      assert.equal(expectedProps.speed, invaderProps.speed);
      assert.equal(expectedProps.cost, invaderProps.cost);
      assert.equal(expectedProps.armed, invaderProps.armed);
      assert.equal(expectedProps.name, invaderProps.name);
      expect(invaderProps.appearance).to.not.be.empty;
      expect(invaderProps.appearance).to.be.an('object');
    });
  });
});

export default {}
