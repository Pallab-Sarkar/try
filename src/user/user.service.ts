import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { Repository } from 'typeorm'
import { InjectRepository} from '@nestjs/typeorm'

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository : Repository<User>){

    }

  create(createUserDto: CreateUserDto) : Promise<User> {
    let user : User = new User()
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    return this.userRepository.save(user);
  }

  findAll() : Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(username: string) {
    return this.userRepository.findOne({where: {username: username}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user : User = new User()
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.email = updateUserDto.email;
    user.id = id;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

}
