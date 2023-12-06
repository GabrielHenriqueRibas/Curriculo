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
  password: string = '';
  private emailValidationService: EmailValidationService;
  private userService: UserService;
  private router: Router

  constructor(emailValidationService: EmailValidationService, userService: UserService, router: Router) {
    this.emailValidationService = emailValidationService;
    this.userService = userService;
    this.router = router;
  }

  async validacao() {
    const validationResponse = await this.emailValidationService.validacaoEmail(this.email);

    if (validationResponse.is_valid_format.text == 'TRUE') {
      alert('E-mail válido. Continuando com o cadastro do usuário.');
      const newUser = { email: this.email, password: this.password };
      await this.userService.addUser(newUser);
      this.router.navigate(['/login'])
    } else {
      alert('E-mail inválido. Não foi possível cadastrar o usuário.');
    }
  }
}
