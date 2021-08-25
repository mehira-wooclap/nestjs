import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { UserRepository } from './entity/user.repository';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadInterface } from './jwt-payload.interface';
import { RefreshJwtDTO } from './dto/refresh-jwt.dto';
import { LoginSuccessDTO } from './dto/login-success.dto';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    register(authCredentialsDTO: AuthCredentialsDTO): Promise<void>;
    validatePassword(authCredentialsDTO: AuthCredentialsDTO): Promise<LoginSuccessDTO>;
    refreshJwt(refreshJwtDTO: RefreshJwtDTO): Promise<JwtPayloadInterface>;
    private encodeJwt;
}
