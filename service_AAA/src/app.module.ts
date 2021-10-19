import { Module } from "@nestjs/common";
import { BasisModule } from "./basis.module/basis.module";

@Module({
    imports: [BasisModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
