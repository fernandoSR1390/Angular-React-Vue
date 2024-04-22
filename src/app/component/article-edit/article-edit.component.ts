import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { UploadWidgetConfig, UploadWidgetResult } from '@bytescale/upload-widget';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public article: Article;
  public status: string="";
  public is_edit: boolean=false;
  public uploadedFileUrl: any;
  public uploadedFileName?: any;

  myCustomLocale = {
    addAnotherFileBtn: "Add another file...",
    addAnotherImageBtn: "Add another image...",
    cancelBtn: "cancel",
    cancelBtnClicked: "cancelled",
    cancelPreviewBtn: "Cancelar",
    continueBtn: "Continuar",
    cropBtn: "Crop",
    customValidationFailed: "Failed to validate file.",
    doneBtn: "Done",
    fileSizeLimitPrefix: "File size limit:",
    finishBtn: "Finished",
    finishBtnIcon: true,
    imageCropNumberPrefix: "Image",
    maxFilesReachedPrefix: "Maximum number of files:",
    maxImagesReachedPrefix: "Maximum number of images:",
    orDragDropFile: "..o arrastrar y soltar una imagen.",
    orDragDropFileMulti: "...or drag and drop files.",
    orDragDropImage: "..o arrastrar y soltar una imagen.",
    orDragDropImageMulti: "...or drag and drop images.",
    processingFile: "Processing file...",
    removeBtn: "remove",
    removeBtnClicked: "removed",
    submitBtnError: "Error!",
    submitBtnLoading: "Please wait...",
    unsupportedFileType: "File type not supported.",
    uploadFileBtn: "Subir imagen del articulo",
    uploadFileMultiBtn: "Upload Files",
    uploadImageBtn: "Subir imagen",
    uploadImageMultiBtn: "Upload Images",
    xOfY: "of"
  }

  options: UploadWidgetConfig = {
    apiKey: 'free', // Get API keys from: www.bytescale.com
    multi: false,
    mimeTypes: ["image/*"],
    locale: this.myCustomLocale,
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.article= new Article('','','','',null);
    this.is_edit=true;
  }

  ngOnInit() {
    this.getArticle();
  }

  onComplete = (files: UploadWidgetResult[]) => {
    this.uploadedFileUrl = files[0]?.fileUrl;
    this.uploadedFileName = files[0]?.originalFile.file.name;
  };

  onSubmit(){
    this.article.image = this.uploadedFileUrl;
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          Swal.fire({
            title: "Articulo Editado!!!",
            text: "El articulo se ha editado correctamente.",
            icon: "success"
          });
          this._router.navigate(['/blog/articulo', this.article._id]);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
        Swal.fire({
          title: "Edicion Fallida!!!",
          text: "El articulo no se ha editado correctamente.",
          icon: "error"
        });
      }
    );
  }

  getArticle(){
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

}
