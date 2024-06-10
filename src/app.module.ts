import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DepartmentsModule } from './departments/departments.module';
import { IndicatorsModule } from './indicators/indicators.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true, // Make the configuration global
  }),MongooseModule.forRoot('mongodb://localhost/demo', { useNewUrlParser: true, useUnifiedTopology: true }), DepartmentsModule, IndicatorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
