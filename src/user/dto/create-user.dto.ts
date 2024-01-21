import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
export class CreateUserDto {

    @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  nama: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
  

}
