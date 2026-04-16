import { Categoria } from "../models/categoriaModel";
import type { CategoriaRepository } from "../../domain/repositories/categoriaRepository";
import type { CategoriaCreateData, CategoriaUpdateData } from "../../application/dtos";

export class CategoriaRepositoryImpl implements CategoriaRepository {
    async create(data: CategoriaCreateData): Promise<Categoria> {
        return await Categoria.create(data);
    }

    async findAll(): Promise<Categoria[]> {
        return await Categoria.findAll();
    }

    async findById(id: number): Promise<Categoria | null> {
        return await Categoria.findByPk(id);
    }

    async update(id: number, data: CategoriaUpdateData): Promise<Categoria | null> {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) return null;
        await categoria.update(data);
        return categoria;
    }

    async delete(id: number): Promise<boolean> {
        const deleted = await Categoria.destroy({ where: { id } });
        return deleted > 0;
    }
}