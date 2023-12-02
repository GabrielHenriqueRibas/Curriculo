// formulario.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-formulario-pessoal',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get nome() {
    return this.formulario.get('nome');
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const entidade = {
        nome: this.formulario.value.nome
      };

      this.localStorageService.setItem('entidade', entidade);

      alert('Formulário enviado com sucesso!');
    }
  }
}
