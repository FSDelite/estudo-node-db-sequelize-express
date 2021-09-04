const express = require("express"); // faz requerimento do express
const handlebars = require("express-handlebars"); // requerimento do handlebars (template)
const bodyParser = require("body-parser");
const app = express();
const Post = require("./models/Post");
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//rotas
app.get("/", (req, res) => {
    //Post.findAll({order: [['id', 'DESC']]}).then((posts) => {}) // PARA ORDEM DECRESCENTE
    Post.findAll().then((posts) => {
        res.render("home", { posts: posts });
    })
});

app.get("/cad", (req, res) => {
    res.render("formulario");
});

//.post pq a rota só pode ser acionada por quem faz requisição pelo metodo POST
app.post("/add", (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        //res.send("Post criado com sucesso!");
        res.redirect("/"); // redirect redireciona
    }).catch((erro) => {
        res.send(`Houve um erro ${erro}`);
    });
})

app.get("/delete/:id", (req, res) => {
    Post.destroy({
        where: { 'id': req.params.id, }
    }).then(() => {
        res.send("Post deletado com sucesso");
    }).catch((erro) => {
        res.send(`Houve um erro ${erro}`);
    });
});

// app.get("/update/:id", (req, res) => {
//     res.render("updateForm");
// });
app.get("/up", (req, res) => res.render("updateForm"));


app.get("/update", (req, res) => {
    Post.update({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }, {
        where: { 'id': req.body.id, }
    }).then(() => {
        Post.update
    }).catch((erro) => {
        res.send(`Houve um erro ${erro}`);
    });
});


app.listen(8081, () => console.log("servidor rodando na porta 8081"));