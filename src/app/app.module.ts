import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormularioComponent } from './login-formulario/login-formulario.component';
import { CadastroFormularioComponent } from './cadastro-formulario/cadastro-formulario.component';
import { CorpoInicialComponent } from './corpo-inicial/corpo-inicial.component';
import { BotaoLogarComponent } from './botao-logar/botao-logar.component';
import { FormularioPessoalComponent } from './formulario-pessoal/formulario.component';
import { CabecalhoFormularioComponent } from './cabecalho-formulario/cabecalho-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarFormularioComponent } from './registrar-formulario/registrar-formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormularioComponent,
    CadastroFormularioComponent,
    CorpoInicialComponent,
    BotaoLogarComponent,
    FormularioPessoalComponent,
    CabecalhoFormularioComponent,
    RegistrarFormularioComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
