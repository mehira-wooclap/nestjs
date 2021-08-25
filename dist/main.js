/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(6);
const app_controller_1 = __webpack_require__(7);
const app_service_1 = __webpack_require__(8);
const products_module_1 = __webpack_require__(9);
const auth_module_1 = __webpack_require__(18);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                cache: false,
            }),
            products_module_1.ProductsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DATABASE_HOST,
                port: +process.env.DATABASE_PORT,
                username: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                autoLoadEntities: true,
                synchronize: true,
            }),
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(8);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsModule = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(6);
const product_repository_1 = __webpack_require__(10);
const products_controller_1 = __webpack_require__(16);
const products_service_1 = __webpack_require__(17);
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    common_1.Module({
        imports: [config_1.ConfigModule, typeorm_1.TypeOrmModule.forFeature([product_repository_1.ProductRepository])],
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductRepository = void 0;
const typeorm_1 = __webpack_require__(11);
const product_entity_1 = __webpack_require__(12);
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
};
ProductRepository = __decorate([
    typeorm_1.EntityRepository(product_entity_1.Product)
], ProductRepository);
exports.ProductRepository = ProductRepository;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Product = void 0;
const openapi = __webpack_require__(3);
const user_entity_1 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(11);
const product_details_schema_1 = __webpack_require__(15);
let Product = class Product extends typeorm_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, price: { required: true, type: () => Number }, storageQuantity: { required: true, type: () => Number }, details: { required: true, type: () => __webpack_require__(15).ProductDetails }, createdBy: { required: true, type: () => __webpack_require__(13).User } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'float8', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', default: 0, name: 'storage' }),
    __metadata("design:type", Number)
], Product.prototype, "storageQuantity", void 0);
__decorate([
    typeorm_1.Column({ type: 'jsonb', default: {} }),
    __metadata("design:type", product_details_schema_1.ProductDetails)
], Product.prototype, "details", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => user_entity_1.User),
    typeorm_1.JoinColumn({ name: 'created_by' }),
    __metadata("design:type", user_entity_1.User)
], Product.prototype, "createdBy", void 0);
Product = __decorate([
    typeorm_1.Entity()
], Product);
exports.Product = Product;


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const openapi = __webpack_require__(3);
const class_transformer_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(11);
let User = class User extends typeorm_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, username: { required: true, type: () => String }, password: { required: true, type: () => String }, refresh: { required: false, type: () => String } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    __metadata("design:type", String)
], User.prototype, "refresh", void 0);
User = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(['username'])
], User);
exports.User = User;


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductDetails = void 0;
class ProductDetails {
}
exports.ProductDetails = ProductDetails;


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsController = void 0;
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
let ProductsController = class ProductsController {
    findAll() {
        console.log('findAll');
    }
    findOne() {
        console.log('findOne');
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    common_1.Get('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
ProductsController = __decorate([
    swagger_1.ApiTags('Products'),
    common_1.Controller('products')
], ProductsController);
exports.ProductsController = ProductsController;


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsService = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(5);
let ProductsService = class ProductsService {
    constructor(configService) {
        this.configService = configService;
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ProductsService);
exports.ProductsService = ProductsService;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(19);
const auth_controller_1 = __webpack_require__(24);
const typeorm_1 = __webpack_require__(6);
const user_repository_1 = __webpack_require__(20);
const passport_1 = __webpack_require__(29);
const jwt_1 = __webpack_require__(23);
const jwt_strategy_1 = __webpack_require__(30);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'topSecret51',
                signOptions: {
                    expiresIn: 3600,
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_repository_1.UserRepository]),
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(6);
const user_repository_1 = __webpack_require__(20);
const argon2 = __webpack_require__(22);
const jwt_1 = __webpack_require__(23);
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async register(authCredentialsDTO) {
        authCredentialsDTO.password = await argon2.hash(authCredentialsDTO.password);
        return this.userRepository.register(authCredentialsDTO);
    }
    async validatePassword(authCredentialsDTO) {
        const { username, password } = authCredentialsDTO;
        const user = await this.userRepository.findOne({
            username,
        });
        if (user && (await argon2.verify(user.password, password))) {
            const result = await this.encodeJwt(user);
            return result;
        }
        else {
            throw new common_1.NotFoundException();
        }
    }
    async refreshJwt(refreshJwtDTO) {
        const { username, refreshToken } = refreshJwtDTO;
        const user = await this.userRepository.findOne({
            username,
        });
        if (user &&
            user.refresh &&
            (await argon2.verify(user.refresh, refreshToken))) {
            return this.encodeJwt(user);
        }
        throw new common_1.UnauthorizedException();
    }
    async encodeJwt(user) {
        const token = this.jwtService.sign({
            uid: user.id,
            username: user.username,
        });
        const refresh = await this.userRepository.generateRefreshToken(user);
        const result = {
            token,
            refresh,
            username: user.username,
        };
        return result;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(11);
const user_entity_1 = __webpack_require__(13);
const crypto = __webpack_require__(21);
const argon2 = __webpack_require__(22);
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async register(authCredentialsDTO) {
        const { username, password } = authCredentialsDTO;
        const user = new user_entity_1.User();
        user.username = username;
        user.password = password;
        try {
            await this.save(user);
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('username already exists');
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    async generateRefreshToken(user) {
        const token = crypto.randomBytes(48).toString('hex');
        user.refresh = await argon2.hash(token);
        this.save(user);
        return token;
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("argon2");

/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const openapi = __webpack_require__(3);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(19);
const auth_credentials_dto_1 = __webpack_require__(25);
const login_success_dto_1 = __webpack_require__(27);
const refresh_jwt_dto_1 = __webpack_require__(28);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    register(authCredentialsDTO) {
        return this.authService.register(authCredentialsDTO);
    }
    async validate(authCredentialsDTO) {
        try {
            const isValid = await this.authService.validatePassword(authCredentialsDTO);
            if (!isValid) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
        return this.authService.validatePassword(authCredentialsDTO);
    }
    async refreshJwt(refreshJwtDTO) {
        return this.authService.refreshJwt(refreshJwtDTO);
    }
};
__decorate([
    swagger_1.ApiConflictResponse({
        description: 'Conflict: In case of duplicate username.',
    }),
    common_1.Post('/register'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        schema: { $ref: swagger_1.getSchemaPath(login_success_dto_1.LoginSuccessDTO) },
    }),
    swagger_1.ApiUnauthorizedResponse({
        description: 'Unauthorized: In case of wrong credentials.',
    }),
    common_1.Post('/login'),
    common_1.HttpCode(200),
    openapi.ApiResponse({ status: 200, type: __webpack_require__(27).LoginSuccessDTO }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validate", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        schema: { $ref: swagger_1.getSchemaPath(login_success_dto_1.LoginSuccessDTO) },
    }),
    swagger_1.ApiUnauthorizedResponse({
        description: 'Unauthorized: In case of wrong token or username.',
    }),
    common_1.HttpCode(200),
    common_1.Post('/refresh-jwt'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_jwt_dto_1.RefreshJwtDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshJwt", null);
AuthController = __decorate([
    swagger_1.ApiTags('Authentication'),
    common_1.Controller('auth'),
    swagger_1.ApiExtraModels(login_success_dto_1.LoginSuccessDTO),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthCredentialsDTO = void 0;
const openapi = __webpack_require__(3);
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(26);
class AuthCredentialsDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String, minLength: 4 }, password: { required: true, type: () => String, minLength: 8 } };
    }
}
__decorate([
    class_validator_1.MinLength(4),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'Boby3000',
    }),
    __metadata("design:type", String)
], AuthCredentialsDTO.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(8),
    swagger_1.ApiProperty({
        example: 'MySecr3t@Passw0rd',
    }),
    __metadata("design:type", String)
], AuthCredentialsDTO.prototype, "password", void 0);
exports.AuthCredentialsDTO = AuthCredentialsDTO;


/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginSuccessDTO = void 0;
const openapi = __webpack_require__(3);
const swagger_1 = __webpack_require__(3);
class LoginSuccessDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { token: { required: true, type: () => String }, refresh: { required: true, type: () => String }, username: { required: true, type: () => String } };
    }
}
__decorate([
    swagger_1.ApiProperty({
        title: 'Token JWT',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV....',
    }),
    __metadata("design:type", String)
], LoginSuccessDTO.prototype, "token", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'Refresh Token',
        example: 'b9171b735c2e2fafb...',
    }),
    __metadata("design:type", String)
], LoginSuccessDTO.prototype, "refresh", void 0);
__decorate([
    swagger_1.ApiProperty({
        title: 'username',
        example: 'Boby3000',
    }),
    __metadata("design:type", String)
], LoginSuccessDTO.prototype, "username", void 0);
exports.LoginSuccessDTO = LoginSuccessDTO;


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshJwtDTO = void 0;
const openapi = __webpack_require__(3);
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(26);
class RefreshJwtDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String, minLength: 4 }, refreshToken: { required: true, type: () => String, minLength: 90 } };
    }
}
__decorate([
    class_validator_1.MinLength(4),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'Boby3000',
    }),
    __metadata("design:type", String)
], RefreshJwtDTO.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(90),
    swagger_1.ApiProperty({
        example: '9284e0eb39bb7e411f40976e0758bc59c207c06a19ec3e602da73b92dc771696809a601a9f186c6e95235ccfcf6a6edb'
    }),
    __metadata("design:type", String)
], RefreshJwtDTO.prototype, "refreshToken", void 0);
exports.RefreshJwtDTO = RefreshJwtDTO;


/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(29);
const typeorm_1 = __webpack_require__(6);
const passport_jwt_1 = __webpack_require__(31);
const user_repository_1 = __webpack_require__(20);
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(userRepository) {
        super({
            secretOrKey: 'topSecret51',
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
        this.userRepository = userRepository;
    }
    async validate(payload) {
        const { username } = payload;
        const user = await this.userRepository.findOne({ username });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthInterceptor = void 0;
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(33);
let AuthInterceptor = class AuthInterceptor {
    intercept(context, next) {
        console.log('Interceptor: before');
        return next.handle().pipe(rxjs_1.tap(() => console.log(`After...`)));
    }
};
AuthInterceptor = __decorate([
    common_1.Injectable()
], AuthInterceptor);
exports.AuthInterceptor = AuthInterceptor;


/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
const auth_interceptor_1 = __webpack_require__(32);
const SWAGGER_ENVS = ['local', 'dev', 'staging'];
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new auth_interceptor_1.AuthInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe());
    if (SWAGGER_ENVS.includes(process.env.APP_ENV)) {
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Wooclap')
            .setVersion('1.0')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;