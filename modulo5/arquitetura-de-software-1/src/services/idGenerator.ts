import { v4 } from "uuid"

export class idGenerator {
    generateId(){
        return v4()
    }
}