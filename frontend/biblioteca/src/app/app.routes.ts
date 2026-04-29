import { Routes } from '@angular/router';
import { Catalogo } from './components/catalogo/catalogo';
import { Reservas } from './components/reservas/reservas';
import { Friends } from './components/friends/friends';

export const routes: Routes = [
    { path: 'catalogo', component: Catalogo},
    { path: 'reservas', component: Reservas },
    { path: 'friends', component: Friends},
    { path: '', redirectTo: 'catalogo', pathMatch: 'full' }
];
