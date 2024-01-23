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
exports.DecisoresService = void 0;
const common_1 = require("@nestjs/common");
const decisore_entity_1 = require("./entities/decisore.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let DecisoresService = class DecisoresService {
    constructor(decisoresRepository) {
        this.decisoresRepository = decisoresRepository;
    }
    findAll() {
        return this.decisoresRepository.createQueryBuilder('decisores').innerJoinAndSelect('decisores.cargo', 'cargo', 'cargo.id = decisores.cargo').innerJoinAndSelect('decisores.departamento', 'departamento', 'departamento.id = decisores.departamento').innerJoinAndSelect('decisores.empresa', 'empresa', 'empresa.id = decisores.empresa').getMany();
    }
    async buscar(body) {
        delete body[''];
        const response = this.decisoresRepository.createQueryBuilder('decisores').innerJoinAndSelect('decisores.cargo', 'cargo', 'cargo.id = decisores.cargo').innerJoinAndSelect('decisores.departamento', 'departamento', 'departamento.id = decisores.departamento').innerJoinAndSelect('decisores.empresa', 'empresa', 'empresa.id = decisores.empresa');
        if (body.departamento || body.cargo || body.empresa) {
            if (body.departamento) {
                response.where('departamento.nome = :name', { name: body.departamento });
                delete body.departamento;
            }
            else if (body.cargo) {
                response.where('cargo.nome = :name', { name: body.cargo });
                delete body.cargo;
            }
            else if (body.empresa) {
                response.where('empresa.nomeEmpresa = :name', { name: body.empresa });
                delete body.empresa;
            }
        }
        if (body) {
            response.andWhere(body);
        }
        return response.getMany();
    }
    findOne(id) {
        return this.decisoresRepository.createQueryBuilder('decisores').innerJoinAndSelect('decisores.cargo', 'cargo', 'cargo.id = decisores.cargo').innerJoinAndSelect('decisores.departamento', 'departamento', 'departamento.id = decisores.departamento').innerJoinAndSelect('decisores.empresa', 'empresa', 'empresa.id = decisores.empresa').where("decisores.id = :id", { id: id }).getOne();
    }
    update(id, updateDecisoreDto) {
        return this.decisoresRepository.update(id, updateDecisoreDto);
    }
    remove(id) {
        return this.decisoresRepository.delete(id);
    }
};
exports.DecisoresService = DecisoresService;
exports.DecisoresService = DecisoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(decisore_entity_1.Decisores)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DecisoresService);
//# sourceMappingURL=decisores.service.js.map