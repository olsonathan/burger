USE ie0vnux2luelja5v;

create table sandwhich (
	id INT auto_increment NOT Null,
    name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key(id)
    );