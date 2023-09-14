from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app)

@app.route('/submit', methods = ['POST'])
def get_data():
    data = request.json
    print(data)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)