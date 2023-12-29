import { Component } from '@angular/core';
import { Article } from '../model/article';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})


export class ArticleNewTemplateComponent {

  public article: Article;

  constructor() {
    this.article = new Article('', 0, '', false);
  }

  createArticle(article: NgForm): any {
    if (article.valid) {
      console.log(article.value);
    } else {
      console.log(article.value);
      console.log('no es valido');
    }
  }

}
