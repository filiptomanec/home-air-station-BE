import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {Public} from "./auth/auth.decorator";

@ApiTags('Test Endpoint')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: `Test endpoint` })
  getHello(): string {
    return this.appService.getHello();
  }
}
