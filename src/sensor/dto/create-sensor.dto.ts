import {IsNotEmpty, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateSensorDto {
    @IsNotEmpty()
    @MinLength(3, {message: 'Sensor name must have at least 3 characters.'})
    @ApiProperty({example: 'Living room'})
    name: string;
}
