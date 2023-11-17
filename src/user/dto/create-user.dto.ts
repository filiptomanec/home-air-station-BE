import {
    IsAlphanumeric,
    IsEmail,
    IsNotEmpty,
    Matches,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3, {message: 'Username must have atleast 3 characters.'})
    @IsAlphanumeric('cs-CZ', {
        message: 'Username does not allow other than alpha numeric chars.',
    })
    username: string;

    @IsNotEmpty()
    @IsEmail({allow_display_name: false}, {message: 'Please provide valid Email.'})
    email: string;

    @IsNotEmpty()
    password: string;
}