import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-botao-logar',
  template: `<a (click)="event()" routerLink="/login" class="block bg-orange-600 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700 sm:inline-block"> {{ textoBotao }} </a>`,
})
export class BotaoLogarComponent {
  @Input() textoBotao: string = '';
  @Output() botaoClicado = new EventEmitter<string>();

  event() {
    this.botaoClicado.emit();
  }
}
