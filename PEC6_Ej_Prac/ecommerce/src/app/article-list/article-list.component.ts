import { Component, Input } from '@angular/core';
import { ArticleEventData } from '../article/article.component';
import { ArticleServiceService } from '../article-service.service';

export interface article {
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
  articles: article[];

  constructor(private articleService: ArticleServiceService) {
    this.articles = this.articleService.getArticle();
  }


  public objectChild($event: ArticleEventData): void {
    this.articleService.changeQuantity($event);
  }
}