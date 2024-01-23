"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        try {
            const usuario = await this.userRepository.findOne({
                where: { email: createUserDto.email },
            });
            if (usuario) {
                throw new common_1.UnauthorizedException('Email Existe');
            }
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(createUserDto.senha, salt);
            const response = await this.userRepository.save({
                email: createUserDto.email,
                senha: hash,
                nivel: createUserDto.nivel,
                nome: createUserDto.nome
            });
            return {
                email: response.email,
                senha: createUserDto.senha
            };
        }
        catch (e) {
            throw new common_1.UnauthorizedException(e);
        }
    }
    findAll() {
        return this.userRepository.find();
    }
    findOne(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    async auth(updateUserDto) {
        try {
            const jwtService = new jwt_1.JwtService();
            const user = await this.userRepository.findOneBy({
                email: updateUserDto.email,
            });
            if (!user)
                throw new common_1.UnauthorizedException('Invalid credentials');
            const pass = await bcrypt.compare(updateUserDto.senha, user.senha);
            if (!pass)
                throw new common_1.UnauthorizedException('Invalid credentials');
            jwt_1.JwtModule.register({ secretOrPrivateKey: 'secret' });
            return {
                access_token: jwtService.sign({ username: updateUserDto.email, nivel: user.nivel }, { secret: 'secret' }),
                nivel: user.nivel,
                email: updateUserDto.email,
                id: user.id
            };
        }
        catch (e) {
            throw new common_1.UnauthorizedException(e);
        }
    }
    async update(id, updateUserDto) {
        if (updateUserDto.senha) {
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(updateUserDto.senha, salt);
            updateUserDto.senha = hash;
        }
        return this.userRepository.update(id, updateUserDto);
    }
    remove(id) {
        return this.userRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map