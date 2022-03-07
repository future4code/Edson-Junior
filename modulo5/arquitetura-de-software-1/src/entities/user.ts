export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    private role: USER_ROLES;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        role: USER_ROLES,
    ) {
        this.id = id,
        this.email = email,
        this.name = name,
        this.password = password,
        this.role = role
    }

    getId(): string{
        return this.id
    }
    getEmail(): string{
        return this.email
    }
    getName(): string{
        return this.name
    }
    getPassword(): string{
        return this.password
    }
    getRole(): string{
        return this.role
    }
}