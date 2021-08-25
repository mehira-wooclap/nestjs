import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { UserRepository } from './entity/user.repository';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadInterface } from './jwt-payload.interface';
import { RefreshJwtDTO } from './dto/refresh-jwt.dto';
import { User } from './entity/user.entity';
import { LoginSuccessDTO } from './dto/login-success.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async register(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    authCredentialsDTO.password = await argon2.hash(
      authCredentialsDTO.password,
    );
    return this.userRepository.register(authCredentialsDTO);
  }

  async validatePassword(
    authCredentialsDTO: AuthCredentialsDTO,
  ): Promise<LoginSuccessDTO> {
    const { username, password } = authCredentialsDTO;
    const user = await this.userRepository.findOne({
      username,
    });

    if (user && (await argon2.verify(user.password, password))) {
      const result: LoginSuccessDTO = await this.encodeJwt(user);

      return result;
    } else {
      throw new NotFoundException();
    }
  }

  async refreshJwt(refreshJwtDTO: RefreshJwtDTO): Promise<JwtPayloadInterface> {
    const { username, refreshToken } = refreshJwtDTO;
    const user = await this.userRepository.findOne({
      username,
    });

    if (
      user &&
      user.refresh &&
      (await argon2.verify(user.refresh, refreshToken))
    ) {
      return this.encodeJwt(user);
    }

    throw new UnauthorizedException();
  }

  private async encodeJwt(user: User): Promise<LoginSuccessDTO> {
    const token: string = this.jwtService.sign({
      uid: user.id,
      username: user.username,
    });

    const refresh = await this.userRepository.generateRefreshToken(user);
    const result: LoginSuccessDTO = {
      token,
      refresh,
      username: user.username,
    };
    return result;
  }
}
