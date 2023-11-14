import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//Importando componentes
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LoginFormularioComponent } from './login-formulario/login-formulario.component';
import { CadastroFormularioComponent } from './cadastro-formulario/cadastro-formulario.component';
import { CorpoInicialComponent } from './corpo-inicial/corpo-inicial.component';
import { BotaoLogarComponent } from './botao-logar/botao-logar.component';


//Mapear componentes à rotas no módulo de rotas.
@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CabecalhoComponent,
    LoginFormularioComponent,
    CadastroFormularioComponent,
    CorpoInicialComponent,
    BotaoLogarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
