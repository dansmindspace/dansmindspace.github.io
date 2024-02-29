let stampSrc = "https://dansmind.space/assets/hosted/img/V1.svg";
let fallbackSrc = "https://dansmindspace.github.io/assets/hosted/img/V1.svg"
let stampImg;

function loadStamp(colour) {
  if (colour) {
    stampImg = loadImage(fallbackSrc, (img) => recolorStamp(img, "black", colour));
  } else {
    stampImg = loadImage(fallbackSrc);
  }
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

function cornerStamp(corner, size = 50, padding = 4) {
  let x = padding;
  let y = padding;
  if (corner[0].toLowerCase() == "b") {
    y = height - padding - size;
  }
  if (corner[1].toLowerCase() == "r") {
    x = width - padding - size;
  }
  image(stampImg, x, y, size, size);
}

