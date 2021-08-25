import { Strategy } from 'passport-jwt';
import { JwtPayloadInterface } from './jwt-payload.interface';
import { User } from './entity/user.entity';
import { UserRepository } from './entity/user.repository';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: JwtPayloadInterface): Promise<User>;
}
export {};
