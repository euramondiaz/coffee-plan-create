import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: [
    './plan.component.css',
    './styles/main-img-section.component.css',
    './styles/steps-section.component.css',
    './styles/order-section.component.css',
    './styles/order-summary-section.component.css',
    './styles/modal.component.css'
  ]
})
export class PlanComponent{

  validPlan = false;
  howYouDrinkYourCoffee = '';
  typeOfCoffee = '';
  howMuch = '';
  grind = '';
  howOften = '';

  howYouDrinkYourCoffeeContent = '';

  steps = [
    {
      number: '01',
      stepName: 'Escolha seu café',
      stepDescription: 'Selecione entre nossa variedade em evolução de cafés artesanais. Nossos grãos são de origem ética e pagamos preços justos por eles. Todos os meses há novos cafés em todos os perfis para você experimentar.'
    },
    {
      number: '02',
      stepName: 'Personalize',
      stepDescription: 'Personalize a frequência do pedido, a quantidade e até mesmo o estilo de torra e o tipo de moagem. Pause, pule ou cancele sua assinatura sem compromisso através do nosso portal online.',
    },
    {
      number: '03',
      stepName: 'Receba e aproveite!',
      stepDescription: 'Enviamos seu pacote em 48 horas, recém torrado. Sente-se e desfrute de cafés premiados de classe mundial, selecionados para proporcionar uma experiência de degustação distinta.',
    },
  ];

  options = [
    {
      id: 'preferences',
      question: 'Como você toma seu café?',
      innerOptions: [
        {
          optionName: 'Cápsula',
          optionDescription: 'Compatível com sistemas Nespresso e cervejarias similares'
        },
        {
          optionName: 'Filtro',
          optionDescription: 'Para métodos de vazamento ou gotejamento como Aeropress, Chemex e V60'
        },
        {
          optionName: 'Expresso',
          optionDescription: 'Grãos densos e finamente moídos para uma experiência intensa e saborosa'
        }
      ]
    },
    {
      id: 'beanType',
      question: 'Que tipo de café?',
      innerOptions: [
        {
          optionName: 'Grão único',
          optionDescription: 'Café distinto e de alta qualidade, proveniente de uma fazenda familiar específica'
        },
        {
          optionName: 'Decaf',
          optionDescription: 'Assim como o café normal, exceto que a cafeína foi removida'
        },
        {
          optionName: 'Blended',
          optionDescription: 'Combinação de dois ou três grãos torrados escuros de cafés orgânicos'
        }
      ]
    },
    {
      id: 'quantity',
      question: 'Qual a quantia você gostaria??',
      innerOptions: [
        {
          optionName: '250g',
          optionDescription: 'Perfeito para quem bebe sozinho. Rende cerca de 12 xícaras deliciosas.'
        },
        {
          optionName: '500g',
          optionDescription: 'Opção perfeita para um casal. Rende cerca de 40 xícaras deliciosas.'
        },
        {
          optionName: '1000g',
          optionDescription: 'Perfeito para escritórios e eventos. Rende cerca de 90 xícaras deliciosas.'
        }
      ]
    },
    {
      id: 'grindOption',
      question: 'Quer que os trituremos?',
      innerOptions: [
        {
          optionName: 'inteiro',
          optionDescription: 'A melhor escolha se você valoriza a experiência sensorial completa'
        },
        {
          optionName: 'Filtro',
          optionDescription: 'Para métodos de gotejamento ou derramamento de café, como V60 ou Aeropress'
        },
        {
          optionName: 'Cafetiére',
          optionDescription: 'Grãos moídos especialmente adequados para café francês'
        }
      ]
    },
    {
      id: 'deliveries',
      question: 'Com que frequência devemos entregar?',
      innerOptions: [
        {
          optionName: 'Toda semana',
          optionDescription: 'R$14,00 por remessa. Inclui frete grátis de primeira classe.'
        },
        {
          optionName: 'A cada 2 semanas',
          optionDescription: 'R$17,25 por remessa. Inclui frete prioritário gratuito.'
        },
        {
          optionName: 'Todo mês',
          optionDescription: 'R$22,50 por remessa. Inclui frete prioritário gratuito.'
        }
      ]
    },
  ];

  indexList = [
    {
      id: 'preferences',
      number: '01',
      name: 'Preferencias'
    },
    {
      id: 'beanType',
      number: '02',
      name: 'Modo'
    },
    {
      id: 'quantity',
      number: '03',
      name: 'Quantidade'
    },
    {
      id: 'grindOption',
      number: '04',
      name: 'Tipo'
    },
    {
      id: 'deliveries',
      number: '05',
      name: 'Entrega'
    },
  ]

