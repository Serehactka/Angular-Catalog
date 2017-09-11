import { Component, OnChanges, OnInit, SimpleChanges, Input } from "@angular/core";

import { Product } from "./product.class";

import { ProductService } from "./product.service";

import "assets/js/jquery-3.1.1.js";

declare var jQuery: any;
var $ = jQuery;

@Component({
    selector: "children",
    templateUrl: "children.component.html",
    styleUrls: ["human.component.css"]
})
export class ChildrenComponent implements OnChanges, OnInit{
    category = "children";

    page: number = 1;

    constructor ( private productService: ProductService ) {};

    @Input() sorting_prop: string = "price";
    products = [];
    //this.productService.getProducts().map(product => this);

    changePage(dir: string): void {
        if (dir == "prev" && this.page > 1) {
            this.page--;
        }

        if (dir == "next" && this.page < this.products.length / 3) {
            this.page++;
        }
    }

    onClickProductSize(product: Product): void {
        if (product.focused_size)
            product.focused_size = false;
        else product.focused_size = true;
    }

    changeProductSize(product: Product, size: string): void {
        product.size_text = size;
        product.focused_size = false;
    }

    exchangeProducts(prodA: Product, prodB: Product): void {
        let exch;
        
        for(let key in prodA) {
            exch = prodA[key];
            prodA[key] = prodB[key];
            prodB[key] = exch;
        }
    }

    sortProducts(param: string): void {
        let sort = "price";

        switch (param) {
            case "name":
                sort = "name";
                break;
            case "price":
                sort = "price";
                break;
            default:
                sort = "price";
        }

        for (let i = 0; i <= this.products.length; i++) {
            for (let j = i+1; j < this.products.length; j++) {
                if (this.products[i][sort]>this.products[j][sort])
                    this.exchangeProducts(this.products[i], this.products[j]);
            }
        }
    }

    setPageCount(): number {
        let fC = this.products.length / 3.0;
        let iC = Math.round(fC);

        //alert(iC+" "+fC);
        if (fC > iC) {
            iC++;
            //alert(iC+" "+fC);
        }
        return iC;
    }

    ngOnChanges(): void {
        this.sortProducts(this.sorting_prop);
    }

    ngOnInit(): void {
        this.productService.getProducts(this.category).then(products => { 
                                                                            this.products = products; 
                                                                            this.sortProducts(this.sorting_prop);
                                                                        });
        let buff = this; 

        $(this.category).ready(function(){
            $('.products_slider_'+buff.category).slick({
                draggable: false,
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                prevArrow: $(".arrowsPrevch"),
                nextArrow: $(".arrowsNextch")
            });
        });
    }
}