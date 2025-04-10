import { Injectable } from '@nestjs/common';
import { PlacesRepository } from '../repository/place.repository';
import { CreatePlaceDto } from '../controller/dto/create-place.dto';
import { UpdatePlaceDto } from '../controller/dto/update-place.dto';

@Injectable()
export class PlacesService {
  constructor(private readonly placesRepository: PlacesRepository) {}

  create(data: CreatePlaceDto) {
    return this.placesRepository.create(data);
  }

  findAll() {
    return this.placesRepository.findAll();
  }

  findOne(id: string) {
    return this.placesRepository.findOne(id);
  }

  update(id: string, data: UpdatePlaceDto) {
    return this.placesRepository.update(id, data);
  }

  remove(id: string) {
    return this.placesRepository.remove(id);
  }
}