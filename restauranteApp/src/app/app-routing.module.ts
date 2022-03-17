import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'restaurante',
    loadChildren: ()=> import('../app/restaurante/restaurante.module').then(m => m.RestauranteModule)
  },
  {
    path:'reservas',
    loadChildren: ()=> import('../app/reserva/reserva.module').then(m=>m.ReservaModule)
  },{
    path:'**',
    redirectTo:'restaurante'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
