from flask import Flask
app = Flask(__name__)

import logging
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    path = path.upper()
    print (path)
    return 'Notification sent: %s' % path

if __name__ == '__main__':
    app.run()