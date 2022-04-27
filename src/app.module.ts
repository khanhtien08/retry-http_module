import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule, Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, AppController],
})
export class AppModule {}
