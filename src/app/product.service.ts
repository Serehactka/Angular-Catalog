import { Injectable } from "@angular/core";

import { Product } from "./product.class";

import { PRODUCTS } from "./products.collection";

@Injectable()
export class ProductService {

    setProducts(param: string): Product[] {
        let products = [];

        PRODUCTS.forEach(product => {
            if (product.type == param) products.push(product);
        });

        return products;
    }

    getProducts(param: string): Promise<Product[]> {
        return Promise.resolve(this.setProducts(param));
    }

    getProductsById(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }

    getProduct(id: number): Promise<Product> {
        return this.getProductsById()
                    .then(products => products.find(product => product.id === id));
    }
}