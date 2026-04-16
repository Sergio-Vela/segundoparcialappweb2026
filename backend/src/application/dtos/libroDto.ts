export interface LibroCreateData {
    titulo: string;
    isbn: string;
    anyoPub: Date;
    categoriaId: number;
}

export interface LibroUpdateData {
    titulo?: string;
    isbn?: string;
    anyoPub?: Date;
    categoriaId?: number;
}
