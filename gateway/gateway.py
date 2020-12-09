import sys
sys.path.append("..")
from project.softwareSensors.sensors import *
import json 
import requests
import random
import time

# generate random integer ID value
SoftwareId = random.randint(1, 100)


def postData():

    
    while True:
        type_of_sensor, value_of_sensor_type, alert_of_type, timestamp_of_reading = createRandomReadings()
        
        url = "http://localhost:3000/sensors"

        headers = {
            "Content-Type": "application/json"
        }

        data = json.dumps({
        "id" :   SoftwareId,
        "type" :  str(type_of_sensor),
        "value" : str(value_of_sensor_type),
        "alert" : str(alert_of_type),
        "timestamp" : str(timestamp_of_reading)
        })

        print(data)
        response = requests.post(url, data = data, headers = headers)
        print(response.text)


        time.sleep(10)
    

postData()

