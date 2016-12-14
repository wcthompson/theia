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
            position: 'bottom_right'
        },
    {
            module: 'voicecontrol',
            position: 'bottom_left',
            config: {
                models: [
                    {
                        keyword: "take_a_picture",   // keyword 
                        description: "Say 'Take a Picture' to 📸",
                        message: "TAKE_PICTURE"   // notification message that's broadcast in the MagicMirror app
                    },
                    {
                        keyword: "lights on",   // keyword 
                        description: "",
                        message: "LIGHTS_ON"   // notification message that's broadcast in the MagicMirror app
                    }, 
                    {
                        keyword: "lights off",   // keyword 
                        description: "",
                        message: "LIGHTS_OFF"   // notification message that's broadcast in the MagicMirror app
                    }
                ]
            }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
