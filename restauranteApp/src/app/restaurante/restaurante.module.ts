import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CrearRestauranteComponent } from './pages/crear-restaurante/crear-restaurante.component';


@NgModule({
  declarations: [
    MainComponent,
    ListarComponent,
    CrearRestauranteComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule
  ]
})
export class RestauranteModule { }
