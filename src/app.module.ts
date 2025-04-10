import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './module/place.module';

@Module({
  imports: [PlacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
