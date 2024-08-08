create table product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price NUMERIC(10,2)
);

insert into product(name, description, price) values('boatrockerz', 'headphones', 2500);
select * from product;
select * from product
create table backup as table product with no data;

create or replace function backup_deleted_product()
returns trigger as $$
begin
    insert into backup select OLD.*;
    return OLD;
end;
$$ language plpgsql;

create trigger backup_product_delete
before delete on product
for each row execute procedure backup_deleted_product();

create table product_updates (
    id SERIAL,
    name VARCHAR(100),
    description TEXT,
    price NUMERIC(10,2),
	time_ timestamp 
);
drop table product_updates;
create or replace function update_product()
returns trigger as $$
begin
    insert into product_updates select OLD.*, CURRENT_TIMESTAMP;
    return NEW;
end;
$$ language plpgsql;

create trigger update_product
before update on product
for each row execute procedure update_product();

update product set price = 2500.00 where id = 1;

select * from product_updates
select * from product

delete from product;
select * from backup;
