import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  public titulo: string="";
  public comentario: string="";
  public year: number=0;
  public mostrarPeliculas: boolean;

  constructor() {
    this.titulo = "Hola Mundo, soy mi primer componente";
    this.comentario = "este comentario es para ver lo que se almacena en este valor."
    this.year = new Date().getFullYear();
    this.mostrarPeliculas = true;
  }

  ngOnInit() {
  }

  ocultarEventClick(){
    if(this.mostrarPeliculas){
      this.mostrarPeliculas = false;
    } else {
      this.mostrarPeliculas = true;
    }
  }

}
