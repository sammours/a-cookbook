import { BookModel } from "../../../models/book.model";
import { ValidatorProperty } from "./validator-property.model";

export class BookValidator {
  private book = new BookModel();

  public isValid = true;
  public properties: { [key: string]: ValidatorProperty } = {};
  public errors: string[] = [];

  constructor(book: BookModel) {
    this.book = book;
    this.properties['title'] = new ValidatorProperty(true, '');
    this.properties['isbn'] = new ValidatorProperty(true, '');
    this.properties['id'] = new ValidatorProperty(true, '');
  }

  validate() {
    this.reset();
    if (this.book.title === '') {
      this.isValid = false;
      const message = 'Title is missing';
      this.errors.push(message);
      this.properties['title'].isValid= false;
      this.properties['title'].error= message;
    }

    if (this.book.id === 0) {
      this.isValid = false;
      const message = 'Id is missing';
      this.errors.push(message);
      this.properties['id'].isValid= false;
      this.properties['id'].error= message;
    }

    if (this.book.isbn === '') {
      this.isValid = false;
      const message = 'Isbn is missing';
      this.errors.push(message);
      this.properties['isbn'].isValid= false;
      this.properties['isbn'].error= message;
    }

    return true;
  }

  private reset() {
    this.errors = [];
    this.properties['title'].isValid = false;
    this.properties['isbn'].isValid = false;
    this.properties['id'].isValid = false;
    this.properties['title'].error = '';
    this.properties['isbn'].error = '';
    this.properties['id'].error = '';
  }
}
