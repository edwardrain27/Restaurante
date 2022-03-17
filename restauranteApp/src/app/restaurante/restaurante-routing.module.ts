import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRestauranteComponent } from './pages/crear-restaurante/crear-restaurante.component';
import { ListarComponent } from './pages/listar/listar.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'listar', component:ListarComponent},
      {path:'crear',component:CrearRestauranteComponent},
      {path:'**',redirectTo:'listar'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
