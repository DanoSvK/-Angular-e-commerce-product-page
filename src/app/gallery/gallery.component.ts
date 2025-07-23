import {
  Component,
  inject,
  computed,
  signal,
  WritableSignal,
} from '@angular/core';
import { ViewService } from '../../view.service';
import { GalleryService } from './gallery.service';
import { PRODUCT_DATA } from './product-data';
import { type Product } from './product.model';
import { LightboxComponent } from './lightbox/lightbox.component';

@Component({
  selector: 'app-gallery',
  imports: [LightboxComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  private viewport = inject(ViewService);
  isMobile = computed(() => this.viewport.isMobile());

  private galleryService = inject(GalleryService);
  productData = signal<Product[]>(PRODUCT_DATA);

  thumbnailImageClicked = signal(0);
  isLightboxClicked = this.galleryService.isLightboxClicked;

  onLightboxOpen() {
    this.isLightboxClicked.set(true);
  }

  onThumbnailSelect(imageIndex: number) {
    this.thumbnailImageClicked.set(imageIndex);
  }

  onArrowClick(
    direction: 'next' | 'prev',
    gallerySignal: WritableSignal<number>
  ) {
    this.galleryService.handleArrowClick(direction, gallerySignal);
  }
}
