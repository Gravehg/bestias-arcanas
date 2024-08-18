import { Component } from '@angular/core';
import { CharacterCardComponent } from '../utils/character-card/character-card.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {}
