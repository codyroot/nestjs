import { Controller, Get } from "@nestjs/common";

@Controller("/pipe")
export class PipeController {
    @Get()
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    pipe() {}
}
