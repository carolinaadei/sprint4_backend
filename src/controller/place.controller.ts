
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreatePlaceDto, UpdatePlaceDto, ListAllEntities } from './dto';

@Controller('Places')
export class PlacesController {
  @Post()
  create(@Body() CreatePlaceDto: CreatePlaceDto) {
    return 'This action adds a new Place';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all Places (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} Place`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return `This action updates a #${id} Place`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} Place`;
  }
}