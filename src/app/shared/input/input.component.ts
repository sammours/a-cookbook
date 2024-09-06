import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator } from '@angular/forms';

export class IUserService {
  public addUser() {
    console.log('add user has been called.');
  }
}

class User {
  public id = 0
  public name = '';
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [IUserService]
})
export class InputComponent {
  protected user = new User();

  protected form1 = new FormControl();

  protected fgroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });

  constructor(private userService: IUserService) {
    userService.addUser();

    this.user.name = 'Annabel';
    this.form1.setValue(this.user.name);
  }

  protected onSaveClicked() {
    this.user.name = this.form1.value;
  }
}