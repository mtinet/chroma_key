var video;

var rslider;
var gslider;
var bslider;

var r;
var g;
var b;


function setup() {
  canvas = createCanvas(640, 480, WEBGL);
  canvas.id('p5canvas');
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.id('p5video');
  video.hide();
  
  rslider = createSlider(0, 255, 3, 0.1);
  rslider.mouseReleased(inputSliderValue);
  gslider = createSlider(0, 255, 63, 0.1);
  gslider.mouseReleased(inputSliderValue);
  bslider = createSlider(0, 255, 40, 0.1);
  bslider.mouseReleased(inputSliderValue);
  
  var seriously = new Seriously();

  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');
  var chroma = seriously.effect('chroma');
  
  chroma.source = src;
  target.source = chroma;
  target.size(1280, 960);
  
  console.log('red = ' + rslider.value() + ', green = ' + gslider.value() + ', blue = ' + bslider.value());
  
  chroma.screen = [rslider.value() / 255, gslider.value() / 255, bslider.value() / 255, 1];

  seriously.go();  
  
  
}

function inputSliderValue() {
  var seriously = new Seriously();

  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');
  var chroma = seriously.effect('chroma');
  
  chroma.source = src;
  target.source = chroma;
  
  console.log('red = ' + rslider.value() + ', green = ' + gslider.value() + ', blue = ' + bslider.value());
  
  chroma.screen = [rslider.value() / 255, gslider.value() / 255, bslider.value() / 255, 1];
  seriously.go();  
}



