import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SportConsumer } from './sport.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      prefix: 'queue_sport',
      name: 'sport',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SportConsumer],
})
export class AppModule {}
