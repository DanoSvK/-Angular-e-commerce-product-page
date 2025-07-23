import { Injectable, signal, WritableSignal } from '@angular/core';
import { PRODUCT_DATA } from './product-data';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  thumbnailImageClicked = signal<number>(1);
  isLightboxClicked = signal<boolean>(false);

  thumbnailIconsClick(userId: number) {
    this.thumbnailImageClicked.set(userId);
  }

  /**
   * Handles arrow clicks for BOTH galleries.
   * @param direction - Whether to go 'prev' or 'next'.
   * @param gallerySignal - The signal to update (either thumbnailIdClicked or lightboxGalleryIdClicked).
   */
  handleArrowClick(
    direction: 'next' | 'prev',
    gallerySignal: WritableSignal<number>
  ) {
    const totalImages = PRODUCT_DATA.length;
    const lastIndex = totalImages - 1;
    gallerySignal.update((currentIndex) => {
      console.log(currentIndex);
      if (direction === 'prev') {
        // If at the first image, loop to the last, otherwise decrement.
        return currentIndex === 0 ? lastIndex : currentIndex - 1;
      } else {
        // 'next'
        // If at the last image, loop to the first, otherwise increment.
        return currentIndex === lastIndex ? 0 : currentIndex + 1;
      }
    });
  }
}
