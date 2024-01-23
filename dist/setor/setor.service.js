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
exports.SetorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const setor_entity_1 = require("./entities/setor.entity");
const typeorm_2 = require("typeorm");
let SetorService = class SetorService {
    constructor(setorRepository) {
        this.setorRepository = setorRepository;
    }
    findAll() {
        return this.setorRepository.find();
    }
    buscar(body) {
        delete body[''];
        return this.setorRepository.findBy(body);
    }
    update(id, updateSetorDto) {
        return this.setorRepository.update(id, updateSetorDto);
    }
    remove(id) {
        return this.setorRepository.delete(id);
    }
};
exports.SetorService = SetorService;
exports.SetorService = SetorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(setor_entity_1.Setor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SetorService);
//# sourceMappingURL=setor.service.js.map