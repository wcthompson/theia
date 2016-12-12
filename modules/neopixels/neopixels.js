Module.register("neopixels",{
  // Module config defaults.
  defaults: {
    something: '???',
  },
  // Define required scripts.
  getScripts: function() {
    return ["moment.js"];
  },
  // Define styles.
  getStyles: function() {
    return ["neopixels.css"];
  },
  // Define start sequence.
  start: function() {
    Log.info("Starting module: " + this.name);
    // Schedule update interval.
    var self = this;

    // we probably don't actually need a dom element.
    setInterval(function() {
      self.updateDom(); 
    }, 1000);
  },
  // Override dom generator.
  getDom: function() {

    var wrapper = document.createElement("div");

    // Return the wrapper to the dom.
    return wrapper;
  }
});