import { Injectable, UnauthorizedException } from '@nestjs/common';
import{ PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userService: UserService){
        super();
    }

    validate(username: string, password: string){
        const user = this.userService.findOne(username);
        if(user == undefined) throw new UnauthorizedException();
        if(user){
            return user;
        } else{
            throw new UnauthorizedException();
        }
    }
}