# urlShorter
A simple URL shorter made with Node.JS, Express and MariaDB

# Steps:
1) No banco de dados, criar o banco de dados chamado urlshorter, e dentro dele executar o SQL que esta no arquivo create_table.sql
2) npm install nodemon
3) npm run dev
4) para gerar a documentação: yarn generate:doc

# API Info:
### Ponto 1: um método de encurtar uma URL persistindo-a no banco de dados
[POST] http://localhost:3001/urlshorter/encurtar - Params: {<br />
"urlLonga": "http://www.facebook.com/teste4" <br />
}<br />
Retorno: {"id": 10}<br /><br />
### Ponto 2: um método que retorna uma url encurtada conforme um id
[GET] http://localhost:3001/urlshorter/:id - <br />
Retorno: [<br />
{ <br />
"id": 7, <br />
"urlshort": "http://short.by/6v0rft", <br />
"urllong": "http://www.facebook.com/teste1", <br />
"created_at": "2023-03-23T02:02:17.000Z" <br />
} <br />
]<br /> <br />
### Ponto 3: um método que retorna todas as URLs encurtadas em uma data específica
[POST] http://localhost:3001/urlshorter/all - Params: {<br />
"dateTime": "2023-03-20" <br />
}<br />
Retorno: [ <br />
{ <br />
"urlshort": "http://short.by/bejs2n" <br />
}, <br />
{ <br />
"urlshort": "http://short.by/rgl29p" <br />
} <br />
]<br /><br />
### Ponto : um método que retorna uma url encurtada conforme o encurtamento da URL
[POST] http://localhost:3001/urlshorter/urlshort - Params: {<br />
"encurtamento": "bul344" <br />
}<br />
Retorno: [ <br />
{ <br />
"urlshort": "http://short.by/bul344" <br />
} <br />
]