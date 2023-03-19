from flask import Flask
from flask import request
app = Flask(__name__)
@app.route('/password')
def password():
    password = request.args.get('password')
    with open('.htpasswd', 'r') as f:
        content = f.read().strip()
    if content == password:
        return 'success'
    else:
        return 'fail'
if __name__ == '__main__':
    app.run(port=8001, debug=False)