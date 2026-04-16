import { Request, Response } from "express";
import { LibroServiceImpl } from "../../infrastructure/services/libroServiceImpl";

const libroService = new LibroServiceImpl();

export class LibroController {
    async createLibro(req: Request, res: Response) {
        const { titulo, isbn, anyoPub, categoriaId } = req.body;
        try {
            const libro = await libroService.createLibro(titulo, isbn, new Date(anyoPub), categoriaId);
            res.status(201).json(libro);
        } catch (error) {
            console.error("Error creating libro: ", error);
            res.status(500).json({ error: "Failed to create libro" });
        }
    }

    async getLibros(req: Request, res: Response) {
        try {
            const libros = await libroService.getLibros();
            res.status(200).json(libros);
        } catch (error) {
            console.error("Error fetching libros: ", error);
            res.status(500).json({ error: "Failed to fetch libros" });
        }
    }

    async getLibroById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const libro = await libroService.getLibroById(Number(id));
            if (!libro) {
                res.status(404).json({ error: "Libro not found" });
            } else {
                res.status(200).json(libro);
            }
        } catch (error) {
            console.error("Error fetching libro: ", error);
            res.status(500).json({ error: "Failed to fetch libro" });
        }
    }

    async updateLibro(req: Request, res: Response) {
        const { id } = req.params;
        const { titulo, isbn, anyoPub, categoriaId } = req.body;
        try {
            const libro = await libroService.updateLibro(
                Number(id),
                titulo,
                isbn,
                anyoPub ? new Date(anyoPub) : undefined,
                categoriaId
            );
            if (!libro) {
                res.status(404).json({ error: "Libro not found" });
            } else {
                res.status(200).json(libro);
            }
        } catch (error) {
            console.error("Error updating libro: ", error);
            res.status(500).json({ error: "Failed to update libro" });
        }
    }

    async deleteLibro(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const success = await libroService.deleteLibro(Number(id));
            if (success) {
                res.status(200).json({ message: "Libro deleted successfully" });
            } else {
                res.status(404).json({ error: "Libro not found" });
            }
        } catch (error) {
            console.error("Error deleting libro: ", error);
            res.status(500).json({ error: "Failed to delete libro" });
        }
    }
}
