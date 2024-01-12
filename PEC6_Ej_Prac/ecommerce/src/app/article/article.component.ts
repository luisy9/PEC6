import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../article-list/article-list.component';
import { OperationQuantity, QuantityChangeArticle } from '../interfaces/interfaces';

export type ArticleEventData = {
  articuleId: number,
  operation: string
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent {

  @Input() article!: Article;
  @Input() idArticle!: number;
  @Input() actualId!: OperationQuantity[] | any;
  @Output() articleEvent: EventEmitter<OperationQuantity> = new EventEmitter();
  public quantityArticlesChange$!: Observable<Article[]>;
  public isOnSale: number = 0;

  get _isCountZero(): any {
    if (this.article.id === this.idArticle) {
      return this.article.quantityInCart === 0;
    }
  }

  emitArticleEvent(id: number, operation: string): void {
    const eventData: OperationQuantity = { articleId: id, operation };
    this.articleEvent.emit(eventData);
  }
}