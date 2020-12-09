
import datetime
import time
import random 

#########################################
def temperature():
   
    # generate random temperature value
    type_value = random.uniform(-25, 20)
    alert = True

    if( type_value <= -20.00  or type_value >= 15.00):
        timestamp = time.time()

    else:
        alert = False
        timestamp = time.time()
    
    # print("Type: ", type_item)
    # print("Value: ", type_value)   
    # print("Alert: (Is the temperature outside the range?) ", alert)
    # print('Timestamp: ',timestamp)
    return  type_value, alert, timestamp

#########################################
def doorOpen():
    random_bit = random.getrandbits(1)
    type_value = bool(random_bit)
    alert = bool(random_bit)
    timestamp = time.time()

    # print("Type: ", type_item)
    # print("Value:(Is the Door Opened?) ", type_value)   
    # print("Alert: (Is the temperature outside the range?) ", alert)
    # print('Timestamp: ',timestamp)
    return type_value, alert, timestamp

#########################################
#########################################
#########################################
def createRandomReadings():
    type_list = ['temperature', 'doorOpen']
    type_item = random.choice(type_list)
    type_value = None
    alert = None
    timestamp = None
    if(type_item == 'temperature'):
        type_value, alert, timestamp = temperature()


    if(type_item == 'doorOpen'):
        type_value, alert, timestamp = doorOpen()

    return type_item, type_value, alert, timestamp




