import { Router } from "express";
import { LibroAutorController } from "../controllers/libroAutorController";

const libroAutorController = new LibroAutorController();

export const libroAutorRoutes = Router();

libroAutorRoutes.post("/libros-autores", (req, res) => libroAutorController.createLibroAutor(req, res));
libroAutorRoutes.get("/libros-autores", (req, res) => libroAutorController.getLibrosAutores(req, res));
libroAutorRoutes.get("/libros-autores/:id", (req, res) => libroAutorController.getLibroAutorById(req, res));
libroAutorRoutes.put("/libros-autores/:id", (req, res) => libroAutorController.updateLibroAutor(req, res));
libroAutorRoutes.delete("/libros-autores/:id", (req, res) => libroAutorController.deleteLibroAutor(req, res));

export default libroAutorRoutes;
