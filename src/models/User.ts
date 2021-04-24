import { model, Schema, SchemaDefinition } from "mongoose";
import Car from "./Car";

class UserSchema {
    private _def: SchemaDefinition
    private _schema: Schema

    constructor(){
        this._def = {
            email: {
                type: String,
                required: true,
                trim: true,
                unique: true
            },
            username: {
                type: String,
                required: true,
                trim: true,
                unique: true
            },
            oauth_id: {
                type: String,
                required: true,
                trim: true,
                unique: true
            },
            car: Car
        }
        this._schema = new Schema(this._def, {timestamps: true})
    }

    public instance(): Schema {
        return this._schema
    }
}

const schema = new UserSchema()

export default model("User", schema.instance())