CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price NUMERIC(10,2)
);

CREATE TABLE backup AS TABLE product WITH NO DATA;



