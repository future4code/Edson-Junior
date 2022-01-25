type Usuario = {
    name: string,
    email: string,
    role: string
}

const usuarios: Usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function retornaAdmin(usuario: Usuario[]) {
    let emailAdmin: string[] = []
    usuario.filter(usuario => {
        if (usuario.role === "admin") {
            emailAdmin.push(usuario.email)
            return emailAdmin
        }
    })
    return emailAdmin
}

console.log(retornaAdmin(usuarios))