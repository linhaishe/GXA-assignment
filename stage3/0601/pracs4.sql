/*
商品表
create table t_shop(
	s_id int primary key auto_increment,
	s_shopcode varchar(30),    -- 商品编号
	s_name varchar(40),        -- 商品名称
	s_price int ,              -- 商品价格
	s_class   varchar(50)      -- 商品类别
);
insert into t_shop(s_shopcode,s_name,s_price,s_class) values 
('n11','橙子',9,'水果'),
('x330','血橙',11,'水果'),
('yx673','柚子',7,'水果'),
('n12','白菜',2,'蔬菜'),
('a13','冬瓜',3,'蔬菜'),
('n14','西瓜',4,'水果'),
('n15','丝瓜',5,'蔬菜'),
('c16','苦瓜',6,'蔬菜'),
('m17','南瓜',5,'蔬菜'),
('d18','茄子',6,'蔬菜');

*/
-- 1  查询所有包含瓜的商品名称信息

SELECT * FROM t_shop WHERE s_name LIKE '%瓜%';

-- 2  查询价格在1 到8 的所有商品信息
SELECT * FROM t_shop WHERE s_price between 1 and 8 ;

-- 3  查询商品的最高价格的值是多少

SELECT max(s_price) FROM t_shop ;

-- 4  查询商品价格最高的前三个商品的信息

SELECT * FROM t_shop ORDER BY s_price desc limit 0,3;

-- 5  查询所有商品的平均价格

SELECT avg(s_price) FROM t_shop ;

-- 6  查询所有包含瓜的商品的平均价格
SELECT avg(s_price) FROM (SELECT * FROM t_shop WHERE s_name LIKE '%瓜%') as table2;

SELECT AVG(s_price)
FROM t_shop
WHERE s_name LIKE '%瓜%'

-- 7  查询最高商品的价格是最低商品的价格的倍数是多少
SELECT max(s_price)/min(s_price) FROM t_shop;
  
-- 8  查询商品名称中包含橙字的有多少个商品
select s_name ,count(1)as数量 from (SELECT * FROM t_shop WHERE s_name LIKE '%橙%') as table2 group by s_name;

SELECT COUNT(*)
FROM t_shop
WHERE s_name LIKE '%橙%'

-- 9  修改 西瓜的价格为2块
update t_shop set s_price= 2 WHERE s_name="西瓜";

-- 10  删除id 为，4,9,1 的商品信息
DELETE
FROM t_shop
WHERE s_id=1 or s_id=4 or s_id=9;

DELETE FROM t_shop WHERE s_id in(4,9,1);

-- 11  查询蔬菜类别中最高的价格是多少？

select max(s_price) from (SELECT * FROM t_shop WHERE s_class="蔬菜") as table2;

select max(s_price) from t_shop where s_class="蔬菜";



