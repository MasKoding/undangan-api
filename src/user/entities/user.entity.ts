
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity  implements User{
    @ApiProperty()
    uuid:string;

    @ApiProperty()
    nama:string;

    @ApiProperty()
    email:string;  
}
