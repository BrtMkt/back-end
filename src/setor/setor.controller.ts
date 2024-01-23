import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SetorService } from './setor.service';
import { CreateSetorDto } from './dto/create-setor.dto';
import { UpdateSetorDto } from './dto/update-setor.dto';

@Controller('setor')
export class SetorController {
  constructor(private readonly setorService: SetorService) {}

  @Get()
  findAll() {
    return this.setorService.findAll();
  }

  @Post('/filtro')
  buscar(@Body() body: string){
    return this.setorService.buscar(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSetorDto: UpdateSetorDto) {
    return this.setorService.update(+id, updateSetorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setorService.remove(+id);
  }
}
