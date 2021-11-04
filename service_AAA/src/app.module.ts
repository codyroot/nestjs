import { Module } from "@nestjs/common";
import { BasisModule } from "./basis.module/basis.module";
import { ErrorModule } from "./error.module.ts/error.module";
import { PipeModule } from "./pipe.module/pipe.module";

@Module({
    imports: [BasisModule, PipeModule, ErrorModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
