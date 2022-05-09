import express from "express";
import db from "./config/dbConn.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco bem sucedida.');
});

const app = express();
app.use(express.json());
routes(app);

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app