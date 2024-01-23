import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DecisoresService } from './decisores.service';
import { UpdateDecisoreDto } from './dto/update-decisore.dto';

@Controller('decisores')
export class DecisoresController {
  constructor(private readonly decisoresService: DecisoresService) {}

  @Get()
  findAll() {
    return this.decisoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.decisoresService.findOne(+id);
  }

  @Post('/filtro')
  buscar(@Body() body: string){
    return this.decisoresService.buscar(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDecisoreDto: UpdateDecisoreDto) {
    return this.decisoresService.update(+id, updateDecisoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.decisoresService.remove(+id);
  }
}
