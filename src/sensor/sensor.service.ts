import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Repository} from "typeorm";
import {Sensor} from "./entities/sensor.entity";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {UpdateUserDto} from "../user/dto/update-user.dto";

@Injectable()
export class SensorService {
  constructor(
      @InjectRepository(Sensor) private readonly sensorRepository: Repository<Sensor>,
  ) {}
  createSensor(createSensorDto: CreateSensorDto): Promise<Sensor> {
    const sensor: Sensor = new Sensor();
    sensor.name = createSensorDto.name;
    return this.sensorRepository.save(sensor);
  }

  findAllSensors(): Promise<Sensor[]> {
    return this.sensorRepository.find();
  }

  findSensor(id: number): Promise<Sensor> {
    return this.sensorRepository.findOneBy({ id });
  }

  updateSensor(id: number, updateSensorDto: UpdateSensorDto): Promise<Sensor> {
    const sensor: Sensor = new Sensor();
    sensor.name = updateSensorDto.name;
    return this.sensorRepository.save(sensor);
  }

  removeSensor(id: number): Promise<{ affected?: number }> {
    return this.sensorRepository.delete(id);
  }
}
