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
    Log.log('Log.log is working');
    this.sendSocketNotification("START_SERVER");
  },  

  socketNotificationReceived: function(notification, payload){
    Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
    if (notification === "COMMAND_RECIEVED"){
        //Broadcast the message
        Log.log(payload);
        this.sendNotification(payload);
    }
  },

  notificationReceived: function(notification, payload, sender) {
    return;
  }
});
