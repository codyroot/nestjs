import { Process, Processor } from "@nestjs/bull";
import { DoneCallback, Job } from "bull";

@Processor("sport")
export class SportConsumer {
    @Process()
    public async sportConsume(job: Job<unknown>, cb: DoneCallback) {
        // console.log(await job.);
        // cb(new Error("NOPE JUNGE"));

        cb(null, "pong");

        console.log(job.id, job.data);
    }
}
