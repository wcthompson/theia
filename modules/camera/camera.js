Module.register("camera", {

  // Module config defaults.
  defaults: {
  },

  start: function() {
    this.sendSocketNotification("FETCH_ALL_PHOTOS");
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
    if (notification === 'TAKE_PHOTO') {
      this.sendSocketNotification('TAKE_PHOTO');
    }
  },
});
