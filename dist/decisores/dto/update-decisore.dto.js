"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDecisoreDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_decisore_dto_1 = require("./create-decisore.dto");
class UpdateDecisoreDto extends (0, mapped_types_1.PartialType)(create_decisore_dto_1.CreateDecisoreDto) {
}
exports.UpdateDecisoreDto = UpdateDecisoreDto;
//# sourceMappingURL=update-decisore.dto.js.map