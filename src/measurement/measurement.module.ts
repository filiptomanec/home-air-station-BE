import { Module } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { MeasurementController } from './measurement.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Measurement} from "./entities/measurement.entity";
import {SensorService} from "../sensor/sensor.service";
import {SensorModule} from "../sensor/sensor.module";

@Module({
  imports: [TypeOrmModule.forFeature([Measurement]), SensorModule],
  controllers: [MeasurementController],
  providers: [MeasurementService],
})
export class MeasurementModule {}
