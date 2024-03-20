import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [
    './home-page.component.css',
    './styles/main-img-section.component.css',
    './styles/collection-section.component.css',
    './styles/choose-us-section.component.css',
    './styles/work-steps-section.component.css',
  ]
})
export class HomePageComponent {

  collectionItems = [
    {
      itemImg: '../../../assets/home/desktop/image-gran-espresso.png',
      itemName: 'Gran Espresso',
      itemDescription: 'Mistura leve e saborosa com cacau e pimenta preta para uma experiência intensa'
    },
    {
      itemImg: '../../../assets/home/desktop/image-planalto.png',
      itemName: 'Planalto',
      itemDescription: 'Assado escuro brasileiro com corpo rico e aveludado, com notas de frutas e nozes'
    },
    {
      itemImg: '../../../assets/home/desktop/image-piccollo.png',
      itemName: 'Piccollo',
      itemDescription: 'Mistura suave e suave com notas de amêndoa torrada e cereja seca'
    },
    {
      itemImg: '../../../assets/home/desktop/image-danche.png',
      itemName: 'Danche',
      itemDescription: 'Mistura etíope colhida à mão, densamente repleta de notas de frutas vibrantes'
    },
  ]

  benefits = [
    {
      iconSrc: `../../../assets/home/desktop/icon-coffee-bean.svg`,
      benefitName: 'A melhor qualidade',
      description: 'Descubra uma variedade infinita do melhor café artesanal do mundo em cada uma de nossas torrefações.',
      alt: 'Coffee bean icon'
    },
    {
      iconSrc: '../../../assets/home/desktop/icon-gift.svg',
      benefitName: 'Beneficios exclusivos',
      description: 'Ofertas especiais e brindes na assinatura, incluindo 30% de desconto na primeira remessa.',
      alt: 'Gift icon'
    },
    {
      iconSrc: '../../../assets/home/desktop/icon-truck.svg',
      benefitName: 'Frete grátis',
      description: 'Cobrimos os custos e o café é entregue rapidamente. Frescura máxima: garantida.',
      alt: 'Truck icon'
    }
  ]

  workSteps = [
    {
      number: '01',
      stepName: 'Escolha seu café',
      stepDescription: 'Selecione entre nossa variedade em evolução de cafés artesanais. Nossos grãos são de origem ética e pagamos preços justos por eles. Todos os meses há novos cafés em todos os perfis para você experimentar.',
    },
    {
      number: '02',
      stepName: 'Escolha a frequência',
      stepDescription: 'Personalize a frequência do pedido, a quantidade e até mesmo o estilo de torra e o tipo de moagem. Pause, pule ou cancele sua assinatura sem compromisso através do nosso portal online.',
    },
    {
      number: '03',
      stepName: 'Receba e aproveite!',
      stepDescription: 'Enviamos seu pacote em 48 horas, recém torrado. Sente-se e desfrute de cafés premiados de classe mundial, selecionados para proporcionar uma experiência de degustação distinta.',
    },
  ]
}
