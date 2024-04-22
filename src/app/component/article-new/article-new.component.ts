import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { UploadWidgetConfig, UploadWidgetResult } from '@bytescale/upload-widget';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
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
    locale: this.myCustomLocale,         // EN_US by default. (See "Localization" section below.)
    /* maxFileCount: 5,                // Unlimited by default (or 1 if multi: false).
    maxFileSizeBytes: 1024 ** 2,    // Unlimited by default.
    mimeTypes: ["image/*"],         // Unrestricted by default. Supports * wildcard suffix.                  // False by default.
    onInit: ({                      // Exposes lifecycle methods for the component.
      close,                        // Closes the widget when called.
      reset,                        // Resets the widget when called.
      updateConfig                  // Updates the widget's config by passing a new config
    }) => {},                       // object to the method's first parameter.
    onUpdate: (event) => {          // Called each time the Upload Widget's list of files change.
      // event.pendingFiles         // Array of files that are either uploading or queued.
      // event.failedFiles          // Array of files that failed to upload (due to network or validation reasons).
      // event.uploadedFiles        // Array of files that have been uploaded and not removed.
    },
    onPreUpload: async file => ({
      errorMessage: "Uh oh!",       // Displays this validation error to the user (if set).
      transformedFile: file         // Uploads 'transformedFile' instead of 'file' (if set).
    }),
    showFinishButton: true,         // Show/hide the "finish" button in the widget.
    showRemoveButton: true,         // Show/hide the "remove" button next to each file.
    styles: {
      breakpoints: {
        fullScreenWidth: 750,       // Full-screen mode activates when the screen is at or below this width.
        fullScreenHeight: 420       // Full-screen mode activates when the screen is at or below this height.
      },
      colors: {
        primary: "#377dff",         // Primary buttons & links
        active: "#528fff",          // Primary buttons & links (hover). Inferred if undefined.
        error: "#d23f4d",           // Error messages
        shade100: "#333",           // Standard text
        shade200: "#7a7a7a",        // Secondary button text
        shade300: "#999",           // Secondary button text (hover)
        shade400: "#a5a6a8",        // Welcome text
        shade500: "#d3d3d3",        // Modal close button
        shade600: "#dddddd",        // Border
        shade700: "#f0f0f0",        // Progress indicator background
        shade800: "#f8f8f8",        // File item background
        shade900: "#fff"            // Various (draggable crop buttons, etc.)
      },
      fontFamilies: {
        base: "arial, sans-serif"   // Base font family (comma-delimited).
      },
      fontSizes: {
        base: 16                    // Base font size (px).
      }
    },
    path: {                         // Optional: a string (full file path) or object like so:
      fileName: "Example.jpg",      // Supports path variables (e.g. {ORIGINAL_FILE_EXT}).
      folderPath: "/uploads"        // Please refer to docs for all path variables.
    },
    metadata: {
      hello: "world"                // Arbitrary JSON metadata (saved against the file).
    },
    tags: ["profile_picture"],      // Requires a Bytescale account.
    editor: {
      images: {
        allowResizeOnMove: true,    // True by default. If false, prevents cropper from resizing when moved.
        preview: true,              // True by default if cropping is enabled. Previews PDFs and videos too.
        crop: true,                 // True by default.
        cropFilePath: image => {    // Choose the file path used for JSON image crop files.
          const {filePath} = image  // In:  https://www.bytescale.com/docs/types/UploadedFile
          return `${filePath}.crop` // Out: https://www.bytescale.com/docs/types/FilePathDefinition
        },
        cropRatio: 4 / 3,           // Width / Height. Undefined enables freeform (default).
        cropShape: "rect"           // "rect" (default) or "circ".
      }
    }, */
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.article= new Article('','','','',null);
  }

  ngOnInit() {
  }

  onComplete = (files: UploadWidgetResult[]) => {
    this.uploadedFileUrl = files[0]?.fileUrl;
    this.uploadedFileName = files[0]?.originalFile.file.name;
  };

  onSubmit(){
    this.article.image = this.uploadedFileUrl;
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          Swal.fire({
            title: "Articulo Creado!!!",
            text: "El articulo se ha creado correctamente.",
            icon: "success"
          });
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

}
