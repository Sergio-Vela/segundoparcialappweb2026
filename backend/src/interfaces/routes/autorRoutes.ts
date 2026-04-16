import { Router } from "express";
import { AutorController } from "../controllers/autorController";

const autorController = new AutorController();

export const autorRoutes = Router();

autorRoutes.post("/autores", (req, res) => autorController.createAutor(req, res));
autorRoutes.get("/autores", (req, res) => autorController.getAutores(req, res));
autorRoutes.get("/autores/:id", (req, res) => autorController.getAutorById(req, res));
autorRoutes.put("/autores/:id", (req, res) => autorController.updateAutor(req, res));
autorRoutes.delete("/autores/:id", (req, res) => autorController.deleteAutor(req, res));

export default autorRoutes;
