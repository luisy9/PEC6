import { Component, Input } from '@angular/core';
import { ArticleEventData } from '../article/article.component';

export interface parentArray {
  id: number;
  articulo: string;
  imgArticle: string;
  price: number;
  onSale: boolean;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  idArticle: number = 0;
  actualId: { id: number; count: number }[] = [];
  isOnSale: {} = [];
  arrayParent: parentArray[] = [
    { id: 1, articulo: 'Teclado gaming', imgArticle: "https://imgs.search.brave.com/uT5TsZ61BMgxVPCAwQU0uhsa_EzU8V4OyCkuQ8Ur3s0/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzVhL0Nv/bXB1dGVyX2tleWJv/YXJkX0VTX2xheW91/dC5zdmcvNjQwcHgt/Q29tcHV0ZXJfa2V5/Ym9hcmRfRVNfbGF5/b3V0LnN2Zy5wbmc", price: 10, onSale: true },
    { id: 2, articulo: 'Cascos gaming', imgArticle: "https://imgs.search.brave.com/R0TErqPQRL8eukHShkjOpjFaZZYSPdvRdWQd4kT7QZE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFsNE1yUCtYTUwu/anBn", price: 20, onSale: true },
    { id: 3, articulo: 'Pantalla gaming', imgArticle: "https://imgs.search.brave.com/atxwJUNu94DnuityOIMddoy609ssIvg9_RZpyz2lYpc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzZlZjk4/Zi84MTdpYndrYi05/bC5fYWNfc2wxNTAw/Xy80NTBfMTAwMC53/ZWJw", price: 50, onSale: false }
  ];

  public objectChild($event: ArticleEventData): void {
    if ($event.operation === 'sum') {
      const existingItem = this.actualId.find(e => e.id === $event.articulo);
      if (!existingItem) {
        this.actualId.push({ id: $event.articulo, count: 1 })
      } else {
        existingItem.count += 1;
      }
    } else if ($event.operation === 'res') {
      const existingItem = this.actualId.find(e => e.id === $event.articulo);
      if (!existingItem) {
        this.actualId.push({ id: $event.articulo, count: 1 });
      } else {
        if (existingItem.count > 0) {
          existingItem.count -= 1;
        }
      }
    }
  }
}