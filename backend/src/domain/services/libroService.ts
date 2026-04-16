import { Libro } from "../../infrastructure/models/libroModel";

export interface LibroService {
    createLibro(titulo: string, isbn: string, anyoPub: Date, categoriaId: number): Promise<Libro>;
    getLibros(): Promise<Libro[]>;
    getLibroById(id: number): Promise<Libro | null>;
    updateLibro(id: number, titulo?: string, isbn?: string, anyoPub?: Date, categoriaId?: number): Promise<Libro | null>;
    deleteLibro(id: number): Promise<boolean>;
}