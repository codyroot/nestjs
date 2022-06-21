import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";

@Injectable()
export class SportProducer {
    constructor(@InjectQueue("sport") private sportQueue: Queue) {
        this.sportQueue.on("completed", async (job) => {
            console.log(job.progress());
            console.log(job.name);

            console.log("completed", await job.getState());
        });
        this.sportQueue.on("failed", async (job) => {
            console.log("failed", await job.getState());
        });
        this.sportQueue.on("error", async (error) => {
            console.log("error", error);
        });
    }

    public async sportQueueAdd() {
        await this.sportQueue.pause();

        return this.sportQueue.add(
            { sieg: false },
            {
                // jobId: 551,
                delay: 1_000,
                // attempts: 0,
                // backoff: 0,
                removeOnComplete: true,
                removeOnFail: true,
                // timeout: 10_000,
            },
        );
    }
}
