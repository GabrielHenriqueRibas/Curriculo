import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
  
export class AdminComponent {
  private userService: UserService
  public usuarios: any[] = [];
  public novoUsuario: any = {};
  public selecionarUsuario: any = {};

  constructor(userService: UserService) {
    this.userService = userService;
  }

  //Inicialização
  ngOnInit(): void {
    this.carregarUsuarios();
  }

  //Carregamento de usuario
  carregarUsuarios(): void {
    this.userService.getUsers().subscribe((dados) => {
      this.usuarios = dados;
    });
  }

  selecionarUsuarios(user: any): void {
    //Cria uma copia
    this.selecionarUsuario = { ...user };
  }

  atualizarUsuario(): void {
    if (this.selecionarUsuario.id) {
      this.userService.updateUser(this.selecionarUsuario).subscribe(() => {
        this.carregarUsuarios();
        this.selecionarUsuario = {};
      });
    }
  }

  excluirUsuario(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.carregarUsuarios();
    });
  }
}
