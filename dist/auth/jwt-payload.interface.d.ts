export interface JwtPayloadInterface {
    token: string;
    username: string;
    refresh?: string;
}
