export interface OperationQuantity {
    articleId: number;
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

export interface NewArticle {
    name: string,
    price: number,
    urlImg: string,
    isOnSale?: boolean
}

export interface Article {
    id: number;
    imageUrl: string;
    isOnSale: boolean;
    name: string;
    price: number;
    quantityInCart: number;
}