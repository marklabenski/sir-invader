/*
<svg width="9" height="9"><rect x="0" y="0" width="1" height="1" style="fill:rgb(0,0,0); stroke-width:0" /></svg>
*/

const exportSvg = function(invader) {
  const pixelsArray = invader.appearance.pixels;
  let svg = pixelsArray.reduce((svgString, pixelVal) => {
    let color = 'rgb(0,0,0)';
    if(pixelVal === true) {
      color = 'rgb(255,255,255)';
    }
    return svgString + '<rect x="0" y="0" width="1" height="1" style="fill:' + color + '; stroke-width:0" />\n';
  }, '<svg width="9" height="9">\n');
  return svg + '</svg>';
};

export default exportSvg
