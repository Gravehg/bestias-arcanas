import { Component } from '@angular/core';
import { CharacterCardComponent } from '../utils/character-card/character-card.component';
import { CharacterModel } from '../models/CharacterModel';
import characters from '../utils/characters';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  characters: CharacterModel[] = characters;
}
