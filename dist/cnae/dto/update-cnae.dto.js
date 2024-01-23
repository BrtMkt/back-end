"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCnaeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cnae_dto_1 = require("./create-cnae.dto");
class UpdateCnaeDto extends (0, mapped_types_1.PartialType)(create_cnae_dto_1.CreateCnaeDto) {
}
exports.UpdateCnaeDto = UpdateCnaeDto;
//# sourceMappingURL=update-cnae.dto.js.map