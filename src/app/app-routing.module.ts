import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LoginFormularioComponent } from './login-formulario/login-formulario.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  { path: 'cabecalho', component: CabecalhoComponent },
  { path: 'login-formulario', component: LoginFormularioComponent },
  { path: 'rodape', component: RodapeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
