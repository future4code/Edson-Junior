import { HashManager } from "../services/HashManager"
export function ex1() {
    const plainText = "Abobrinha"

    const hash = new HashManager().generateHash(plainText)

    const hashCompare = new HashManager().compareHash(plainText, hash)

    console.log("hash", hash)
    console.log("compare", hashCompare)
}