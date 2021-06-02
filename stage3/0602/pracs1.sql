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

insert into dept values(10, 'Accounting', 'New York') ;
insert into dept values(20, 'Research', 'Dallas') ;
insert into dept values(30, 'Sales', 'Chicago') ;
insert into dept values(40, 'Operations', 'Boston') ;
insert into dept values(50, 'Admin', 'Washing') ;

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

insert into emp values(7369, 'Smith', 'Clerk',7902, '1980-12-17',800,0,20) ;
insert into emp values(7499, 'Allen', 'Salesman',7698,'1981-2-20',1600,300,30) ;
insert into emp values(7844, 'Turner', 'Salesman',7499, '1981-9-8',1500,0,30) ;
insert into emp values(7698, 'Tom', 'Manager',0, '1981-9-8',6100,600,40) ;
insert into emp values(7876, 'Adams', 'Clerk',7900, '1987-5-23',1100,0,20) ;
insert into emp values(7900, 'James', 'Clerk',7698, '1981-12-3',2400,0,30) ;
insert into emp values(7902, 'Ford', 'Analyst',7698, '1981-12-3',3000,null,20) ;
insert into emp values(7901, 'Kik', 'Clerk',7900, '1981-12-3',1900,0,30) ;
-- emp员工表(empno员工号/ename员工姓名/job工作/mgr上级人员编号/hiredate受-- 雇-- 日期/sal薪金/comm佣金/deptno部门编号)
-- dept部门表(deptno部门编号/dname部门名称/loc地点)

-- 工资 ＝ 薪金 ＋ 佣金

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
-- select class, count(1) as 班级数量 from pracs3 group by class;

SELECT emp.deptno,count(*)
FROM dept
RIGHT JOIN emp
ON dept.deptno = emp.deptno
group by emp.deptno;

-- 2．列出薪金比“SMITH”多的所有员工
SELECT ename
FROM emp
where sal>(SELECT sal
FROM emp
where ename="Smith");

-- 3．列出所有员工的姓名及其直接上级的姓名
-- 获得员工名字和上级编号
	select  ename,mgr
	from  emp;

-- 上级的名字，根据编号筛选

	select  ename
	from  emp
	where  mgr=empno;

SELECT ename 员工姓名,(SELECT ename FROM emp WHERE empno=e.mgr) 上级姓名 FROM emp e;


-- 4．列出受雇日期早于其直接上级的所有员工。(同上,日期可直接拿来比较) 

SELECT hiredate '受雇日期',(SELECT hiredate FROM emp  WHERE empno=e.mgr) '上级受雇日期',ename '员工名'
FROM emp e WHERE hiredate-(SELECT hiredate FROM emp  WHERE empno=e.mgr)<0;

-- 5．列出所有工作为“CLERK”（办事员）的姓名及其部门名称。(域，注意()) 

SELECT emp.ename,dept.dname
FROM dept
RIGHT JOIN emp
ON dept.deptno = emp.deptno
where job="Clerk";

-- 6．列出在部门“SALES”（销售部）工作的员工的姓名，假定不知道销售部的部门编号。
SELECT *
FROM dept
RIGHT JOIN emp
ON dept.deptno = emp.deptno;

SELECT emp.ename,dept.dname
FROM dept
RIGHT JOIN emp
ON dept.deptno = emp.deptno
where dept.dname="Sales";

-- 7．列出薪金高于公司平均薪金的所有员工。(反复查自己) 

SELECT ename,sal
FROM emp
where sal>(SELECT avg(sal)
FROM emp)
group by ename;

-- 8．列出与“Kik”从事相同工作的所有员工。(排除自己) 
-- kik 的工作
select ename 
from emp
where job in (
select job
from emp
where ename="Kik" 
)and ename != "Kik";

-- 9．列出薪金等于部门30中员工的薪金的所有员工的姓名和薪金。(any的用法，且排挤) 

-- 部门30员工的薪金
select sal
from emp
where deptno = 30;

select sal,ename,deptno
from emp
where sal in (
select sal
from emp
where deptno = 30
) and deptno <> 30;



-- 10．列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金。(max的用法) 
-- 所有员工的薪资
select sal,ename,deptno
from emp
where sal;

-- 30的薪资
select sal
from emp
where deptno = 30;

-- 判断
select sal,ename,deptno
from emp
where sal > any (select sal
from emp
where deptno = 30) and deptno <> 30;



-- 11．列出在每个部门工作的员工数量、平均工资和平均服务期限。
select deptno,avg(sal+ifnull(comm,0)) as 平均薪资,count(*) as 员工数量
from emp
group by deptno;

-- 12．列出所有员工的姓名、部门名称和工资. 

SELECT emp.ename,dept.dname,sum(sal+ifnull(comm,0))
FROM dept
RIGHT JOIN emp
ON dept.deptno = emp.deptno
group by emp.ename;












