import { Request, Response } from "express";
import { LibroAutorServiceImpl } from "../../infrastructure/services/libroAutorServiceImpl";

const libroAutorService = new LibroAutorServiceImpl();

export class LibroAutorController {
    async createLibroAutor(req: Request, res: Response) {
        const { libroId, autorId } = req.body;
        try {
            const libroAutor = await libroAutorService.createLibroAutor(libroId, autorId);
            res.status(201).json(libroAutor);
        } catch (error) {
            console.error("Error creating libro-autor: ", error);
            res.status(500).json({ error: "Failed to create libro-autor" });
        }
    }

    async getLibrosAutores(req: Request, res: Response) {
        try {
            const librosAutores = await libroAutorService.getLibrosAutores();
            res.status(200).json(librosAutores);
        } catch (error) {
            console.error("Error fetching libros-autores: ", error);
            res.status(500).json({ error: "Failed to fetch libros-autores" });
        }
    }

    async getLibroAutorById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const libroAutor = await libroAutorService.getLibroAutorById(Number(id));
            if (!libroAutor) {
                res.status(404).json({ error: "LibroAutor not found" });
            } else {
                res.status(200).json(libroAutor);
            }
        } catch (error) {
            console.error("Error fetching libro-autor: ", error);
            res.status(500).json({ error: "Failed to fetch libro-autor" });
        }
    }

    async updateLibroAutor(req: Request, res: Response) {
        const { id } = req.params;
        const { libroId, autorId } = req.body;
        try {
            const libroAutor = await libroAutorService.updateLibroAutor(
                Number(id),
                libroId,
                autorId
            );
            if (!libroAutor) {
                res.status(404).json({ error: "LibroAutor not found" });
            } else {
                res.status(200).json(libroAutor);
            }
        } catch (error) {
            console.error("Error updating libro-autor: ", error);
            res.status(500).json({ error: "Failed to update libro-autor" });
        }
    }

    async deleteLibroAutor(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const success = await libroAutorService.deleteLibroAutor(Number(id));
            if (success) {
                res.status(200).json({ message: "LibroAutor deleted successfully" });
            } else {
                res.status(404).json({ error: "LibroAutor not found" });
            }
        } catch (error) {
            console.error("Error deleting libro-autor: ", error);
            res.status(500).json({ error: "Failed to delete libro-autor" });
        }
    }
}
