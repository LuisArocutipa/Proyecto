import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path: 'producto/:id', component: DetallesComponent},
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
