import { Injectable } from '@angular/core';
import { Article } from './article-list/article-list.component';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface OperationQuantity {
  articuleId: number;
  operation: string;
}

export interface QuantityArticle {
  id: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})


export class ArticleServiceService {
  public actualId: QuantityArticle[] = [];
  private quantityArticles: BehaviorSubject<QuantityArticle[]>;


  constructor(private httpClient: HttpClient) {
    this.quantityArticles = new BehaviorSubject<QuantityArticle[]>([]);
  }

  getArticle(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`http://localhost:3000/api/articles`);
  }

  changeQuantity({ articuleId, operation }: OperationQuantity): void {
    const existingItem = this.actualId.find(e => e.id === articuleId);
    if (operation === 'sum') {
      this.handleOperationSum(articuleId, existingItem);
    } else if (operation === 'res') {
      this.handleOperationRes(articuleId, existingItem);
    }
    this.quantityArticles.next(this.actualId);
  }

  //Function of add
  handleOperationSum(articuleId: number, itemSelected: any): any {
    if (!itemSelected) {
      this.actualId.push({ id: articuleId, quantity: 1 });
    } else {
      itemSelected.quantity += 1;
    }
  }

  //Function for decrement
  handleOperationRes(articleId: number, itemSelected: any): any {
    if (!itemSelected) {
      this.actualId.push({ id: articleId, quantity: 0 });
    } else {
      itemSelected.quantity -= 1;
    }
  }


  get _quantityArticle(): Observable<QuantityArticle[]> {
    return this.quantityArticles.asObservable();
  }

  //Creamos un articulo
  createArticle(formData: any) {
    const { name, price, urlImg, isOnSale } = formData;

    const newForm: Article = {
      id: this.generateId(100),
      name: name,
      price: price,
      imageUrl: urlImg,
      isOnSale: isOnSale,
      quantityInCart: 0
    };

    // this.articleList.push(newForm);
  }

  generateId(max: number): number {
    return Math.floor(Math.random() * max);
  }
}