import { Injectable } from '@nestjs/common';
import { PlacesRepository } from '../repository/place.repository';
import { CreatePlaceDto } from '../dto/create-place.dto';
import { UpdatePlaceDto } from '../dto/update-place.dto';
import { BlockPlaceDto } from 'src/dto/block-place';

@Injectable()
export class PlacesService {
  constructor(private readonly placesRepository: PlacesRepository) { }

  create(data: CreatePlaceDto) {
    return this.placesRepository.create(data);
  }

  findAll() {
    return this.placesRepository.findAll();
  }

  findOne(id: number) {
    return this.placesRepository.findOne(id);
  }

  update(id: number, data: UpdatePlaceDto) {
    return this.placesRepository.update(id, data);
  }

  patch(id: number, data: BlockPlaceDto) {
    return this.placesRepository.patch(id, data);
  }

  remove(id: number) {
    return this.placesRepository.remove(id);
  }
}