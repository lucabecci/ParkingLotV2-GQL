import { model, Schema, SchemaDefinition, Document } from "mongoose";
export interface ICar extends Document {
    model_car: string,
    patent: string,
    owner: Schema.Types.ObjectId,
    parked?: Schema.Types.ObjectId
}
class CarSchema {
    private _def: SchemaDefinition
    private _schema: Schema
    constructor(){
        this._def = {
           model_car: {
               type: String,
               required: true,
               trim: true
           },
           patent: {
               type: String,
               required: true,
               trim: true
           },
           owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
            },
           parked: {
            type: Schema.Types.ObjectId,
            ref: "Lot"
            },
        }
        this._schema = new Schema(this._def, {timestamps: true})
    }

    public instance(): Schema {
        return this._schema
    }
}

const schema = new CarSchema()

export default model<ICar>("Car", schema.instance())