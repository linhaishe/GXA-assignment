
姓名	年龄	性别	学号	  成绩		班级
Jacky	20	男	xh1001	   90		T01
Simth	30	男	xh1002	   75		T02
Jay	    18	男	xh1003	   80		T01
Helen	19	女	xh1004	   75		T02
lily	22	女	xh1005	   90		T03
Green	23	男	xh1006	   85		T02
RedChar	18	男	xh1007	   60		T01
Kevin	17	女	xh1008	   45		T03

1.统计每个班的学员的数量
select class, count(1) as 班级数量 from pracs3 group by class;

SELECT c_class,COUNT(*)
FROM class2
GROUP BY c_class
2.统计每个班的总分
select sum(score), class from pracs3 group by class;

3.统计每个班的平均分
select avg(score),class from pracs3 group by class;

4.统计每个班的最高分
select class, max(score) as 最高分 from pracs3 group by class;

5.统计每个班的最低分
select class, min(score) as 最高分 from pracs3 group by class;

6.统计每个班学员的数量,总分,平均分,最高分,最低分
select class,count(1) as 班级人数,sum(score) as 班级总分,avg(score) as 班级平均分, max(score) as 班级最高分,min(score) as 班级最低分 from pracs3 group by class;

8.统计班级ID为T01的学员的数量,总分,平均分,最高分,最低分
select class,count(1) as 班级人数,sum(score) as 班级总分,avg(score) as 班级平均分, max(score) as 班级最高分,min(score) as 班级最低分 from (select * from pracs3 where class="T01") as table2 group by class;

SELECT COUNT(1),SUM(c_score),AVG(c_score),MAX(c_score),MIN(c_score)
FROM class2
WHERE c_class='T01';

9.查询平均分上85的班级有哪些？
select class,count(1) as 班级人数,sum(score) as 班级总分,avg(score) as 班级平均分, max(score) as 班级最高分,min(score) as 班级最低分 from pracs3 group by class having 班级平均分>85;

10.查询有女生的班级是哪些？
SELECT c_class
FROM class2
WHERE c_sex='女'
GROUP BY c_class


create table pracs3(
id int primary key auto_increment,
studentName varchar(40),
age int,
gender char(1),
stuNum varchar(40),
score int,
class varchar(40)
);

insert into pracs3
values
(1,"jacky",20,"男","xh1001",90,"T01"),
(2,"Simth",30,"男","xh1002",75,"T02"),
(3,"Jay",18,"男","xh1003",80,"T01"),
(4,"Helen",19,"女","xh1004",75,"T02"),
(5,"lily",22,"女","xh1005",90,"T03"),
(6,"Green",23,"男","xh1006",85,"T02"),
(7,"RedChar",18,"男","xh1007",60,"T01"),
(8,"Kevin",17,"女","xh1008",45,"T03")

