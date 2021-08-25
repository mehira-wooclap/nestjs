import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class AuthCredentialsDTO {
  @MinLength(4)
  @IsNotEmpty()
  @ApiProperty({
    example: 'Boby3000',
  })
  public username: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    example: 'MySecr3t@Passw0rd',
  })
  public password: string;
}
