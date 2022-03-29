import { Controller, Get, OnApplicationBootstrap } from "@nestjs/common";
import { Cron, CronExpression, SchedulerRegistry } from "@nestjs/schedule";
import { CronJob } from "cron";

const CRONNY = "cronny";

@Controller("/scheduling")
export class SchedulingController implements OnApplicationBootstrap {
    constructor(private schedulerRegistry: SchedulerRegistry) {}

    onApplicationBootstrap() {
        this.schedulerRegistry.getCronJob(CRONNY).stop();
        const job = new CronJob(CronExpression.EVERY_5_SECONDS, () => {
            console.log("Custom Cron");
            this.schedulerRegistry.getCronJob("job").stop();
        });

        this.schedulerRegistry.addCronJob("job", job);
        job.start();
    }

    @Get("/stop")
    stop() {
        this.schedulerRegistry.getCronJob(CRONNY).stop();
        return "stop";
    }

    @Get("/start")
    start() {
        this.schedulerRegistry.getCronJob(CRONNY).start();
        return "start";
    }

    @Cron(CronExpression.EVERY_SECOND, {
        name: CRONNY,
    })
    run() {
        console.log("Yope");
    }

    addCronJob(name: string, seconds: string) {}
}
