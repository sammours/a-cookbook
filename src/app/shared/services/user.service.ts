import { UserModel, UserRoles } from "../../models/user.model";

export class UserService {
    sessionStorageKey = 'user';
    private shouldSaveInLocalStorage = false;

    public getUser() {
        return this.getUserFromStorage();
    }

    public setUser(user: UserModel, shouldSaveInLocalStorage = false) {
        this.shouldSaveInLocalStorage = shouldSaveInLocalStorage;

        if (this.shouldSaveInLocalStorage) {
            localStorage.setItem(this.sessionStorageKey, JSON.stringify(user));
        } else {
            sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(user));
        }
    }

    public isLoggedIn(): boolean {
        return this.getUserFromStorage() != null;
    }

    public hasRole(role: UserRoles) {
        const user = this.getUserFromStorage();

        return user != null ? user.role === role : false;
    }

    private getUserFromStorage() {
        let userString;
        if (this.shouldSaveInLocalStorage) {
            userString = localStorage.getItem(this.sessionStorageKey);
        } else {
            userString = sessionStorage.getItem(this.sessionStorageKey);
        }

        if (userString != null) {
            return JSON.parse(userString) as UserModel;
        }
        
        return null;
    }
}