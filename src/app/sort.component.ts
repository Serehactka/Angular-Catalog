import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: "sort",
    templateUrl: "./sort.component.html",
    styleUrls: ["sort.component.css"]
})
export class SortComponent {
    focus = false;

    sorting = "price";

    sorts = [
        "name",
        "price",
        "no-sort"
    ];

    @Output() onChangeSort = new EventEmitter<string>();

    onClick(): void {
        if (!this.focus)
            this.focus = true;
        else this.focus = false;
    }

    changeSort(sort: string): void {
        this.sorting = sort;
        this.focus = false;

        this.onChangeSort.emit(sort);
    }

    ngOnInit(): void {
        this.onChangeSort.emit(this.sorting);
    }
}