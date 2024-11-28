import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: '22c25597-f0c2-4114-88bf-df6a613f6fd8' })
  id: string;

  @ApiProperty({ example: 'diego' })
  name: string;

  @ApiProperty({ example: 'diego@example.com' })
  email: string;

  @ApiProperty({ example: 'password123' })
  password: string;
}