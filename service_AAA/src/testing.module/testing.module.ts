import { Module } from "@nestjs/common";
import { TestinServiceA } from "./testing-a.service";
import { TestinServiceB } from "./testing-b.service";
import { TestingController } from "./testing.controller";

@Module({
    controllers: [TestingController],
    providers: [TestinServiceA, TestinServiceB],
})
export class TestingModule {}
