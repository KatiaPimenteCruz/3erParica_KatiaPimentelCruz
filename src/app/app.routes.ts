import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Producto } from './paginas/producto/producto';
import { Registro } from './paginas/registro/registro';

export const routes: Routes = [
    {path:'inicial', component:Inicio },
    {path: 'producto', component: Producto},
    {path:'registro', component: Registro },
];
