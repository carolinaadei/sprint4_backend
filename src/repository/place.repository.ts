import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePlaceDto } from '../dto/create-place.dto';
import { UpdatePlaceDto } from '../dto/update-place.dto';
import { BlockPlaceDto } from 'src/dto/block-place';

@Injectable()
export class PlacesRepository {
  constructor(private readonly prisma: PrismaService) { }

  create(data: CreatePlaceDto) {
    return this.prisma.place.create({ data });
  }

  findAll() {
    return this.prisma.place.findMany();
  }

  findOne(id: number) {
    return this.prisma.place.findUnique({ where: { id } });
  }

  update(id: number, data: UpdatePlaceDto) {
    return this.prisma.place.update({ where: { id }, data });
  }

  patch(id: number, data: BlockPlaceDto) {
    return this.prisma.place.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.place.delete({ where: { id } });
  }
}
