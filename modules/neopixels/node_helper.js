var NodeHelper = require("node_helper");

const NUM_LEDS = 120;

var lightsOff = function () {
    for (var i = 0; i < NUM_LEDS; i++) {
      pixelData[i] = color(0, 0, 0);
    }
  ws281x.render(pixelData);
  ws281x.reset();
}

// generate rainbow colors accross 0-255 positions.
function wheel(pos) {
  pos = 255 - pos;
  if (pos < 85) { return color(255 - pos * 3, 0, pos * 3); }
  else if (pos < 170) { pos -= 85; return color(0, pos * 3, 255 - pos * 3); }
  else { pos -= 170; return color(pos * 3, 255 - pos * 3, 0); }
}

// generate integer from RGB value
function color(r, g, b) {
  r = r * brightness / 255;
  g = g * brightness / 255;
  b = b * brightness / 255;
  return ((r & 0xff) << 16) + ((g & 0xff) << 8) + (b & 0xff);
}

module.exports = NodeHelper.create({
  // Override start method.
  start: function() {
    var self = this;
    var events = [];

    this.fetchers = [];

    console.log("Starting node helper for: " + this.name);

    var offset = 0;
    setInterval(function () {
      for (var i = 0; i < NUM_LEDS; i++) {
        pixelData[i] = wheel(((i * 256 / NUM_LEDS) + offset) % 256);
      }

      offset = (offset + 1) % 256;
      ws281x.render(pixelData);
    }, 1000 / 30);

    console.log('Rainbow started.');
  },

  // Override socketNotificationReceived method.
  socketNotificationReceived: function(notification, payload) {
    if (notification === "NEOPIXEL") {
      console.log('GOT NEOPIXELS: ');
      
    }
  }
});