-- Foi usado o banco de dados postgres para realizar a atividade,  o banco de dados estava alocado no heroku


CREATE TABLE users_phone (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(12)
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) not null,
  age NUMERIC(2) not null,
  email VARCHAR(40) not null,
  occupation VARCHAR(30) not null,
  id_phone INTEGER
);

alter table users
add constraint fk_users_phone foreign key (id_phone) references users_phone(id);


INSERT INTO users_phone (phone) VALUES ('11987686202'),
INSERT INTO users_phone (phone) VALUES ('11991688222') 


INSERT INTO users (name, age, email, occupation, id_phone)
VALUES 
('Ronaldo Fenomeno', 33, 'ronaldo.matador@gmail.com', 'Centroavante', 1),
('Lionel Messi', 24, 'messi.gol@gmail.com', 'Atacante', 2)