

function rgbToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }
  
  function ConvertRGBtoHex(red, green, blue) {
    return "#" + rgbToHex(red) + rgbToHex(green) + rgbToHex(blue);
}

export default ConvertRGBtoHex