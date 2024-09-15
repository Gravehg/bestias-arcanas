import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AuthorComponent } from './author/author.component';
import { BooksComponent } from './books/books.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FallbackComponent } from './fallback/fallback.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { CharacterComponent } from './character/character.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'books', component: FallbackComponent },
  { path: 'social-networks', component: SocialNetworksComponent },
  { path: '**', component: NotFoundComponent },
];
