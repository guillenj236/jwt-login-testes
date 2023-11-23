import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  
  login: Login = new Login();
  user = new User();


  roteador = inject(Router);
  loginService = inject(LoginService);

  constructor() {
    this.loginService.removerToken();
  }

  logar() {
    this.loginService.logar(this.login).subscribe({
      next: user => {
        this.user = user;
        this.loginService.addToken(user.token);
        this.roteador.navigate(['admin/produtos']);
      },
      error: erro => {
        alert('login ou senha incorretos');
        console.error(erro);
      }
    });


  }

}
