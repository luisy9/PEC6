import { Injectable } from '@angular/core';
import { Article } from './article-list/article-list.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface OperationQuantity {
  articuleId: number;
  operation: string;
}

export interface QuantityArticle {
  id: number;
  quantity: number;
}

export interface QuantityChangeArticle {
  id: number;
  changeInQuantity: number;
}

@Injectable({
  providedIn: 'root'
})


export class ArticleServiceService {
  public actualId: QuantityChangeArticle[] = [];
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
    if (operation === 'sum') {
      this.handleOperationSum(articuleId);
    } else if (operation === 'res') {
      this.handleOperationRes(articuleId);
    }
  }

  //Function of add
  handleOperationSum(articuleId: number): any {
    return this.httpClient.patch<OperationQuantity>(`http://localhost:3000/api/articles/${articuleId}`, {changeInQuantity: 1}).subscribe();
  }

  //Function for decrement
  handleOperationRes(articuleId: number): any {
    return this.httpClient.patch<OperationQuantity>(`http://localhost:3000/api/articles/${articuleId}`, {changeInQuantity: -1}).subscribe();
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