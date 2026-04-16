import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Usuario {
  getUsuarioId(): number {
    if (typeof window !== 'undefined' && localStorage) {
      return Number(localStorage.getItem('userId')) || 1;
    }
    return 1; // fallback
  }

  loginFake(id: number) {
    localStorage.setItem('userId', id.toString());
  }
}
