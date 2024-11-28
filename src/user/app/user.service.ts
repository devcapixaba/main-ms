import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { UserRepository } from './ports/user.repository';
import { User } from '../domain/user';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository
  ) {}

  async createUser(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
