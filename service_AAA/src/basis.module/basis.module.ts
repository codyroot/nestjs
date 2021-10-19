import { Module } from "@nestjs/common";
import { BasisController } from "./basis.controller";
import { BasisService } from "./basis.service";
import { BasisStore } from "./basis.store";

@Module({
    imports: [],
    exports: [],
    controllers: [BasisController],
    providers: [BasisService, BasisStore],
})
export class BasisModule {}
