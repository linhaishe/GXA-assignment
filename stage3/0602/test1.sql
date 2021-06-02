CREATE DATABASE 0602homework;
use 0602homework;

create table dept(
deptno int primary key,
dname varchar(14),
loc varchar(13)
);

create table emp(
empno int not null primary key,
ename varchar(10),
job varchar(10),
mgr int,
hiredate datetime,
sal double,
comm double,
deptno int,
foreign key(deptno) references dept(deptno)
);

insert into dept 
values
(10,'Accounting', 'New York'),
(20,'Research', 'Dallas'),
(30,'Sales', 'Chicago'),
(40, 'Operations', 'Boston'),
(50, 'Admin', 'Washing');

insert into emp 
values
(7369, 'Smith', 'Clerk',7902, '1980-12-17',800,0,20),
(7499, 'Allen', 'Salesman',7698,'1981-2-20',1600,300,30),
(7844, 'Turner', 'Salesman',7499, '1981-9-8',1500,0,30),
(7698, 'Tom', 'Manager',0, '1981-9-8',6100,600,40),
(7876, 'Adams', 'Clerk',7900, '1987-5-23',1100,0,20),
(7900, 'James', 'Clerk',7698, '1981-12-3',2400,0,30),
(7902, 'Ford', 'Analyst',7698, '1981-12-3',3000,null,20),
(7901, 'Kik', 'Clerk',7900, '1981-12-3',1900,0,30);

-- 1．列出至少有一个员工的所有部门

-- 2．列出薪金比“SMITH”多的所有员工

-- 3．列出所有员工的姓名及其直接上级的姓名

-- 4．列出受雇日期早于其直接上级的所有员工。(同上,日期可直接拿来比较) 


-- 5．列出所有工作为“CLERK”（办事员）的姓名及其部门名称。(域，注意()) 



-- 6．列出在部门“SALES”（销售部）工作的员工的姓名，假定不知道销售部的部门编号。


-- 7．列出薪金高于公司平均薪金的所有员工。(反复查自己) 


-- 8．列出与“Kik”从事相同工作的所有员工。(排除自己) 


-- 9．列出薪金等于部门30中员工的薪金的所有员工的姓名和薪金。(any的用法，且排挤) 

-- 10．列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金。(max的用法) 


-- 11．列出在每个部门工作的员工数量、平均工资和平均服务期限。(


-- 12．列出所有员工的姓名、部门名称和工资. 













