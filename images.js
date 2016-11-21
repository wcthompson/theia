/* global Log, Module, moment */

/* Magic Mirror
 * Module: Compliments
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("images",{

	// Module config defaults.
	defaults: {
		compliments: {
			morning: [
				"Good morning, handsome!",
				"Enjoy your day!",
				"How was your sleep?"
			],
			afternoon: [
				"Hello, beauty!",
				"You look sexy!",
				"Looking good today!"
			],
			evening: [
				"Wow, you look hot!",
				"You look nice!",
				"Hi, sexy!"
			]
		},
		updateInterval: 30000,
		fadeSpeed: 4000
	},

	// Define required scripts.
	getScripts: function() {
		return ["moment.js", 'fs'];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);


		// Schedule update timer.
		var self = this;
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

	getImages: function() {
		console.log('hi');
		const imgFolder = './img';
		var files = []
		fs.readdir(imgFolder, (err, files) => {
		  files.forEach(file => {
		    files.push(file);
		  });
		})
	},

	// Override dom generator.
	getDom: function() {
		var imgs = []
		var img_filenames = this.getImages();
		console.log(img_filenames);

		for(var i = 0; i < img_filenames.length; i++) {
			var img = document.createElement("img");
    	img.src = 'img/crystal_bg1.jpg';
    	img.width = "500px";
		}
		

		var wrapper = document.createElement("div");
		wrapper.className = "thin xlarge bright";
		wrapper.appendChild(img);

		return wrapper;
	}

});
