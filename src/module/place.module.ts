import { Module } from '@nestjs/common';
import { PlacesController } from '../controller/place.controller';
import { PlacesService } from '../service/place.service';
import { PlacesRepository } from '../repository/place.repository';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService, PlacesRepository, PrismaService],
})
export class PlacesModule {}