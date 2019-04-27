USE ie0vnux2luelja5v;

create table todos (
	id INT auto_increment NOT Null,
    description varchar(255),
    createdAT TIMESTAMP NOT NULL,
    primary key(id)
    );