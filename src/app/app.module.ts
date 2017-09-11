import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter.component';
import { SortComponent } from './sort.component';
import { MenComponent } from './men.component';
import { WomenComponent } from './women.component';
import { ChildrenComponent } from "./children.component";
import { ProductDetailComponent } from "./product-detail.component";
import { MainComponent } from "./main.component";

import { ProductService } from "./product.service";

import { RoutersModule } from './router.module';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    SortComponent,
    MenComponent,
    WomenComponent,
    ChildrenComponent,
    ProductDetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RoutersModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
