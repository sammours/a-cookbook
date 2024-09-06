import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { UserModel, UserRoles } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe = false;

  userService = inject(UserService);
  router = inject(Router);

  onLoginClicked() {
    const user: UserModel = {
      username: 'annabel', 
      hasAccess: true,
      role: UserRoles.admin
    };
    
    this.userService.setUser(user, this.rememberMe);
    this.router.navigate(['/users']);
  }
}
