CREATE TABLE IF NOT EXISTS nav_bar_tbl (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  nav_bar_item VARCHAR(250) NOT NULL,
  nav_bar_item_route VARCHAR(250) NOT NULL
);

INSERT INTO nav_bar_tbl (nav_bar_item, nav_bar_item_route)
values  ('Men', '/men'),
	('WOMEN', '/women'),
	('kids', '/kids');
