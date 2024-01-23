import { PartialType } from '@nestjs/mapped-types';
import { CreateDecisoreDto } from './create-decisore.dto';

export class UpdateDecisoreDto extends PartialType(CreateDecisoreDto) {}
