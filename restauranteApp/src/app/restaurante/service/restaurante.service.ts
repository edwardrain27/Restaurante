import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurante, RestauranteResponse } from 'src/app/interfaces/interface';
import { environment } from 'src/environments/environment';

import { catchError, map} from "rxjs/operators";
import {of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private _baseUrl:string = environment.baseUrl;

  private _restaurantes!:Restaurante[];

  constructor(private http:HttpClient) {

  }
  /**
   * Método encargado de retornar la lista de restaurantes
   * @returns 
   */
  getRestaurantes(){
    return this.http.get<RestauranteResponse>(`${this._baseUrl}/api/restaurante`);
  }


}
