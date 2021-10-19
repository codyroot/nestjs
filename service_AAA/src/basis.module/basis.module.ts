import { Module } from "@nestjs/common";
import { BasisController } from "./basis.controller";
import { BasisService } from "./basis.service";

@Module({
    imports: [],
    controllers: [BasisController],
    providers: [BasisService],
})
export class BasisModule {}
