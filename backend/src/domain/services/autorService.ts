import { Autor } from "../../infrastructure/models/autorModel";

export interface AutorService {
    createAutor(nombre: string, apellido: string): Promise<Autor>;
    getAutores(): Promise<Autor[]>;
    getAutorById(id: number): Promise<Autor | null>;
    updateAutor(id: number, nombre?: string, apellido?: string): Promise<Autor | null>;
    deleteAutor(id: number): Promise<boolean>;
}