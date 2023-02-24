let stamp = "https://dansmind.space/assets/hosted/img/V1.svg"

function loadStamp(colour) {
  return loadImage(stamp, img => {recolorStamp(img, 'black', color)})
}

function recolorStamp(image, oldColor, newColor) {
  image.loadPixels();
  for (let i = 0; i < image.pixels.length; i += 4) {
    if (
      image.pixels[i] == red(oldColor) &&
      image.pixels[i + 1] == blue(oldColor) &&
      image.pixels[i + 2] == green(oldColor)
    ) {
      image.pixels[i] = red(newColor);
      image.pixels[i + 1] = blue(newColor);
      image.pixels[i + 2] = green(newColor);
    }
  }
  image.updatePixels();
}
