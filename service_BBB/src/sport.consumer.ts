import {
  OnQueueActive,
  Process,
  Processor,
  OnQueueProgress,
} from '@nestjs/bull';
import { Job } from 'bull';
import { setTimeout } from 'timers/promises';

@Processor('sport')
export class SportConsumer {
  @Process()
  public async sportConsume(job: Job<unknown>) {
    // public async sportConsume(job: Job<unknown>, cb: DoneCallback) {
    // console.log(await job.);
    // cb(new Error("NOPE JUNGE"));

    await job.progress(1);
    await setTimeout(3000);

    await job.progress(70);

    return `${job.id} return`;
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @OnQueueProgress()
  async onProgress(job: Job) {
    console.log(await job.progress());
  }
}
