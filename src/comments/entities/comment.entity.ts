
import { ApiProperty } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';
import { Comment } from '@prisma/client';
export class CommentEntity implements Comment {
    @ApiProperty()
    uuid:string;

    @ApiProperty()
    nama:string;

    @ApiProperty()
    hadir:number;

    @ApiProperty({required:false,nullable:true})
    komentar:string;

    @ApiProperty({required:false,nullable:true})
    imgSrc:string;

    @ApiProperty()
    created_at:string;

    @ApiProperty()
    created_on:Date;

    @ApiProperty()
    updated_at:Date;


    

}
