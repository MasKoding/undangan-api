import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
@Injectable()
export class CommentsService {

  constructor(private prisma: PrismaService){}
  
  create(createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({data:createCommentDto})
  }

  findAll() {
    return this.prisma.comment.findMany();
  }
  

  findOne(uuid: string) {
    return this.prisma.comment.findFirst({where:{uuid}});
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(uuid: string) {
    return  this.prisma.comment.delete({where:{uuid}});
  }
  removeAll() {
    return  this.prisma.comment.deleteMany();
  }
}
