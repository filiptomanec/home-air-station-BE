import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class SignInDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'john'})
    username: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: '1234'})
    password: string;
}
