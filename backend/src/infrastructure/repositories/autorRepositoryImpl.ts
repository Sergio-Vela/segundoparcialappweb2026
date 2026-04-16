import { Autor } from "../models/autorModel";
import type { AutorRepository } from "../../domain/repositories/autorRepository";
import type { AutorCreateData, AutorUpdateData } from "../../application/dtos";

export class AutorRepositoryImpl implements AutorRepository {
    async create(data: AutorCreateData): Promise<Autor> {
        return await Autor.create(data);
    }

    async findAll(): Promise<Autor[]> {
        return await Autor.findAll();
    }

    async findById(id: number): Promise<Autor | null> {
        return await Autor.findByPk(id);
    }

    async update(id: number, data: AutorUpdateData): Promise<Autor | null> {
        const autor = await Autor.findByPk(id);
        if (!autor) return null;
        await autor.update(data);
        return autor;
    }

    async delete(id: number): Promise<boolean> {
        const deleted = await Autor.destroy({ where: { id } });
        return deleted > 0;
    }
}