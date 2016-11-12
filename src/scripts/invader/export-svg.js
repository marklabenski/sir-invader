/*
<svg width="9" height="9"><rect x="0" y="0" width="1" height="1" style="fill:rgb(0,0,0); stroke-width:0" /></svg>
*/

const exportSvg = function(invader) {
  const pixelsArray = invader.appearance.pixels;
  let svg = pixelsArray.reduce((svgString, pixelVal, index) => {
    let color = 'rgb(0,0,0)';
    if(pixelVal === true) {
      color = 'rgb(255,255,255)';
    }
    const col = index % 9;
    const row = Math.floor(index / 9);

    return svgString + '<rect x="' + col + '" y="' + row + '" width="1" height="1" style="fill:' + color + '; stroke-width:0" />\n';
  }, '<svg viewBox="0 0 9 9">\n');
  return svg + '</svg>';
};

export default exportSvg
