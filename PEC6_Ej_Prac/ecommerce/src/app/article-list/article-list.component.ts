import { Component, Input, inject } from '@angular/core';
import { ArticleEventData } from '../article/article.component';
import { ArticleServiceService } from '../article-service.service';

export interface Article {
  id: number;
  articulo: string;
  imgArticle: string;
  price: number;
  onSale: boolean;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent {
  idArticle: number = 0;
  actualId: { id: number; count: number }[] = [];
  articles: Article[];

  public articlesService = inject(ArticleServiceService);

  constructor() {
    this.articles = this.articlesService.getArticle();
  }

  public objectChild($event: ArticleEventData): void {
    this.articlesService.changeQuantity($event);
  }
}