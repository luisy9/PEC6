import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { routing } from './app.routes';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, ArticleComponent, ArticleListComponent, NavbarComponent, ArticleNewReactiveComponent, ArticleNewTemplateComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule, MatButtonModule, routing, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

