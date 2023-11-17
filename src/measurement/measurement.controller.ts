import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';

@Controller('measurement')
export class MeasurementController {
  constructor(private readonly measurementService: MeasurementService) {}

  @Post()
  create(@Body() createMeasurementDto: CreateMeasurementDto) {
    return this.measurementService.createMeasurement(createMeasurementDto);
  }

  @Get()
  findAll() {
    return this.measurementService.findAllMeasurements();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.measurementService.findMeasurement(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeasurementDto: UpdateMeasurementDto) {
    return this.measurementService.updateMeasurement(+id, updateMeasurementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.measurementService.removeMeasurement(+id);
  }
}
