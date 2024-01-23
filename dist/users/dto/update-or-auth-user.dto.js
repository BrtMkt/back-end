"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrAuthUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
class UpdateOrAuthUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateOrAuthUserDto = UpdateOrAuthUserDto;
//# sourceMappingURL=update-or-auth-user.dto.js.map