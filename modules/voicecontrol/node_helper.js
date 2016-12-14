'use strict';

/* Magic Mirror
 * Module: voicecontrol
 *
 * By Alex Yaknin 
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
const spawn = require('child_process').spawn;
const Psc = require('pocketsphinx-continuous');

module.exports = NodeHelper.create({
    start: function () {
        this.started = false;
        
    },

    socketNotificationReceived: function(notification, payload) {
		if (notification === "CONNECT") {
			this.startRecognition(payload);
			return;
		}
	},

    startRecognition : function(config) {

        var models = config.models;

        var kwsSensitivity = 0.5;
        this.started = true;
        var self = this;
        //var kwsProcess = spawn('python', ['./speech-osx/kws-multiple.py', modelFile1, modelFile2], { detached: false });
        var ps = new Psc({
          setId: '4650'  // change this to the number for our language model 
          verbose: false // Setting this to true will give you a whole lot of debug output in your console.
        });

        ps.on('data', function (data) {
            var message = data.toString();
            console.error(message)
            // TODO: fire the notification associated with this keyword
            //var keyword = message.split(' ')[0]
            //self.sendSocketNotification("KEYWORD_SPOTTED", keyword);

        })
        ps.on('error', function (err) {
            console.error(err);
        })
    }
  
});