import { UserBusiness } from "../src/business/UserBusiness";
import { IdGenerator } from "../src/services/idGenerator";
import { HashGenerator } from "../src/services/hashGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";
import { stringToUserRole, User, UserRole } from "../src/model/User";

describe("Testing getUserById Business", () => {

    let idGenerator = {} as IdGenerator;
    let hashGenerator = {} as HashGenerator;
    let userDatabase = {} as any;
    let tokenGenerator = {} as TokenGenerator;

    test("Shoud return Invalid credentials when user do not exist", async () => {
        try {
            const getUserById = jest.fn()

            userDatabase = { getUserById }

            const userBusiness = new UserBusiness(
                idGenerator,
                hashGenerator,
                userDatabase,
                tokenGenerator
            )

            await userBusiness.getUserById("id que não existe")

        } catch (error) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Invalid credentials")
        }
    })

    test("Should return mocked values", async () => {
        const getUserById = jest.fn((id: string) => 
            new User(
                "123asd",
                "Michael",
                "jackson@email.com",
                "senha",
                stringToUserRole("NORMAL")
            )
        )
        
        userDatabase = { getUserById }

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        )

        const user = await userBusiness.getUserById("123asd")

        expect(getUserById).toHaveBeenCalledWith("123asd")
        expect(user).toEqual({
            id: "123asd",
            name: "Michael",
            email: "jackson@email.com",
            role: UserRole.NORMAL
        })
    })
})