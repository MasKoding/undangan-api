import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity  implements User{
    @ApiProperty()
    uuid:string;

    @ApiProperty()
    nama:string;

    @ApiProperty()
    email:string;  
}
