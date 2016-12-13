var NodeHelper = require("node_helper");
const spawn = require('child_process').spawn;

module.exports = NodeHelper.create({
  // Override start method.
  start: function() {
    console.log("Starting node helper for: " + this.name);
    const proc = spawn('python', ['modules/camera/capture.py', 'photos/startup.jpg']);
    proc.stderr.on('data', function (data) { console.log('Data: ' + data); });
    proc.stdout.on('data', function (data) { console.log('Data: ' + data); });
  },

  // Override socketNotificationReceived method.
  socketNotificationReceived: function(notification, payload) {
    if (notification === "TAKE_PHOTO") {
      console.log('Got camera notification in camera node helper');
      const proc = spawn('python', ['modules/camera/capture.py', 'photos/' + Date.now() + '.jpg']);
      proc.stderr.on('data', function (data) { console.log('Data: ' + data); });
      proc.stdout.on('data', function (data) { console.log('Data: ' + data); });
    }
  }
});