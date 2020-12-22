import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from "@nestjs/swagger";
import { UserDto } from "@ballistix.digital/types-track";
import {CarDto} from "./car.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/user")
  @ApiResponse({
    status: 200,
    type: UserDto
  })
  getUser(): UserDto {
    return this.appService.getUser();
  }

  @Get("/car")
  @ApiResponse({
    status: 200,
    type: CarDto
  })
  getCar(): CarDto {
    return this.appService.getCar();
  }
}
