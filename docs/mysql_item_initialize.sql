USE amazon;

DROP TABLE IF EXISTS item;

CREATE TABLE item(
	id int unsigned AUTO_INCREMENT,
	carousel_id int unsigned NOT NULL,
	name varchar(30) NOT NULL,
	url TEXT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(carousel_id) REFERENCES carousel(id) ON DELETE CASCADE
);

INSERT INTO item (carousel_id, name, url) VALUES (
    1,
    'Main_Card_A01',
    'https://kr.object.ncloudstorage.com/boostcamp-amazon-s3/images/Main_Card/Main_Card_A01.jpg'
);

INSERT INTO item (carousel_id, name, url) VALUES (
    1,
    'Main_Card_A02',
    'https://kr.object.ncloudstorage.com/boostcamp-amazon-s3/images/Main_Card/Main_Card_A02.jpg'
);

INSERT INTO item (carousel_id, name, url) VALUES (
    2,
    'Sub_Card_A01',
    'https://kr.object.ncloudstorage.com/boostcamp-amazon-s3/images/Sub_Card_A/Sub_Card_A01.jpg'
);

INSERT INTO item (carousel_id, name, url) VALUES (
    2,
    'Sub_Card_A02',
    'https://kr.object.ncloudstorage.com/boostcamp-amazon-s3/images/Sub_Card_A/Sub_Card_A02.jpg'
);

INSERT INTO item (carousel_id, name, url) VALUES (
    3,
    'Sub_Card_B01',
    'https://kr.object.ncloudstorage.com/boostcamp-amazon-s3/images/Sub_Card_B/Sub_Card_B01.jpg'
);

INSERT INTO item (carousel_id, name, url) VALUES (
    3,
    'Sub_Card_B02',
    'https://kr.object.ncloudstorage.com/boostcamp-amazon-s3/images/Sub_Card_A/Sub_Card_B02.jpg'
);