"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisoresModule = void 0;
const common_1 = require("@nestjs/common");
const decisores_service_1 = require("./decisores.service");
const decisores_controller_1 = require("./decisores.controller");
const typeorm_1 = require("@nestjs/typeorm");
const decisore_entity_1 = require("./entities/decisore.entity");
let DecisoresModule = class DecisoresModule {
};
exports.DecisoresModule = DecisoresModule;
exports.DecisoresModule = DecisoresModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([decisore_entity_1.Decisores])],
        controllers: [decisores_controller_1.DecisoresController],
        providers: [decisores_service_1.DecisoresService],
    })
], DecisoresModule);
//# sourceMappingURL=decisores.module.js.map