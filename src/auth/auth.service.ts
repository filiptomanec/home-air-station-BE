import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async singIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findByUsername(username);
        if (user && await bcrypt.compare(pass, user.password)) {
            const payload = {sub: user.id, username: user.username};
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        } else {
            throw new UnauthorizedException();
        }
    }
}
