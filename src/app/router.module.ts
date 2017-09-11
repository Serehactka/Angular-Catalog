import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { ProductDetailComponent } from './product-detail.component';

const ROUTES: Routes = [
    {
        path: "main",
        component: MainComponent
    },

    {
        path: "detail/:id",
        component: ProductDetailComponent
    },

    {
        path: "",
        redirectTo: "/main",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class RoutersModule {
    
}