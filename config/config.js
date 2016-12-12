var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left',
			config: {
				displaySeconds: false,
				showPeriodUpper: true,
                                clockBold: false
			}
		},
                {
                	module: 'neopixels',
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
