import { Injectable } from '@nestjs/common';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { Model } from 'mongoose';
import { IndicatorDocument } from './entities/indicator.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class IndicatorsService {
  constructor(
    @InjectModel('Indicator') private readonly indicatorModel: Model<IndicatorDocument>,
  ) {}
  async create(createIndicatorDto: CreateIndicatorDto) {
    try {
      const indicator = new this.indicatorModel(createIndicatorDto);
      return indicator.save();
    } catch (err) {
      throw new Error(err)
    }
  }

  async findAll() {
    return this.indicatorModel.find().populate('Department').exec();
  }

  async findOne(id: string) {
    return this.indicatorModel.find({_id: id}).exec();
  }

  async remove(id: string) {
    return this.indicatorModel.findByIdAndRemove(id).exec();
  }

  async addGoals(id: string, cnt: { from_date: Date; to_date: Date, goal: string }) {
    const grabbedIndicator = await this.findOne(id)
    const currentIndicator = grabbedIndicator[0]
    // Find the indicator based on cnt.from_date and cnt.to_date
    const indicator = () => {
      if (currentIndicator) {
        return (
          currentIndicator.from_date.getTime() === cnt.from_date.getTime() &&
          currentIndicator.to_date.getTime() === cnt.to_date.getTime()
        );
      } else return {}
    }
    if (indicator) {
      // Update the goal for the found indicator
      currentIndicator.goal = cnt.goal;
      await currentIndicator.save();
    } else {
      console.log(`No indicator found for ${cnt.from_date} - ${cnt.to_date}`);
    }
    
  }

  async addIndex(id: string, cnt: { from_date: Date; to_date: Date, index: number }) {
    const grabbedIndicator = await this.findOne(id)
    const currentIndicator = grabbedIndicator[0]

    // Find the indicator based on cnt.from_date and cnt.to_date
    const indicator = () => {
      if (currentIndicator) {
        return (
          currentIndicator.from_date.getTime() === cnt.from_date.getTime() &&
          currentIndicator.to_date.getTime() === cnt.to_date.getTime()
        );
      } else return {}
    }

    if (indicator) {
      currentIndicator.subsetsIndicators.operationIndicators[0].index = cnt.index;
      await currentIndicator.save();
    } else {
      console.log(`No indicator found for ${cnt.from_date} - ${cnt.to_date}`);
    }
    
  }
}


