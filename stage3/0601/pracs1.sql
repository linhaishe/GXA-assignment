
班级表：t_CLASS
编号:c_id 整形 主键 自增
名称：c_name 字符串 不能为空 不允许重复 


学生表：t_student
编号s_id 整形 主键 自增
姓名：s_name 字符串 不允许重复 
性别：s_sex 字符串 默认值 男 
年龄：s_age 整形 
班级编号: s_class_id 整形 外键 指向班级表的班级编号

建表 并添加数据，并完成以下题目



1.把刘基的名字修改为刘伯温
2.唐伯虎年龄20，性别男，班级3，添加到表中 
3.查询出所有姓名包括伯的所有的人员的信息
4，查询年龄在10-20之间的所有人员的信息
5，查询年龄在10-20之间的所有人员前5条的信息 并且将查询出的每个人的年龄加10
6,查询年龄在10岁以下或20岁以上的所有人员的姓名和年龄前5条的记录，
并且将查询出的每个人的年龄加10，并且不能重复 并且给每个字段起一个别名



insert into student  values (1,"刘基","男",7,1), (2,"小张","女",18,2), (3,"小刘","男",18,3), (4,"小陈","女",20,2), (5,"小红","女",8,2), (6,"小黄","女",20,2), (7,"小六","女",8,2)

insert into student
values
(8,"唐伯虎","男",20,3);

select * from student where studentName like '%伯%';
select * from student where age between 10 and 20;
select age+5 as age from student where age between 10 and 20 limit 0,5;

select age+10 as age2 from student where age<10 or age>20 limit 0,5;