import { Libro } from "../models/libroModel";
import type { LibroRepository } from "../../domain/repositories/libroRepository";
import type { LibroCreateData, LibroUpdateData } from "../../application/dtos";

export class LibroRepositoryImpl implements LibroRepository {
    async create(data: LibroCreateData): Promise<Libro> {
        return await Libro.create(data);
    }

    async findAll(): Promise<Libro[]> {
        return await Libro.findAll();
    }

    async findById(id: number): Promise<Libro | null> {
        return await Libro.findByPk(id);
    }

    async update(id: number, data: LibroUpdateData): Promise<Libro | null> {
        const libro = await Libro.findByPk(id);
        if (!libro) return null;
        await libro.update(data);
        return libro;
    }

    async delete(id: number): Promise<boolean> {
        const deleted = await Libro.destroy({ where: { id } });
        return deleted > 0;
    }
}