import { Module } from "@nestjs/common";
import { BasisModule } from "./basis.module/basis.module";
import { LogModule } from "./log.module/log.module";

@Module({
    imports: [BasisModule, LogModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
