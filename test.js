const Sequelize = require("sequelize");

const sequelize = new Sequelize("test", "root", "el3@W4EedqbA", {
  host: "localhost",
  dialect: "mysql",
});

//verifica se criou mesmo
sequelize
  .authenticate()
  .then(() => console.log("conectado com sucesso"))
  .catch(() => console.log("falha ao conectar"));

// Model de postagem (definindo uma tabela - "postagens")

const postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

// Criando a tabela "usuarios"
const Usuarios = sequelize.define("usuarios", {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

// é importante comentar tudo pq senao o programa faz mais de um insert,
// ou deleta as tabelas pra criar outras (talvez por causa do force?)

//Conectando com o banco de dados
//postagem.sync({ force: true }); // >> Cria a tabela postagens

//Usuarios.sync({force:true}); // >> Cria a tabela de usuarios

//Criando a primeira postagem VV
/*postagem.create({
  titulo: "ESSA É A PRIMEIRA POSTAGEM",
  conteudo: "CONTEUDO QUALQUER DA PRIMEIRA POSTAGEM"
})*/ 

//Criando o primeiro usuario
/*Usuarios.create({
  nome: "Felipe",
  sobrenome: "Delite",
  idade: 21,
  email: "felipedelite@gmail.com",
})*/