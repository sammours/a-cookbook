import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { catchError, map } from 'rxjs';

Injectable();
export class UserService {
  protected http = inject(HttpClient);

  public getAll() {
    return this.http
      .get('assets/mockdata/user.mock.json')
      .pipe(
        map((data) => {
          return data as UserModel[];
        }),
        catchError((x) => {
          console.log('An error occur');
          return [];
        })
      );
  }
}
