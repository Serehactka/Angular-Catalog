import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component ({
    selector: "filter",
    templateUrl: "filter.component.html",
    styleUrls: ["filter.component.css"]
})
export class FilterComponent implements OnInit {
    title = "Hohoh";

    filterOptions = {
        men: true,
        women: true,
        children: false
    }    

    @Output() onFilter = new EventEmitter<object>();

    updateFilter(param: string): void {
        this.filterOptions[param] = !this.filterOptions[param];
        this.onFilter.emit(this.filterOptions);
    }

    seeAll(): void {
        for(let key in this.filterOptions)
            this.filterOptions[key] = true;

        this.onFilter.emit(this.filterOptions);
    }

    ngOnInit(): void {
        this.onFilter.emit(this.filterOptions);
    }
}