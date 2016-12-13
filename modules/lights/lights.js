Module.register("lights", {

  // Module config defaults.
  defaults: {
  },

  // Override dom generator.
  getDom: function() {

    var wrapper = document.createElement("div");

    // Return the wrapper to the dom.
    return wrapper;
  },

  // Listen for camera notifcations
  notificationReceived: function(notification, payload, sender) {
    if (notification === 'LIGHTS_ON' || notification === 'LIGHTS_OFF') {
      this.sendSocketNotification(notification);
    }
  },
});
