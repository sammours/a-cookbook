import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { InputComponent } from './shared/input/input.component';
import { UserService } from './shared/services/user.service';
import { UserModel } from './models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, InputComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'cook-book';

  isDarkMode = false;

  protected router = inject(Router);
  protected userService = inject(UserService);

  constructor(protected readonly router1: Router) {
  }

  public navigateToUsers() {
    this.router.navigate(['/users']);
  }
}
