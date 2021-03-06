-- 商品类别表 --
CREATE TABLE category(
   cat_id INT PRIMARY KEY AUTO_INCREMENT,#类别编号
   cat_name VARCHAR(30) NOT NULL#类别名称
);

-- 商品表 --
CREATE TABLE goods(
    goods_id INT PRIMARY KEY AUTO_INCREMENT,#商品编号
    goods_name VARCHAR(30) NOT NULL,#商品名称
    goods_price DOUBLE,#商品进价
    shop_price DOUBLE,#商品卖价
    market_price DOUBLE,#市场价
    cat_id INT,#商品类别
    goods_number INT,#商品数量
   FOREIGN KEY(cat_id) REFERENCES category(cat_id)
);


INSERT INTO category(cat_name) VALUES('航模'),('车模'),('船模');
INSERT INTO category(cat_name) VALUES('动物模型');

INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('F16战斗机',300,1000,900,1,120);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('F35战斗机',400,1200,1000,1,210);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('F117隐形轰炸机',290,800,600,1,99);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('牧马人',120,600,500,2,1200);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('宝马Z4',130,560,510,2,231);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('地中海帆船',90,300,180,3,68);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('密西西比号蒸汽明轮',100,560,520,3,114);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('德鲁伊号16门炮护卫舰',1322,2322,2600,3,100);
INSERT INTO goods
(goods_name,goods_price,shop_price,market_price,cat_id,goods_number) 
VALUES('皇家理查德号 74门炮战舰',350,800,769,3,312);


--1求每个类别下商品种类数
select cat_id, count(1) as 商品数量 from goods group by cat_id;
SELECT cat_id,COUNT(*) FROM goods GROUP BY cat_id

--此方法将没有产品的类型也返回出来
SELECT category.cat_id,COUNT(goods_id)
FROM goods RIGHT JOIN category ON goods.cat_id=category.cat_id
GROUP BY category.cat_id

--2查询本店每个商品价格比市场价低多少；
SELECT goods_name,market_price-shop_price as 差价 from goods group by goods_name;

--3查询每个类别下面积压的货款
select cat_id, sum(goods_number*goods_price) as 商品积压款 from goods group by cat_id having sum(goods_number*goods_price);

SELECT cat_id,goods_price*goods_number
FROM goods
GROUP BY cat_id

--4查询本店商品价格比市场价低多少钱，输出低200元以上的商品
SELECT goods_name,market_price-shop_price as 差价 from goods group by goods_name having 差价<=200;

SELECT goods_name,market_price-shop_price
FROM goods
WHERE market_price-shop_price>200

--5查询积压货款超过2万元的栏目，以及该栏目积压的货款
select goods_name, goods_number*goods_price as 商品积压款 from goods group by goods_name having 商品积压款>20000;

--6按类别号升序排列，每个类别下的商品进价降序排列

SELECT * FROM goods ORDER BY cat_id,goods_price DESC;

--7取价格第1-6高的商品
SELECT * FROM goods ORDER BY shop_price DESC limit 6;

--8查询每个类别下进价最高的商品
select cat_id,max(goods_price) from (SELECT * FROM goods ORDER BY shop_price DESC) as table2 group by cat_id;

//SELECT MAX(goods_price) FROM goods GROUP BY cat_id;
--9取出每个类别下最新的产品(goods_id唯一)
SELECT * FROM(SELECT * FROM goods ORDER BY goods_id DESC) tab GROUP BY cat_id;

SELECT *
FROM goods
WHERE goods_id=(这个类别最大的id)

SELECT MAX(goods_id)
FROM goods
GROUP BY cat_id

SELECT *
FROM goods AS t1
WHERE t1.goods_id IN(
	SELECT MAX(t2.goods_id)
	FROM goods AS t2
	GROUP BY t2.cat_id
)


--//10题以后选作，思考题
--10.查询没有商品的商品类别

--11.查询超过最高卖价航模的商品有哪些商品？

--12.查询每个商品类别的商品总数超过500个的商品类别有哪些？

--13.查询商品进价低于100的商品类别有哪些？