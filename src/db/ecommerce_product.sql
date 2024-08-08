CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price NUMERIC(10,2)
);

CREATE TABLE backup AS TABLE product WITH NO DATA;

CREATE OR REPLACE FUNCTION backup_deleted_product()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO backup SELECT OLD.*;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER backup_product_delete
BEFORE DELETE ON product
FOR EACH ROW EXECUTE PROCEDURE backup_deleted_product();

UPDATE product SET price = 200.00 WHERE id = 1;


