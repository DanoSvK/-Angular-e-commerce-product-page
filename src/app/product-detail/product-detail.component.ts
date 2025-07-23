import { Component, signal, inject } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  productService = inject(ProductService);

  onAddProduct() {
    this.productService.increaseQuantity();
  }

  onRemoveProduct() {
    if (this.productService.productCount() > 0) {
      this.productService.decreaseQuantity();
    }
  }

  onAddToCart() {
    this.productService.addProductToCart();
  }
}
