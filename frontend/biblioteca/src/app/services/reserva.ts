import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Reserva {
  private baseUrl = 'http://localhost:3000/api/reservas';

  constructor(private http: HttpClient) { }

  crearReserva(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  getReservasPorUsuario(usuarioId: number) {
    return this.http.get(`${this.baseUrl}/usuario/${usuarioId}`);
  }

  cancelarReserva(id: number) {
    return this.http.put(`${this.baseUrl}/${id}/cancelar`, {});
  }

  devolverReserva(id: number) {
    return this.http.put(`${this.baseUrl}/${id}/devolver`, {});
  }
}
