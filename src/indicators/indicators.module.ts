import { Module } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { IndicatorsController } from './indicators.controller';
import { IndicatorSchema } from './entities/indicator.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Indicator', schema: IndicatorSchema }])],
  controllers: [IndicatorsController],
  providers: [IndicatorsService],
  exports: [IndicatorsService]
})
export class IndicatorsModule {}
