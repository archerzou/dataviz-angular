import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {Toast} from './shared/components/toast';
import {Sidebar} from './shared/components/sidebar/sidebar';
import { fromEvent } from 'rxjs';
import { deleteLocalStorageItem } from './shared/utils/utils';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    Toast,
    Sidebar,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  router: Router = inject(Router);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Ensure this runs only in browser (not server-side)
    if (isPlatformBrowser(this.platformId)) {
      this.setupStorageCleanup();
    }
  }

  get activeUrl(): string {
    return this.router.url;
  }

  get isActive(): boolean {
    const url = this.router.url;
    return url.includes('/charts/create') || url.includes('/charts/edit');
  }

  private setupStorageCleanup(): void {
    fromEvent(window, 'beforeunload').subscribe(() => {
      deleteLocalStorageItem('activeProject');
    });

    fromEvent(window, 'unload').subscribe(() => {
      deleteLocalStorageItem('activeProject');
    });

    // window.addEventListener('beforeunload', () => {
    //   deleteLocalStorageItem('activeProject');
    // });

    // window.addEventListener('unload', () => {
    //   deleteLocalStorageItem('activeProject');
    // });
  }

  protected title = 'dataviz-angular';
}
