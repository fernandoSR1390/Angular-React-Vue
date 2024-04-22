import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula: Pelicula;
  @Output() marcarFavorito = new EventEmitter();

  constructor() {
    this.pelicula = new Pelicula("",0,"");
  }

  ngOnInit() {
  }

  sleccionarFavorito(event: any, pelicula: any){
    this.marcarFavorito.emit({pelicula: pelicula});
  }
}
