import express from "express";
import AutorController from "../controllers/autoresCtrl.js";

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutorPorId)
    .post("/autores", AutorController.incluirAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.excluirAutor)

export default router;