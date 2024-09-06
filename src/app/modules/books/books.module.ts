import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';


@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BookListComponent }
    ])
  ]
})
export class BooksModule { }
