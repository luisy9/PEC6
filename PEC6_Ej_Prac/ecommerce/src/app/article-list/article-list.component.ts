import { Component, inject, OnInit } from '@angular/core';
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

export class ArticleListComponent implements OnInit {
  public articlesData$!: Observable<Article[]>;
  public articleChange$!: Observable<QuantityArticle[]>;
  idArticle: number = 0;
  public articleId: [] = [];
  actualId: [] = [];

  public articlesService = inject(ArticleServiceService);

  constructor() {
    this.articlesData$ = this.articlesService.getArticle();
    this.articleChange$ = this.articlesService._quantityArticle;
  }

  public objectChild($event: ArticleEventData): void {
    this.articlesService.changeQuantity($event);
  }

  ngOnInit(): void {
    this.articleChange$.subscribe((e) => {
      console.log(e)
    });
  }
}