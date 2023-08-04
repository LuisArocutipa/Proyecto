import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ListaComponent } from './components/lista/lista.component';
import { EditarComponent } from './components/editar/editar.component';
import { AgregarComponent } from './components/agregar/agregar.component';

const routes: Routes = [
  { path: 'producto/:id', component: DetallesComponent},
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ListaComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'agregar/', component: AgregarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
