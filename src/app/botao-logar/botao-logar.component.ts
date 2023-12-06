import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-botao-logar',
  template: `<a routerLink="/login" class="bg-orange-600 text-white py-2 px-4 rounded hover:bg-blue-700">{{ textoBotao }}</a>`,
})
export class BotaoLogarComponent {
  @Input() textoBotao: string = '';
}
