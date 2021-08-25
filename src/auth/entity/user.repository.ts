/* eslint-disable prettier/prettier */
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDTO } from '../dto/auth-credentials.dto';
import { User } from './user.entity';
import * as crypto from 'crypto';
import * as argon2 from 'argon2';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async register(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    const { username, password } = authCredentialsDTO;
    const user = new User();
    user.username = username;
    user.password = password;
    try {
      await this.save(user);
    } catch (error) {
      //TODO fix this ugly code by a global variable
      if (error.code === '23505') {
        throw new ConflictException('username already exists');
      }

      throw new InternalServerErrorException();
    }
  }

  async generateRefreshToken(user: User): Promise<string>
  {
    const token: string = crypto.randomBytes(48).toString('hex');

    user.refresh = await argon2.hash(token);
    this.save(user);

    return token;
  }
}
