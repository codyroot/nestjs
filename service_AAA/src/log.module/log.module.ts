import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "../dynamic.config.module/config.module";
import { CONFIG_OPTIONS } from "../dynamic.config.module/config.options";
import { LogService } from "./log.service";

@Global()
@Module({
    imports: [
        ConfigModule.register({
            type: CONFIG_OPTIONS.DEV,
        }),
    ],
    exports: [LogService],
    providers: [LogService],
})
export class LogModule {}
