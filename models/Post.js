const db = require("./db");

const Post = db.sequelize.define("postagens",{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.STRING
    }
})

//Post.sync({force:true}); Já criei a tabela, por isso comentei
module.exports = Post;