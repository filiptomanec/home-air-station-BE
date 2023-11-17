import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post()
  create(@Body() createSensorDto: CreateSensorDto) {
    return this.sensorService.createSensor(createSensorDto);
  }

  @Get()
  findAll() {
    return this.sensorService.findAllSensors();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensorService.findSensor(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSensorDto: UpdateSensorDto) {
    return this.sensorService.updateSensor(+id, updateSensorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensorService.removeSensor(+id);
  }
}
