UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA'

SELECT est.nome from estados est where digla = "MA" -- usando apelido sem a necessidade de colocar o "as"
SELECT estados.nome from estados where digla = "MA" -- tb funciona assim

update estados
set nome = 'Paraná', -- alterando mais de um campo em um mesmo comando
    populacao = 11.32
where sigla = 'PR'

select est.nome, sigla, populacao
from estados est
where sigla = 'PR'
