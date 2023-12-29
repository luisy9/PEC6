import { Injectable } from '@angular/core';
import { Article } from './article-list/article-list.component';
import { Observable, of } from 'rxjs';

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

  private articleList: Article[] = [{ id: 1, articulo: 'Teclado gaming', imgArticle: "https://imgs.search.brave.com/uT5TsZ61BMgxVPCAwQU0uhsa_EzU8V4OyCkuQ8Ur3s0/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzVhL0Nv/bXB1dGVyX2tleWJv/YXJkX0VTX2xheW91/dC5zdmcvNjQwcHgt/Q29tcHV0ZXJfa2V5/Ym9hcmRfRVNfbGF5/b3V0LnN2Zy5wbmc", price: 10, onSale: true },
  { id: 2, articulo: 'Cascos gaming', imgArticle: "https://imgs.search.brave.com/R0TErqPQRL8eukHShkjOpjFaZZYSPdvRdWQd4kT7QZE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFsNE1yUCtYTUwu/anBn", price: 20, onSale: true },
  { id: 3, articulo: 'Pantalla gaming', imgArticle: "https://imgs.search.brave.com/atxwJUNu94DnuityOIMddoy609ssIvg9_RZpyz2lYpc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzZlZjk4/Zi84MTdpYndrYi05/bC5fYWNfc2wxNTAw/Xy80NTBfMTAwMC53/ZWJw", price: 50, onSale: false }];

  public actualId: { id: number; quantity: number }[] = [];

  getArticle(): Observable<Article[]> {
    return of(this.articleList);
  }

  // changeQuantity({ articuleId, operation }: OperationQuantity): Observable<QuantityArticle[]> {
  //   if (operation === 'sum') {
  //     const existingItem = this.actualId.find(e => e.id === articuleId);
  //     if (!existingItem) {
  //       this.actualId.push({ id: articuleId, quantity: 1 });
  //     } else {
  //       // existingItem.count += 1;
  //     }
  //   } else if (operation === 'res') {
  //     const existingItem = this.actualId.find(e => e.id === articuleId);
  //     if (!existingItem) {
  //       this.actualId.push({ id: articuleId, quantity: 1 });
  //     } else {
  //       if (existingItem.quantity > 0) {
  //         existingItem.quantity -= 1;
  //       }
  //     }
  //   }

  //   return this.actualId;
  // }

  createArticle() {

  }
}