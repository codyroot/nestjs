import { Global, Module } from "@nestjs/common";
import { ConfigService } from "./config.service";

@Global()
@Module({
    imports: [],
    exports: [ConfigService],
    providers: [ConfigService],
})
export class ConfigModule {}
