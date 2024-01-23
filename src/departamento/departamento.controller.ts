import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@Controller('departamento')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Get()
  findAll() {
    return this.departamentoService.findAll();
  }

  @Post('/filtro')
  buscar(@Body() body: string){
    return this.departamentoService.buscar(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartamentoDto: UpdateDepartamentoDto) {
    return this.departamentoService.update(+id, updateDepartamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departamentoService.remove(+id);
  }
}
