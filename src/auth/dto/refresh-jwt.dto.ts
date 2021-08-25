import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class RefreshJwtDTO {
  @MinLength(4)
  @IsNotEmpty()
  @ApiProperty({
    example: 'Boby3000',
  })
  public username: string;

  @IsNotEmpty()
  @MinLength(90)
  @ApiProperty({
    example: '9284e0eb39bb7e411f40976e0758bc59c207c06a19ec3e602da73b92dc771696809a601a9f186c6e95235ccfcf6a6edb'
  })
  public refreshToken: string;
}
