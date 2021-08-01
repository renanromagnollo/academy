alter table empresas modify cnpj varchar(14); --alterar

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 20038765666790),
    ('Vale', 20038765066790),
    ('Cielo', 32138765066790);

desc empresas -- para informar sobre a tabela

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);