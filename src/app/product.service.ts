import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  productCount = signal(0);
  productInCartCount = signal(0);
  isCartActive = signal(false);

  increaseQuantity() {
    this.productCount.set(this.productCount() + 1);
  }

  decreaseQuantity() {
    if (this.productCount() > 0) {
      this.productCount.set(this.productCount() - 1);
    }
  }

  addProductToCart() {
    this.isCartActive.set(true);
    this.productInCartCount.set(this.productCount());
  }
}
