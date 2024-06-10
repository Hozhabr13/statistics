import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DepartmentDocument } from './entities/department.schema';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel('Department') private readonly departmentModel: Model<DepartmentDocument>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = new this.departmentModel(createDepartmentDto);
    return department.save();
  }

  async findAll() {
    return this.departmentModel.find().populate('Indicator').exec();
  }

  async remove(id: string) {
    return this.departmentModel.findByIdAndRemove(id).exec();
  }
}