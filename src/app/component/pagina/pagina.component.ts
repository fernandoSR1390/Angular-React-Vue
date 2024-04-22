import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public titlePagina: string = "";
  public valor1: string = "";
  public valor2: string = "";

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    //navSpeed: 2,
    //autoWidth: true,
    //center:true,
    //margin:10,
    //autoplayTimeout: 5,
    //autoplaySpeed: 4,
    navText: ['atras', 'adelante'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  };

  slidesStore = [
    {
      id:'1',
      alt:'alt 1',
      img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      id:'2',
      alt:'alt 2',
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      id:'3',
      alt:'alt 3',
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      id:'4',
      alt:'alt 4',
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      id:'5',
      alt:'alt 5',
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      id:'6',
      alt:'alt 6',
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      id:'7',
      alt:'alt 7',
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      id:'8',
      alt:'alt 8',
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      id:'9',
      alt:'alt 9',
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      id:'10',
      alt:'alt 10',
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      id:'11',
      alt:'alt 11',
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      id:'12',
      alt:'alt 12',
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

  imageObject = [
    {
      thumbImage:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      alt:'alt 1',
      image:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      alt:'alt 2',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      alt:'alt 3',
      image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      alt:'alt 4',
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      alt:'alt 5',
      image: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      alt:'alt 6',
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      alt:'alt 7',
      image: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      alt:'alt 8',
      image: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      alt:'alt 9',
      image: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      alt:'alt 10',
      image: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      alt:'alt 11',
      image: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      thumbImage:'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      alt:'alt 12',
      image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titlePagina = "Pagina de Prueba";
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.valor1 = params['valor1'];
      this.valor2 = params['valor2'];
    });
  }

  redireccion(){
    this._router.navigate(['/pagina-de-pruebas', 'Fernando Salinas Romero', 'WEB DEVELOPER']);
  }
}
