import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'chem-search-app',
  imports: [CommonModule, FormsModule],
  template: `
    <section>
      <form (ngSubmit)="search()">
        <input
          type="text"
          name="searchQuery"
          class="form-control"
          placeholder="enter your search query"
          [(ngModel)]="searchQuery"
        />
        <button type="button" class="btn btn-success" (click)="search()">Submit</button>
      </form>
    </section>
  `,
  styles: [
    `
      section form {
        display: flex;
        gap: 10px;
      }
    `,
  ],
})
export class ChemSearch {
  public searchQuery = signal<string>('');
  public search(): void {
    console.log(`Searching for: ${this.searchQuery()}`);
  }
}
