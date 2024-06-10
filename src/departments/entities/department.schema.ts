
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from 'uuid';
import { Document, Schema as SchemaRelation } from 'mongoose';
import { Indicator } from "../../indicators/entities/indicator.schema";

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
    @Prop()
    id: string = uuidv4()

    @Prop({ required: true })
    name: string;

    @Prop({ type: SchemaRelation.Types.ObjectId, ref: 'Indicator' })
    macroIndicator: Indicator;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);