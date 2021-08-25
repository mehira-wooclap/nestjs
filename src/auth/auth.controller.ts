import {
  Body,
  Controller,
  HttpCode,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiExtraModels,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { LoginSuccessDTO } from './dto/login-success.dto';
import { RefreshJwtDTO } from './dto/refresh-jwt.dto';

@ApiTags('Authentication')
@Controller('auth')
@ApiExtraModels(LoginSuccessDTO)
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST /register
  @ApiConflictResponse({
    description: 'Conflict: In case of duplicate username.',
  })
  @Post('/register')
  register(@Body() authCredentialsDTO: AuthCredentialsDTO) {
    return this.authService.register(authCredentialsDTO);
  }

  // POST /login
  @ApiResponse({
    status: 200,
    schema: { $ref: getSchemaPath(LoginSuccessDTO) },
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized: In case of wrong credentials.',
  })
  @Post('/login')
  @HttpCode(200)
  async validate(
    @Body() authCredentialsDTO: AuthCredentialsDTO,
  ): Promise<LoginSuccessDTO> {
    try {
      const isValid = await this.authService.validatePassword(
        authCredentialsDTO,
      );
      if (!isValid) {
        throw new UnauthorizedException();
      }
    } catch (e) {
      throw new UnauthorizedException();
    }

    return this.authService.validatePassword(authCredentialsDTO);
  }

  // POST /register
  @ApiResponse({
    status: 200,
    schema: { $ref: getSchemaPath(LoginSuccessDTO) },
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized: In case of wrong token or username.',
  })
  @HttpCode(200)
  @Post('/refresh-jwt')
  async refreshJwt(@Body() refreshJwtDTO: RefreshJwtDTO) {
    return this.authService.refreshJwt(refreshJwtDTO);
  }
}
