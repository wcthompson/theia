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

  socketNotificationReceived: function(notification, payload){
    console.error('command center: socketNotificationReceived');
    if (notification === "COMMAND_RECIEVED"){
        //Broadcast the message
        console.error(payload);
        this.sendNotification(payload);
    }
  }

  notificationReceived: function(notification, payload, sender) {
    return;
  }
});
