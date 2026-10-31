const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

//codigo node rotas e afins

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Exercicio back semana 2</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>Catalogo de heróis</h1>
                <p>Bem-vindo ao nosso catálogo de heróis!</p>
                <a href="/dc">Herois da DC</a>
                <hr>
                <a href="/marvel">Herois da Marvel</a>
                </body>
        </html>`
        );
})

app.get("/dc", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Herois da DC</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <h1>Herois da DC</h1>
                <p>Bem-vindo ao catálogo de heróis da DC!</p>
                <hr>
                <div class="botoes">
                    <a href="/personagem/dc/Batman">Batman</a>
                    <a href="/personagem/dc/Superman">Superman</a>
                    <a href="/personagem/dc/Mulher maravilha">Mulher maravilha</a>
                </div>
                <a href="/">Voltar para o catálogo</a>
            </body>
        </html>`
    );
})

app.get("/marvel", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Herois da Marvel</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <h1>Herois da Marvel</h1>
                <p>Bem-vindo ao catálogo de heróis da Marvel!</p>
                <hr>
                <div class="botoes">
                    <a href="/personagem/marvel/Homem de ferro">Homem de ferro</a>
                    <a href="/personagem/marvel/Spider-Man">Spider-Man</a>
                    <a href="/personagem/marvel/Capitão America">Capitão America</a>
                </div>
                <a href="/">Voltar para o catálogo</a>
            </body>
        </html>`
    );
})

app.get("/personagem/:empresa/:nome", (req, res) => {
    //const { empresa, nome } = req.params;
    const empresa = req.params.empresa;
    const nome = req.params.nome;
    
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${nome}</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <h1>${nome}</h1>
                <p>Este é o perfil do herói ${nome} da ${empresa}!</p>
            </body>
        </html>`
    );
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

console.log("o node está funcionando corretamente!")
