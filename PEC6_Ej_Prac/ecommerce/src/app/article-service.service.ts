import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewArticle, OperationQuantity, Article } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})


export class ArticleServiceService {

  private _refresh$ = new Subject<number>();
  constructor(private httpClient: HttpClient) { }

  getArticle(): Observable<Article[]> {
    const url: string = `http://localhost:3000/api/articles`;
    return this.httpClient.get<Article[]>(url);
  }

  get refresh$(): Observable<any> {
    return this._refresh$;
  }

  //Cambiar la cantidad de los productos haciendo una consulta para cambiarlo en la api, y luego recoger los datos.
  changeQuantityArticles({ articleId, operation }: OperationQuantity) {
    const urlWithArticleId: string = `http://localhost:3000/api/articles/${articleId}`;
    if (operation === 'sum') {
      this.operationSumQuantity(urlWithArticleId, articleId);
    } else if (operation === 'res') {
      this.operationResQuantity(urlWithArticleId, articleId);
    }
  }

  operationSumQuantity(urlWithArticleId: string, articleId: number): any {
    this.httpClient.patch<string>(`${urlWithArticleId}`,
      { changeInQuantity: 1 }).pipe(tap((res: any) => {
        this._refresh$.next(articleId);
      })).subscribe();
  }

  operationResQuantity(urlWithArticleId: string, articleId: number) {
    this.httpClient.patch<string>(`${urlWithArticleId}`,
      { changeInQuantity: -1 }).pipe(tap((res: any) => {
        this._refresh$.next(articleId);
      })).subscribe();
  }

  createArticle(formData: NewArticle) {
    const { name, price, urlImg, isOnSale } = formData;
    const article: NewArticle = {
      name: name,
      price: price,
      urlImg: urlImg,
      isOnSale: isOnSale
    }

    // Creamos nuevo atriculo
    this.httpClient.post<Article[]>(`http://localhost:3000/api/articles`, { ...article }).subscribe({
      error: error => console.log('La consulta no ha funcionado!', error)
    })
  }
}