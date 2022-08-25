import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User{
    
    @Prop()
    fname:string;

    @Prop()
    sname:string;

    @Prop()
    gender:string;

    @Prop()
    disease:string;

    @Prop()
    age:number;

    // @Prop({default:Date.now})
    // date_added:Date;
}

export const UserSchema = SchemaFactory.createForClass(User)