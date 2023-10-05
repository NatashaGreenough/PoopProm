from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from mysql.connector import pooling

app = Flask(__name__)

cors = CORS(app)

db = mysql.connector.connect(
    host="poop-database02.cnlksndkjy8e.us-east-1.rds.amazonaws.com",
    user="admin",
    password="Poopprom",
    database="poopdb"
)

def execute_query(query, data):
    try:
        print("execute_query")
        cursor = db.cursor()
        cursor.execute(query, data)
        db.commit()

        return cursor.lastrowid

    except Exception as e:
        print(f"Error: {e}")
        return False

    finally:
        if cursor:
            cursor.close()

def nameDB(name):
    print("nameDB")
    query = "INSERT INTO toilets(toilet_name) VALUES (%s)"
    data = (name,)
    return execute_query(query, data)

def addressDB(address, district, province, zipcode, toiletID):
    print("addressDB")
    query = "INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id) VALUES (%s, %s, %s, %s, %s)"
    data = (address, district, province, zipcode, toiletID)
    return execute_query(query, data)
    
def labelDB(bidet, squat, auto, handicap, toiletID):
    print("labelDB")
    query = "INSERT INTO label_info(bidet_spray, squat_toilet, auto_toilet, handicap_toilet, toilet_id) VALUES (%s, %s, %s, %s, %s)"
    data = (bidet, squat, auto, handicap, toiletID)
    return execute_query(query, data)
    

@app.route('/submit', methods = ['POST'])
def get_data():
    data = request.json
    toiletName = data['toiletName']
    address = data['address']
    district = data['district']
    province = data['province']
    zipCode = data['zipCode']
    bidet, squat, auto, handicap = (
        data['toiletTypes'][0]['status'],
        data['toiletTypes'][1]['status'],
        data['toiletTypes'][2]['status'],
        data['toiletTypes'][3]['status']
    )
    print(data)
    toiletID = nameDB(toiletName)
    addressDB(address, district, province, zipCode, toiletID)
    labelDB(bidet, squat, auto, handicap, toiletID)

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
