import {IsNotEmpty, IsNumber, MinLength} from "class-validator";
import {Sensor} from "../../sensor/entities/sensor.entity";
import {ApiProperty} from "@nestjs/swagger";

export class CreateMeasurementDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({example: '22'})
    temperature: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({example: '45'})
    humidity: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({example: '900'})
    co2: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({example: '1'})
    sensor_id: number
}
