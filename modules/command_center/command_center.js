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
    this.sendSocketNotification("START_SERVER");
  },  

  notificationReceived: function(notification, payload, sender) {
    return;
  },

  socketNotificationReceived: function(notification, payload){
    if (notification === "COMMAND_RECIEVED"){
        //Broadcast the message
        console.error(notification);
        this.sendNotification(notification);
    }
  }
});
