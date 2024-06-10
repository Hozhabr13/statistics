import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { DepartmentSchema } from './entities/department.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
// import { IndicatorsService } from '../../dist/indicators/indicators.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Department', schema: DepartmentSchema }])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
  exports: [DepartmentsService]
})
export class DepartmentsModule {}
