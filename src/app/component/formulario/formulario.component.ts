import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public titleForm: string="";
  public  user: any;
  public  campo: string="";

  constructor() {
    this.titleForm = "Formulario";
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    };
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
  }

  handleClick(){
    alert("Has dado Click!!");
  }

  handleBlur(){
    alert("Has salido del evento blur del input");
  }

}
