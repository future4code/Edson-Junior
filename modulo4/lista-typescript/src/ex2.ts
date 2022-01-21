
function retornaTipoDaVariavel(vari: any) {
    switch (typeof vari) {
        case "number":
            console.log("number")
            break
        case "string":
            console.log("string")
            break
        case "boolean":
            console.log("boolean")
            break
        case "symbol":
            console.log("symbol")
            break
        case "object":
            console.log("object")
            break
        case "undefined":
            console.log("undefined")
            break
        case "function":
            console.log("function")
            break
    }
}

retornaTipoDaVariavel(6)