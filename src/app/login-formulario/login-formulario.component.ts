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

  constructor(userService : UserService, router : Router) {
    this.userService = userService;
    this.router = router;
  }

  public realizarLogin(): void {
    if (this.email === "adm" && this.senha === "adm") {
      this.router.navigate(['/admin']);
    } else {
      this.validarLogin();
    }
  }

  private validarLogin(): void {
    this.userService.getUsers().subscribe((users) => {
      let usuario = users.find((user) => user.email === this.email && user.senha === this.senha);
        if (usuario) {
          this.router.navigate(['/formulario']);
        }else {
          alert('Usuário inválido');
          this.router.navigate(['/login']);
        }
      }
    );
  }
  
  
}
