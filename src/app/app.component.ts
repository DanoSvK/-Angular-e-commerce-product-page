import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, GalleryComponent, ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product-page';
}
