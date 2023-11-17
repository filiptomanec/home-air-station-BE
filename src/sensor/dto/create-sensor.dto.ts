import {IsNotEmpty, MinLength} from "class-validator";

export class CreateSensorDto {
    @IsNotEmpty()
    @MinLength(3, {message: 'Sensor name must have at least 3 characters.'})
    name: string;
}
