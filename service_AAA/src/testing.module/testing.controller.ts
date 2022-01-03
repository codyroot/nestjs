import { Controller, Get } from "@nestjs/common";
import { TestinServiceA } from "./testing-a.service";
import { TestinServiceB } from "./testing-b.service";

@Controller("/testing")
export class TestingController {
    constructor(public servA: TestinServiceA, public servB: TestinServiceB) {}

    @Get("/aaa")
    getAAA(): string {
        return this.servA.aaa();
    }

    @Get("/bbb")
    getBBB(): string {
        return this.servB.bbb();
    }
}
