# urlShorter
A simple URL shorter made with Node.JS, Express and MariaDB

# API Info:
[POST] http://localhost:3001/urlshorter/encurtar - Params: {<br />
"urlLonga": "http://www.facebook.com/teste4" <br />
}<br />
Retorno: {"id": 10}<br /><br />
[GET] http://localhost:3001/urlshorter/:id - <br />
Retorno: [<br />
{ <br />
"id": 7, <br />
"urlshort": "http://short.by/6v0rft", <br />
"urllong": "http://www.facebook.com/teste1", <br />
"created_at": "2023-03-23T02:02:17.000Z" <br />
} <br />
]<br /> <br />
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
