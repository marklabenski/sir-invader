// the pixels to allow a 9x9 matrix
const numPixels = 81;

// the empty appearance of all non set pixels
const emptyAppearance = {
  pixels: []
};
for(let i = 0; i < numPixels; i++) {
  emptyAppearance.pixels.push(false);
}

const calculateInvaderCosts = function (invader) {
  return invader.health + invader.speed + invader.armed;
};

const createInvader = function(props) {
  const invaderProps = Object.assign({
    health: 0, // health points of the invader
    speed: 0, // speed of the invader
    armed: 0,
    name: "",
    appearance: emptyAppearance
  }, props);

  invaderProps.cost = calculateInvaderCosts(invaderProps);

  const createdInvader = invaderProps;
  return createdInvader;
};

export { createInvader, emptyAppearance, calculateInvaderCosts }
