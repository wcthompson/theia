from picamera import PiCamera
from sys import argv
import time

camera = PiCamera()

if len(argv) > 1:
    camera.capture(argv[1])
else:
    camera.capture(time.time())
