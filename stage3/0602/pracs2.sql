create table students(              --  学生信息表
 studentid int auto_increment not null primary key,  --  学号
 StudentName varchar(20) not null,   --  学生姓名
 gender char(2),              -- 学生性别
 birthday date
)engine=innodb;

-- 测试数据
insert into students(studentname,gender,birthday) values
('张三','男','1987-02-01'),
('李斯','女','1990-12-01'),
('王二','男','1988-09-01'),
('黎明','男','1991-08-01');

create table teachers(   --  老师信息表
  teacherid int auto_increment not null primary key,  --  老师编号
  teacherName varchar(20) not null            --  老师姓名
)engine=innodb;

-- 测试数据
insert into teachers(teacherName) 
values('张三'),('李四'),('王五'),('Jacky'),('Helen'),('Kevin');


create table courses(                --  课程表
  Courseid int auto_increment not null,  --  课程号
  courseName varchar(20) not null unique,     --  课程名
  TeacherID int not null ,                   --  教师编号
  foreign key (teacherID) references teachers(teacherId),
  primary key (courseid,teacherid)
)engine=innodb;


-- 测试数据
insert into courses(coursename, teacherID) values
('pre',4),('c',4),('sql',5),('java oo',3),('oracle',5),
('ooad',3),('Web前端',5),('Java web',4),('Java EE',3),('Android',2),('毕业项目',5),
('就业课',1);

create table scores(                --  成绩表
   studentid int not null,         --  学号
   courseid int not null,          --  课程号
   mark int,                       --  成绩
   primary key (studentid,courseid),
   foreign key (studentid) references students(studentid),
   foreign key (courseid) references Courses(CourseID)
)engine=innodb;

-- 测试数据

insert into scores(studentid,courseid,mark) values
(1,1,60),(1,2,70),(1,3,80),(1,4,55),(1,5,100),(1,6,90),
(2,1,50),(2,2,70),(2,3,80),(2,4,55),(2,5,100),(2,6,90),(2,7,50),(2,8,70),(2,9,50),(2,10,55),(2,11,100),(2,12,30),
(3,1,90),(3,2,70),(3,3,80),(3,4,55),(3,5,100),(3,6,90),(3,7,90),(3,8,80),(3,9,90),(3,10,55),(3,11,100),(3,12,100),
(4,1,100),(4,2,70),(4,3,80),(4,4,55),(4,5,100),(4,6,90),(4,9,100),(4,10,90);


-- 请编写SQL语句，完成如下任务: 
--  1.查询课程"1"比课程"2"成绩高的所有学生的学号

SELECT tab1.studentid 
FROM (SELECT studentid,courseid courseid1,mark mark1 FROM scores WHERE courseid=1) tab1 
JOIN (SELECT studentid,courseid courseid2,mark mark2 FROM scores WHERE courseid=2) tab2
ON tab1.studentid=tab2.studentid
WHERE tab1.mark1>tab2.mark2;

--  2.查询平均成绩大于60分的同学的学号和平均成绩
select studentid,avg(mark)
from scores
group by studentid having avg(mark)>60;

--  3.查询所有同学的学号、姓名、选课数、总成绩

select students.StudentName,students.studentid,count(*) 选课数量,sum(mark)
from students
join scores on students.studentid = scores.studentid
group by students.StudentName;

-- join courses on courses.Courseid = scores.courseid;

--  4.查询姓“王”的老师的个数
select count(*)
from teachers
where teacherName like '王%';

--  5.查询没学过"张三"老师课的同学的学号、姓名
select distinct scores.studentid,students.StudentName
from ((students
join scores on scores.studentid = students.studentid)
join courses on courses.Courseid = scores.courseid)
where courses.TeacherID <> 1 ;

select *
from ((students
join scores on scores.studentid = students.studentid)
join courses on courses.Courseid = scores.courseid);

