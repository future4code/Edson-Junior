import { UserDatabase } from "../data/userDatabase";
import { HashManager } from "../services/hashManager";
import { idGenerator } from "../services/idGenerator";
import { tokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {

    async createUser(user: any) {
        try {
            if (!user.name || !user.email || !user.password || !user.role) {
                throw new Error("Please fill all the fields")
            }
            if(user.email.indexOf("@") === -1){
                throw new Error("Invalid Email");
            }

            if(user.password.length < 6){
                throw new Error("Password must have at least 6 characters");
            }

            const id = new idGenerator().generateId()

            const hashPassword = new HashManager().generateHash(user.password)

            await new UserDatabase().createUser(id, user.email, user.name, hashPassword, user.role)

            const token = new tokenGenerator().tokenGenerate(id, user.role)

            return token
        } catch (error: any) {
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
    }

    async getUserByEmail(user: any) {
        const userFromDB = await new UserDatabase().getUserByEmail(user.email)

        const hashCompare = new HashManager().compareHash(user.password, userFromDB.password)

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        const acessToken = new tokenGenerator().tokenGenerate(userFromDB.id, userFromDB.role)

        return acessToken
    }

    async get(token: string) {
        new tokenGenerator().getData(token)

        return await new UserDatabase().get()
    }

    async deleteUser(input: { id: string, token: string }) {
        const token = new tokenGenerator().getData(input.token)

        if (token?.role !== "ADMIN") {
            throw new Error("Only admin user can delete other users")
        }

        return await new UserDatabase().deleteUser(input.id)
    }
}