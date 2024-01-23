import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateOrAuthUserDto } from './dto/update-or-auth-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        senha: string;
    }>;
    auth(updateOrAuthUserDto: UpdateOrAuthUserDto): Promise<{
        access_token: string;
        nivel: string;
        email: string;
        id: number;
    }>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    update(id: string, updateOrAuthUserDto: UpdateOrAuthUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
