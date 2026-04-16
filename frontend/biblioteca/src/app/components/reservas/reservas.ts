import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../services/reserva';
import { Usuario } from '../../services/usuario';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reservas',
  imports:[
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './reservas.html',
  styleUrl: './reservas.scss',
})
export class Reservas implements OnInit {

  reservas: any[] = [];

  constructor(
    private reservaService: Reserva,
    private usuarioService: Usuario
  ) {}

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas() {
    const userId = this.usuarioService.getUsuarioId();

    this.reservaService.getReservasPorUsuario(userId)
      .subscribe((data: any) => {
        this.reservas = data;
      });
  }

  cancelar(id: number) {
    this.reservaService.cancelarReserva(id).subscribe(() => {
      this.cargarReservas();
    });
  }

  devolver(id: number) {
    this.reservaService.devolverReserva(id).subscribe(() => {
      this.cargarReservas();
    });
  }
}