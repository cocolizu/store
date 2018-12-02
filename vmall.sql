SET NAMES UTF8;
DROP DATABASE IF EXISTS vmall;
CREATE DATABASE vmall CHARSET=UTF8;
USE vmall;
CREATE TABLE vmall_user(
	uname VARCHAR(16) PRIMARY KEY,
	upwd VARCHAR(32) NOT NULL
);
INSERT INTO vmall_user VALUES('silence','admin');
CREATE TABLE vmall_list(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	limg VARCHAR(64) NOT NULL,
	lname VARCHAR(32) NOT NULL,
	lprice INT NOT NULL,
	bType VARCHAR(4) NOT NULL,
	lcomment INT DEFAULT 0
);
INSERT INTO vmall_list VALUES(NULL,'img/show_body7.jpg','【100元订金】荣耀8X Max',1799,'参加抢购',3141);
INSERT INTO vmall_list VALUES(NULL,'img/phone7.jpg','HUAWEI nova 3i',2399,'选购',3790);
INSERT INTO vmall_list VALUES(NULL,'img/show_body8.jpg','HUAWEI 麦芒7',2399,'选购',274);
INSERT INTO vmall_list VALUES(NULL,'img/listphone.jpg','荣耀8X',1399,'选购',17729);
INSERT INTO vmall_list VALUES(NULL,'img/show_body7.jpg','荣耀8X Max',1799,'立即预约',3141);
INSERT INTO vmall_list VALUES(NULL,'img/phone3.jpg','荣耀V10',3299,'选购',382);
INSERT INTO vmall_list VALUES(NULL,'img/phone5.jpg','荣耀 Note10',2699,'选购',11337);
INSERT INTO vmall_list VALUES(NULL,'img/phone10.jpg','HUAWEI nova 3i',1999,'选购',3790);
INSERT INTO vmall_list VALUES(NULL,'img/listphone2.jpg','荣耀9',1899,'选购',382);
INSERT INTO vmall_list VALUES(NULL,'img/listphone3.jpg','荣耀畅玩7 移动4G+',599,'到货通知',1);
INSERT INTO vmall_list VALUES(NULL,'img/listphone4.jpg','HUAWEI nova 3',2799,'选购',9586);
INSERT INTO vmall_list VALUES(NULL,'img/show_body4.jpg','荣耀9i',1299,'选购',31056);
INSERT INTO vmall_list VALUES(NULL,'img/show_body5.jpg','荣耀play',1799,'选购',29585);
INSERT INTO vmall_list VALUES(NULL,'img/show_body2.jpg','华为畅享 8e 青春',799,'选购',1585);
INSERT INTO vmall_list VALUES(NULL,'img/listphone6.jpg','荣耀畅玩7',599,'选购',6098);
INSERT INTO vmall_list VALUES(NULL,'img/showdetail.jpg','荣耀10',2299,'选购',79701);
INSERT INTO vmall_list VALUES(NULL,'img/show_body3.jpg','HUAWEI Mate RS 保时捷设计',12999,'选购',6845);
INSERT INTO vmall_list VALUES(NULL,'img/pre_pro2.jpg','荣耀畅玩7A',699,'选购',8760);
INSERT INTO vmall_list VALUES(NULL,'img/phone10.jpg','华为畅享8e',999,'选购',1794);
INSERT INTO vmall_list VALUES(NULL,'img/phone8.jpg','华为畅享8 Plus',1699,'选购',9220);

INSERT INTO vmall_list VALUES(NULL,'img/show_body4.jpg','荣耀9i',1299,'选购',31056);
INSERT INTO vmall_list VALUES(NULL,'img/show_body5.jpg','荣耀play',1799,'选购',29585);
INSERT INTO vmall_list VALUES(NULL,'img/show_body2.jpg','华为畅享 8e 青春',799,'选购',1585);
INSERT INTO vmall_list VALUES(NULL,'img/listphone6.jpg','荣耀畅玩7',599,'选购',6098);
INSERT INTO vmall_list VALUES(NULL,'img/showdetail.jpg','荣耀10',2299,'选购',79701);

