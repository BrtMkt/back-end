import { Controller, Get, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Post } from '@nestjs/common';
import { ImportOrExportService } from './import-or-export.service';
import { UpdateImportOrExportDto } from './dto/update-import-or-export.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('import-or-export')
export class ImportOrExportController {
  constructor(private readonly importOrExportService: ImportOrExportService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('arquivo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (_, file, callback) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          callback(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  update(@Body() updateImportOrExportDto: any, @UploadedFile() file: Express.Multer.File,) {
    return this.importOrExportService.execute(updateImportOrExportDto.nomeService, file);
  }

}
