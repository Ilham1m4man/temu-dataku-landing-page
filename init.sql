CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email         TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO users (email, password_hash) VALUES ('example@mail.com', crypt('1234567890', gen_salt('bf')));

CREATE TABLE products (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT        NOT NULL,
  category    TEXT        NOT NULL,
  price		  INTEGER     NOT NULL,
  image_url   TEXT        NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO products (name, category, price, image_url) VALUES
('AXF',  'Chairs', 100000, '/images/axf.jpg'),
('TICK', 'Table', 10000, '/images/tick.jpg'),
('MELM', 'Sofa', 1000, '/images/melm.jpg'),
('STRT', 'Table', 100, '/images/strt.jpg'),
('LAN',  'Chairs', 1000000, '/images/lan.jpg'),
('YDV',  'Sofa', 200000, '/images/ydv.jpg'),
('TERA', 'Sofa', 300000, '/images/tera.jpg'),
('YUN',  'Chairs', 400000, '/images/yun.jpg'),
('TAV',  'Table', 50000, '/images/tav.jpg');