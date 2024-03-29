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
exports.CargoController = void 0;
const common_1 = require("@nestjs/common");
const cargo_service_1 = require("./cargo.service");
const update_cargo_dto_1 = require("./dto/update-cargo.dto");
let CargoController = class CargoController {
    constructor(cargoService) {
        this.cargoService = cargoService;
    }
    findAll() {
        return this.cargoService.findAll();
    }
    buscar(body) {
        return this.cargoService.buscar(body);
    }
    update(id, updateCargoDto) {
        return this.cargoService.update(+id, updateCargoDto);
    }
    remove(id) {
        return this.cargoService.remove(+id);
    }
};
exports.CargoController = CargoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CargoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/filtro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CargoController.prototype, "buscar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cargo_dto_1.UpdateCargoDto]),
    __metadata("design:returntype", void 0)
], CargoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CargoController.prototype, "remove", null);
exports.CargoController = CargoController = __decorate([
    (0, common_1.Controller)('Cargo'),
    __metadata("design:paramtypes", [cargo_service_1.CargoService])
], CargoController);
//# sourceMappingURL=cargo.controller.js.map