import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro-service';
import { Reserva } from '../../services/reserva';
import { Usuario } from '../../services/usuario';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-catalogo',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo implements OnInit {

  libros: any[] = [];

  constructor(
    private libroService: LibroService,
    private reservaService: Reserva,
    private usuarioService: Usuario
  ) { }

  ngOnInit() {
    this.libroService.getLibros().subscribe((data: any) => {
      this.libros = data;
    });
  }

  reservar(libroId: number) {
    const data = {
      usuarioId: this.usuarioService.getUsuarioId(),
      libroId,
      fecha_reserva: new Date(),
      fecha_devolucion: new Date(),
      estadoId: 1
    };

    this.reservaService.crearReserva(data).subscribe(() => {
      this.ngOnInit();
    });
  }
}