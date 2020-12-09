Create database iotSensors;

Use iotSensors;

create table sensorsDetails(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
software_id int,
type_of_sensor varchar(30) NOT NULL,
value_of_sensor varchar(50) NOT NULL,
alert_of_sensor VARCHAR(10),
timestamp_of_reading varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
