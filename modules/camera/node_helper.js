var NodeHelper = require("node_helper");
const spawn = require('child_process').spawn;

module.exports = NodeHelper.create({
  // Override start method.
  start: function() {
    console.log("Starting node helper for: " + this.name);
    const proc = spawn('python', ['~/capture.py', 'img/test.jpg']);
  },

  // Override socketNotificationReceived method.
  socketNotificationReceived: function(notification, payload) {
    if (notification === "CAMERA") {
      console.log('Got camera notification in camera node helper');
      const proc = spawn('python', ['~/capture.py', 'img/test.jpg']);
    }
  }
});
