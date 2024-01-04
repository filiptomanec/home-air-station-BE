import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {SignInDto} from "./dto/sign-in.dto";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {Public} from "./auth.decorator";

@ApiTags('Auth Endpoint')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiOperation({ summary: `Sign In` })
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.singIn(signInDto.username, signInDto.password);
    }
}
