select *
    from cidades c
    inner join prefeitos p -- esse resultado não retornará as cidades sem prefeito
    on c.id = p.cidade_id;

select *
    from cidades c
    left join prefeitos p -- esse resultado retornará as cidades sem prefeito
    on c.id = p.cidade_id

select * -- declarando sem apelidos
    from cidades
    right join prefeitos -- esse resultado retornará os prefeitos sem cidade
    on cidades.id = prefeitos.cidade_id

--- alternativa para o full join
select *
    from cidades c
    left join prefeitos p -- esse resultado retornará as cidades sem prefeito
    on c.id = p.cidade_id
union -- unir os dois select
select * -- declarando sem apelidos
    from cidades
    right join prefeitos -- esse resultado retornará os prefeitos sem cidade
    on cidades.id = prefeitos.cidade_id