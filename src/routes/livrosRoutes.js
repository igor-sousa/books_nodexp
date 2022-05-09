import express from "express";
import LivroController from "../controllers/livrosCtrl.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .post("/livros", LivroController.incluirLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router;