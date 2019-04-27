DROP DATABASE IF EXISTS sandwhich_db;
CREATE database sandwhich_db;

USE sandwhich_db;


create table sandwhich (
	id INT auto_increment NOT Null,
    name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key(id)
    );
    
INSERT INTO sandwhich (name) VALUES ('BLT');
INSERT INTO sandwhich (name) VALUES ('Chicken and Provolone');
INSERT INTO sandwhich (name) VALUES ('Roast Beef');
INSERT INTO sandwhich (name) VALUES ('Ham and Cheese');
INSERT INTO sandwhich (name, devoured) VALUES ('Turkey and Swiss', true);