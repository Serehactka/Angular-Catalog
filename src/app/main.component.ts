import { Component } from '@angular/core';

@Component({
    selector: "main",
    templateUrl: "main.component.html",
    styleUrls: ["app.component.css"]
})
export class MainComponent {
    sorting = "price";
    title = 'app';

    filter = {
        men: true,
        women: true,
        children: true
    }


    changeSort(sort: string): void {
        this.sorting = sort;
    }

    changeFilter(filter: object): void {
        for (let key in filter) {
            this.filter[key] = filter[key];
        }
    }
}