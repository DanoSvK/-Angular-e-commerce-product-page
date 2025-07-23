import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ViewService {
  isMobile = signal(window.innerWidth < 720);

  private resizeHandler = () => {
    this.isMobile.set(window.innerWidth < 720);
  };

  constructor() {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }
}
