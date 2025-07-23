import { Component, signal, inject, WritableSignal } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { PRODUCT_DATA } from '../product-data';
import { type Product } from '../product.model';

@Component({
  selector: 'app-lightbox',
  imports: [],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css',
})
export class LightboxComponent {
  private galleryService = inject(GalleryService);

  lightboxThumbnailImageClicked = signal(0);
  isLightboxClicked = this.galleryService.isLightboxClicked;

  productData = signal<Product[]>(PRODUCT_DATA);

  onLightboxClose() {
    this.isLightboxClicked.set(false);
  }

  onLightboxThumbnailSelect(imageId: number) {
    this.lightboxThumbnailImageClicked.set(imageId);
  }

  onArrowClick(
    direction: 'next' | 'prev',
    gallerySignal: WritableSignal<number>
  ) {
    this.galleryService.handleArrowClick(direction, gallerySignal);
  }
}
