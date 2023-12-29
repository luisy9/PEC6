import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { parentArray } from '../article-list/article-list.component';

export type ArticleEventData = {
  articulo: number,
  operation: string
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent {

  @Input() childArray!: parentArray;
  @Input() idArticle!: number;
  @Input() actualId!: { id: number, count: number }[];
  @Output() objectArticle: EventEmitter<ArticleEventData> = new EventEmitter();
  isOnSale: number = 0;

  isCountZero(): boolean {
    const existingItem = this.actualId.find(e => e.id === this.childArray.id);
    return existingItem ? existingItem.count === 0 : false;
  }

  sumArticle(id: number, operation: string) {
    this.objectArticle.emit({ articulo: id, operation: operation });
  }

  restArticle(id: number, operation: string) {
    this.objectArticle.emit({ articulo: id, operation: operation });
  }
}