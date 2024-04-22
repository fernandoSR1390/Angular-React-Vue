import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

constructor() { }

hola(){
  return "Hola mundo desde el servicio de peliculas"
}

}
