CREATE DATABASE collectors;
USE collectors;

CREATE TABLE empresa (
endereco VARCHAR (50),
senha VARCHAR (15),
nome VARCHAR (50),
telefone VARCHAR (9),
cnpj VARCHAR (14),
PRIMARY KEY (cnpj)
);

CREATE TABLE servidor (
nome VARCHAR (50),
email VARCHAR (50),
senha VARCHAR (15),
telefone VARCHAR (9),
cpf VARCHAR (11),
PRIMARY KEY (cpf)
);

CREATE TABLE notificacao (
nome VARCHAR (50),
fk_cpf VARCHAR (11),
data VARCHAR (8),
FOREIGN KEY (fk_cpf) references servidor(cpf)
);

CREATE TABLE serEm (
fk_cpf VARCHAR (14),
FOREIGN KEY (fk_cpf) references servidor(cpf)
);