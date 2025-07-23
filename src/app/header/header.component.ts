import { Component, inject, computed, signal } from '@angular/core';
import { ViewService } from '../../view.service';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  imports: [CartModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private viewport = inject(ViewService);
  private productService = inject(ProductService);

  isMobile = computed(() => this.viewport.isMobile());

  productInCartCount = this.productService.productInCartCount;

  isCartOpen = signal(false);
  isMobileMenuOpen = signal(false);

  onClickCart() {
    this.isCartOpen.set(true);
  }

  onClickMobileMenu() {
    this.isMobileMenuOpen.set(true);
  }

  onCloseModal() {
    this.isCartOpen.set(false);
    this.isMobileMenuOpen.set(false);
  }
}
