from flask import Flask
import sys

app = Flask(__name__)

import logging
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    path = path.upper()
    print (path)
    sys.stdout.flush()
    return 'Notification sent: %s' % path

if __name__ == '__main__':
    app.run()