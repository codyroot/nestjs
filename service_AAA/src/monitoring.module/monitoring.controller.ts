import { Controller, Get } from "@nestjs/common";
import { setTimeout } from "timers/promises";

@Controller("/metrics-example")
export class MonitoringController {
    @Get("/slow")
    public async slow() {
        await setTimeout(200);
        return "das ist langsam";
    }
}
