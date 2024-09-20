import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isValidIsbn } from '../../validators/isbn.validator';
import { BookModel } from '../../../../models/book.model';
import { BookValidator } from '../../validators/book.validator';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  protected book = new BookModel();

  protected formGroup = new FormGroup({
    isbn: new FormControl('', [isValidIsbn()])
  });

  protected validator = new BookValidator(this.book);

  constructor() {
    this.validator.validate();
  }

  protected onChange() {
    this.validator.validate();
  }
}
