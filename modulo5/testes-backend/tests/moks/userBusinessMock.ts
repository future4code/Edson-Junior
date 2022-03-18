import { CustomError } from "../../src/errors/CustomError";
import { UserDataBaseMock } from "./userDataBaseMock";

export class userBusinessMock {


    private userData: UserDataBaseMock
    constructor(userDataImplementation: UserDataBaseMock) {
        this.userData = userDataImplementation
    }

    public async getUserById(id: string) {
        const user = await this.userData.getUserById(id);
    
        if (!user) {
          throw new CustomError(404, "User not found");
        }
    
        return {
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          role: user.getRole(),
        };
      }
}

