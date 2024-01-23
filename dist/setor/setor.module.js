"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetorModule = void 0;
const common_1 = require("@nestjs/common");
const setor_service_1 = require("./setor.service");
const setor_controller_1 = require("./setor.controller");
const typeorm_1 = require("@nestjs/typeorm");
const setor_entity_1 = require("./entities/setor.entity");
let SetorModule = class SetorModule {
};
exports.SetorModule = SetorModule;
exports.SetorModule = SetorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([setor_entity_1.Setor])],
        controllers: [setor_controller_1.SetorController],
        providers: [setor_service_1.SetorService],
    })
], SetorModule);
//# sourceMappingURL=setor.module.js.map