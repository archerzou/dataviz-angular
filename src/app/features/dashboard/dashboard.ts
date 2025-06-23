import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { injectAppSelector } from '../../store';
import { IReduxState } from '../../store/store.interface';
import {DataSidebar} from './components/data-sidebar/data-sidebar';
import {PromptEditor} from './components/prompt-editor/prompt-editor';
import {SqlEditor} from './components/sql-editor/sql-editor';
import {ResultsTable} from './components/results-table/results-table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DataSidebar,
    PromptEditor,
    SqlEditor,
    ResultsTable,
    CommonModule,
  ],
  template: `
    <div class="flex-1 flex flex-col h-screen">
      <header class="bg-white flex justify-between border-b border-gray-200 px-4 py-2">
        <h1 class="text-2xl font-bold">Query Dashboard</h1>

        <div class="text-blue-500">{{authUser().email}}</div>
      </header>

      <div class="flex">
        <div class="flex-1 flex flex-col w-[200px]">
          <div class="flex border-b border-gray-200 h-10">
            @for (tab of tabs; track $index) {
              <button
                (click)="activeTab = $index"
                class="px-4 py-2 border-b-2"
                [class.border-blue-500]="activeTab === $index"
                [class.border-transparent]="activeTab !== $index"
                [class.text-blue-600]="activeTab === $index"
                [class.text-gray-500]="activeTab !== $index"
              >
                {{ tab.label }}
              </button>
            }
          </div>

          <div class="h-60">
            @if (activeTab === 0) {
              <app-prompt-editor (promptResult)="onPromptResult($event)" (pageLoading)="onPageLoading($event)" />
            } @else {
              <app-sql-editor (queryResult)="onQueryResult($event)" (pageLoading)="onPageLoading($event)" />
            }
          </div>

          @if (promptTableData() && activeTab === 0) {
            <app-results-table [tableResult]="promptTableData()" [isLoading]="isLoading()" />
          }
          @if (sqlTableData() && activeTab === 1) {
            <app-results-table [tableResult]="sqlTableData()" [isLoading]="isLoading()" />
          }

        </div>

        <app-data-sidebar />
      </div>
    </div>
  `
})
export class Dashboard {
  authUser = injectAppSelector((state: IReduxState) => state.authUser);
  documents = injectAppSelector((state: IReduxState) => state.documents);

  tabs = [
    {label: 'Prompt'},
    {label: 'Query'}
  ];
  activeTab = 0;
  sqlTableData = signal<Record<string, unknown>[]>([]);
  promptTableData = signal<Record<string, unknown>[]>([]);
  isLoading = signal<boolean>(false);

  constructor() {
    effect(() => {
      if (this.documents().length > 0) {
        this.sqlTableData.set(this.documents());
        this.activeTab = 1;
      }
    });
  }

  onPromptResult(event: string): void {
    const { result } = JSON.parse(event);
    this.promptTableData.set(result);
  }

  onPageLoading(event: boolean): void {
    this.isLoading.set(event);
  }

  onQueryResult(event: string): void {
    const filteredDocuments = JSON.parse(event).filter((obj: Record<string, unknown>) => Object.keys(obj).length > 0);
    this.sqlTableData.set(filteredDocuments);
  }

}
