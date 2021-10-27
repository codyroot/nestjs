import { Module } from "@nestjs/common";
import { BasisModule } from "./basis.module/basis.module";
import { ErrorModule } from "./error.module.ts/error.module";
// import { ConfigModule } from "./dynamic.config.module/config.module";
import { LogModule } from "./log.module/log.module";
import { PipeModule } from "./pipe.module/pipe.module";

@Module({
    imports: [BasisModule, LogModule, PipeModule, ErrorModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
