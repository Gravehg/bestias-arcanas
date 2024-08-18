import { Component } from '@angular/core';
import { BookCardComponent } from '../utils/book-card/book-card.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {}
