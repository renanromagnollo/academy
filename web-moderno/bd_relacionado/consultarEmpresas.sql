select e.nome, c.nome
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id --usando o and para acrescentar a condição
and sede -- aqui ele já condiciona se é verdadeiro (1)... não precisa colocar sede = 1