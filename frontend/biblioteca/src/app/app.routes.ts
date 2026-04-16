import { Routes } from '@angular/router';
import { Catalogo } from './components/catalogo/catalogo';
import { Reservas } from './components/reservas/reservas';

export const routes: Routes = [
    { path: 'catalogo', component: Catalogo},
    { path: 'reservas', component: Reservas },
    { path: '', redirectTo: 'catalogo', pathMatch: 'full' }
];
