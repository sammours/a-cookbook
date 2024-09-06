import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { UserPreviewComponent } from './pages/user-preview/user-preview.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { userPreviewGuard } from './deactivate/user-preview-deactivate.guard';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UserPreviewComponent, UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent, pathMatch: 'full' },
      { path: ':id', component: UserPreviewComponent, canDeactivate: [userPreviewGuard] }
    ])
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }