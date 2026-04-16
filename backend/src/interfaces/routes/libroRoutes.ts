import { Router } from "express";
import { LibroController } from "../controllers/libroController";

const libroController = new LibroController();

export const libroRoutes = Router();

libroRoutes.post("/libros", (req, res) => libroController.createLibro(req, res));
libroRoutes.get("/libros", (req, res) => libroController.getLibros(req, res));
libroRoutes.get("/libros/:id", (req, res) => libroController.getLibroById(req, res));
libroRoutes.put("/libros/:id", (req, res) => libroController.updateLibro(req, res));
libroRoutes.delete("/libros/:id", (req, res) => libroController.deleteLibro(req, res));

export default libroRoutes;
