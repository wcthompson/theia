Module.register("camera", {

  // Module config defaults.
  defaults: {
  },

  start: function() {
    this.sendSocketNotification("FETCH_ALL_PHOTOS");
    this.photos = ['~/theia/photos/william.jpg'];
  },

  socketNotificationReceived: function(notification, payload) {
    Log.info(this.name + " received a notification: " + notification);
    if (notification === "FETCHED_PHOTOS") {
      this.photos = payload.photos;
      this.updateDom();
    }
  },

  // Override dom generator.
  getDom: function() {

    const wrapper = document.createElement("div");
    const imageContainer = document.createElement("div");

    for (photo of this.photos) {
      const image = document.createElement("img");
      image.className = "photo";
      image.src = photo.src;
      imageContainer.appendChild(image);
    }

    // Return the wrapper to the dom.
    return wrapper;
  },

  // Listen for camera notifcations
  notificationReceived: function(notification, payload, sender) {
    console.log('Camera module received notification to take a photo');
    if (notification === 'TAKE_PHOTO') {
      this.sendSocketNotification('TAKE_PHOTO');
    }
  },
});
