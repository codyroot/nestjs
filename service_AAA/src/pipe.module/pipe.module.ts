import { Module } from "@nestjs/common";
import { PipeController } from "./pipe.controller";

@Module({
    imports: [],
    exports: [],
    controllers: [PipeController],
    providers: [],
})
export class PipeModule {}
