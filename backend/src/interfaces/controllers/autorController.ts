import { Request, Response } from "express";
import { AutorServiceImpl } from "../../infrastructure/services/autorServiceImpl";

const autorService = new AutorServiceImpl();

export class AutorController {
    async createAutor(req: Request, res: Response) {
        const { nombre, apellido } = req.body;
        try {
            const autor = await autorService.createAutor(nombre, apellido);
            res.status(201).json(autor);
        } catch (error) {
            console.error("Error creating autor: ", error);
            res.status(500).json({ error: "Failed to create autor" });
        }
    }

    async getAutores(req: Request, res: Response) {
        try {
            const autores = await autorService.getAutores();
            res.status(200).json(autores);
        } catch (error) {
            console.error("Error fetching autores: ", error);
            res.status(500).json({ error: "Failed to fetch autores" });
        }
    }

    async getAutorById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const autor = await autorService.getAutorById(Number(id));
            if (!autor) {
                res.status(404).json({ error: "Autor not found" });
            } else {
                res.status(200).json(autor);
            }
        } catch (error) {
            console.error("Error fetching autor: ", error);
            res.status(500).json({ error: "Failed to fetch autor" });
        }
    }

    async updateAutor(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre, apellido } = req.body;
        try {
            const autor = await autorService.updateAutor(Number(id), nombre, apellido);
            if (!autor) {
                res.status(404).json({ error: "Autor not found" });
            } else {
                res.status(200).json(autor);
            }
        } catch (error) {
            console.error("Error updating autor: ", error);
            res.status(500).json({ error: "Failed to update autor" });
        }
    }

    async deleteAutor(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const success = await autorService.deleteAutor(Number(id));
            if (success) {
                res.status(200).json({ message: "Autor deleted successfully" });
            } else {
                res.status(404).json({ error: "Autor not found" });
            }
        } catch (error) {
            console.error("Error deleting autor: ", error);
            res.status(500).json({ error: "Failed to delete autor" });
        }
    }
}
