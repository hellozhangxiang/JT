SET NAMES UTF8;
USE app_zhangxiangjt;

#首页轮播广告图表
CREATE TABLE yd_nav(
	nav_id INT,
	nav_img VARCHAR(64),
	nav_sm_img VARCHAR(64)
);
INSERT INTO yd_nav VALUES(1,"img/u3.jpg","img/smu3.jpg");
INSERT INTO yd_nav VALUES(2,"img/u4.jpg","img/smu4.jpg");
INSERT INTO yd_nav VALUES(3,"img/u14.jpg","img/smu14.jpg");
INSERT INTO yd_nav VALUES(4,"img/u17.jpg","img/smu17.jpg");
INSERT INTO yd_nav VALUES(5,"img/u19.jpg","img/smu19.jpg");
INSERT INTO yd_nav VALUES(6,"img/u21.jpg","img/smu21.jpg");
INSERT INTO yd_nav VALUES(7,"img/u38.jpg","");


#首页重大项目展示图表
CREATE TABLE yd_success(
	succ_id INT,
	succ_img VARCHAR(64)
);
INSERT INTO yd_success VALUES(1,"img/a1.png");
INSERT INTO yd_success VALUES(2,"img/a2.png");
INSERT INTO yd_success VALUES(3,"img/a3.png");
INSERT INTO yd_success VALUES(4,"img/a4.png");
INSERT INTO yd_success VALUES(5,"img/a5.png");
INSERT INTO yd_success VALUES(6,"img/a6.png");

#年度完成项目展示图表
CREATE TABLE yd_project(
	pro_id INT,
	pro_img VARCHAR(64),
	pro_intr VARCHAR(64)
);
INSERT INTO yd_project VALUES(1,"img/indexu14.jpg","千万机组项目");
INSERT INTO yd_project VALUES(2,"img/indexu17.jpg","杭州科技城开发项目");
INSERT INTO yd_project VALUES(3,"img/indexu19.jpg","中国商飞投资项目");
INSERT INTO yd_project VALUES(4,"img/indexu30.jpg","丝绸之路项目");

#新闻图片表
CREATE TABLE yd_news(
	new_id INT,
	main_img VARCHAR(64),
	base_img VARCHAR(64)
);
INSERT INTO yd_news VALUES(1,"img/u2.jpg","img/u24.jpg");
INSERT INTO yd_news VALUES(2,"img/u3.jpg","img/u10.jpg");

#业务介绍图片表
CREATE TABLE yd_business(
	busi_id INT,
	busi_video VARCHAR(64),
	v_img VARCHAR(64),
	basi_img VARCHAR(64),
	title VARCHAR(64),
	intr VARCHAR(64)
);
INSERT INTO yd_business VALUES(1,"123.mp4","img/u22.jpg","img/u19.jpg","我们的信誉第一","我在专注于航空航天事业发展");
INSERT INTO yd_business VALUES(2,"","","img/u33.jpg","我们的质量第一","我们在房地产的发展坚如万里长城");

#项目介绍
CREATE TABLE yd_main_project(
	new_id INT,
	mp_img VARCHAR(64)
);
INSERT INTO yd_main_project VALUES(1,"img/u19.jpg");
INSERT INTO yd_main_project VALUES(2,"img/u4.jpg");
INSERT INTO yd_main_project VALUES(3,"img/u37.jpg");