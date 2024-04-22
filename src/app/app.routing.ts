import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { PaginaComponent } from './component/pagina/pagina.component';
import { ErrorComponent } from './component/error/error.component';
import { ArticleComponent } from './component/article/article.component';
import { SearchComponent } from './component/search/search.component';
import { ArticleNewComponent } from './component/article-new/article-new.component';
import { ArticleEditComponent } from './component/article-edit/article-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/articulo/:id', component: ArticleComponent },
  { path: 'blog/crear', component: ArticleNewComponent },
  { path: 'blog/editar/:id', component: ArticleEditComponent },
  { path: 'buscar/:search', component: SearchComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'pagina-de-pruebas', component: PaginaComponent },
  { path: 'pagina-de-pruebas/:valor1/:valor2', component: PaginaComponent },
  { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
