import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho-formulario',
  template: '<div class="bg-blue-950 p-8"> <img src="../../assets/img/logo.png" alt="LOGO" class="w-28 p-4"> <h1 class="text-4xl font-bold mb-4 text-center text-white">{{ texto }}</h1> <div class="flex justify-center mt-8"><img src="../../assets/img/STATUS/{{ linkPessoal }}" alt="{{ pessoal }}" class="w-24 h-24 mr-40"><img src="../../assets/img/STATUS/{{ linkExperiencia }}" alt="{{ experiencia }}" class="w-24 h-24"><img src="../../assets/img/STATUS/{{ linkFormacao }}" alt="{{ formacao }}" class="w-24 h-24 ml-40"></div> </div>'
})
export class CabecalhoFormularioComponent {
  @Input() texto: string = '';
  @Input() linkPessoal: string = '';
  @Input() pessoal: string = '';
  @Input() linkExperiencia: string = '';
  @Input() experiencia: string = '';
  @Input() linkFormacao: string = '';
  @Input() formacao: string = '';

}
