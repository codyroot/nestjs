import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";

@Injectable()
export class SportProducer {
    constructor(@InjectQueue("sport") private sportQueue: Queue) {
        this.sportQueue.on("completed", async (job) => {
            console.log("completed", await job.getState());
            console.log(job.returnvalue);
        });
        this.sportQueue.on("failed", async (job) => {
            console.log("failed", await job.getState());
        });
        this.sportQueue.on("error", async (error) => {
            console.log("error", error);
        });
    }

    public async sportQueueAdd() {
        await this.sportQueue.clean(0, "failed");
        await this.sportQueue.clean(0, "completed");

        return this.sportQueue.add(
            { sieg: false },
            {
                // jobId: 77,
                delay: 2_000,
                attempts: 3,
                // backoff: 5_000,
                removeOnComplete: true,
                removeOnFail: true,
                // timeout: 10_000,
            },
        );
    }
}
