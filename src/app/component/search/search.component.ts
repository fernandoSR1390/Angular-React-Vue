import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
  public titleSearch: string="Busqueda";
  public searchText: string="";
  public articles: Article[]=[];

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      var search  = params['search'];
      this.searchText = search;
      this._articleService.search(search).subscribe(
        response => {
          console.log(response);
          if (response.articles) {
            this.articles = response.articles;
          }
        },
        error => {
          this.articles = [];
          console.log(error);
        }
      );
    });
  }

}
