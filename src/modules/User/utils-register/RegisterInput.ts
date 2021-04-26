import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./EmailCheck";
import { isUsernameAlreadyExists } from "./UsernameCheck";

@InputType()
export class RegisterInput {
    @Field()
    @Length(1, 20)
    @isUsernameAlreadyExists({ message: "Username is already used" })
    username: string

    @Field()
    @IsEmail()
    @IsEmailAlreadyExist({ message: "Email is already used" })
    email: string;

    @Field()
    @Length(8)
    password: string

    @Field()
    @Length(8)
    confirmPassword: string
}