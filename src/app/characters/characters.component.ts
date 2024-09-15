import { Component } from '@angular/core';
import { CharacterCardComponent } from '../utils/character-card/character-card.component';
import { CharacterModel } from '../models/CharacterModel';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  characters: CharacterModel[] = [
    {
      id: '1',
      characterName: 'Scarlet Yanade',
      imgURL: '/assets/images/scarlet.jpeg',
      summary:
        '¡Un cabello salvaje y rojo se avecina por una esquina! Scarlet Yanade, una chica de un pequeño pueblito pesquero empezará la aventura de su vida.',
    },
    {
      id: '2',
      characterName: 'Horicli Yanade',
      imgURL: '/assets/images/horicli.jpeg',
      summary:
        'Esta chica se identifica con este dogma: "Órden es igual a progreso". A diferencia de su revoltosa hermana, Horicli es alguien a quien le gustan las cosas comedidas y detalladas. ',
    },
    {
      id: '3',
      characterName: 'Alsiles',
      imgURL: '/assets/images/alsiles.jpeg',
      summary:
        'Sabio y Maestro son sus mejores descripciones. Un hombre que dedicó su vida a la familia, al combate, la lectura y la cerveza. ',
    },
    {
      id: '4',
      characterName: 'Jaime Yanade',
      imgURL: '/assets/images/jaime.jpeg',
      summary:
        'Has notado que hay personas con presiones tan grandes como las ramitas que ponen los castores en los ríos. Pues, en efecto, este es Jaime.',
    },
    {
      id: '5',
      characterName: 'Ocarina',
      imgURL: '/assets/images/ocarina.jpeg',
      summary:
        'Ocarina es esa persona que está ahí para ti. A veces debería pensar más en ella misma, pero su naturaleza no se lo permite. Aunque claro... no olvidemos que le encanta blasfemar y molestar a sus amigos.',
    },
    {
      id: '6',
      characterName: 'Qjar',
      imgURL: '/assets/images/qjar.jpeg',
      summary:
        'Perteneciente a una raza humanoide, un joven con el objetivo de alcanzar un nivel maestro con la espada, esto lo llevó hasta el punto de ser nómada y unirse a una aventura con su maestro.',
    },
    {
      id: '7',
      characterName: 'Sheyd',
      imgURL: '/assets/images/sheyd.jpeg',
      summary:
        'Hijo de lo desconocido, con un gran futuro por delante, es un muchachito inseguro pero valiente. Alguien a quien le ha tocado vivir cosas que un niño no debería',
    },
    {
      id: '8',
      characterName: 'Marcial',
      imgURL: '/assets/images/marcial.jpeg',
      summary:
        'Todos hemos conocido a un Marcial en nuestras vidas, o tal vez hemos sido uno. La diferencia es que este ser despreciable intenta ser despreciable con dedicación.',
    },
  ];
}
