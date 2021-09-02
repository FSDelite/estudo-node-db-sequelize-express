const express = require("express"); // faz requerimento do express
const handlebars = require("express-handlebars"); // requerimento do handlebars (template)
const Sequelize = require("sequelize"); // requerimento do sequelize
const bodyParser = require("body-parser");
const app = express();
//Config
//Template Engine
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
//Body parser (ta riscado, mas nao sei oq por no lugar rs)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Conexão com o banco de dados
const sequelize = new Sequelize("postapp", "root", "el3@W4EedqbA", {
  host: "localhost",
  dialect: "mysql",
});

//rotas
app.get("/", (req, res) => res.send("essa é a home"));

app.get("/cad", (req,res) => {
    //res.send("rota de cadastro");
    res.render("formulario");
});

//.post pq a rota só pode ser acionada por quem faz requisição pelo metodo POST
app.post("/add", (req,res) => {
    req.body.titulo; // requisição do corpo, o dado que vem daquilo q é nomeado "titulo"
    req.body.conteudo; // requisição do corpo, o dado que vem daquilo q é nomeado "conteudo"
    res.send(`titulo: ${req.body.titulo} <br><br> conteudo: ${req.body.conteudo}`);
})

app.listen(8081, () => console.log("servidor rodando na porta 8081"));
