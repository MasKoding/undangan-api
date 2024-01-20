import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBearerAuth,ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentEntity } from './entities/comment.entity';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';

@Controller('comments')
@ApiTags("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiCreatedResponse({type:CommentEntity})
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type:CommentEntity,isArray:true})
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') uuid: string) {
    return this.commentsService.findOne(uuid);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') uuid: string) {
    return this.commentsService.remove(uuid);
  }
  @Delete('')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  removeAll() {
    return this.commentsService.removeAll();
  }
}
