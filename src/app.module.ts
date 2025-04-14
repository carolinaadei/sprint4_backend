import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './module/place.module';
import { UserModule } from './module/user.module';

@Module({
  imports: [PlacesModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}