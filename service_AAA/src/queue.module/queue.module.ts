import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { QueueController } from "./queue.controller";
import { SportConsumer } from "./sport.consumer";
import { SportProducer } from "./sport.producer";

@Module({
    imports: [
        BullModule.forRoot({
            redis: {
                host: "localhost",
                port: 6379,
            },
            prefix: "queue_sport",
        }),
        BullModule.registerQueue({
            name: "sport",
        }),
    ],
    controllers: [QueueController],
    providers: [SportProducer, SportConsumer],
})
export class QueueModule {}
