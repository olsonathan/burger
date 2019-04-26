DROP DATABASE IF EXISTS sandwhich_db;
CREATE DATABASE sandwhich_db;
USE sandwhich_db;

CREATE TABLE sandwhich
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO sandwhich (name) VALUES ('BLT');
INSERT INTO sandwhich (name) VALUES ('Chicken and Provolone');
INSERT INTO sandwhich (name) VALUES ('Roast Beef');
INSERT INTO sandwhich (name) VALUES ('Ham and Cheese');
INSERT INTO sandwhich (name, devoured) VALUES ('Turkey and Swiss', true);