import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="flex-1 flex flex-col h-screen">
      <header class="bg-white flex justify-between border-b border-gray-200 px-4 py-2">
          <h1 class="text-2xl font-bold">Query Dashboard</h1>

      </header>
    </div>
  `
})
export class Dashboard {

}
