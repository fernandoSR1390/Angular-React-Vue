import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculasService]
})
export class PeliculasComponent implements OnInit {
  public tituloPelicula: string="";
  public peliculas: Pelicula[];
  public favorito: Pelicula=new Pelicula("",0,"");
  public fecha: any;

  constructor(
    private _peliculaService: PeliculasService
  ) {
    this.fecha = new Date();
    this.tituloPelicula = "Peliculas";
    this.peliculas = [
      new Pelicula("Los Vengadores EndGame", 2023, "https://es.web.img2.acsta.net/pictures/19/03/26/17/22/0896830.jpg"),
      new Pelicula("Batman vs Superman", 2022, "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"),
      new Pelicula("Joker 2", 2024, "https://img.aullidos.com/imagenes/caratulas/the-joker-2.jpeg"),
      new Pelicula("Spiderman 4", 2024, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKO6EG94R-tuSNIfm7B5Ahnr0CA8tCQyhSWciAofnvEg&s")
    ];
  }

  ngOnInit() {
    console.log(this._peliculaService.hola());
  }

  eventClik(){
      this.tituloPelicula = "El titulo de la pelicula ha sido cambiado!!";
  }

  mostrarFavorito(event: any){
    this.favorito = event.pelicula;
  }
}
