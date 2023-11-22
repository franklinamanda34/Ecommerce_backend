INSERT INTO categories (name) VALUES
('Camp'),
('Bikes'),
('Boards');
INSERT INTO products (name, category_id, price) VALUES
('Tent', 1, 500),
('BMX', 2, 300),
('Snowboard', 3, 200);
INSERT INTO tags (name) VALUES
('Outdoor'),
('Pedal'),
('Shred');
INSERT INTO product_tags (product_id, tag_id) VALUES
(1,1),
(2,2),
(3,3);
