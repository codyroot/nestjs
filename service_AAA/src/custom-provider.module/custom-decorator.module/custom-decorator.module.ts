import { Module } from "@nestjs/common";
import { CustomProviderController } from "./custom-decorator.controller";

@Module({
    controllers: [CustomProviderController],
})
export class CustomProviderModule {}
