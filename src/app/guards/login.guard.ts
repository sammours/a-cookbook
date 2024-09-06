import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { map, of } from "rxjs";
import { UserService } from "../shared/services/user.service";


// export const loginGuard: CanActivateFn = () => {
//     const user$ = of({ username: 'annabel', hasAccess: true});

//     const existingUser = localStorage.getItem('user');
//     if (existingUser != null) {
//         return true;
//     }

//     return user$.pipe(
//         map(user => {
//             localStorage.setItem('user', JSON.stringify(user));
//             return true;
//         })
//     );
// }

export const loginGuard: CanActivateFn = () => {
    const userService = inject(UserService);

    return userService.isLoggedIn();
}

export const loginPageGuard: CanActivateFn = () => {
    const userService = inject(UserService);

    return !userService.isLoggedIn();
}