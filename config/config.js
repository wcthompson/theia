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
			module: 'camera',
		},
	{
            module: 'voicecontrol',
            position: 'bottom_left',
            config: {
                models: [
                    {
                        keyword: "take_a_picture",   // keyword 
                        description: "Say 'Take a Picture' to 📸",
                        file: "take_a_picture.pmdl", // trained model file name
                        message: "TAKE_PICTURE"   // notification message that's broadcast in the MagicMirror app
                    },
                    {
                        keyword: "lights on",   // keyword 
                        description: "",
                        file: "lights_on.pmdl", // trained model file name
                        message: "LIGHTS_ON"   // notification message that's broadcast in the MagicMirror app
                    }, 
                    {
                        keyword: "lights off",   // keyword 
                        description: "",
                        file: "lights_off.pmdl", // trained model file name
                        message: "LIGHTS_OFF"   // notification message that's broadcast in the MagicMirror app
                    }
                ]
            }
        }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
