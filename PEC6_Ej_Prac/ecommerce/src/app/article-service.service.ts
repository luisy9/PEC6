import { Injectable } from '@angular/core';
import { Article } from './article-list/article-list.component';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
  public _articlesAll: BehaviorSubject<Article[]>;
  private quantityArticles: BehaviorSubject<QuantityArticle[]>;

  constructor(private httpClient: HttpClient) {
    this._articlesAll = new BehaviorSubject<Article[]>([]);
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

    if (!name || !price || !urlImg) {
      console.log('Incomplete form data for create a article');
      return;
    }

    const newForm = {
      name: name,
      price: price,
      imageUrl: urlImg,
      isOnSale: isOnSale,
      quantityInCart: 0
    };

    //Consulta a la api
    this.httpClient.post<Article>(`http://localhost:3000/api/articles`, { ...newForm }).subscribe({
      error: error => {
        console.log('La consulta ha ido con exito', error);
      }
    });
  }

  //Lo que quiero hacer es devolver el array filtrado de los articulos
  searchTheArticle(dataInput: any) {
    this._articlesAll.pipe(map(article => {
      const filterArticle = article.filter((art) => art === dataInput);
      console.log(filterArticle);
    }))
  }

}