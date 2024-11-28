import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoUserRepository } from './adapter/persistance/mongo-user.repository';
import { UserService } from './app/user.service';
import { UserController } from './infra/http/user.controller';
import { UserSchema } from './infra/database/user.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'UserRepository',
      useClass: MongoUserRepository,
    },
  ],
})
export class UserModule { }
