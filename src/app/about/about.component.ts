import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    './styles/about-us-section.component.css',
    './styles/commitment-section.component.css',
    './styles/quality-section.component.css',
    './styles/headquarters-section.component.css'
  ]
})

export class AboutComponent {

  headquarters = [
    {
      img: '../../../assets/about/desktop/illustration-uk.svg',
      location: 'Moju',
      info: `bairros das rochas <br>
             Pará <br>
             46 terceira rua <br>
             +55 91 98480-8753
            `
    },
    {
      img: '../../../assets/about/desktop/illustration-canada.svg',
      location: 'Belém',
      info: `Centro <br>
             Pará <br>
             204 quinta rua <br>
             +55 91 98480-8753
            `
    },
    {
      img: '../../../assets/about/desktop/illustration-australia.svg',
      location: 'Abaetetuba',
      info: `Parque verde <br>
             Pará <br>
             92 oitava rua <br>
             +55 91 98480-8753
            `
    }
  ]
}
