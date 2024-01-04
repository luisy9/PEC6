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

  //Ejercicio 2
  private articleList: Article[] = [{ id: 1, name: 'Teclado gaming', imageUrl: "https://imgs.search.brave.com/uT5TsZ61BMgxVPCAwQU0uhsa_EzU8V4OyCkuQ8Ur3s0/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzVhL0Nv/bXB1dGVyX2tleWJv/YXJkX0VTX2xheW91/dC5zdmcvNjQwcHgt/Q29tcHV0ZXJfa2V5/Ym9hcmRfRVNfbGF5/b3V0LnN2Zy5wbmc", price: 10, isOnSale: true, quantityInCart: 0 },
  { id: 2, name: 'Cascos gaming', imageUrl: "https://imgs.search.brave.com/R0TErqPQRL8eukHShkjOpjFaZZYSPdvRdWQd4kT7QZE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFsNE1yUCtYTUwu/anBn", price: 20, isOnSale: true, quantityInCart: 0 },
  { id: 3, name: 'Pantalla gaming', imageUrl: "https://imgs.search.brave.com/atxwJUNu94DnuityOIMddoy609ssIvg9_RZpyz2lYpc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzZlZjk4/Zi84MTdpYndrYi05/bC5fYWNfc2wxNTAw/Xy80NTBfMTAwMC53/ZWJw", price: 50, isOnSale: false, quantityInCart: 0 }];

  constructor(private httpClient: HttpClient) {
    this.quantityArticles = new BehaviorSubject<QuantityArticle[]>([]);
  }

  getArticle(): Observable<Article[]> {
    return of(this.articleList);
    // return this.httpClient.get<Article[]>(`http://localhost:3000/api/articles`);
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

    this.articleList.push(newForm);
  }

  generateId(max: number): number {
    return Math.floor(Math.random() * max);
  }
}