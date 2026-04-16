import { LibroAutor } from "../models/libroAutorModel";
import type { LibroAutorRepository } from "../../domain/repositories/libroAutorRepository";
import type { LibroAutorCreateData, LibroAutorUpdateData } from "../../application/dtos";

export class LibroAutorRepositoryImpl implements LibroAutorRepository {
    async create(data: LibroAutorCreateData): Promise<LibroAutor> {
        return await LibroAutor.create(data);
    }

    async findAll(): Promise<LibroAutor[]> {
        return await LibroAutor.findAll();
    }

    async findById(id: number): Promise<LibroAutor | null> {
        return await LibroAutor.findByPk(id);
    }

    async update(id: number, data: LibroAutorUpdateData): Promise<LibroAutor | null> {
        const libroAutor = await LibroAutor.findByPk(id);
        if (!libroAutor) return null;
        await libroAutor.update(data);
        return libroAutor;
    }

    async delete(id: number): Promise<boolean> {
        const deleted = await LibroAutor.destroy({ where: { id } });
        return deleted > 0;
    }
}