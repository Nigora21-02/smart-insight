import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-input.html',
 styleUrls: ['./search-input.scss'],
})
export class SearchInput {
  @Output() search = new EventEmitter<string>();

  onInput(value: string) {
    this.search.emit(value);
  }
}