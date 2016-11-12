const createInvader = function(props) {
  const invaderProps = {
    health: 0,
    speed: 0,
    cost: 0,
    armed: 0,
    name: "",
    appearance: {}
  };

  Object.assign(invaderProps, props);

  const createdInvader = Object.create(invaderProps);
  return createdInvader;
};

export default createInvader
