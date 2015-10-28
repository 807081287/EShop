select * from t_product_product_image;
select * from t_product;
select * from t_order_item;
select * from t_log;
select * from t_brand;
select * from t_ad;

update t_product_product_image set large=SUBSTRING(large,22),medium=SUBSTRING(medium,22),source=SUBSTRING(source,22),thumbnail=SUBSTRING(thumbnail,22);
update t_product set image=SUBSTRING(image,22);
update t_order_item set thumbnail=SUBSTRING(thumbnail,22);
update t_ad set path=SUBSTRING(path,22);