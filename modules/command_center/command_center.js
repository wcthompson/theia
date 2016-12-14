Module.register("command_center", {

  // Module config defaults.
  defaults: {
  },

  // Override dom generator.
  getDom: function() {

    var wrapper = document.createElement("div");

    // Return the wrapper to the dom.
    return wrapper;
  },

  start: function() { 
    this.sendSocketNotification("START_SERVER", this.config);
  },  

  // Listen for camera notifcations
  notificationReceived: function(notification, payload, sender) {
    return;
  },
});
