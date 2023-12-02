import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LoginFormularioComponent } from './login-formulario/login-formulario.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CorpoInicialComponent } from './corpo-inicial/corpo-inicial.component';

const routes: Routes = [
  { path: 'login-formulario', component: LoginFormularioComponent },
  { path: 'inicio', component: CorpoInicialComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
