import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { get } from 'http';
import { AuthService } from './auth/auth.service';

@Controller('app')
export class AppController {
  constructor(private readonly authService : AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard("local"))
  login(@Request() req): string {

    return this.authService.generateToken(req.user)
    
  }

  @Get("/getAllUser")
  @UseGuards(AuthGuard("jwt"))
  getAllUser() : object{
    return {"data" : "All user data"};
  }

}
