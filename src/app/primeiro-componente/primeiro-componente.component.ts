import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
<<<<<<< Updated upstream:src/app/primeiro-componente/primeiro-componente.component.ts
export class PrimeiroComponenteComponent {
=======
>>>>>>> Stashed changes:src/app/cabecalho/cabecalho.component.ts

  
//Uso Property Binding-> armazenar valor da URL para usar la em cabecalho.component.html
//Uso Interpolation -> armazenar valores das strings para usar em cabecalho.component.html
export class CabecalhoComponent {
  imageUrl = "../../assets/img/logo.png";
  modelo = "MODELO";
  solucoes = "SOLUÇÕES";
  contato = "CONTATO";
}



