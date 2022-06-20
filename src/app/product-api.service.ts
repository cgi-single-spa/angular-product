import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Product[]> {
    return this.http
    .get<Product[]>("https://fakestoreapi.com/products")
  //   .pipe(
  //     map((response: any) => response.products))
  // Idk waarom maar dit pipe gedeelte moest weg en toen werkte het ineens
  }
}
