import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Controller('Cargo')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @Get()
  findAll() {
    return this.cargoService.findAll();
  }

  @Post('/filtro')
  buscar(@Body() body: string){
    return this.cargoService.buscar(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCargoDto: UpdateCargoDto) {
    return this.cargoService.update(+id, updateCargoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cargoService.remove(+id);
  }
}
