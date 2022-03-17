// To parse this data:
//
//   import { Convert, RestauranteResponse } from "./file";
//
//   const restauranteResponse = Convert.toRestauranteResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface RestauranteResponse {
    ok:           boolean;
    numero:       number;
    restaurantes: Restaurante[];
}

export interface Restaurante {
    id:          number;
    nombre:      string;
    descripcion: string;
    direccion:   string;
    ciudad:      string;
    foto:        string;
    estado:      boolean;
}

