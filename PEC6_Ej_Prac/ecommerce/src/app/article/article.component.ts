import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../article-list/article-list.component';
import { QuantityArticle } from '../article-service.service';

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
  @Input() actualId!: QuantityArticle[] | any;
  @Output() articleEvent: EventEmitter<ArticleEventData> = new EventEmitter();
  isOnSale: number = 0;

  get _isCountZero(): boolean {
    const existingItem = this.actualId?.find((e: QuantityArticle) => e.id === this.article.id);
    return existingItem ? existingItem.quantity === 0 : false;
  }

  emitArticleEvent(id: number, operation: string): void {
    const eventData: ArticleEventData = {articuleId: id, operation};
    this.articleEvent.emit(eventData);
  }
}