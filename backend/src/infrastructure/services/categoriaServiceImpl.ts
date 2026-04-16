import { Categoria } from "../models/categoriaModel";
import type { CategoriaService } from "../../domain/services/categoriaService";

export class CategoriaServiceImpl implements CategoriaService {
    async createCategoria(nombre: string): Promise<Categoria> {
        return await Categoria.create({ nombre });
    }

    async getCategorias(): Promise<Categoria[]> {
        return await Categoria.findAll();
    }

    async getCategoriaById(id: number): Promise<Categoria | null> {
        return await Categoria.findByPk(id);
    }

    async updateCategoria(id: number, nombre?: string): Promise<Categoria | null> {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) return null;
        const updateData: any = {};
        if (nombre !== undefined) updateData.nombre = nombre;
        await categoria.update(updateData);
        return categoria;
    }

    async deleteCategoria(id: number): Promise<boolean> {
        const deleted = await Categoria.destroy({ where: { id } });
        return deleted > 0;
    }
}