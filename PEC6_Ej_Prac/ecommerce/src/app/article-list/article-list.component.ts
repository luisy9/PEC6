import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleEventData } from '../article/article.component';
import { ArticleServiceService } from '../article-service.service';
import { QuantityArticle } from '../article-service.service';

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
  public articlesData$!: Observable<Article[]>;
  public articleChange$!: Observable<QuantityArticle[]>;
  idArticle: number = 0;
  articleId: [] = [];
  actualId: { id: number; count: number }[] = [];

  public articlesService = inject(ArticleServiceService);

  constructor() {
    this.articlesData$ = this.articlesService.getArticle();
  }

  public objectChild($event: ArticleEventData): void {
    this.articlesService.changeQuantity($event)
    .subscribe(
      (data: QuantityArticle[]) => {
        this.articleId.push(data);
      },
      (error) => {
        console.error(error);
      });
    console.log(this.articleChange$);
  }
}