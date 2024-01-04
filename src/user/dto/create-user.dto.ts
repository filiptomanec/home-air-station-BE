import {
    IsAlphanumeric,
    IsEmail,
    IsNotEmpty,
    Matches,
    MinLength,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3, {message: 'Username must have atleast 3 characters.'})
    @IsAlphanumeric('cs-CZ', {
        message: 'Username does not allow other than alpha numeric chars.',
    })
    @ApiProperty({example: 'John'})
    username: string;

    @IsNotEmpty()
    @IsEmail({allow_display_name: false}, {message: 'Please provide valid Email.'})
    @ApiProperty({example: 'john@email.com'})
    email: string;

    @IsNotEmpty()
    @ApiProperty({example: '1234'})
    password: string;
}