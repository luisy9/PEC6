export class Article {

    public name: string;
    public price: number;
    public url: string;
    public onSale: boolean

    constructor(
        name: string, price: number, url: string, onSale: boolean
    ) {
        this.name = name;
        this.price = price;
        this.url = url;
        this.onSale = onSale;
    }
}