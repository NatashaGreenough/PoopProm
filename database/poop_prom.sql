CREATE DATABASE POOPPROM;
CREATE USER 'pp'@'localhost' IDENTIFIED BY 'poop_prom';
/* CREATE USER 'pp'@'%' IDENTIFIED BY 'poop_prom'; */
GRANT ALL ON POOPPROM.* TO 'pp'@'localhost';
/* GRANT ALL ON POOPPROM.* TO 'pp'@'%';*/
FLUSH PRIVILEGES;
USE POOPPROM;

CREATE TABLE toilets (
    toilet_id INT (10) AUTO_INCREMENT PRIMARY KEY,
    toilet_name VARCHAR (25) DEFAULT NULL
);

CREATE TABLE locations (
    location_id INT (10) AUTO_INCREMENT PRIMARY KEY,
    location_latitude DECIMAL (18, 15) DEFAULT NULL,
    location_longitude DECIMAL (18, 15) DEFAULT NULL,
    toilet_id INT (10) NOT NULL,
    FOREIGN KEY (toilet_id) REFERENCES toilets (toilet_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE address_info (
    toilet_address VARCHAR (100) DEFAULT NULL, 
    toilet_district VARCHAR (50) DEFAULT NULL,
    toilet_province VARCHAR (50) DEFAULT NULL,
    toilet_zip VARCHAR (5) DEFAULT NULL,
    toilet_id INT (10) NOT NULL,
    FOREIGN KEY (toilet_id) REFERENCES toilets (toilet_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE label_info (
    toilet_label VARCHAR (50) DEFAULT NULL,
    toilet_id INT (10) NOT NULL,
    FOREIGN KEY (toilet_id) REFERENCES toilets (toilet_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE pic_info (
    toilet_pic BLOB DEFAULT NULL,
    toilet_id INT (10) NOT NULL,
    FOREIGN KEY (toilet_id) REFERENCES toilets (toilet_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE ratings (
    toilet_rating INT (1) DEFAULT NULL,
    toilet_id INT (10) NOT NULL,
    FOREIGN KEY (toilet_id) REFERENCES toilets (toilet_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE avg_rate (
    toilet_avg_rate DECIMAL (3, 2) DEFAULT NULL,
    toilet_id INT (10) NOT NULL,
    FOREIGN KEY (toilet_id) REFERENCES toilets (toilet_id) ON DELETE CASCADE ON UPDATE CASCADE
);


/* Data for table toilets */
INSERT INTO toilets(toilet_id, toilet_name) VALUES (1,'HM'); /* https://maps.app.goo.gl/FmRrXCRsmDwCMtiUA */
INSERT INTO toilets(toilet_id, toilet_name) VALUES (2,'ECC'); /* https://maps.app.goo.gl/bYetukU4WYpVqciZ9 */
INSERT INTO toilets(toilet_id, toilet_name) VALUES (3,'Suvarnabhumi Airport'); /* https://maps.app.goo.gl/L6Fe9qYzRAT6t7ae6 */
INSERT INTO toilets(toilet_id, toilet_name) VALUES (4,'Robinson Ladkrabang'); /* https://maps.app.goo.gl/W7y9yKXYaz38W4hJ9 */
INSERT INTO toilets(toilet_id, toilet_name) VALUES (5,'Central Ladprao'); /* https://maps.app.goo.gl/Y46PHkrzFn5NS2oj8 */
INSERT INTO toilets(toilet_id, toilet_name) VALUES (6,'Terminal21 Rama 3'); /* https://maps.app.goo.gl/RDFP3ofHo36rKkJX7 */
INSERT INTO toilets(toilet_id, toilet_name) VALUES (7,'Terminal21 Pattaya'); /* https://maps.app.goo.gl/pC9fZK6ybWPPzVAf6 */
INSERT INTO toilets(toilet_id, toilet_name) VALUES (8,'Bangsaen Beach'); /* 13.288560008745767, 100.91127469813814 */
INSERT INTO toilets(toilet_id, toilet_name) VALUES (9,'WAT PLUK'); /* https://maps.app.goo.gl/oxEWGfHbGj435wBm8 */
INSERT INTO toilets(toilet_id, toilet_name) VALUES (10,'12 Building'); /* https://maps.app.goo.gl/pYkgkRHTTb6TqzAH8 */

/* Data for table locations */
INSERT INTO locations(location_id, location_latitude, location_longitude, toilet_id) 
VALUES (1, 13.726643935743672, 100.77509404166722, 1);
INSERT INTO locations(location_id, location_latitude, location_longitude, toilet_id) 
VALUES (2, 13.729491808587719, 100.77554987909062, 2); 
INSERT INTO locations(location_id, location_latitude, location_longitude, toilet_id) 
VALUES (3, 13.69224355607938, 100.74997481586672, 3);
INSERT INTO locations(location_id, location_latitude, location_longitude, toilet_id) 
VALUES (4, 13.720426644205567, 100.72482517378923, 4);
INSERT INTO locations(location_id, location_latitude, location_longitude, toilet_id) 
VALUES (5, 13.817326796748022, 100.5617048607233, 5);
INSERT INTO locations(location_id, location_latitude, location_longitude, toilet_id) 
VALUES (6, 13.689863583587886, 100.50774335547086, 6);
INSERT INTO locations(location_id, location_latitude, location_longitude, toilet_id) 
VALUES (7, 12.950208050541995, 100.89093198452599, 7); 
INSERT INTO locations(location_id, location_latitude, location_longitude, toilet_id) 
VALUES (8, 13.288515158949105, 100.9112885232461, 8);
INSERT INTO locations(location_id, location_latitude, location_longitude, toilet_id) 
VALUES (9, 13.725246806597145, 100.76856623037527, 9);
INSERT INTO locations(location_id, location_latitude, location_longitude, toilet_id) 
VALUES (10, 13.727636119034525, 100.77231795837469, 10);

/* Data for table address_info */
INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id)
VALUES ('3 Thanon Chalong Krung', 'Lat Krabang', 'Bangkok', '10520', 1);
INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id)
VALUES ('1 Thanon Chalong Krung', 'Lat Krabang', 'Bangkok', '10520', 2);
INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id)
VALUES ('999, Nong Prue', 'Bang Phli', 'Samut Prakan', '10540', 3);
INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id)
VALUES ('71 Lat Krabang Rd, Lat Krabang', 'Lat Krabang', 'Bangkok', '10520', 4);
INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id)
VALUES ('1693 Phaholyothin Road', 'Chatuchak', 'Bangkok', '10900', 5);
INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id)
VALUES ('356 Rama III Rd, Bang Khlo', 'Bang Kho Laem', 'Bangkok', '10120', 6);
INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id)
VALUES ('Moo 6 456, 777, 777/1 Pattaya Sai Song Rd', 'Bang Lamung', 'Chon Buri', '20150', 7);
INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id)
VALUES ('Bang Saen Sai 1 Alley', 'Saen Suk', 'Chon Buri', '20130', 8);
INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id)
VALUES ('1665 11/11 ถ.อ่อนนุช ซ.ลาดกระบัง', 'Lat Krabang', 'Bangkok', '10520', 9);
INSERT INTO address_info(toilet_address, toilet_district, toilet_province, toilet_zip, toilet_id)
VALUES ('3 ถนน ฉลองกรุง', 'Lat Krabang', 'Bangkok', '10520', 10);

/* Data for table label_info */
INSERT INTO label_info(toilet_label, toilet_id) VALUES ('spray', 1);

/* Data for table pic_info */
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t01_1.jpg'), 1);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t02_1.jpg'), 2);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t03_1.jpg'), 3);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t03_2.jpg'), 3);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t05_1.jpg'), 5);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t06_1.jpg'), 6);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t06_2.jpg'), 6);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t06_3.jpg'), 6);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t07_1.jpg'), 7);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t07_2.jpg'), 7);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t07_3.jpg'), 7);
INSERT INTO pic_info(toilet_pic, toilet_id) VALUES (LOAD_FILE('/toilet_img/t10_1.jpg'), 10);


/* Data for table ratings */
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (4, 1);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (3, 1);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (4, 2);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (5, 3);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (4, 4);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (5, 4);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (5, 4);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (4, 5);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (5, 6);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (5, 7);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (3, 8);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (1, 10);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (2, 10);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (5, 3);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (3, 2);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (3, 2);
INSERT INTO ratings(toilet_rating, toilet_id) VALUES (1, 1);

/* Data for table avg_rate */
INSERT INTO avg_rate(toilet_avg_rate, toilet_id) SELECT FORMAT(AVG(toilet_rating), 2), toilet_id from ratings group by toilet_id;