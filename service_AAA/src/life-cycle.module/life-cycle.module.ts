import { Module } from "@nestjs/common";
import { LifecycleController } from "./life-cycle.controller";

@Module({
    controllers: [LifecycleController],
})
export class LifecycleModule {}
