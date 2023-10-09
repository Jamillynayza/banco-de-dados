-- Qual é o preço médio, máximo e mínimo dos produtos?
SELECT MIN(preco) AS min, MAX(preco) AS max, AVG(preco) AS Media FROM produtos; 
-- Quantos produtos existem em cada categoria?
SELECT categoria, COUNT(*) AS quantidade FROM  produtos GROUP BY categoria;
-- Quais são as categorias distintas existentes na tabela de produtos?
SELECT categoria FROM  produtos GROUP BY categoria;
-- Quais categorias possuem mais de 2 produtos?
SELECT categoria FROM  produtos GROUP BY categoria HAVING COUNT(*) > 2;
-- Quais são os produtos que possuem a palavra "Livro" em seu nome?
SELECT nome FROM produtos WHERE nome LIKE "%Livro%";
-- Quais são os 3 produtos mais caros?
SELECT nome FROM produtos ORDER BY preco DESC LIMIT 3;
-- Quais produtos têm o preço dentro do intervalo de R$ 50 a R$ 100?
SELECT nome FROM produtos WHERE preco >= 50 AND preco <= 100;
-- Quais são os produtos com ID 1, 3 e 5?
SELECT nome FROM produtos WHERE id = 1 OR id = 3 OR id = 5;
-- Qual é o valor total gasto em produtos da categoria "Eletrônicos"?
SELECT SUM(preco) AS precoTotal FROM produtos GROUP BY categoria HAVING categoria = "Eletrônicos";
-- Quais são os produtos que pertencem às categorias "Vestuário" ou "Acessórios" e possuem um preço entre R$ 30 e R$ 50?
SELECT nome FROM produtos WHERE (categoria = "Vestuario" OR categoria = "Acessórios") AND (preco >= 30 AND preco <= 50);
