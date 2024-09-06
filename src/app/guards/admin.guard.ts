import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { UserService } from "../shared/services/user.service";
import { UserRoles } from "../models/user.model";



export const adminGuard: CanActivateFn = () => {
    const userService = inject(UserService);
    return userService.hasRole(UserRoles.admin);
}
