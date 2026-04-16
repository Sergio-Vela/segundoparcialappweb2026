import { LibroAutor } from "../../infrastructure/models/libroAutorModel";

export interface LibroAutorService {
    createLibroAutor(libroId: number, autorId: number): Promise<LibroAutor>;
    getLibrosAutores(): Promise<LibroAutor[]>;
    getLibroAutorById(id: number): Promise<LibroAutor | null>;
    updateLibroAutor(id: number, libroId?: number, autorId?: number): Promise<LibroAutor | null>;
    deleteLibroAutor(id: number): Promise<boolean>;
}