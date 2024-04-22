import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public titleArticle:string="Articulo";
  public article?: Article;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id=params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  deleteArticle(idArticle:any){
    Swal.fire({
      title: "Estas Seguro?",
      text: "Una vez borrado no se podra recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._articleService.delete(idArticle).subscribe(
          response=>{
            Swal.fire({
              title: "Eliminado!",
              text: "El articulo ha sido eliminado correctamente.",
              icon: "success"
            });
            this._router.navigate(['/blog']);
          },
          error=>{
            console.log(error);
            this._router.navigate(['/blog']);
          }
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Cancelado",
          text: "Tu articulo no se ha eliminado :)",
          icon: "error"
        });
      }
    });
  }

}
