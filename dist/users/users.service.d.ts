import { CreateUserDto } from './dto/create-user.dto';
import { UpdateOrAuthUserDto } from './dto/update-or-auth-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        senha: string;
    }>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    auth(updateUserDto: UpdateOrAuthUserDto): Promise<{
        access_token: string;
        nivel: string;
        email: string;
        id: number;
    }>;
    update(id: number, updateUserDto: UpdateOrAuthUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
