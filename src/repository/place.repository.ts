import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePlaceDto } from '../controller/dto/create-place.dto';
import { UpdatePlaceDto } from '../controller/dto/update-place.dto';

@Injectable()
export class PlacesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreatePlaceDto) {
    return this.prisma.place.create({ data });
  }

  findAll() {
    return this.prisma.place.findMany();
  }

  findOne(id: string) {
    return this.prisma.place.findUnique({ where: { id } });
  }

  update(id: string, data: UpdatePlaceDto) {
    return this.prisma.place.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.place.delete({ where: { id } });
  }
}
