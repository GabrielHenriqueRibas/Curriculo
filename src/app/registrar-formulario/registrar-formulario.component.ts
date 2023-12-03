import { Component } from '@angular/core';
import { EmailValidationService } from '../email-validacao.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registrar-formulario',
  templateUrl: './registrar-formulario.component.html',
})
export class RegistrarFormularioComponent {
  email: string = '';
  password: string = '';

  constructor(
    private emailValidationService: EmailValidationService,
    private userService: UserService
  ) {}

  async submitForm() {
    try {
      const validationResponse = await this.emailValidationService.validateEmail(this.email);
      console.log('Resposta da validação de e-mail:', validationResponse);

      if (validationResponse.is_valid_format.text == 'TRUE') {
        alert('E-mail válido. Continuando com o cadastro do usuário.');

        const newUser = { email: this.email, password: this.password };

        const addUserResponse = await this.userService.addUser(newUser);

        console.log('Usuário cadastrado com sucesso:', addUserResponse);
      } else {
        console.log('E-mail inválido. Não foi possível cadastrar o usuário.');
      }
    } catch (error) {
      console.error('Erro na validação de e-mail ou no cadastro do usuário:', error);
    }
  }
}
