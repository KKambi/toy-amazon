USE amazon;

DROP TABLE IF EXISTS user;
(user, password, name, birth, gender, email, phone, interest, admin)
CREATE TABLE user(
    id int unsigned AUTO_INCREMENT,
    user varchar(30) NOT NULL UNIQUE,
    password varchar(64) NOT NULL,
    name varchar(10) NOT NULL,
    birth varchar(10) NOT NULL,
    gender enum('m', 'f') NOT NULL DEFAULT 'm',
    email varchar(30) NOT NULL,
    phone varchar(30) NOT NULL,
    interest varchar(64) NOT NULL,
    admin tinyint(1) NOT NULL DEFAULT 0,
    PRIMARY KEY(id)
);

INSERT INTO user (user, password, name, birth, gender, email, phone, interest, admin) VALUES (
    'user',
    '123123',
    '일반유저1',
    '94/07/01',
    'f',
    'runinging@gmail.com',
    '010-5575-9076',
    '드라마/잠/그림',
    0
);

INSERT INTO user (user, password, name, birth, gender, email, phone, interest, admin) VALUES (
    'admin',
    '123123',
    '관리자1',
    '94/03/22',
    'm',
    'bok03220@gmail.com',
    '010-7334-2256',
    '게임/프로그래밍/노래',
    1
);