-- SELECT * FROM estados

-- SELECT nome, sigla FROM estados -- a ordem é considerada

-- SELECT sigla, nome as 'Nome do Estado' FROM estados -- da para declarar título para a coluna usando o "as"

-- SELECT sigla, nome as 'Nome do Estado' FROM estados WHERE regiao = 'Sul'-- usando filtro "where"

SELECT sigla, nome AS 'Nome do Estado' FROM estados 
WHERE populacao >= 10 --filtro condição
ORDER BY populacao DESC --filtro ordem decrescente