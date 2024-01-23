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
exports.DecisoresController = void 0;
const common_1 = require("@nestjs/common");
const decisores_service_1 = require("./decisores.service");
const update_decisore_dto_1 = require("./dto/update-decisore.dto");
let DecisoresController = class DecisoresController {
    constructor(decisoresService) {
        this.decisoresService = decisoresService;
    }
    findAll() {
        return this.decisoresService.findAll();
    }
    findOne(id) {
        return this.decisoresService.findOne(+id);
    }
    buscar(body) {
        return this.decisoresService.buscar(body);
    }
    update(id, updateDecisoreDto) {
        return this.decisoresService.update(+id, updateDecisoreDto);
    }
    remove(id) {
        return this.decisoresService.remove(+id);
    }
};
exports.DecisoresController = DecisoresController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DecisoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DecisoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/filtro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DecisoresController.prototype, "buscar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_decisore_dto_1.UpdateDecisoreDto]),
    __metadata("design:returntype", void 0)
], DecisoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DecisoresController.prototype, "remove", null);
exports.DecisoresController = DecisoresController = __decorate([
    (0, common_1.Controller)('decisores'),
    __metadata("design:paramtypes", [decisores_service_1.DecisoresService])
], DecisoresController);
//# sourceMappingURL=decisores.controller.js.map