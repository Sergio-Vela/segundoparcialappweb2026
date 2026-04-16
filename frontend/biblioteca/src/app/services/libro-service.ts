import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LibroService {

  private baseUrl = 'http://localhost:3000/api/libros';

  constructor(private http: HttpClient) { }

  getLibros() {
    return this.http.get(this.baseUrl);
  }

  getDisponibles() {
    return this.http.get(`${this.baseUrl}/disponibles`);
  }

}
