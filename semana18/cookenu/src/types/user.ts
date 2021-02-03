export enum ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type user = {
    id: string,
    email: string,
    name: string,
    password: string,
    role: ROLES
}