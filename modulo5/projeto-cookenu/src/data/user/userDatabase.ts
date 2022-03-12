import { User } from "../../entities/users/users";
import { HashManager } from "../../services/HashManager";
import { BaseDatabase } from "../BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private static tableName = "User"

    createUser = (input: User) => BaseDatabase
        .connection(UserDatabase.tableName).insert({
            id: input.getId(),
            name: input.getName(),
            email: input.getEmail(),
            role: input.getRole(),
            password: input.getPassword(),
        })

    getUserByEmail = (email: string) => BaseDatabase
        .connection(UserDatabase.tableName)
        .where("email", email)

    getUserById = (id: string) => BaseDatabase
        .connection(UserDatabase.tableName)
        .where("id", id)

    deleteUser = (id: string) => BaseDatabase
        .connection(UserDatabase.tableName)
        .delete()
        .where("id", id)

    changePasswordByEmail = (email: string) => BaseDatabase
        .connection(UserDatabase.tableName)
        .update("password", Math.random().toString())
        .where("email", email)

    changePassword = (id: string, password: string) => BaseDatabase
        .connection(UserDatabase.tableName)
        .update("password", password)
        .where("id", id)



}