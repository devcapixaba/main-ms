import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { UserRepository } from 'src/user/app/ports/user.repository';
import { User } from 'src/user/domain/user';

@Injectable()
export class MongoUserRepository implements UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(user: User): Promise<User> {
    user.id = randomUUID()
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async getUserById(id: string): Promise<User | null> {
    return (await this.userModel.findOne({ id }).exec())?.toJSON();
  }
}
