import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.css']
})
export class LoginFormularioComponent {
  email: string = '';
  senha: string = '';
  userService: UserService
  router: Router

  constructor( userService : UserService, router : Router) {
    this.userService = userService;
    this.router = router
  }

  public verificacao() {
    this.userService.getUsers().subscribe(
      (result) => {
        if (result) {
          this.router.navigate(['/formulario'])
        } else {
          console.log('Usuário inválido');
        }
      },
      (error) => {
        console.error('Erro na verificação do usuário:', error);
      }
    );
  }
}
