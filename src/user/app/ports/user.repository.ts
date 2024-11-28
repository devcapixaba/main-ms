import { User } from "src/user/domain/user";

export interface UserRepository {
  createUser(user: User): Promise<User>;
  getUserById(id: string): Promise<User | null>;
}
