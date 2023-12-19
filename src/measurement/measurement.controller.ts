import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('Measurement Endpoint')
@Controller('measurement')
export class MeasurementController {
  constructor(private readonly measurementService: MeasurementService) {}

  @Post()
  @ApiOperation({ summary: `Creates measurement` })
  create(@Body() createMeasurementDto: CreateMeasurementDto) {
    return this.measurementService.createMeasurement(createMeasurementDto);
  }

  @Get()
  @ApiOperation({ summary: `Returns all measurements` })
  findAll() {
    return this.measurementService.findAllMeasurements();
  }

  @Get(':id')
  @ApiOperation({ summary: `Returns measurement by ID` })
  findOne(@Param('id') id: string) {
    return this.measurementService.findMeasurement(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: `Updates measurement` })
  update(@Param('id') id: string, @Body() updateMeasurementDto: UpdateMeasurementDto) {
    return this.measurementService.updateMeasurement(+id, updateMeasurementDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: `Removes measurement` })
  remove(@Param('id') id: string) {
    return this.measurementService.removeMeasurement(+id);
  }
}
