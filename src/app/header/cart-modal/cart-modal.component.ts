import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-cart-modal',
  imports: [],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css',
})
export class CartModalComponent {
  productService = inject(ProductService);

  productCount = this.productService.productCount;
  productInCartCount = this.productService.productInCartCount;

  onEmptyCart() {
    this.productService.isCartActive.set(false);
    this.productInCartCount.set(0);
  }

  productDetails = {
    image: '/image-product-1-thumbnail.jpg',
    title: 'Fall Limited Edition Sneakers',
    price: 125.0,
  };

  get totalPrice(): number {
    return this.productDetails.price * this.productCount();
  }
}
