export interface UserModel {
    username: string;
    hasAccess: boolean;
    role: UserRoles
}

export enum UserRoles {
    admin = 0,
    supervisor = 1,
    user = 2
}