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
exports.CnaeController = void 0;
const common_1 = require("@nestjs/common");
const cnae_service_1 = require("./cnae.service");
const update_cnae_dto_1 = require("./dto/update-cnae.dto");
let CnaeController = class CnaeController {
    constructor(cnaeService) {
        this.cnaeService = cnaeService;
    }
    findAll() {
        return this.cnaeService.findAll();
    }
    buscar(body) {
        return this.cnaeService.buscar(body);
    }
    update(id, updateCnaeDto) {
        return this.cnaeService.update(+id, updateCnaeDto);
    }
    remove(id) {
        return this.cnaeService.remove(+id);
    }
};
exports.CnaeController = CnaeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CnaeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/filtro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CnaeController.prototype, "buscar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cnae_dto_1.UpdateCnaeDto]),
    __metadata("design:returntype", void 0)
], CnaeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CnaeController.prototype, "remove", null);
exports.CnaeController = CnaeController = __decorate([
    (0, common_1.Controller)('cnae'),
    __metadata("design:paramtypes", [cnae_service_1.CnaeService])
], CnaeController);
//# sourceMappingURL=cnae.controller.js.map