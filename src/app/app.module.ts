import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './component/mi-componente/mi-componente.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { HeaderComponent } from './component/header/header.component';
import { SliderComponent } from './component/slider/slider.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { PaginaComponent } from './component/pagina/pagina.component';
import { BlogComponent } from './component/blog/blog.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { appRoutingProviders, routing } from './app.routing';
import { ErrorComponent } from './component/error/error.component';
import { PeliculaComponent } from './component/pelicula/pelicula.component';
import { EsparPipe } from './pipes/espar.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './component/articles/articles.component';
import { ArticleComponent } from './component/article/article.component';
import { SearchComponent } from './component/search/search.component';
import { ArticleNewComponent } from './component/article-new/article-new.component';
import { UploadWidgetModule } from '@bytescale/upload-widget-angular';
import { ArticleEditComponent } from './component/article-edit/article-edit.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    PeliculasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    PaginaComponent,
    BlogComponent,
    FormularioComponent,
    ErrorComponent,
    PeliculaComponent,
    EsparPipe,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    UploadWidgetModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgImageSliderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
