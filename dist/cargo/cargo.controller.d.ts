import { CargoService } from './cargo.service';
import { UpdateCargoDto } from './dto/update-cargo.dto';
export declare class CargoController {
    private readonly cargoService;
    constructor(cargoService: CargoService);
    findAll(): Promise<import("./entities/cargo.entity").Cargo[]>;
    buscar(body: string): Promise<import("./entities/cargo.entity").Cargo[]>;
    update(id: string, updateCargoDto: UpdateCargoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
