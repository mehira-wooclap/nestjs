import { AuthService } from './auth.service';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { LoginSuccessDTO } from './dto/login-success.dto';
import { RefreshJwtDTO } from './dto/refresh-jwt.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(authCredentialsDTO: AuthCredentialsDTO): Promise<void>;
    validate(authCredentialsDTO: AuthCredentialsDTO): Promise<LoginSuccessDTO>;
    refreshJwt(refreshJwtDTO: RefreshJwtDTO): Promise<import("./jwt-payload.interface").JwtPayloadInterface>;
}
