import { model, Schema, SchemaDefinition } from "mongoose";
import User from "./User";

class CarSchema {
    private _def: SchemaDefinition
    private _schema: Schema

    constructor(){
        this._def = {
           model: {
               type: String,
               required: true,
               trim: true
           },
           patent: {
               type: String,
               required: true,
               trim: true
           },
           owner: User
        }
        this._schema = new Schema(this._def, {timestamps: true})
    }

    public instance(): Schema {
        return this._schema
    }
}

const schema = new CarSchema()

export default model("Car", schema.instance())