import { Component } from '@angular/core';
import { EmailValidationService } from '../email-validacao.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-formulario',
  templateUrl: './registrar-formulario.component.html',
})
export class RegistrarFormularioComponent {
  email: string = '';
  senha: string = '';
  private emailValidationService: EmailValidationService;
  private userService: UserService;
  private router: Router

  constructor(emailValidationService: EmailValidationService, userService: UserService, router: Router) {
    this.emailValidationService = emailValidationService;
    this.userService = userService;
    this.router = router;
  }

  addUser(): void {
    let novoUsuario = { email: this.email, senha: this.senha };
    this.userService.addUser(novoUsuario).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
  
  async validacao() {
    const validationResponse = await this.emailValidationService.validacaoEmail(this.email);
  
    if (validationResponse.is_valid_format.text == 'TRUE') {
      alert('E-mail válido. Continuando com o cadastro do usuário.');
      this.addUser();
    } else {
      alert('E-mail inválido. Não foi possível cadastrar o usuário.');
    }
  }
  
}
