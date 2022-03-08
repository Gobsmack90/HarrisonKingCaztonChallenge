import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { TotalProductsComponent } from './total-products/total-products.component';
import { CustomerComponent } from './customer/customer.component';
import { LatestComponent } from './latest/latest.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { RemoveCardComponent } from './remove-card/remove-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    TotalProductsComponent,
    CustomerComponent,
    LatestComponent,
    CategoriesComponent,
    DashboardComponent,
    ProductComponent,
    RemoveCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
