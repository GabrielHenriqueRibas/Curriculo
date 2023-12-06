import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formulario-pessoal',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioPessoalComponent {
  formulario: FormGroup;
  entidade: any

  constructor( private formBuilder: FormBuilder, private localStorageService: LocalStorageService, private http: HttpClient, private datePipe: DatePipe ) {
      this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      estadoCivil : ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      situacaoEscolar: ['', [Validators.required]],
      nomeInstituicao: ['', [Validators.required]],
      dataInicio: ['', [Validators.required]],
      dataConclusao: ['', [Validators.required]],
      })
      this.formulario.get('cep')?.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(cep => this.buscarCep(cep))
      )
      .subscribe(response => {
        this.formulario.patchValue({
          cidade: response.localidade,
          bairro: response.bairro,
          rua: response.logradouro,
        });
      });
  }

  get cep() {
    return this.formulario.get('cep');
  }

  get nome() {
    return this.formulario.get('nome');
  }

  buscarCep(cep: string): Observable<any> {
    const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get(viaCepUrl);
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const entidade = {
        nome: this.formulario.value.nome,
        estadoCivil : this.formulario.value.estadoCivil,
        dataNascimento: this.datePipe.transform(this.formulario.value.dataNascimento, 'dd/MM/yyyy'),
        email: this.formulario.value.email,
        telefone: this.formulario.value.telefone,
        cep: this.formulario.value.cep,
        cidade: this.formulario.value.cidade,
        bairro: this.formulario.value.bairro,
        rua: this.formulario.value.rua,
        numero: this.formulario.value.numero,
        situacaoEscolar: this.formulario.value.situacaoEscolar,
        nomeInstituicao: this.formulario.value.nomeInstituicao,
        dataInicio: this.formulario.value.dataInicio,
        dataConclusao: this.formulario.value.dataConclusao
      };

      this.localStorageService.setItem('entidade', entidade);
      this.entidade = entidade

      alert('Formulário enviado com sucesso!');
    }
  }
}
