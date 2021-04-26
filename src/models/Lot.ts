import { model, Schema, SchemaDefinition, Document } from "mongoose";

export interface ILot extends Document {
    section: string,
    place: number,
    car_parked: Schema.Types.ObjectId,
    owner_moment: Schema.Types.ObjectId
}
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
           car_parked: {
            type: Schema.Types.ObjectId,
            ref: "Car"
            },
           owner_moment: {
            type: Schema.Types.ObjectId,
            ref: "User"
            },
        }
        this._schema = new Schema(this._def, {timestamps: true})
    }

    public instance(): Schema {
        return this._schema
    }
}

const schema = new LotSchema()

export default model<ILot>("Lot", schema.instance())