import { AppController } from './app.controller';
import { AppService } from './app.service';
import { } from '@nestjs/axios';
import { Module ,  HttpModule } from "@nestjs/common";


@Module({
  imports: [ HttpModule],
  controllers: [AppController],
  providers: [AppService, AppController],
})
export class AppModule {}
