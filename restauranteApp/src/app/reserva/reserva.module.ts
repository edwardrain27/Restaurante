import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservarComponent } from './pages/reservar/reservar.component';
import { ListarReservasComponent } from './pages/listar-reservas/listar-reservas.component';


@NgModule({
  declarations: [
    ReservarComponent,
    ListarReservasComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule
  ]
})
export class ReservaModule { }
