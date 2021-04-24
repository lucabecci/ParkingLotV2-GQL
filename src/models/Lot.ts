import { model, Schema, SchemaDefinition } from "mongoose";
import Car from "./Car";
import User from "./User";
class LotSchema {
    private _def: SchemaDefinition
    private _schema: Schema

    constructor(){
        this._def = {
           section: {
               type: String,
               required: true,
               maxlength: 1,
               minlength: 1
           },
           place: {
               type: Number,
               required: true,
               max: 50,
               min: 0
           },
           car_parked: Car,
           owner_moment: User
        }
        this._schema = new Schema(this._def, {timestamps: true})
    }

    public instance(): Schema {
        return this._schema
    }
}

const schema = new LotSchema()

export default model("Lot", schema.instance())