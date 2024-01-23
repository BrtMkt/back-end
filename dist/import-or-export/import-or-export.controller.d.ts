/// <reference types="multer" />
import { ImportOrExportService } from './import-or-export.service';
export declare class ImportOrExportController {
    private readonly importOrExportService;
    constructor(importOrExportService: ImportOrExportService);
    update(updateImportOrExportDto: any, file: Express.Multer.File): void;
}
