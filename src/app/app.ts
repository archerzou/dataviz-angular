import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {Toast} from './shared/components/toast';
import {Sidebar} from './shared/components/sidebar/sidebar';

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

  get activeUrl(): string {
    return this.router.url;
  }

  get isActive(): boolean {
    const url = this.router.url;
    return url.includes('/charts/create') || url.includes('/charts/edit');
  }

  protected title = 'dataviz-angular';
}
