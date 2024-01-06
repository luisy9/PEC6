import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { ArticleEventData } from '../article/article.component';
import { ArticleServiceService } from '../article-service.service';
import { QuantityArticle } from '../article-service.service';

export interface Article {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  isOnSale?: boolean;
  quantityInCart: number;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {
  public articles: Article[] = [];
  public articleChange$!: Observable<Article[]>;
  public articlesAll$!: Observable<Article[]>;
  public subscription!: Subscription;
  idArticle: number = 0;
  public articleId: [] = [];
  public articlesService = inject(ArticleServiceService);

  constructor() { }

  public objectChild($event: ArticleEventData): void {
    this.articlesService.changeQuantity($event);
  }

  ngOnInit(): void {
    this.articlesAll$ = this.articlesService.getArticle();
    this.subscription = this.articlesService.refresh$.subscribe(() => this.articlesAll$ = this.articlesService.getArticle())
  }

  searchArticle($event: any) {
    const dataInputSearch = $event.target.value;
    this.articlesService.searchTheArticle(dataInputSearch);
  }

}