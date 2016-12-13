Module.register("camera", {

  // Module config defaults.
  defaults: {
  },

  // Override dom generator.
  getDom: function() {

    const wrapper = document.createElement("div");
    const imageContainer = document.createElement("div");

    // Return the wrapper to the dom.
    return wrapper;
  },

  // Listen for camera notifcations
  notificationReceived: function(notification, payload, sender) {
    if (notification === 'TAKE_PHOTO') {
      this.sendSocketNotification('TAKE_PHOTO');
    }
  },
});