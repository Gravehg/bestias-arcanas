import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from '../models/CharacterModel';
import { getCharacter } from '../utils/characters';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent implements OnInit {
  @Input() id: string = '';
  character: CharacterModel = {
    characterName: '',
    id: '',
    imgURL: '',
    summary: '',
    color: '',
    fullDescription: '',
    characteristics: '',
  };

  ngOnInit(): void {
    this.character = getCharacter(this.id) || {
      characterName: '',
      id: '',
      imgURL: '',
      summary: '',
      color: '',
      fullDescription: '',
      characteristics: '',
    };
  }
}
