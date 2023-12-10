import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormularioComponent } from './login-formulario/login-formulario.component';
import { CorpoInicialComponent } from './corpo-inicial/corpo-inicial.component';
import { RegistrarFormularioComponent } from './registrar-formulario/registrar-formulario.component';
import { FormularioPessoalComponent } from './formulario-pessoal/formulario.component';
import { AdminComponent } from './admin-componente/admin.component';

const routes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: 'formulario', component: FormularioPessoalComponent },
    { path: 'registrar', component: RegistrarFormularioComponent },
    { path: 'login', component: LoginFormularioComponent },
    { path: "", component: CorpoInicialComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
