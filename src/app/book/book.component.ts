import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../models/BookModel';
import { getBook } from '../utils/books';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  @Input() id: string = '';
  book: BookModel = {
    id: '',
    name: '',
    imgURL: '',
    summary: '',
    fullDescription: '',
    color: '',
  };

  ngOnInit(): void {
    this.book = getBook(this.id) || {
      id: '',
      name: '',
      imgURL: '',
      summary: '',
      fullDescription: '',
      color: '',
    };
  }
}
