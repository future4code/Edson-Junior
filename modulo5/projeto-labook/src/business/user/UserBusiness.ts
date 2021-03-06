import User from "../../model/User"
import { Authenticator } from "../../services/Authenticator"
import { HashManager } from "../../services/HashManager"
import { IdGenerator } from "../../services/IdGenerator"
import { UserRepository } from "./UserRepository"

export type SignupInputDTO = {
    name: string,
    email: string,
    password: string
}

export default class UserBusiness{
    private userData:UserRepository
    private idGenerator:IdGenerator
    private hashManager:HashManager
    private authenticator:Authenticator
    constructor(userDataImplementation:UserRepository){
        this.userData = userDataImplementation
        this.idGenerator = new IdGenerator()
        this.hashManager = new HashManager()
        this.authenticator = new Authenticator()
    }

    signup = async (input: SignupInputDTO) => {
        const { name, email, password } = input
        
        if(!email || !name || !password){
            throw new Error("Campos inválidos")
        }

        const registeredUser = await this.userData.findByEmail(email)
        if(registeredUser){
            throw new Error ("Email já cadastrado")
        }

    
        const id = this.idGenerator.generateId()

        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )


        await this.userData.insert(user)
  
        const token = this.authenticator.generateToken({id})
        return token
    }

}