import { Libro } from "../models/libroModel";
import type { LibroService } from "../../domain/services/libroService";

export class LibroServiceImpl implements LibroService {
    async createLibro(titulo: string, isbn: string, anyoPub: Date, categoriaId: number): Promise<Libro> {
        return await Libro.create({ titulo, isbn, anyoPub, categoriaId });
    }

    async getLibros(): Promise<Libro[]> {
        return await Libro.findAll();
    }

    async getLibroById(id: number): Promise<Libro | null> {
        return await Libro.findByPk(id);
    }

    async updateLibro(id: number, titulo?: string, isbn?: string, anyoPub?: Date, categoriaId?: number): Promise<Libro | null> {
        const libro = await Libro.findByPk(id);
        if (!libro) return null;
        const updateData: any = {};
        if (titulo !== undefined) updateData.titulo = titulo;
        if (isbn !== undefined) updateData.isbn = isbn;
        if (anyoPub !== undefined) updateData.anyoPub = anyoPub;
        if (categoriaId !== undefined) updateData.categoriaId = categoriaId;
        await libro.update(updateData);
        return libro;
    }

    async deleteLibro(id: number): Promise<boolean> {
        const deleted = await Libro.destroy({ where: { id } });
        return deleted > 0;
    }
}