  @ViewChild('listOfOptions') listOfOptions!: ElementRef<HTMLUListElement>;

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  addActiveClass(event: HTMLLIElement){
    const li = event;
    const ul = event.parentNode;
    const currentActiveLi = ul?.querySelector('.active');
    if(currentActiveLi === li){
      li.classList.remove('active')
    } else {
      currentActiveLi?.classList.remove('active')
      li.classList.add('active')
    }
  }

  openDropDown(event: HTMLDivElement){
    const optionPicked = event;
    const ulPicked = event.nextElementSibling as HTMLUListElement;
    const ulPickedChildrenId = ulPicked.children[0].id;

    if(ulPickedChildrenId === 'grindOption' && this.howYouDrinkYourCoffee === 'Capsule'){
      return;
    }

    optionPicked.classList.toggle('openInnerList');
    ulPicked.classList.toggle('openedList');
  }

  selectOption(event: HTMLLIElement, optionName: string, indexList: HTMLUListElement){
    const li = event;
    const listOfIndex = indexList;
    const grindQuestion = li.parentNode?.parentNode?.parentNode?.children[3].firstChild as HTMLDivElement;

    if(li.id === 'preferences'){
      this.howYouDrinkYourCoffee === optionName ? this.howYouDrinkYourCoffee = '' : this.howYouDrinkYourCoffee = optionName;

      if(this.howYouDrinkYourCoffee !== ''){
        listOfIndex.querySelector('.preferences')?.classList.add('completedOption');
      } else {
        listOfIndex.querySelector('.preferences')?.classList.remove('completedOption');
      }

      if(this.howYouDrinkYourCoffee === 'Capsule'){
        listOfIndex.querySelector('.grindOption')?.classList.add('disabled_index');
        grindQuestion.classList.add('disabled_option');
      } else {
        listOfIndex.querySelector('.grindOption')?.classList.remove('disabled_index');
        grindQuestion.classList.remove('disabled_option');
      }
    }

    if(li.id === 'beanType'){
      this.typeOfCoffee === optionName ? this.typeOfCoffee = '' : this.typeOfCoffee = optionName;

      if(this.typeOfCoffee !== ''){
        listOfIndex.querySelector('.beanType')?.classList.add('completedOption')
      } else {
        listOfIndex.querySelector('.beanType')?.classList.remove('completedOption')
      }
    }

    if(li.id === 'quantity'){
      this.howMuch === optionName ? this.howMuch = '' : this.howMuch = optionName;

      if(this.howMuch !== ''){
        listOfIndex.querySelector('.quantity')?.classList.add('completedOption')
      } else {
        listOfIndex.querySelector('.quantity')?.classList.remove('completedOption')
      }
    }

    if(li.id === 'grindOption'){
      this.grind === optionName ? this.grind = '' : this.grind = optionName;

      if(this.grind !== ''){
        listOfIndex.querySelector('.grindOption')?.classList.add('completedOption')
      } else {
        listOfIndex.querySelector('.grindOption')?.classList.remove('completedOption')
      }


    }

    if(li.id === 'deliveries'){
      this.howOften === optionName ? this.howOften = '' : this.howOften = optionName;

      if(this.howOften !== ''){
        listOfIndex.querySelector('.deliveries')?.classList.add('completedOption')
      } else {
        listOfIndex.querySelector('.deliveries')?.classList.remove('completedOption')
      }
    }

    this.validatePlanCreation();
  }

  validatePlanCreation(){
    if(this.howYouDrinkYourCoffee === 'Capsule' && this.typeOfCoffee !== '' && this.howMuch !== '' && this.howOften !== '') {
      this.validPlan = true;
    } else if((this.howYouDrinkYourCoffee !== 'Capsule' && this.howYouDrinkYourCoffee !== '') && this.typeOfCoffee !== '' && this.howMuch !== '' && this.howMuch !== '' && this.grind !== '' && this.howOften !== ''){
      this.validPlan = true;
    } else {
      this.validPlan = false;
    }
  }

  createPlan(){
    this.modal.nativeElement.showModal();
  }

  closeModal(){
    this.modal.nativeElement.close();
  }

  howYouDrinkYourCoffeeText(){
    return this.howYouDrinkYourCoffee !== '' ? this.howYouDrinkYourCoffee : '_____';
  }

  typeOfCoffeeText(){
    return this.typeOfCoffee !== '' ? this.typeOfCoffee : '_____';
  }

  howMuchText(){
    return this.howMuch !== '' ? this.howMuch : '_____';
  }

  grindText(){
    return this.grind !== '' ? this.grind : '_____';
  }

  howOftenText(){
    return this.howOften !== '' ? this.howOften : '_____';
  }
}
