import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})

  
//Uso Property Binding-> armazenar valor da URL para usar la em cabecalho.component.html
//Uso Interpolation -> armazenar valores das strings para usar em cabecalho.component.html
export class CabecalhoComponent {
  imageUrl = "../../assets/img/logo.png";
  modelo = "MODELO";
  solucoes = "SOLUÇÕES";
  contato = "CONTATO";
}



