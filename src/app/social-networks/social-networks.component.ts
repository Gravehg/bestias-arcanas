import { Component } from '@angular/core';
import { SocialNetworkModel } from '../models/SocialNetworkModel';

@Component({
  selector: 'app-social-networks',
  standalone: true,
  imports: [],
  templateUrl: './social-networks.component.html',
  styleUrl: './social-networks.component.css',
})
export class SocialNetworksComponent {
  socialNetworks: SocialNetworkModel[] = [
    {
      id: 0,
      name: 'Facebook',
      imgUrl: '/assets/images/facebook-round-color-icon.png',
      description:
        'Síguenos en Facebook para ver más noticias y estar al tanto de todo lo relacionado con esta maravillosa historia.',
      link: 'https://www.facebook.com/profile.php?id=61562863934052',
    },
    {
      id: 1,
      name: 'Instagram',
      imgUrl: '/assets/images/ig-instagram-icon.png',
      description:
        'Síguenos en Instagram para encontrar aún más contenido fascinante sobre este mundo con una dósis de humor.',
      link: 'https://www.instagram.com/scarlet_la_saga/',
    },
  ];
}
