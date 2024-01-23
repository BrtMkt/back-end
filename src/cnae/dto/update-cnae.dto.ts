import { PartialType } from '@nestjs/mapped-types';
import { CreateCnaeDto } from './create-cnae.dto';

export class UpdateCnaeDto extends PartialType(CreateCnaeDto) {}
