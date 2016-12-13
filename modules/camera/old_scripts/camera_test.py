from picamera import PiCamera
from time import sleep

camera = PiCamera()

camera.start_preview()
for i in range(100):
    camera.brightness = i
    sleep(0.1)
camera.stop_preview()

