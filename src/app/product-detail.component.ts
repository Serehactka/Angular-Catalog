import { Component, OnInit } from "@angular/core";

import { Product } from "./product.class";

import { ProductService } from "./product.service";

import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: "prod-det",
    templateUrl: "product-detail.component.html",
    styleUrls: ["product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    error: string;

    constructor (private productService: ProductService, 
                 private route: ActivatedRoute,
                 private location: Location ) {}

    setSizeString(): string {
        return this.product.sizes.join();
    }

    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.productService.getProduct(+params.get("id")))
            .subscribe(product => this.product = product, error => this.error = error);
    }

}