SELECT studentid,StudentName FROM students WHERE studentid 
NOT IN(SELECT studentid FROM scores WHERE 
courseid=(SELECT Courseid FROM courses WHERE TeacherID=(SELECT teacherid FROM teachers WHERE teacherName='张三')));

-- 张三老师的id 
SELECT teacherid FROM teachers WHERE teacherName='张三'
-- 张三老师的课程
SELECT Courseid FROM courses WHERE TeacherID = 张三老师的id
-- 选择studentid 在score里 courseid 为张三的课
SELECT studentid FROM scores WHERE 
courseid=张三老师的课程id

--  6.查询学过“1”并且也学过编号“2”课程的同学的学号、姓名；
-- score 筛选分类 按照学生id分类 筛选课程有1和2
-- 筛选出所有有课程1和2的信息
select *
from scores 
where courseid =1 or courseid =2;

select studentid,StudentName
from students
where studentid in (
select studentid
from scores 
where courseid =1 or courseid =2
);

--  7.查询学过“张三”老师所教的所有课的同学的学号、姓名
SELECT studentid,StudentName FROM students WHERE studentid 
IN(SELECT studentid FROM scores WHERE 
courseid=(SELECT Courseid FROM courses WHERE TeacherID=(SELECT teacherid FROM teachers WHERE teacherName='张三')));

--  8.查询课程编号“002”的成绩比课程编号“001”课程低的所有同学的学号、姓名


SELECT tab1.studentid 
FROM (SELECT studentid,courseid courseid1,mark mark1 FROM scores WHERE courseid=1) tab1 
JOIN (SELECT studentid,courseid courseid2,mark mark2 FROM scores WHERE courseid=2) tab2
ON tab1.studentid=tab2.studentid
WHERE tab1.mark1<tab2.mark2;

--  9.查询所有,课程的成绩小于60分的同学的学号、姓名
select studentid,StudentName
from students
where studentid in (select distinct studentid 
from scores
where mark<60);


-- 10.列出sql成绩大于等于 所有学生sql平均成绩的学生
select studentid,StudentName
from students
where studentid in (select distinct studentid
from scores
where mark>=(select avg(mark)
from scores
where courseid = (select Courseid
from courses
where courseName = "sql")));


-- 获得学生id
select distinct studentid
from scores
where mark>=(select avg(mark)
from scores
where courseid = (select Courseid
from courses
where courseName = "sql"));


-- 所有sql的平均分
select avg(mark)
from scores
where courseid = (select Courseid
from courses
where courseName = "sql");
-- 获得sql的id 
select Courseid
from courses
where courseName = "sql";
-- 学生sql的分数
select mark,studentid
from scores
where courseid = (select Courseid
from courses
where courseName = "sql")
group by studentid;


-- 11.列出没有上过“就业课”的同学
-- 获得就业科id
select Courseid
from courses
where courseName = "就业课";

-- 获得学生id
select studentid
from scores
where courseid in (select Courseid
from courses
where courseName = "就业课");

select studentid,StudentName
from students
where studentid in (
select studentid
from scores
where courseid in (select Courseid
from courses
where courseName = "就业课")
);

-- 12.列出“王五”老师 所教授的课程有哪些？（列出课程名字，和老师名字）
SELECT Courseid,courseName
FROM courses
RIGHT JOIN teachers
ON courses.TeacherID = teachers.teacherid
where courses.TeacherID = (select teachers.teacherid
from teachers
where teachers.teacherName = "王五");

-- 13.列出被学生得到100分的课程有哪些？
-- 获得100分的课程id
select distinct courseid
from scores
where mark = 100;

select courseName
from courses
where Courseid in (select distinct courseid
from scores
where mark = 100);

-- 14.列出所有学生每门课程的考试成绩
select students.StudentName,scores.mark,courses.courseName
from ((scores
join students on scores.studentid = students.studentid)
join courses on courses.Courseid = scores.courseid);