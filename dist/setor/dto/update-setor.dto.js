"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSetorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_setor_dto_1 = require("./create-setor.dto");
class UpdateSetorDto extends (0, mapped_types_1.PartialType)(create_setor_dto_1.CreateSetorDto) {
}
exports.UpdateSetorDto = UpdateSetorDto;
//# sourceMappingURL=update-setor.dto.js.map