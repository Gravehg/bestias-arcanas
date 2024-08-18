import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AuthorComponent } from './author/author.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'books', component: BooksComponent },
  { path: '**', component: HomeComponent },
];
