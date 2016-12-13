var NodeHelper = require("node_helper");
const spawn = require('child_process').spawn;

module.exports = NodeHelper.create({
  // Override start method.
  start: function() {
    console.log("Starting node helper for: " + this.name);
    const proc = spawn('python', ['modules/lights/lit.py', 'on']);
    proc.stderr.on('data', function (data) { console.log('Data: ' + data); });
    proc.stdout.on('data', function (data) { console.log('Data: ' + data); });
  },

  // Override socketNotificationReceived method.
  socketNotificationReceived: function(notification, payload) {
    console.log('lights node helper received ' + notification);
    if (notification === "LIGHTS_ON") {
      console.log('Got lights on notification in lights node helper');
      const proc = spawn('python', ['modules/lights/lit.py', 'on']);
      proc.stderr.on('data', function (data) { console.log('Data: ' + data); });
      proc.stdout.on('data', function (data) { console.log('Data: ' + data); });
  },
    } else if (notification === "LIGHTS_OFF") {
      console.log('Got lights off notification in lights node helper');
      const proc = spawn('python', ['modules/lights/lit.py', 'off']);
      proc.stderr.on('data', function (data) { console.log('Data: ' + data); });
      proc.stdout.on('data', function (data) { console.log('Data: ' + data); });
  },
    }
  }
});
