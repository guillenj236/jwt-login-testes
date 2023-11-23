import { Component, inject } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  loginService = inject(LoginService);

  isAdmin(): boolean {
    return this.loginService.hasPermission('ADMIN');
  }

  isUser(): boolean {
    return this.loginService.hasPermission('USER');
  }
}
