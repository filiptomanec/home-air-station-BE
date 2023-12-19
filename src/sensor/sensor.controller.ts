import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('Sensor Endpoint')
@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post()
  @ApiOperation({ summary: `Creates sensor` })
  create(@Body() createSensorDto: CreateSensorDto) {
    return this.sensorService.createSensor(createSensorDto);
  }

  @Get()
  @ApiOperation({ summary: `Returns all sensors` })
  findAll() {
    return this.sensorService.findAllSensors();
  }

  @Get(':id')
  @ApiOperation({ summary: `Returns sensor by ID` })
  findOne(@Param('id') id: string) {
    return this.sensorService.findSensor(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: `Updates sensor` })
  update(@Param('id') id: string, @Body() updateSensorDto: UpdateSensorDto) {
    return this.sensorService.updateSensor(+id, updateSensorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: `Removes sensor` })
  remove(@Param('id') id: string) {
    return this.sensorService.removeSensor(+id);
  }
}
