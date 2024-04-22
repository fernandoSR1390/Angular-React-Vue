import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public titleBlog: string="";
  public articles: Article[]=[];

  constructor(
    private _articleService: ArticleService
  ) {
    this.titleBlog = "Blog";
  }

  ngOnInit() {
    this._articleService.getArticles().subscribe(
      response => {
        if (response.articles) {
          this.articles= response.articles;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
