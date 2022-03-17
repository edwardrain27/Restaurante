import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/interface';
import { RestauranteService } from '../../service/restaurante.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  

  constructor(private restauranteService:RestauranteService) {
   }

  ngOnInit(): void {
  }






  
}
