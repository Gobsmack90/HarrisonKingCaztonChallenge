import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';

const PRODUCTS_PATH = 'https://fakestoreapi.com/products';

const USERS_PATH = 'https://fakestoreapi.com/users';

const CATEGORIES_PATH = 'https://fakestoreapi.com/products/categories';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_PATH);
  }



}
