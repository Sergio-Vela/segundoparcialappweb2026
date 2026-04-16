import { LibroAutor } from "../models/libroAutorModel";
import type { LibroAutorService } from "../../domain/services/libroAutorService";

export class LibroAutorServiceImpl implements LibroAutorService {
    async createLibroAutor(libroId: number, autorId: number): Promise<LibroAutor> {
        return await LibroAutor.create({ libroId, autorId });
    }

    async getLibrosAutores(): Promise<LibroAutor[]> {
        return await LibroAutor.findAll();
    }

    async getLibroAutorById(id: number): Promise<LibroAutor | null> {
        return await LibroAutor.findByPk(id);
    }

    async updateLibroAutor(id: number, libroId?: number, autorId?: number): Promise<LibroAutor | null> {
        const libroAutor = await LibroAutor.findByPk(id);
        if (!libroAutor) return null;
        const updateData: any = {};
        if (libroId !== undefined) updateData.libroId = libroId;
        if (autorId !== undefined) updateData.autorId = autorId;
        await libroAutor.update(updateData);
        return libroAutor;
    }

    async deleteLibroAutor(id: number): Promise<boolean> {
        const deleted = await LibroAutor.destroy({ where: { id } });
        return deleted > 0;
    }
}