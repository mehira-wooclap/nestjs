import { Repository } from 'typeorm';
import { AuthCredentialsDTO } from '../dto/auth-credentials.dto';
import { User } from './user.entity';
export declare class UserRepository extends Repository<User> {
    register(authCredentialsDTO: AuthCredentialsDTO): Promise<void>;
    generateRefreshToken(user: User): Promise<string>;
}
