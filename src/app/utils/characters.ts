const characters = [
  {
    id: '1',
    characterName: 'Scarlet Yanade',
    imgURL: '/assets/images/scarlet.jpeg',
    summary:
      '¡Un cabello salvaje y rojo se avecina por una esquina! Scarlet Yanade, una chica de un pequeño pueblito pesquero empezará la aventura de su vida.',
    color: '#C2431B',
    fullDescription:
      '¡Un cabello salvaje y rojo se avecina por una esquina! Scarlet Yanade, una chica de un pequeño pueblito pesquero empezará la aventura de su vida. Bestias poderosas, armas místicas y otra serie de elementos fantásticos le esperan a esta inexperta de la aventura.',
    characteristics: 'Alegre, entusiasta y bromista',
  },
  {
    id: '2',
    characterName: 'Horicli Yanade',
    imgURL: '/assets/images/horicli.jpeg',
    summary:
      'Esta chica se identifica con este dogma: "Órden es igual a progreso". A diferencia de su revoltosa hermana, Horicli es alguien a quien le gustan las cosas comedidas y detalladas. ',
    color: '#fc8f0c',
    fullDescription:
      'Esta chica se identifica con este dogma: "orden es igual a progreso". A diferencia de su revoltosa hermana, Horicli es alguien a quien le gustan las cosas comedidas y detalladas. Tal vez esto no sea tan emocionante para una aventura, pero por lo menos hay alguien que usa el cerebro.',
    characteristics: 'Cautelosa, ordenada y diligente',
  },
  {
    id: '3',
    characterName: 'Alsiles',
    imgURL: '/assets/images/alsiles.jpeg',
    summary:
      'Sabio y Maestro son sus mejores descripciones. Un hombre que dedicó su vida a la familia, al combate, la lectura y la cerveza. ',
    color: '#64767A', //'#D4DEE3',
    fullDescription:
      'Sabio y Maestro son sus mejores descripciones. Un hombre que dedicó su vida a la familia, al combate, la lectura y la cerveza. Tal vez este último aspecto lo haya convertido en alguien que ama la ironía y el sarcasmo.',
    characteristics: 'Poderoso, salvaje e inteligente',
  },
  {
    id: '4',
    characterName: 'Jaime Yanade',
    imgURL: '/assets/images/jaime.jpeg',
    summary:
      'Has notado que hay personas con presiones tan grandes como las ramitas que ponen los castores en los ríos. Pues, en efecto, este es Jaime.',
    color: '#5D2B1D', //'#241B13',
    fullDescription:
      'Has notado que hay personas con presiones tan grandes como las ramitas que ponen los castores en los ríos. Pues, en efecto, este es Jaime. Además de su "misión principal", tiene la misión de ser mentor y maestro, algo de lo cual no está muy al corriente. Jaime es alguien alegre, a quien el trabajo le ha absorbido, aunque a veces le cueste aceptarlo. Igualmente, no hay nada que ame más que su familia.',
    characteristics: 'Alegre, ansioso y familiar',
  },
  {
    id: '5',
    characterName: 'Ocarina',
    imgURL: '/assets/images/ocarina.jpeg',
    summary:
      'Ocarina es esa persona que está ahí para ti. A veces debería pensar más en ella misma, pero su naturaleza no se lo permite. Aunque claro... no olvidemos que le encanta blasfemar y molestar a sus amigos.',
    color: '#906241', //'#11120D',
    fullDescription:
      'Ocarina siente que su motivación y su mundo se construyen a través de las relaciones que tiene con sus amigos y familia. Por esta misma razón, la verdad y la rectitud son tan suyas como el frío al Ártico. Por supuesto, siempre tiene en mente cuál es su próximo movimiento y nunca dudará en tomar el camino más difícil y recto, a pesar de que este no le beneficie.',
    characteristics: 'Justa, leal y decisiva.',
  },
  {
    id: '6',
    characterName: 'Qjar',
    imgURL: '/assets/images/qjar.jpeg',
    summary:
      'Perteneciente a una raza humanoide, un joven con el objetivo de alcanzar un nivel maestro con la espada, esto lo llevó hasta el punto de ser nómada y unirse a una aventura con su maestro.',
    color: '#202F54', //'#181712',
    fullDescription:
      'Perteneciente a una raza humanoide, un joven con el objetivo de alcanzar un nivel maestro con la espada, esto lo llevó hasta el punto de ser nómada y unirse a una aventura con su maestro. Qjar es alguien quien tiene bien puestos sus valores, tal como la piel. Es alguien a quien, si llamas amigo, tendrás por siempre de tu lado.',
    characteristics: 'Noble, nervioso y trabajador',
  },
  {
    id: '7',
    characterName: 'Sheyd',
    imgURL: '/assets/images/sheyd.jpeg',
    summary:
      'Hijo de lo desconocido, con un gran futuro por delante, es un muchachito inseguro pero valiente. Alguien a quien le ha tocado vivir cosas que un niño no debería.',
    color: '#7E5950',
    fullDescription:
      'Hijo de lo desconocido, con un gran futuro por delante, es un muchachito inseguro pero valiente. Alguien a quien le ha tocado vivir cosas que un niño no debería. Igualmente, esto no le impide escuchar a los demás. Sheyd ama a sus dos hermanos y considera como su padre a su maestro.',
    characteristics: 'Valiente, disciplinado y callado.',
  },
  {
    id: '8',
    characterName: 'Marcial',
    imgURL: '/assets/images/marcial.jpeg',
    summary:
      'Todos hemos conocido a un Marcial en nuestras vidas, o tal vez hemos sido uno. La diferencia es que este ser despreciable intenta ser despreciable con dedicación.',
    color: '#2C202A',
    fullDescription:
      'Todos hemos conocido a un Marcial en nuestras vidas, o tal vez hemos sido uno. La diferencia es que este ser despreciable intenta ser despreciable con dedicación. Si tuviese la oportunidad de traicionarte, lo hará. A este tipo lo describiría la frase: "No importa lo que hagas ni a quien se lo hagas con tal de subir a la cima".',
    characteristics: 'Maquiavélico, impulsivo y desagradable',
  },
];

export function getCharacter(id: string) {
  return characters.find((character) => character.id == id);
}

export default characters;
