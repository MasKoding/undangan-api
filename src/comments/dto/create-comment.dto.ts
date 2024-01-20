import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCommentDto {
   

    @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  nama: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  komentar?: string;

  @IsNotEmpty()
  @ApiProperty()
  hadir: number;

  @IsNotEmpty()
  @ApiProperty()
  created_at: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  imgSrc?: string;

}
