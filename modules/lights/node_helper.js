const NodeHelper = require("node_helper");
const sudo = require("sudo");

const opts = { cwd: '~/theia/modules/lights/rpi_ws281x/python' };
module.exports = NodeHelper.create({
  // Override start method.
  start: function() {
    console.log("Starting node helper for: " + this.name);
  },

  // Override socketNotificationReceived method.
  socketNotificationReceived: function(notification, payload) {
    console.log('lights node helper received ' + notification);
    if (notification === "LIGHTS_ON") {
      console.log('Got lights on notification in lights node helper');
      const proc = sudo('python', ['PYTHON_PATH=".:build/lib.linux-armv7l-2.7"', 'python', 'examples/lit.py', 'on'], opts);
      proc.stderr.on('data', function (data) { console.log('Data: ' + data); });
      proc.stdout.on('data', function (data) { console.log('Data: ' + data); });
    } else if (notification === "LIGHTS_OFF") {
      console.log('Got lights off notification in lights node helper');
      const proc = sudo('python', ['PYTHON_PATH=".:build/lib.linux-armv7l-2.7"', 'python', 'examples/lit.py', 'off'], opts);
      proc.stderr.on('data', function (data) { console.log('Data: ' + data); });
      proc.stdout.on('data', function (data) { console.log('Data: ' + data); });
    }
  },

});
