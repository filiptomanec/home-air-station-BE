import { Injectable } from '@nestjs/common';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Measurement} from "./entities/measurement.entity";
import {SensorService} from "../sensor/sensor.service";

@Injectable()
export class MeasurementService {
  constructor(
      @InjectRepository(Measurement) private readonly measurementRepository: Repository<Measurement>,
      private sensorService: SensorService
  ) {}
  async createMeasurement(createMeasurementDto: CreateMeasurementDto): Promise<Measurement> {
    const measurement: Measurement = new Measurement();
    measurement.temperature = createMeasurementDto.temperature;
    measurement.humidity = createMeasurementDto.humidity;
    measurement.co2 = createMeasurementDto.co2;
    measurement.sensor = await this.sensorService.findSensor(createMeasurementDto.sensor_id);
    return this.measurementRepository.save(measurement);
  }

  findAllMeasurements(): Promise<Measurement[]> {
    return this.measurementRepository.find();
  }

  findMeasurement(id: number): Promise<Measurement> {
    return this.measurementRepository.findOneBy({ id });
  }

  async updateMeasurement(id: number, updateMeasurementDto: UpdateMeasurementDto): Promise<Measurement> {
    const measurement: Measurement = new Measurement();
    measurement.temperature = updateMeasurementDto.temperature;
    measurement.humidity = updateMeasurementDto.humidity;
    measurement.co2 = updateMeasurementDto.co2;
    measurement.sensor = await this.sensorService.findSensor(updateMeasurementDto.sensor_id);
    return this.measurementRepository.save(measurement);
  }

  removeMeasurement(id: number): Promise<{ affected?: number }> {
    return this.measurementRepository.delete(id);
  }
}
