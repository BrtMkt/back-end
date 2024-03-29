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
exports.EmpresaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const empresa_entity_1 = require("./entities/empresa.entity");
const typeorm_2 = require("typeorm");
let EmpresaService = class EmpresaService {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    findAll() {
        return this.empresaRepository.createQueryBuilder('empresa').innerJoinAndSelect('empresa.setor', 'setor', 'setor.id = empresa.setor').innerJoinAndSelect('empresa.cnae', 'cnae', 'cnae.id = empresa.cnae').getMany();
    }
    async buscar(body) {
        delete body[''];
        const response = this.empresaRepository.createQueryBuilder('empresa').innerJoinAndSelect('empresa.setor', 'setor', 'setor.id = empresa.setor').innerJoinAndSelect('empresa.cnae', 'cnae', 'cnae.id = empresa.cnae');
        if (body.cnae || body.setor) {
            if (body.cnae) {
                response.where('cnae.nome = :name', { name: body.cnae });
                delete body.cnae;
            }
            else if (body.setor) {
                response.where('setor.nome = :name', { name: body.setor });
                delete body.setor;
            }
        }
        if (body) {
            response.andWhere(body);
        }
        return response.getMany();
    }
    findOne(id) {
        return this.empresaRepository.createQueryBuilder('empresa').innerJoinAndSelect('empresa.setor', 'setor', 'setor.id = empresa.setor').innerJoinAndSelect('empresa.cnae', 'cnae', 'cnae.id = empresa.cnae').where("decisores.id = :id", { id: id }).getMany();
    }
    update(id, updateEmpresaDto) {
        return this.empresaRepository.update(id, updateEmpresaDto);
    }
    remove(id) {
        return this.empresaRepository.delete(id);
    }
};
exports.EmpresaService = EmpresaService;
exports.EmpresaService = EmpresaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empresa_entity_1.Empresa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmpresaService);
//# sourceMappingURL=empresa.service.js.map