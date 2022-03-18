import { userBusinessMock } from "./moks/userBusinessMock"
import { UserDataBaseMock } from "./moks/userDataBaseMock"

describe("getUserById", () => {
	// (a)
  const userBusinessMocke = new userBusinessMock(new UserDataBaseMock())
   test("Should catch error when id is not registered", async () => {
    expect.assertions(2)

    try {
      await userBusinessMocke.getUserById("abc")
    } catch (error) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }
  })
    
	// (b)
  test("Should return respective user when id is registered", async () => {

    
    try {
      const getUserById = jest.fn(
        (id: string) => userBusinessMocke.getUserById(id)
      )
        
      const result = await getUserById("id_mock_admin")

      expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        password: "astrodev123",
        role: "ADMIN"
      })
    } catch (error) {
      console.log(error.message)
    }
  })
})