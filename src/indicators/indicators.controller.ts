import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';

@Controller('indicators')
export class IndicatorsController {
  constructor(private readonly indicatorsService: IndicatorsService) {}

  @Post()
  create(@Body() createIndicatorDto: CreateIndicatorDto) {
    try {
      return this.indicatorsService.create(createIndicatorDto);
    } catch (er) {
      throw new BadRequestException(er)
    }
  }

  @Get()
  findAll() {
    return this.indicatorsService.findAll();
  }

  @Post('/add-goal/:id')
  addGoal(@Param('id') id: string, @Body() body: { from_date: Date; to_date: Date; goal: string }) {
    const indicator = this.indicatorsService.addGoals(id, { from_date: body.from_date, to_date: body.to_date, goal: body.goal });
    return indicator
  }

  @Post('/add-index/:id')
  addIndex(@Param('id') id: string, @Body() body: { from_date: Date; to_date: Date; index: number }) {
    const indicator = this.indicatorsService.addIndex(id, { from_date: body.from_date, to_date: body.to_date, index: body.index });
    return indicator
  }
  
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indicatorsService.remove(id);
  }
 
}
