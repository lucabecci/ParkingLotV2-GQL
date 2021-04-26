import User from "../../models/User";
import { Arg, Mutation } from "type-graphql";
import { RegisterInput } from "./utils-register/RegisterInput";
import bcrypt from 'bcryptjs'

class RegisterResponse {
    status: boolean
    message: string | null
    user: null | any
}

export class RegisterResolver {
    @Mutation(() => User)
    async Register(
        @Arg("data"){username, email, password, confirmPassword}: RegisterInput
    ): Promise<RegisterResponse> {
        if(password != confirmPassword) {
            return {
                status: false,
                message: "",
                user: null
            }
        }
        username = email
        console.log(username)
        return {
            status: true,
            message: null,
            user: null
        }
    }
    
    

}