import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


export interface Metric {
  name: string;
  value: number;
  change: number;
}
interface ProductResponse {
  products: Product[];
}

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
}
@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
constructor(private http: HttpClient) {}

  getMetrics(search?: string): Observable<Metric[]> {
    const url = search && search.trim().length > 0
    ? `https://dummyjson.com/products/search?q=${search}`
    : `https://dummyjson.com/products`;
  return this.http
    .get<ProductResponse>(url)
    .pipe(
      map(response =>
        response.products.slice(0, 4).map(product => ({
          name: product.title,
          value: product.price,
          change: product.rating
        }))
      )
    );
}
  }
