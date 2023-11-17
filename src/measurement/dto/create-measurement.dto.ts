import {IsNotEmpty, IsNumber, MinLength} from "class-validator";
import {Sensor} from "../../sensor/entities/sensor.entity";

export class CreateMeasurementDto {
    @IsNotEmpty()
    @IsNumber()
    temperature: number;

    @IsNotEmpty()
    @IsNumber()
    humidity: number;

    @IsNotEmpty()
    @IsNumber()
    co2: number;

    @IsNotEmpty()
    @IsNumber()
    sensor_id: number
}
