from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

import os

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="pp",
    password="poop_prom",
    database="POOPPROM"
)
cursor = db.cursor()

@app.route('/poop_prom/get_toilets', methods=['GET'])
def get_toilets():
    try:
        # Query to fetch data from the database
        query = """
        SELECT toilets.toilet_id, toilet_name, location_latitude, location_longitude,
               toilet_address, toilet_district, toilet_province, toilet_zip,
               bidet_spray, squat_toilet, auto_toilet, handicap_toilet,
               GROUP_CONCAT(DISTINCT toilet_pic) as toilet_pic,toilet_avg_rate
        FROM toilets
        LEFT JOIN locations ON toilets.toilet_id = locations.toilet_id
        LEFT JOIN address_info ON toilets.toilet_id = address_info.toilet_id
        LEFT JOIN label_info ON toilets.toilet_id = label_info.toilet_id
        LEFT JOIN pic_info ON toilets.toilet_id = pic_info.toilet_id
        LEFT JOIN avg_rate ON toilets.toilet_id = avg_rate.toilet_id
        GROUP BY toilets.toilet_id, toilet_name, location_latitude, location_longitude,
                 toilet_address, toilet_district, toilet_province, toilet_zip, 
                 bidet_spray, squat_toilet, auto_toilet, handicap_toilet, toilet_avg_rate
        """
        
        cursor.execute(query)
        data = cursor.fetchall()

        # Define the keys for the JSON response
        keys = [
            "toilet_id", "toilet_name", "location_latitude", "location_longitude",
            "toilet_address", "toilet_district", "toilet_province", "toilet_zip",
            "bidet_spray", "squat_toilet", "auto_toilet", "handicap_toilet", "toilet_pic", "toilet_avg_rate"
        ]

        # Convert the query result to a list of dictionaries
        results = [dict(zip(keys, row)) for row in data]

        return jsonify(results)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/poop_prom/post_toilets', methods=['POST'])
def create_toilet():
    pass



if __name__ == '__main__':
    app.run(debug=True)
