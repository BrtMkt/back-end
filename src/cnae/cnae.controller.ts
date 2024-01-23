import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CnaeService } from './cnae.service';
import { UpdateCnaeDto } from './dto/update-cnae.dto';

@Controller('cnae')
export class CnaeController {
  constructor(private readonly cnaeService: CnaeService) {}

  @Get()
  findAll() {
    return this.cnaeService.findAll();
  }

  @Post('/filtro')
  buscar(@Body() body: string){
    return this.cnaeService.buscar(body);
  }

  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCnaeDto: UpdateCnaeDto) {
    return this.cnaeService.update(+id, updateCnaeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cnaeService.remove(+id);
  }
}
