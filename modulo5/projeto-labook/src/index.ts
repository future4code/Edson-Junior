import { app } from "./app"
import UserControler from "./controller/user/UserController"

const userControler = new UserControler()

app.post("/user/signup", userControler.signup)

// app.post('/users/login', async (req: Request, res: Response) => {
//    try {
//       let message = "Success!"

//       const { email, password } = req.body

//       if (!email || !password) {
//          res.statusCode = 406
//          message = '"email" and "password" must be provided'
//          throw new Error(message)
//       }

//       const queryResult: any = await connection("labook_users")
//          .select("*")
//          .where({ email })

//       if (!queryResult[0]) {
//          res.statusCode = 401
//          message = "Invalid credentials"
//          throw new Error(message)
//       }

//       const user: user = {
//          id: queryResult[0].id,
//          name: queryResult[0].name,
//          email: queryResult[0].email,
//          password: queryResult[0].password
//       }

//       const passwordIsCorrect: boolean = await compare(password, user.password)

//       if (!passwordIsCorrect) {
//          res.statusCode = 401
//          message = "Invalid credentials"
//          throw new Error(message)
//       }

//       const token: string = generateToken({
//          id: user.id
//       })

//       res.status(200).send({ message, token })

//    } catch (error) {
//       let message = error.sqlMessage || error.message
//       res.statusCode = 400

//       res.send({ message })
//    }
// })

// app.post('/posts/create', async (req: Request, res: Response) => {
//    try {
//       let message = "Success!"

//       const { photo, description, type } = req.body

//       const token: string = req.headers.authorization as string

//       const tokenData: authenticationData = getTokenData(token)

//       const id: string = generateId()

//       await connection("labook_posts")
//          .insert({
//             id,
//             photo,
//             description,
//             type,
//             author_id: tokenData.id
//          })

//       res.status(201).send({ message })

//    } catch (error) {
//       let message = error.sqlMessage || error.message
//       res.statusCode = 400

//       res.send({ message })
//    }
// })

// app.get('/posts/:id', async (req: Request, res: Response) => {
//    try {
//       let message = "Success!"

//       const { id } = req.params

//       const queryResult: any = await connection("labook_posts")
//          .select("*")
//          .where({ id })

//       if (!queryResult[0]) {
//          res.statusCode = 404
//          message = "Post not found"
//          throw new Error(message)
//       }

//       const post: post = {
//          id: queryResult[0].id,
//          photo: queryResult[0].photo,
//          description: queryResult[0].description,
//          type: queryResult[0].type,
//          createdAt: queryResult[0].created_at,
//          authorId: queryResult[0].au   thor_id,
//       }

//       res.status(200).send({ message, post })

//    } catch (error) {
//       let message = error.sqlMessage || error.message
//       res.statusCode = 400

//       res.send({ message })
//    }
// })


