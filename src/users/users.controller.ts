import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async registerUser(@Body('username') username: string) {
    return this.usersService.registerUser(username);
  }

  @Get()
  async getUsers() {
    return this.usersService.getAllUsers();
  }
}
