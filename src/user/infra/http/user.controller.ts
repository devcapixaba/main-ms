import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { UserService } from 'src/user/app/user.service';
import { User } from 'src/user/domain/user';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: User,
    example: {
      id: '22c25597-f0c2-4114-88bf-df6a613f6fd8',
      name: 'diego',
      email: 'diego@email.com',
      password: 'password123'
    }
  })
  @ApiBody({
    description: 'Payload for creating a new user',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'diego' },
        email: { type: 'string', example: 'diego@email.com' },
        password: { type: 'string', example: 'password123' },
      },
      required: ['name', 'email', 'password'],
    },
  })
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiResponse({
    status: 200,
    description: 'User found',
    type: User,
    example: {
      id: "22c25597-f0c2-4114-88bf-df6a613f6fd8",
      name: 'diego',
      email: 'diego@email.com',
      password: 'password123'
    }
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the user',
    type: 'string uuidv4',
    example: '22c25597-f0c2-4114-88bf-df6a613f6fd8',
    required: true,
  })
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return await this.userService.getUserById(id);
  }
}
