import { Categoria } from "../../infrastructure/models/categoriaModel";

export interface CategoriaService {
    createCategoria(nombre: string): Promise<Categoria>;
    getCategorias(): Promise<Categoria[]>;
    getCategoriaById(id: number): Promise<Categoria | null>;
    updateCategoria(id: number, nombre?: string): Promise<Categoria | null>;
    deleteCategoria(id: number): Promise<boolean>;
}