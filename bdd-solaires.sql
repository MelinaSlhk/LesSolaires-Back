DROP TABLE IF EXISTS utilisateur CASCADE;
DROP TABLE IF EXISTS produit CASCADE;
DROP TABLE IF EXISTS categorie CASCADE;


CREATE TABLE categorie (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(255) NOT null
);

CREATE TABLE produit(
  id SERIAL PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prix DECIMAL(5,2) NOT NULL,
  quantite INTEGER NOT null,
  id_categorie Integer not null,
  CONSTRAINT fk_categorie FOREIGN KEY (id_categorie) REFERENCES categorie(id)
);

CREATE TABLE utilisateur (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  motDePasse CHAR(60) NOT NULL
);

insert into categorie (nom) values ('0 = Ne protège pas des UV'), ('1 ou 2 = protection moyennes'), ('3 ou 4 = forte protection');