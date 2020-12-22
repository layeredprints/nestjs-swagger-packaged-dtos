import { Injectable } from '@nestjs/common';
import {UserDto} from "@ballistix.digital/types-track";
import {CarDto} from "./car.dto";

@Injectable()
export class AppService {
  getUser(): UserDto {
    return {
      id: "123456",
      username: "demo-user",
      firstName: "Jane",
      lastName: "Doe",
      fullName: "Jane Doe",
      email: "jane@demo.com",
      createdAt: new Date(),
      updatedAt: new Date()
    } as UserDto;
  }

  getCar(): CarDto {
    return {
      id: "123456",
      brand: "Toyota"
    } as CarDto;
  }
}
