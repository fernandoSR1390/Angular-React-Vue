import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';
import * as moment from 'moment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() articles: Article[]=[];
  public url: string="";
  public dateMoment: string="";

  constructor() {
    this.url = Global.url;
    this.dateMoment = moment().locale('es').format('LL').toString();
  }

  ngOnInit() {
  }

}
