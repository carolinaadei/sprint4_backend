import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './module/place.module';
import { UserModule } from './module/user.module';
import { UsersController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserRepository } from './repository/user.repository';
import { AuthModule } from './auth/auth.module';
import { ReportService } from './report/report.service';
import { ReportController } from './report/report.controller';

@Module({
  controllers: [UsersController, ReportController],
  providers: [UserService, UserRepository, ReportService],
  imports: [UserModule, AuthModule],
})
export class AppModule {}