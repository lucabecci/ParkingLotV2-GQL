import { Field, ObjectType } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType()
class User {
    @Field()
    @prop({required: true, maxlength: 20, minlength: 5})
    username!: string;

    @Field()
    @prop({required: true, minlength: 5})
    email!: string;

    @prop({required: true, minlength: 8})
    password!: string;

    @prop()
    token?: string;

    @prop()
    last_token?: string

    @Field()
    car?: undefined

    @Field() 
    lot?: undefined
}

export default User