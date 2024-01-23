import { PartialType } from '@nestjs/mapped-types';
import { CreateImportOrExportDto } from './create-import-or-export.dto';

export class UpdateImportOrExportDto extends PartialType(CreateImportOrExportDto) {}
