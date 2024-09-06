import { Component, inject, Inject, OnDestroy } from '@angular/core';
import { UserModel, UserRoles } from '../../../../models/user.model';
import { catchError, delay, filter, fromEvent, map, Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnDestroy {
  public service = inject(UserService);

  protected result: UserModel[] = [];
  protected testAsync$: Observable<UserModel[]> = of([]);
  protected subscribe: Subscription | undefined;

  protected isLoading = false;

  constructor() {
    this.testAsync$ = this.service.getAll();

    this.isLoading = true;
    this.service.getAll()
      .pipe(
        delay(2000)
      )
      .subscribe(data => {
        this.result = data;
        this.isLoading = false
      });
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }

  addItemToArray() {
    // this.array.push({ username: 'Annabel2', hasAccess: true, role: UserRoles.admin });
  }
}
