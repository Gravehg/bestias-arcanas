import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css',
})
export class CharacterCardComponent {
  @Input() characterName = '';
  @Input() imgURL = '';
  @Input() summary = '';
  @Input() id = '';
}
