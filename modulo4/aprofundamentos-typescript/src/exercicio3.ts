// Exercício 3

// Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.

// Observe o seguinte array de posts:

// ```jsx
// const posts = [
//   {
//     autor: "Alvo Dumbledore",
//     texto: "Não vale a pena viver sonhando e se esquecer de viver"
//   },
//   {
//     autor: "Severo Snape",
//     texto: "Menos 10 pontos para Grifinória!"
//   },
//   {
//     autor: "Hermione Granger",
//     texto: "É levi-ô-sa, não levio-sá!"
//   },
//   {
//     autor: "Dobby",
//     texto: "Dobby é um elfo livre!"
//   },
//   {
//     autor: "Lord Voldemort",
//     texto: "Avada Kedavra!"
//   }
// ]
// ```

// a) Copie o código acima para um arquivo .ts depois:

// - crie um *type* para representar um post;
// - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.
// - Dica
    
//     Lembre-se da variável de tipo do typescript, que é uma descrição estrutural do comportamento de um objeto. Ou seja, o type define as propriedades e tipos que o objeto deve ter.
    
//     ```tsx
//     type person = {
//     name: string,
//     age: number
//     }
    
//     const astrodev: person = {
//     name: "Astrodev",
//     age: 30
//     }
//     ```
    

// b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:

// jsx
// function buscarPostsPorAutor(posts, autorInformado) {
//   return posts.filter(
//     (post) => {
//       return post.autor === autorInformado
//     }
//   )
// }

type Post = {
    autor:string,
    texto:string
}

const post: Post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
      },
      {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
      },
      {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
      },
      {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
      },
      {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
      }
]

function buscarFiltroPorAutor(posts: Post[], autorInformado: string): Post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }