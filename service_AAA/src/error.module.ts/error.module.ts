import { Module } from "@nestjs/common";
import { ErrorController } from "./error.controller";

@Module({
    imports: [],
    exports: [],
    controllers: [ErrorController],
    providers: [],
})
export class ErrorModule {}
