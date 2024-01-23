import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateOrAuthUserDto } from './dto/update-or-auth-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const usuario = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });

      if (usuario) {
        throw new UnauthorizedException('Email Existe');
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
    } catch (e) {
      throw new UnauthorizedException(e)
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({where: { id }});
  }

  async auth(updateUserDto: UpdateOrAuthUserDto) {
    try {
      const jwtService = new JwtService();

      const user = await this.userRepository.findOneBy({
        email: updateUserDto.email,
      });

      if (!user) throw new UnauthorizedException('Invalid credentials');

      const pass = await bcrypt.compare(updateUserDto.senha, user.senha);

      if (!pass) throw new UnauthorizedException('Invalid credentials');

      JwtModule.register({ secretOrPrivateKey: 'secret' });

      return {
        access_token: jwtService.sign(
          { username: updateUserDto.email, nivel: user.nivel },
          { secret: 'secret' },
        ),
        nivel: user.nivel,
        email: updateUserDto.email,
        id: user.id
      };
    } catch (e) {
      throw new UnauthorizedException(e)
    }
  }

  async update(id: number, updateUserDto: UpdateOrAuthUserDto) {
    if(updateUserDto.senha){
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(updateUserDto.senha, salt);
      updateUserDto.senha = hash
    }
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
