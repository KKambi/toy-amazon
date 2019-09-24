DROP TABLE IF EXISTS carousel;

CREATE TABLE carousel(
	id int unsigned AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO carousel (name) VALUES (
    '메인',
);

INSERT INTO carousel (name) VALUES (
    '비디오',
);

INSERT INTO carousel (name) VALUES (
    '음악',
);