import { ApiProperty } from '@nestjs/swagger';

export class LoginSuccessDTO {
  @ApiProperty({
    title: 'Token JWT',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV....',
  })
  token: string;

  @ApiProperty({
    title: 'Refresh Token',
    example: 'b9171b735c2e2fafb...',
  })
  refresh: string;

  @ApiProperty({
    title: 'username',
    example: 'Boby3000',
  })
  username: string;
}
