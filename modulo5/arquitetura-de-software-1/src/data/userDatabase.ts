import { User, USER_ROLES } from "../entities/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private static tableName = "User_Arq"

    async createUser(
        id: string,
        email: string,
        name: string,
        password: string,
        role: USER_ROLES
    ): Promise<void> {
        try {
            await BaseDatabase.connection(UserDatabase.tableName)
                .insert({
                    id: id,
                    email: email,
                    name: name,
                    password: password,
                    role: role
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getUserByEmail(email: string): Promise<any> {
        try {
            const result = await BaseDatabase.connection(UserDatabase.tableName)
                .select("*")
                .where({ email });
            if (!result[0]) {
                throw new Error("Usuário não encontrado");
            }
            return result[0];
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async get(): Promise<any> {
        try {
            const users: any = []

            const result = await BaseDatabase.connection(UserDatabase.tableName)
                .select("*")

            for (let user of result) {
                users.push(user)
            }

            return users;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async deleteUser(
        id: string
    ): Promise<void> {
        try {
            await BaseDatabase.connection(UserDatabase.tableName)
                .where({ id })
                .delete()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
          }
    }

} 