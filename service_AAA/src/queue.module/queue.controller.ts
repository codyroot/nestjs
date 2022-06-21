import { Controller, Get } from "@nestjs/common";
import { SportProducer } from "./sport.producer";

@Controller("/queue")
export class QueueController {
    constructor(private readonly sportProducer: SportProducer) {}

    @Get("/sport")
    public sport() {
        return this.sportProducer.sportQueueAdd();
    }
}
