一.商品销售记录表
id	商品编号 销售日期    销售数量  商品单价 销售总金额 销售员工
1	xsl001	2013/12/2	124	134.5	16678	    张三
2	xsl002	2013/12/2	50	80	4000	    李四
3	xsl003	2013/12/5	66	55	3630	    张三
4	xsl001	2013/11/20	10	134.5	1345	    张三
5	xsl001	2013/11/2	20	134.5	2690	    王五
6	xsl002	2013/11/5	30	80	2400	    张三
7	xsl002	2013/11/9	23	80	1840	    王五
8	xsl003	2013/12/11	10	55	550	    李四
9	xsl003	2013/12/12	50	55	2750	    王五
10	xsl004	2013/11/30	45	100	4500	    张三
Alter table t_shop_xs Auto increment =1000
（1）创建商品销售记录表
（2）插入数据
完成下列sql语句
1.查询张三的所有销售记录
select * from salesRecord
where staff = "张三";

2.查询张三12月份的销售记录
select * from salesRecord
where staff = "张三" and soldDate between "2013-11-30" and "2013-12-31";

select * from salesRecord
where staff = "张三" and soldDate like '____-12-__';

3.查询销售总金额大于2000 的12月份销售记录
select * from salesRecord
where salesSum >= 2000 and soldDate between "2013-11-30" and "2013-12-31";

where staff = "张三" and soldDate like '____-12-__' and salesSum >= 2000;

4.查询前10条销售记录
select * from salesRecord limit 0,10;

5.查询前10条销售记录中商品编号xsl001的记录
select * from 
(select * from salesRecord limit 0,10 )
 as table_b where itemId="xsl001";

6.查询销售数量大于20 销售人员为李四的记录
select * from salesRecord
where salesCount >= 20 and staff="李四";

7.查询前5条 销售人员为王五的记录，只显示 商品编号 销售总金额 销售人员 这些列（要求列名用中文别名显出）

select itemId as 商品编号,salesSum as 销售总金额 ,staff as 销售人员 from 
(select itemId,salesSum,staff from salesRecord limit 0,5 )
 as table_b where staff="王五";

select itemId as 商品编号,salesSum as 销售总金额 ,staff as 销售人员 from salesRecord where staff="王五" limit 0,5;

8.查询2013年11月20日之后 2013年12月10日之前的记录
select * from salesRecord
where soldDate between "2013-11-20" and "2013-12-10";

9.查询从第三条数据开始，到第10条数据结束的记录，要求商品单价大于100 或则销售数量大于50

select * from 
(select * from salesRecord limit 2,8)
 as table_b where price>100 or salesCount > 50 ;

create table salesRecord(
id int primary key auto_increment,
itemId varchar(40),
soldDate date,
salesCount int not null,
price float,
salesSum float not null,
staff varchar(40) not null
);

insert into salesRecord 
values
(1,"xsl001","2013-12-02",124,134.5,16678,"张三"),
(2,"xsl002","2013-12-02",50,80,4000,"李四"),
(3,"xsl003","2013-12-05",66,55,3630,"张三"),
(4,"xsl001","2013-11-20",10,134.5,1345,"张三"),
(5,"xsl001","2013-11-02",20,134.5,2690,"王五"),
(6,"xsl002","2013-11-05",30,80,2400,"张三"),
(7,"xsl002","2013-11-09",23,80,1840,"王五"),
(8,"xsl003","2013-12-11",10,55,550,"李四"),
(9,"xsl004","2013-12-12",50,55,2750,"王五"),
(10,"xsl004","2013-11-30",45,100,4500,"张三")




