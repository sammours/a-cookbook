import { Routes } from '@angular/router';
import { loginGuard, loginPageGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/users' },
    { path: 'login', component: LoginComponent, canActivate: [loginPageGuard] },
    { 
        path: 'users', 
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
        canActivate: [loginGuard]
    },
    { 
        path: 'books', 
        loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule),
    },
];
