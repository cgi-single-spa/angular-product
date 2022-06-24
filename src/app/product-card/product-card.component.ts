import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../product-api.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private productApi: ProductApiService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.productApi.fetchProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  addToCart(product: Product) {
    this.publishProductEvent('productToCart', { product })
  }

  // Sends an event under the ID 'productToCart', the Vue (MiniCart) application can listen to this
  // TODO: Share with Vue CartPage (remove)
  publishProductEvent(eventId: string, detail: any) {
    const productEvent = new CustomEvent(eventId, { detail });
    window.dispatchEvent(productEvent);
  }

}
