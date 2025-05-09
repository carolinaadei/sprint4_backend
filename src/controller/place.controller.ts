import { Controller, Get, Query, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { PlacesService } from '../service/place.service';
import { CreatePlaceDto } from '../dto/create-place.dto';
import { UpdatePlaceDto } from '../dto/update-place.dto';
import { BlockPlaceDto } from '../dto/block-place';

@Controller('room')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) { }

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  findAll() {
    return this.placesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.placesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePlaceDto: UpdatePlaceDto) {
    console.log('entrou aqui com', updatePlaceDto)
    return this.placesService.update(id, updatePlaceDto);
  }

  //Bloquear/Desbloquear Sala
  @Patch(':id')
  patch(@Param('id') id: number, @Body() blockPlaceDto: BlockPlaceDto) {
    return this.placesService.patch(id, blockPlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.placesService.remove(id);
  }
}