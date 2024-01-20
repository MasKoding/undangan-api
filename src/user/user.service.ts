import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entities/auth.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService,private jwtService: JwtService){}

  async login(name:string, email:string): Promise<AuthEntity>{
    const user = await this.prisma.user.findUnique({where:{nama:name}});
    if(!user){
      throw new NotFoundException(`No user found for name: ${name}`);
    }
    const isEmailInvalid = user.email === email
    if(!isEmailInvalid){
      throw new UnauthorizedException('Invalid password');
    }

    return {
        accessToken: this.jwtService.sign({userId:user.uuid})
    }
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(uuid: string) {
    return this.prisma.user.findFirst({where:{uuid}})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
