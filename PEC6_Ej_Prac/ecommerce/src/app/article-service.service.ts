import { Injectable } from '@angular/core';
import { Article } from './article-list/article-list.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
  public _articlesAll: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  public articlesAll$: Observable<Article[]> = this._articlesAll.asObservable();
  public refresh$ = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  getArticle(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`http://localhost:3000/api/articles`).pipe();
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
    this.httpClient.patch<OperationQuantity>(`http://localhost:3000/api/articles/${articuleId}`,
      { changeInQuantity: 1 }).pipe(tap(() => {
        this.refresh$.next();
      })).subscribe();
  }

  //Function for decrement
  handleOperationRes(articuleId: number): any {
    this.httpClient.patch<OperationQuantity>(`http://localhost:3000/api/articles/${articuleId}`,
      { changeInQuantity: -1 }).pipe(tap(() => {
        this.refresh$.next();
      })).subscribe();
  }


  get _refresh() {
    return this.refresh$;
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