import { Global, Module } from "@nestjs/common";
import { LogService } from "./log.service";

@Global()
@Module({
    imports: [],
    exports: [LogService],
    providers: [LogService],
})
export class LogModule {}
