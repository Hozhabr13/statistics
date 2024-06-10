import mongoose, { Model, Schema as mongoSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from 'uuid';
import { Document } from 'mongoose';

export type IndicatorDocument = Indicator & Document;

@Schema()
export class Indicator {
    @Prop()
    id: string = uuidv4()

    @Prop({ type: mongoSchema.Types.ObjectId, ref: 'Department', required: true })
    department: string 
  
    @Prop({ type: String })
    name: string;
  
    @Prop({ required: true, type: String })
    goal: string;

    @Prop({ required: true, type: Date })
    from_date: Date
  
    @Prop({ required: true, type: Date })
    to_date: Date
  
    @Prop({ type: Object })
      subsetsIndicators: {
        middleIndicators: [{
          name: string,
          index: number
        }],
        operationIndicators: [{
          name: string,
          index: number,
        }]
    }
}

export const IndicatorSchema = SchemaFactory.createForClass(Indicator);
